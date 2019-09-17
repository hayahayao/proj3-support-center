import Vue from 'vue'
import router from './router'
import state from './state'

import AppLayout from './components/AppLayout.vue';
import './global-components'

import VueFetch from './plugins/fetch'
import VueState from './plugins/state'

Vue.use(VueFetch, {
  baseUrl: 'http://localhost:3000/'
})

Vue.use(VueState, state)

new Vue({
  el: '#app',
  data: state,
  router,
  render: h => h(AppLayout),
})
