# Vue2

## 1. vue2 代码示例

```js
// mixin.js
import { postTreeGoodsClass } from "@/api";
export default {
  data() {
    return {
     
    };
  },
  created() {

  }
};

```

```vue
<template>
  <div></div>
</template>
<script>
import mixin from './mixin';

export default {
  data() {
    return {
      pageParams: {
        page: 1,
        limit: 20,
      },
    };
  },
  mixins: [mixin], // 混入
  watch: {
    pageParams: { // 监听pageParams的变化
      deep: true, // 深度监听
      immediate: true, // 初始化时调用
      handler(val) {
        this.obtainGoodsList();
      }
    },
    'pageParams.page'() { // 监听pageParams.page的变化
      this.obatainBuyList()
    },
  },
};
</script>
```
