import { PropType } from 'vue'
import { ElementSize,ElementColors } from 'berry-ui/typings'

/**
 * @description radio的options设置
 * label 单选框默认的label值 可以创建自定义属性从新创建关联
 * value 单选框默认的value值 可以创建自定义属性从新创建关联
 * disabled 当前单选框是否禁用
 */
interface optionsType {
  label: string | number | boolean,
  value: string | number | boolean,
  disabled: boolean,
}
type options = optionsType[]
export const RodioProps = {
  /**
   * @descript radio 大小
   */
  size: String as PropType<ElementSize>,
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
  costomColor: String as PropType<ElementColors>
} as const