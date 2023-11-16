import Icon from './src/Icon.vue'
import { App } from 'vue'

Icon.install = function (Vue: App) {
    Vue.component('BerryIcon', Icon);
}

export default Icon

export type IconInstance = InstanceType<typeof Icon>;
export {
  Icon as BerryIcon
}