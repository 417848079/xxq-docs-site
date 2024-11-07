# webpack

## reuqire.context

批量引入指定文件夹下的所有文件

## webpack 配置文件

- webpack.baseconfig.js

```js
const htmlWebpackPlugin = require('html-webpack-plugin');
const minicss = require('mini-css-extract-plugin');
const bundleanalyer = require('webpack-bundle-analyzer').BundleAnalyzerPlugin; // 打包分析
const Dotenv = require('dotenv-webpack');
let pluginsArr = [
  new htmlWebpackPlugin({
    filename: 'index.html',
    template: './index.html',
  }),
  // new bundleanalyer()
  new bundleanalyer({ openAnalyzer: true, analyzerPort: 8081 }),
  new Dotenv({
    path: './.env',
  }),
];
function hasMiniCss() {
  if (process.env.NODE_ENV === 'production') {
    pluginsArr.push(
      new minicss({
        filename: 'test.bundle.css',
      })
    );
  }
}
hasMiniCss();
module.exports = {
  entry: { app: './app.js' },
  output: {
    path: __dirname + '/dist',
    filename: '[name].[chunkhash:4].bundle.js',
  },
  optimization: {
    splitChunks: {
      chunks: 'all',
      cacheGroups: {
        vendor: {
          test: /[\\/]node_modules[\\/]/,
          name: 'vendor.[chunkhash:4].js',
          chunks: 'all',
          minChunks: 1,
        },
        common: {
          name: 'common.[chunkhash:4].js',
          chunks: 'all',
          minChunks: 2,
          minSize: 0,
        },
      },
    }, // 默认只作用于异步模块，为所有模块开启分割代码
    runtimeChunk: { name: 'runtime' },
  },
  module: {
    rules: [{ test: /\.css$/, use: [process.env.NODE_ENV === 'production' ? minicss.loader : 'style-loader', 'css-loader'] }],
  },
  devServer: {
    port: 3001,
    hot: true, // 开启热更新
    proxy: [
      {
        context: ['/'],
        target: 'http://localhost:3000',
        pathRewrite: { '^/num1': '/api/getNum1' }, // 路径重写
      },
    ],
  },
  plugins: pluginsArr,
};
```

- webpack.dev.js

```js
const base = require('./webpack.baseconfig.js');
const merge = require('webpack-merge').merge;
const webpack = require('webpack');
const FriendlyErrorsPlugin = require('friendly-errors-webpack-plugin')
const portfinder = require('portfinder')
const devWebpackConfig  = merge(base, {
  mode: 'development',
  devtool: 'eval-source-map', // 开启调试模式
  devServer: {
    port: 3001,
    hot: true, // 开启热更新
    proxy: [
      {
        context: ['/'],
        target: 'http://localhost:3000',
        pathRewrite: { '^/num1': '/api/getNum1' }, // 路径重写
      },
    ],
  },
  plugins:[
    new webpack.DefinePlugin({
      baseURL:"www.xxx.com"
    })
  ]
});
module.exports = new Promise((resolve, reject) => {
  portfinder.basePort = devWebpackConfig.devServer.port;
  portfinder.getPort((err, port) => {
    if (err) {
      console.log(err);
      reject(err);
    } else {
      devWebpackConfig.devServer.port = port;
      devWebpackConfig.plugins.push(
        new FriendlyErrorsPlugin({
          compilationSuccessInfo: {
            messages: ['App runing at', `Local  : http://localhost:${port}`, `Network: http://${require('ip').address()}:${port}`],
          },
        })
      );
      resolve(devWebpackConfig);
    }
  });
});

const port = devWebpackConfig.devServer.port




```

- webpack.prod.js

```js
const base = require('./webpack.baseconfig.js');
const merge = require('webpack-merge').merge;
const webpack = require('webpack');

module.exports = merge(base, {
  mode: 'production',
  plugins: [
    new webpack.DllReferencePlugin({
      manifest: require(__dirname + '/dist/dll/vendor-manifest.json'),
    }),
    new webpack.DefinePlugin({
      baseURL: 'www.aaa.com',
    }),
  ],
});
```

- wepback.dll.js

```js
const webpack = require('webpack');

module.exports = {
  mode: 'production',
  entry: {
    vendor: ['axios', 'lodash'],
  },
  output: {
    path: __dirname + '/dist/dll',
    filename: '[name].dll.js',
    library: '[name]_library',
  },
  plugins: [
    new webpack.DllPlugin({
      path: __dirname + '/dist/dll/[name]-manifest.json',
      name: '[name]_library', // 和 output.library 保持一致
      context: __dirname, // 保持和 webpack.config.js 相同路径
    }),
  ],
};
```
