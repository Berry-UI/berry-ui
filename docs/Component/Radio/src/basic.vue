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
const radioVal = ref('test')
const chan = (item) => {
  console.log(item)
}
const { options } = state
</script>

<template>
  <BerryRadio :options="options" vertical costomColor="#C2185B" @change="chan" model-value="radioVal" variant="ghost">1</BerryRadio>

  <BerryRadio :options="options" vertical costomColor="#09b63d" @change="chan" model-value="radioVal">1</BerryRadio>
</template>

<style lang="scss" scoped></style>