<!--

@Project: Berry
@author: August
@createDate: 2023
-->
<script setup lang="ts">
import { ref, reactive } from "vue"

const state = reactive({
  options: [
    {
      label: 'tim',
      value: 'tim',
      disabled: true
    },
    {
      label: 'see',
      value: 'see',
      disabled: true
    }
  ]
})
const radioVal = ref('tim')
const { options } = state
</script>

<template>
  <BerryRadio :options="options" v-model="radioVal">1</BerryRadio>
</template>

<style lang="scss" scoped></style>