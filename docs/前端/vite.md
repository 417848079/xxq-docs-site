## 1. 介绍

- 1.  vite 最大的特点是利用 esm，esm 是浏览器原生支持的，不需要打包工具，直接在浏览器中运行。让代码不像传统的构建工具一样去分析引入，打包构建，而是直接保持模块化，这样省去了大量的编译时间，让代码更改后的响应速度大量提升
- 2. 构建方面，vite 其实使用的是 rollup

## 1.打包优化

```js
  build:{
    rollupOptions:{
      output:{
        manualChunks(id){
          if(id.includes('node_modules')){  // 判断是否是node_modules中的文件 打包到vendor
            return 'vendor';
          }
        }
      }
    }
  },
```
