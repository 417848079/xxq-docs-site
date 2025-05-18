#index

## 运行卡住解决

### gradle 配置指南

```gradle
allprojects {
  repositories {
    maven {
      url 'https://maven.aliyun.com/repository/public/'
    }
    maven {
      url 'https://maven.aliyun.com/repository/central'
    }
    mavenLocal()
    mavenCentral()
  }
}
```

### 手动清除或者 build

    - android目录下
      ```sh
      ./gradlew clean
      ./gradlew build
      ```

### 解决 Gradle 下载 kotlin-compiler-embeddable-1.9.20.jar 过慢问题

- #### 1.最快捷解决方案 - 手动下载并放置（推荐）
  - ##### 1.手动下载
    - 访问 [Maven Central](https://repo1.maven.org/maven2/org/jetbrains/kotlin/kotlin-compiler-embeddable/1.9.20/)
    - 手动下载 kotlin-compiler-embeddable-1.9.20.jar 文件
- #### 2.放置到 Gradle 缓存目录：

  Windows 路径:  
   `
C:\Users\X1290\.gradle\caches\modules-2\files-2.1\org.jetbrains.kotlin\kotlin-compiler-embeddable\1.9.20\`  
   将下载的 jar 文件放入随机命名的子文件夹中（通常是一个哈希值命名的文件夹）

- #### 2. 配置镜像源（长期有效）
  在项目根目录的 build.gradle 或 settings.gradle 中添加：
  ```groovy
  pluginManagement {
    repositories {
        maven { url 'https://maven.aliyun.com/repository/public' }
        maven { url 'https://maven.aliyun.com/repository/google' }
        maven { url 'https://maven.aliyun.com/repository/gradle-plugin' }
        gradlePluginPortal()
    }
  }
  ```

  ## 开发flutter用到的插件（Android studio）
  - flutter
  - jsonToDart
