import Vue from 'vue'
import Vuex, { Store } from 'Vuex'
import { MessageBox } from 'mint-ui';

Vue.use(Vuex);

const store=new Vuex.Store({
    state:{
        //数据保存本地防止刷新消失
        goodDetails:localStorage["goodDetails"]?JSON.parse(localStorage["goodDetails"]): [],
        carts:localStorage["carts"]?JSON.parse(localStorage["carts"]): [],
        orders:localStorage["orders"]?JSON.parse(localStorage["orders"]): [],
    },
    mutations:{
        //加入购物车
        addcarts:(state,data)=>{
            state.carts.push(data)
            localStorage.setItem("carts",JSON.stringify(state.carts));
        },
        //购物之后加入订单
        addorder:(state,data)=>{
            state.orders.push(data)
            localStorage.setItem("orders",JSON.stringify(state.orders));
        },
        //删除购物车商品
        shanchu:(state,index)=>{
            MessageBox.confirm('确定删除该商品么？').then(action=>{
                state.carts.splice(index,1)
                localStorage.setItem("carts",JSON.stringify(state.carts));
            })
           
        },

        //购物车结算
        settlement:(state,data)=>{
            state.carts=[];
            localStorage.setItem("carts",JSON.stringify(state.carts));
        },
        
        //订单删除
        odefault:(state,index)=>{
            MessageBox.confirm('确定删除该订单么？').then(action=>{
                state.orders.splice(index,1)
                localStorage.setItem("orders",JSON.stringify(state.orders));
            })
        },

        //数量加
        add(state,index){
            state.carts[index].value++
        },
        //数量减
        reduce(state,index){
            if(state.carts[index].value==1){
                state.carts[index].value=1
            }else{
                state.carts[index].value--
            }
        },
       
    },
    getters:{
        sum:state=>{
            var sum=0;
            state.carts.forEach((cart)=>{
                sum+=cart.price*cart.value
            })
            return sum
        },
    },
    
})
export default store