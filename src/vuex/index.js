import Vue from 'vue'
import Vuex from 'vuex'
import {
    ADD_ADDRESS,
    DEL_ADDRESS
} from './mutations-type'
import cart from './modules/cart'
import order from './modules/order'

Vue.use(Vuex)

const state = {
    address: localStorage.getItem('address') ? JSON.parse(localStorage.getItem('address')) : []  //地址
}

const mutations = {
    [ADD_ADDRESS](state,data) {
        state.address.push(data);
        localStorage.setItem(JSON.stringify('address',state.address))
    },

    [DEL_ADDRESS](state,index) {
        MessageBox({
            title: '提示',
            message: '是否删除'+ state.address[index].name +'?',
            showCancelButton: true
            }).then(res => {
                if(res == 'confirm') {
                state.address.push(data);
                localStorage.setItem(JSON.stringify('address',state.address))
                Toast({
                    message: '地址删除成功',
                    duration: 1500
                });
            }
        });
    }
}

export default new Vuex.Store({
    state,
    mutations,
    modules: {
        cart,
        order
    }
})

