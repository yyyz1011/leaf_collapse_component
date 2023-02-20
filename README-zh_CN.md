<center>
   <font size=6>leaf-collapse-component-vue</font> 
</center>

<center>
    <img src="https://img.shields.io/badge/vue-%5E3.2.45-green">
    <img src="https://img.shields.io/badge/license-MIT-red">
</center>

简体中文 | [English](./README.md)

# 🔥 安装

```shell
# 使用 npm
npm install leaf-collapse-component-vue

# 使用 yarn
yarn add leaf-collapse-component-vue
```

# 👍 使用

```javascript
// main.ts
import LeafCollapseComponentVue from "leaf-collapse-component-vue";
import "leaf-collapse-component-vue/lib/style.css";

app.use(LeafCollapseComponentVue);
```

```vue
const content = 'test content'

<leaf-collapse-textarea :content="content"></leaf-collapse-textarea>
```

# 📌 接收参数

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

# 👐 issues

> https://github.com/yyyz1011/leaf_collapse_component/issues
