<template>
  <div class="page">
    <v-header title="新增地址" :headerLeftStatus="headerLeftStatus" />
    <van-address-edit
      :area-list="addressDataList"
      show-search-result
      :area-columns-placeholder="['请选择', '请选择', '请选择']"
      @save="saveAddress"
    />
    <!-- <div class="address">
      <div class="address-box">
        <label for="">收货人：</label>
        <input
          type="text"
          v-model="addressData.name"
          placeholder="收货人姓名"
        />
      </div>
      <div class="address-box">
        <label for="">手机号码：</label>
        <input
          type="text"
          v-model="addressData.phone"
          placeholder="收货人的手机号码"
        />
      </div>
      <div class="address-box">
        <label for="">选择地区：</label>
        <input
          type="text"
          v-model="addressData.zone"
          placeholder="请选择收货地址"
        />
      </div>
      <div class="address-box">
        <label for="">详细地址：</label>
        <input
          type="text"
          v-model="addressData.detail"
          placeholder="详细街道地址"
        />
      </div>
    </div> -->
    <!-- <div class="footer">
      <a @click="saveAddress(addressData)">保存地址</a>
    </div> -->
  </div>
</template>

<script>
import { mapMutations } from "vuex";
import { addressDataList } from "@/assets/address";
import header from "@/components/header/index";
export default {
  name: "add_address",
  data() {
    return {
      addressDataList,
      searchResult: [],
      addressData: {
        name: "",
        phone: "",
        zone: "",
        detail: ""
      },
      headerLeftStatus: true
    };
  },
  methods: {
    ...mapMutations({
      saveAddress: "ADD_ADDRESS"
    })
  },
  components: {
    "v-header": header
  }
};
</script>

<style lang="less" scoped>
.page {
  .van-address-edit {
    padding-top: 1.6rem;
  }
  .address {
    padding-top: 1.45rem;
    .address-box {
      width: 100%;
      height: 1.5rem;
      line-height: 1.5rem;
      background: #fff;
      display: flex;
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
        height: 100%;
        font-size: 0.4rem;
      }
      .mint-switch {
        display: flex;
        align-items: center;
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
  /deep/ 
  .van-field__error-message {
    color: #00acff;
  }
  /deep/ 
  .van-address-edit {
    width: 100%;
    padding: 0;
    padding-top: 1.7rem;
    .van-address-edit__fields {
      border-radius: 0px;
    }
    .van-address-edit__buttons {
      position: fixed;
      bottom: 0;
      width: 100%;
      height: auto;
      border-top: 1px solid #e0e0e0;
      background: #ffffff;
      padding: 0px;     
      .van-button--danger {
        background: #00acff;
        border: aliceblue;
        width: 95%;
        margin: auto;
        margin-top: 0.2rem;
        margin-bottom: 0.2rem;
        height: 1rem;
      }
    }
  }
}
</style>
