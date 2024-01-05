<!--

@Project: Berry
@author: August
@createDate: 2023
-->
<script setup lang="ts">
import { reactive,ref } from "vue"

const state = reactive({
  options : [
    {
      label: '男',
      value: '0'
    },
    {
      label: '女',
      value: '1'
    }
  ]
})
const { options } =  state 
const radioVal = ref('1')
</script>

<template>
  <BerryRadio :options="options" vertical v-model="radioVal"></BerryRadio>
</template>

<style lang="scss" scoped></style>