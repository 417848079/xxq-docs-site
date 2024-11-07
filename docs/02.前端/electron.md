# electron

## 1. 创建eletron项目

```sh
pnpm create @quick-start/electron@1.0.16 my-electron-app
```

## 2.开发环境打开控制台

```js
const NODE_ENV = process.env.NODE_ENV
if (NODE_ENV === 'development') {
    mainWindow.webContents.openDevTools()
  }

```

## 2. 快捷键

- 打开控制台：ctrl + shift + i
