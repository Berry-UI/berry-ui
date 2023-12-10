import Radio from './src/Radio.vue'
import { App } from 'vue'

Radio.install = function(Vue:App) {
  Vue.component('BerryRadio',Radio)
}

export default Radio