import Vue from 'vue'
import Vuex from 'vuex'
import App from './App'
import router from './router'
import BootstrapVue from 'bootstrap-vue'
import 'bootstrap/dist/css/bootstrap.css'
import 'bootstrap-vue/dist/bootstrap-vue.css'
import { store } from './userAuthentication'

// import store from './store'
import Axios from 'axios'
Vue.use(BootstrapVue)
Vue.use(Vuex)
Vue.config.productionTip = false

Vue.prototype.$http = Axios
const token = localStorage.getItem('token')
if (token) {
  Vue.prototype.$http.defaults.headers.common['Authorization'] = token
}

/* eslint-disable no-new */
new Vue({
  store,
  el: '#app',
  router,
  template: '<App/>',
  components: { App }
})
