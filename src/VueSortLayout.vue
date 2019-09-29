<template>
  <div><slot></slot></div>
</template>

<script>
import Sortable from 'sortablejs';

function getListFromNodes(nodes) {
  const newList = [];
  nodes.forEach((node) => {
    newList.push(node.dataItem);
  });
  return newList;
}
function eventFun(name, event) {
  this.$emit(name, event);
}
export default {
  data() {
    return {
      options: {
        animation: 150,
        onAdd: this.onAdd,
        onSort: this.onSort,
        onRemove: this.onRemove,
        onStart: eventFun.bind(this, 'onStart'),
        onEnd: eventFun.bind(this, 'onEnd'),
        onClone: eventFun.bind(this, 'onClone'),
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
    filter: {
      type: String,
      default: '',
    },
    sort: {
      type: Boolean,
      default: true,
    },
    handle: {
      type: String,
      default: '',
    },
    ghostClass: {
      type: String,
      default: '',
    },
    nested: {
      type: Boolean,
      default: false,
    },
    group: [String, Object],
    expand: {
      type: Object,
      default: () => {},
    },
  },
  methods: {
    onAdd(event) {
      const nodes = event.to.childNodes;
      this.$emit('change', getListFromNodes(nodes));
      nodes.forEach((node) => node === event.item && node.remove());
      
      this.$emit('onAdd', event);
    },
    onRemove(event) {
      if (event.pullMode === true) {
        this.$emit('change', getListFromNodes(event.from.childNodes));
      }
      this.$emit('onRemove', event);
    },
    onSort(event) {
      if (event.pullMode === undefined) {
        this.$emit('change', getListFromNodes(event.to.childNodes));
      }
      this.$emit('onSort', event);
    },
   
    setProps() {
      if (this.nested) {
        this.options.group = 'nested';
        this.options.fallbackOnBody = true;
        this.options.swapThreshold = 0.65;
      }
      if (this.group) this.options.group = this.group;
      if (this.filter) this.options.filter = `.${this.filter}`;
      if (this.handle) this.options.handle = `.${this.handle}`;
      if (this.ghostClass) this.options.ghostClass = this.ghostClass;
      

      this.options.sort = this.sort;
    },
    createSortable() {
      const rootOptions = Object.assign(this.options, this.expand);
      this.$el.childNodes.forEach((node, index) => {
        const n = node;
        n.dataItem = this.list[index];
      });
      this.setProps();
      if (this.sortable !== undefined) this.sortable.destroy();
      this.sortable = new Sortable(this.$el, rootOptions);
    },
  },
  updated() {
    this.createSortable();
  },
  destroyed() {
    this.sortable.destroy();
  },
  mounted() {
    this.createSortable();
  },
};
</script>
