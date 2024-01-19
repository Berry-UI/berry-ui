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
let checkArray = ref<checkArrayType[]>([{ label: "small", value: "small" }, { label: "normal", value: "normal", disabled: true }])

</script>

<template>
    <BerryCheckBoxGroup v-model="value">
        <BerryCheckBox v-for="item in checkArray" :label="item.label" :value="item.value" :disabled="item.disabled">{{
            item.label }}
        </BerryCheckBox>
    </BerryCheckBoxGroup>
</template>

<style scoped lang="scss" ></style> 