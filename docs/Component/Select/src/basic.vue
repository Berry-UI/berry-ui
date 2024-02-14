<!--
@Project: Berry
@author: August
@createDate: 2023
-->
<script setup lang="ts">
// import { BerryButton, BerryIcon } from 'berry-ui'
import { ref, reactive, watch } from 'vue'

const options = reactive([{
  label: '选项1',
  value: 'value2'
}, {
  label: '选项2',
  value: 'value2'
}])
const selectModel = reactive(['选项1'])
</script>

<template>
  <div class="wrap">
    <berry-select :options="options" v-model="selectModel"></berry-select>
    <berry-select :options="options" disabled  v-model="selectModel"></berry-select>
  </div>
  <!-- <berry-select :options="state.options3" placeholder="选择" v-model="selectVal" @click="cli" @change="change" multiple
    filterable clearable :maxTagCount=2></berry-select> -->
  <!-- <div>
    <div style="width: 40%; display: flex;flex-direction: row;justify-content: space-around;">
      <BerryButton type="primary" status="round" size="small" variant="ghost" suffixIcon="jubao" @click="cli()">Default</BerryButton>
      <BerryButton type="info" variant="ghost" status="round" size="normal" prefixIcon="jubao">Default</BerryButton>
      <BerryButton type="success" status="round" size="small">Success</BerryButton>
      <BerryButton type="success" variant="ghost" status="round" size="normal">Success</BerryButton>
   <BerryButton type="primary">Default</BerryButton>  

    </div>s
  </div> -->

  <!-- <berry-select :options="state.options3" placeholder="选择" v-model="selectVal" @click="cli" @change="change" multiple
    filterable clearable :maxTagCount=2></berry-select>
  <berry-select :options="state.options3" placeholder="选择" v-model="selectVal" @click="cli" @change="change" multiple
    filterable clearable :maxTagCount=1>
   <template #suffixIcon>
     <BerryIcon name="yinle"/>
   </template>
  </berry-select> -->


  <!-- <div>
    <berry-button @click="show = !show">Toggle</berry-button>
  </div> -->
</template>

<style scoped lang="scss" >
.wrap {
  // font-family: v-sans, system-ui, -apple-system, BlinkMacSystemFont, "Segoe UI", sans-serif, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol";
  // ;
  display: flex;
  gap: 8px;
  padding: 10px 0px 50px;

  // font-family: Inter, Helvetica Neue, Helvetica, PingFang SC, Hiragino Sans GB, Microsoft YaHei, \5fae\8f6f\96c5\9ed1, Arial, sans-serif;


}
</style> 