import { PropType } from 'vue'
export declare type Alignment = "start" | "end"
export declare type Side = "top" | "right" | "bottom" | "left"
export declare type AlignedPlacement = `${Side}-${Alignment}`
export declare type Placement = Side | AlignedPlacement
const oppositeMap = {
    'top': 'bottom',
    'right': 'left',
    'bottom': 'top',
    'left': 'right',
    'start': 'start',
    'end': 'end'
};
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
        type: [Number, String],
        default: 0
    },
}

export const TooltipEmits = {
    click: (value: boolean) => void 0,
}

/**
 * @description 取反函数
 */
export function negation(direction: Placement): Placement {
    const parts: Placement[] = direction.split('-') as Placement[]
    const mainDirection: Side = parts[0] as Side
    const subDirection: Alignment = parts[1] as Alignment

    let oppositeMainDirection: Side = oppositeMap[mainDirection] as Side
    let oppositeSubDirection: Placement | "" = subDirection ? oppositeMap[subDirection] as Placement : ''

    let oppositeDirection: Placement = oppositeMainDirection;
    if (oppositeSubDirection) {
        oppositeDirection += `-${oppositeSubDirection}`
    }

    return oppositeDirection as Placement
}