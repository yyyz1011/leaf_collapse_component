import { App } from "vue";
import CollapseTextarea from "./collapse-textarea";

export { CollapseTextarea };

const components = [CollapseTextarea];

const install = (App: App) => {
  components.forEach((item) => {
    App.component(item.__name, item);
  });
};

export default {
  install,
};
