# js代码面试题

## 1.数组统计，设置一个通用方法完成以下功能

- 1. 统计数组中每个性别的人数
- 2. 统计数组中每个年龄的人数
- 3. 统计数组中不同姓名长度的人数

```javascript
const users = [
  { name: '张三', age: 18, sex: '男' },
  { name: '李四', age: 19, sex: '女' },
  { name: '王五', age: 18, sex: '男' },
  { name: '赵六', age: 19, sex: '女' },
  { name: '孙七', age: 18, sex: '男' },
  { name: '泽拉斯', age: 19, sex: '女' },
  { name: '李狗蛋', age: 19, sex: '女' },
  { name: '阿卡丽', age: 19, sex: '女' },
  { name: '熬夜波比', age: 19, sex: '女' },
  { name: '诺克萨斯之手', age: 20, sex: '女' },
  { name: '瑞文', age: 20, sex: '女' },
  { name: '吉格斯', age: 19, sex: '女' },
];
```

- 实现方法：

```javascript
function countByProperty(array, getKey) {
  // 初始化一个空对象来存储统计结果
  const result = {};

  // 遍历数组
  array.forEach(item => {
    // 使用getKey函数从每个项中提取键
    const key = getKey(item);

    // 如果键不存在于结果对象中，则初始化它
    if (!result[key]) {
      result[key] = 0;
    }

    // 更新计数
    result[key]++;
  });

  // 返回统计结果
  return result;
}

// 使用示例

// 统计每个性别的人数
const sexCount = countByProperty(users, user => user.sex);
console.log('性别统计:', sexCount);

// 统计每个年龄的人数
const ageCount = countByProperty(users, user => user.age);
console.log('年龄统计:', ageCount);

// 统计不同姓名长度的人数
const nameLengthCount = countByProperty(users, user => user.name.length);
console.log('姓名长度统计:', nameLengthCount);
```

## 2. 红绿灯

- js

```javascript
// 定义颜色和时间（秒）
const colors = ['red', 'yellow', 'green'];
const durations = [5, 2, 3]; // 分别对应红、黄、绿灯的持续时间

let currentIndex = 0; // 当前颜色索引

function changeLight() {
  // 隐藏所有灯
  colors.forEach(color => {
    document.getElementById(color).style.display = 'none';
  });

  // 显示当前灯
  document.getElementById(colors[currentIndex]).style.display = 'block';

  // 更新索引并计算下一个定时器的时间
  document.getElementById('time').innerHTML = durations[currentIndex] * 1000;

  // 使用setTimeout而不是setInterval，因为我们需要控制每个灯显示的确切时间
  setTimeout(changeLight, durations[currentIndex] * 1000);
  if (currentIndex && currentIndex != 0 && currentIndex + 1 === durations.length) {
    currentIndex = 0;
  } else {
    currentIndex++;
  }
}

// 初始化
changeLight(); // 开始改变灯光
```

- html

```html
<!DOCTYPE html>
<html lang="en">
<head>
<meta charset="UTF-8">
<title>红绿灯模拟</title>
<style>
.light {
  width: 50px;
  height: 50px;
  border-radius: 50%;
  display: inline-block;
  margin: 10px;
}
#red { background-color: red; }
#yellow { background-color: yellow; }
#green { background-color: green; }
</style>
</head>
<body>
<div id="traffic-lights">
<div id="red" class="light"></div>
<div id="yellow" class="light" style="display: none;"></div>
<div id="green" class="light" style="display: none;"></div>
<div id="time"></div>
</div>

<script src="./index.js"></script>
</body>
</html>
```

## 3. 计算-23的二进制数

```javascript
function toTwosComplement(num, bits = 8) {
  // 处理负数补码计算
  if (num < 0) {
    return ((1 << bits) + num).toString(2).slice(-bits);
  }
  // 处理正数补零
  return num.toString(2).padStart(bits, '0');
}

// 示例用法
console.log(toTwosComplement(-23, 8)); // 输出：11101001
```

## 4.将Hello World!字符串反转

```javascript
function reverseString(str) {
  return str.split('').reverse().join('');
}

// 或者
function reverseString(str) {
  return  [...str].reverse().join('');
}
```

## 5.让下面的代码成立

```javascript
/// 让下面的代码成立
// var[a,b] ={
//   a:1,
//   b:2
// }
// console.log(a,b);

// 解决方案：
//生成器
// Object.prototype[Symbol.iterator] = function* () {
//   yield* Object.values(this);
// }

//迭代器
Object.prototype[Symbol.iterator] = function() {
  return Object.values(this)[Symbol.iterator]();
}
var[a,b] ={
  a:1,
  b:2
}
console.log(a,b);

```

## 6、调用main方法后，下面的输出是什么？

```javascript
function main(){
  console.log(test())
}

function test(){
  try{
    let a= null
    a=a.charAt(1)
    console.log(1)
    return 4
  }catch(e){
    console.log(2)
    return 5
  }finally{
    console.log(3);
    return 6
  }
}

main() // 输出：2 3 6
// 如果finally块中有return语句，则finally块中的return语句会覆盖try-catch块中的return语句
```

## 7、调用main方法后，以下代码的输出值是什么

```javascript
function main() {
  const promise = new Promise((resolve, reject) => {
    console.log(1)
    resolve()
    console.log(2)
  })

  promise.then(() => {
    console.log(3)
  })

  console.log(4)
}
main()
// 答：1243
```

## 8、请分别写出判断null和undefined的表达式或函数

```javascript
// 使用 Object.is() 组合
if (Object.is(value, null) || Object.is(value, undefined)) {
  // 精确判断
}
// void 0 安全判断（避免全局 undefined 被篡改）
if (value === void 0) {
  // void 0 始终返回 undefined，安全判断
}
// typeof 判断（兼容性最佳）
if (typeof value === 'undefined') {
  // 当变量未定义或值为 undefined 时触发
}
```

## 9、请使用es5，es6规范写出单例模式（singleton）

### JavaScript 单例模式

- 单例模式是一种常见的设计模式，它确保一个类只有一个实例，并提供一个全局访问点。单例模式在减少内存开销和避免全局变量冲突方面具有重要意义

```javascript
class SingletonApple {
  constructor(name, creator, products) {
    if (!SingletonApple.instance) {
      this.name = name;
      this.creator = creator;
      this.products = products;
    }
    SingletonApple.instance = this; // 关键：绑定实例
    // return SingletonApple.instance;
  }

  static getInstance(name, creator, products) {
    if (!SingletonApple.instance) {
      SingletonApple.instance = new SingletonApple(name, creator, products);
    }
    return SingletonApple.instance;
  }
}

let appleCompany = SingletonApple.getInstance('苹果公司', '乔布斯', ['iPhone', 'iMac', 'iPad', 'iPod']);
console.log(appleCompany); 
let copyApple = SingletonApple.getInstance('苹果公司', '阿辉', ['iPhone', 'iMac', 'iPad', 'iPod']);
console.log(copyApple);
console.log(appleCompany === copyApple); // true
```

## 10、使用冒泡排序算法对数组 let arr = [3,9,-1,10,20]进行排序（从小到大）

```javascript
function bubbleSort(arr) {
  const len = arr.length;
  for (let i = 0; i < len - 1; i++) {
    for (let j = 0; j < len - 1 - i; j++) { 
      if (arr[j] > arr[j + 1]) { // 如果前一个元素比后一个大，交换它们
        // [arr[j], arr[j + 1]] = [arr[j + 1], arr[j]];
        let a = arr[j];
        arr[j] = arr[j + 1];
        arr[j + 1] = a;
      }
    }
  }
  return arr;
}

const arr = [3, 9, -1, 10, 20];
let result = bubbleSort(arr);
console.log(result);
```

## 11、使用二分查找法搜索数组 let arr = [6,12,33,87,90,97,108,561]中108所在的位置（采用递归的方式）

```javascript
function binarySearchRecursive(arr, target, left = 0, right = arr.length - 1) {
  if (left > right) {
    return -1; // 基线条件：未找到
  }
  const mid = Math.floor((left + right) / 2);
  if (arr[mid] === target) {
    return mid; // 基线条件：找到目标
  } else if (arr[mid] < target) {
    return binarySearchRecursive(arr, target, mid + 1, right) //递归右半部分
  } else {
    return binarySearchRecursive(arr, target, left, mid - 1) //递归左半部分
  }
}

const arr = [6, 12, 33, 87, 90, 97, 108, 561];
const target = 108;
const result = binarySearchRecursive(arr, target);
console.log(result);
```
