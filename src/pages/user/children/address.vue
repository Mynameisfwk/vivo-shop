<template>
  <div class="main-xs">
    <Address-Header title="管理收货地址"></Address-Header>
    <div class="Address-box">
      <div class="address-one">
        <p class="left">配送地址</p>
        <p class="right" @click="goAdd_address">+添加地址</p>
      </div>
      <div
        class="pay-address"
        v-for="(list,index) in address"
        :key="index"
        :class="{active:index===$store.state.nowIndex}"
        @click="btn(list,index)"
      >
        <p class="address-box">
          <span class="name">收货人：{{list.name}}</span>
          <span class="phone">{{list.phone}}</span>
        </p>
        <p class="address-details">收货地址：{{list.address}}{{list.xx_address}}</p>
        <div class="address-operation">
          <p class="address-operation-box">
            <i class="iconfont icon-bianji"></i>
            <i class="iconfont icon-lajitong" @click.stop="del_address(list)"></i>
          </p>
        </div>
      </div>
    </div>
  </div>
</template>


<script>

import { Toast,MessageBox } from "mint-ui";
import AddressHeader from "../../../common/header";
import { mapState, mapMutations, mapGetters } from "vuex";
import { setCookie, getCookie } from "../../../assets/js/cookie.js";
import axios from "axios";

export default {
  data() {
    return {
      nowIndex: 0,
      address: []
    };
  },
  components: {
    AddressHeader
  },
  created() {
    this.get_address();
  },
  methods: {
    async get_address() {
      let cookier_token = getCookie("token");
      axios({
        url: "http://www.vivo-admin.com/user_address/",
        method: "get",
        params: {
          token: cookier_token
        }
      })
        .then(res => {
          this.address = res.data.data;
        })
        .catch(err => {
          //异常操作
        });
    },
    btn(list) {
      this.$router.push({
        name: "/main/upaddress",
        params: {
          name: list.name,
          address: list.address,
          phone: list.phone,
          xx_address: list.xx_address
        },
        query: {
          id: list.id
        }
      });
    },
    del_address(list) {
      let cookier_token = getCookie("token");
      axios({
        url: "http://www.vivo-admin.com/del_address/",
        method: "get",
        params: {
          id: list.id,
          token: cookier_token
        }
      })
        .then(res => {
          this.get_address();
          alert('删除成功')
        })
        .catch(err => {
          //异常操作
        });
    },
    goAdd_address() {
      this.$router.push({
        path: "add_address"
      });
    }
  }
};
</script>


<style lang="stylus" scoped>
.active {
}

.main-xs {
  width: 100%;
  height: 100%;
  position: fixed;
  left: 0;
  top: 0;
  z-index: 99999;
  background: #f4f4f4;
}

.Address-box {
  padding-top: 1.45rem;

  .address-one {
    width: 100%;
    height: 1.6rem;
    line-height: 1.6rem;
    background: #ffffff;
    margin-bottom: 0.2rem;
    border-top: 1px solid #eaeaea;

    .left {
      float: left;
      margin-left: 0.6rem;
      font-size: 0.37rem;
    }

    .right {
      float: right;
      margin-right: 0.6rem;
      font-size: 0.37rem;
      color: #00acff;
    }
  }

  .pay-address {
    width: 100%;
    height: 3.5rem;
    background: #ffffff;
    background-size: 1.6rem;
    margin-top: 0.3rem;
    display: block;

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
      height: 1rem;
      margin: auto;
      color: #666;
      font-size: 0.38rem;
    }

    .address-operation {
      width: 100%;
      height: 1rem;
      line-height: 1rem;
      margin-top: 0.3rem;

      .address-operation-box {
        width: 100%;
        border-top: 1px solid #eaeaea;

        i {
          float: right;
          font-size: 0.5rem;
          margin-right: 1.2rem;
          color: #a3a3a3;
        }
      }
    }
  }
}
</style>
