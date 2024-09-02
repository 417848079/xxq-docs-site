## 一、Redis 常用的数据类型：

- String
- Hash
- List
- Set
- zSet
- Sorted set

## 二、RedisTemplate 常用 API

- 1. String 类型
  - 1.1 判断是否有 key 所对应的值，有则返回 true，没有则返回 false；
    ```java
    redisTemplate.hasKey(key);
    ```
  - 1.2 有则取出key值所对应的值；
    ```java
    redisTemplate.opsForValue().get(key);
    ```
  - 1.3 存入 key-value 对，并设置过期时间；
    ```java
    redisTemplate.opsForValue().set(key, value, timeout, timeUnit);
    ```
  - 1.4 删除单个key值；
    ```java
    redisTemplate.delete(key);
    ```
