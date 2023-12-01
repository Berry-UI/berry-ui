<!--
@Project: Berry
@author: August
@createDate: 2023
-->
<script setup lang="ts">
import { computed, ref } from "vue";
import { useNS } from "berry-ui/hooks/useNS"
import { ButtonProps, ButtonEmits } from "./Button"
import BerryIcon from "../../Icon"
const ns = useNS("button")

defineOptions({
  inheritAttrs: false,
  name: "BerryButton"
})
let rotateFlag = ref<boolean>(false)
let loadingStatus = ref<boolean>(false)

const props = defineProps({ ...ButtonProps })
const emits = defineEmits({ ...ButtonEmits })
const kls = computed(() => {
  return [
    ns.namespace,
    ns.m(props.type as string),
    ns.m(props.variant as string),
    ns.m(props.status as string),
    ns.m(props.size as string),
    ns.is(props.disabled, 'disabled')
  ]
})
const handleClick = (evt: MouseEvent) => {
  if (!props.disabled) {
    emits('click', evt)

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
}
</script>

<template>
  <button ref="container" :title="ns.namespace" v-bind="$attrs" :class="kls" :type="(props.nativeType)"
    @click="handleClick($event)">

    <BerryIcon v-if="rotateFlag" name="rotate" color="rgb(15,15,15)" size="16px" :rotate="props.loading">
    </BerryIcon>
    <BerryIcon v-if="prefixIcon && !rotateFlag" :name="prefixIcon" color="rgb(15,15,15)" size="16px"
      :class="loadingStatus ? 'is-loading' : ''">
    </BerryIcon>
    <slot class="ber-button--content"></slot>
    <BerryIcon v-if="suffixIcon && !rotateFlag" :name="suffixIcon" color="rgb(15,15,15)" size="16px"
      :class="loadingStatus ? 'is-loading' : ''">
    </BerryIcon>
  </button>
</template>

<style lang="scss" scoped></style>