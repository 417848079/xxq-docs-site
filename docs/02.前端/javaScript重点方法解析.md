# javascript不常用方法收集

## url.endsWith('.mp4')

- endsWith：判断字符串是否以指定的子字符串结尾（区分大小写）:

## minutes.toString().padStart(2, '0')

- padStart： 字符串填充（从左侧开始填充）

## Array.from({length: 10}, (v, k) => k + 1)

 生成一个包含数字1到10的数组
 映射函数 (v, k) => k + 1：对每个元素执行这个函数

## && (逻辑与)

  一般来说，当从左到右求值时，该操作符返回第一个假值操作数的值；如果它们都是真值，则返回最后一个操作数的值。

  ```js
  console.log(true && true); // true
  console.log(true && false); // false
  console.log(false && true); // false
  console.log(false && false); // false
  ```

## ?? (空值合并运算符)

当左侧的操作数为 null 或者 undefined 时，返回其右侧操作数，否则返回左侧操作数。

```js
console.log(null ?? 1); // 1
console.log(undefined ?? 2); // 2
console.log(1 ?? 3); // 1
console.log(false ?? 4); // false
```

## || （逻辑或）

且仅当其一个或多个操作数为真，其运算结果为真

```js
console.log(true || true); // true
console.log(true || false); // true
console.log(false || true); // true
console.log(false || false); // false
console.log(null || 0 || ''); // ""
```

## instanceof 运算符

  用于检测构造函数的 prototype 属性是否出现在某个实例对象的原型链上。
