# Spring

## @RequestBody

- 一般用来处理请求头中的参数，用来处理Content-Type= application/x-www-form-urlencoded编码的内容

## @RequestParam

- 一般用来处理请求体中的参数，Content-Type不等于 application/x-www-form-urlencoded

## 1.Spring cache常用注解

- @EnableCaching 开启缓存 通常加在主启动类上
- @Cacheable 触发缓存逻辑，先查询数据库，如果命中缓存则直接返回，否则更新缓存并返回结果。
- @CachePut 触发缓存更新逻辑
- @CacheEvict 清除缓存
- @Caching 定义复杂的缓存规则

## 2.Spring cache使用场景

### 2.1 缓存穿透

- 缓存穿透是指查询一个一定不存在的数据，由于缓存是不命中时被动填充的，并且请求都打到了DB，导致DB压力过大。
- 解决方案：布隆过滤器

### 2.2 缓存击穿

- 缓存击穿是指访问一个热点key，由于热点key在过期的一瞬间，恰好有大量并发请求过来，这些请求都会去查库，导致DB压力过大。
- 解决方案：互斥锁、设置永不过期

### 2.3 缓存雪崩

- 缓存雪崩是指缓存同一时间大面积失效，这个时候又来了一波请求，结果请求都推到了后端系统，导致其崩溃。
- 解决方案：随机过期时间
