import {
    ADD_CARTS,
    DEL_CARTS,
    ADDCART_VALUE,
    REDUCECART_VAVLUE,
    SELECT_CARTS_LIST,
    ADD_COLLECTION,
    DEL_COLLECTION
} from '../mutations-type'

import router from '../../router';
import { Toast,MessageBox } from 'mint-ui'

const state = {
    carts: localStorage.getItem('carts') ? JSON.parse(localStorage.getItem('carts')) : [], //购物车列表
    collections: localStorage.getItem('collections') ? JSON.parse(localStorage.getItem('collections')) : [], //收藏列表
}

const mutations = {
    // 加入购物车
    [ADD_CARTS] (state,data) {
        var cartsId = state.carts.find(list => {
            return data.id == list.id
        });
        if(!localStorage.getItem('user')) {
            MessageBox({
                title: '检测到你还未授权登陆',
                message: '是否前去登陆',
                showCancelButton: true
                }).then(res => {
                if(res == 'confirm') {
                    router.push('/login')
                }
            });
            return false;
        }
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
            data['select'] = false
            state.carts.push(data);
            localStorage.setItem('carts',JSON.stringify(state.carts));
        }
    },
    // 移出购物车
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
    // 商品数量操作
    [ADDCART_VALUE] (state,index) {
        state.carts[index].value ++ 
        localStorage.setItem('carts',JSON.stringify(state.carts))
    },
    // 商品数量操作
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
    // 购物车单选
    [SELECT_CARTS_LIST] (state,index) {
        state.carts[index].select =! state.carts[index].select
    },
    //商品收藏
    [ADD_COLLECTION] (state,data) {
        var collectionsId = state.collections.find(list => {
            return data.id == list.id
        });
        if(collectionsId) {
            Toast('已经收藏过了！')
            return false
        }
        state.collections.push(data)
        localStorage.setItem('collections',JSON.stringify(state.collections));
        Toast('收藏成功')
    },
    // 移出收藏夹
    [DEL_COLLECTION] (state,index) {
        MessageBox({
            title: '提示',
            message: '是否取消'+ state.collections[index].name +'的收藏?',
            showCancelButton: true
            }).then(res => {
                if(res == 'confirm') {
                state.collections.splice(index,1);
                localStorage.setItem('collections',JSON.stringify(state.collections))
                Toast({
                    message: '取消成功',
                    duration: 1500
                });
            }
        });
    },
}

export default {
    namespaced: true, //开启命名
    state,
    mutations
}