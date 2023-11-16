import Button from './src/Button.vue'
import { App } from 'vue'
// import { registerInstall } from '../../util/reginstall'


Button.install = function (Vue: App) {
  Vue.component('BerryButton', Button)
}
export default Button

export type ButtonTypeInstance = InstanceType<typeof Button> 
export {
  Button as BerryButton
}