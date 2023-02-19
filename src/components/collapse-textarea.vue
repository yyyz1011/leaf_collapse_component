<template>
  <div
    :class="collapseTextareaClassName"
    :style="collapseTextareaStyle"
    @click="handleExpandText"
  >
    <template v-if="isShowExpandBtn">
      <span v-show="!isExpand" class="text-button">
        展开
        <i class="down-arrow" />
      </span>
    </template>
    <div class="content" ref="contentRef">
      {{ content }}
    </div>
    <template v-if="isShowExpandBtn">
      <span v-show="isExpand" class="text-button">
        收起
        <i class="up-arrow" />
      </span>
    </template>
  </div>
</template>

<script setup lang="ts">
import { ref, Ref, computed, watch, nextTick } from "vue";

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

const contentRef: Ref<null | HTMLElement> = ref(null);

const isExpand: Ref<boolean> = ref(true); // 是否展开
const isShowExpandBtn: Ref<boolean> = ref(false); // 是否展示展开/收起按钮
const textHeight: Ref<number> = ref(1000);

const collapseTextareaClassName = computed(() =>
  isExpand.value ? "leaf-textarea-expand" : "leaf-textarea-collapse"
);

const collapseTextareaStyle = computed(() => {
  let textWidth = null;
  if (typeof width === "number") {
    textWidth = `${width}%`;
  } else {
    textWidth = width;
  }
  return {
    // 文本宽度
    "--leaf-text-width": textWidth,
    // 设置行高
    "--leaf-text-line-height": lineHeight + "px",
    // 设置第n行开始省略
    "--leaf-text-hidden-line": defaultCollapseLine,
  };
});

watch(
  () => content,
  () => {
    nextTick(() => {
      getTextHeight();
    });
  },
  {
    deep: true,
    immediate: true,
  }
);

function getTextHeight() {
  const rate = window.innerWidth / 375;
  if (!contentRef.value) return;
  const contentHeight = contentRef.value?.offsetHeight;
  isShowExpandBtn.value =
    contentHeight > rate * defaultCollapseLine * lineHeight;
  textHeight.value = contentHeight;
  if (isShowExpandBtn) isExpand.value = false;
}

function handleExpandText() {
  isExpand.value = !isExpand.value;
}
</script>

<style scoped>
.text-wrapper {
  width: var(--leaf-text-width);
  line-height: var(--leaf-text-line-height);
  overflow: hidden;
  max-height: calc(var(--leaf-text-line-height) * var(--leaf-text-hidden-line));
}

.text-button {
  margin-left: 5px;
  margin-right: 10px;
  height: var(--leaf-text-line-height);
  float: right;
  clear: both;
  pointer-events: auto;

  font-family: PingFang SC;
  font-weight: 500;
  font-size: 13px;
  line-height: 18px;
  text-align: right;
  color: rgba(22, 24, 35, 0.75);
  cursor: pointer;
}

.leaf-textarea-collapse {
  pointer-events: none;
  text-overflow: ellipsis;
  overflow: hidden;
  display: -webkit-box;
  -webkit-box-orient: vertical;
  -webkit-line-clamp: var(--leaf-text-hidden-line);
}

.leaf-textarea-collapse::before {
  content: "";
  float: right;
  height: calc(
    (var(--leaf-text-hidden-line) - 0.9) * var(--leaf-text-line-height)
  );
  width: 0;
}

.leaf-textarea-expand {
  max-height: calc(
    var(--leaf-text-hidden-line) * var(--leaf-text-line-height) * 1px
  );
  pointer-events: none;
}

.down-arrow {
  margin-left: 5px;
  margin-top: 6.5px;
  float: right;
  width: 0;
  height: 0;
  border-width: 5px;
  border-style: solid;
  border-color: rgba(22, 24, 35, 0.75) transparent transparent transparent;
}

.up-arrow {
  margin-left: 5px;
  float: right;
  width: 0;
  height: 0;
  border-width: 5px;
  border-style: solid;
  border-color: transparent transparent rgba(22, 24, 35, 0.75) transparent;
}
</style>