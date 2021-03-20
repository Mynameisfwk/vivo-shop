import Vue from 'vue'
import Vuex from 'vuex'
import {
    ADD_ADDRESS,
    DEL_ADDRESS
} from './mutations-type'
import cart from './modules/cart'
import order from './modules/order'
import { Toast, MessageBox } from 'mint-ui'
Vue.use(Vuex)

const state = {
    address: localStorage.getItem('address') ? JSON.parse(localStorage.getItem('address')) : []  //地址
}

const mutations = {
    // 添加地址
    [ADD_ADDRESS](state, data) {
        if (data.name == '') {
            Toast('请填写收货人姓名');
            return false;
        }

        if (!data.phone) {
            if (!data.name) {
                Toast('请填写收货人联系方式');
                return false;
            }
        }

        if (!data.zone) {
            Toast('请填写收货地址');
            return false;
        }

        if (!data.detail) {
            Toast('请填写详细收货地址');
            return false;
        }

        state.address.push({
            name: data.name,
            phone: data.phone,
            zone: data.zone,
            detail: data.detail
        });
        localStorage.setItem('address',JSON.stringify(state.address));
        Toast('添加成功');
    },
    // 删除地址
    [DEL_ADDRESS](state, index) {
        MessageBox({
            title: '提示',
            message: '是否删除' + state.address[index].name + '?',
            showCancelButton: true
        }).then(res => {
            if (res == 'confirm') {
                state.address.push(data);
                localStorage.setItem('address',JSON.stringify(state.address));
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

