<!--
@Project: Berry
@author: Rain
@createDate: 2023
-->
<script setup lang="ts">
import { ref, reactive } from "vue"
const inputValue = ref<String>("")
</script>

<template>
    <BerryInput v-model="inputValue" size="small" placeholder="write something"></BerryInput>
    <BerryInput v-model="inputValue" size="normal" placeholder="write something"></BerryInput>
    <BerryInput v-model="inputValue" size="large" placeholder="write something"></BerryInput>
</template>

<style lang="scss" scoped></style>