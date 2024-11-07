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

## 2. vite.config.ts 配置

```ts
import { defineConfig } from 'vite';
import vue from '@vitejs/plugin-vue';
import { resolve } from 'path';

// https://vitejs.dev/config/
export default defineConfig({
  server: {
    port: 3001, // 端口
    open: true, // 自动打开浏览器
    proxy: {
      '/api': {
        target: 'http://localhost:8083', // 目标服务器地址
        changeOrigin: true, // 是否跨域
        rewrite: path => path.replace(/^\/api/, ''), // 重写路径
      },
    },
  },
  // ------------------------------------##-----------------
  build: {
    rollupOptions: {
      output: {
        manualChunks(id) {
          if (id.includes('node_modules')) {
            // 判断是否是node_modules中的文件 打包到vendor
            return 'vendor';
          }
        },
      },
    },
  },
  //  ------------------------------------##-----------------
  resolve: {
    // 设置路径别名
    alias: {
      '@': resolve(__dirname, './src'),
      '*': resolve(''),
    },
  },
  //  ------------------------------------##-----------------
  plugins: [vue()],
});
```

3. ## tsconfig.json 等配置

- 3.1 tsconfig.json

```json
{
  "files": [],
  "references": [{ "path": "./tsconfig.app.json" }, { "path": "./tsconfig.node.json" }]
}
```

- 3.2 tsconfig.app.json

```json
{
  "compilerOptions": {
    "target": "ES2020", // // 指定 ECMAScript 目标版本
    "useDefineForClassFields": true, //"ESNext" 指定了生成的模块系统代码的形式。ESNext 表示使用最新的 ECMAScript 模块规范，但具体行为可能取决于 TypeScript 编译器的版本和运行时环境。
    "module": "ESNext", // "ESNext" 指定了生成的模块系统代码的形式。ESNext 表示使用最新的 ECMAScript 模块规范，但具体行为可能取决于 TypeScript 编译器的版本和运行时环境。
    "lib": ["ES2020", "DOM", "DOM.Iterable"], // 指定了编译过程中要包含的类型库列表。这里包括了 "ES2020", "DOM", 和 "DOM.Iterable"，分别表示 ECMAScript 2020 标准库、Web DOM API 和可迭代的 DOM 集合。

    "skipLibCheck": true, //true 指示 TypeScript 编译器跳过对所有声明文件（.d.ts）的类型检查。这可以加快编译速度，特别是当项目中包含大量第三方库时。

    /* Bundler mode */
    "moduleResolution": "bundler", //"bundler" 是一种模块解析策略，特别适用于与打包工具（如 Webpack 或 Rollup）一起使用。它允许编译器以特定的方式解析模块，以匹配打包工具的预期行为。
    "allowImportingTsExtensions": true, //允许在不显式声明 .ts 或 .tsx 文件为模块的情况下导入它们。这在使用某些打包工具时可能是必需的。
    "isolatedModules": true, // 使编译器以支持仅包含单个文件编译（如 Babel）的方式生成代码。这通常与模块捆绑器一起使用。
    "moduleDetection": "force", //"force" 强制 TypeScript 编译器根据文件扩展名（.ts 或 .tsx）来检测模块类型，而不是尝试自动推断。
    "noEmit": true, //true 指示 TypeScript 编译器不要生成任何 .js 文件。这通常用于与构建工具（如 Webpack）一起使用时，构建工具会处理 TypeScript 文件的编译。
    "jsx": "preserve", // "preserve" 指示 TypeScript 保留 JSX 元素不变，并生成 .jsx 文件（如果 noEmit 为 false）。这通常与 Babel 这样的 JSX 转换器一起使用。

    /* Linting */
    "strict": true, // true 启用所有严格类型检查选项，如严格空检查、严格绑定检查等。这有助于捕获潜在的错误。
    "noUnusedLocals": true, // true 分别指示 TypeScript 编译器报告未使用的局部变量和函数参数。这有助于保持代码的清洁和高效。
    "noUnusedParameters": true, //true 分别指示 TypeScript 编译器报告未使用的局部变量和函数参数。这有助于保持代码的清洁和高效。
    "noFallthroughCasesInSwitch": true, //true 禁止在 switch 语句中未显式处理的 case 语句之后出现“fall through”（即没有 break 或 return 语句）。

    /*  */
    "baseUrl": ".", //. 指定了模块解析的基路径，这里是项目根目录。
    "paths": {
      //允许你配置模块名的别名。在这个例子中，"@/*" 被映射到 "src/*"，这意味着你可以通过 @/components/MyComponent 这样的路径来导入 src/components/MyComponent，而不需要相对路径或绝对路径。
      "@/*": ["src/*"]
    }
  },
  "include": ["src/**/*.ts", "src/**/*.tsx", "src/**/*.vue"] //指定了要包含在项目中的文件模式。这里包括了所有 .ts、.tsx 和 .vue 文件，它们位于 src 目录及其子目录中。.vue 文件通常与 Vue.js 一起使用，并需要 Vue 相关的 TypeScript 支持或插件来正确编译。
}
```

- 3.3 tsconfig.node.json

```json
{
  "compilerOptions": {
    "target": "ES2022",
    "lib": ["ES2023"],
    "module": "ESNext",
    "skipLibCheck": true,

    /* Bundler mode */
    "moduleResolution": "bundler",
    "allowImportingTsExtensions": true,
    "isolatedModules": true,
    "moduleDetection": "force",
    "noEmit": true,

    /* Linting */
    "strict": true,
    "noUnusedLocals": true,
    "noUnusedParameters": true,
    "noFallthroughCasesInSwitch": true
  },
  "include": ["vite.config.ts"]
}
```
