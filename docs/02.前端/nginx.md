# nginx

## nginx常用命令-win

进入nginx安装目录  

- 重启 `nginx.exe -s reload`
- 停止 `nginx.exe -s quit`
- 终止进程 `taskkill /IM nginx.exe /F`

## 代理

```nginx
location /storage/ {
    proxy_pass   http://jiashui.slshop/storage/;
}
```

## 配置文件下载

```nginx
 server {
      listen 4001;
      server_name  localhost;
      charset utf-8; # 支持中文显示

      # 启用目录列表
      location / {
          # 根目录设置
          root F:/opt/downloads;
          # 启用目录列表
          autoindex on;  
  
         # 以更人性化的格式显示文件大小
          autoindex_exact_size off; 
          # 以服务器本地时间显示文件时间
          autoindex_localtime on; 
          # 设置字符集为 UTF-8
          # charset utf-8; 
          # 确保请求的文件或目录存在，否则返回 404
          try_files $uri $uri/ =404; 
          
          # add_header Content-Type appliction/octet-stream;
          # add_header Content-Disposition attachment;
       
      }

      # 禁止访问上级目录，防止目录遍历攻击
      location ~ /\.\./ {
          deny all;
      }

      # 禁止访问 .js* 文件
      location ~ /\.js {
          deny all;
      }
    }
```

## Vue Router 用了 History 模式并配置了baseUrl，Nginx的配置

```nginx
server {
    listen       80;
    server_name localhost;      # 匹配你的域名/localhost
    root /usr/share/nginx/html;

    # 关键配置：History 模式 fallback，所有请求转发到 index.html
    location /test/ {
          # 指向 Vue 打包后的 dist 目录
        index /test/index.html;           # 访问目录时默认返回 index.html
        try_files $uri $uri/ /test/index.html;  # 核心指令，解决 /login 404
    }

    #error_page  404              /404.html;

    # redirect server error pages to the static page /50x.html
    #
    error_page   500 502 503 504  /50x.html;
    location = /50x.html {
        root   /usr/share/nginx/html;
    }
}
```

- ### dockerFile文件

 ```dockerfile
 # 使用nginx作为基础镜像
FROM nginx:stable-alpine

# 复制本地已构建的dist目录到nginx的html目录
COPY ./dist-prod /usr/share/nginx/html/test/

# 可选：复制自定义nginx配置（处理前端路由等）
COPY nginx.conf /etc/nginx/conf.d/default.conf

# 暴露80端口
EXPOSE 80

# 启动nginx服务
CMD ["nginx", "-g", "daemon off;"]

 ```
