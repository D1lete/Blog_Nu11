package com.ican.service.impl;

import com.UpYun;
import com.ican.config.properties.UpYunConfig;
import com.ican.service.UpYunService;
import com.ican.utils.CodeCreateUtils;
import com.upyun.RestManager;
import com.upyun.UpException;
import okhttp3.HttpUrl;
import okhttp3.Response;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;
import org.springframework.web.multipart.MultipartFile;

import java.io.IOException;
import java.util.HashMap;

@Service
public class UpYunServiceImpl implements UpYunService {

    @Autowired
    private UpYunConfig upYunConfig;

    @Override
    public String upLoadImage(MultipartFile file) {
//        UpYun upYun = new UpYun(upYunConfig.getBucketName(), upYunConfig.getUsername(), upYunConfig.getPassword());
        RestManager manager = new RestManager(upYunConfig.getBucketName(), upYunConfig.getUsername(), upYunConfig.getPassword());

        String format = file.getOriginalFilename().substring(file.getOriginalFilename().lastIndexOf(".") + 1);
        String name = file.getOriginalFilename().substring(0,file.getOriginalFilename().lastIndexOf("."));
        String fileName = "/blog_new/" +name +  "." + format;
        try{
//            String s = upYun.readFile(fileName);
            Response response = manager.readFile(fileName);
            fileName = "/blog_new/" +name + CodeCreateUtils.get4Code(4) + "." + format;
        }catch (Exception e){
            e.printStackTrace();
        }
        String firstPicture = "";
        try {
//            upYun.writeFile(fileName, file.getInputStream(), true, new HashMap<>());
            Response response = manager.writeFile(fileName, file.getInputStream(),new HashMap<>());
            firstPicture = "https://img.gasaiyuno.top" +  fileName;
        } catch (IOException e) {
            e.printStackTrace();
        } catch (UpException e) {
            e.printStackTrace();
        }


        return firstPicture;
    }
}
