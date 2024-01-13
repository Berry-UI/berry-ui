# CheckBox

## 基础

### 基本用法

<preview path="./src/basic.vue" title="基本使用" description=""></preview>

### 尺寸

使用 size 属性改变输入框大小。 除了默认大小外，还有另外两个选项： large, small。
<preview path="./src/size.vue" title="基本使用" description=""></preview>

### 禁用

使用 disabled 属性禁用复选框。
<preview path="./src/disabled.vue" title="基本使用" description=""></preview>

### slot

<preview path="./src/slot.vue" title="基本使用" description=""></preview>

# API

## CheckBoxGroup Props

| 名称    | 类型                          | 默认值   | 说明         |
| ------- | ----------------------------- | -------- | ------------ |
| v-model | `Array`                       | `[]`     | `绑定值`     |
| size    | `small` \| `normal`\| `large` | `normal` | `复选框尺寸` |

## CheckBoxGroup Events

| 事件名 | 描述                   | 类型                                              | 说明                                     |
| ------ | ---------------------- | ------------------------------------------------- | ---------------------------------------- |
| change | 复选框状态发生改变触发 | `(value: string \| number, flag: number) => void` | value：变化值<br/> flag：1 新增，-1 删除 |

## CheckBoxGroup Slots

| 名称    | 说明               | 类型 |
| ------- | ------------------ | ---- |
| default | CheckBoxGroup 内容 | `()` |

## CheckBox Props

| 名称     | 类型                              | 默认值  | 说明         |
| -------- | --------------------------------- | ------- | ------------ |
| label    | `String`                          | ``      | `复选框描述` |
| value    | `String` \| `Number` \| `Boolean` | ``      | `复选框值`   |
| disabled | `Boolean`                         | `false` | `是否可选`   |

<!-- ## CheckBox Events

| 事件名 | 说明         | 类型       |
| ------ | ------------ | ---------- |
| click  | 按钮点击事件 | `function` | -->

## CheckBox Slots

| 名称    | 说明          | 类型 |
| ------- | ------------- | ---- |
| default | CheckBox 内容 | `()` |
