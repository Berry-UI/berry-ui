// import { PropType } from "vue"
// import { ElementSize } from "berry-ui/typings"
// type defaultTypes = false | true
interface valueType {
    value: String
}

export const CheckBoxProps = {
    /**
   * @description 绑定值
   */
    modelValue: {
        type: Array,
        default: []
    }
}
export const CheckBoxEmits = {
    "update:modelValue": (value: Array<String>) => value || true,
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