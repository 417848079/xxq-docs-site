# docker基础

## 1. 通用DockerFile文件

```dockerfile
FROM Nginx
COPY ./dist /usr/share/nginx/html

```

## 2. 基础命令

```bash
docker images #查看镜像
docker images -aq #查看所有镜像的id
docker images rm $(docker images -aq) #删除所有镜像
docker rmi 镜像名称 #删除镜像

docker ps #查看正在运行的容器
docker ps -a #查看所有容器
docker ps -aq #查看所有容器的id


docker build -t 镜像名称:版本号 . #构建镜像
docker run -d -p 8081:80 -v /root/home:/home --name 容器名称 镜像名称 #运行镜像 -d后台运行 -p端口映射 80端口映射到8081 -v 目录映射 把本地目录映射到容器/home目录 --name 容器名称

docker container ls # 查看正在运行的容器
docker container ls -a #查看所有容器
docker inspect 容器名称 #查看容器详细信息
dockr exec -it 容器名称 /bin/bash #进入容器
docker stop 容器名称 #停止容器

docker rm 容器名称 #删除容器

docker rm $(docker ps -aq) #删除所有容器
```

## 2.追加docker已运行容器添加或修改端口映射方法

```bash
docker stop A
docker commit A imageA #将容器commit提交成为一个镜像
docker rm A #删除原镜像
docker run -d -p 80:80 --name A imageA #启动新镜像
```
