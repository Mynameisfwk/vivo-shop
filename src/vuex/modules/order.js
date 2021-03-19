import {
    ADD_ORDER,
    DEL_ORDER
} from '../mutations-type'

import { Toast,MessageBox } from 'mint-ui'

const state = {
    orders: localStorage.getItem('orders') ? JSON.parse(localStorage.getItem('orders')) : []
}

const mutations = {
    [ADD_ORDER](state,data) {
        state.orders.push(data)
        localStorage.setItem('orders',JSON.stringify(state.orders))
        Toast('订单支付成功！');
    },

    [DEL_ORDER](state,index) {
        MessageBox({
            title: '提示',
            message: '是否删除'+ state.orders[index].name +'订单?',
            showCancelButton: true
            }).then(res => {
                if(res == 'confirm') {
                state.orders.splice(index,1)
                localStorage.setItem('orders',JSON.stringify(state.orders))
                Toast({
                    message: '订单删除成功',
                    duration: 1500
                });
            }
        });
    }
}

export default {
    namespaced: true, //开启命名
    state,
    mutations
}