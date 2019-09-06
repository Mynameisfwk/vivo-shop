<template>
  <div class="register">
    <div class="register-1">
      <img
        src="https://accountstatic.vivo.com.cn/accountstatic.vivo.com.cn/static/img/logo.3c33210.png.webp"
        alt
      >
      <p>账号注册</p>
    </div>
    <div class="register-2">
      <label for>
        <span>账号</span>
        <input type="text" v-model="name" placeholder="请输入账号/用户名">
      </label>

      <label for>
        <span>密码</span>
        <input type="password" v-model="password" placeholder="请输入密码">
      </label>
    </div>
    <div class="register-3">
      <input type="button" class="btn" @click="btn" value="注册">
    </div>
  </div>
</template>

<script>
import { setCookie, getCookie } from "../../assets/js/cookie.js";
import { register } from "../../assets/js/api.js";
import { Toast } from "mint-ui";
import axios from "axios";
export default {
  data() {
    return {
      name: "",
      password: ""
    };
  },
  mounted() {
    if (getCookie("name")) {
      this.$router.push("/login");
    }
  },
  methods: {
    btn() {
      var _this = this;
      if (_this.name == "") {
          Toast({
              message: "注册的用户名不能为空",
              duration: 950
            });
      } else {
        axios.get(register, {
            params: {
              name: _this.name,
              password: _this.password
            }
          })
          .then(function(res) {
            console.log(res)
            if (res.data.code == 0) {
               Toast({
                message: res.data.msg,
                duration: 950
            });
            } else if (res.data.code == 1) {
              Toast({
                message: res.data.msg,
                duration: 950
              });
              _this.$router.push("main");
              setCookie("username", _this.name);
              setCookie("token", res.data.data.token);
            
            }
          });
      }
    }
  }
};
</script>

<style>
.register {
  width: 100%;
  height: 100%;
  position: fixed;
  background: white;
  left: 0;
  top: 0;
}
.register-1{
  margin-top: 2rem
}
.register-1 img {
  width: 3rem;
  display: block;
  margin: 0.6rem auto;
}
.register-1 p {
  color: black;
  text-align: center;
  font-size: 0.5rem;
}
.register-2 {
  /* display: flex;
  flex-direction: column; */
  margin-top: 0.6rem;
  margin-bottom: 0.6rem
}
.register-2 label {
  width: 90%;
  margin: auto;
  height: 1.5rem;
  border-bottom: 0.03rem solid #f2f2f2;
  display: flex;
}
.register-2 label span {
  width: 20%;
  font-size: 0.5rem;
  line-height: 1.5rem;
  display: block;
  float: left;
}

.register-2 label input {
  width: 80%;
  font-size: 0.4rem;
  padding-left: 0.3rem;
}
.register-3 {
  display: flex;
}
.btn {
  width: 9rem;
  height: 1.1rem;
  margin: 0 auto;
  /* margin-top: 0.72rem; */
  margin-bottom: 0.3rem;
  text-align: center;
  line-height: 1.1rem;
  font-size: 0.45rem;
  color: #fff;
  border-radius: 0.6rem;
  background-color: #46a1fa;
  background-image: linear-gradient(90deg, #418eff, #4566ff);
}
</style>

