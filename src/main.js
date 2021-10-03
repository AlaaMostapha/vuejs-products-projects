import Vue from 'vue';
import App from './App.vue';
import router from './router';
import { BootstrapVue, IconsPlugin } from 'bootstrap-vue';
import './styles/base.scss';
Vue.use(BootstrapVue)
Vue.use(IconsPlugin)

Vue.config.productionTip = false
import store from "./store"

new Vue({
  router,
  store,
  render: h => h(App)
}).$mount('#app')