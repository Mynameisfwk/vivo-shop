<template>
  <div class="main-xs">
    <Address-Header title="编辑地址"></Address-Header>
    <div class="address">
      <div class="address-box">
        <label for>收货人：</label>
        <input type="text" v-model="name" placeholder="收货人姓名">
      </div>

      <div class="address-box">
        <label for>手机号码：</label>
        <input type="text" v-model="phone" placeholder="收货人的手机号码">
      </div>

      <div class="address-box">
        <label for>选择地区：</label>
        <input type="text" v-model="zone" placeholder="请选择收货地址">
      </div>

      <div class="address-box">
        <label for>详细地址：</label>
        <input type="text" v-model="detail" placeholder="详细街道地址">
      </div>
    </div>

    <div class="footer">
      <a @click="btn">保存地址</a>
    </div>
  </div>
</template>

<script>
import AddressHeader from "../../../common/header";
import { mapGetters, mapMutations } from "vuex";
import { Toast } from "mint-ui";
import { setCookie, getCookie } from "../../../assets/js/cookie.js";
import axios from "axios";
export default {
  name: "add_address",
  data() {
    return {
      name: "",
      phone: "",
      zone: "",
      detail: ""
    };
  },
  components: {
    AddressHeader
  },
  created() {
    this.name = this.$route.params.name;
    this.phone = this.$route.params.phone;
    this.zone = this.$route.params.address;
    this.detail = this.$route.params.xx_address;
    console.log( this.$route.params.name)
  },
  methods: {
    btn(list) {
      let cookier_token = getCookie("token");
      if (
        this.name == null ||
        this.phone == null ||
        this.zone == null ||
        this.detail == null
      ) {
        Toast({
          message: "资料不能为空",
          duration: 950
        });
      } else {
        axios({
          url: "http://www.vivo-admin.com/up_address/",
          method: "post",
          params: {
            id: this.$route.query.id,
            token: cookier_token,
            name: this.name,
            phone: this.phone,
            address: this.zone,
            xx_address: this.detail
          }
        })
          .then(res => {
            Toast({
              message: res.data.msg,
              duration: 950
            });
            this.$router.push({
              path: "/main/address"
            })
          })
          .catch(err => {
            //异常操作
          });
      }
    }
  }
};
</script>

<style lang="stylus" scoped>
.main-xs{
    width: 100%;
    height: 100%;
    position: fixed;
    left: 0;
    top: 0;
    z-index: 99999;
    background: #f4f4f4;
}
.address {
  padding-top: 1.45rem;

  .address-box {
    width: 100%;
    height: 1.5rem;
    line-height: 1.5rem;
    background: #fff;

    label {
      width: 30%;
      height: 100%;
      padding-left: 0.58rem;
      font-size: 0.4rem;
      display: block;
      float: left;
    }

    input {
      width: 70%;
      font-size: 0.4rem;
    }
  }
}

.footer {
  position: fixed;
  bottom: 0;
  width: 100%;
  height: 1.3rem;
  border-top: 1px solid #e0e0e0;
  background: #ffffff;

  a {
    float: none;
    display: block;
    margin: 0.18rem auto;
    text-align: center;
    width: 95%;
    height: 0.9rem;
    line-height: 0.9rem;
    border-radius: 20px;
    font-size: 0.28rem;
    color: #fff;
    background-color: #00acff;
  }
}
</style>
