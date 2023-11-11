import { Component } from "vue"
import BerryIcon from "./Icon/Icon.vue"

const componentArr: Array<Component> = [BerryIcon,]
const BerryUI = function (Vue: any) {
    componentArr.forEach((itemComponent: Component) => {
        Vue.component(itemComponent.name as string, itemComponent)
    })
}
export { BerryIcon, }
export default BerryUI