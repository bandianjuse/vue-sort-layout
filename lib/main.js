import Sortable from 'sortablejs';

//

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
var script = {
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
  mounted() {
    this.createSortable();
  },
};

function normalizeComponent(template, style, script, scopeId, isFunctionalTemplate, moduleIdentifier
/* server only */
, shadowMode, createInjector, createInjectorSSR, createInjectorShadow) {
  if (typeof shadowMode !== 'boolean') {
    createInjectorSSR = createInjector;
    createInjector = shadowMode;
    shadowMode = false;
  } // Vue.extend constructor export interop.


  var options = typeof script === 'function' ? script.options : script; // render functions

  if (template && template.render) {
    options.render = template.render;
    options.staticRenderFns = template.staticRenderFns;
    options._compiled = true; // functional template

    if (isFunctionalTemplate) {
      options.functional = true;
    }
  } // scopedId


  if (scopeId) {
    options._scopeId = scopeId;
  }

  var hook;

  if (moduleIdentifier) {
    // server build
    hook = function hook(context) {
      // 2.3 injection
      context = context || // cached call
      this.$vnode && this.$vnode.ssrContext || // stateful
      this.parent && this.parent.$vnode && this.parent.$vnode.ssrContext; // functional
      // 2.2 with runInNewContext: true

      if (!context && typeof __VUE_SSR_CONTEXT__ !== 'undefined') {
        context = __VUE_SSR_CONTEXT__;
      } // inject component styles


      if (style) {
        style.call(this, createInjectorSSR(context));
      } // register component module identifier for async chunk inference


      if (context && context._registeredComponents) {
        context._registeredComponents.add(moduleIdentifier);
      }
    }; // used by ssr in case component is cached and beforeCreate
    // never gets called


    options._ssrRegister = hook;
  } else if (style) {
    hook = shadowMode ? function () {
      style.call(this, createInjectorShadow(this.$root.$options.shadowRoot));
    } : function (context) {
      style.call(this, createInjector(context));
    };
  }

  if (hook) {
    if (options.functional) {
      // register for functional component in vue file
      var originalRender = options.render;

      options.render = function renderWithStyleInjection(h, context) {
        hook.call(context);
        return originalRender(h, context);
      };
    } else {
      // inject component registration as beforeCreate hook
      var existing = options.beforeCreate;
      options.beforeCreate = existing ? [].concat(existing, hook) : [hook];
    }
  }

  return script;
}

var normalizeComponent_1 = normalizeComponent;

/* script */
const __vue_script__ = script;

/* template */
var __vue_render__ = function() {
  var _vm = this;
  var _h = _vm.$createElement;
  var _c = _vm._self._c || _h;
  return _c("div", [_vm._t("default")], 2)
};
var __vue_staticRenderFns__ = [];
__vue_render__._withStripped = true;

  /* style */
  const __vue_inject_styles__ = undefined;
  /* scoped */
  const __vue_scope_id__ = undefined;
  /* module identifier */
  const __vue_module_identifier__ = undefined;
  /* functional template */
  const __vue_is_functional_template__ = false;
  /* style inject */
  
  /* style inject SSR */
  

  
  var VueSortLayout = normalizeComponent_1(
    { render: __vue_render__, staticRenderFns: __vue_staticRenderFns__ },
    __vue_inject_styles__,
    __vue_script__,
    __vue_scope_id__,
    __vue_is_functional_template__,
    __vue_module_identifier__,
    undefined,
    undefined
  );

const install = (Vue) => {
  Vue.component('VueSortLayout', VueSortLayout);
};

var main = {
  install,
};
if (typeof window !== 'undefined' && window.Vue) {
  install(window.Vue);
}

export default main;
