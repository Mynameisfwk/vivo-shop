<template>
  <div class="order">
      <div class="orderHeader">
            <router-link to="my">
                <i class="iconfont icon-552cc14536532"></i>
            </router-link>
            我的订单
        </div>
        <div class="orderimg" v-if="!orders.length">
            <img src="/static/img/dingdan.png" alt="订单">
            <p>您暂无订单</p>
        </div>
        <div class="orderMain">
            <ul>
                <li v-for="(order,index) in orders" class="orders">
                    <div class="orderBox">
                            <div class="ordeId">
                                <span style="float: left;color:#666">
                                    <i class="iconfont icon-qijiandian"></i>
                                    vivo官方旗舰店
                                </span>
                                <span style="float: right;margin-right: 0.2rem;color: #00acff;font-weight: 400;">交易成功</span>
                            </div>
                            <div class="orderOne">
                                <div class="orderImage">
                                    <img v-bind:src="order.image" alt="手机图片">
                                </div>
                                <div class="_orderbox">
                                    <div class="orderName"><span>{{order.name}}</span></div>
                                    <div class="orderColor"><span>颜色:{{order.color}}</span></div>
                                    <div class="orderPrice"><span>￥{{order.price}}</span></div>
                                </div>
                                <p >×{{order.value}}</p>
                            </div>

                            <div class="orderTwo">
                                <div class="_Order" @click="odefault(index)">
                                    <a>删除订单</a>
                                </div>
                                <div class="_Total">
                                    共<span>{{order.value}}</span>件商品 总计:<span>￥{{order.value*order.price}}</span>
                                </div>
                            </div>
                    </div>
                </li>
            </ul>
        </div>
  </div>
</template>

<script>
import { mapState ,mapMutations ,mapGetters,} from 'vuex';
export default {
  name:"oerder",
  data(){
      return{

      }
  },
  computed:{
       orders(){
            return this.$store.state.orders    
        },
  },
   methods:{
        ...mapMutations([
            "odefault"
        ]),
   }

}
</script>


<style>
.order{
    position: absolute;
    width: 100%;
    height: 100%;
    z-index: 999;
    background: #F4F4F4;
}
.orderimg{
    width: 3rem;
    height: 3rem;
    margin: 5rem auto;
}
.orderImage{
    padding: .3rem;
}
.orderimg img{
    width: 2.5rem;
}
.orderimg p{
    margin-top: 0.3rem;
    text-align: center;
    color: #ccc;
    font-size: 0.42rem
}
.orderHeader{
    position: fixed;
    top: 0;
    width: 100%;
    height: 1.3rem;
    line-height: 1.3rem;
    background: white;
    padding-left: 0.3rem;
    box-shadow: 0 0 10px #cecece;
    z-index: 1;
    font-size: 0.41rem; 
}
.orderHeader i{
    display: block;
    float: left;
    height: 50px;
    font-size: 0.71rem;
    color: black;
    width: 0.9rem;
}
.orderMain {
   margin-top: 1.34rem;
}
.orderOne{
    height: 3.4rem;
}
.orderOne img{
    width: 2.5rem;
    float: left;
}
.orders{
    margin-top: 0.2rem;
}
.orderName{
    width: 96%;
    /* margin-top: 0.6rem; */
}
.orderPrice span{
    color: red;
}
.orderValue span{
    position: relative;
    top: -2rem;
    float: right;
    color: #888888;
    margin-right: 0.3rem;
}
.orderBox{
    margin-top: 0.35rem;
    height: 6.1rem;
}
.orderOne{
    width: 100%;
    height: 3.1rem;
    background: white;
    list-style: none;
}
.orderTwo{
    width: 100%;
    height: 1.7rem;
    background: white;
    border-top: 1px solid #cccccc;
}
.orderTwo{
    float: right;
}
.orderTwo span{
    color: red;
}
.ordeId{
    height: 1.2rem;
    line-height: 1.2rem;
    background: white;
    border-bottom: 1px solid #cccccc;
    padding-left: 10px;
}
._Order{
    float: right;
    padding-right: 0.3rem;
    margin-top: 0.8rem;
    color: #888;
}
._Total{
    float: right;
    margin-top: 13px;
}
.orderColor span{
    font-size: 0.3rem;
    padding-left: 0.1rem;
    color: #888;
}
.orderPrice{
    width: 100px;
    float: left;
    color: red;
    font-size: 0.34rem;
    margin-top: 0.13rem;
}
._orderbox{
    width: 58%;
    float: left;
}
.orderOne>p{
    color: #888;
}
    
</style>

