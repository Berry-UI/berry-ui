import InputGroup from './src/InputGroup.vue'
import { App } from 'vue'

InputGroup.install = function (Vue: App) {
    Vue.component('BerryInputGroup', InputGroup)
}

export default InputGroup

export type InputGroup = InstanceType<typeof InputGroup>

export {
    InputGroup as BerryInputGroup
}