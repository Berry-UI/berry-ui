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
    <BerryInput v-model="inputValue" size="small" placeholder="write something" required></BerryInput>
</template>

<style lang="scss" scoped></style>