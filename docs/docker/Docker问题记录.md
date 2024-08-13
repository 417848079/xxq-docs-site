## 1.docker运行jenkins案例
- 1. 运行
    ```
    docker run -di --name=jenkins -p 8080:8080 -v /mydata/jenkins_home/:/var/jenkins_home jenkins/jenkins:lts
    ```
- 2.如果没运行则可能没有权限，输入命令
    ```
    chown -R 1000:1000 /mydata/jenkins_home
    ```
## 2.容器启动失败
```
报错 Error: (HTTP code 500) server error - Ports are not available: exposing port TCP 0.0.0.0:8080 -> 0.0.0.0:0: listen tcp 0.0.0.0:8080: bind: An attempt was made to access a socket in a way forbidden by its access permissions.

```
- 1. 基础知识
        - Docker端口映射：Docker允许你将容器内部的端口映射到宿主机的端口，从而可以访问容器内运行的服务。
        - Windows NAT服务：Windows NAT（网络地址转换）服务，也称为WinNAT，是Windows中负责管理端口映射和网络路由的组件
- 2. 核心概念
        - WinNAT服务：在Windows上，Docker容器的网络通信依赖于WinNAT服务来进行端口映射。
- 3. 问题原因
        - WinNAT服务故障：当WinNAT服务出现问题或配置不当时，可能会导致端口映射失败。
- 4. 解决办法
        - 重启WinNAT服务：通过停止并重新启动WinNAT服务，可以解决一些临时的网络配置问题或重置网络状态。
        ```
        net stop winnat  // 停止WinNAT服务
        net start winnat // 重新启动WinNAT服务
        ```
## 3. 进入nginx容器
```sh
docker exec -it 容器id或容器名 /bin/bash
```
## 4.windows下docker运行mysql5.7
```
docker run -p 3306:3306 --name mysql -v d:/work/mydata/mysql/log:/var/log/mysql -v d:/work/mydata/mysql/data:/var/lib/mysql -v d:/work/mydata/mysql/conf:/etc/mysql/conf.d -e MYSQL_ROOT_PASSWORD=root -d mysql:5.7
```