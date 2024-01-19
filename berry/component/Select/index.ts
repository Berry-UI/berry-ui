import Select from './src/Select.vue'
import { App } from 'vue'

Select.install = function (Vue: App) {
  Vue.component('BerrySelect', Select)
}

export default Select

export type Select = InstanceType<typeof Select>

export {
  Select as BerrySelect
}