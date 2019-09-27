import VueSortLayout from './VueSortLayout.vue';

const install = (Vue) => {
  Vue.component('VueSortLayout', VueSortLayout);
};

export default {
  install,
};
if (typeof window !== 'undefined' && window.Vue) {
  install(window.Vue);
}
