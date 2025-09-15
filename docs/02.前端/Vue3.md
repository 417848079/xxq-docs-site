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

## 2.封装弹窗示例

```vue3
<template>
  <div>
    <n-modal :show="showModal" style="box-shadow: none" @update:show="$emit('update:showModal', $event)" >
      <n-card style="width: 800px" :bordered="false" size="huge" role="dialog" aria-modal="true">
        <div class="title" style="font-size: 20px">签到信息</div>
        </n-card>
    </n-modal>
  </div>
</template>

<script lang="ts" setup>
defineProps({
  showModal: {
    type: Boolean,
    default: false,
  },
})
const emit = defineEmits(['update:showModal']);

</script>

<style lang="less" scoped>

</style>
```

- ### 使用

```vue3
<take-a-number  v-model:showModal="showModalNumber"   />

<script lang="ts" setup>
import { ref } from 'vue';
import TakeANumber from './TakeANumber.vue';

const showModalNumber = ref(false);

</script>
```
