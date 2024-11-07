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
function throttle(fn, t = 1000) {
  let timer;
  return function () {
    let context = this;
    let args = arguments;
    if (!timer) {
      timer = setTimeout(function () {
        fn.apply(context, args);
        timer = null;
      }, t);
    }
  };
}
box.addEventListener('mousemove', throttle(mouseMove, 500));
```

## 3. 状态仓库持久化

- #### vuex

```js
// store文件
import { createStore } from 'vuex';
impor persistPlugin from './persistPlugin';
const store = createStore({
  modules: {},
  plugins: [],
});
```

```js
// persistPlugin.js
const key = 'vuex-store';
export default store => {
  // 存
  window.addEventListener('beforeunload', () => {
    locaStorage.setItem(key, JSON.stringify(store.state));
  });
  // 取
  const item = localStorage.getItem(key);
  if (!item) return;
  try {
    const orignalState = JSON.parse(item);
    store.replaceState(originalState);
  } catch (e) {
    console.log('存储的数据格式错误');
  }
};
```

- #### pinia

```js
//pinia main.js
import { createPinia } from 'pinia';
import persistPlugin from './persistPlugin';
const pinia = createPinia();
pinia.use(persistPlugin);
const app = createApp(App);
app.use(pinia);
```

```js
//pinia persistPlugin.js
const keyPrefix = 'pinia-state';
exprot default (context) => {
  // context 上下文
  const { store } = context;
  const  key = `${keyPrefix}-${store.$id}`;
  // 存
  window.addEventListener('beforeunload', () => {
    lcoalStorage.setItem(key, JSON.stringify(store.$state));
  })

  // 取
  const item = localStorage.getItem(key);
  if (!item) return;
  try {
    const originalState = JSON.parse(item);
    store.$patch(originalState);
  }
  catch (e) {
    console.log('存储的数据格式错误');
  }

}
```

## 4.文件切片上传并并发上传（参考，需优化）

- #### html

```html
<!DOCTYPE html>
<html lang="en">
  <head>
    <meta charset="UTF-8" />
    <meta name="viewport" content="width=device-width, initial-scale=1.0" />
    <title>Document</title>
  </head>
  <script src="./index.js"></script>
  <body>
    <input type="file" id="fileInput" />
    <button onclick="uploadClick()">上传</button>
  </body>
</html>
```

```js
// index.js
function uploadClick() {
  const file = document.getElementById('fileInput').files[0];
  console.log(file);
  // 分片5M上传
  const size = 5 * 1024 * 1024;
  const chunks = [];
  let initSize = 0;
  while (initSize < file.size) {
    chunks.push(file.slice(initSize, initSize + size));
    initSize += size;
  }
  console.log(chunks);
  upload(chunks, 2);
}

/**
 *
 * @param {*} chunks
 * @param {*} num 同时上传的分片数
 */
function upload(chunks, num) {
  let index = 0;
  for (let i = 0; i < chunks.length; i++) {
    const formData = new FormData();
    formData.append('file', chunks[i]);
    formData.append('index', i);
    if (index < num) {
      fetch('/upload', {
        method: 'POST',
        body: formData,
      })
        .then(res => res.json())
        .then(({ code }) => {
          if (code === 200) {
            index--;
          }
        });
      index++;
    }
  }
}
```

## 打断点调试

```js
if (!activied.length) return next();
debugger;
```

## [Object.prototype.hasOwnProperty()](https://developer.mozilla.org/zh-CN/docs/Web/JavaScript/Reference/Global_Objects/Object/hasOwnProperty)

- #### hasOwnProperty() 方法返回一个布尔值，表示对象自有属性（而不是继承来的属性）中是否具有指定的属性。
- 备注：在支持 Object.hasOwn 的浏览器中，建议使用 Object.hasOwn()，而非 hasOwnProperty()。

```js
const object1 = {};
object1.property1 = 42;

console.log(object1.hasOwnProperty('property1'));
// Expected output: true

console.log(object1.hasOwnProperty('toString'));
// Expected output: false

console.log(object1.hasOwnProperty('hasOwnProperty'));
// Expected output: false
```

## 解构赋值，对全局变量作用域内赋值

```js
let name, age;
if (true) {
  ({ name, age } = { name: 'zhangsan', age: 18 });
}
console.log(name, age);
```
