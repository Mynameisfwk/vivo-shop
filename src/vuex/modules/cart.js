import {
    ADD_CARTS,
    DEL_CARTS,
    ADDCART_VALUE,
    REDUCECART_VAVLUE,
    SELECT_CARTS_LIST,
} from '../mutations-type'

import { Toast,MessageBox } from 'mint-ui'

const state = {
    carts: localStorage.getItem('carts') ? JSON.parse(localStorage.getItem('carts')) : [], //购物车列表
}

const mutations = {
    [ADD_CARTS] (state,data) {
        var cartsId = state.carts.find(list => {
            return data.id == list.id
        });
        if (cartsId) {
            Toast({
                message:'购物车已经存在',
                duration: 1500
            });
            } else {
            Toast({
                message:'加入购物车成功！',
                duration: 1500
            });
            state.carts.push(data);
            localStorage.setItem('carts',JSON.stringify(state.carts));
        }
    },

    [DEL_CARTS] (state,index) {
        MessageBox({
            title: '提示',
            message: '是否删除'+ state.carts[index].name +'?',
            showCancelButton: true
            }).then(res => {
                if(res == 'confirm') {
                state.carts.splice(index,1);
                localStorage.setItem('carts',JSON.stringify(state.carts))
                Toast({
                    message: '删除成功',
                    duration: 1500
                });
            }
        });
    },

    [ADDCART_VALUE] (state,index) {
        state.carts[index].value ++ 
        localStorage.setItem('carts',JSON.stringify(state.carts))
    },

    [REDUCECART_VAVLUE] (state,index) {
        if(state.carts[index].value == 1) {
            MessageBox({
                title: '提示',
                message: '是否删除'+ state.carts[index].name +'?',
                showCancelButton: true
                }).then(res => {
                    if(res == 'confirm') {
                    state.carts.splice(index,1);
                    localStorage.setItem('carts',JSON.stringify(state.carts))
                    Toast({
                        message: '删除成功',
                        duration: 1500
                    });
                }
            });
        } else {
            state.carts[index].value --
            localStorage.setItem('carts',JSON.stringify(state.carts))
        }
    },

    [SELECT_CARTS_LIST] (state,index) {
        state.carts[index].select =! state.carts[index].select
    }
}

export default {
    namespaced: true, //开启命名
    state,
    mutations
}