import {
    ADD_ORDER,
    DEL_ORDER
} from '../mutations-type'

import { Toast,MessageBox,Indicator } from 'mint-ui'

const state = {
    orders: localStorage.getItem('orders') ? JSON.parse(localStorage.getItem('orders')) : []
}

const mutations = {
    // 订单支付
    [ADD_ORDER](state,data) {
        Indicator.open({
            text: '支付中...',
            spinnerType: 'fading-circle',
        })
        var time = setInterval(() => {
            state.orders.push(data)
            localStorage.setItem('orders',JSON.stringify(state.orders))
            Toast('订单支付成功！');
            clearInterval(time);
            Indicator.close()
        },1000)
    },
    // 删除订单
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