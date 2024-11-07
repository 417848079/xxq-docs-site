## 1.settings.xml 配置

```xml
<?xml version="1.0" encoding="UTF-8"?>
<settings xmlns="http://maven.apache.org/SETTINGS/1.0.0"
    xmlns:xsi="http://www.w3.org/2001/XMLSchema-instance"
    xsi:schemaLocation="http://maven.apache.org/SETTINGS/1.0.0 http://maven.apache.org/xsd/settings-1.0.0.xsd">
    <!--本地仓库。该值表示构建系统本地仓库的路径。其默认值为${user.home}/.m2/repository。  -->
    <!-- <localRepository>D:\Maven\repository</localRepository> -->
    <!--配置服务端的一些设置。如果局域网内部有nexus,需要管理项目jar包可配置 -->
    <servers>
    </servers>
    <!--为仓库列表配置的下载镜像列表-->
    <mirrors>
    <mirror>
        <id>alimaven</id>
        <mirrorOf>central</mirrorOf>
        <name>阿里云公共仓库</name>
        <url>https://maven.aliyun.com/repository/public</url>
    </mirror>
  </mirrors>
</settings>

```
