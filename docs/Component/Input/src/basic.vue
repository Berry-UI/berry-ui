<!--
@Project: Berry
@author: Rain
@createDate: 2023   
-->
<script setup lang="ts">
import { ref, reactive } from "vue"
const inputValue = ref<String>("")
const change = e => { }
const focus = e => { }
const blur = e => { }
</script>

<template>
    <BerryInput v-model="inputValue" size="small" @change="change" @focus="focus" @blur="blur"
        placeholder="write something"></BerryInput>

    <BerryInput v-model="inputValue" size="small" placeholder="write something" type="password"></BerryInput>
    <BerryInput v-model="inputValue" size="small" placeholder="write something" type="textarea"></BerryInput>
</template>

<style lang="scss" scoped></style>