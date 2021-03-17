import Vue from 'vue'
import Vuex from 'vuex'
import state from './state'
import mutations from './mutations'
import actions from './actions'

Vue.use(Vuex)

const store = new Vuex.Store({
    state: {
        carts: localStorage.getItem('catrs') ? localStorage.getItem(JSON.parse('catrs')) : [],
        user: []
    },
    mutations: {
        addCart(state,data) {
            state.carts.push(data);
            localStorage.setItem('carts',JSON.stringify(state.carts))
        },

        delClistart(state,index) {
            state.carts.splice(index,1);
            localStorage.setItem('carts',JSON.stringify(state.carts))
        }
    }
})


export default store

// export default new Vuex.Store({
//     state,
//     mutations,
//     actions
// })