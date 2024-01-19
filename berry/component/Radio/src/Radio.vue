<!--

@Project: Berry
@author: August
@createDate: 2023
-->
<script setup lang="ts">
import { useNS } from 'berry-ui/hooks/useNS'
import { RadioProps, RadioEmits,optionsType } from './Radio'
import { computed, defineProps } from 'vue'

defineOptions({
  name: 'BerryRadio',
  inheritAttrs: false
})

const ns = useNS("radio");
const props = defineProps({ ...RadioProps })
const emits = defineEmits({ ...RadioEmits })

const scl = computed(() => {
  const vertical = props.vertical ? 'flex' : 'inlen-flex'
  if (props.customColor !== undefined) {
    return {
      display: vertical,
      '--costom-color': props.customColor,
      '--costom-color-hover': `inset 0 0 0 1px ${props.customColor}`
    }
  } else {
    return {
      display: vertical,
    }
  }

})
// console.log(props.mode,'props.mode')

const change = (item:optionsType) => {
  if (!item.disabled) {
    emits('update:modelValue',item.value)
    emits('change', item)
  }

}
</script>

<template>
  <div :class="ns.namespace">
    <label v-for="(item, index) in options" :key="index" @click="change(item)" :style="scl" :class="[
      ns.e('item'),
      ns.is(item.disabled, 'disabled'),
      ns.b(props.variant as string),
      modelValue === item.value ? 'radio-button-active' : ''
    ]">
      <span :class="modelValue === item.value ? 'active' : ''">
      </span>
      <div :class="ns.e('label')"> {{ item.label }}</div>
    </label>
  </div>
</template>

<style lang="scss" scoped></style>