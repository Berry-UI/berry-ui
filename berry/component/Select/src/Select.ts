import { PropType } from 'vue'

/**
 * @description select option 得配置项 
 *  label 选项得标签  
 *  value 选项得唯一值
 *  disabled 选项是否禁用
 */
export interface optionsType {
  label: string | number | boolean,
  value: string | number | boolean,
  disabled: boolean
}
export type options = optionsType[]
export const SelectProps = {
  // 数据绑定
  modelValue: [String, Number, Boolean, Array<(String | Number)[]>] as PropType<string | number | boolean | (string | number)[]>,
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
  disabled: Boolean
}

export const SelectEmits = {
  "update:modelValue": (val: String | Boolean | Number | (String | number)[]) => val,
  change: (value: optionsType[]) => value
}