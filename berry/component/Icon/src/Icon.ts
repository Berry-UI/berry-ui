import { PropType } from "vue"
import { RGB, RGBA, HEX } from 'berry-ui/typings'
type actionTypes = false | true

export const IconProps = {
    /**
     * @description 字体图标的名称 主要控制字体图标
     */
    name: String,
    /**
     * @description 字体图标的大小 主要在显示大小
     * */
    size: String,
    /**
     * @description 字体图标的颜色 主要控制外观
     */
    color: String as PropType<RGB | RGBA | HEX>,
    /**
     * @description 字体图标的动作 主要控制旋转
     */
    rotate: {
        type: Boolean as PropType<actionTypes>,
        default: false
    }
}