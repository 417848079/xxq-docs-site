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
