<!--
@Project: Berry
@author: August
@createDate: 2023
-->
<script setup lang="ts">
// import { BerryButton, BerryIcon } from 'berry-ui'
import { ref } from 'vue'
const dis = ref(true)
const click = (ent: MouseEvent) => {
  dis.value = !dis.value
}
const change = e => console.log("input值改变了")
const inputValue = ref('tim')
</script>

<template>
  <!-- <div>
    <div style="width: 40%; display: flex;flex-direction: row;justify-content: space-around;">
      <BerryButton type="primary" status="round" size="small" variant="ghost" suffixIcon="jubao" @click="cli()">Default</BerryButton>
      <BerryButton type="info" variant="ghost" status="round" size="normal" prefixIcon="jubao">Default</BerryButton>
      <BerryButton type="success" status="round" size="small">Success</BerryButton>
      <BerryButton type="success" variant="ghost" status="round" size="normal">Success</BerryButton>
    </div>
  </div> -->
  <!-- <BerryButton type="primary">Default</BerryButton> -->
  <BerryInput size="small" v-model="inputValue" @change="change" placeholder="write something"></BerryInput>
</template>

<style scoped lang="scss" ></style> 