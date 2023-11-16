<!--
@Project: Berry
@author: August
@createDate: 2023
-->
<script setup lang="ts">
defineOptions({
  name: 'BerryButton'
})
import { computed } from "vue";

import { useNS } from "berry-ui/hooks/useNS"
import { ButtonProps } from './Button'

const ns = useNS('button')

const props = defineProps({...ButtonProps})
const kls = computed(() => {
  return [
    ns.namespace,
    ns.m(props.type as string),
    ns.m(props.variant as string),
    ns.m(props.status as string)
  ]
})

</script>

<template>
  <button 
    ref="container" 
    :title="ns.namespace"
    v-bind="$attrs" 
    :class="kls"
    :type="(props.nativeType)"
    >
    <slot></slot>
  </button>
</template>

<style lang="scss" scoped>

</style>