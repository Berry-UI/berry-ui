import { PropType } from "vue"
import { ElementSize } from 'berry-ui/typings'
type defaultTypes = false | true
type inputTypes = 'text' | 'password' | 'textarea'
type iconTypes = 'pre' | 'suf'
type iconAddress<T extends iconTypes> = `${T}fix`

export const InputProps = {
    /**
     * @description 输入框类型，如text、password、textarea
     */
    type: {
        type: String as PropType<inputTypes>,
        default: 'text'
    },
    /**
     * @description 输入框大小
     * */
    size: {
        type: String as PropType<ElementSize>,
        default: 'normal'
    },
    /**
     * @description 输入框圆角
     */
    raidus: Number,
    /**
    * @description 输入框校验规则
    */
    rule: String,
    /**
     * @description 是否一键清空
     */
    clearable: {
        type: Boolean as PropType<defaultTypes>,
        default: false
    },
    /**
    * @description 是否可点击
    */
    disabled: {
        type: Boolean as PropType<defaultTypes>,
        default: false
    },
    /**
    * @description 前后图标
    */
    icon: {
        type: String as PropType<iconAddress<iconTypes>>,
    }
}