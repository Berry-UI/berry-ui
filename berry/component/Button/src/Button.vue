<!--

@Project: Berry
@author: August
@createDate: 2023
-->
<script setup lang="ts">
import { computed } from "vue";
const kls = computed(() => {
  
})
</script>

<template>
  <button ref="container" v-bind="$attrs" :class="kls">
    <slot></slot>
  </button>
</template>

<style lang="scss" scoped></style>
