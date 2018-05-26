// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import App from './App'
import router from './router'
import Vuex from 'vuex'
import store from './vuex/index'
import Navigation from 'vue-navigation'
import Vuelazyload from 'vue-lazyload'
 
Vue.use(Navigation, {router, store})

Vue.use(VueLazyLoad,{
  loading:require("../static/img/qqq.png")
})

//引入UI组件
import MintUI from 'mint-ui'
import 'mint-ui/lib/style.css'
Vue.use(MintUI)

//引入axios文件
import axios from 'axios';

//引入vue-resource
import VueResource from 'vue-resource';
Vue.use(VueResource)

import VueLazyLoad from 'vue-lazyload'

Vue.config.productionTip = false


/* eslint-disable no-new */
new Vue({
  el: '#app',
  router,
  store,
  template: '<App/>',
  components: { App }
})
