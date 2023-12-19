<!--

@Project: Berry
@author: August
@createDate: 2023
-->
<script setup lang="ts">
import { useNS } from 'berry-ui/hooks/useNS'
import { RadioProps,RadioEmits } from './Radio'
import { computed, defineProps, ref } from 'vue'

defineOptions({
  name: 'BerryRadio',
  inheritAttrs: false
})

const ns = useNS("radio");
const props = defineProps({ ...RadioProps })
const emits = defineEmits({ ...RadioEmits })

let radioIndex = ref(-1)

const scl = computed(() => {
  const vertical = props.vertical ? 'flex' : 'inlen-flex'
  if (props.costomColor !== undefined) {
    return {
      display: vertical,
      '--costom-color': props.costomColor,
      '--costom-color-hover': `inset 0 0 0 1px ${props.costomColor}`
    }
  } else {
    return {
      display: vertical,
    }
  }

})
const change = (item, index) => {
  if (!item.disabled) {
    radioIndex.value = index
    emits('change',item)
  }

}
</script>

<template>
  <div :class="ns.namespace">
    <label 
      v-for="(item, index) in options" 
      :key="index" @click="change(item, index)" 
      :style="scl" 
      :class="[
      ns.e('item'),
      ns.is(item.disabled, 'disabled'),
      ns.b(props.variant as string)
    ]">
      <span :class="radioIndex === index ? 'active' : ''">
      </span>
      {{ item.label }}
    </label>
  </div>
</template>

<style lang="scss" scoped></style>