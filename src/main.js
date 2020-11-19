import Vue from 'vue'
import App from './App.vue'
import router from './router';
import store from './store';
import 'font-awesome/css/font-awesome.min.css'; 
import toast from 'common/toast';//自定义一个toast插件
import lazyLoad from 'vue-lazyload';//图片懒加载插件
import fastclick from 'fastclick'//解决移动端300ms延迟
Vue.config.productionTip = false
Vue.prototype.$bus=new Vue();
Vue.use(toast);
Vue.use(lazyLoad,{
  loading:require('./assets/img/common/Liou.png')
});

fastclick.attach(document.body)//将其应用到界面上
new Vue({
  router,
  store,
  render: h => h(App),
}).$mount('#app')
