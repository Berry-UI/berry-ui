# Radio

## 基础

* radio组件的基本使用，需要一个主要 `options` 属性
<preview path="./src/basic.vue" title="基本使用"></preview>

* 可以在 `options` 下某个对象中加入 `disabled` 属性实现禁用 默认不禁用
<preview path="./src/disabled.vue" title="禁用"></preview>

* 使用 `comstomColor` 传入自定义颜色
<preview path="./src/custom.vue" title="表现形式"></preview>

* 使用 `vertical` 设置 `radio` 成垂直排列
<preview path="./src/vertial.vue"></preview>

* 使用 `varitant` 设置 `radio` 的表现形式  
<preview path="./src/variant.vue" title="表现形式"></preview>


# Api

## Radio Props
| 名称        | 类型                             | 默认值     | 说明                          |
| ----------- | -------------------------------- | ---------- | ----------------------------- |
| v-model     | `string`\| `number` \| `boolean` | `---`      | `required` 选中得值           |
| option      | options                          | `Array`    | `具体参考下面的options配置项` |
| variant     | `string`                         | `默认样式` | `ghost`\| `button `           |
| vertical    | `boolean`                        | `false`    | 设置按钮组为垂直              |
| customColor | `RGB` \| `RGBA` \| `HEX`         | `#4338ca`  | 设置radio的填充颜色           |

## options API 
| 名称     | 类型      | 默认值  | 说明                  |
| -------- | --------- | ------- | --------------------- |
| label    | `string`  | `label` | 单选默认label的展示值 |
| value    | `string`  | `value` | 单选默认value的展示值 |
| disabled | `boolean` | `false` | 单选是否被禁用        |

## Radio Evenets 

| 事件名 | 说明                      | 类型                      |
| ------ | ------------------------- | ------------------------- |
| change | radio发生改变时触发的函数 | `function(item) ==> void` |
