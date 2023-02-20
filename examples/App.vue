<template>
  <div class="wrapper">
    <collapseTextarea :content="content"></collapseTextarea>
  </div>
</template>

<script setup lang="ts">
import collapseTextarea from '../packages/collapse-textarea/collapse-textarea.vue';

const content = '这是一段测试文案这是一段测试文案这是一段测试文案这是一段测试文案这是一段测试文案这是一段测试文案这是一段测试文案这是一段测试文案这是一段测试文案这是一段测试文案这是一段测试文案这是一段测试文案这是一段测试文案这是一段测试文案这是一段测试文案这是一段测试文案这是一段测试文案这是一段测试文案这是一段测试文案这是一段测试文案这是一段测试文案这是一段测试文案这是一段测试文案这是一段测试文案这是一段测试文案这是一段测试文案这是一段测试文案这是一段测试文案这是一段测试文案这是一段测试文案这是一段测试文案这是一段测试文案这是一段测试文案这是一段测试文案这是一段测试文案这是一段测试文案这是一段测试文案这是一段测试文案这是一段测试文案这是一段测试文案这是一段测试文案这是一段测试文案这是一段测试文案这是一段测试文案这是一段测试文案'
</script>

<style scoped>
.wrapper{
  width: 300px;
  background: yellow;
}
</style>
