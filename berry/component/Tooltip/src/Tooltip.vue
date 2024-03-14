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
import { TooltipProps, TooltipEmits, negation, Placement } from "./Tooltip"
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
    props.trigger == "hover" ? changeVisibleState(true) : void 0
}
function hideTooltip(): void {
    // visible.value = false

    props.trigger == "hover" ? changeVisibleState(false) : void 0
}
function changeShow(): void {
    props.trigger == "click" ? changeVisibleState(!visible.value) : void 0
}
function changeVisibleState(value: boolean) {
    let delay: number = +props.delay
    return setTimeout(() => { visible.value = value }, delay)
}

const tooltip = ref<HTMLElement | null>(null);
const slot = ref<HTMLElement | null>(null);
const keepTwoDecimal = (num: number) => {
    return Number(num.toFixed(2));
};

function getStyle(placement: string) {
    // 返回浏览器窗口的可见高度，包括水平滚动条的高度
    const clientHeight = document.documentElement.clientHeight
    // 返回浏览器窗口的可见宽度
    const clientWidth = document.documentElement.clientWidth
    // 返回整个文档的实际高度，包括不可见的部分
    const scrollHeight = document.documentElement.scrollHeight
    // 返回文档顶部相对于窗口顶部的偏移量
    const scrollTop = keepTwoDecimal(document.documentElement.scrollTop)

    if (!tooltip.value || !slot.value) return {};
    const slotRect = slot.value.getBoundingClientRect();
    const tooltipRect = tooltip.value.getBoundingClientRect();
    const offset = 10;
    const triangleOffset = 5;

    /**
     * @description
     * l:left
     * r:right
     * t:top
     * b:bottom
     * s:start
     * e:end
     */
    const tbLeft: number = slotRect.left + (slotRect.width - tooltipRect.width) / 2
    const tTop: number = slotRect.top - slotRect.height - offset + scrollTop
    const tbsLeft: number = slotRect.left - tooltipRect.width + slotRect.width
    const rLeft: number = slotRect.left + slotRect.width + offset
    const lrTop: number = slotRect.top + (slotRect.height - tooltipRect.height) / 2 + scrollTop
    const lrsTop: number = slotRect.top + scrollTop
    const lreTop: number = slotRect.top + (slotRect.height - tooltipRect.height) + scrollTop
    const lLeft: number = slotRect.left - tooltipRect.width - offset
    const bTop: number = slotRect.top + slotRect.height + offset + scrollTop
    const tbeLeft: number = slotRect.left

    // 上超出
    let outOfTop: boolean = tTop < scrollTop
    // 下超出
    let outOfBottom: boolean = bTop + slotRect.height > clientHeight + scrollTop
    // 左超出
    let outOfLeft: boolean = lLeft < 0
    // 右超出
    let outOfRight: boolean = rLeft + slotRect.width > clientWidth

    const tT = "rotate(45deg)"
    const rT = "rotate(-225deg)"
    const bT = "rotate(-135deg)"
    const lT = "rotate(-45deg)"

    const _tbLeft = `${(keepTwoDecimal(tooltipRect.width) / 2) - triangleOffset}px`
    const _tbsLeft = `${keepTwoDecimal(tooltipRect.width) - (keepTwoDecimal(slotRect.width) / 2) - triangleOffset}px`
    const _tbeLeft = `${(keepTwoDecimal(slotRect.width) / 2) - triangleOffset}px`
    const _lrLeft = `${keepTwoDecimal(tooltipRect.height) / 2 - triangleOffset}px`
    const _offset = `-4px`
    // if()
    let pType: Placement = props.placement
    if (outOfTop || outOfRight || outOfBottom || outOfLeft) {
        pType = negation(pType)
    }

    if (placement === 'content') {
        switch (pType) {
            case "top":
                return { left: `${tbLeft}px`, top: `${tTop}px` };
            case "top-start":
                return { left: `${tbsLeft}px`, top: `${tTop}px` };
            case "top-end":
                return { left: `${tbeLeft}px`, top: `${tTop}px` };
            case "right":
                return { left: `${rLeft}px`, top: `${lrTop}px` };
            case "right-start":
                return { left: `${rLeft}px`, top: `${lrsTop}px` };
            case "right-end":
                return { left: `${rLeft}px`, top: `${lreTop}px` };
            case "bottom":
                return { left: `${tbLeft}px`, top: `${bTop}px` };
            case "bottom-start":
                return { left: `${tbsLeft}px`, top: `${bTop}px` };
            case "bottom-end":
                return { left: `${tbeLeft}px`, top: `${bTop}px` };
            case "left":
                return { left: `${lLeft}px`, top: `${lrTop}px` };
            case "left-start":
                return { left: `${lLeft}px`, top: `${lrsTop}px` };
            case "left-end":
                return { left: `${lLeft}px`, top: `${lreTop}px` };
        }
    } else if (placement === 'triangle') {
        switch (pType) {
            case "top":
                return { left: _tbLeft, bottom: _offset, transform: tT };
            case "top-start":
                return { left: _tbsLeft, bottom: _offset, transform: tT };
            case "top-end":
                return { left: _tbeLeft, bottom: _offset, transform: tT };
            case "right":
                return { left: _offset, top: _lrLeft, transform: rT };
            case "right-start":
                return { left: _offset, top: _lrLeft, transform: rT };
            case "right-end":
                return { left: _offset, top: _lrLeft, transform: rT };
            case "bottom":
                return { left: _tbLeft, top: _offset, transform: bT };
            case "bottom-start":
                return { left: _tbsLeft, top: _offset, transform: bT };
            case "bottom-end":
                return { left: _tbeLeft, top: _offset, transform: bT };
            case "left":
                return { right: _offset, top: _lrLeft, transform: lT };
            case "left-start":
                return { right: _offset, top: _lrLeft, transform: lT };;
            case "left-end":
                return { right: _offset, top: _lrLeft, transform: lT };
        }
    }
}
</script>

<template>
    <div :class="ber_Tooltip" @mouseover="showTooltip" @mouseleave="hideTooltip" @click="changeShow" id="tooltip"
        :style="{ '--delay': delay + 's' }">
        <teleport to="body">
                <div v-if="visible" ref="tooltip" :class="ber_Tooltip_content" :style="getStyle('content')">
                    <div :class="ber_Tooltip_triangle" :style="getStyle('triangle')"></div>
                    <span class="font-small">{{ descirption }}</span>
                </div>
        </teleport>
        <div ref="slot" id="slot">
            <slot></slot>
        </div>
    </div>
</template>

<style lang="scss" scoped></style>