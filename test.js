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
