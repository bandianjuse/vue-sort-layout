<template>
  <div>
    <div>
      <h3>基础</h3>
      <div class="clear">
        <div style="float: left; width: 500px">
          <vue-sort-layout v-model="list" class="list-group" filter="ignore-elements" >
            <div :class="['list-group-item', { 'ignore-elements': item.disable }]" v-for="item in list" :key="item.id"><button @click="handleDisable(item.id)">{{ item.disable ? '启用' : '禁用'}}</button> {{item.name}}</div>
          </vue-sort-layout>
        </div>
        <div class="code-box" style="float: left;width: 500px">
          <pre>{{JSON.stringify(list, null, 4)}}</pre>
        </div>
      </div>
    </div>
    <hr />
    <div>
      <h3>共享列表</h3>
      <div style="margin-left:50px">
        操作：
        <select v-model="sharedSelectVal">
          <option value="1">无</option>
          <option value="2">复制</option>
          <option value="3">禁止排序</option>
        </select>
      </div>
      <div class="clear">
        <div style="float: left; width: 400px">
          <vue-sort-layout v-model="list2" :group="group2" :sort="sort" class="list-group"  @onAdd="onAdd2"  >
            <div :class="['list-group-item', { active: item.active }]" v-for="item in list2" :key="item.id">{{item.name}}</div>
          </vue-sort-layout>
        </div>
        <div style="float: left; width: 400px">
          <vue-sort-layout v-model="list3" :group="group3" class="list-group" @onAdd="onAdd3"  >
            <div :class="['list-group-item', { active: item.active }]" v-for="item in list3" :key="item.id">{{item.name}}</div>
          </vue-sort-layout>
        </div>
        <div  class="code-box"  style="float: left;width: 400px">
          <div style="float:left; margin-right:50px"> <pre>{{JSON.stringify(list2, null, 4)}}</pre></div>
          <div style="float:left"> <pre>{{JSON.stringify(list3, null, 4)}}</pre></div>
         
        </div>
      </div>
    </div>

    <hr />
    <div>
      <h3>手柄</h3>
      <div class="clear">
        <div style="float: left; width: 500px">
          <vue-sort-layout v-model="list4" class="list-group" handle="handle" >
            <div class="list-group-item" v-for="item in list4" :key="item.id"><span class="handle">❖</span>{{item.name}}</div>
          </vue-sort-layout>
        </div>
        <div class="code-box" style="float: left;width: 500px">
          <pre>{{JSON.stringify(list4, null, 4)}}</pre>
        </div>
      </div>
    </div>

    <hr />
    <div>
      <h3>组(占位符)</h3>
      <div class="clear">
        <div style="float: left; width: 500px">
          <vue-sort-layout v-model="list5" ghostClass="ghost-class" class="list-group clear" >
            <div class="group-item" v-for="item in list5" :key="item.id">{{item.name}}</div>
          </vue-sort-layout>
        </div>
      </div>
    </div>

    <hr />
    <div>
      <h3>嵌套排序</h3>
      <div class="clear">
        <div style="float: left; width: 500px">
          <nested-layout v-model="list6" :nested="true"></nested-layout>
        </div>
        <div class="code-box" style="float: left;width: 500px">
          <pre>{{JSON.stringify(list6, null, 4)}}</pre>
        </div>
      </div>
    </div>

    <hr />
    <div>
      <h3>拓展</h3>
      <div class="clear">
        <div style="float: left; width: 500px">
          <vue-sort-layout v-model="list7" class="list-group" :expand="expand" >
            <div class="list-group-item" v-for="item in list7" :key="item.id">{{item.name}}</div>
          </vue-sort-layout>
        </div>
        <div class="code-box" style="float: left;width: 500px">
          <pre>{{JSON.stringify(list7, null, 4)}}</pre>
        </div>
      </div>
    </div>

  </div>
</template>

<script>
import nestedLayout from './NestedLayout.vue';

const list2 = [
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
];
const list3 = [
  {
    name: 'EEE',
    id: 4,
    active: true,
  },
  {
    name: 'FFF',
    id: 5,
    active: true,
  },
  {
    name: 'HHH',
    id: 6,
    active: true,
  },
  {
    name: 'III',
    id: 7,
    active: true,
  },
];
const list4 = [
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
];
export default {
  data() {
    return {
      sort: true,
      sharedSelectVal: '1',
      group2: { name: 'shared' },
      group3: { name: 'shared' },
      list: [
        {
          name: 'AAA',
          id: 0,
          disable: false,
        },
        {
          name: 'BBB',
          id: 1,
          disable: false,
        },
        {
          name: 'CCC',
          id: 2,
          disable: false,
        },
        {
          name: 'DDD',
          id: 3,
          disable: false,
        },
      ],
      list2,
      list3,
      list4,
      list5: [
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
        {
          name: 'EEE',
          id: 4,
        },
        {
          name: 'FFF',
          id: 5,
        },
        {
          name: 'III',
          id: 6,
        },
        {
          name: 'JJJ',
          id: 7,
        },
        {
          name: 'KKK',
          id: 8,
        },
      ],
      list6: [
        {
          name: 'AAA',
          id: 0,
          nested: true,
          children: [
            {
              name: 'EEE',
              id: 4,
              nested: true,
            },
            {
              name: 'FFF',
              id: 5,
            },
          ],
        },
        {
          name: 'BBB',
          id: 1,
          nested: true,
          children: [
            {
              name: 'III',
              id: 6,
              nested: true,
            },
          ],
        },
        {
          name: 'CCC',
          id: 2,
          nested: true,
        },
        {
          name: 'DDD',
          id: 3,
        },
      ],
      list7: list4,
      expand: {
        ghostClass: 'my-sortable-ghost',
        chosenClass: 'my-sortable-chosen', 
      },
    };
  },
  components: {
    nestedLayout,
  },
  watch: {
    sharedSelectVal(val) {
      this.list2 = list2;
      this.list3 = list3;
      if (val === '1') {
        this.sort = true;
        this.group2 = { name: 'shared' };
        this.group3 = { name: 'shared' };
      } else if (val === '2') {
        this.sort = true;
        this.group2 = { name: 'shared', pull: 'clone' };
        this.group3 = { name: 'shared', pull: 'clone' };
      } else if (val === '3') {
        this.group2 = { name: 'shared', pull: 'clone', put: false };
        this.sort = false;
        this.group3 = { name: 'shared' };
      }
    },
  },
  methods: {
    
    handleDisable(id) {
      this.list.forEach((item, index) => {
        if (item.id === id) {
          this.list[index].disable = !this.list[index].disable;
        } 
      });
    },
    handleId(list, index) {
      const curItem = list[index];
      const newList = [...list];
      const maxNum = Math.max(...list.map((item) => item.id));
      let count = 0; 
      newList.forEach((item) => {
        if (item.id === curItem.id) {
          count += 1;
        }
      });
      if (count === 2) {
        newList[index] = {
          id: maxNum + 1,
          name: curItem.name,
        };
      }
      return newList;
    },
    onAdd2(e) {
      this.list2 = [...this.handleId(this.list2, e.newIndex)];
    },
    onAdd3(e) {
      this.list3 = [...this.handleId(this.list3, e.newIndex)];
    },
  },
};
</script>

<style>
body {
  margin: 0;
  padding: 20px;
}
.list-group-item{
  padding:10px;
  border:1px solid #ddd;
  margin:10px;
}
.group-item{
  width: 100px;
  text-align: center;
  line-height: 100px;
  height:100px;
  border:1px solid #ddd;
  margin:10px;
  float:left
}
.list-group{
  padding:20px;
   border:1px solid #ddd;
   margin:20px;
}
.clear:after{
  display:block;
  clear:both;
  content:"";
  visibility:hidden;
  height:0
  }
.my-sortable-ghost{
  opacity: .5;
}
.my-sortable-chosen{
    border: 1px dashed red;
    color: red
}

.shared-item{
  background-color:darkseagreen
}
.list-shared{
  width: 300px;
  float:left;
  
}
.ignore-elements{
  background-color: red;
  cursor: default
}
.code-box{
  border: 1px solid #ddd;
  padding: 20px;
  background-color: #f5f5f5;
  border-radius: 10px;
}
.active{
  background-color: #fff6b2;
}
.handle{
  cursor:move;
  display:inline-block;
  padding: 0 5px;
}
.ghost-class{
  background-color: #C8EBFB;
}
</style>