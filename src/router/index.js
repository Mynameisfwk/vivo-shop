import Vue from 'vue'
import Router from 'vue-router'
import Home from '@/components/Home'
import cart from '@/components/cart'
import my from '@/components/my'
import goodDetail from '@/components/goodDetail'
import order from '@/components/order'
import author from '@/components/author'
import choose from '@/components/choose'
import information from '@/components/information'
import news from '@/components/news'
import parts from '@/components/parts'
Vue.use(Router)

export default new Router({
  routes: [
    { path: '/',name: 'Home',component: Home },
    { path: '/Home',name: 'Home', component: Home},
    { path: '/cart',name: 'cart',component: cart },
    { path: '/my',name: 'my',component: my },
    { path: '/goodDetail', name: 'goodDetail',component: goodDetail },
    { path: '/order',name: 'order',component: order },
    { path: '/author', name: 'author',component: author },
    { path: '/choose' ,name:'choose' ,component:choose},
    { path: '/information' ,name:'information' ,component:information},
    { path: '/news' ,name:'news' ,component:news},
    { path: '/parts' ,name:'parts' ,component:parts}
  ]
})
