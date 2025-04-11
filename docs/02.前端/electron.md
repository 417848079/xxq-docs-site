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

## 设置electron镜像  

```cmd
npm config set ELECTRON_MIRROR https://mirrors.huaweicloud.com/electron/
```

## 安装  

`npm install electron --save-dev`

## 安装 Electron 速度慢通常是由于网络问题或镜像源的限制导致的。以下是几种优化安装速度的方法

- `yarn config set electron_mirror https://cdn.npmmirror.com/binaries/electron/`
