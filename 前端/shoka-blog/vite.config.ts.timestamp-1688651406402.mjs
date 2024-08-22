// vite.config.ts
import vue from "file:///F:/vue_workspace/blog-vue/shoka-blog/node_modules/@vitejs/plugin-vue/dist/index.mjs";
import path from "path";
import AutoImport from "file:///F:/vue_workspace/blog-vue/shoka-blog/node_modules/unplugin-auto-import/dist/vite.js";
import { NaiveUiResolver } from "file:///F:/vue_workspace/blog-vue/shoka-blog/node_modules/unplugin-vue-components/dist/resolvers.mjs";
import Components from "file:///F:/vue_workspace/blog-vue/shoka-blog/node_modules/unplugin-vue-components/dist/vite.mjs";
import { defineConfig } from "file:///F:/vue_workspace/blog-vue/shoka-blog/node_modules/vite/dist/node/index.js";
import { prismjsPlugin } from "file:///F:/vue_workspace/blog-vue/shoka-blog/node_modules/vite-plugin-prismjs/dist/index.js";
import { createSvgIconsPlugin } from "file:///F:/vue_workspace/blog-vue/shoka-blog/node_modules/vite-plugin-svg-icons/dist/index.mjs";
var __vite_injected_original_dirname = "F:\\vue_workspace\\blog-vue\\shoka-blog";
var vite_config_default = defineConfig({
  plugins: [
    vue(),
    AutoImport({
      imports: ["vue", "vue-router", "pinia"],
      dts: "src/types/auto-imports.d.ts"
    }),
    Components({
      resolvers: [NaiveUiResolver()],
      dts: "src/types/components.d.ts"
    }),
    createSvgIconsPlugin({
      iconDirs: [path.resolve(process.cwd(), "src/assets/icons")],
      symbolId: "icon-[dir]-[name]"
    }),
    prismjsPlugin({
      languages: [
        "java",
        "python",
        "html",
        "css",
        "sass",
        "less",
        "go",
        "cpp",
        "c",
        "js",
        "ts",
        "sql",
        "bash",
        "git",
        "nginx",
        "php"
      ],
      theme: "tomorrow",
      css: true
    })
  ],
  resolve: {
    alias: {
      "~": path.resolve(__vite_injected_original_dirname, "./"),
      "@": path.resolve(__vite_injected_original_dirname, "./src")
    },
    extensions: [".mjs", ".js", ".ts", ".jsx", ".tsx", ".json", ".vue"]
  },
  server: {
    open: true,
    proxy: {
      "/api": {
        target: "http://124.222.223.196:8080",
        // target: "http://127.0.0.1:8080",
        changeOrigin: true,
        rewrite: (path2) => path2.replace(/^\/api/, "")
      }
    }
  }
});
export {
  vite_config_default as default
};
