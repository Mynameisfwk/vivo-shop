import Vue from 'vue'
import Router from 'vue-router'
import index from '@/pages/index/index'
import detail from '@/pages/detail/index'
import news from '@/pages/news/index'
import newsDetail from '@/pages/news/detail'
import cart from '@/pages/user/cart/index'
import address from "@/pages/user/address/index"
import add_address from "@/pages/user/address/add"
import success from '@/pages/pay/success'
import parts from '@/pages/shops/parts'
import phone from '@/pages/shops/phone'

// 整理路由中 分割线～
// import xz_address from "@/pages/user/children/xz_address"
// import view from '@/pages/view/view'
import order from '@/pages/user/order/index'
import orderDetail from '@/pages/user/order/detail'
// import OrderDetails from '@/pages/order/orderView'
// import choose from '@/pages/choose'
// import news from '@/pages/News/news'
// import newsView from '@/pages/News/newsView'

import classify from "@/pages/Classify/classify"
import pay from "@/pages/pay/pay"


// import add_address from "@/pages/user/children/add_address"
// import shopDetail from "@/pages/shop/shopDetail"
import login from "@/pages/user/login"
import register from "@/pages/user/register"
// import upaddress from "@/pages/user/children/upaddress"
// import cart from '@/pages/user/children/cart'
import main from "@/pages/user/main"
// import collection from "@/pages/user/children/collection"
Vue.use(Router)

export default new Router({
  routes: [
    { 
      path: '/', 
      name: 'index', 
      component: index 
    },

    { 
      path: '/index', 
      name: 'index', 
      component: index 
    },

    { 
      path: '/detail', 
      name: 'detail', 
      component: detail 
    },

    { 
      path: '/news', 
      name: 'news', 
      component: news 
    },

    { 
      path: '/newsDetail', 
      name: 'newsDetail', 
      component: newsDetail
    },

    { 
      path: '/cart', 
      name: 'cart', 
      component: cart 
    },

    {
      path: '/address',
      name:'address',
      component: address
    },

    {
      path: '/add_address',
      name:'add_address',
      component: add_address
    },
    
    {
      path: '/success',
      name:'success',
      component: success
    },


    { path: '/login', name: 'login', component: login },
    // { path: '/view', name: 'view', component: view },
    // { path: '/xz_address', name: 'xz_address', component: xz_address },
   
    { path: '/register', name: 'register', component: register },
    { 
      path: '/main', 
      name: 'main', 
      component: main,
      meta: {
        requireAuth: true
      },
    },
    // { path: '/collection', name: 'collection', component: collection },

    {
      path: '/order',
      name: 'order',
      component: order,
    },
    { path: '/orderDetail', name: 'orderDetail', component: orderDetail },
    // { path: '/choose', name: 'choose', component: choose },
    // { path: '/newsView', name: 'newsView', component: newsView },

    // { path: '/news', name: 'news', component: news },
    { path: '/parts', name: 'parts', component: parts },
    { path: '/phone', name: 'phone', component: phone },
    // { path: '/change', name: 'change', component: change },
    { path: '/classify', name: 'classify', component: classify },
    {
      path: '/pay',
      name: 'pay',
      component: pay
    }
   
    // {
    //   path: '/shopDetail',
    //   name: 'shopDetail',
    //   component: shopDetail
    // }
  ]
})
