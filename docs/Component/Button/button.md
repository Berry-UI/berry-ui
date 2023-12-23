# Button

## 基础

* 按钮的`type` 分别为 `default` 、`primary` 、`success` 、 `info` 、`warning` 、`error` 
<preview path="./src/basic.vue" title="基本使用" description=""></preview>

## 加载中
* 按钮有加载状态
<preview path="./src/loading.vue" title="基本使用" description=""></preview>

## 图标
 * 使用`prefixIcon`指定按钮的前缀图标
 * 使用`suffixIcon`指定按钮的后缀图标
<preview path="./src/icon.vue" title="基本使用" description=""></preview>

## 尺寸
* 有`normal` 、`small` 、`large` 三种大小
<preview path="./src/size.vue" title="基本使用" description=""></preview>

## 透明背景
* 使用 `variant` 设置透明背景
<preview path="./src/ghost.vue" title="基本使用" description=""></preview>

## 禁用
* 按钮可以使用 `disabled` 禁用
<preview path="./src/disabled.vue" title="基本使用" description=""></preview>

# API

## Button Props

| 名称       | 类型                            | 默认值   | 说明               |
| ---------- | ------------------------------- | -------- | ------------------ |
| nativeType | `button` \| `submit` \| `reset` | `button` | `按钮DOM默认属性`  |
| variant    | `ghost`                         | `ghost`  | `按钮的透明主题`   |
| loading    | `Boolean`                       | `false`  | `按钮是否可以加载` |
| disabled    | `Boolean`                       | `false`  | `按钮是否被禁用` |
| perfixIcon | `String`                        | `---`    | `按钮的前缀图标`   |
| suffixIcon | `String`                        | `---`    | `按钮的后缀图标`   |
| size       | `normal` \| `small` \| `large`  | `normal` | `按钮大小`         |

## Button Events

| 事件名 | 说明         | 类型       |
| ------ | ------------ | ---------- |
| click  | 按钮点击事件 | `function` |
