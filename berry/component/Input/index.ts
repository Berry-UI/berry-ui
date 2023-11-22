import Input from './src/Input.vue'
import { App } from 'vue'

Input.install = function (Vue: App) {
    Vue.component('BerryInput', Input);
}

export default Input

export type InputInstance = InstanceType<typeof Input>;
export {
    Input as BerryInput
}