# [vue3]展开收起组件

# github链接

> https://github.com/yyyz1011/leaf_collapse_component
>
> 欢迎反馈~

# 使用

```javascript
// main.ts
import LeafCollapseComponentVue from "leaf-collapse-component-vue";
import "leaf-collapse-component-vue/lib/style.css";

app.use(LeafCollapseComponentVue);
```

```vue
const content = '测试'

<leaf-collapse-textarea :content="content"></leaf-collapse-textarea>
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
