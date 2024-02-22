<!--

@Project: Berry
@author: August
@createDate: 2024
-->
<script setup lang="ts">
import { reactive } from "vue"
const options = reactive([{
  value: 'dangao',
  label: '蓝莲花'
}, {
  value: 'jimihua',
  label: '去大理'
}, {
  value: 'cokec',
  label: '安河桥'
}])
const music = reactive([])
const options1 = reactive([{
  value: 'dangao',
  label: '汉堡'
}, {
  value: 'jimihua',
  label: '炸鸡'
}, {
  value: 'cokec',
  label: '薯条'
}])
const foods = reactive([])
</script>

<template>
  <div class="wrap">
    <berry-select :options="options" v-model="music" placeholder="选歌">
      <template #suffixIcon>
        <berry-icon name="yinle"></berry-icon>
      </template>
    </berry-select>
    <berry-select :options="options1" v-model="foods" placeholder="选吃的">
      <template #suffixIcon>
        <berry-icon name="hanbao"></berry-icon>
      </template>
    </berry-select>
  </div>
</template>

<style lang="scss" scoped>
.wrap {
  display: flex;
  gap: 8px;
  padding: 10px 0px 90px;
}
</style>