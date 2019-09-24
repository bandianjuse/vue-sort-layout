<template>
  <div ref="shared">
    <slot></slot>
  </div>
</template>

<script>
import Sortable from 'sortablejs';

export default {
  data() {
    return {
    };
  },
  props: {
    options: {
      type: Object,
      default: () => {},
    }, 
    pull: [String, Boolean],
    put: Boolean,
    sort: [String, Boolean],
  },
  inject: ['uid', 'rootOptions'],
  computed: {
    groupOptions() {
      const options = {
        group: { 
          name: `shared-${this.uid}`,
        },
      };
      if (typeof this.pull !== 'undefined') {
        options.group.pull = this.pull;
      }
     
      if (typeof this.put === 'boolean' && !this.put) {
        // console.log(this.put);
        console.log(typeof this.put);
        options.group.put = false;
      }
      if (typeof this.sort !== 'undefined') {
        options.sort = this.sort;
      }
      // if (this.noSort) {
      //   options.sort = false;
      // }
      // if (this.noPut) {
      //   options.group.put = false;
      // }
      return options;
    },
  },
  methods: {
    mergeOptions() {
      
    },
  },
  mounted() {
    const el = this.$refs.shared;
    const options = Object.assign(this.groupOptions, this.rootOptions, this.options);
    Sortable.create(el, options);
  },
};
</script>
