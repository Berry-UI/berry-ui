<!--
@Project: Berry
@author: Rain
@createDate: 2024
-->
<script setup lang="ts">
defineOptions({
    name: "BerryTooltip"
})
import { ref, computed, onMounted } from "vue";
import { useNS } from "berry-ui/hooks/useNS"
import { TooltipProps, TooltipEmits } from "./Tooltip"
const ns = useNS("tooltip")

const props = defineProps(TooltipProps)
const emits = defineEmits(TooltipEmits)

const ber_Tooltip = computed(() => {
    return [
        ns.namespace,
    ]
})
const ber_Tooltip_content = computed(() => {
    return [
        ns.m("content")
    ]
})
const ber_Tooltip_triangle = computed(() => {
    return [
        ns.m("triangle")
    ]
})

let visible = ref<Boolean>(false)
function showTooltip(): void {
    visible.value = true
}
function hideTooltip(): void {
    visible.value = false
}

const tooltip = ref<HTMLElement | null>(null);
const slot = ref<HTMLElement | null>(null);
const keepTwoDecimal = (num: number) => {
    return Number(num.toFixed(2));
};

onMounted(() => {
    window.addEventListener('scroll', (event: Event) => {
        getStyle('content')
        getStyle('triangle')
    });
})

const getStyle = (placement: string) => {
    if (!tooltip.value || !slot.value) return {};
    const slotRect = slot.value.getBoundingClientRect();
    const tooltipRect = tooltip.value.getBoundingClientRect();
    const offset = 10;
    const triangleOffset = 5;

    const s_d = document.getElementById("slot")
    // const t_d = document.getElementById("tooltip")
    // console.log("t_d", t_d)
    // console.log("s_d", s_d)
    // offsetHeight为元素距离
    console.log(document.documentElement.clientTop)
    // console.log(window.innerHeight)

    if (placement === 'content') {
        switch (props.placement) {
            case "top":
                return { left: `${slotRect.left - (keepTwoDecimal(tooltipRect.width) / 2) + (keepTwoDecimal(slotRect.width) / 2)}px`, top: `${slotRect.top - tooltipRect.height - offset}px` };
            case "top-start":
                return { left: `${tooltipRect.left - tooltipRect.width + slotRect.width}px`, top: `${slotRect.top - tooltipRect.height - offset}px` };
            case "top-end":
                return { left: `${tooltipRect.left}px`, top: `${slotRect.top - tooltipRect.height - offset}px` };
            case "right":
                return { left: `${keepTwoDecimal(slotRect.right) + offset}px`, top: `${slotRect.top + keepTwoDecimal(slotRect.height) / 2 - keepTwoDecimal(tooltipRect.height) / 2}px` };
            // return { left: `${keepTwoDecimal(slotRect.right) + offset}px`, top: `${s_d?.offsetTop }px` };
            case "right-start":
                return { left: `${keepTwoDecimal(slotRect.right) + offset}px`, top: `${tooltipRect.top}px` };
            case "right-end":
                return { left: `${keepTwoDecimal(slotRect.right) + offset}px`, top: `${slotRect.bottom - tooltipRect.height}px` };
            case "bottom":
                return { left: `${slotRect.left - (keepTwoDecimal(tooltipRect.width) / 2) + (keepTwoDecimal(slotRect.width) / 2)}px`, top: `${slotRect.bottom + offset}px` };
            case "bottom-start":
                return { left: `${keepTwoDecimal(tooltipRect.left) - keepTwoDecimal(tooltipRect.width) + keepTwoDecimal(slotRect.width)}px`, top: `${slotRect.bottom + offset}px` };
            case "bottom-end":
                return { left: `${keepTwoDecimal(tooltipRect.left)}px`, top: `${slotRect.bottom + offset}px` };
            case "left":
                return { left: `${keepTwoDecimal(slotRect.left) - keepTwoDecimal(tooltipRect.width) - offset}px`, top: `${slotRect.top + keepTwoDecimal(slotRect.height) / 2 - keepTwoDecimal(tooltipRect.height) / 2}px` };
            case "left-start":
                return { left: `${keepTwoDecimal(slotRect.left) - keepTwoDecimal(tooltipRect.width) - offset}px`, top: `${tooltipRect.top}px` };
            case "left-end":
                return { left: `${keepTwoDecimal(slotRect.left) - keepTwoDecimal(tooltipRect.width) - offset}px`, top: `${slotRect.bottom - tooltipRect.height}px` };
        }
    } else if (placement === 'triangle') {
        switch (props.placement) {
            case "top":
                return { left: `${(keepTwoDecimal(tooltipRect.width) / 2) - triangleOffset}px`, bottom: `-4px`, transform: `rotate(45deg)` };
            case "top-start":
                return { left: `${keepTwoDecimal(tooltipRect.width) - (keepTwoDecimal(slotRect.width) / 2) - triangleOffset}px`, bottom: `-4px`, transform: `rotate(45deg)` };
            case "top-end":
                return { left: `${(keepTwoDecimal(slotRect.width) / 2) - triangleOffset}px`, bottom: `-4px`, transform: `rotate(45deg)` };
            case "right":
                return { left: `${-4}px`, top: `${keepTwoDecimal(tooltipRect.height) / 2 - triangleOffset}px`, transform: `rotate(-225deg)` };
            case "right-start":
                return { left: `${-4}px`, top: `${keepTwoDecimal(tooltipRect.height) / 2 - triangleOffset}px`, transform: `rotate(-225deg)` };
            case "right-end":
                return { left: `${-4}px`, top: `${keepTwoDecimal(tooltipRect.height) / 2 - triangleOffset}px`, transform: `rotate(-225deg)` };
            case "bottom":
                return { left: `${(keepTwoDecimal(tooltipRect.width) / 2) - triangleOffset}px`, top: `-4px`, transform: `rotate(-135deg)` };
            case "bottom-start":
                return { left: `${keepTwoDecimal(tooltipRect.width) - (keepTwoDecimal(slotRect.width) / 2) - triangleOffset}px`, top: `-4px`, transform: `rotate(-135deg)` };
            case "bottom-end":
                return { left: `${(keepTwoDecimal(slotRect.width) / 2) - triangleOffset}px`, top: `-4px`, transform: `rotate(-135deg)` };
            case "left":
                return { right: `${-4}px`, top: `${keepTwoDecimal(tooltipRect.height) / 2 - triangleOffset}px`, transform: `rotate(-45deg)` };
            case "left-start":
                return { right: `${-4}px`, top: `${keepTwoDecimal(tooltipRect.height) / 2 - triangleOffset}px`, transform: `rotate(-45deg)` };;
            case "left-end":
                return { right: `${-4}px`, top: `${keepTwoDecimal(tooltipRect.height) / 2 - triangleOffset}px`, transform: `rotate(-45deg)` };
        }
    }
}
</script>

<template>
    <div :class="ber_Tooltip" @mouseover="showTooltip" @mouseleave="hideTooltip" id="tooltip">
        <div v-if="visible" ref="tooltip" :class="ber_Tooltip_content" :style="getStyle('content')">
            <div :class="ber_Tooltip_triangle" :style="getStyle('triangle')"></div>
            <span class="font-small">{{ descirption }}</span>
        </div>
        <div ref="slot" id="slot">
            <slot></slot>
        </div>
    </div>
</template>

<style lang="scss" scoped></style>