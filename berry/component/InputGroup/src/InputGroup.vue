<!--
@Project: Berry
@author: Rain
@createDate: 2024
-->
<script setup lang="ts">
import { useNS } from 'berry-ui/hooks/useNS'
import { computed } from 'vue'
const ns = useNS('input-group')
const kls = computed(() => {
    return [
        ns.namespace
    ]
}) 
</script>

<template>
    <div :class="kls">
        <slot></slot>
    </div>
</template>

<style lang="scss" scoped></style>