# CSS

## 1.选择器

- 1.通配符选择器

   ```css
   *{
    margin：0；       /*定义外边距*/
    padding：0；     /*定义内边距*/
    }
   ```

- 2.标签选择器

    ```css
    p{ font-size: 12px; color: #666; font-family:"微软雅黑"; }
    ```

- 3.类选择器

    ```css
    .box{ width: 100px; height: 100px; background-color: #ccc; }
    ```

- 4.id选择器

    ```css
    #box{ width: 100px; height: 100px; background-color: #ccc; }
    ```

- 5 . 属性选择器

    ```css
    input[type="text"]{ width: 100px; height: 50px; }  <!--匹配所有type属性为text的input标签-->
    ```

- 6.并集选择器

    ```css
    h1,p{ font-size: 12px; color: #666; font-family:"微软雅黑"; }
    ```

- 7.后代选择器

    ```css
    div p{ font-size: 12px; color: #666; font-family:"微软雅黑"; }
    ```

- 8.子代选择器

    ```css
    div>p{ font-size: 12px; color: #666; font-family:"微软雅黑"; }
    ```

- 9.兄弟选择器（+和~）

    ```css
    div+p{ font-size: 12px; color: #666; font-family:"微软雅黑"; }
    ```

- 10.伪类选择器

    ```css
    a:hover{ color: red; }
    ```

- 11.伪元素选择器

    ```css
    p:before{ content:"hello"; }
    ```

  > 优先级：id选择器 > 类选择器 > 标签选择器

  ## 盒子布局和flex布局的区别

  - ### 盒子布局  

    基于传统的 块级元素（Block） 和 行内元素（Inline） 的组合，依赖 float、position 等属性实现复杂布局。
    - 特点：以内容为驱动，子元素独立控制自身尺寸和位置。

  - ### flex布局  

      专为 一维布局（行或列） 设计，通过容器（Flex Container）统一控制子元素（Flex Items）的排列、对齐和尺寸分配。
    - 特点：以容器为驱动，子元素行为受容器规则约束。
