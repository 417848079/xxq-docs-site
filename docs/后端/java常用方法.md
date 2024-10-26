# java常用方法

## 1.属性拷贝

```java
BeanUtils.copyProperties(source, target); //source：源对象，即属性值从这个对象中读取。target：目标对象，即属性值将被复制到这个对象中
```

## 2.检查集合（如 List, Set, Map 等）或字符串（String）是否为空

```java
list.isEmpty(); // 判断集合是否为空
```
