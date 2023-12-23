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
      value: '2'
    },
    {
      label: 'see',
      value: '3'
    }
  ]
})

const state2 = reactive({
  opt: [
    {
      label: 'ShamkerMaker',
      value: '2',
      disabled: true
    },
    {
      label: 'RocknRoll Star',
      value: '3'
    },
    {
      label: 'Live Forever',
      value: '3'
    },
    {
      label: '...',
      value: '3'
    }
  ]
})
const chan = (item) => {
  console.log(item.label)
}
const { options } = state
const { opt} = state2
</script>

<template>
  <div class="gap">
    <BerryRadio variant="ghost" :options="options" @change="chan"></BerryRadio>
    <BerryRadio variant="button" :options="opt" @change="chan"></BerryRadio>
  </div>
</template>

<style lang="scss" scoped>
  .gap {
    display: flex;
    flex-direction: column;
    gap: 1em;
  }
</style>