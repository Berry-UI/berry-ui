import { PropType, computed } from "vue"
type markType = "text" | "image"
/**
 * @description WaterMark的options设置
 */
export const WaterMarkProps = {
    /** 
     * @description 水印内容
     */
    content: {
        type: String,
        default: ""
    },
    // /** 
    //  * @description 水印类型
    //  */
    // type: {
    //     type: String as PropType<markType>,
    //     default: "text"
    // },
}

export const WaterMarkEmits = {
}

interface Props {
    content: string,
    // type: markType
}
export function drawCanvas(props: Props) {
    return computed(() => {
        const canvas: HTMLCanvasElement = document.createElement("canvas")
        const devicePixelRatio: number = window.devicePixelRatio || 1 //返回当前显示设备的物理像素分辨率与CSS 像素分辨率之比
        const defaultSize: number = 18
        const fontSize: number = defaultSize * devicePixelRatio *  2
        const font: string = fontSize + "px serif"
        const ctx: CanvasRenderingContext2D | null = canvas.getContext("2d")
        ctx!.font = font
        const { width } = ctx?.measureText(props.content) ?? { width: 100 }
        const canvasSize: number = Math.max(100, width)
        canvas.width = canvasSize / devicePixelRatio / 1.5
        canvas.height = canvasSize / devicePixelRatio / 1.5
        ctx?.translate(canvas.width / 4, canvas.height / 4)
        ctx?.rotate((Math.PI / 100) * -15) //将角度转换为弧度后再进行旋转
        ctx!.fillStyle = "rgba(0,0,0,.3)"
        ctx!.textAlign = "center"
        ctx!.globalAlpha = 0.7; // 设置透明度为0.5
        ctx?.fillText(props.content, 0, fontSize / 2)
        return {
            base64: canvas.toDataURL(),
            size: canvasSize,
            styleSize: canvasSize / devicePixelRatio,
            canvas: canvas
        }
    })
}