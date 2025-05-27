# index2


## 2.null 和 undefined 在内存管理中的区别

- ### 1.null

  空指针

- ### 2.undefined

  变量声明但是未赋值

## 3.什么是循环引用，它是如何导致内存泄漏的？

- ### 1.循环引用的定义

  两个或多个对象相互引用，形成一个循环结构。导致垃圾回收器无法回收这些对象，从而导致内存泄漏。

- ### 2.循环引用的例子

  ```js
  let obj1 = {};
  let obj2 = {};
  obj1.ref = obj2; // obj1 引用 obj2
  obj2.ref = obj1; // obj2 引用 obj1

  obj1 = null; // 解除 obj1 的引用
  obj2 = null; // 解除 obj2 的引用
  ```

## 4. 常用的浏览器内核有哪些

- ### 1.Blink 内核
- ### 2.WebKit 内核
- ### 3.Trident 内核
- ### 4.Gecko 内核

## 5. 浏览器的渲染过程

- ### 1.解析 HTML 生成 DOM 树
- ### 2.解析 CSS 生成 CSSOM 树
- ### 3.将 DOM 树和 CSSOM 树合并成渲染树
- ### 4.布局渲染树
- ### 5.绘制渲染树

## 6.行内元素和块级有什么区别

| 特性                  | 行内元素（Inline）                  | 块级元素（Block）                    |
| --------------------- | ----------------------------------- | ------------------------------------ |
| 默认显示方式          | 同行排列，不换行                    | 独占一行，自动换行                   |
| **宽度 & 高度**       | 由内容决定，不可直接设置            | 可设置 width 和 height               |
| **大小**              | 大小由内容决定                      | 大小由内容决定                       |
| **边距（margin）**    | 仅水平方向有效（margin-left/right） | 四个方向均有效                       |
| **内边距（padding）** | 有效，但可能影响同行元素            | 有效，不影响其他元素                 |
| **包含关系**          | 只能包含文本或其他行内元素          | 可包含行内元素、块级元素             |
| **典型标签**          | `<span>, <a>, <strong>, <img>  `    | ` <div>, <p>, <h1>-<h6>, <ul>, <li>` |

## 清除浮动有哪些方法

### 1.伪元素清除浮动

```css
.clearfix::after {
  content: '';
  display: table;
  clear: both;
}
```

### 2.使用 clearfix 通用类（推荐）

```
.clearfix::after {
content: '';
display: table;
clear: both;
}
```

### 3.使用 Flexbox / Grid 布局（现代推荐）

```css
.parent {
  display: flex; /* 或 grid */
}
```

### 4. 父元素触发 BFC（块级格式化上下文）

```css
.parent {
  overflow: hidden; /* 或 auto、scroll */
  /* 或 */
  display: flow-root; /* 最佳实践，无副作用 */
}
```

优点：代码简洁，display: flow-root 是专为清除浮动设计。  
缺点：overflow: hidden 可能隐藏溢出内容。
