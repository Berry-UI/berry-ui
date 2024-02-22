<!--

@Project: Berry
@author: August
@createDate: 2024
-->
<script setup lang="ts">
import { reactive } from "vue"
const options = reactive([{
  value: 'dangao',
  label: '蛋糕'
}, {
  value: 'jimihua',
  label: '鸡米花'
}, {
  value: 'cokec',
  label: '可乐er'
}])
const foods = reactive([])
</script>

<template>
  <div class="wrap">
    <berry-select :options="options" v-model="foods" size="small"></berry-select>
    <berry-select :options="options" v-model="foods" size="normal"></berry-select>
    <berry-select :options="options" v-model="foods" size="large"></berry-select>
  </div>
</template>

<style lang="scss" scoped>
.wrap {
  display: flex;
  gap: 8px;
  padding: 10px 0px 50px;
}
</style>