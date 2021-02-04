import Vue from "vue";
import App from "./App.vue";
import router from "./router";
import store from "./store";
import element from 'element-ui'
import 'element-ui/lib/theme-chalk/index.css'
import {myRequest} from '@/post/getData.js'

Vue.config.productionTip = false;
Vue.prototype.$http = myRequest
Vue.use(element)

new Vue({
  router,
  store,
  render: h => h(App)
}).$mount("#app");
