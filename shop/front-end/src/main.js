import Vue from 'vue'
import App from './App.vue'
import ElementUI from 'element-ui'
import axios from 'axios'
// import vueAxios from 'vue-axios'
import 'element-ui/lib/theme-chalk/index.css'
Vue.use(ElementUI)
// Vue.use(vueAxios, axios)
Vue.prototype.$axios = axios
Vue.config.productionTip = false

new Vue({
  render: h => h(App),
}).$mount('#app')
