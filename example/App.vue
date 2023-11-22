<!--
@Project: Berry
@author: August
@createDate: 2023
-->
<script setup lang="ts">
// import { BerryButton, BerryIcon } from 'berry-ui'
</script>

<template>
  <div>
    
    <div style="width: 40%; display: flex;flex-direction: row;justify-content: space-around;">
      <BerryButton type="primary" status="round" >Default</BerryButton>
      <BerryButton type="info" variant="ghost" status="round" prefixIcon="rotate" loading>Info</BerryButton>
      <BerryButton type="success" variant="ghost" status="round" suffixIcon="rotate">Success</BerryButton>
      <BerryButton type="warning" variant="ghost" status="round">Warning</BerryButton>
      <BerryButton type="error" variant="ghost" status="round">Error</BerryButton> 
    </div>

  </div>
</template>

<style scoped lang="scss"></style>
