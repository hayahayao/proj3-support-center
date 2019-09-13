import Vue from 'vue'
import router from './router'

import AppLayout from './components/AppLayout.vue';
import './global-components'

Vue.config.productionTip = false

new Vue({
  el: '#app',
  render: h => h(AppLayout),
  router,
})
