import Vue from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'
import ElementUI from 'element-ui';
import GlobalFunctions from "@/tool/global-functions";
import Filters from "@/tool/filters";
import Directives from "@/tool/directives";
import 'element-ui/lib/theme-chalk/index.css';
// 全局样式库
import "@/assets/style/index.scss";

Vue.use(ElementUI);
Vue.use(GlobalFunctions);
Vue.use(Filters);
Vue.use(Directives);

Vue.config.productionTip = false

new Vue({
  router,
  store,
  render: h => h(App)
}).$mount('#app')
