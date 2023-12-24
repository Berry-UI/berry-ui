<!--

@Project: Berry
@author: August
@createDate: 2023
-->
<script setup lang="ts">
import { ref,reactive } from "vue"

const state = reactive ({
  options: [
    {
      label: 'tim',
      value: 'tim'
    },
    {
      label: 'see',
      value: 'see'
    }
  ]
})
const radioVal = ref('tim')
const chan = (item) => {
  // console.log(radioVal.value,'radioVal.value')
}
const { options } = state
</script>

<template>
  <BerryRadio :options="options" v-model="radioVal" @change="chan">1</BerryRadio>
</template>

<style lang="scss" scoped></style>