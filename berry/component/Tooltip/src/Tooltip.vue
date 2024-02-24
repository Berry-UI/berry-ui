<!--
@Project: Berry
@author: Rain
@createDate: 2024
-->
<script setup lang="ts">
defineOptions({
    name: "BerryTooltip"
})
import { ref, computed } from "vue";
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


    props.trigger == "hover" ? visible.value = true : void 0
}
function hideTooltip(): void {
    // visible.value = false

    props.trigger == "hover" ? visible.value = false : void 0
}
function changeShow(): void {
    props.trigger == "click" ? visible.value = !visible.value : void 0
}

const tooltip = ref<HTMLElement | null>(null);
const slot = ref<HTMLElement | null>(null);
const keepTwoDecimal = (num: number) => {
    return Number(num.toFixed(2));
};

const getStyle = (placement: string) => {
    if (!tooltip.value || !slot.value) return {};
    const slotRect = slot.value.getBoundingClientRect();
    const tooltipRect = tooltip.value.getBoundingClientRect();
    const offset = 10;
    const triangleOffset = 5;

    if (placement === 'content') {
        switch (props.placement) {
            case "top":
                return { left: `${(slotRect.width - tooltipRect.width) / 2}px`, top: `${-slotRect.height - offset}px` };
            case "top-start":
                return { left: `${slotRect.width - tooltipRect.width}px`, top: `${-slotRect.height - offset}px` };
            case "top-end":
                return { left: `${0}px`, top: `${-slotRect.height - offset}px` };
            case "right":
                return { left: `${slotRect.width + offset}px`, top: `${(slotRect.height - tooltipRect.height) / 2}px` };
            case "right-start":
                return { left: `${slotRect.width + offset}px`, top: `${0}px` };
            case "right-end":
                return { left: `${slotRect.width + offset}px`, top: `${(slotRect.height - tooltipRect.height)}px` };
            case "bottom":
                return { left: `${(slotRect.width - tooltipRect.width) / 2}px`, top: `${slotRect.height + offset}px` };
            case "bottom-start":
                return { left: `${slotRect.width - tooltipRect.width}px`, top: `${slotRect.height + offset}px` };
            case "bottom-end":
                return { left: `${0}px`, top: `${slotRect.height + offset}px` };
            case "left":
                return { left: `${-tooltipRect.width - offset}px`, top: `${(slotRect.height - tooltipRect.height) / 2}px` };
            case "left-start":
                return { left: `${-tooltipRect.width - offset}px`, top: `${0}px` };
            case "left-end":
                return { left: `${-tooltipRect.width - offset}px`, top: `${(slotRect.height - tooltipRect.height)}px` };
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
    <div :class="ber_Tooltip" @mouseover="showTooltip" @mouseleave="hideTooltip" @click="changeShow" id="tooltip"
        :style="{ '--delay': delay + 's' }">
        <transition :name="`tooltip-fade`">
            <div v-if="visible" ref="tooltip" :class="ber_Tooltip_content" :style="getStyle('content')">
                <div :class="ber_Tooltip_triangle" :style="getStyle('triangle')"></div>
                <span class="font-small">{{ descirption }}</span>
            </div>
        </transition>
        <div ref="slot" id="slot">
            <slot></slot>
        </div>
    </div>
</template>

<style lang="scss" scoped></style>