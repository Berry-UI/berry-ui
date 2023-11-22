<!--

@Project: Berry
@author: August
@createDate: 2023
-->
<script setup lang="ts">
</script>

<template>
  <div class="row">
    <BerryButton>Default</BerryButton>
    <BerryButton type="primary">primary</BerryButton>
    <BerryButton type="success">success</BerryButton>
    <BerryButton type="info">info</BerryButton>
    <BerryButton type="warning">wraning</BerryButton>
    <BerryButton type="error">error</BerryButton>
  </div>
</template>

<style lang="scss" scoped>
  .row {
    display: flex;
    flex-direction: row;
    justify-content: space-between;
    flex-wrap: wrap;
    flex-grow: 1;
  }
</style>