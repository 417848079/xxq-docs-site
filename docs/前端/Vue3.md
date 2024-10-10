# Vue

## 1.封装 element-plus 的 dialogt 弹窗组件

```vue
<template>
  <div>
    <el-dialog :model-value="visible" :title="dialogConfig.title" :width="dialogConfig.width">
      <slot></slot>
      <template #footer>
        <div class="dialog-footer">
          <el-button @click="emit('update:visible')">取消</el-button>
          <el-button type="primary" @click="emit('confirm')">确认</el-button>
        </div>
      </template>
    </el-dialog>
  </div>
</template>

<script lang="ts" setup>
import { PropType } from 'vue';
interface IDialogConfig {
  title: string;
  width?: string | number;
}

defineProps({
  visible: {
    type: Boolean,
    default: false,
  },
  dialogConfig: {
    type: Object as PropType<IDialogConfig>,
    default: () => {
      return {};
    },
  },
});

const emit = defineEmits(['update:visible', 'confirm']);
</script>
<style lang="scss" scoped></style>
```

- ### 使用

```vue
const dialogVisible = ref(false);

<dialog-com
  v-model:visible="dialogVisible"
  @confirm="confirm"
  :dialog-config="{
    title: '提示',
    width: '400px',
  }"
>自定义内容区域</dialog-com>
```
