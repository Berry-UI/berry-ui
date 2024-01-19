import Switch from './src/Switch.vue'
import { App } from 'vue'

Switch.install = function (Vue: App) {
    Vue.component('BerrySwitch', Switch);
}

export default Switch

export type SwitchInstance = InstanceType<typeof Switch>;
export {
    Switch as BerrySwitch
}