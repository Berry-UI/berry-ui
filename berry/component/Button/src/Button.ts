import { PropType } from "vue"
import { ElementSize, ElementTypes } from 'berry-ui/typings'

type buttonTypes = ElementTypes | 'primary' | 'cyan';
const buttonNativeTypes = ['button', 'submit', 'reset'] as const;

export const ButtonProps = {
  /**b
   * @description 按钮的类型 主要控制颜色
   */
  type: String as PropType<buttonTypes>,
  /**
   * @description 按钮的原生形态
   */
  nativeType: {
    type: String as PropType<(typeof buttonNativeTypes)[number]>,
    default: buttonNativeTypes[0]
  },
  /**
   * @description 按钮的主题 主要在交互上表现 
   * */
  variant: String as PropType<'ghost' | 'fantasy' | 'empty'>,
  /**
   * @description 按钮的状态 主要控制外观
   */
  status: String as PropType<'round' | 'circel'>,
  /**
   * @description 是否为加载状态 
   */
  loading: Boolean,
  /**
   * @description 按钮是否为禁用状态
   */
  disabled: Boolean,
  /**
   * @description 按钮的大小
   */
  size: String as PropType<ElementSize>,
  /**
   * @description 按钮前缀的图标
   */
  prefixIcon: String,
  /**
   * @description 代码后缀图标
   */
  suffixIcon: String
} as const

export const ButtonEmits = {
  /**
   * @description 点击按钮之后触发的事件
   * @param evt
   */
  click: (evt: MouseEvent) => evt instanceof Event
}