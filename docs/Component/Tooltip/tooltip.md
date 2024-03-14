# Tooltip

## 基础

### 基本用法

<preview path="./src/basic.vue" title="基本使用"></preview>

### delay

<preview path="./src/delay.vue" title="基本使用"></preview>

### 触发方式

<preview path="./src/trigger.vue" title="基本使用"></preview>

# Api

## Tooltip Props

| 名称        | 类型                 | 默认值  | 说明                      |
| ----------- | -------------------- | ------- | ------------------------- |
| descirption | `string`             |         | 描述文字                  |
| placement   | `string`             | `top`   | 显示位置,若超出视口则反向 |
| delay       | `string` \| `number` | `0`     | 延迟显示时间              |
| trigger     | `click` \| `hover`   | `hover` | 触发方式                  |

## Tooltip Slots

| 名称    | 类型               | 说明 |
| ------- | ------------------ | ---- |
| default | `Ref<HTMLElement>` | 内容 |
