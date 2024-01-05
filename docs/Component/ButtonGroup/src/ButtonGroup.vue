<!--

@Project: Berry
@author: August
@createDate: 2023
-->
<script setup lang="ts">
</script>

<template>
  <div>
    <berry-button-group class="ml20">
      <BerryButton type="success" prefixIcon="jubao">上一页</BerryButton>
      <BerryButton type="success" prefixIcon="jubao">上一页</BerryButton>
    </berry-button-group>


    <berry-button-group class="ml20">
      <BerryButton prefixIcon="jubao">上一页</BerryButton>
      <BerryButton>下一页</BerryButton>
      <BerryButton prefixIcon="jubao">上一页</BerryButton>
    </berry-button-group>


    <berry-button-group class="ml20">
      <BerryButton prefixIcon="jubao" type="success" variant="ghost">上一页</BerryButton>
      <BerryButton variant="ghost" type="success">下一页</BerryButton>
      <BerryButton variant="ghost" type="success">下一页</BerryButton>
      <BerryButton suffixIcon="jubao" variant="ghost" type="success">上一页</BerryButton>
    </berry-button-group>
  </div>
</template>

<style lang="scss" scoped>
.ml20 {
  margin-left: 20px;
}
</style>