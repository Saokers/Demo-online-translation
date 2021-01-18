// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import App from './App'
import router from './router'
import Axios from 'axios'
Vue.config.productionTip = false
// axios需要使用prototype将axios挂载到原型上 ，$后面是自己另起的名称，以后就可以使用该名称
Vue.prototype.$axios = Axios
/* eslint-disable no-new */
import iView from 'iview'; // 导入组件库

import 'iview/dist/styles/iview.css'; // 导入样式

Vue.use(iView);


new Vue({
  el: '#app',
  router,
  components: { App },
  template: '<App/>'
})
