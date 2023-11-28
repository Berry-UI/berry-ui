<!--
@Project: Berry
@author: August
@createDate: 2023
-->
<script setup lang="ts">
// import { BerryButton, BerryIcon } from 'berry-ui'
  const cli = () => {
    console.log(123)
  }
</script>

<template>
  <!-- <div>
    <div style="width: 40%; display: flex;flex-direction: row;justify-content: space-around;">
      <BerryButton type="primary" status="round" size="small" variant="ghost" suffixIcon="jubao" @click="cli()">Default</BerryButton>
      <BerryButton type="info" variant="ghost" status="round" size="normal" prefixIcon="jubao">Default</BerryButton>
      <BerryButton type="success" status="round" size="small">Success</BerryButton>
      <BerryButton type="success" variant="ghost" status="round" size="normal">Success</BerryButton>
      <BerryButton type="success" variant="ghost" status="round" size="large">Success</BerryButton> 
    </div>
  </div> -->
  <BerryButton type="primary">Default</BerryButton>

  <BerryInput icon="prefix" size="small" disabled></BerryInput>
  <BerryInput icon="prefix" >
    <template #header>
      <BerryIcon name="rotate" color="rgb(15,15,15)" :rotate="true"></BerryIcon>
    </template>
  </BerryInput>
  <BerryInput icon="prefix" size="large">
    
  </BerryInput>
</template>

<style scoped lang="scss" ></style>