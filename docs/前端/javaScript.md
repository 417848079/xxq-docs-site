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
