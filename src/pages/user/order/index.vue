<template>
  <div>
    <v-header title="我的订单" :headerLeftStatus="headerLeftStatus" />
    <div class="orderMain" id="transitionName">
      <div class="content">
        <div class="content-list" v-for="(list,index) in order" @click="jumpOrderDetail(list)" :key="index">
          <div class="_order">
            <p class="left">订单号：{{list.orderNumber}}&nbsp;&nbsp;&nbsp;已完成</p>
            <p class="right">
                <img
                style="width:0.7rem;height:0.7rem"
                src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAEUAAABFCAYAAAAcjSspAAAABGdBTUEAALGPC/xhBQAAA1ZJREFUeAHtmz2LE1EUhjcfBoVdFtzGJmzQwkp0Zas0EvAj2CSwGz8Kf4BYbKd2ZtFWEBv/gaJJMGk0oo1NSkHEUsk2wUoQs6gkZn3PkrvcLMedmcydgcA7MDl3zr3znjPPnMtMyM3cHDcSIAESIAESIAESIAESmGUCiaiTb7VaC8Ph8DziHB+NRgt2vEQisbyzs5OzfdKGvwv/lu1PJpM/cfw1nU6/K5VK0o5sixRKvV6/jot7guwXHV7BD0C7ub6+/syh5oRUcuLI4QGAPACQp5B0CUQyXBTdWq1232G6E1KRVEqz2TyFKfMByaclGu7sF5i3sN/s6OjPwbds+8btLuzE9MHYY/BdgD0hY3DeEFPpbLlc/iTHLrfdpF0KitZgMLgDY4C8WVpaKhcKhd9h43Q6nSO9Xu8lwFzCngb429C8EVZ3//mRTB/cxdMmUCqVuusCiOjl8/lfome0Yc9YbWfNSKDgLp40GWaz2c+m7cLaenYcF9pGIxIoED9kAqyurg5M24Xdp7cXx4W20YgKitGfSevr6dNoNO4FvLpz1vj3VttVc2r9tbW1Ta8kfD198CZa9RI6oL9wQJ+LrqD6nlA4fZTb4qtS8L2jqpxLFwmQAAmQgA8CCR9jDhyCr/BVDDDvMZuVSkWOY91c5+Dr6ePqCsfJ78r5gRd0vKs8Y4WCpE1FSf5V+fDYgo73kPPXzZc3hROhEIpCQHGxUghFIaC4WCmEohBQXKwUQlEIKC5WCqEoBBQXK4VQFAKKi5VCKAoBxcVKIRSFgOJipRCKQkBxsVIIRSGguFgphKIQUFysFAVKrD+G4VfBQD/TBh2vXN9UrtCVggU9QxMZ7cOmHae149r5TJtDaCgIvGWCY13rRewuNI2kp5V4EtcauJeP5QvUDH0BmUzmNVZY/5GoSG4Ff1R4GBcYiTOOtyLxJQ/JR9phtkBz/H+BkNgGEnxk+pHcR+xtrKr0ux4/8BJQmTKIWcS+t+QdMTfwl5fHJo9prRMoEhxgniPBK9MmEvY8AHkBIFfD6sj5oaePSQKLdq/h7t3C8bbxxWS3Ja7EdxXPWaWYhNrt9tF+v38Zdy4HX8r4PWzg6QO9v6jM7vz8/KtisfjdQ5/dJEACJEACJEACs0fgH5PV4oD0Zdz+AAAAAElFTkSuQmCC"
                alt
                @click.stop="delOrder(index)"
                >
            </p>
          </div>
          <div class="order">
            <img :src="list.img_url">
            <div class="order-div">
              <h3>{{list.name}}</h3>
              <p class="order-div-price">￥{{toFixed(list.price)}}</p>
            </div>
            <div class="order-number">
              <p>× {{list.value ? list.value : 1}}</p>
            </div>
          </div>
          <div class="order-2">
            <div class="order-2-box">
                <p class="order-2-one">
                应付金额：
                <span style="color:red">￥{{toFixed(list.price * list.value)}}</span>
                </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import { mapState,mapMutations } from 'vuex'
import header from '@/components/header/index'
export default {
  name: "oerder",
  data() {
    return {
      headerLeftStatus: true
    };
  },
  methods: {
    ...mapMutations({
      delOrder: 'order/DEL_ORDER'
    }),
    jumpOrderDetail(list) {
      this.$router.push({
        path: '/orderDetail',
        query: {
          orderNumber: list.orderNumber
        }
      })
    },
    toFixed(value) {
      return JSON.parse(value).toFixed(2)
    },
  },
  computed: {
    ...mapState({
      'order': state => state.order.orders
    })
  },
  components: {
    'v-header': header
  }
};
</script>

<style lang="less" scoped>
.orderMain {
  position: relative;
  top: 1.5rem;
  .content {
    width: 100%;
    height: auto;
    .content-list {
      width: 100%;
      height: auto;
      margin-bottom: 0.3rem;
      ._order {
        width: 100%;
        height: 1.3rem;
        line-height: 1.3rem;
        background: #ffffff;
        .left {
          float: left;
          color: #666;
          margin-left: 0.5rem;
          font-size: 0.35rem;
        }
        .right {
          float: right;
          color: rgb(0, 172, 255);
          margin-right: 0.3rem;
          font-size: 0.35rem;
        }
      }
      .order {
        width: 100%;
        height: 3rem;
        background: white;
        border-bottom: 1px solid #f0f0f0;
        border-top: 1px solid #f0f0f0;
        display: flex;
        img {
          margin: 0.3rem;
          width: 23%
        }
        .order-div {
          width: 50%;
          height: auto;
          h3 {
            font-size: 0.45rem;
            margin-top: 0.3rem;
            color: #666;
          }
          .order-div-price {
            font-size: 0.4rem;
            margin-top: 0.15rem;
            color: red;
          }
        }
        .order-number {
          width: 27%;
          height: 100%;
          display: inline-block;
          font-size: 0.45rem;
          display: flex;
          justify-content: flex-end;

          p {
            margin-right: 0.5rem;
            margin-top: 0.3rem;
            color: #666;
          }
        }
      }
      .order-2 {
        width: 100%;
        height: 1.4rem;
        background: white;
        display: flex;
        justify-content: flex-end;
        align-items: center;
        .order-2-box {
          width: 50%;
          float: right;
          text-align: right;
          margin: 0.2rem 0.4rem;
          .order-2-one {
            font-size: 0.35rem;
            height: 100%;
          }
        }
      }
    }
  }
}
</style>

