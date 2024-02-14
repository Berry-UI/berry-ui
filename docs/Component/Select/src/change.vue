<!--

@Project: Berry
@author: August
@createDate: 2024
-->
<script setup lang="ts">
import { reactive } from "vue"
const options = reactive([{
  value: 'dangao',
  label: '罗非鱼'
}, {
  value: 'jimihua',
  label: '大玉米'
}, {
  value: 'cokec',
  label: '可乐er'
}])
const foods = reactive([])
const change = item => {
  console.log(JSON.stringify(item))
}

</script>

<template>
  <div class="wrap">
    <berry-select :options="options" v-model="foods" multiple @change="change" placeholder="今天吃什么?"></berry-select>

  </div>
</template>

<style lang="scss" scoped>
.wrap {
  display: flex;
  gap: 8px;
  padding: 10px 0px 75px;
}
</style>