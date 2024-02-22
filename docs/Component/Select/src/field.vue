<!--

@Project: Berry
@author: August
@createDate: 2024
-->
<script setup lang="ts">
import { reactive } from "vue"
const options = reactive([{
  musicValue: 'dangao',
  musicLabel: '蓝莲花'
}, {
  musicmusicValuevalue: 'jimihua',
  musicLabel: '去大理'
}, {
  musicValue: 'cokec',
  musicLabel: '安河桥'
}])
const music = reactive([])
const options1 = reactive([{
  fieldValue: 'dangao',
  fieldLabel: '汉堡'
}, {
  fieldValue: 'jimihua',
  fieldLabel: '炸鸡'
}, {
  fieldValue: 'cokec',
  fieldLabel: '薯条'
}])
const foods = reactive([])
</script>

<template>
  <div class="wrap">
    <berry-select :options="options" v-model="music" placeholder="选歌" filedLabel="musicLabel" filedValue="musicValue">
      <template #suffixIcon>
        <berry-icon name="yinle"></berry-icon>
      </template>
    </berry-select>
    <berry-select :options="options1" v-model="foods" placeholder="选吃的" filedLabel="fieldLabel" filedValue="fieldValue">
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