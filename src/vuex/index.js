import Vue from 'vue'
import Vuex from 'vuex'
// import mutations from './mutations'
import cart from './modules/cart'

Vue.use(Vuex)

// const state = {
//     carts: localStorage.getItem('carts') ? JSON.parse(localStorage.getItem('carts')) : [] //购物车列表
// }

export default new Vuex.Store({
    // state,
    // mutations,
    modules: {
        cart
    }
})

