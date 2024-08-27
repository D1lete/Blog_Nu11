package com.ican.service;

import com.upyun.UpException;
import org.springframework.web.multipart.MultipartFile;

import java.io.IOException;

public interface UpYunService {

    String upLoadImage(MultipartFile file);

}
