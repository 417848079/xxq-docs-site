## 1.拉取镜像

```
docker pull registry.cn-hangzhou.aliyuncs.com/anjoy8/centos:7
```
## 2.运行容器
```
docker run -itd --name centos7 registry.cn-hangzhou.aliyuncs.com/anjoy8/centos:7
# 以特权模式运行
docker run -d --name centos7 --privileged=true centos:7 /usr/sbin/init
```

## 3.进去容器
```
docker exec -it centos7 /bin/bash
```