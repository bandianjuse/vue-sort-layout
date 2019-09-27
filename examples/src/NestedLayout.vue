<template>
    <vue-sort-layout v-model="nList"  :nested="nested" >
        <div class="list-group-item" v-for="item in nList" :key="item.id" >
            {{item.name}}
            <nested-layout  v-model="item.children" :nested="item.nested"></nested-layout>
        </div>
    </vue-sort-layout>
</template>

<script>
export default {
  name: 'nested-layout',
  model: {
    prop: 'list',
    event: 'change',
  },
  computed: {
    nList: {
      get() {
        return this.list;
      },
      set(val) {
        this.$emit('change', val);
      },
    },
  },
  props: ['list', 'nested'],
 
};
</script>