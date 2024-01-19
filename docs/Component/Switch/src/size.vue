<!--
@Project: Berry
@author: Rain
@createDate: 2024
-->
<script setup lang="ts">
import { ref } from "vue"
let value = ref(true)
</script>

<template>
    <BerrySwitch v-model="value" size="small">Small</BerrySwitch>
    <BerrySwitch v-model="value" size="normal">Normal</BerrySwitch>
    <BerrySwitch v-model="value" size="large">Large</BerrySwitch>
</template>

<style lang="scss" scoped></style>