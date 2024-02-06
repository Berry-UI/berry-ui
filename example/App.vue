<!--
@Project: Berry
@author: August
@createDate: 2023
-->
<script setup lang="ts">
// import { BerryButton, BerryIcon } from 'berry-ui'
import { ref, reactive, watch } from 'vue'

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
        label: 'You Wont See',
        value: 'tim'
      },
      {
        label: 'Norwegian Wood',
        value: 'see',
        disabled: true
      },
      {
        label: 'Nowhere Man',
        value: 'see1'
      },
      {
        label: 'Drive My Car',
        value: 'tim1'
      },
      {
        label: 'You Won\'t Se',
        value: 'see2'
      }
    ],
  },
)
const change = (item: any) => {
  // alert(JSON.stringify(item))
  console.log(selectVal)
  // console.log(selectVal1)
}
const cli = ()=>{
  console.log(selectVal1)
}

const selectVal = ref(['see2'])
const selectVal1 = ref(['see2'])

watch(selectVal, (newValue, oldValue) => {
  console.log('New value:', newValue);
  console.log('Old value:', oldValue);
}, { deep: true });

// watch(selectVal1, (newValue, oldValue) => {
//   console.log('New value:', newValue);
//   console.log('Old value:', oldValue);
// }, { deep: true });

</script>

<template>
  <!-- <div>
    <div style="width: 40%; display: flex;flex-direction: row;justify-content: space-around;">
      <BerryButton type="primary" status="round" size="small" variant="ghost" suffixIcon="jubao" @click="cli()">Default</BerryButton>
      <BerryButton type="info" variant="ghost" status="round" size="normal" prefixIcon="jubao">Default</BerryButton>
      <BerryButton type="success" status="round" size="small">Success</BerryButton>
      <BerryButton type="success" variant="ghost" status="round" size="normal">Success</BerryButton>
   <BerryButton type="primary">Default</BerryButton>  

    </div>s
  </div> -->
  <berry-select :options="state.options2" placeholder="选择" multiple fiterable v-model="selectVal1" size="small"
    @change="change" @click="cli"></berry-select>

  <berry-select :options="state.options2" v-model="selectVal1" fiterable multiple @click="cli" @change="change"></berry-select>

  <berry-select :options="state.options2" placeholder="选择歌曲" fiterable multiple v-model="selectVal1"
    size="large" @click="cli" @change="change"></berry-select>
  <berry-select :options="state.options2" placeholder="选择" v-model="selectVal" @click="cli" @change="change"></berry-select>


  <!-- <div>
    <berry-button @click="show = !show">Toggle</berry-button>
  </div> -->
</template>

<style scoped lang="scss" >
.ber-select {
  // font-family: v-sans, system-ui, -apple-system, BlinkMacSystemFont, "Segoe UI", sans-serif, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol";
  // ;
  margin-bottom: 5px;




}
</style> 