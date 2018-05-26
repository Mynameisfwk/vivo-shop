<template>
    <div>
        <Pay-Header title="结算"></Pay-Header>
        <div to="address" class="pay-address" >
             <p class="address-box">
                <span class="name">收货人：myfwk</span>
                <span class="phone">15255460858</span>
            </p>
            <p class="address-details">
                收货地址：安徽省合肥市蜀山区金寨路立基大厦B座 中科大对面
            </p>
        </div>
        <div class="pay-shop" v-for="(list,index) in pay" :key="index">
            <div class="pay-shop-list">
                <p class="pay-shop-1">商品清单</p>
                <p class="pay-shop-2">
                    <img :src="list.homeImg">
                    <p class="pay-shop-2-box">
                        <span class="name">{{list.homeName}}<p>× {{$route.query.value}}</p></span>
                        <!-- <span>颜色：冰钻黑</span> -->
                        <span class="price">¥ {{list.homePrice}}</span>
                    </p>
                </p>
            </div>

            <div class="pay-shop-invoice">
                <p class="pay-invoice-1">发票信息</p>
                <div class="pay-invoice-2">
                    <div class="pay-invoice-2-2">
                        <div v-show="invoiceIndex===0">
                            <p>*请输入发票抬头:</p>
                             <input type="text" id="input" v-model="list.text" placeholder="请输入发票信息">
                            
                        </div>
                    </div>
                   
                </div>
            </div>

            <div class="pay-shop-fs">
                <div class="pay-fs-1">支付方式</div>
                <div class="pay-fs-2">
                    <!-- <div class="pay-fs-2-1" v-for="(item,index) in lists" :class="{active:index===ceshi}" @click="btn(index)" >
                        {{item.name}}
                    </div> -->
                    <div class="pay-fs-2-1" >
                        <div v-for="(list,index) in lists" :class="{active:index===listIndex}" @click="btn(list.name,index)">{{list.name}}</div>
                    </div>
                    <div class="pay-fs-2-2">
                       <div v-show="listIndex===0" class="pay-fs-2-2-1">支持支付宝支付、微信支付、银行卡支付、财付通等</div>
                       <div v-show="listIndex===1" class="pay-fs-2-2-2">花呗分期是花呗联合天猫淘宝推出的，面向互联网的赊购服务，通过支付宝轻松还款，0首付</div>
                       <div v-show="listIndex===2" class="pay-fs-2-2-3">货到再付款，支持现金交易</div>
                    </div>
                </div>
                
            </div>

            <div class="pay-shop-liuyan">
                <p class="pay-liuyan-1">订单留言</p>
                <div class="pay-liuyan-2">
                    <textarea v-model="list.ly" rows="5" placeholder="限300字（若有特殊需求，请联系商城在线客服)" maxlength="300"></textarea>
                    <p>商品总金额：¥{{$route.query.value*list.homePrice}}</p>
                    <p>运费：0.00</p>
                    <p>优惠：¥0.00</p>
                    <p>赠送积分：{{$route.query.value*list.homePrice}}</p>
                   
                </div>
            </div>
           
            <!-- <span>{{list.id}}</span>
            <span>{{list.homeName}}</span> -->

            <div class="pay-shop-footer">
                <p class="price">订单总金额：<span>¥{{$route.query.value*list.homePrice}}</span></p>
                <a class="order" @click="addOrder(list,index)">立即结算</a>
            </div>
        </div>
    </div>
</template>
<style lang="stylus" scoped>
.active
    border:1px solid #444
    color red
.pay-address
    width 100%
    height 4.3rem
    background url(https://shopstatic.vivo.com.cn/vivoshop/wap/dist/images/prod/bg-addr-box-line_d380baa.png) #fff left bottom repeat-x;
    background-size 1.6rem
    padding-top 1.45rem
    display block
    .address-box
        width 87%
        margin auto
        font-size .4rem
        padding-top .3rem
        padding-bottom .3rem
        .phone
            float right
    .address-details
        width 87%
        margin auto
        color #666
        font-size .38rem
.pay-shop
    width 100%
    margin-bottom: 1.5rem;
    .pay-shop-invoice
        width 100%
        height 4.3rem
        background #fff
        margin-bottom 10px
        margin-top 10px
        .pay-invoice-1
            width 100%
            height 1.5rem
            line-height 1.5rem
            border-bottom 1px solid #eaeaea
            font-size .4rem
            padding-left .7rem
        .pay-invoice-2
            width 100%
            height 4rem
            .pay-invoice-2-1
                width 100%
                height 30%
                div
                    display block
                    width 2.88rem
                    height 0.9rem
                    line-height 0.9rem
                    border 1px solid #d1d1d1
                    border-radius 3px
                    margin 0.1rem 0.3rem
                    float left
                    text-align center
            .pay-invoice-2-2
                width 92%
                height 70%
                margin auto
                p
                    margin-top 10px
                    margin-bottom 10px
                input 
                    width 100%
                    height 1.18rem
                    border 1px solid #d1d1d1
                    border-radius 3px
                    padding-left .2rem
    .pay-shop-list
        width 100%
        height 4.5rem
        margin-top .3rem
        background #fff
        .pay-shop-1
            width 100%
            height 1.5rem
            line-height 1.5rem
            border-bottom 1px solid #eaeaea
            font-size .4rem
            padding-left .7rem
        .pay-shop-2
            float left
            img 
                width 2.5rem
                margin .2rem
        .pay-shop-2-box
            width 70%
            display flex
            flex-direction column
            .name
                font-size: 0.4rem;
                margin-top: 0.3rem;
                height: 0.6rem;
                p
                    float right
                    margin-right  .5rem
            .price
                color red
                font-size .35rem
                font-weight 500
                height .6rem
    .pay-shop-liuyan
        width 100%
        height 6.5rem
        background #fff
        margin-top .3rem
        margin-bottom .3rem
        .pay-liuyan-1
            width 100%
            height 1.5rem
            line-height 1.5rem
            border-bottom 1px solid #eaeaea
            font-size .4rem
            padding-left .7rem
        .pay-liuyan-2
            width 90%
            margin auto
            textarea
                width 100%
                height 2rem
                border 1px solid #d1d1d1
                border-radius 3px
                padding: .15rem .2rem
                margin .3rem auto
                display block
            p
                color #888
                height .48rem
                font-size .34rem
    .pay-shop-fs
        width 100%
        height 5rem
        background #ffffff
        .pay-fs-1
            width 100%
            height 1.5rem
            line-height 1.5rem
            border-bottom 1px solid #eaeaea
            font-size .4rem
            padding-left .7rem
        .pay-fs-2
            width 100%
            height 3.5rem
            background #ffffff
            .pay-fs-2-1
                width 100%
                height 40%
                // background yellow
                display flex
                justify-content center
                align-items center
                div
                    display block
                    width 2.88rem
                    height .9rem
                    line-height .9rem
                    border 1px solid #d1d1d1
                    border-radius 3px
                    margin .1rem
                    float left
                    text-align center
            .pay-fs-2-2
                width 100%
                height 60%
                // background red
                div
                    width 90%
                    height 1.3rem
                    border-radius 3px
                    border 1px solid #d1d1d1
                    margin auto
                    padding .3rem
                .pay-fs-2-2-2
                    height 1.56rem

.pay-shop-footer
    width 100%
    height 1.5rem
    border-top 1px solid #eaeaea
    background white
    position fixed
    bottom 0
    
    .price
        float left
        line-height 1.5rem
        font-size .43rem
        color #666
        padding-left .3rem
        span 
            color red
    .order
        width 3.3rem
        height .9rem
        line-height .9rem
        margin-top .3rem
        margin-right .3rem
        border-radius 30px
        text-align center
        color #fff
        background #f81200
        float right
</style>


<script>
import { Toast } from "mint-ui";
import { mapGetters, mapMutations } from "vuex";
import PayHeader from "../../common/header"
import axios from "axios"
export default {
  name:"pay",
  data(){
      return{
          listIndex:0,
          invoiceIndex:0,
          pay:[],
          lists:[
              {
                  id:"1",
                  name:"在线支付"
              },
              {
                  id:"2",
                  name:"花呗分期"
              },
              {
                  id:"3",
                  name:"货到付款"
              }
          ],
          text:"",
          ly:"",
      }
  },
  components:{
      PayHeader
  },
//    computed: {
//         address() {
//         return this.$store.state.address;
//         },
//         ...mapGetters(
//             ["this.$store.state.address"],
//         )
//     },
  methods: {
      btn(id,index){
          this.listIndex=index
      },
      invoiceClick(index){
          this.invoiceIndex=index
      },
      addOrder(id,index){
          if(id.text==undefined){
               Toast({
                message: "请输入发票抬头",
                duration: 950
            });
          }else{
            var data={
                id:id.id,
                name:id.homeName,
                price:id.homePrice,
                text:id.text,
                ly:id.ly,
                img:id.homeImg,
                listname:this.lists[index].name,
                value:this.$route.query.value
               
            };
                this.$store.commit("SET_ORDERS", data);
                var _this=this
                 var time=setInterval(function(){
                   _this.$router.push({
                        path:"success"
                    })
                    clearInterval(time);
                },1000)
                
               
            }
        }
  },
  created(){
      var _this=this
      var id = this.$route.query.id;
      var value = this.$route.query.value;
      axios.get("/static/ceshi.json").then(function(res){
        
        var list=res.data.data.list
         for(var i=0;i<list.length;i++){
             if(list[i].id==id){
                 _this.pay.push(list[i])
             }
         }
      })
      axios.get("/static/ceshi.json").then(function(res){
        var data=res.data.data.home
         for(var i=0;i<data.length;i++){
             if(data[i].id==id){
                 _this.pay.push(data[i])
             }
         }
      })
    
  }
}
</script>


