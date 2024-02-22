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
    descirption: {
        type: String,
    }
}


export const TooltipEmits = {
}
