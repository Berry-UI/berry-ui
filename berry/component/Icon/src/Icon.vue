<!--
@Project: Berry
@author: Rain
@createDate: 2023
-->
<script setup lang="ts">
import { computed } from "vue"
import "../../../assets/iconfont"
import { useNS } from "berry-ui/hooks/useNS"
import { IconProps } from './Icon'

defineOptions({
    name: 'BerryIcon'
})

const ns = useNS('icon')
const props = defineProps({ ...IconProps })
const iconName = computed(() => `#berry-${props.name}`)

const rotate = computed(() => {
    return props.rotate === !!props.rotate ? props.rotate : false
})
const ber_icon = computed(() => {
    return [
        ns.namespace,
    ]
})
const kls = computed(() => {
    return [
        ns.b("content"),
        ns.m(rotate.value ? "rotate" : ''),
    ]
})
</script>

<template>
    <div :class="ber_icon">
        <svg :class="kls" aria-hidden="true" :style="{ 'color': props.color, '--icon-size': props.size }">
            <use :xlink:href="iconName"></use>
        </svg>
    </div>
</template>

<style lang="scss" scoped></style>
