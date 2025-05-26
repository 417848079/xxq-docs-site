<template>
  <div class="svg-container">
    <button @click="scale(1.2)">放大</button>
    <button @click="scale(0.8)">缩小</button>
    <div class="mermaid" ref="mermaidContainer">
      <!-- Mermaid 图表会在这里渲染 -->
    </div>
  </div>
</template>

<script setup>
import { ref } from 'vue';

const mermaidContainer = ref(null);
let currentScale = 1;

const scale = (factor) => {
  currentScale *= factor;
  mermaidContainer.value.style.transform = `scale(${currentScale})`;
  mermaidContainer.value.style.transformOrigin = 'top left'; // 从左上角缩放
};
</script>

<style>
.svg-container {
  overflow: auto; /* 允许滚动查看放大后的内容 */
}
.mermaid {
  transition: transform 0.3s ease; /* 平滑动画 */
}
</style>