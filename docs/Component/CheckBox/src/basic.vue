<!--
@Project: Berry
@author: Rain
@createDate: 2024
-->
<script setup lang="ts">
import { ref, reactive } from "vue"
interface checkArrayType {
    label: string,
    value: string
}
let value = ref([])
const checkArray = reactive<checkArrayType[]>([{ label: "small", value: "small" }, { label: "normal", value: "normal" }])
</script>

<template>
    <BerryCheckBoxGroup v-model="value">
        <BerryCheckBox v-for="item in checkArray" :label="item.label" :value="item.value">{{ item.label }}</BerryCheckBox>
    </BerryCheckBoxGroup>
</template>

<style lang="scss" scoped></style>