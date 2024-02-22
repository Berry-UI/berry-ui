## Select

### 基础用法
<preview path="./src/basic.vue"></preview>

### 不同大小
select有三种不同的大小 使用 `size` 可设置不同大小 分别是
`small`  ,
`normal` ,
`large` ,
默认是 `normal`
<preview path="./src/size.vue"></preview>

### 多选
小孩才做选择 大人全都要，使用 `multiple` 可设置多选。
<preview path="./src/multiple.vue"></preview>

### change 事件
有些数据突然就变了，`change` 事件 可以查看数据变化哦~
<preview path="./src/change.vue"></preview>

### 可过滤
一个不太伟大的过滤器 `filterable` 冲~~~~~~~
<preview path="./src/filterable.vue"></preview>

### 自定义Tag
随心所欲，自己定义 `tag` 需要配合 `filterable` 使用
<preview path="./src/tag.vue"></preview>

### 可清空 
乌鸦掀桌子，全没得了 `clearable` 设置可清空 ，注意！必须要有数据才可以哦
<preview path="./src/clearable.vue"></preview>

### 不一样的组合 
整点不一样的，数据分组 
<preview path="./src/children.vue"></preview>

### 自定义图标
不做大多数，后缀图标可以自定义
<preview path="./src/suffixIcon.vue"></preview>

### 自定义字段
它总是善变的
<preview path="./src/field.vue"></preview>

# Api

## Select Props


| 名称        | 类型                           | 默认值   | 说明                               |
| ----------- | ------------------------------ | -------- | ---------------------------------- |
| v-model     | `array`                        | `[]`     | `必需属性`                         |
| placeholder | `string`                       | `请选择` | 下拉框提示文本                     |
| multiple    | `boolean`                      | `false`  | 是否为多选                         |
| disabled    | `boolean`                      | `false`  | 是否禁用                           |
| size        | `small` \| `normal` \| `large` | `normal` | 下拉框的尺寸                       |
| filterable  | `boolean`                      | `false`  | 选项是否可以过滤                   |
| tag         | `boolean`                      | `false`  | 可以动态创建tag, with &&filterable |
| clearable   | `boolean`                      | `false`  | 是否可以清空                       |
| maxTagCount | `number`                       | `NAN`    | 标签最大显示数量    `to-do`        |
| filedLabel  | `string`                       | `label`  | 自定义label                        |
| filedValue  | `string`                       | `label`  | 自定义value                        |

## SelectOptions 
| 名称     | 类型                | 默认值  | 说明                                |
| -------- | ------------------- | ------- | ----------------------------------- |
| type     | `string`            | `group` | 选项组类型                          |
| key      | `string`\|`number`  | ``      | 选项组可用,并在选项组中应是唯一的   |
| label    | `string`\|`number`  | ``      | 选项的label                         |
| value    | `string`\|`number`  | ``      | 选项的value                         |
| disabled | `boolean`           | ``      | 选项是否禁用                        |
| children | `SelectGroupOption` | ``      | 数组 具体值参考 `SelectGroupOption` |

## SelectGroupOption

| 名称     | 类型      | 默认值  | 说明                   |
| -------- | --------- | ------- | ---------------------- |
| label    | `string`  | ``      | 选项的标签             |
| value    | `string`  | ``      | 在选项组中应该是唯一的 |
| disabled | `boolean` | `false` | 选项组是否禁用         |

## Select Slots

| 名称       | 参数 | 说明         | 版本  |
| ---------- | ---- | ------------ | ----- |
| suffixIcon | `()` | `自定义箭头` | 24215 |

## Select Events

| 事件名 | 说明                        | 参数                    |
| ------ | --------------------------- | ----------------------- |
| change | Select 值发生改变时触发函数 | `(item:object) => void` |

