// node_modules/berry-ui/index.ts
import BerryIcon from "L:/Project/Web_project/berry-ui/node_modules/berry-ui/Icon/Icon.vue";
var componentArr = [BerryIcon];
var BerryUI = function(Vue) {
  componentArr.forEach((itemComponent) => {
    Vue.component(itemComponent.name, itemComponent);
  });
};
var berry_ui_default = BerryUI;
export {
  BerryIcon,
  berry_ui_default as default
};
//# sourceMappingURL=berry-ui.js.map
