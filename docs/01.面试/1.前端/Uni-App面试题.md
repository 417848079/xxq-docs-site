# uni-app调用微信支付、支付宝支付

- uniapp中支付功能api方法uni.requestPayment
uni.requestPayment是一个统一各平台的客户端支付API，不管是在某家小程序还是在App中，客户端均使用本API调用支付。

```js
uni.requestPayment({
  provider: 'alipay',//wxpay微信 alipay支付宝
  orderInfo: paymentData, //订单数据 后台返回的数据  
  success: function(res) {
   uni.showToast({title: '支付成功'})
  },
  // 参数有问题则抛出错误
  fail: function(err) {
   uni.showToast({title: '支付失败'})
  },
 })
```
