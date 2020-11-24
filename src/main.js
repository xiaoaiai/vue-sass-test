// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import Antd from 'ant-design-vue';
import Router from 'vue-router'
import 'ant-design-vue/dist/antd.css';
import App from './App'
import router from './router'
import './assets/css/global.scss'
Vue.use(Antd);

Vue.config.productionTip = false
const originalPush = Router.prototype.push

Router.prototype.push = function push(location) {
  return originalPush.call(this, location).catch(err => err)
}
/* eslint-disable no-new */
new Vue({
  el: '#app',
  router,
  components: { App },
  template: '<App/>'
})
