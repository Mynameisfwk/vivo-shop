import Vue from 'vue'
import App from './App'
import router from './router'
import Vuex from 'vuex'
import store from './vuex/index'
import VueLazyLoad from 'vue-lazyload'
import axios from 'axios';
Vue.prototype.$axios = axios;

Vue.use(VueLazyLoad,{
  loading:require("../static/img/qqq.png")
})

//引入UI组件
import MintUI from 'mint-ui'
import 'mint-ui/lib/style.css'
Vue.use(MintUI)


router.beforeEach((to,from,next) => { 
  if(to.meta.requireAuth) {
    if(!localStorage.getItem('user')) {
      next({path:'/login'})
    }
  }
  next()
})

/* eslint-disable no-new */
new Vue({
  el: '#app',
  router,
  store,
  template: '<App/>',
  components: { App }
})
