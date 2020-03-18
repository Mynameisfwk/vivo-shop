import Vue from 'vue'
import Router from 'vue-router'
import Home from '@/pages/home/home'
import xz_address from "@/pages/user/children/xz_address"

import view from '@/pages/view/view'
import goodDetail from '@/pages/Detail/goodDetail'
import order from '@/pages/order/order'
import orderView from '@/pages/order/orderView'
import OrderDetails from '@/pages/OrderDetails'
import choose from '@/pages/choose'
import news from '@/pages/News/news'
import newsView from '@/pages/News/newsView'
import parts from '@/pages/parts'
import change from '@/pages/Detail/Change'
import success from '../common/success'
import classify from "@/pages/Classify/classify"
import pay from "@/pages/pay/pay"
import address from "@/pages/user/children/address"

import add_address from "@/pages/user/children/add_address"
import shopDetail from "@/pages/shop/shopDetail"
import login from "@/pages/user/login"
import register from "@/pages/user/register"
import upaddress from "@/pages/user/children/upaddress"
import cart from '@/pages/user/children/cart'
import main from "@/pages/user/main"
import collection from "@/pages/user/children/collection"
Vue.use(Router)

export default new Router({
  routes: [
    { path: '/login', name: 'login', component: login },
    { path: '/view', name: 'view', component: view },
    { path: '/xz_address', name: 'xz_address', component: xz_address },
   
    { path: '/register', name: 'register', component: register },
    { 
      path: '/main', 
      name: 'main', 
      component: main,
      children:[
        {
          path: 'address',
          name:'address',
          component: address
        },
        {
          path: 'add_address',
          component:add_address
        },
        { 
          path: 'upaddress', 
          name:'/main/upaddress',
          component: upaddress 
        },
        { 
          path: 'cart', 
          name:'cart',
          component: cart 
        }
      ]
    },
    { path: '/collection', name: 'collection', component: collection },

    { path: '/', name: 'Home', component: Home },

    { path: '/Home', name: 'Home', component: Home },
    {
      path: '/goodDetail',
      name: 'goodDetail',
      component: goodDetail
    },
    {
      path: '/order',
      name: 'order',
      component: order,
    },
    { path: '/orderView', name: 'orderView', component: orderView },
    { path: '/choose', name: 'choose', component: choose },
    { path: '/newsView', name: 'newsView', component: newsView },

    { path: '/news', name: 'news', component: news },
    { path: '/parts', name: 'parts', component: parts },
    { path: '/change', name: 'change', component: change },
    { path: '/success', name: 'success', component: success },
    { path: '/classify', name: 'classify', component: classify },
    {
      path: '/pay',
      name: 'pay',
      component: pay
    },
   
    {
      path: '/shopDetail',
      name: 'shopDetail',
      component: shopDetail
    }
  ]
})
