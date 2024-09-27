# Dockerfile打包各种项目

## 1.打包springboot项目

  ```dockerfile
  # 使用官方的OpenJDK镜像作为基础镜像
  FROM openjdk:8-jdk-alpine
  # 设置工作目录
  WORKDIR /app
  # 复制构建好的JAR包到容器中
  COPY ./target/authority-system-1.0.jar /app/app.jar
  # 暴露端口
  EXPOSE 8083
  # 运行应用
  CMD ["java", "-jar", "app.jar"]
  ```

## 2.打包前端项目

  ```dockerfile
  FROM nginx:1.15.2-alpine
  COPY ./dist /usr/share/nginx/html
  COPY ./configs/nginx.conf /etc/nginx/conf.d/default.conf
  EXPOSE 80
  # RUN chmod  -R 777 /usr/share/nginx/html
  # CMD ["nginx", "-g", "daemon off;"]
  ```
  