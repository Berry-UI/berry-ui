import { PropType } from "vue"
import { ElementSize } from "berry-ui/typings"

export const CheckBoxGroupProps = {
    /**
   * @description 绑定值
   */
    modelValue: {
        type: Array as () => (number | string)[],
        default: []
    },
    size: {
        type: String as PropType<ElementSize>,
        default: "normal"
    }
}
export const CheckBoxGroupEmits = {
    "update:modelValue": (value: (number | string)[]) => value,
    /**
     * @descipt 输入值发生改变的时候触发
     */
    change: (value: string | number, flag: number) => value,
}