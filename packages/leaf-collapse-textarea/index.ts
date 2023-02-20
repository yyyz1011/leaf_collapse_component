import { App } from "vue";
import LeafCollapseTextarea from "./leaf-collapse-textarea.vue";

LeafCollapseTextarea.install = (App: App) => {
  App.component(LeafCollapseTextarea.__name, LeafCollapseTextarea);
};

export default LeafCollapseTextarea;
