import { Prop, PropType } from 'vue'

interface optionsType {
  label: string | number | boolean
  value: string | number | boolean
}
type options = optionsType[]
export const RodioProps = {
  /**
   * @descript 单选框的值
   */
  options: {
    type: Array as PropType<options>,
    default: () => []
  },
  value: [String, Number, Boolean] as PropType<string | number | boolean>,
  /**
   * @descript 按钮的选中状态
   */
  checked: {
    type: Boolean as PropType<boolean>,
    default: false
  },
  /**
   * @descript 按钮是否禁用
   */
  disabled: Boolean,
  /**
   * @descript 原生ID属性
   */
  id: String,
  /**
   * @descirpt 原生name属性
   */
  name: String
} as const