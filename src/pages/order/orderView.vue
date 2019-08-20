<template>
  <div class="o1">
    <Order-Header title="订单详情"></Order-Header>
    <div class="details-box">
      <div class="details-success">
        <p>订单状态：已完成</p>
        <img
          src="https://shopstatic.vivo.com.cn/vivoshop/wap/dist/images/membercenter/order/no-pay_79c2dfe.png"
        >
      </div>

      <div class="details-address" v-for="(item,index) in list" :key="index">
        <p class="address-box">
          <span class="name">收货人：{{item.address_name}}</span>
          <span class="phone">{{item.address_phone}}</span>
        </p>
        <p class="address-details">收货地址：{{item.address}}</p>

        <div class="details-list">
          <div class="details-list-1">
            <img src="http://www.vivo-admin.com/static/image/5cd6e6221bed6.png">
            <p>
              <!-- <span>id是{{list.id}}</span> -->
              <span class="name">
                {{item.shop_name}}
                <p>× 1</p>
              </span>
              <span class="price">¥ {{item.shop_price}}</span>
            </p>
          </div>

          <div class="details-list-2">
            <div class="details-list-2-1">
              <p>
                <span class="span-1">订单编号：</span>
                <span class="span-2">{{item.number}}</span>
              </p>
              <p>
                <span class="span-1">订单备注：</span>
                <span class="span-2">{{item.content}}</span>
              </p>
            </div>

            <div class="details-list-2-2">
              <p>
                <span class="span-1">商品总金额：</span>
                <span class="span-2">¥ {{item.shop_price}}</span>
              </p>
              <p>
                <span class="span-1">运费：</span>
                <span class="span-2">¥ 0.00</span>
              </p>
              <p>
                <span class="span-1">优惠：</span>
                <span class="span-2 red">-¥ 0.00</span>
              </p>
              <p>
                <span class="span-1">换鼓励金：</span>
                <span class="span-2 red">-¥ 0.00</span>
              </p>
            </div>

            <div class="details-list-2-3">
              <p>
                <span class="span-1">配送方式：</span>
                <span class="span-2">顺丰速运 免邮</span>
              </p>
              <p>
                <span class="span-1">支付方式：</span>
                <span class="span-2">支付宝</span>
              </p>
              <p>
                <span class="span-1">发票类型：</span>
                <span class="span-2">个人</span>
              </p>
              <p>
                <span class="span-1">发票抬头：</span>
                <span class="span-2">{{item.invoice}}</span>
              </p>
            </div>
          </div>
          <!-- <img :src="list.homeImg" /> -->

          <div class="order-footer">
            总计：
            <span>¥3999</span>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import axios from "axios";
import OrderHeader from "../../common/header";
import { setCookie, getCookie } from "../../assets/js/cookie.js";
import { user_order } from "../../assets/js/api.js";
export default {
  name: "o1",
  data() {
    return {
      list: []
    };
  },
  components: {
    OrderHeader
  },
  created() {
    var shop_number = this.$route.query.number;
    let cookier_token = getCookie("token");
    axios({
      url:user_order,
      method: "post",
      params: {
        token: cookier_token
      }
    })
      .then(res => {
        var data = res.data.order;
        for (var i = 0; i < data.length; i++) {
          if (data[i].number == shop_number) {
            this.list.push(data[i]);
          }
        }
      })
      .catch(err => {
        //异常操作
      });
  }
};
</script>

<style lang="stylus" scoped>
.details-box {
  position: absolute;
  top: 1.45rem;
  width: 100%;
}

.details-success {
  width: 100%;
  height: 2.4rem;
  background: #69c1ff;

  p {
    color: #fff;
    font-size: 0.46rem;
    line-height: 2.4rem;
    float: left;
    padding-left: 0.4rem;
  }

  img {
    width: 2.7rem;
    margin: 0.5rem;
    float: right;
  }
}

.details-address {
  width: 100%;
  height: 2.7rem;
  background: #fff;

  .address-box {
    width: 87%;
    margin: auto;
    font-size: 0.4rem;
    padding-top: 0.3rem;
    padding-bottom: 0.3rem;

    .phone {
      float: right;
    }
  }

  .address-details {
    width: 87%;
    margin: auto;
    color: #666;
    font-size: 0.38rem;
  }
}

.details-list {
  width: 100%;
  margin-bottom: 1.3rem;

  .details-list-1 {
    width: 100%;
    height: 3rem;
    background: #ffffff;
    margin-top: 5px;

    img {
      width: 2.5rem;
      margin: 0.28rem;
      float: left;
    }

    p {
      display: flex;
      flex-direction: column;

      .name {
        font-size: 0.4rem;
        margin-top: 0.3rem;
        height: 0.6rem;
      }

      .price {
        color: red;
        font-size: 0.35rem;
        font-weight: 500;
        height: 0.6rem;
      }

      span {
        p {
          float: right;
          margin-right: 0.5rem;
        }
      }
    }
  }

  .details-list-2 {
    width: 100%;
    height: 9rem;
    background: #ffffff;

    div {
      width: 90%;
      margin: auto;
      padding-top: 0.3rem;
      padding-bottom: 0.3rem;
      font-size: 0.36rem;
      border-top: 1px solid #e8e8e8;

      span {
        color: #888;
        float: left;
      }

      .span-1 {
        width: 2.3rem;
        display: block;
      }
    }

    .details-list-2-1 {
      height: 2rem;

      p {
        height: 0.76rem;
        line-height: 0.76rem;
      }
    }

    .details-list-2-2 {
      height: 3.5rem;

      p {
        height: 0.76rem;
        line-height: 0.76rem;
      }

      .red {
        color: red;
      }
    }

    .details-list-2-3 {
      height: 4rem;

      p {
        height: 0.76rem;
        line-height: 0.76rem;
      }
    }
  }

  .order-footer {
    width: 100%;
    height: 1.3rem;
    background: #fff;
    position: fixed;
    bottom: 0;
    line-height: 1.3rem;
    padding-left: 0.5rem;
    font-size: 0.38rem;
    border-top: 1px solid #eaeaea;

    span {
      color: red;
    }
  }
}
</style>
