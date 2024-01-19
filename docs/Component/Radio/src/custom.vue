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
      label: 'aom',
      value: 0,
    },
    {
      label: 'tom',
      value: 1,
    },
  ]
})
const chan = (item) => {
  console.log(radioVal)
}
let radioVal = ref(1)
const { options } = state
</script>

<template>
  <div>
    <BerryRadio variant="ghost" :options="options" customColor="pink" v-model="radioVal" @change="chan"></BerryRadio>
  </div>
</template>

<style lang="scss" scoped></style>