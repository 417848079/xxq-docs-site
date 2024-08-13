## docker 安装 redis

- ## 1.注意

  - a. 启动前需要先创建 Redis 外部挂载的配置文件 （ /home/redis/conf/redis.conf ）
  - b. 之所以要先创建 , 是因为 Redis 本身容器只存在 /etc/redis 目录 , 本身就不创建 redis.conf 文件
  - c. 当服务器和容器都不存在 redis.conf 文件时, 执行启动命令的时候 docker 会将 redis.conf 作为目录创建 , 这并不是我们想要的结果 。

  ```
  # 创建目录
  mkdir -p /mydata/redis/conf
  mkdir -p /mydata/redis/data

  # 创建文件

  touch /mydata/redis/conf/redis.conf
  ```

- ## 2. 创建 redist 容器并启动

  ```
  docker run -p 6379:6379 --name redis -v /mydata/redis/conf/redis.conf:/etc/redis/redis.conf -v /mydata/redis/data:/data -d redis redis-server /etc/redis/redis.conf --appendonly yes
  ```

  | 命令                                                                           | <center>功能 </center>                                                                                                            |
  | :----------------------------------------------------------------------------- | :-------------------------------------------------------------------------------------------------------------------------------- |
  | docker run                                                                     | 这是 Docker 用来创建并运行一个新的容器的命令                                                                                      |
  | -- restart=always                                                              | 如果容器退出，这个选项会使得它自动重启                                                                                            |
  | --log-opt max-size=100m                                                        | 这是对容器日志的设置，最大大小为 100MB                                                                                            |
  | --log-opt max-file=2                                                           | 这是对容器日志文件的设置，最多可以有 2 个日志文件                                                                                 |
  | -p 6379:6379                                                                   | 这是端口映射的设置，将宿主机的 6379 端口映射到容器的 6379 端口                                                                    |
  | --name redis                                                                   | 这是给新创建的容器命名的选项，名字是 "redis"                                                                                      |
  | redis redis-server /etc/redis/redis.conf --appendonly yes --requirepass 123456 | 这是容器内要运行的命令，启动 Redis 服务，使用 /etc/redis/redis.conf 配置文件，设置追加写入(appendonly)为 yes，设置密码为 "123456" |

- ## 3 .Redis 配置文件修改

  ```
  # 修改 /mydata/redis/conf/redis.conf
  protected-mode no
  bind 0.0.0.0
  ```

  | 命令              | <center>功能</center>                                                      |
  | ----------------- | -------------------------------------------------------------------------- |
  | protected-mode no | 关闭 protected-mode 模式，此时外部网络可以直接访问 (docker 貌似自动开启了) |
  | bind 0.0.0.0      | 设置所有 IP 都可以访问 (docker 貌似自动开启了)                             |

- ## 4.redis.conf 文件

  ```
  #注释掉这部分，这是限制redis只能本地访问
  bind 127.0.0.1

  #默认yes，开启保护模式，限制为本地访问
  protected-mode no

  #默认no，改为yes意为以守护进程方式启动，可后台运行，除非kill进程，改为yes会使配置文件方#式启动redis失败
  daemonize no

  #redis持久化（可选）
  appendonly yes

  #设置密码
  requirepass 123456
  ```
