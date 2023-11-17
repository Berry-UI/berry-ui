<!--
@Project: Berry
@author: August
@createDate: 2023
-->
<script setup lang="ts">
defineOptions({
  inheritAttrs: false,
  name: 'BerryButton'
})

import { computed } from "vue";
import { useNS } from "berry-ui/hooks/useNS"
import { ButtonProps } from './Button'
import BerryIcon from '../../Icon'
const ns = useNS('button')

const props = defineProps({ ...ButtonProps })
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
  <button ref="container" :title="ns.namespace" v-bind="$attrs" :class="kls" :type="(props.nativeType)">
    <BerryIcon v-if="loading" name="rotate" color="rgb(15,15,15)" size="16px" :rotate="props.loading"></BerryIcon>
    <BerryIcon v-if="!loading" :name="props.prefixIcon" color="rgb(15,15,15)" size="16px" :rotate="props.loading"></BerryIcon>
    <slot></slot>
    <BerryIcon v-if="!loading" :name="props.suffixIcon" color="rgb(15,15,15)" size="16px" :rotate="props.loading"></BerryIcon>
  </button>
</template>

<style lang="scss" scoped></style>