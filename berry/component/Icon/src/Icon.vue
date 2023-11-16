<!--
@Project: Berry
@author: Rain
@createDate: 2023
-->
<script setup lang="ts">
import "../../../assets/iconfont"

import { computed } from "vue"
defineOptions({
    name: 'BerryIcon'
})

const props = defineProps({
    name: {
        type: String,
        required: true,
    },
    size: {
        type: String,
        required: false,
        default: '2rem',
    },
    color: {
        type: String,
        required: false,
    }
})
const iconName = computed(() => `#berry-${props.name}`)
</script>

<template>
    <svg class="icon" aria-hidden="true" :style="{ color: props.color }">
        <use :xlink:href="iconName"></use>
    </svg>
</template>

<style lang="scss" scoped>
.icon {
    width: v-bind(size);
    height: v-bind(size);
    vertical-align: -0.15em;
    fill: currentColor;
    display: inline-block;

    overflow: hidden;
}
</style>
