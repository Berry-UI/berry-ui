<!--

@Project: Berry
@author: August
@createDate: 2023
-->
<script setup lang="ts">
import { useNS } from 'berry-ui/hooks/useNS'
import { RodioProps } from './Radio'
import { computed, defineProps, ref } from 'vue'

defineOptions({
  name: 'BerryRadio',
  inheritAttrs: false
})

const ns = useNS("radio");
const props = defineProps({ ...RodioProps })

const radioCls = computed(() => {
  return [
    ns.e('item'),
    ns.is(props.disabled, 'disabled'),
    ns.is(props.checked, 'checked')
  ]
})
let radioIndex = ref(0)
console.log(props.options)
const change = (item,index) => {
  if(!item.disabled) {
  radioIndex.value = index
  console.log(index)
}
}
</script>

<template>
  <div :class="ns.namespace">
    <label 
      v-for="(item, index) in options" 
      :key="index" 
      @click="change(item,index)" 
      :class="[
       ns.e('item'),
       ns.is(item.disabled, 'disabled'),
    ]">
      <span :class="radioIndex === index ? 'active' : ''">
      </span>
      {{ item.label }}
    </label>
  </div>
</template>

<style lang="scss" scoped></style>