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
let hasChildType = ref(false)
onMounted(() => {
  resizeObserver.observe(container.value!)
})
let selectOptions = reactive(props.options)
selectOptions.forEach(option => {
  if (option.hasOwnProperty('type')) {
    hasChildType.value = true
  }
});

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
// change 点击label 触发
let selectVal = reactive<optionsType[]>([])
let selectModel = reactive<(string | number)[]>([])

watch(() => props.modelValue as (string | number)[], (newValue) => {
  selectModel = newValue
  selectVal = selectModel.map(item => {
    const index = props.options.findIndex(val => val[props.filedLabel] === item)
    return props.options[index]
  })

}, {
  immediate: true
})

watch([() => selectModel, () => selectVal], ([newModelValue, newSelectValue]) => {
  emits('update:modelValue', newModelValue)
  emits('change', newSelectValue)
}, {
  deep: true
})
// 数据发生改变
const change = ((item: any) => {
  if (props.multiple) {
    const index = findToItem(selectVal, item)
    if (index !== -1) {
      selectVal.splice(index, 1)
      selectModel.splice(index, 1)
    } else {
      selectVal.push(item)
      selectModel.push(item[props.filedLabel])
    }

  } else {
    selectVal = item
    selectModel[0] = item[props.filedLabel]
    postionShow.value = false
  }
})
// 点击删除图标
const handleDeleteTag = (index: number) => {
  selectVal.splice(index, 1)
  selectModel.splice(index, 1)
}
// handleInput  input值发生改变时
const handleInput = function (event: Event) {
  const curTargetValue = (event.currentTarget as HTMLInputElement).value
  postionShow.value = false
  if (curTargetValue === '') {
    console.log(props.options)
    selectOptions = props.options
    postionShow.value = true
  } else {
    selectOptions = selectOptions.filter(item => (item[props.filedLabel] as string).includes(curTargetValue))
    postionShow.value = true
  }
}
// 创建动态数据按下
let inputValue = ref('')
const inputEnter = (event: Event) => {
  const curTargetValue = (event.currentTarget as HTMLInputElement).value
  if (curTargetValue.trim() !== '') {
    const curValue: optionsType = {
      [props.filedLabel]: curTargetValue,
      [props.filedValue]: curTargetValue,
      disabled: true
    }
    console.log(curValue)
    if (props.filterable && props.tag) {
      selectVal.push(curValue)
      selectModel.push(curValue[props.filedLabel])
      props.options.unshift(curValue)
      selectOptions = props.options
      inputValue.value = ''
    }
  }
}
// 鼠标移入Select事件
let clearIcon = ref(false)
const selectMouseEnter = () => {
  if (selectModel.length > 0 && props.clearable) {
    clearIcon.value = true
  }
}
// 点击清除按钮
const clearClick = () => {
  emits('update:modelValue', [])
}
</script>

<template>
  <div ref="container" :class="selectCls" v-clickOutSize>
    <div
      :class="[ns.e('wrapper'), ns.is(props.disabled, 'disabled'), ns.b(props.size), postionShow ? 'select-focus' : '']"
      @mouseenter="selectMouseEnter" @mouseleave="clearIcon = false">
      <div :class="ns.e('content')">
        <div :class="ns.e('placeholder')" v-if="modelValue!.length <= 0 && !props.filterable">
          <div :class="ns.e('placeholder__inner')">{{ props.placeholder }}</div>
        </div>
        <div :class="ns.e('input')">
          <div class="flex flex--space--between" :class="[ns.e('input__inner'),
          props.multiple ? 'select-tag' : '']" v-for="(item, index) in props.modelValue">
            <span>
              {{ item }}
            </span>
            <div class="select-tag-close" v-if="props.multiple" style="width: 14px; height: 14px;">
              <berry-icon name="close" size="14px" @click="handleDeleteTag(index)"></berry-icon>
            </div>
          </div>
          <div class="input__filter flex--acenter flex--1" v-if="props.filterable">
            <input v-model="inputValue" ref="input" type="text" class="select__input" :placeholder="placeholder"
              @input="handleInput($event)" @keyup.enter="inputEnter($event)">
          </div>
        </div>
      </div>
      <div :class="ns.e('suffix-inner')">
        <slot name="suffixIcon" v-if="!clearIcon">
          <berry-icon name="xiala"></berry-icon>
        </slot>
        <berry-icon class="clear_icon" size="12px" name="close" v-else @click="clearClick"></berry-icon>
      </div>

    </div>
    <div class="select-dropdown__wrapper" v-if="postionShow" :style="[
      {
        top: postionTop
      }
    ]">
      <ul class="select-dropdown" v-if="!hasChildType">
        <li class="select-dropdown__item" v-for="(item, key) in selectOptions" :index="key" @click="change(item)"
          :class="props.modelValue!.includes(item[props.filedLabel as string]) ? 'select-item-active' : ''">
          {{ (item as any)[props.filedLabel] }}
          <!-- {{ props.modelValue }} -->
        </li>

      </ul>
      <ul class="select-dropdown-group__wrap" v-else>
        <li v-for="group in selectOptions" class="select-dropdown-group__title">
          {{ group.label }}
          <ul class="select-dropdown-group">
            <li class="select-dropdown__item" v-for="item in group.children" @click="change(item)"
              :class="props.modelValue!.includes((item as any)[props.filedLabel]) ? 'select-item-active' : ''">
              {{ item.label }}
            </li>
          </ul>
        </li>
      </ul>
      <div class="flex-acenter is-empty" v-if="selectOptions.length <= 0">
        <div class="select-dropdown__empty">
          <div class="flex--center empty_icon">
            <berry-icon name="wushuju" size="32px"></berry-icon>
          </div>
          <span class="flex--jcenter">无数据</span>
        </div>
      </div>
    </div>
  </div>
</template>

<style lang="scss" scoped>
.v-enter-active,
.v-leave-active {
  transition: opacity 0.5s ease;
}

.v-enter-from,
.v-leave-to {
  opacity: 0;
}
</style>