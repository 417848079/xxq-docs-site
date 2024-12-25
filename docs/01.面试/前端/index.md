# 总体

## 1.场景题，怎么应对,sop-流程化

1.交代背景
2.调研方案
3.方案落地
4.反思，追求更优解

## 2. 1000w行表格如何渲染

1.dom
2.虚拟表格
3.canvas table
4.可视区绘制算法优化
5.canvas结合Webassembly 技术实现(skia + Webassembly)

## 3.js超过Number最大值的数怎么处理

`Number.MAX_VALUE`

### 场景

- 大数据计算
- 格式展示
- 用户输入

### 解决方案

- BigInt

```js
const bigNum = BigInt("123232312222222222222122112")
bigNum + bigNum
```

- decimal.js

```js
const Decimal = new Decimal("1e+308")
```

- big.js
- 输入场景限制数字输入大小

## 4.如何解决页面请求接口大规模并发问题

 **滑动窗口**,算法,专门控制流量  
 **请求队列**  

### 防抖/节流

- 防抖(debounce)
  只在事件停止触发n秒后执行一次，如果在这n秒内再次触发，则重新计算时间
- 节流(throttle)  
  规定在一个单位时间内，只能触发一次函数。如果这个单位时间内触发多次函数，只有一次生效

### 分页加载

```js
// 监听滚动事件
window.addEventListener("scroll", () => {
  // 判断是否滚动到底部
  if (window.innerHeight + window.scrollY >= document.body.offsetHeight) {
    console.log("加载更多")
  }
})
```

## 5.大文件上传

**专业术语**  

- 切片上传
- 断点续传
- 断开重连重传

### 方案

- 前端切片
  - 计算切片
  - 主进程做卡顿，web-worker多线程做切片,处理完后交给主进程发送
  - 切完后,将bold存储到 IndexedDB中,下次用户进来之后，嗅探一下是否存在未完成的切片，如果有的话，则继续上传
  - webscoket,实时通知,和请求序列的控制 wss

- 将切片传递给后端
- 后端组合切片

## 6.在前端怎么实现截图

- canvas
- puppeteer (无头浏览器)
- html2canvas
