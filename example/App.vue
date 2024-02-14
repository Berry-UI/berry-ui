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
    ],
    options3: [
      {
        type: 'group',
        label: 'dangao',
        key: '工作',
        children: [{
          label: '吃饭',
          value: 'Dangao1'
        },
        {
          label: '睡觉',
          value: 'Dangao2'
        },
        {
          label: '打豆豆',
          value: 'Dangao3'
        }]
      },
      {
        type: 'group',
        label: 'dangao',
        key: '娱乐',
        children: [{
          label: '洗澡',
          value: 'Dangao4'
        },
        {
          label: '玩游戏',
          value: 'Dangao5'
        },
        {
          label: 'ktv',
          value: 'Dangao6'
        }]
      }
    ],
    options4: [
      {
        key: 'You Wont See',
        value: 'tim'
      },
      {
        key: 'Norwegian Wood',
        value: 'see',
        disabled: true
      },
      {
        key: 'Nowhere Man',
        value: 'see1'
      },
      {
        key: 'Drive My Car',
        value: 'tim1'
      },
      {
        key: 'You Won\'t Se',
        value: 'see2'
      }
    ],
  },
)
const change = (item: any) => {
  // alert(JSON.stringify(item))
  // console.log(item)
  // console.log(selectVal1)
}
const cli = () => {
  console.log(selectVal1)
}

const selectVal = ref(['You Wont See'])
const selectVal1 = ref(['You Wont See'])

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
  <div class="flex">
    <!-- <berry-select :options="state.options2" placeholder="选择" multiple fiterable v-model="selectVal1" size="small"
    @change="change" @click="cli" filterable></berry-select>

  <berry-select :options="state.options2" v-model="selectVal1" filterable multiple @click="cli"
    @change="change" clearable></berry-select> -->

    <berry-select :options="state.options3" placeholder="选择歌曲" filterable multiple v-model="selectVal1" size="large"
      @click="cli" @change="change" tag></berry-select>
  </div>
  <!-- <berry-switch></berry-switch> -->
</template>

<style scoped lang="scss" >
.ber-select {
  // font-family: v-sans, system-ui, -apple-system, BlinkMacSystemFont, "Segoe UI", sans-serif, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol";
  // ;
  margin-bottom: 5px;

  // font-family: Inter, Helvetica Neue, Helvetica, PingFang SC, Hiragino Sans GB, Microsoft YaHei, \5fae\8f6f\96c5\9ed1, Arial, sans-serif;


}
</style> 