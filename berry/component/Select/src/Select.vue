<!--

@Project: Berry
@author: August
@createDate: 2024
-->
<script setup lang="ts">
import { useNS } from 'berry-ui/hooks/useNS'
import { computed, ref, reactive } from 'vue'
import { SelectProps, SelectEmits, optionsType } from './Select'

defineOptions({
  name: 'BerrySelect',
  inheritAttrs: false
})

const props = defineProps({ ...SelectProps })
const emits = defineEmits({ ...SelectEmits })
const selectCls = computed(() => {
  return [
    ns.namespace,
  ]
})
const ns = useNS('select')

const postionShow = ref(false)
// const selectState = ref(true)

// 给最外层绑定自定义事件 点击input 弹出选项
const vClickOutSize = {
  beforeMount(el: any) {
    let handler = (e: any) => {
      if (el.contains(e.target) && !props.disabled) {
        postionShow.value = true
      } else {
        postionShow.value = false
      }

    }

    document.addEventListener('click', handler)
  }
}

const findToItem = (list: optionsType[], item: any) => {
  if (Array.isArray(list)) {
    return list.findIndex(val => item === val)
  }
  return -1
}

const updateEmits = () => {
  console.log(slectModel)
  emits('update:modelValue', slectModel)
  emits('change', selectVal)
}
// change 点击label 触发
let selectVal = reactive<optionsType[]>([])
let slectModel = reactive<(string | number)[]>([])

const change = ((item: any) => {
  if (props.multiple) {
    const index = findToItem(selectVal, item)
    if (index !== -1) {
      selectVal.splice(index, 1)
      slectModel.splice(index, 1)
      updateEmits()
    } else {
      selectVal.push(item)
      slectModel.push(item.label)
      updateEmits()
    }

  } else {
    selectVal[0] = item
    updateEmits()
    postionShow.value = false
  }
})

// 点击删除图标
const delectSelectTag = (item: optionsType) => {
  const index = findToItem(selectVal, item)
  if (index !== -1) {
    selectVal.splice(index, 1)
    slectModel.splice(index, 1)
    updateEmits()
  }
  updateEmits()
  return true
}

</script>

<template>
  <div ref="container" :class="selectCls" v-clickOutSize>
    <div :class="[ns.e('wrapper'), ns.is(props.disabled, 'disabled'), postionShow ? 'select-focus' : '']">
      <div :class="ns.e('content')">
        <div :class="ns.e('placeholder')" v-if="selectVal.length <= 0">
          <div :class="ns.e('placeholder__inner')">{{ props.placeholder }}</div>
        </div>
        <div :class="ns.e('input')">
          <div class="flex flex--space--between" :class="[ns.e('input__inner'),
          props.multiple ? 'select-tag' : '']" v-for="item in selectVal">
            {{ item.label }}
            <div class="select-tag-close" v-if="props.multiple" style="width: 14px; height: 14px;">
              <berry-icon name="close" size="14px" @click="delectSelectTag(item)"></berry-icon>
            </div>
          </div>
        </div>
      </div>

      <span :class="ns.e('select__suffix-inner')">
        <berry-icon name="xiala"></berry-icon>
      </span>
    </div>
    <div class="select-box" v-if="postionShow">
      <ul>
        <li v-for="(item, key) in options" :index="key" @click="change(item)"
          :class="selectVal.findIndex(val => val.value === item.value) !== -1 ? 'select-item-active' : ''">
          {{ item.label }}
        </li>
      </ul>
    </div>
  </div>
</template>

<style lang="scss" scoped></style>