import Tooltip from './src/Tooltip.vue'
import { App } from 'vue'

Tooltip.install = function (Vue: App) {
    Vue.component('BerryTooltip', Tooltip);
}

export default Tooltip

export type TooltipInstance = InstanceType<typeof Tooltip>;
export {
    Tooltip as BerryTooltip
}