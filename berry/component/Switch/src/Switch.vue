<!--
@Project: Berry
@author: Rain
@createDate: 2024
-->
<script setup lang="ts">
defineOptions({
    name: "BerrySwitch"
})
import { ref, computed, watch } from "vue";
import { useNS } from "berry-ui/hooks/useNS"
import { SwitchProps, SwitchEmits } from "./Switch"
const ns = useNS("switch")

const props = defineProps(SwitchProps)
const emits = defineEmits(SwitchEmits)

let value = ref<boolean>(props.modelValue)

const ber_switch = computed(() => {
    return [
        ns.namespace,
        ns.m(props.size),
        ns.fo(value.value, "isSelected")
    ]
})
const ber_switch_contain = computed(() => {
    return [
        ns.m("contain"),
    ]
})

watch(props, (newValue) => {
    value.value = newValue.modelValue
})
function change(): void {
    value.value = !value.value
    emits('update:modelValue', value.value)
    emits('change', value.value)
}
</script>

<template>
    <div :class="ber_switch" @click="change">
        <div :class="ber_switch_contain" tabindex="0" :value="modelValue">
        </div>
        <span class="ber-span">
            <slot></slot>
        </span>
    </div>
</template>

<style lang="scss" scoped></style>