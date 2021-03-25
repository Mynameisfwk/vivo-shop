<template>
  <div class="order">
    <v-header title="订单详情" :headerLeftStatus="headerLeftStatus" />
    <div class="details-box">
      <div class="details-success">
        <p>订单状态：已完成</p>
        <img
          src="https://shopstatic.vivo.com.cn/vivoshop/wap/dist/images/membercenter/order/no-pay_79c2dfe.png"
        />
      </div>
      <div class="details-address">
        <p class="address-box">
          <span class="name">收货人：{{ orderDetail.consignee }}</span>
          <span class="phone">{{ orderDetail.phone }}</span>
        </p>
        <p class="address-details">
          收货地址：{{ orderDetail.address }}
        </p>
      </div>
      <div class="details-list">
        <div class="details-list-1">
          <img :src="orderDetail.img_url" />
          <p>
            <span class="name">
              {{ orderDetail.name }}
              <p>× {{ orderDetail.value }}</p>
            </span>
            <span class="price">¥ {{ orderDetail.price }}</span>
          </p>
        </div>

        <div class="details-list-2">
          <div class="details-list-2-1">
            <p>
              <span class="span-1">订单编号：</span>
              <span class="span-2">{{ orderDetail.orderNumber }}</span>
            </p>
            <p>
              <span class="span-1">订单备注：</span>
              <span class="span-2">{{ orderDetail.content }}</span>
            </p>
          </div>
          <div class="details-list-2-2">
            <p>
              <span class="span-1">商品总金额：</span>
              <span class="span-2">¥ {{ toFixed(orderDetail.price * orderDetail.homeValue) }}</span>
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
              <span class="span-2">{{ orderDetail.paymentType }}</span>
            </p>
            <p>
              <span class="span-1">发票类型：</span>
              <span class="span-2">个人</span>
            </p>
            <p>
              <span class="span-1">发票抬头：</span>
              <span class="span-2">{{ orderDetail.invoice }}</span>
            </p>
          </div>
        </div>
        <div class="order-footer">
          总计：<span>¥ {{ toFixed(orderDetail.price * orderDetail.value) }}</span>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import header from "@/components/header/index";
export default {
  name: "detail",
  data() {
    return {
      headerLeftStatus: true
    };
  },
  methods: {
    toFixed(value) {
      return value.toFixed(2);
    }
  },
  computed: {
    orderDetail() {
      var orderDetail = this.$store.state.order.orders.find(list => {
        return this.$route.query.orderNumber == list.orderNumber;
      });
      return orderDetail;
    }
  },
  components: {
    "v-header": header
  }
};
</script>

<style lang="less" scoped>
.order {
  width: 100%;
  height: auto;
  .details-box {
    position: relative;
    top: 1.45rem;
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
      height: auto;
      background: #fff;
      padding-bottom: 0.45rem;
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
  }
}
</style>
