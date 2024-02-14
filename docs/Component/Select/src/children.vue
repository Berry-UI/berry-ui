<!--

@Project: Berry
@author: August
@createDate: 2024
-->
<script setup lang="ts">
import { reactive } from "vue"
const state = reactive([
  {
    type: 'group',
    label: 'Rubber Soul',
    key: 'Rubber Soul',
    children: [
      {
        label: "My Monkey",
        value: 'song0',
        disabled: true
      },
    ]
  },
  {
    type: 'group',
    label: 'Let It Be',
    key: 'Let It Be Album',
    children: [
      {
        label: 'Two Of Us',
        value: 'Two Of Us'
      },
      {
        label: 'Dig A Pony',
        value: 'Dig A Pony'
      },
    ]
  }
])

const foods = reactive([])
const change = item => {
  console.log(JSON.stringify(item))
}

</script>

<template>
  <div class="wrap">
    <berry-select :options="state" v-model="foods" multiple @change="change"></berry-select>

  </div>
</template>

<style lang="scss" scoped>
.wrap {
  display: flex;
  gap: 8px;
  padding: 10px 0px 75px;
}
</style>