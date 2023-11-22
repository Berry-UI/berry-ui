import { PropType } from "vue"
import { ElementSize } from 'berry-ui/typings'
type actionTypes = false | true

export const InputProps = {
    /**
     * @description 字体图标的名称 主要控制字体图标
     */
    type: String,
    /**
     * @description 字体图标的大小 主要在显示大小
     * */
    size: String as PropType<ElementSize>,
    /**
     * @description 字体图标的动作 主要控制旋转
     */
    raidus: Number,
    /**
     * @description 字体图标的动作 主要控制旋转
     */
    disabled: {
        type: Boolean as PropType<actionTypes>,
        default: false
    }

}