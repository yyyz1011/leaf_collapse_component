import { App } from "vue";
import CollapseTextarea from "./collapse-textarea.vue";

CollapseTextarea.install = (App: App) => {
  App.component(CollapseTextarea.__name, CollapseTextarea);
};

export default CollapseTextarea;
