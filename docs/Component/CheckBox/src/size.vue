<!--
@Project: Berry
@author: August
@createDate: 2024
-->
<script setup lang="ts">
import { ref } from "vue"
interface checkArrayType {
    label: string,
    value: string,
    disabled?: boolean
}

let value = ref<String[]>([])
let value1 = ref<String[]>([])
let value2 = ref<String[]>([])
let checkArray = ref<checkArrayType[]>([{ label: "small", value: "small" }, { label: "normal", value: "normal" }])
let checkArray1 = ref<checkArrayType[]>([{ label: "small", value: "small" }, { label: "normal", value: "normal" }])
let checkArray2 = ref<checkArrayType[]>([{ label: "small", value: "small" }, { label: "normal", value: "normal" }])
</script>

<template>
    <BerryCheckBoxGroup v-model="value" size="small">
        <BerryCheckBox v-for="item in checkArray" :label="item.label" :value="item.value">{{ item.label }}</BerryCheckBox>
    </BerryCheckBoxGroup>

    <BerryCheckBoxGroup v-model="value1" size="normal">
        <BerryCheckBox v-for="item in checkArray1" :label="item.label" :value="item.value">{{ item.label }}</BerryCheckBox>
    </BerryCheckBoxGroup>

    <BerryCheckBoxGroup v-model="value2" size="large">
        <BerryCheckBox v-for="item in checkArray2" :label="item.label" :value="item.value">{{ item.label }}</BerryCheckBox>
    </BerryCheckBoxGroup>
</template>

<style scoped lang="scss" ></style> 