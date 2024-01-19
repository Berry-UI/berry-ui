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
    <BerrySwitch v-model="value"></BerrySwitch>
</template>

<style lang="scss" scoped></style>