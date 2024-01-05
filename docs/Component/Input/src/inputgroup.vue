<!--
@Project: Berry
@author: Rain
@createDate: 2024
-->
<script setup lang="ts">
import { ref, reactive } from "vue"
const inputValue = ref<String>("")
</script>

<template>
    <BerryInputGroup>
        <BerryButton prefixIcon="jubao">上一页</BerryButton>
        <BerryInput v-model="inputValue" size="small" placeholder="write something"></BerryInput>
        <BerryButton prefixIcon="jubao">下一页</BerryButton>
    </BerryInputGroup>
</template>

<style lang="scss" scoped></style>