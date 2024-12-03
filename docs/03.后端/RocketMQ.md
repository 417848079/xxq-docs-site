# RocketMQ

## 1.MQ的作用

- 异步 送快递
- 解耦 翻译
- 削峰 三峡大坝  秒杀

## 2.配置

```bash
vi /rocketmq/conf/broker.conf

#加入以下内容

#自动创建topic
autoCreateTopicEnable=true 
#存储路径
storePathRootDir=/app/rocketmq/store
storePathCommitLog=/app/rocketmq/store/commitlog
sstorePathConsumeQueue=/app/rocketmq/store/consumequeue
storePathIndex=/app/rocketmq/store/index
storeCheckpoint=/app/rocketmq/store/checkpoint
abortFile=/app/rocketmq/store/abort

```

## 3.启动

```bash
cd /rocketmq
nohup  bin/mqnamesrv & # 后台启动
less nohup.out # 查看日志

vi ~/.bash_profile # 加入以下内容

export NAMESRV_ADDR=192.168.0.3:9876

source ~/.bash_profile # 生效

# 启动broker服务
cd /app/rocketmq
nohup bin/mqbroker -c conf/broker.conf &

tail nohup.out  # 查看日志

# 启动成功的关键日志
The broker[localhost, 192.168.0.3:10911] boot success. serializeType=JSON and name server is 192.168.0.3:9876

# 报错There is insufficient memory for the Java Runtime Environment to continue.
# Native memory allocation (mmap) failed to map 8589934592 bytes for committing reserved memory.
# An error report file with more information is saved as:
# 修改bin 下的 3 个配置文件： runserver.sh、runbroker.sh 、tools.sh 。
# 设置 runserver.sh 中此项配置 为：
JAVA_OPT="${JAVA_OPT} -server -Xms256m -Xmx256m -Xmn512m -XX:MetaspaceSize=128m -XX:MaxMetaspaceSize=320m"
#设置 runbroker.sh 中此项配置 为：
JAVA_OPT="${JAVA_OPT} -server -Xms256m -Xmx256m -Xmn128m"
#设置 tools.sh 中此项配置 为：
JAVA_OPT="${JAVA_OPT} -server -Xms256m -Xmx256m -Xmn256m -XX:PermSize=128m -XX:MaxPermSize=128m"



```
