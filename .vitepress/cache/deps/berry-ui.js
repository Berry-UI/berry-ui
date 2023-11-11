// node_modules/berry-ui/component/Button/index.ts
import Button from "L:/Project/Web_project/berry-ui/node_modules/berry-ui/component/Button/src/Button.vue";
Button.install = function(Vue) {
  Vue.component("BerryButton", Button);
};
var Button_default = Button;

// node_modules/berry-ui/component/Icon/index.ts
import Icon from "L:/Project/Web_project/berry-ui/node_modules/berry-ui/component/Icon/src/Icon.vue";
Icon.install = function(Vue) {
  Vue.component("BerryIcon", Icon);
};
var Icon_default = Icon;

// node_modules/berry-ui/component/installer.ts
var comps = [
  Button_default,
  Icon_default
];
function installer_default(Vue) {
  for (let key in comps) {
    const comp = Reflect.get(comps, key);
    Vue.use(comp);
  }
}

// node_modules/berry-ui/index.ts
var berry_ui_default = installer_default;
export {
  berry_ui_default as default
};
//# sourceMappingURL=berry-ui.js.map
