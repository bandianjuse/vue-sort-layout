<template>
  <div>
    <div>
      <h3>基础</h3>
      <div class="clear">
        <div style="float: left; width: 500px">
          <vue-sort-layout v-model="list" class="list-group"  :options="setOptions">
            <div class="list-group-item" v-for="item in list" :key="item.id">{{item.name}}</div>
          </vue-sort-layout>
        </div>
        <div style="float: left;width: 500px">
          list： {{list}}
        </div>
      </div>
    </div>
    
    <div>
      <h3>共享列表</h3>
      <div class="clear">
        <div style="float: left; width: 400px">
          <vue-sort-layout v-model="list2" :group="{ name: 'shared', pull: 'clone' }" class="list-group"  :options="setOptions">
            <div class="list-group-item" v-for="(item, index) in list2" :key="index">{{item.name}}</div>
          </vue-sort-layout>
        </div>
        <div style="float: left; width: 400px">
          <vue-sort-layout v-model="list3" group='shared' class="list-group"  :options="setOptions">
            <div class="list-group-item" v-for="(item, index) in list3" :key="index">{{item.name}}</div>
          </vue-sort-layout>
        </div>
        <div style="float: left;width: 400px">
          <div> list2： {{list2}}</div>
          <div> list3： {{list3}}</div>
         
        </div>
      </div>
    </div>
  </div>
</template>
<style>
body {
  margin: 0;
  padding: 0;
}
.list-group-item{
  padding:10px;
  border:1px solid #ddd;
  margin:10px;
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
.blue-background-class{
  background-color: burlywood
}
.shared-item{
  background-color:darkseagreen
}
.list-shared{
  width: 300px;
  float:left;
  
}
</style>
<script>
export default {
  data() {
    return {
      list: [
        {
          name: 'Jaa',
          id: 0,
        },
        {
          name: 'Jbb',
          id: 1,
          disable: true,
        },
        {
          name: 'Jcc',
          id: 2,
        },
        {
          name: 'Jee',
          id: 3,
        },
      ],
      list2: [
        {
          name: 'Jaa',
          id: 0,
        },
        {
          name: 'Jbb',
          id: 1,
        },
        {
          name: 'Jcc',
          id: 2,
        },
        {
          name: 'Jee',
          id: 3,
        },
      ],
      list3: [
        {
          name: 'Jff',
          id: 4,
        },
        {
          name: 'Jhh',
          id: 5,
        },
        {
          name: 'Jii',
          id: 6,
        },
        {
          name: 'Jjj',
          id: 7,
        },
      ],
      setOptions: {
        ghostClass: 'blue-background-class',
      },
    };
  },
};
</script>