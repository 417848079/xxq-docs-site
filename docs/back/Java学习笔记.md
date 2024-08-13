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
