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
docker run -p 3306:3306 --name mysql8 --privileged=true -v /app/docker/mysql/log:/var/log/mysql -v /app/docker/mysql/data:/var/lib/mysql -v /app/docker/mysql/conf:/etc/mysql -v /app/docker/mysql/mysql-files:/var/lib/mysql-files -e MYSQL_ROOT_PASSWORD=root -d mysql:8
```

- ### 3.进入容器

```bash
docker exec -it mysql8 /bin/bash
```
