import Vue from 'vue'
import Vuex from 'vuex'
import state from './state'
import mutations from './mutations'
import actions from './actions'
import { Toast,MessageBox } from 'mint-ui'

Vue.use(Vuex)

const store = new Vuex.Store({
    state: {
        carts: localStorage.getItem('carts') ? JSON.parse(localStorage.getItem('carts')) : []
    },
    mutations: {
        addCart(state,data) {
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

        addCartValue(state,index) {
            state.carts[index].value ++ 
            localStorage.setItem('carts',JSON.stringify(state.carts))
        },

        reduceCartValue(state,index) {
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

        delClistart(state,index) {
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

        singleCartsList(state,index) {
            state.carts[index].select =! state.carts[index].select
        }
    }
})


export default store

// export default new Vuex.Store({
//     state,
//     mutations,
//     actions
// })