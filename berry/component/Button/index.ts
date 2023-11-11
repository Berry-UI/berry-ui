import Button from './src/Button.vue'
import { App } from 'vue'

Button.install = function (Vue: App) {
    Vue.component('BerryButton', Button)
}

export default Button