import { PropType } from "vue"
import { defaultTypes } from "berry-ui/typings"

export const CheckBoxProps = {
    label: {
        type: String,
        default: "",
        required: true
    },
    value: {
        type: [String, Number],
        default: "",
        required: true
    },
    /**
     * @descipt 是否可选
     */
    disabled: {
        type: Boolean as PropType<defaultTypes>,
        default: false,
    }
}
export const CheckBoxEmits = {
}