# npm文档

## 1. npm 查看源地址以及更换源地址

```sh
npm config get registry # 查看源地址
npm config set registry https://registry.npmmirror.com # 淘宝源
npm config set registry https://registry.npmjs.org/  # 默认源


```

## 打开 npm 配置  

`npm config edit`

## npm i --legacy-peer-deps

> 是在使用 npm （Node Package Manager）安装包时的一个命令选项。  
> --legacy-peer-deps 这个选项的主要作用是在安装过程中，忽略对等依赖（peer dependencies）版本不匹配的问题，并以一种较为宽松的方式处理依赖关系。  
> 通常情况下，如果一个包指定了对等依赖，并且当前安装环境中的相关依赖版本不满足要求，npm 会报错并阻止安装。但当使用 --legacy-peer-deps 选项时，npm 会尝试安装，即使对等依赖的版本不完全符合要求。  
> 例如，如果一个包 packageA 依赖于另一个包 packageB 作为对等依赖，并指定了特定的版本范围，而当前环境中的 packageB 版本不在这个范围内。正常情况下，安装会失败，但加上 --legacy-peer-deps 选项后，安装仍会继续进行。  
> 这种选项在一些情况下很有用，比如当您确定版本不匹配不会导致严重问题，或者只是为了快速进行开发和测试而暂时忽略对等依赖的版本约束。但需要注意的是，在生产环境中，还是应该尽量确保依赖版本的准确性和兼容性，以避免潜在的问题。

## --force

> 强制安装

## node-gyp报错

```sh
# 尝试
npm install --global node-gyp
npm install --global --production windows-build-tools
npm --python_mirror=https://registry.npmmirror.com/-/binary/python/ install --global windows-build-tools #npm install --global --production windows-build-tools安装报错时使用
```
