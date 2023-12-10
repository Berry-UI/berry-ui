<!--

@Project: Berry
@author: August
@createDate: 2023
-->
<script setup lang="ts">
import { reactive } from "vue"

const state = reactive ({
  options: [
    {
      label: 'aom',
      value: '0',
      disabled: true
    },
    {
      label: 'tom',
      value: '1',
      disabled: true
    },
    {
      label: 'tim',
      value: '2'
    },
    {
      label: 'see',
      value: '3'
    }
  ]
})
const { options } = state
</script>

<template>
  <BerryRadio :options="options">1</BerryRadio>
</template>

<style lang="scss" scoped></style>