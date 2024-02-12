import { PropType } from "vue"
import { ElementSize } from "berry-ui/typings"

/**
 * @description select option 得配置项 
 *  label 选项得标签  
 *  value 选项得唯一值
 *  disabled 选项是否禁用
 */
interface childrenOption {
  label: string | number,
  value: string | number,
  disabled: boolean
}
export interface optionsType {
  type?: string,
  key?: string | number,
  label: string | number,
  value?: string | number,
  disabled?: boolean,
  children?: childrenOption[]
}

export type options = optionsType[]
export const SelectProps = {
  // 数据绑定
  modelValue: Array as PropType<(string | number)[]>,
  placeholder: {
    type: String as PropType<string>,
    default: '请选择'
  },
  /**
   * 是否可以多选
   */
  multiple: Boolean as PropType<boolean>,
  /**
   * @description  options
   */
  options: {
    type: Array as PropType<options>,
    default: () => []
  },
  /**
   * @descript disabled 当前下拉框是否禁用
   */
  disabled: Boolean,
  /**
   * @description size Select 组件的尺寸
   */
  size: {
    type: String as PropType<ElementSize>,
    default: "normal"
  },
  /**
   * @description 可以过滤的元素哦！ 
   */
  filterable: Boolean as PropType<boolean>,
  /**
 * @description 可动态创建选项
 */
  tag: Boolean as PropType<boolean>,
  /**
   * @description 是否可清空 
   */
  clearable: Boolean as PropType<boolean>
}

export const SelectEmits = {
  "update:modelValue": (val: (string | number)[]) => val,
  change: (value: optionsType[]) => value
}