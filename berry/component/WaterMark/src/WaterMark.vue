<!--
@Project: Berry
@author: Rain
@createDate: 2024
-->

<script setup lang="ts">
defineOptions({
    name: "BerryWaterMark"
})
import { ref, onMounted, onUnmounted, watchEffect } from "vue";
import { useNS } from "berry-ui/hooks/useNS"
import { WaterMarkProps, drawCanvas } from "./WaterMark"
const ns = useNS("watermark")

const props = defineProps(WaterMarkProps)
const watermark = ref<HTMLElement | null>(null)

const canvas = drawCanvas({ ...props })
console.log(canvas.value)
const { base64, styleSize } = canvas.value
const markflag = ref(0)
watchEffect(() => {
    markflag.value
    drawMark()
})
let observer: MutationObserver;
onMounted(() => {
    // 创建观察者
    observer = new MutationObserver((records) => {
        console.log(records)

        for (let record of records) {
            for (let dom of record.removedNodes) {
                if (dom === markBox) {
                    markflag.value++
                }
            }
            if (record.target === markBox) {
                markflag.value++
                return
            }
        }
    })
    if (watermark.value) {
        const options = {
            attributes: true,
            childList: true,
            subtree: true
        };
        // 监听观察对象
        observer.observe(watermark.value, options)
    }
})
onUnmounted(() => {
    // 取消观察对象
    observer && observer.disconnect()
    markBox = null
})
let markBox: HTMLElement | null
function drawMark() {
    if (!watermark.value) return;
    if (markBox) {
        markBox.remove()
    }
    markBox = document.createElement("div")
    markBox.style.backgroundImage = `url(${base64})`
    markBox.style.backgroundSize = `${styleSize}px ${styleSize}px`
    markBox.style.backgroundRepeat = "repeat"
    markBox.style.zIndex = "9999"
    markBox.style.position = "absolute"
    markBox.style.inset = "0"
    watermark.value?.appendChild(markBox)
}
</script>

<template>
    <div :class="[ns.namespace]" ref="watermark" style="position: relative;">
        <slot></slot>
    </div>
</template>

<style lang="scss" scoped></style>