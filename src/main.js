// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'

import ElementUI from 'element-ui'
import HttpServer from './plugins/http.js'
import Common from './plugins/common'

import 'element-ui/lib/theme-chalk/index.css'
import './assets/css/reset.css'

import App from './App'
import router from './router'

Vue.config.productionTip = false

Vue.use(ElementUI)
Vue.use(HttpServer)
Vue.use(Common)

if (module.hot)
  module.hot.accept()

/* eslint-disable no-new */
new Vue({
  el: '#app',
  router,
  components: {App},
  template: '<App/>'
})
