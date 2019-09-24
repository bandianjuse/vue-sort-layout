<template>
  <div ref="root">
    <slot></slot>
  </div>
</template>

<script>
import Sortable from 'sortablejs';

export default {
  data() {
    return {
      basisOptions: {
        animation: 150,
        onSort: this.onSort,
      },
    };
  },
  model: {
    prop: 'list',
    event: 'change',
  },
  props: {
    list: {
      type: Array,
      default: () => [],
    },
    group: [String, Object],
    options: {
      type: Object,
      default: () => {},
    },
  },
  provide() {
    const rootOptions = Object.assign(this.basisOptions, this.options);
    return {
      uid: this._uid,
      rootOptions,
    };
  },
  methods: {
    onSort(event) {
      this.updatePosition(event.item.dataItem);
    },
   
    // onAdd(event) {
    //   // const { newIndex, oldIndex } = event;
    //   console.log('onAdd', event);
    //   // this.list.splice(newIndex, 0, this.list.splice(oldIndex, 1)[0]);
    // },
    updatePosition(curDataItem) {
      const newList = [];
      this.$refs.root.childNodes.forEach((node) => {
        if (node.dataItem) {
          newList.push(node.dataItem);
        } else {
          newList.push(curDataItem);
        }
      });
      console.log(this.$refs.root.childNodes);
      this.$emit('change', newList);
    },
    setElchildNodes(root) {
      const disableIds = this.list.filter((item) => item.disable).map((item) => item.id);
    
      root.childNodes.forEach((node, i) => {
        const n = node;
        n.dataItem = this.list[i];
        if (disableIds.indexOf(i) >= 0) {
          const className = node.getAttribute('class');
          n.setAttribute('class', className.concat(' disable'));
          this.basisOptions.filter = '.disable';
        }
      });
    },
    setProps() {
      if (this.group) this.basisOptions.group = this.group;
    },
  },
  updated() {
    this.setElchildNodes(this.$refs.root);
  },
  mounted() {
    if (this.$children.length) return;
    const { root } = this.$refs;
    const rootOptions = Object.assign(this.basisOptions, this.options);
    this.setElchildNodes(root);
    this.setProps();
    Sortable.create(root, rootOptions);
  },
};
</script>
