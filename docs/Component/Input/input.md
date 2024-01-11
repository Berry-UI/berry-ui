# Input

## 基础

### 基本用法

<preview path="./src/basic.vue" title="基本使用"></preview>

### 尺寸

使用 size 属性改变输入框大小。 除了默认大小外，还有另外两个选项： large, small。
<preview path="./src/size.vue" title="基本使用"></preview>

### 禁用状态

通过 disabled 属性指定是否禁用 input 组件
<preview path="./src/disabled.vue" title="基本使用"></preview>

### 带图标的输入框

带有图标标记输入类型

要在输入框中添加图标，你可以简单地使用 prefix 和 suffix 属性。 另外， prefix 和 suffix 命名的插槽也能正常工作。
<preview path="./src/icon.vue" title="基本使用"></preview>

### 密码框

<preview path="./src/type.vue" title="基本使用"></preview>

### 输入长度

<preview path="./src/length.vue" title="基本使用"></preview>

### 必填框

<preview path="./src/required.vue" title="基本使用"></preview>

### 复合输入框

<preview path="./src/inputgroup.vue" title="基本使用"></preview>

# Api

## Input Props

| 名称         | 类型                               | 默认值   | 说明                              |
| ------------ | ---------------------------------- | -------- | --------------------------------- |
| v-model      | `string`                           |          | 输入框绑定值                      |
| type         | `text` \| `password`\| `textarea ` | `text`   | 输入框类型                        |
| size         | `small` \| `normal`\| `large `     | `normal` | 输入框大小                        |
| placeholder  | `string`                           |          | 默认显示                          |
| disabled     | `boolean`                          | `false`  | 是否可选中                        |
| icon         | `template`                         |          | 输入框图标                        |
| passwordOn   | `click` \| `mousedown`             | `click`  | 密码框显示类型                    |
| minLength    | `number`                           | `524288` | 最小输入长度                      |
| maxLength    | `number`                           | `524288` | 最大输入长度                      |
| showCount    | `boolean`                          | `false`  | 是否显示输入长度                  |
| autocomplete | `boolean`                          | `false`  | 是否自动完成                      |
| required     | `boolean`                          | `false`  | 是否必填，只做样式，不做校验-可砍 |

## Input Slots

| 名称   | 类型               | 说明           |
| ------ | ------------------ | -------------- |
| prefix | `Ref<HTMLElement>` | 输入框头部内容 |
| suffix | `Ref<HTMLElement>` | 输入框尾部内容 |

## Input Evenets

| 事件名 | 说明                       | 参数                         |
| ------ | -------------------------- | ---------------------------- |
| change | Input 值发生改变时触发函数 | `(value:string) => void`     |
| focus  | Input 聚焦时触发函数       | `(event:FocusEvent) => void` |
| blur   | Input 失焦时触发函数       | `(event:FocusEvent) => void` |
