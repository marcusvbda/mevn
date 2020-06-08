import Vue from 'vue'
import App from './App.vue'
import store from './vuex'
import router from './router'
require('../services/api')
process.env = require('../config')

Vue.config.productionTip = false
import ElementUI from 'element-ui'
Vue.use(ElementUI)

new Vue({
  el: '#app',
  router,
  store,
  render: (h) => h(App),
})
