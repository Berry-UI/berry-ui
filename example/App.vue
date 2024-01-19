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
        value: 'see'
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
const change = (item) => {
  // console.log(selectVal1)
}

const selectVal = ref('tim')
const selectVal1 = ref([''])

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
    </div>s
  </div> -->
  <!-- <BerryButton type="primary">Default</BerryButton> -->
  <!-- <berry-select :options="state.options2" placeholder="选择" @change="change" v-model="selectVal"></berry-select> -->

  <berry-select :options="state.options2" v-model="selectVal"></berry-select>

  <berry-select :options="state.options2" placeholder="选择" multiple @change="change" v-model="selectVal1"></berry-select>
  <berry-select :options="state.options2" placeholder="选择" multiple @change="change" v-model="selectVal1"></berry-select>


  <!-- <div>
    <berry-button @click="show = !show">Toggle</berry-button>
  </div> -->

</template>

<style scoped lang="scss" >
.ber-select {
  margin-bottom: 5px;
}
</style> 