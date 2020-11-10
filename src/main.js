import Vue from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'
import toast from 'components/common/toast'

import fastClick from 'fastclick'
import VueLazyLoad from 'vue-lazyload'
// Vue.config.productionTip = false;
Vue.prototype.$bus=new Vue();
Vue.use(toast);
Vue.use(VueLazyLoad,{
  loading:require('./assets/images/common/placeholder.png')
})
// 解决移动端延迟300毫秒
fastClick.attach(document.body)

new Vue({
  router,
  store,
  
  render: h => h(App),
}).$mount('#app');

