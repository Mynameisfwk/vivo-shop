<template>
  <div class="goodDetail" id="transitionName">
    <v-header title="商品详情" :headerLeftStatus="headerLeftStatus" @jumpRouter="$router.back()"/>
    <div class="goodDetailList">
      <ul style="background: white;">
        <li v-for="(list, index) in goodDetails" :key="index">
          <div class="goodDetaiSwipe">
            <mt-swipe :auto="4000">
              <mt-swipe-item v-for="(v, index) in list.swiper" :key="index">
                <img :src="v.swipe" alt="图片" />
              </mt-swipe-item>
            </mt-swipe>
          </div>

          <div class="goodDetailMain">
            <div class="gooDetailNumber">商品编号：{{ list.number }}</div>
            <div class="goodDetailName">{{ list.name }}</div>
            <div style="text-align: justify;font-size: 0.348rem;">
              <span style="margin-left:-.2rem;color:#FF4B3D;"
                >【{{ list.bright }}】</span
              >
              {{ list.title }}
            </div>
            <div class="goodDetailColor">{{ list.color }}</div>
            <div class="goodDetailPaid">￥{{ list.price }}</div>
          </div>

          <div class="goodDetailValue">
            <div class="_Value">购买数量：</div>
            <div class="_cartNumber" style="margin-left: 2rem;">
              <a
                href="javascript:;"
                class="goodDetailReduce"
                @click="reduceOrderValue()"
                >-</a
              >
              <input type="text" v-model="value" readonly="readonly" />
              <a
                href="javascript:;"
                class="goodDetailAdd"
                @click="addOrderValue()"
                >+</a
              >
            </div>
          </div>

          <div class="category" @click="show = !show">
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
            <div class="boxbox" v-show="show">
              <div class="layer" v-show="show" @click="show = !show">
                <div class="layer-box">
                  <div class="layer-box-left"></div>
                  <div class="layer-box-in">
                    <h3>服务说明</h3>
                  </div>
                  <div class="layer-box-rigt" @click.stop="show = !show">
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
                      <router-link to="/change">现在换机 </router-link>
                    </p>
                  </div>
                </div>
                <div class="layer-box-button">
                  <div>关闭</div>
                </div>
              </div>
            </div>
          </transition>

          <div class="goodDetailBox">
            <mt-navbar v-model="selected">
              <mt-tab-item id="tab-container1">图文详情</mt-tab-item>
              <mt-tab-item id="tab-container2">参数</mt-tab-item>
            </mt-navbar>

            <mt-tab-container v-model="selected" swipeable>
              <mt-tab-container-item id="tab-container1">
                <div class="goodDetailImg">
                  <p v-for="(ov, index) in list.Images" :key="index">
                    <img v-bind:src="ov.one" alt="详情图片" />
                  </p>
                </div>
              </mt-tab-container-item>

              <mt-tab-container-item id="tab-container2">
                <div class="peizhi" v-html="list.homePeizhi"></div>
              </mt-tab-container-item>
            </mt-tab-container>
          </div>

          <div class="goodDetailFooter">
            <div class="left">
              <div class="cart">
                <div class="cartlength">
                  {{ $store.state.cart.carts.length }}
                </div>
                <img
                  src="http://p6563v2ck.bkt.clouddn.com/%E8%B4%AD%E7%89%A9%E8%BD%A6.png"
                />
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
                  <i
                    class="iconfont icon-shoucangxuanzhong1"
                    style="color:red"
                  ></i>
                  <span style="color:red">取消</span>
                </div>
              </div>
              <div class="shop">
                <img
                  src="http://p6563v2ck.bkt.clouddn.com/%E5%BA%97%E9%93%BA_2.png"
                />
                <!-- <i class="iconfont icon-xuanzekuangxuanzhong" v-show="!$store.state.collection"></i>
                                <i class="iconfont icon-xuanzekuangxuanzhong" v-show="$store.state.collection" style="color:red"></i> -->
                <span>店铺</span>
              </div>
            </div>
            <div class="rigth">
              <div class="add">
                <a href="javascript:void(0);" @click="addCart(list)"
                  >加入购物车</a
                >
              </div>
              <div class="purchase">
                <a href="javascript:void(0);" @click="jumpPay(list)"
                  >提交订单</a
                >
              </div>
            </div>
          </div>
        </li>
      </ul>
    </div>
  </div>
</template>

<script>
import header from '@/components/header/index'
import { getData } from "@/api/data";
export default {
  name: "detail",
  data() {
    return {
      active: "1",
      selected: "tab-container1",
      goodDetails: [],
      headerLeftStatus: true,
      cartlength: 0,
      value: 1,
      show: false
    };
  },

  created() {
    this.shopDetailsData();
  },

  methods: {
    addCart(list) {
      var data = {
        id: list.id,
        img_url: list.img_url,
        name: list.name,
        price: list.price,
        select: false,
        value: this.value
      };

      this.$store.commit("cart/ADD_CARTS", data);
    },

    addOrderValue() {
      this.value++;
    },

    shopDetailsData() {
      getData().then(res => {
        res.homeData[this.$route.query.id - 1].data.forEach(list => {
          if (list.id == this.$route.query.shop_id) {
            this.goodDetails.push(list);
          }
        });
      });
    },

    jumpPay(list) {
      this.$router.push({
        path: "/pay",
        name: "pay",
        query: {
          id: list.id
        },
        params: {
          value: this.value
        }
      });
    }
  },

  components: {
    'v-header': header
  }
};
</script>

<style lang="less" scoped>
  .goodDetail {
    .peizhi {
      width: 90%;
      margin: auto;

      div {
        margin-bottom: 0.5rem;
        margin-top: 0.5rem;
      }

      h3 {
        height: 2rem;
        line-height: 2.3rem;
        font-size: 0.5rem;
        border-bottom: 1px solid #ccc;
      }

      span {
        font-size: 0.38rem;
        color: #888;
        margin-top: 0.3rem;
        display: block;
      }

      p {
        height: 0.55rem;
        color: #888;
      }
    }

    .cartlength {
      width: 15px;
      height: 15px;
      position: absolute;
      top: 1px;
      left: 30px;
      background: #f81301;
      border-radius: 50%;
      text-align: center;
      line-height: 15px;
      color: white;
    }

    .goodDetailList {
      margin-bottom: 1rem;
      padding-top: 1.45rem;
    }

    .goodDetailHeader {
      width: 100%;
      z-index: 1;
      height: 1.3rem;
      line-height: 1.3rem;
      font-size: 12px;
      background: white;
      position: fixed;
      box-shadow: 0 0 10px #cecece;
      text-align: center;
      font-size: 0.41rem;
    }

    .goodDetailHeader i {
      display: block;
      float: left;
      height: 50px;
      padding-left: 0.3rem;
      font-size: 0.71rem;
      color: black;
    }

    .goodDetaiSwipe {
      height: 8rem;
      margin-top: 3px;
      background: white;
    }

    .goodDetaiSwipe img {
      width: 70%;
      height: 7rem;
      display: block;
      /* margin-top: 60px; */
      margin: auto;
    }

    .goodDetailMain {
      background: white;
      border-bottom: 1px solid #cecece;
      padding: 0.4rem;
      margin-top: -15px;
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

    .goodDetailFooter {
      position: fixed;
      width: 100%;
      bottom: 0rem;
      height: 1.2rem;
      background: #f6f4f7;
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
            background: #ff9800;
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
            background: #e3211e;
          }
        }
      }
    }

    .category {
      width: 100%;
      height: 1.5rem;
      border-bottom: 10px solid #f4f4f4;

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

    .fade-enter-active,
    .fade-leave-active {
      transition: all 0.3s ease;
    }

    .fade-enter,
    .fade-leave-active {
      transform: translateY(100%);
    }

    .gooDetailNumber {
      display: none;
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
  }
</style>
