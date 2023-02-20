import { App } from "vue";
import LeafCollapseTextarea from "./leaf-collapse-textarea";

export { LeafCollapseTextarea };

const components = [LeafCollapseTextarea];

const install = (App: App) => {
  components.forEach((item) => {
    App.component(item.__name, item);
  });
};

export default {
  install,
};
