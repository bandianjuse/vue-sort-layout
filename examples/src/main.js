import App from './App.vue';
import VueSortLayout from '../../lib/main';

Vue.use(VueSortLayout);
new Vue({
  render: h => h(App)
}).$mount('#app');
