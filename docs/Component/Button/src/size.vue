<!--

@Project: Berry
@author: August
@createDate: 2023
-->
<script setup lang="ts">
</script>

<template>
  <div class="row">
    <BerryButton size="small">小小</BerryButton>
    <BerryButton size="normal">小小</BerryButton>
    <BerryButton size="large">小小</BerryButton>
  </div>
</template>

<style lang="scss" scoped>
  .row {
    display: flex;
    flex-direction: row;
    justify-content: flex-start;
    align-items: center;
    .ber-button {
      margin-right: 10px;
    }
  }
  
</style>