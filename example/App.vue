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

      <BerryButton type="success" variant="s" status="round" prefixIcon="jubao" loading>Warning</BerryButton>
      <BerryButton type="error" variant="ghost" status="round" suffixIcon="jubao" loading>Error</BerryButton>
      <BerryButton type="info" variant="ghost" status="round" loading prefixIcon="jubao">Warning</BerryButton>
    </div>

  </div>
</template>

<style scoped lang="scss"></style>
