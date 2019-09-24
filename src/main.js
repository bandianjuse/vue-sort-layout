import VueSortLayout from './VueSortLayout.vue';
import VueSortShared from './VueSortShared.vue';

const install = (Vue) => {
  Vue.component('VueSortLayout', VueSortLayout);
  Vue.component('VueSortShared', VueSortShared);
};

export default {
  install,
};
if (typeof window !== 'undefined' && window.Vue) {
  install(window.Vue);
}
