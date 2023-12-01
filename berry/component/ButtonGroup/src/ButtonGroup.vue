<!--

@Project: Berry
@author: August
@createDate: 2023
-->
<script setup lang="ts">
import { useNS } from 'berry-ui/hooks/useNS'
import { computed } from 'vue'
const ns = useNS('button-group')
const kls = computed(() => {
  return [
    ns.namespace
  ]
}) 
</script>

<template>
  <div :class="kls">
    <slot></slot>
  </div>
</template>

<style lang="scss" scoped></style>