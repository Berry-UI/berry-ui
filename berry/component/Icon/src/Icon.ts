import { PropType } from "vue"
import { ElementSize, ElementTypes } from 'berry-ui/typings'

type iconTypes = ElementTypes | 'primary' | 'cyan';
const iconNativeTypes = ['icon', 'submit', 'reset'] as const;

export const iconProps = {
    /**
     * @description 按钮的类型 主要控制颜色
     */
    type: String as PropType<iconTypes>,
    /**
     * @description 按钮的原生形态
     */
    nativeType: {
        type: String as PropType<(typeof iconNativeTypes)[number]>,
        default: iconNativeTypes[0]
    },
    /**
     * @description 按钮的主题 主要在交互上表现 
     * */
    variant: String as PropType<'ghost' | 'fantasy' | 'empty'>,
    /**
     * @description 按钮的状态 主要控制外观
     */
    status: String as PropType<'round' | 'circel'>
}