# mybatis和mybatisPlus

## 1.MyBatisPlus通过扫描实体类，并基于反射获取实体类信息作为数据表信息

- ### 类名驼峰转下划线作为表名

- ### 名为id的字段作为主键

- ### 变量名驼峰转下划线作为表的字段名

## 2.MybatisPlus常见注解

- ### @TableName

  - 指定表名

- ### @TableId

  - 指定主键

- ### @TableField

  - 用来指定表中的普通字段信息

```java
@TableName("tb_user") // 指定表名
public class User {
    @TableId(type = IdType.AUTO) // 指定主键
    private Long id;
    @TableField("user_name") // 指定表中的字段信息
    private String name;
    @TableField(exist = false)  // 指定该字段不映射到数据库
    private String address; 
}
```

>**IdType枚举：**  
AUTO：数据库自增长  
INPUT：通过set方法自行输入  
ASSIGN_ID：分配 ID，接口IdentifierGenerator的方法nextId来生成id，默认实现类为DefaultIdentifierGenerator雪花算法  
**使用@TableField的常见场景：**  
成员变量名与数据库字段名不一致  
成员变量名以is开头，且是布尔值  
成员变量名与数据库关键字冲突  
成员变量不是数据库字段  
