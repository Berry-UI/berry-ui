<!--

@Project: Berry
@author: August
@createDate: 2024
-->
<script setup lang="ts">
import { reactive } from "vue"
const options = reactive([{
  value: 'dangao',
  label: 'Drive'
}, {
  value: 'jimihua',
  label: 'My'
}, {
  value: 'cokec',
  label: 'car'
}])
const foods = reactive([])
const change = item=>{
  console.log(JSON.stringify(item))
}

</script>

<template>
  <div class="wrap">
    <berry-select :options="options" v-model="foods" multiple filterable></berry-select>
  </div>
</template>

<style lang="scss" scoped>
.wrap {
  display: flex;
  gap: 8px;
  padding: 10px 0px 75px;
}
</style>