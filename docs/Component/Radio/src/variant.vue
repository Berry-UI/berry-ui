<!--

@Project: Berry
@author: August
@createDate: 2023
-->
<script setup lang="ts">
import { ref, reactive } from "vue"

const state2 = reactive({
  opt: [
    {
      label: 'ShamkerMaker',
      value: '1',
      disabled: true
    },
    {
      label: 'RocknRoll Star',
      value: '2'
    },
    {
      label: 'Live Forever',
      value: '3'
    },
    {
      label: '...',
      value: '4'
    }
  ]
})
const chan = (item) => {
  console.log(item.label)
}
const val = ref('3')
const { opt} = state2
</script>

<template>
  <div class="gap">
    <BerryRadio variant="ghost" :options="opt" @change="chan" v-model="val"></BerryRadio>
    <BerryRadio variant="button" :options="opt" @change="chan"  v-model="val"></BerryRadio>
  </div>
</template>

<style lang="scss" scoped>
  .gap {
    display: flex;
    flex-direction: column;
    gap: 1em;
  }
</style>