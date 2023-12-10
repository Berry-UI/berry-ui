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
let event = ref(0)
console.log(props.options)
const onclick = (evt: MouseEvent) => {

}
</script>

<template>
  <div :class="ns.namespace">
    <div :class="radioCls" class="active" v-for="(item, index) in options" :key="index">
      <span :class="ns.e('label')" class="active">
      </span>
      {{ item.label }}
    </div>
  </div>
</template>

<style lang="scss" scoped></style>