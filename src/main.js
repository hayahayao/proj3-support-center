import Vue from 'vue'
import router from './router'

import AppLayout from './components/AppLayout.vue';

Vue.config.productionTip = false

new Vue({
  el: '#app',
  render: h => h(AppLayout),
  router,
})
