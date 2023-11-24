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
const ns = useNS('input')
const props = defineProps({ ...InputProps })
console.log(props.icon)

const ber_input = computed(() => {
    return [
        ns.namespace,
    ]
})
const ber_input_el = computed(() => {
    return [
        ns.m('el'),
    ]
})


</script>

<template>
    <div :class="ber_input">
        <input :class="ber_input_el" :type="props.type" >
    </div>
</template>

<style lang="scss" scoped>

</style>