<template>
  <div class="home">
    <div class="header">
      <div class="left" @click="fanhui">
        <i class="iconfont icon-zuojiantou"></i>
      </div>
      <div class="in">商品详情</div>
      <div class="rigth"></div>
    </div>

    <div v-for="(list,index) in item" :key="index">
      <div class="goodDetaiSwipe">
      <mt-swipe :auto="4000">
        <!-- <mt-swipe-item v-for="list in goodDetail.homeSwipe"> 
                  <img :src="list.swipe" alt="图片">
        </mt-swipe-item>-->
        <mt-swipe-item>
           <img :src="list.fm_img">
        
        </mt-swipe-item>
       <mt-swipe-item>
           <img
            src="https://shopstatic.vivo.com.cn/vivoshop/commodity/84/10000784_1556190811841_750x750.png"
            alt="图片"
          >
       </mt-swipe-item>
      </mt-swipe>
    </div>
      <div>
        <div class="goodDetailMain">
          <div class="goodDetailName">{{list.name}}</div>
          <div style="text-align: justify;font-size: 0.348rem;">
            <span style="margin-left:-.2rem;color:#FF4B3D;">【花呗免息，0首付0利率轻松购机】</span>
            X9s Plus A 5.85英寸大屏，双引擎闪充，4015mAh大电池，持久续航（注：面部识别需升级到最新系统使用
          </div>
          <!-- <div class="goodDetailColor"></div> -->
          <div class="goodDetailPaid">￥{{list.price}}</div>
        </div>
      </div>

      <div>
        <div class="category" style="background:white" @click="show=!show">
          <div class="category-con">
            <i class="iconfont icon-icon--"></i>
            <p>支持花呗分期</p>
          </div>
          <div class="category-con">
            <i class="iconfont icon-icon--"></i>
            <p>支持以旧换新</p>
          </div>

          <div class="category-rigth">
            <i class="iconfont icon-youjiantou"></i>
          </div>
        </div>
        <transition name="fade">
          <div class="boxbox" v-show="show" @click="close">
            <div class="layer" v-show="show">
              <div class="layer-box">
                <div class="layer-box-left"></div>
                <div class="layer-box-in">
                  <h3>服务说明</h3>
                </div>
                <div class="layer-box-rigt" @click.stop="show=!show">
                  <i class="iconfont icon-cancel-1-copy"></i>
                </div>
              </div>
              <div class="layer-box-2">
                <div class="layer-box-2-1">
                  <i class="iconfont icon-icon--"></i>
                  <h3>支持花呗分期</h3>
                  <p>商品支持花呗分期</p>
                </div>
                <div class="layer-box-2-1 top">
                  <i class="iconfont icon-icon--"></i>
                  <h3>可以使用换新鼓励金</h3>
                  <p>
                    换新鼓励金通过参加以旧换新回收旧手机以后获得，旧手机享受额外补贴。
                    <router-link to="/change">现在换机</router-link>
                  </p>
                </div>
              </div>
              <div class="layer-box-button">
                <div>关闭</div>
              </div>
            </div>
          </div>
        </transition>
      </div>

      <div class="goodDetailBox">
        <mt-navbar v-model="selected">
          <mt-tab-item id="tab-container1">图文详情</mt-tab-item>
          <mt-tab-item id="tab-container2">参数</mt-tab-item>
        </mt-navbar>

        <mt-tab-container v-model="selected" swipeable>
          <mt-tab-container-item id="tab-container1">
            <div class="goodDetailconten" v-html="list.content"></div>
          </mt-tab-container-item>

          <mt-tab-container-item id="tab-container2">
            <div class="peizhi">1</div>
          </mt-tab-container-item>
        </mt-tab-container>
      </div>
      <div class="goodDetailFooter">
        <p class="xj_tg" v-if="list.is_sj==0">很抱歉，该商品已被下架！</p>
        <div class="left">
          <div class="cart">
            <div class="cartlength">{{cartlength}}</div>
            <img src="https://shopstatic.vivo.com.cn/vivoshop/wap/dist/images/detail/icon-shopcart@2x_201db07.png">
            <span>购物车</span>
          </div>
          <div class="collection">
            <div
              class="collection-box"
              @click="addCollection(goodDetail)"
              v-show="!$store.state.ces"
            >
              <i class="iconfont icon-collection"></i>
              <span>收藏</span>
            </div>
            <div
              class="collection-box"
              @click="addCollection(goodDetail)"
              v-show="$store.state.ces"
            >
              <i class="iconfont icon-shoucangxuanzhong1" style="color:red"></i>
              <span style="color:red">取消</span>
            </div>
          </div>
          <div class="shop">
            <img src="https://shopstatic.vivo.com.cn/vivoshop/wap/dist/images/detail/icon-home@2x_48f5d94.png">
            <span>店铺</span>
          </div>
        </div>

    
          <div class="rigth" v-if="list.is_sj==1">
            <div class="add">
              <a href="javascript:void(0);" @click="add(list)">加入购物车</a>
            </div>
            <div class="purchase">
              <!-- <a href="javascript:void(0);" @click="pay(goodDetail.id,goodDetail.homeValue)">提交订单</a> -->
                <a href="javascript:void(0);" @click="pay(list.id)">立即购买</a>
            </div>
          </div>
          <div class="right_xj" v-else>商品已下架</div>
        </div>

      </div>
    </div>
       
    </div>
  </div>
</template>


<script>
import {
  Toast,
  MessageBox,
  Navbar,
  TabItem,
  TabContainer,
  TabContainerItem
} from "mint-ui";
import axios from "axios";
import { setCookie, getCookie } from "../../assets/js/cookie.js";
import { home_data,home_banner, shop_data,add_cart} from "../../assets/js/api.js";
export default {
  name: "goodDetail",
  data() {
    return {
      item: [],
      show: false,
      goodDetailHeader: "商品详情",
      selected: "tab-container1"
    };
  },
  created() {
    var id = this.$route.query.id;
    axios.get(home_data).then(res => {
      for (var i = 0; i < res.data.data.length; i++) {
        if (res.data.data[i].id == id) {
          this.item.push(res.data.data[i]);
        }
      }
    });
  },
  methods: {
    add(list){
        let cookier_token = getCookie("token");
      axios({
        url: add_cart,
        method: "post",
        params: {
            token:cookier_token,
            id:list.id,
            title:list.name,
            price:list.price,
            shop_img:list.fm_img,
            sum:1
        }
      })
        .then(res => {
             Toast({
              message: res.data.msg,
              duration: 950
            });
            // this.$router.push({
            //     path:'/main/address'
            // })
        })
        .catch(err => {
          //异常操作
        });
    },
    close() {
      this.show = false;
    },
    fanhui() {
      this.$router.go(-1);
    },
    pay(id){
      this.$router.push({
         path: 'pay',
         query:{
           id:id
         }
      })
    }
  }
};
</script>

<style lang="stylus" >
.category {
  width: 100%;
  height: 1.5rem;
  border-bottom: 10px solid #f4f4f4;
  background: width;

  .category-con {
    float: left;
    margin-left: 10px;
    line-height: 1.28rem;
    font-size: 0.34rem;

    i {
      float: left;
      color: #0098df;
    }

    p {
      float: left;
      color: #777;
      padding-left: 0.1rem;
    }
  }

  .category-rigth {
    float: right;
    margin-right: 10px;
    line-height: 1.28rem;
  }
}

.boxbox {
  width: 100%;
  height: 100%;
  position: fixed;
  background: rgba(0, 0, 0, 0.4);
  top: 0;
  bottom: 0;
  z-index: 1;
}

.layer {
  width: 100%;
  height: 9rem;
  background: white;
  position: fixed;
  bottom: 0;
  z-index: 2;

  .layer-box {
    width: 100%;
    height: 1.5rem;
    line-height: 1.5rem;

    .layer-box-left {
      width: 10%;
      height: 100%;
      float: left;
    }

    .layer-box-in {
      width: 80%;
      height: 100%;
      font-size: 0.4rem;
      float: left;
      text-align: center;
    }

    .layer-box-right {
      width: 10%;
      height: 100%;
      float: left;

      i {
        font-size: 0.4rem;
      }
    }
  }

  .layer-box-2 {
    width: 85%;
    margin: 20px auto;

    .layer-box-2-1 {
      width: 100%;

      h3 {
        font-size: 0.4rem;
        padding-left: 0.1rem;
        display: inline-block;
      }

      p {
        font-size: 0.35rem;
        height: 0.7rem;
        line-height: 0.7rem;
        color: #666;
        margin-top: 0.15rem;
        padding-left: 0.3rem;

        a {
          color: #00acff;
        }
      }

      i {
        float: left;
        color: #0098df;
        font-size: 0.5rem;
      }
    }

    .top {
      margin-top: 0.6rem;
    }
  }

  .layer-box-button {
    width: 100%;
    height: 1.5rem;
    border-top: 1px solid #eee;
    position: absolute;
    bottom: 0;

    div {
      width: 95%;
      height: 0.89rem;
      line-height: 0.89rem;
      display: block;
      text-align: center;
      margin: 0.25rem auto;
      background: #00acff;
      border-radius: 30px;
      color: white;
      font-size: 0.35rem;
    }
  }
}

.fade-enter-active, .fade-leave-active {
  transition: all 0.3s ease;
}

.fade-enter, .fade-leave-active {
  transform: translateY(100%);
}

.header {
  width: 100%;
  height: 1.5rem;
  z-index: 1;
  position: fixed;
  background: white;
}

.in {
  width: 80%;
  height: 100%;
  line-height: 1.5rem;
  float: left;
  text-align: center;
  font-size: 0.45rem;
}

.left {
  width: 10%;
  height: 100%;
  float: left;
}

.left i {
  font-size: 0.6rem;
  line-height: 1.45rem;
  text-align: center;
  display: block;
}

.rigth {
  width: 10%;
  height: 100%;
  float: left;
}

.goodDetaiSwipe {
  height: 8rem;
  /* margin-top: 3px; */
  background: white;
  position: relative;
  top: 1.55rem;
}

.goodDetaiSwipe img {
  width: 70%;
  height: 7rem;
  display: block;
  /* margin-top: 60px; */
  margin: auto;
}

.goodDetailMain {
  /* height: 1.8rem; */
  background: white;
  border-bottom: 1px solid #cecece;
  /* border-top: 1px solid #cecece; */
  padding: 0.4rem;
  margin-top: 1.4rem;
}

.goodDetailBox {
  height: 1px;
}

.goodDetailName {
  color: black;
  font-weight: 400;
  font-size: 0.5rem;
  line-height: 1rem;
}

.goodDetailPaid {
  color: #f81200;
  font-size: 0.7rem;
  margin-top: 0.1rem;
}

.Home {
  border-bottom: 10px;
  width: 100%;
  height: 100%;
  position: relative;
  background: white;
}

.goodDetailconten img {
  width: 100%;
}

.mint-navbar {
  margin-bottom: 0.2rem;
}

.goodDetailFooter {
  position: fixed;
  width: 100%;
  bottom: 0rem;
  height: 1.2rem;
  background: #F6F4F7;
  border-top: 1px solid #efefef;

  .left {
    width: 45%;
    float: left;
    position: relative;
    font-size: 0.35rem;

    .cart {
      width: 33%;
      display: flex;
      justify-content: center;
      flex-direction: column;
      float: right;
      position: relative;

      img {
        width: 0.76rem;
        height: 0.7rem;
        display: block;
        margin: auto;
      }

      span {
        text-align: center;
        color: #767676;
      }
    }

    .shop {
      width: 33%;
      display: flex;
      justify-content: center;
      flex-direction: column;
      float: right;

      img {
        width: 0.76rem;
        height: 0.7rem;
        display: block;
        margin: auto;
      }

      span {
        display: block;
        text-align: center;
        color: #767676;
      }
    }

    .collection {
      width: 33%;
      height: 100%;
      display: flex;
      justify-content: center;
      flex-direction: column;
      float: right;
      border-left: 1px solid #ccc;
      border-right: 1px solid #ccc;
      color: #767676;

      .collection-box {
        text-align: center;
      }

      i {
        font-size: 0.6rem;
        display: block;
        text-align: center;
      }

      span {
        text-align: center;
      }
    }
  }

  .rigth {
    width: 55%;
    float: right;

    .add {
      a {
        display: block;
        width: 50%;
        height: 1.2rem;
        line-height: 1.2rem;
        text-align: center;
        background: #FF9800;
        color: white;
        font-size: 0.35rem;
        float: left;
      }
    }

    .purchase {
      a {
        float: left;
        display: block;
        width: 50%;
        height: 1.2rem;
        line-height: 1.2rem;
        text-align: center;
        color: white;
        font-size: 0.35rem;
        background: #E3211E;
      }
    }
  }
  .right_xj{
    width: 55%;
    height: 1.2rem;
    float: right;
    background-image: -webkit-gradient(linear, left top, right top, from(#e51422), to(#ff0c53));
    background-image: linear-gradient(90deg, #e51422, #ff0c53);
    color: #fff;
    text-align: center;
    font-size: 0.43rem;
    line-height: 1.15rem;
  }
}

.gooDetailNumber {
  display: none;
}

.add a {
}

.purchase a {
}

.goodDetailImg {
  margin-top: 4px;
  margin-bottom: 6px;
}

.goodDetailImg img {
  width: 100%;
  height: auto;
  display: block;
}

table td {
  font-size: 0.31rem;
  text-align: center;
  color: #000;
}

.goodDetailValue {
  height: 2rem;
  border-bottom: 1px solid #cecece;
  padding: 0.4rem;
}

.goodDetailAdd {
  width: 1rem;
  height: 0.8rem;
  line-height: 0.8rem;
  display: block;
  background: white;
  float: left;
  border: 1px solid #b2b2b2;
  border-left: none;
  text-align: center;
  font-size: 0.5rem;
  color: black;
}

.goodDetailReduce {
  width: 1rem;
  height: 0.8rem;
  line-height: 0.8rem;
  display: block;
  background: white;
  float: left;
  border: 1px solid #b2b2b2;
  border-right: none;
  text-align: center;
  font-size: 0.5rem;
  color: black;
}

._cartNumber input {
  width: 1rem;
  height: 0.8rem;
  line-height: 0.8rem;
  float: left;
  border: 1px solid #b2b2b2;
  text-align: center;
  color: black;
}

._Value {
  float: left;
  margin-top: 0.2rem;
  font-size: 0.35rem;
}

.goodDetailColor {
  display: none;
}
.xj_tg{
    height: 1rem;
    /* position: relative; */
    /* top: -23px; */
    margin-top: -1rem;
    width: 100%;
    color: #fff;
    background-color: rgba(38,38,38,.9);
    font-size: 0.2rem;
    line-height: 1rem;
    text-indent: 0.3rem;
}
</style>
