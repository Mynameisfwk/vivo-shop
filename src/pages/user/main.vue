<template>
  <div class="user">
    <v-header title="个人中心" :headerLeftStatus="headerLeftStatus"/>
    <div class="container">
      <div class="container-bj">
        <div class="bj-left">
          <img src="https://ss1.bdstatic.com/70cFvXSh_Q1YnxGkpoWK1HF6hhy/it/u=1040943398,1147003181&fm=26&gp=0.jpg">
        </div>
        <div class="bj-right">
          <span>{{user.name}}</span>
          <p>作者微信：fwk1203</p>
        </div>
      </div>

      <router-link class="container-order" to="/order" tag="div">
        <div class="container-order-1">
          <p class="left">我的订单</p>
          <p class="right">全部订单 ></p>
        </div>
        <div class="container-order-2">
          <p class v-for="list in container">
            <img :src="list.img">
            <span>{{list.name}}</span>
          </p>
        </div>
      </router-link>

      <div class="container-con">
        <router-link :to="{name:'collection'}" class="con">
          <div class="con-left">
            <i class="iconfont icon-collection"></i>
            <span>我的收藏</span>
          </div>
          <div class="con-rigth">
            <i class="iconfont icon-youjiantou"></i>
          </div>
        </router-link>

        <router-link :to="{name:'address'}" class="con">
          <div class="con-left">
            <i class="iconfont icon-gouwuche"></i>
            <span>我的收货地址</span>
          </div>
          <div class="con-rigth">
            <i class="iconfont icon-youjiantou"></i>
          </div>
        </router-link>

        <router-link :to="{name:'cart'}" class="con">
          <div class="con-left">
            <i class="iconfont icon-gouwuche"></i>
            <span>我的购物车</span>
          </div>
          <div class="con-rigth">
            <i class="iconfont icon-youjiantou"></i>
          </div>
        </router-link>
      </div>
    </div>
    
    <v-footer></v-footer>
  </div>
</template>
<script>
import header from '@/components/header/index'
import footer from '@/components/footer/index'
export default {
  data() {
    return {
      container: [
        {
          img: "/static/img/111.png",
          name: "待付款"
        },
        {
          img: "/static/img/222.png",
          name: "待收货"
        },
        {
          img: "/static/img/333.png",
          name: "待评价"
        },
        {
          img: "/static/img/444.png",
          name: "退货/退款"
        }
      ],
      user: JSON.parse(localStorage.getItem('user')),
      headerLeftStatus: false
    };
  },

  components: {
    "v-header": header,
    "v-footer": footer
  }
};
</script>


<style lang="less" scoped>
  .user {
    width: 100%;
    height: auto;
    .t {
      background-image: url('/static/img/t.png');
    }
    .container {
      width: 100%;
      height: 3rem;
      position: absolute;
      top: 1.45rem;
      .container-bj {
        width: 100%;
        height: 100%;
        background: url('/static/img/bj.png') no-repeat;
        background-size: 100% 100%;
        .bj-left{
          width: 26%;
          height: 100%;
          float: left;
          display: flex;
          justify-content: center;
          align-items: center;
          img{
            width: 65%;
            height: 55%;
          }
        }
        .bj-right {
          width: 60%;
          height: 100%;
          float: left;
          display: flex;
          justify-content: center;
          flex-direction: column;
          span{
            font-weight: bold;
          }
        }
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
          font-size: 0.35rem;
          color: #ffffff;
        }
      }
      .container-integral {
        width: 100%;
        height: 2rem;
        background: #ffffff;
        display: flex;
        justify-content: center;
        p {
          width: 33%;
          height: 100%;
          font-size: 0.36rem;
          line-height: 0.6rem;
          font-weight: 500;
          float: left;
          display: flex;
          flex-direction: column;
          text-align: center;
          justify-content: center;
        }
      }
      .container-con {
        background: #ffffff;
        a {
          width: 90%;
          height: 1.5rem;
          display: flex;
          justify-content: space-between;
          margin: auto;
          .con-left {
            width: 80%;
            height: 100%;
            display: flex;
            align-items: center;
            i {
              font-size: 0.5rem;
              margin-right: 0.2rem;
            }
            span {
              font-size: 0.4rem;
              padding-left: 0.1rem;
            }
          }
          .con-rigth {
            width: 10%;
            height: 100%;
            display: flex;
            justify-content: flex-end;
            align-items: center;
            i {
              font-size: 0.5rem;
            }
          }
        }
      }
      .container-order {
        width: 100%;
        height: 3.5rem;
        background: white;
        display: block;
        margin-bottom: 0.15rem;
        margin-top: 0.15rem;
        font-size: 0.35rem;
        .container-order-1 {
          width: 100%;
          height: 1.5rem;
          .left {
            float: left;
            display: block;
            line-height: 1.5rem;
            margin-left: 0.5rem;
            font-size: 0.4rem;
          }
          .right {
            float: right;
            line-height: 1.5rem;
            margin-right: 0.6rem;
            font-size: 0.4rem;
          }
        }
        .container-order-2 {
          width: 100%;
          height: 1.5rem;
          display: flex;
          justify-content: center;
          align-items: center;
          p {
            width: 25%;
            display: flex;
            flex-direction: column;
            margin-top: 0.3rem;
            img {
              width: 0.8rem;
              height: 0.8rem;
              margin: auto;
            }
            span {
              text-align: center;
              padding-top: 0.3rem;
            }
          }
        }
      }
    }
  }
</style>