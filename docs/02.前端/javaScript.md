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

- ### vuex

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

- ### html

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

- #### hasOwnProperty() 方法返回一个布尔值，表示对象自有属性（而不是继承来的属性）中是否具有指定的属性

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

## 单例模式

单例模式（Singleton Pattern） 是 JavaScript 中一种常见的设计模式，其核心思想是：确保一个类只有一个实例，并提供一个全局访问点来获取这个唯一的实例。它的主要目的是避免重复创建对象，节约资源，并确保全局共享同一份状态或功能。

### 单例模式的核心特点

- 唯一性：一个类只能有一个实例。
- 全局访问：可以通过一个全局方法（如 getInstance()）或直接暴露的实例来访问这个对象。

### 为什么需要单例模式？

- 资源共享：例如全局配置对象、缓存、数据库连接池等，多个地方需要共享同一份数据或服务。

- 避免重复开销：某些对象创建成本高（如网络请求、文件操作），重复创建会浪费资源。

- 状态一致性：确保全局只有一个对象管理特定功能（如 Redux 中的 Store）。

### JavaScript 中的实现方式

- 1. 使用 ES6 类和静态属性（经典实现）

```javascript
class Singleton {
  constructor(data) {
    if (Singleton.instance) {
      return Singleton.instance;
    }
    this.data = data;
    Singleton.instance = this; // 静态属性存储唯一实例
  }

  static getInstance(data) {
    if (!this.instance) {
      this.instance = new Singleton(data);
    }
    return this.instance;
  }
}

// 使用
const obj1 = new Singleton("foo");
const obj2 = new Singleton("bar");
console.log(obj1 === obj2); // true（即使尝试多次 new，返回的都是同一实例）
```

- 2. 利用闭包（传统方式）

```javascript
const Singleton = (() => {
  let instance; // 通过闭包隐藏私有变量

  function createInstance(data) {
    return { data };
  }

  return {
    getInstance: (data) => {
      if (!instance) {
        instance = createInstance(data);
      }
      return instance;
    },
  };
})();

// 使用
const obj1 = Singleton.getInstance("foo");
const obj2 = Singleton.getInstance("bar");
console.log(obj1 === obj2); // true
```

- 3. 使用 ES6 模块（天然单例）

```javascript
// singleton.js
let instance = null;

export default class Singleton {
  constructor(data) {
    if (instance) {
      return instance;
    }
    this.data = data;
    instance = this;
  }
}

// 使用（不同模块导入的都是同一个实例）
import Singleton from "./singleton.js";
const obj1 = new Singleton("foo");
const obj2 = new Singleton("bar");
console.log(obj1 === obj2); // true
```

### 应用场景

- 全局状态管理：如 Redux/Vuex 中的 Store 管理全局状态。

- 日志工具：全局唯一的日志对象，统一记录日志。

- 配置对象：全局共享的配置信息（如 API 地址、主题设置）。

- 缓存系统：全局唯一的缓存池，避免重复加载资源。

- 数据库连接：复用同一个数据库连接实例，减少开销。

### 注意事项

- 避免滥用：单例模式是全局状态，过度使用会导致代码耦合性高，难以测试。

- 线程安全：在 JavaScript 的单线程环境中无需考虑，但在其他语言（如 Java）中需注意。

- 延迟初始化：单例对象可以按需创建（如第一次调用 getInstance() 时才初始化）。

### 总结

单例模式的核心是通过 控制实例化过程 来保证唯一性。在 JavaScript 中，可以用 ES6 类、闭包或模块系统灵活实现。它的优势是节约资源、统一管理全局状态，但需谨慎使用，避免变成“上帝对象”（过度集中功能的全局对象）。
