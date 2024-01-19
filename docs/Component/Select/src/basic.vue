<!--

@Project: Berry
@author: August
@createDate: 2024
-->
<script setup lang="ts">
import { reactive } from "vue"
const state = reactive(
  {
    options: [
      {
        label: 'tim',
        value: 'tim'
      },
      {
        label: 'see',
        value: 'see'
      }
    ],
    options2: [
      {
        label: '斯密斯',
        value: 'tim'
      },
      {
        label: '阿波罗',
        value: 'see'
      },
      {
        label: '雅典娜',
        value: 'tim'
      },
      {
        label: '波塞冬',
        value: 'see'
      }
    ],
  },
)

</script>

<template>
  <div class="demo-select">
    <berry-select :options="state.options2"></berry-select>
  </div>
</template>

<style lang="scss" scoped>
.demo-select {
  width: 50%;
}
</style>