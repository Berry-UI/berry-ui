# Switch

## 基础

### 基本用法

<preview path="./src/basic.vue" title="基本使用"></preview>

### 尺寸

使用 size 属性改变输入框大小。 除了默认大小外，还有另外两个选项： large, small。
<preview path="./src/size.vue" title="基本使用"></preview>

# Api

## Switch Props

| 名称    | 类型                          | 默认值   | 说明       |
| ------- | ----------------------------- | -------- | ---------- |
| v-model | `string`                      |          | 开关绑定值 |
| size    | `small` \| `normal`\| `large` | `normal` | `开关尺寸` |

## Switch Slots

| 名称    | 类型               | 说明                      |
| ------- | ------------------ | ------------------------- |
| default | `Ref<HTMLElement>` | 开关描述内容，一般为 text |

## Switch Evenets

| 事件名 | 说明                        | 参数                     |
| ------ | --------------------------- | ------------------------ |
| change | Switch 值发生改变时触发函数 | `(value:string) => void` |
