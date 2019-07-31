import state from './state'
import * as type from './type.js'
import { MessageBox } from 'mint-ui';
import axios from 'axios'

const matutaions={
   

    [type.SET_XZADDRESS](state,data){
        state.xzAddess.push(data)
        // localStorage.setItem("xzAddess",JSON.stringify(state.xzAddess));
    },
    

    //数量加
     add(state,cart){
        cart.sum++
    },
    //数量减
    reduce(state,cart){
        cart.sum==1?  cart.sum=1: cart.sum--
    },

    settlement:(state,data)=>{
        state.carts=[];
        localStorage.setItem("carts",JSON.stringify(state.carts));
    },
}

export default matutaions