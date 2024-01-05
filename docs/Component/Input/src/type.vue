<!--
@Project: Berry
@author: Rain
@createDate: 2023
-->
<script setup lang="ts">
import { ref, reactive } from "vue"
const change = e => { }
const inputValue = ref<String>("")
</script>

<template>
    <BerryInput v-model="inputValue" size="small" passwordOn="click" @change="change" placeholder="write something"
        type="password">
    </BerryInput>

    <BerryInput v-model="inputValue" size="small" passwordOn="mousedown" @change="change" placeholder="write something"
        type="password">
    </BerryInput>
</template>

<style lang="scss" scoped></style>