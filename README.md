# [vue3]展开收起组件

# 使用

```vue
<template>
  <collapseTextarea :content="content"></collapseTextarea>
</template>

<script setup lang="ts">
import collapseTextarea from "./components/collapse-textarea.vue";
const content = "测试文案";
</script>
```

# 组件接收参数

```ts
const {
  width = "100%",
  lineHeight = 20,
  defaultCollapseLine = 3,
  content,
} = defineProps<{
  width?: string | number; // 组件宽度
  lineHeight?: number; // 行高
  defaultCollapseLine?: number; // 默认展示行数
  content: string; // 内容
}>();
```
