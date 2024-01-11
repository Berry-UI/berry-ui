<!--
@Project: Berry
@author: Rain
@createDate: 2024
-->
<script setup lang="ts">
import { ref, provide, computed, watch } from "vue"
import { CheckBoxGroupProps, CheckBoxGroupEmits } from "./CheckBoxGroup"
import { useNS } from "berry-ui/hooks/useNS"

const props = defineProps({ ...CheckBoxGroupProps })
const emits = defineEmits({ ...CheckBoxGroupEmits })

const ns = useNS("checkbox-group")
const ber_checkbox_group = computed(() => {
    return [
        ns.namespace,
        ns.m(props.size),
    ]
})

let arr = ref<(number | string)[]>(props.modelValue)

watch(props, (newValue) => {
    arr.value = newValue.modelValue
})
function checkedLabel(value: string | number): void {
    let index = ref<number>(0)
    index.value = arr.value.indexOf(value)
    index.value == -1 ? arr.value = [...arr.value, value] : arr.value = arr.value.filter(item => item !== value)
    emits("update:modelValue", arr.value)
    emits("change", value, index.value == -1 ? 1 : -1)
}
provide("checkedArray", { arr, checkedLabel, });
</script>

<template>
    <div :class="ber_checkbox_group">
        <slot></slot>
    </div>
</template>

<style lang="scss" scoped></style>