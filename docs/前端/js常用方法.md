## 1.函数防抖

```javascript
function debounce(func, wait) {
  let timeout;
  return function () {
    const context = this;
    const args = arguments;
    clearTimeout(timeout);
    timeout = setTimeout(() => {
      func.apply(context, args);
    }, wait);
  };
}
```

## 2.函数节流

```javascript
const box = document.querySeleter('.box');
let i = 1;
function mouseMove() {
  box.innerHTML = i++;
}
function throttle(fn, t) {
  let timer;
  // return 返回一个匿名函数
  return function () {
    if (!timer) {
      timer = setTimeOut(function () {
        fn();
        // 清空定时器 此处使用timer=null清除定时器是因为写在了定时器里面，setTimeout中是无法清除定时器的，因为定时器还在运作
        timer = null;
      }, t);
    }
  };
}
box.addEventListener('mousemove', throttle(mouseMove, 500));
```
