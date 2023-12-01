import ButtonGroup from './src/ButtonGroup.vue'
import { App } from 'vue'

ButtonGroup.install = function (Vue: App) {
  Vue.component('BerryButtonGroup', ButtonGroup)
}

export default ButtonGroup

export type ButtonGroup = InstanceType<typeof ButtonGroup>

export {
  ButtonGroup as BerryButtonGroup
}