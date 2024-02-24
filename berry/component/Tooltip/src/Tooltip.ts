import { PropType } from 'vue'
export declare type Alignment = "start" | "end"
export declare type Side = "top" | "right" | "bottom" | "left"
export declare type AlignedPlacement = `${Side}-${Alignment}`
export declare type Placement = Side | AlignedPlacement

/**
 * @description Tooltip的options设置
 */
export const TooltipProps = {
    /** 
     * @description tooltip位置
     */
    placement: {
        type: String as PropType<Placement>,
        default: "top"
    },
    /** 
     * @description tooltip内容
     */
    descirption: {
        type: String,
    },
    /** 
     * @description 触发方式
     */
    trigger: {
        type: String as PropType<"hover" | "click">,
        default: "hover"
    },
    /** 
     * @description 延迟关闭时间
     */
    delay: {
        type: [Number,String],
        default: 0.3
    },
}

export const TooltipEmits = {
    click: (value: boolean) => void 0,
}
