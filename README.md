# leaf-collapse-component-vue

<img src="https://img.shields.io/badge/vue-%5E3.2.45-green">

English | [įŽäŊä¸­æ](./README-zh_CN.md)

# đĨ Install

```shell
# with npm
npm install leaf-collapse-component-vue

# with yarn
yarn add leaf-collapse-component-vue
```

# đ Usage

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

# đ Props

```ts
const {
  width = "100%",
  lineHeight = 20,
  defaultCollapseLine = 3,
  content,
} = defineProps<{
  width?: string | number; // component width
  lineHeight?: number; // line-height
  defaultCollapseLine?: number; // default line
  content: string; // content
}>();
```

# đ issues

> https://github.com/yyyz1011/leaf_collapse_component/issues
