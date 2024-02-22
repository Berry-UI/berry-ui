<!--

@Project: Berry
@author: August
@createDate: 2024
-->
<script setup lang="ts">
import { reactive,ref } from "vue"
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
const foods = ref([])
const foods2= ref([])
const change = item=>{
  console.log(JSON.stringify(item))
}

</script>

<template>
  <div class="wrap">
    <berry-select :options="options" v-model="foods" multiple clearable></berry-select>
    <berry-select :options="options" v-model="foods2" clearable></berry-select>
  </div>
</template>

<style lang="scss" scoped>
.wrap {
  display: flex;
  gap: 8px;
  padding: 10px 0px 75px;
}
</style>