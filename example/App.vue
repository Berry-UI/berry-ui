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
    <BerryIcon name="rotate" color="rgb(15,15,15)" size="48px" :rotate="true"></BerryIcon>
    <BerryIcon name="rotate" color="rgb(15,15,15)" size="48px" :rotate="false"></BerryIcon>
    <div style="width: 40%; display: flex;flex-direction: row;justify-content: space-around;">
      <BerryButton type="pirmary" variant="ghost" status="round">Default</BerryButton>
      <BerryButton type="info" variant="ghost" status="round">Info</BerryButton>
      <BerryButton type="success" variant="ghost" status="round">Success</BerryButton>
      <BerryButton type="warning" variant="ghost" status="round">Warning</BerryButton>
      <BerryButton type="error" variant="ghost" status="round">Error</BerryButton>
    </div>

  </div>
</template>

<style scoped lang="scss"></style>
