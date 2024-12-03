# docker安装常用工具

## 1.win docker安装MySql

  1.拉取MySql镜像

  ```cmd
  docker pull mysql:5.7
  ```

## 2.docker安装MySql8

- ### 1.拉取MySql镜像

```bash
docker pull mysql:8.0
```

- ### 2.创建容器

```bash
docker run -p 3306:3306 --name mysql8 --privileged=true -v /app/docker/mysql/log:/var/log/mysql -v /app/docker/mysql/data:/var/lib/mysql -v /app/docker/mysql/conf:/etc/mysql/conf.d -v /app/docker/mysql/mysql-files:/var/lib/mysql-files -e MYSQL_ROOT_PASSWORD=root -d mysql:8
```

- ### 3.开启远程访问

```bash
docker exec -it mysql8 /bin/bash
mysql -u root -p # 登录mysql
use mysql; # 切换到mysql库
grant all privileges  on *.* to root@'%'with grant option; # 开启远程访问
update user set host='%' where user ='root'; # 刷新权限
alter user 'root'@'%' identified  BY 'root' password expire never; # 修改密码永不过期
alter user 'root'@'%' identified with mysql_native_password by 'root'; # 修改密码
flush privileges; # 刷新权限
```

## 3.docker安装Redis

- ### 1.拉取Redis镜像

```bash
docker pull redis
```

- ### 2.创建容器

```bash
docker run -p 6379:6379 --name redis -v /mydata/redis/conf/redis.conf:/etc/redis/redis.conf -v /mydata/redis/data:/app/redis -d redis redis-server /etc/redis/redis.conf 
```
