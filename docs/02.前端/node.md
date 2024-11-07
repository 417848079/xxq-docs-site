# node

## windows 快速删除 node_modules

- 在 CMD 中使用 rd 命令和/s /q 参数：
  虽然 CMD 不直接支持强大的递归删除命令，但你可以使用 rd（remove directory）命令加上/s（递归删除所有子目录和文件）和/q（安静模式，不提示确认）参数来模拟这种行为。

```cmd
rd /s /q node_modules

```

## node-gyp

- Node-gyp是一个跨平台的命令行工具，专门用于编译Node.js的原生插件模块。
