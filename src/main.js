import Vue from 'vue'
import App from './App'
import router from './router'
import Vuex from 'vuex'
import store from './vuex/index'
import Navigation from 'vue-navigation'
import Vuelazyload from 'vue-lazyload'
import axios from 'axios';
Vue.prototype.$axios = axios;
 
Vue.use(Navigation, {router, store})

Vue.use(VueLazyLoad,{
  loading:require("../static/img/qqq.png")
})

//引入UI组件
import MintUI from 'mint-ui'
import 'mint-ui/lib/style.css'
Vue.use(MintUI)

router.beforeEach((to,from,next) => { 
  console.log(to)
  console.log(JSON.stringify(store.state.user))
  if(to.meta.requireAuth) {
    if(!store.state.user) {
      next({path:'/login'})
    }
  }

  next()
})

// //引入vue-resource
// import VueResource from 'vue-resource';
// Vue.use(VueResource)

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
