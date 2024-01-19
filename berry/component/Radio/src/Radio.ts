import { PropType } from 'vue'
import { ElementSize, ElementColors } from 'berry-ui/typings'

/**
 * @description radio的options设置
 * label 单选框默认的label值 可以创建自定义属性从新创建关联
 * value 单选框默认的value值 可以创建自定义属性从新创建关联
 * disabled 当前单选框是否禁用
 */
export interface optionsType {
  label: string | number | boolean,
  value: string | number | boolean,
  disabled: boolean,
}
type options = optionsType[]
export const RadioProps = {
  modelValue: [String, Number, Boolean] as PropType<string | number | boolean>,
  /**
   * @descript radio 大小
   */
  size: String as PropType<ElementSize>,
  /**
   * @descript radio 的主题  <ghost> <button>
   */
  variant: String as PropType<'ghost' | 'button'>,
  /**
   * @descript 按钮组默认排列方式
   */
  vertical: {
    type: Boolean,
    default: false
  },
  options: {
    type: Array as PropType<options>,
    default: () => []
  },
  /**
   * @desciript Radio 的自定义颜色
   */
  customColor: String as PropType<ElementColors>
} as const

export const RadioEmits = {
  "update:modelValue": (val: string | number | boolean) => String(val),
  /**
   * @descipt 按钮发生改变的时候触发
   */
  change: (value: optionsType) => value,

}