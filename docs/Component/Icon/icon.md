# Icon

图标

<!-- ```js{2}
  <BerryIcon name="jubao" color="rgb(15,15,15)" size="48px"></BerryIcon>// [!code ++]
  <BerryIcon name="jubao" color="rgba(15,15,15,.5)" size="48px"></BerryIcon>// [!code focus]
  <BerryIcon name="jubao" color="#715718" size="48px" rotate="true"></BerryIcon>// [!code ++]
``` -->

## 演示

### 基础

<preview path="./src/basic.vue" title="基本使用" description=""></preview>

### 自定义大小

<preview path="./src/size.vue" title="基本使用" description=""></preview>

### 自定义颜色、

<preview path="./src/color.vue" title="基本使用" description=""></preview>

### 旋转

<preview path="./src/rotate.vue" title="基本使用" description=""></preview>

# API

## Icon Props

| 名称  | 类型     | 默认值         | 说明                                          |
| ----- | -------- | -------------- | --------------------------------------------- |
| name  | `string` | `undefined`    | 要展示的图标组件                              |
| color | `string` | `currentColor` | 图标颜色(支持 rgb、rgba 以及 16 进制颜色格式) |
| size  | `string` | `24px`         | 图标大小                                      |
