import CheckBoxGroup from './src/CheckBoxGroup.vue'
import { App } from 'vue'

CheckBoxGroup.install = function (Vue: App) {
    Vue.component('BerryCheckBoxGroup', CheckBoxGroup);
}

export default CheckBoxGroup

export type CheckBoxGroupInstance = InstanceType<typeof CheckBoxGroup>;
export {
    CheckBoxGroup as BerryCheckBoxGroup
}