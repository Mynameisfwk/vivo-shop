import Vue from 'vue'
import Vuex from 'vuex'
import state from './state'
import mutations from './mutations'
import actions from './actions'

Vue.use(Vuex)

const store = new Vuex.Store({
    state: {
        carts: []
    },
    mutations: {
        addCart(state,data) {
            state.carts.push(data);
        }
    }
})


export default store

// export default new Vuex.Store({
//     state,
//     mutations,
//     actions
// })