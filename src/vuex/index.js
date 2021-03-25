import Vue from 'vue'
import Vuex from 'vuex'
import {
    ADD_ADDRESS,
    DEL_ADDRESS,
    SET_DEFAULT
} from './mutations-type'
import cart from './modules/cart'
import order from './modules/order'
import { Toast, MessageBox } from 'mint-ui'
import router from '../router';
Vue.use(Vuex)

const state = {
    address: localStorage.getItem('address') ? JSON.parse(localStorage.getItem('address')) : []  //地址
}

const mutations = {
    // 添加地址
    [ADD_ADDRESS](state, data) {
        if(state.address.length == 0 || state.address.length < 0) {
            data['default'] = true
        } else {
            data['default'] = false
        }
        state.address.push(data);
        localStorage.setItem('address',JSON.stringify(state.address));
        Toast('添加成功');
        router.back();
    },
    // 删除地址
    [DEL_ADDRESS](state, index) {
        MessageBox({
            title: '提示',
            message: '是否删除' + state.address[index].name + '?',
            showCancelButton: true
        }).then(res => {
            if (res == 'confirm') {
                state.address.splice(index,1)
                localStorage.setItem('address',JSON.stringify(state.address));
                Toast({
                    message: '地址删除成功',
                    duration: 1500
                });
            }
        });
    },
    // 选择默认地址
    [SET_DEFAULT](state,index) {
        state.address.forEach((list,listIndex) => {
            if(index == listIndex) {
                list.default = true
            } else {
                list.default = false
            }
        });
        state.address.sort(status => { return status.default ?  - 1 : 1 })
        localStorage.setItem('address',JSON.stringify(state.address));
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

