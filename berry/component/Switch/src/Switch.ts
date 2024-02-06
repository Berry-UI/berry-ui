import { PropType } from 'vue'
import { ElementSize } from 'berry-ui/typings'

/**
 * @description Switch的options设置
 */
export const SwitchProps = {
    modelValue: {
        type: Boolean,
        // required: true
    },
    /**
     * @descript Switch 大小
     */
    size: {
        type: String as PropType<ElementSize>,
        default: 'normal'
    },
    /**
     * @descript Switch 的主题  <ghost> <button>
     */
    variant: String as PropType<'ghost' | 'button'>,
}


export const SwitchEmits = {
    "update:modelValue": (val: boolean) => val || true,
    /**
     * @descipt 按钮发生改变的时候触发
     */
    change: (value: boolean) => value || true,
}