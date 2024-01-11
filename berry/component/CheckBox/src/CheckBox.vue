<!--
@Project: Berry
@author: Rain
@createDate: 2024
-->
<script setup lang="ts">
defineOptions({
    name: "BerryCheckBox"
})
import { Ref, computed, inject } from "vue";
import { useNS } from "berry-ui/hooks/useNS"
import { CheckBoxProps, } from "./CheckBox"
const ns = useNS("checkbox")

const props = defineProps({ ...CheckBoxProps })

const ber_checkbox = computed(() => {
    return [
        ns.namespace,
    ]
})
const ber_checkbox_el = computed(() => {
    return [
        ns.m("el"),
    ]
})
const ber_checkbox_contain = computed(() => {
    return [
        ns.m("contain"),
    ]
})

const timeStamp = Math.random()
interface checkedProvide {
    arr: Ref<(number | string)[]>,
    checkedLabel: (value: string | number) => void
}

const checked = inject<checkedProvide>("checkedArray")
let isChecked = computed(() => {
    return checked?.arr.value.includes(props.value) ? true : false
})

const inputChange = (e: any) => {
    checked!.checkedLabel(e.target.value)
}
</script>

<template>
    <div :class="ber_checkbox">
        <input :class="ber_checkbox_contain" type="checkbox" :value="props.value" :name="props.label"
            :id="props.label + timeStamp" @input="inputChange" :disabled="props.disabled" :checked="isChecked">

        <label :class="ber_checkbox_el" :for="props.label + timeStamp">
            <slot></slot>
            <template v-if="!$slots.default">{{ label }}</template>
        </label>
    </div>
</template>

<style lang="scss" scoped></style>