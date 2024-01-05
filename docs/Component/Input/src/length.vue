<!--
@Project: Berry
@author: Rain
@createDate: 2023
-->
<script setup lang="ts">
import { ref, reactive } from "vue"
const change = e => { }
const inputValue1 = ref('')
const inputValue2 = ref('')
</script>

<template>
    <BerryInput v-model="inputValue1" size="small" passwordOn="click" @change="change" placeholder="write something"
        showCount>
    </BerryInput>

    <BerryInput v-model="inputValue2" size="small" passwordOn="mousedown" @change="change" placeholder="write something"
        maxLength="10" showCount>
    </BerryInput>
</template>

<style lang="scss" scoped></style>