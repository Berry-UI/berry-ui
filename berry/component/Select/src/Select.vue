<!--

@Project: Berry
@author: August
@createDate: 2024
-->
<script setup lang="ts">
import { useNS } from 'berry-ui/hooks/useNS'
import { computed, ref, reactive, onMounted, watch } from 'vue'
import { SelectProps, SelectEmits, optionsType } from './Select'

defineOptions({
  name: 'BerrySelect',
  inheritAttrs: false
})

const props = defineProps({ ...SelectProps })
const emits = defineEmits({ ...SelectEmits })
let postionShow = ref(false)
let postionTop = ref('40px')

const container = ref<HTMLElement | null>(null)
const resizeObserver = new ResizeObserver((entries => {
  //处理 container 元素改变之后的函数 
  for (const entry of entries) {
    const contentRect = entry.contentRect.height + 6
    postionTop.value = contentRect + 'px'
  }
}))
onMounted(() => {
  resizeObserver.observe(container.value!)
})
let selectOptions = reactive(props.options)
const selectCls = computed(() => {
  return [
    ns.namespace,
  ]
})
const ns = useNS('select')


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
  // emits('update:modelValue', slectModel)
  emits('change', selectVal)
}
// change 点击label 触发
let selectVal = reactive<optionsType[]>([])
let slectModel = reactive<(string | number)[]>([])

watch(() => props.modelValue as (string | number)[], (newValue) => {
  slectModel = newValue
  selectVal = slectModel.map(item => {
    const index = props.options.findIndex(val=>val.value === item)
    return props.options[index]
  })
  console.log(selectVal)
}, {
  immediate: true
})

watch(() => slectModel, (newValue) => {
  emits('update:modelValue', newValue)
}, {
  deep: true
})

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
    slectModel[0] = item.label
    updateEmits()
    postionShow.value = false
  }
})

// 点击删除图标
const handleDeleteTag = (index: number) => {
  selectVal.splice(index, 1)
  slectModel.splice(index, 1)
  updateEmits()
}
// handleInput  input值发生改变时
const handleInput = function (event: Event) {
  const curTargetValue = (event.currentTarget as HTMLInputElement).value
  postionShow.value = false
  if (curTargetValue === '') {
    selectOptions = props.options
    postionShow.value = true
  } else {
    selectOptions = selectOptions.filter(item => (item.label as string).includes(curTargetValue))
    postionShow.value = true
  }
}
</script>

<template>
  <div ref="container" :class="selectCls" v-clickOutSize>
    <div
      :class="[ns.e('wrapper'), ns.is(props.disabled, 'disabled'), ns.b(props.size), postionShow ? 'select-focus' : '']">
      <div :class="ns.e('content')">
        <div :class="ns.e('placeholder')" v-if="modelValue!.length <= 0 && !props.fiterable">
          <div :class="ns.e('placeholder__inner')">{{ props.placeholder }}</div>
        </div>
        <div :class="ns.e('input')">
          <div class="flex flex--space--between" :class="[ns.e('input__inner'),
          props.multiple ? 'select-tag' : '']" v-for="(item, index) in modelValue">
            {{ item }}
            <div class="select-tag-close" v-if="props.multiple" style="width: 14px; height: 14px;">
              <berry-icon name="close" size="14px" @click="handleDeleteTag(index)"></berry-icon>
            </div>
          </div>
          <div class="input__fiter flex--acenter flex--1" v-if="props.fiterable">
            <input ref="input" type="text" class="select__input" :placeholder="placeholder"
              @input="handleInput($event)">
          </div>
        </div>
      </div>

      <span :class="ns.e('select__suffix-inner')">
        <berry-icon name="xiala"></berry-icon>
      </span>
    </div>
    <div class="select-box" v-if="postionShow" :style="[
      {
        top: postionTop
      }
    ]">
      <ul>
        <li v-for="(item, key) in selectOptions" :index="key" @click="change(item)"
          :class="props.modelValue!.includes(item.label) ? 'select-item-active' : ''">
          {{ item.label }}
          <!-- {{ props.modelValue }} -->
        </li>
        <div class="flex-acenter is-empty" v-if="selectOptions.length <= 0">
          <div class="select-dropdown__empty">
            <div class="flex--center emptyIcon">
              <berry-icon name="wushuju" size="32px"></berry-icon>
            </div>
            <span class="flex--jcenter">无数据</span>
          </div>
        </div>
      </ul>
    </div>
  </div>
</template>

<style lang="scss" scoped></style>