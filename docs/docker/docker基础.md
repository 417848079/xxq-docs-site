## 1. 通用DockerFile文件
```
FROM Nginx
COPY ./dist /usr/share/nginx/html

```

## 2.追加docker已运行容器添加或修改端口映射方法
```bash
docker stop A
docker commit A imageA #将容器commit提交成为一个镜像
docker rm A #删除原镜像
docker run -d -p 80:80 --name A imageA #启动新镜像
```