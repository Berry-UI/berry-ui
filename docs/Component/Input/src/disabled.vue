<!--
@Project: Berry
@author: Rain
@createDate: 2023
-->
<script setup lang="ts">
import { ref, reactive } from "vue"
const inputValue = ref('disabled')
</script>

<template>
    <BerryInput v-model="inputValue" placeholder="write something" disabled></BerryInput>
</template>

<style lang="scss" scoped></style>