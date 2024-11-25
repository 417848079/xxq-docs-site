# pnpm

## 问题记录⨯ cannot execute cause=fork/exec...pnpm\bin\pnpm.cjs: %1 is not a valid Win32 application

- ⨯ cannot execute cause=fork/exec...pnpm\bin\pnpm.cjs: %1 is not a valid Win32 application.  

> 这是一个由 pnpm 导致的问题，起初没有使用含有 sqllite3 的模块，构建是没有问题的，使用了 sqllite3 之后，在 electron-builder 进行构建时显示 xxx\pnpm.cjs 不是一个合法的 Win32 应用。
pnpm.cjs 文件上方有一个 shebang （#!开头 ）:

```txt
#!/usr/bin/env node
```

>最初在类unix操作系统中一个文本文件带有 #! 开头，就会当做一个执行文件来运行。而 /usr/bin/env node 其实表示的是通常情况下在 Linux 系统中安装的 nodeJS 二进制文件目录，相当于 Windows上的 Node.exe 的绝对路径。放在windows上面时，这个路径就会产生错误。
修复方式：
如果你的 node.exe 添加到了 path 环境变量中，可以直接将路径改成 node。如果没明白请往下看详细步骤。
详细步骤：
找到pnpm.cjs文件，比如我这里的是：

```cmd
C:\Users\jcstudio.tech\AppData\Roaming\npm\node_modules\pnpm\bin\pnpm.cjs
```

>打开该文件：

```cjs
#!/usr/bin/env node
const [major, minor] = process.version.slice(1).split('.')
const COMPATIBILITY_PAGE = `Visit https://r.pnpm.io/comp to see the list of past pnpm versions with respective Node.js version support.`
// We don't use the semver library here because:
//  1. it is already bundled to dist/pnpm.cjs, so we would load it twice
//  2. we want this file to support potentially older Node.js versions than what semver supports
if (major < 14 || major == 14 && minor < 6) {
  console.log(`ERROR: This version of pnpm requires at least Node.js v14.6
The current version of Node.js is ${process.version}
${COMPATIBILITY_PAGE}`)
  process.exit(1)
}
global['pnpm__startedAt'] = Date.now()
require('../dist/pnpm.cjs')
// if you want to debug at your local env, you can use this
// require('../lib/pnpm')
```

>将第一行替换为：

` #!node `
