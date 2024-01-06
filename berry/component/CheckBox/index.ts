import CheckBox from './src/CheckBox.vue'
import { App } from 'vue'

CheckBox.install = function (Vue: App) {
    Vue.component('BerryCheckBox', CheckBox);
}

export default CheckBox

export type CheckBoxInstance = InstanceType<typeof CheckBox>;
export {
    CheckBox as BerryCheckBox
}