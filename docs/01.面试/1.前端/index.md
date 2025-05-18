# 总体

## 1.场景题，怎么应对,sop-流程化

1.交代背景 2.调研方案 3.方案落地 4.反思，追求更优解

## 2. 1000w 行表格如何渲染

1.dom  
2.虚拟表格  
3.canvas table  
4.可视区绘制算法优化  
5.canvas 结合 Webassembly 技术实现(skia + Webassembly)

## 3.js 超过 Number 最大值的数怎么处理

`Number.MAX_VALUE`

### 场景

- 大数据计算
- 格式展示
- 用户输入

### 解决方案

- BigInt

```js
const bigNum = BigInt('123232312222222222222122112');
bigNum + bigNum;
```

- decimal.js

```js
const Decimal = new Decimal('1e+308');
```

- big.js
- 输入场景限制数字输入大小

## 4.如何解决页面请求接口大规模并发问题

**滑动窗口**,算法,专门控制流量  
 **请求队列**

### 防抖/节流

- 防抖(debounce)
  只在事件停止触发 n 秒后执行一次，如果在这 n 秒内再次触发，则重新计算时间
- 节流(throttle)  
  规定在一个单位时间内，只能触发一次函数。如果这个单位时间内触发多次函数，只有一次生效

### 分页加载

```js
// 监听滚动事件
window.addEventListener('scroll', () => {
  // 判断是否滚动到底部
  if (window.innerHeight + window.scrollY >= document.body.offsetHeight) {
    console.log('加载更多');
  }
});
```

## 5.大文件上传

**专业术语**

- 切片上传
- 断点续传
- 断开重连重传

### 方案

- 前端切片

  - 计算切片
  - 主进程做卡顿，web-worker 多线程做切片,处理完后交给主进程发送
  - 切完后,将 bold 存储到 IndexedDB 中,下次用户进来之后，嗅探一下是否存在未完成的切片，如果有的话，则继续上传
  - webscoket,实时通知,和请求序列的控制 wss

- 将切片传递给后端
- 后端组合切片

## 6.在前端怎么实现截图

- canvas
- puppeteer (无头浏览器)
- html2canvas

## 7.H5 移动端适配问题

- ### 方案

  - 根据不同端来开发不同页面（成本最高）
  - 根据不同端来加载不同的 css 样式（可取）
  - 根据响应式，来运行不同的样式规则（**常用**）
  - style 预处理器

- ### 考虑的问题

  - 1.设置视窗，通过 meta 标签设置 viewport

    ```html
    <meta name="viewport" content="width=device-width, initial-scale=1.0" />
    ```

  - 2.掌握媒体查询

    ```css
    @media screen and (min-width: 768px) and (max-width: 1024px) {
      /*针对小屏幕的样式*/
    }
    ```

  - 3.flex 弹性布局
    - 主轴方向：flex-deirection: row;
    - 交叉轴方向：flex-wrap: wrap;
    - 子元素对齐：justify-content: space-between; align-items: center; align-content: flex-start;
    - 弹性属性：flex: 1; flex-grow: 1; flex-shrink: 1; flex-basis: auto;
  - 图片响应式

    ```html
    <picture>
      <source srcset="img.jpg" media="(min-width: 400px)" />
      <source srcset="img_small.jpg" media="(min-width: 800px)" />
      <img src="img.jpg" alt="图片" />
    </picture>
    ```

## 8.数组去重

- ### 1. Set + 展开运算符（ES6 最简单）

```js
const arr = [1, 2, 2, 3, 4, 4, 5];
const uniqueArr = [...new Set(arr)];
console.log(uniqueArr); // [1, 2, 3, 4, 5]
```

- ### 2.filter + indexOf

- ### 3.reduce + includes

- ### 4.Map 存储（支持对象去重）

- ### 5. for 循环 + 临时对象（高性能）

- ### 6.lodash.uniq（第三方库）

## 9.如何理解 js 中的 this

在 JavaScript 中，this 是一个动态绑定的关键字，它的值取决于函数的调用方式，而不是定义位置

### 1.this 的绑定规则

#### (1)默认绑定（独立函数调用）

当函数 直接调用（非对象方法、非 new、非 call/apply/bind），this 默认指向 全局对象：

#### (2) 隐式绑定（方法调用）

当函数作为 对象的方法 调用时，this 指向 调用它的对象

#### (3) 显式绑定（call/apply/bind）

通过 call、apply 或 bind 强制指定 this

#### (4) new 绑定（构造函数调用）

使用 new 调用构造函数时，this 指向 新创建的对象

#### (5) 箭头函数（Lexical this）

箭头函数的 this 继承自外层作用域，且 无法被修改（忽略显式绑定）

## 原始类型与引用类型有什么区别

- ### 1.存储类型不同

  - **原始类型**：直接存储在栈内存中，存储的是实际的值
    - 包括：Number, String, Boolean, Null, Undefined, Symbol (ES6), BigInt (ES11)
  - **引用类型**：存储在堆内存中，栈内存中存储的是指向堆内存的引用地址
    - 包括：Object, Array, Function, Date, RegExp 等

- ### 2. 赋值行为不同

  - 原始类型 - 值拷贝
  - 引用类型 - 引用拷贝

- ### 3. 比较方式不同

  - 原始类型比较值
  - 引用类型比较引用地址

- ### 4.参数传递方式不同

  - 原始类型：按值传递（函数内修改不影响外部）
  - 引用类型：按引用传递（函数内修改会影响外部对象）

- #### 5. 内存管理不同

  - 原始类型：固定大小，由系统自动分配和释放

  - 引用类型：动态大小，需要垃圾回收机制处理

## 如何实现一个深拷贝

## 前端优化方案

- 1.针对工程化项目开启GZIP压缩
- 2.使用函数节流和函数防抖
- 3.异步加载script文件或将script文件放在最后加载
- 4.减少重排和重绘
- 5.使用服务端渲染
- 6.合并请求
- 7.启用事件委托（事件代理）
- 8.尽量使用CSS完成动画效果
- 9.适当使用memo --- React篇
- 10.使用懒加载
- 11.使用骨架屏
- 12.将moment.js换成day.js
- 使用CDN加速
