## 数据类型

- java 中字符串不是基本数据类型，而是引用数据类型 ，是一个类
  | 类型 | 占用存储空间 | 表数范围 |
  | ------ | ------------ | ----------------------------------- |
  | byte | 1 字节 | -2<sup>7</sup> ~ 2<sup>7</sup> -1 |
  | short | 2 字节 | -2<sup>15</sup> ~ 2<sup>15</sup> -1 |
  | int | 4 字节 | -2<sup>31</sup> ~ 2<sup>31</sup> -1 |
  | long | 8 字节 | -2<sup>63</sup> ~ 2<sup>63</sup> -1 |
  | float | 4 字节 | -3.403E38~3.403E38 |
  | double | 8 字节 | -1.798E308~1.798E308 |

## 1. contains

contains 方法通常用于检查某个集合（如 List、Set）是否包含特定的元素，或者字符串是否包含特定的子字符串。

```java
  public static void main(String[] args){
   String url = "https://www.google.com";
   System.out.println(url.contains("google"));  // true
 }
```

## 2. equals

默认情况下，Object 类的 equals() 方法是比较两个对象的引用是否相同，即只有当两个引用指向内存中的同一个对象时，equals() 方法才会返回 true。
