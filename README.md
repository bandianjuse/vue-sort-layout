# vue-sort-layout

> 一个vue.js的排序布局组件，基于SortableJS。


## 安装


```sh
$ npm i vue-sort-layout --save
```

## 引入

```js
import vueSortLayout from 'vue-sort-layout';

Vue.use(vueSortLayout);
```

## 使用

```js
// template
<vue-sort-layout v-model="list">
    <div v-for="item in list" :key="item.id">{{item.name}}</div>
</vue-sort-layout >                      
```

```js
// js
list = [
  {
    name: 'AAA',
    id: 0,
  },
  {
    name: 'BBB',
    id: 1,
  },
  {
    name: 'CCC',
    id: 2,
  },
  {
    name: 'DDD',
    id: 3,
  },
]                    
```

## 属性
### filter \<String>
> 禁止拖动的选择器。

```js
// template
<vue-sort-layout v-model="list"  filter="ignore">
    <div :class="{ ignore: item.ignore }" v-for="item in list" :key="item.id">{{item.name}}</div>
</vue-sort-layout >                      
```

```js
// js
list = [
  {
    name: 'AAA',
    id: 0,
    ignore: true,
  },
  {
    name: 'BBB',
    id: 1,
    ignore: true,
  },
  {
    name: 'CCC',
    id: 2,
  },
  {
    name: 'DDD',
    id: 3,
  },
]                    
```

### sort \<Boolean>  默认: true
> 是否可排序。

### handle \<String>
> 在列表项中拖动手柄选择器。

### ghostClass \<String>
> 放置占位符的类名。

### nested \<Boolean>  默认: false
> 是否可嵌套。

### group \<String, Object> 
> 组。 group="group-name" 或 v-bind:group="{ name: 'group-name', pull: 'clone'}"

### expand \<Object> 
> 拓展。详情配置可以参考 https://github.com/SortableJS/Sortable

## 事件

### onAdd 
> @onAdd="handleAddEvent"  元素从另一个列表中拖放到列表中调用。

### onRemove 
> @onRemove="handleRemoveEvent"  元素从另一个列表中移除到列表调用。

### onSort 
> @onSort="handleSortEvent"  列表中有任何元素排序时调用。

### onStart 
> @onStart="handleStartEvent"  元素拖动开始时调用。

### onEnd 
> @onEnd="handleEndEvent"  元素拖动结束时调用。

### onClone 
> @onClone="handleCloneEvent"  创建元素的克隆时调用。
