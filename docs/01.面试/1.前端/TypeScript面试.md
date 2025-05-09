# TypeScript 面试

## 1.Vue3 与 TypeScript 结合使用有哪些好处

- 1.类型安全
- 2.自动补全
- 3.重构友好
- 4.提升代码可读性
- 5.利于组件设计
- 6.代码复用和模块化

## 2.TS 中 any 和 unknoe

- unknown 和 any 都是 TypeScript 中的顶级类型（top types），但它们在使用上有重要区别：

- 主要区别

  - 类型安全性

    - any: 完全绕过类型检查，允许任何操作

    - unknown: 类型安全的，必须先进行类型检查或断言才能使用

- 赋值

  - any: 可以赋值给任何类型

  - unknown: 只能赋值给 any 或 unknown 类型
