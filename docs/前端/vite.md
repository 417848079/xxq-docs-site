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
