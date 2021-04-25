import Vue from 'vue';
import { BootstrapVue, BootstrapVueIcons, IconsPlugin  } from 'bootstrap-vue'
import DashboardPlugin from './plugins/dashboard-plugin';
import App from './App.vue';

// router setup
import router from './routes/router';

// plugin setup
Vue.use(DashboardPlugin);
Vue.use(BootstrapVue);
Vue.use(BootstrapVueIcons);
Vue.use(IconsPlugin);

new Vue({
  el: '#app',
  render: h => h(App),
  router
});
