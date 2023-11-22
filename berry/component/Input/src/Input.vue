<!--
@Project: Berry
@author: Rain
@createDate: 2023
-->
<script setup lang="ts">
import { computed } from "vue"
import { useNS } from "berry-ui/hooks/useNS"
import { InputProps } from './Input'

defineOptions({
    name: 'BerryInput'
})
const ns = useNS('icon')
const props = defineProps({ ...InputProps })


const kls = computed(() => {
    return [
        ns.namespace,
    ]
})
</script>

<template>
    <input type="text" :class="kls">
</template>

<style lang="scss" scoped>

</style>