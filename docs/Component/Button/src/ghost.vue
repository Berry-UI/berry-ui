<!--

@Project: Berry
@author: August
@createDate: 2023
-->
<script setup lang="ts">
</script>

<template>
  <div class="row">
    <BerryButton variant="ghost">Default</BerryButton>
    <BerryButton variant="ghost" type="primary">primary</BerryButton>
    <BerryButton variant="ghost" type="success">success</BerryButton>
    <BerryButton variant="ghost" type="info">info</BerryButton>
    <BerryButton variant="ghost" type="warning">wraning</BerryButton>
    <BerryButton variant="ghost" type="error">error</BerryButton>
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