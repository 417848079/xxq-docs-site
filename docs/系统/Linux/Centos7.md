# centos7

## 1. 安装 docker

- ### 1. 环境准备

  - 确保您的 CentOS 7 系统为 64 位，且内核版本在 3.10 以上。
  - 可以通过 cat /etc/centos-release 查看系统版本，通过 uname -r 查看内核版本。

- #### 2 . 卸载旧版本（如果已安装）

  - 如果系统中已安装了旧版本的 Docker，需要先卸载。可以使用以下命令：

  ```bash
  sudo yum remove docker \
                  docker-client \
                  docker-client-latest \
                  docker-common \
                  docker-latest \
                  docker-latest-logrotate \
                  docker-logrotate \
                  docker-selinux \
                  docker-engine-selinux \
                  docker-engine
  ```

  - #### 3. 安装依赖包

  ```bash
  sudo yum install -y yum-utils device-mapper-persistent-data lvm2
  ```

  - #### 4. 设置 Docker 仓库

    - 为了安装 Docker CE（Community Edition），需要设置 Docker 的官方仓库。可以通过以下两种方式之一进行设置：

      - 方法一：使用 yum-config-manager 添加 Docker 的官方仓库。

        ```bash
          sudo yum-config-manager --add-repo https://download.docker.com/linux/centos/docker-ce.repo

          或者使用阿里云镜像仓库。
          sudo yum-config-manager --add-repo http://mirrors.aliyun.com/docker-ce/linux/centos/docker-ce.repo
        ```

      - 方法二：（可选）：手动创建仓库配置文件。

        ```bash
          sudo mkdir -p /etc/yum.repos.d/
          cat <<EOF > /etc/yum.repos.d/docker-ce.repo
          [docker-ce-stable]
          name=Docker CE Stable - $basearch
          baseurl=https://download.docker.com/linux/centos/7/$basearch/stable
          enabled=1
          gpgcheck=1
          gpgkey=https://download.docker.com/linux/centos/gpg
          EOF
        ```

  - #### 5. 安装 Docker CE

    **更新 yum 缓存，并安装 Docker CE。可以选择安装最新版本或指定版本。**

    ```bash
      sudo yum makecache fast
      sudo yum install docker-ce docker-ce-cli containerd.io
    ```

    **如果要安装特定版本的 Docker CE，可以使用 yum list docker-ce --showduplicates | sort -r 查看所有可用版本，然后使用 yum install docker-ce-<VERSION_STRING>进行安装。**

  - #### 6. 启动 Docker

    **安装完成后，启动 Docker 服务，并将其设置为开机自启。**

    ```bash
    sudo systemctl start docker
    sudo systemctl enable docker
    ```

  - #### 7. 检查 Docker 是否安装成功

    ```bash
     docker --version
    ```

  - #### 8. 配置 Docker 镜像加速（可选）

    为了提高 Docker 镜像的下载速度，可以配置 Docker 镜像加速。这通常涉及到修改/etc/docker/daemon.json 文件，添加镜像加速地址。

    ```bash
    sudo mkdir -p /etc/docker
    sudo tee /etc/docker/daemon.json <<-'EOF'
    {
      "registry-mirrors": ["https://<your-mirror-url>"]
    }
    EOF

    
    sudo systemctl daemon-reload
    sudo systemctl restart docker
    ```

## 2. 配置 yum 阿里源

```bash
curl -o /etc/yum.repos.d/CentOS-Base.repo http://mirrors.aliyun.com/repo/Centos-7.repo
# 新镜像源
清除缓存：yum clean all
生成缓存：yum makecache

# 备份CentOS 7系统自带yum源配置文件
mv /etc/yum.repos.d/CentOS-Base.repo /etc/yum.repos.d/CentOS-Base.repo.backup
```
