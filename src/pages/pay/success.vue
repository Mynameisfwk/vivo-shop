<template>
  <div>
    <v-header title="支付" :headerLeftStatus="headerLeftStatus" />
    <div class="success">
      <i class="iconfont icon-chenggong1"></i>
      <h2>购买成功</h2>
      <p>已收到您的货款,请留意
        <router-link to="/order" >订单信息</router-link>
        以及
        <router-link to="/order">物流信息</router-link>
        另外祝您生活愉快 感谢您的支持与厚爱
      </p>
    </div>
  </div>
</template>

<script>
import header from '@/components/header/index'
export default {
  data(){
    return {
      headerLeftStatus: true
    }
  },
  components:{
    'v-header': header
  }
}
</script>

<style lang="less" scoped>
  .success {
    width: 90%;
    margin: auto; 
    text-align: center;

    h2 {
      font-size: .8rem;
      margin-top: 0.6rem;
      margin-bottom: 0.1rem;
    }

    i {
      display: block;
      padding-top: 30%;
      font-size: 2.8rem;
      color: #52b838;
    }

    p {
      width: 92%;
      font-size: 0.35rem;
      margin: 0.3rem auto;
      line-height: 0.57rem;

      a {
        color: #1574e3;
      }
    }
  }
</style>
