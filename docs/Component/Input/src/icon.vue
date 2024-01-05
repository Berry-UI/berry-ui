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
    <div class="flex">
        <BerryInput placeholder="write something" v-model="inputValue">
            <template #prefix>
                <BerryIcon name="rotate" :rotate="true"></BerryIcon>
            </template>
        </BerryInput>

        <BerryInput placeholder="write something" v-model="inputValue">
            <template #suffix>
                <BerryIcon name="rotate" :rotate="true"></BerryIcon>
            </template>
        </BerryInput>
    </div>
</template>

<style lang="scss" scoped>
.flex {
    display: flex;
}
</style>