import { PropType } from "vue"
import { ElementSize, defaultTypes } from "berry-ui/typings"

type inputTypes = "text" | "password" | "textarea"
type passwordOn = "click" | "mousedown"
// type iconTypes = "pre" | "suf"
// type iconAddress<T extends iconTypes> = `${T}fix`

export const InputProps = {
    /**
     * @description 输入框类型，如text、password、textarea
     * @param {text | password | textarea}
     */
    type: {
        type: String as PropType<inputTypes>,
        default: "text"
    },
    /**
     * @description  输入框大小
     * @param {small | normal | large}
     * */
    size: {
        type: String as PropType<ElementSize>,
        default: "normal"
    },
    /**
     * @description 输入框圆角
     */
    raidus: {
        type: Number,
        default: 2
    },
    /**
    * @description 输入框校验规则
    */
    rule: {
        type: String,
        default: ""
    },
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
   * @description 绑定值
   */
    modelValue: {
        type: String,
        default: ""
    },
    /**
   * @description 显示值
   */
    placeholder: {
        type: String,
        default: ""
    },
    /** 
     * @description 密码打开方式
     * @param { click | mousedown }
     */
    passwordOn: {
        type: String as PropType<passwordOn>,
        default: "click"
    },
    /** 
     * @description 最小长度
     */
    minLength: {
        type: [String, Number],
        default: "524288"
    },
    /** 
     * @description 最大长度
     */
    maxLength: {
        type: [String, Number],
        default: "524288"
    },
    /** 
     * @description 是否显示输入长度
     */
    showCount: {
        type: Boolean as PropType<defaultTypes>,
        default: false
    },
    /** 
     * @description 是否自动完成
     */
    autocomplete: {
        type: Boolean as PropType<defaultTypes>,
        default: false
    },
    /** 
     * @description 是否必填
     */
    required: {
        type: Boolean as PropType<defaultTypes>,
        default: false
    }
}
export const InputEmits = {
    "update:modelValue": (value: String) => value || true,
    /**
     * @descipt 输入值发生改变的时候触发
     */
    change: (value: String) => value || true,
    /**
     * @descipt 聚焦时触发
     */
    focus: (event: FocusEvent) => event,
    /**
     * @descipt 失焦时触发
     */
    blur: (event: FocusEvent) => event,
}