# java 学习笔记

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

## 转义字符

| 转义字符 | 含义   | Unicode 值 |
| -------- | ------ | ---------- |
| \b       | 退格符 | \u0008     |
| \n       | 换行符 | \u000a     |
| \r       | 回车符 | \u000d     |
| \t       | 制表符 | \u0009     |
| \f       | 换页符 | \u000c     |
| \+"      | 引号   | \u0022     |
| \+'      | 单引号 | \u0027     |
| \\       | 反斜杠 | \u005c     |

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

## 创建线程的三种方式

- 继承 Thread 类

  ```java
  class MyThread1 extends Thread{
    @Override
    public void run() {
        System.out.println("MyThread1");
    }
  }
  ```

- 实现 Runnable 接口

  ```java
  class MyThread2 implements Runnable{
    @Override
    public void run() {
        System.out.println("MyThread2");
    }
  }
  ```

- 实现 Callable 接口

  ```java
  class MyThread3 implements Callable<Integer>{
    @Override
    public Integer call() throws Exception {
        System.out.println("MyThread3");
        return 100;
    }
  }
  ```

## @PathParam (JAX-RS)

- #### 提取 URI 中的路径参数

  当客户端发起一个 RESTful 请求时，请求的 URI 可能包含一些动态的部分，这些部分被称为路径参数。@PathParam 注解允许开发者从请求的 URI 中提取这些路径参数的值，并将它们作为资源方法（即处理请求的 Java 方法）的参数。

  ```java
  import javax.ws.rs.GET;
  import javax.ws.rs.Path;
  import javax.ws.rs.PathParam;
  import javax.ws.rs.core.Response;

  // 定义书籍资源的根路径
  @Path("/books")
  public class BookResource {

      // 使用 @Path 和 {isbn} 定义一个路径模板，其中 {isbn} 是一个路径参数
      // 当请求匹配这个路径时，{isbn} 的值将被传递给 getBook 方法的 isbn 参数
      @GET
      @Path("/{isbn}")
      public Response getBook(@PathParam("isbn") String isbn) {
          // 在这里，我们通常会根据 isbn 参数来查询数据库或缓存以获取书籍信息
          // 但为了简化示例，我们只是构造一个包含 isbn 的响应体
          String bookInfo = "书籍的 ISBN 是: " + isbn;

          // 返回 HTTP 200 OK 响应，包含书籍信息
          return Response.ok(bookInfo).build();
      }
  }
  ```

## @PathVariable

- ### 动态参数绑定：@PathVariable 可以将 URL 模板中的特定部分（如/users/{userId}中的{userId}）映射到控制器方法的参数上。这样，当请求到达时，Spring MVC 会自动将 URL 中的对应部分提取出来并赋值给方法的参数

```java
 @GetMapping("/users/{userId}")
public User getUserInfo(@PathVariable("userId") Long userId) {
   // 根据userId查询用户信息
   return userService.getUserById(userId);
}
```

## java中interface的作用

### 在Java中，interface（接口）是一种抽象类型，定义了一组没有实现的方法，它是面向对象编程中实现多态性和解耦的重要工具。interface的作用如下

#### 1. 定义行为的标准：接口用于定义一组方法，类可以通过实现接口来遵循这些标准。接口只包含方法的声明，不包含方法的实现，这样实现类必须提供具体的实现

#### 2. 支持多重继承：Java不支持类的多重继承，但允许一个类实现多个接口。通过接口，Java实现了某种形式的多重继承，这样可以避免多重继承中常见的“菱形继承”问题

#### 3. 解耦：接口使得代码更具灵活性和可维护性。通过依赖接口而非具体实现类，程序可以更轻松地进行扩展和修改，因为可以更容易地替换或增加实现类而不影响现有代码

#### 4. 多态性：接口是实现多态的重要手段之一。通过使用接口作为参数或返回类型，可以编写更通用的代码。例如，一个方法可以接收实现了某接口的任何类的对象，而不需要知道具体类是什么

#### 5. 增强代码的可测试性：由于接口不依赖于具体实现，可以很方便地使用模拟对象来测试接口的实现，从而增强代码的可测试性

``` java
// 示例：
public interface Animal {
    void eat();
    void sleep();
}

public class Dog implements Animal {
    @Override
    public void eat() {
        System.out.println("Dog is eating");
    }

    @Override
    public void sleep() {
        System.out.println("Dog is sleeping");
    }
}
```

在这个例子中，Dog类实现了Animal接口，并提供了eat和sleep方法的具体实现。
