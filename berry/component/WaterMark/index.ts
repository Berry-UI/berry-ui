import WaterMark from './src/WaterMark.vue'
import { App } from 'vue'

WaterMark.install = function (Vue: App) {
    Vue.component('BerryWaterMark', WaterMark);
}

export default WaterMark

export type WaterMarkInstance = InstanceType<typeof WaterMark>;
export {
    WaterMark as BerryWaterMark
}