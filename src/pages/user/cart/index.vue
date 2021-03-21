<template>
  <div class="cart">
    <v-header title="购物车" :headerLeftStatus="headerLeftStatus" />
    <div class="cartMain">
      <ul>
        <li v-for="(list,index) in carts" class="cartList" :key="index">
          <!-- 购物车单选 -->
          <div class="select" @click="singleCartsList(index)">
            <i class="iconfont icon-xuanzekuangmoren" v-if="!list.select"></i>
            <i v-else
              class="iconfont icon-xuanzekuangxuanzhong"
              style="color:#25b5fe"
            ></i>
          </div>
          <!-- 购物车商品信息 -->
          <div class="cartImage">
             <img :src="list.img_url">
          </div>
          <div class="cartInformation">
            <div class="cartName">
              {{list.name}}
              <a
                href="javascript:;"
                class="iconfont icon-huishouzhan7"
                @click="delCartList(index)"
              ></a>
            </div>
            <p class="cartPrice">￥{{list.price}}</p>
          </div>

          <!-- 购物车商品数量 -->
          <div class="cartNumber">
            <a href="javascript:;" @click="reduceCartValue(index)" class="add">-</a>
            <input type="text" v-model="list.value" readonly="readonly">
            <a href="javascript:;" @click="addCartValue(index)" class="reduce">+</a>
          </div>
        </li>
      </ul>
    </div>
    <div class="cartImg" v-if="!carts.length">
      <img src="/static/img/gouwuche.png" alt="购物车图片">
      <h1>购物车是空的哦，快去购物吧</h1>
      <router-link to="/index">逛一逛</router-link>
    </div>
    <div class="cartFooter" v-if="carts.length">
      <div class="checkAll" @click="">
        <i class="iconfont icon-xuanzekuangmoren"></i>
        <!-- <i class="iconfont icon-xuanzekuangxuanzhong" style="color:#25b5fe"></i> -->
        <span>全选</span>
      </div>

      <div class="Total">
        合计：
        <span style="font-size: 0.54rem;color:#E3211E">￥ {{TotalPrice}}</span>
      </div>

      <div class="Settlement">
        <a href="javascript:void(0);" @click="">结算</a>
      </div>
    </div>
  </div>
</template>
<script>
import { mapState,mapMutations } from 'vuex'
import header from "@/components/header/index";
export default {
  name: "cart",
  data() {
    return {
      headerLeftStatus: true
    };
  },
  methods: {
    ...mapMutations({
      addCartValue: 'cart/ADDCART_VALUE',
      delCartList: 'cart/DEL_CARTS',
      reduceCartValue: 'cart/REDUCECART_VAVLUE',
      singleCartsList: 'cart/SELECT_CARTS_LIST',
    })
  },
  computed: {
    ...mapState({
      'carts': state => state.cart.carts
    }),
    TotalPrice() {
      var sum = 0
      this.$store.state.cart.carts.forEach(list => {
        if(list.select) {
          sum += list.value * list.price
        }
      });
      return sum
    }
  },
  components: {
    "v-header": header
  }
};
</script>

<style lang="less" scoped>
.select {
  float: left;
  margin-top: 1.5rem;
  padding-left: 0.5rem;
}
.select i {
  font-size: 0.53rem;
}
.checkAll {
  width: 24%;
  line-height: 1.18rem;
  float: left;
}
.checkAll i {
  font-size: 0.53rem;
  padding-left: 0.5rem;
}
.cart {
  position: absolute;
  width: 100%;
  height: 100%;
  z-index: 999;
  top: 0;
  left: 0;
  background: #f4f4f4;
}
.cartheader {
  position: fixed;
  width: 100%;
  box-shadow: 0 0 10px #cecece;
  height: 1.3rem;
  line-height: 1.3rem;
  font-size: 0.35rem;
  padding-left: 0.3rem;
  background: white;
  top: 0;
  font-size: 0.41rem;
}
.cartheader i {
  display: block;
  float: left;
  height: 50px;
  font-size: 0.71rem;
  color: black;
  width: 0.9rem;
}
.cartList {
  width: 100%;
  height: 4rem;
  background: white;
  margin-top: 0.04rem;
}
.cartMain {
  margin-top: 1.3rem;
  margin-bottom: 1.24rem;
}
.cartMain ul li {
  list-style: none;
}
.cartImage img {
  width: 2.6rem;
  height: 2.8rem;
}
.cartImage {
  float: left;
  padding: 0.5rem 0.3rem;
}
.cartInformation {
  width: 7.7rem;
  font-size: 0.35rem;
  padding-left: 0.3rem;
  padding-top: 0.6rem;
}
.cartPrice {
  color: red;
  margin-top: 0.2rem;
  font-size: 0.4rem;
}
.cartNumber {
  float: left;
  margin-top: 0.3rem;
}
.cartNumber .add, .cartNumber .reduce {
  display: block;
  width: 0.75rem;
  height: 0.75rem;
  line-height: 0.75rem;
  border: 1px solid #dedede;
  float: left;
  color: #b2b2b2;
  text-align: center;
  font-size: 0.5rem;
}
.cartNumber input {
  width: 0.96rem;
  height: 0.76rem;
  float: left;
  text-align: center;
  border: 1px solid #dedede;
}
.cartNumber .add {
  border-right: none;
}
.cartNumber .reduce {
  border-left: none;
}
.cartFooter {
  position: fixed;
  width: 100%;
  height: 1.18rem;
  font-size: 0.35rem;
  background: white;
  bottom: 0;
  display: block;
  border-top: 1px solid #f4f4f4;
}
.cartImg img {
  width: 4.4rem;
  height: 5.2rem;
  display: block;
  margin: auto;
  padding-top: 1.5rem;
}
.cartImg a {
  display: block;
  text-align: center;
  margin: 0.8rem auto;
  width: 110px;
  height: 37px;
  line-height: 37px;
  border-radius: 4px;
  text-align: center;
  background: #e0524b;
  color: white;
  font-weight: 800;
  font-size: 0.5rem;
}
.cartName {
  width: 9.3rem;
  font-size: 0.36rem;
}
.cartName a {
  color: black;
  font-size: 0.57rem;
  float: right;
}
.cartImg h1 {
  margin-top: 0.5rem;
  text-align: center;
  color: #959595;
  font-size: 0.6rem;
}
._box {
  width: 63%;
  height: 100%;
  float: left;
}
.Total {
  float: left;
  width: 35%;
  text-align: center;
  line-height: 1.18rem;
  font-size: 0.35rem;
}
.Settlement {
  width: 34%;
  height: 80%;
  background: #f81200;
  float: right;
  margin-top: 0.1rem;
  border-radius: 40px;
  margin-right: 0.3rem;
}
.Settlementtwo {
  width: 50%;
  height: 100%;
  background: #e3211e;
  float: right;
}
.Settlement a, .Settlementtwo a {
  color: white;
  text-align: center;
  line-height: 0.98rem;
  display: block;
  font-size: 0.35rem;
}
</style>
