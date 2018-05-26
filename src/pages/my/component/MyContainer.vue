<template>
  <div class="container">
      <div class="container-bj">
          <img src="/static/img/tou.jpg">
          <span>Myfwk</span>
          <p>不要被人言左右，要相信自己的判断</p>
      </div>

      <div class="container-integral">
          <p>
              <span>0</span>
              <span>优惠券</span>
          </p>
          <p>
              <span>0</span>
              <span>换鼓励金</span>
          </p>
          <p>
              <span>{{jifeng}}</span>
              <span>积分</span>
          </p>
      </div>

     <router-link class="container-order" to="/order" tag="div">
         <div class="container-order-1">
             <p class="left">我的订单</p>
             <p class="right">全部订单 ></p>
         </div>
         <div class="container-order-2">
             <p class="" v-for="list in container">
                 <img :src="list.img">
                 <span>{{list.name}}</span>
             </p>
         </div>
     </router-link>
    
      <div class="container-con" id="transition">
          <router-link to="/MyCollection" class="con">
                 <div class="con-left">
                  <i class="iconfont icon-collection"></i>
                  <span>我的收藏</span>
              </div>
              <div class="con-rigth">
                  <i class="iconfont icon-youjiantou"></i>
              </div>
          </router-link>

            <router-link to="/address" class="con" id="transition">
                 <div class="con-left">
                  <i class="iconfont icon-gouwuche"></i>
                  <span>我的收货地址</span>
              </div>
              <div class="con-rigth">
                  <i class="iconfont icon-youjiantou"></i>
              </div>
          </router-link>

           <router-link to="/cart" class="con" id="transition">
                 <div class="con-left">
                  <i class="iconfont icon-gouwuche"></i>
                  <span>我的购物车</span>
              </div>
              <div class="con-rigth">
                  <i class="iconfont icon-youjiantou"></i>
              </div>
          </router-link>

          <router-link to="/order" class="con">
                 <div class="con-left">
                  <i class="iconfont icon-share_icon"></i>
                  <span>扫码分享</span>
              </div>
              <div class="con-rigth">
                  <i class="iconfont icon-youjiantou"></i>
              </div>
          </router-link>
          <a target="_blank" href="http://www.myfwk.cn" class="con">
                 <div class="con-left">
                  <i class="iconfont icon-bangzhuguanyuwomen"></i>
                  <span>关于我</span>
              </div>
              <div class="con-rigth">
                  <i class="iconfont icon-youjiantou"></i>
              </div>
          </a>
      </div>
  </div>
</template>

<script>
import { mapState, mapMutations, mapGetters } from "vuex";
export default {
  name:"Mycontainer",
  data(){
      return{
          container:[
              {
                  img:"/static/img/111.png",
                  name:"待付款"
              },
               {
                  img:"/static/img/222.png",
                  name:"待收货"
              },
               {
                  img:"/static/img/333.png",
                  name:"待评价"
              }, {
                  img:"/static/img/444.png",
                  name:"退货/退款"
              },
          ]
      }
  },
    computed:{
      ...mapGetters(["this.$store.state.orders"]),
       jifeng(){
          var jifeng=0
          this.$store.state.orders.forEach(list => {
            jifeng += parseInt(list.price)
        });
         return jifeng;
      }
  },
}
</script>


<style lang="stylus" scoped>
.container-order{
    width 100%
    height 3.5rem
    background white
    display block
    margin-bottom .15rem
    margin-top .15rem
    .container-order-1{
        width 100%
        height 1.5rem
        .left{
            float: left;
            display: block;
            line-height: 1.5rem;
            margin-left: .5rem;
            font-size: 0.4rem;
        }
        .right {
            float: right;
            line-height: 1.5rem;
            margin-right: .6rem;
            font-size: 0.4rem;
        }
    }
    .container-order-2{
        width 100%
        height 1.5rem
        display flex
        justify-content center
        align-items center
       
        p{
            width 25%
            display flex
            flex-direction column
            margin-top .3rem
           
            img{
                width .8rem
                height .8rem
                margin auto
            }
            span{
                text-align center
                padding-top .3rem
            }
        }
    }
}
.t{
    background-image url('/static/img/t.png');
}

.container {
    width: 100%;
    height: 5rem;
    position: absolute;
    top: 1.45rem;
    .container-bj {
        width: 100%;
        height: 100%;
        background: url('/static/img/bj.png') no-repeat;
        background-size: 100% 100%;
        display: flex;
        justify-content: center;
        align-items: center;
        flex-direction: column;

        img {
            width: 2.3rem;
            height: 2.3rem;
            border-radius: 50%;
        }

        span {
            color: #ffffff;
            font-size: 0.5rem;
        }

        p {
            color: #ffffff;
        }
    }
    .container-integral{
        width 100%
        height 2rem
        background #ffffff
        display: flex;
        justify-content: center
        p{
            width 33%
            height 100%
            font-size .36rem
            line-height .6rem
            font-weight 500
            float left
            display flex
            flex-direction column
            text-align center
            justify-content: center;
        }
    }

    .container-con {
        margin-bottom 1.45rem
        .con {
            width: 100%;
            height: 1.41rem;
            background: #ffffff;
            border-bottom: 1px solid #f0f0f0;
            display: block;

            .con-left {
                float: left;
                line-height: 1.3rem;
                padding-left: 0.47rem;

                i {
                    font-size: 0.5rem;
                }

                span {
                    font-size: 0.37rem;
                    padding-left: 0.1rem;
                }
            }

            .con-rigth {
                float: right;
                line-height: 1.3rem;
                padding-right: 0.4rem;
            }
        }
    }
}
</style>