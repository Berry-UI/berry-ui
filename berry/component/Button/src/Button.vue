<!--
@Project: Berry
@author: August
@createDate: 2023
-->
<script setup lang="ts">
import { computed, ref } from "vue";
import { useNS } from "berry-ui/hooks/useNS"
import { ButtonProps } from './Button'
import BerryIcon from '../../Icon'
import { convertToObject } from "typescript";
const ns = useNS('button')

defineOptions({
  inheritAttrs: false,
  name: 'BerryButton'
})

const props = defineProps({ ...ButtonProps })
console.log(props.prefixIcon)
console.log(props.suffixIcon)
const kls = computed(() => {
  return [
    ns.namespace,
    ns.m(props.type as string),
    ns.m(props.variant as string),
    ns.m(props.status as string),
  ]
})

let rotateFlag = ref<boolean>(false)
let loadingStatus = ref<boolean>(false)

const clickBtn = function (): boolean {
  if (!props.loading) {
    return false
  }
  rotateFlag.value = props.loading ? props.loading : !props.loading
  setTimeout(() => {
    rotateFlag.value = false
    loadingStatus.value = true
  }, 2000)
  return true
}

</script>

<template>
  <button ref="container" :title="ns.namespace" v-bind="$attrs" :class="kls" :type="(props.nativeType)" @click="clickBtn">
    <BerryIcon v-if="rotateFlag" name="rotate" color="rgb(15,15,15)" size="16px" :rotate="props.loading">
    </BerryIcon>
    <BerryIcon v-if="prefixIcon&&!rotateFlag" :name="prefixIcon" color="rgb(15,15,15)" size="16px" :class="loadingStatus ? 'is-loading' : ''">
    </BerryIcon>
    <slot class="ber-button--content"></slot>
    <BerryIcon v-if="suffixIcon&&!rotateFlag" :name="suffixIcon" color="rgb(15,15,15)" size="16px" :class="loadingStatus ? 'is-loading' : ''">
    </BerryIcon>
  </button>
</template>

<style lang="scss" scoped></style>