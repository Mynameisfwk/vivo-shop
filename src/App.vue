<template>
  <div id="app">
    <router-view/>
  </div>
</template>

<script>
import { setCookie,getCookie,delCookie } from './assets/js/cookie.js'
import rem from './rem/rem.js'
export default {
  name: 'app',
   data(){
    return{
     
    }
  },
  //  mounted(){
  //     /*页面挂载获取保存的cookie值，渲染到页面上*/
  //     let cookier_name = getCookie('name')
  //     /*如果cookie不存在，则跳转到登录页*/
  //     if(cookier_name == ""){
  //         this.$router.push('register')
  //     }
  // },
}
</script>

<style>
 @import 'styles/style.css';
 @import './fon/iconfont.css';
body{
  /* padding-bottom:1.56rem; */
  background: #F4F4F4;
  /* font-family: 'Avenir', Helvetica, Arial, sans-serif; */
}
.mint-swipe-indicator{
  background: #000;
  border: 1px solid black
}
.mint-swipe-indicator.is-active{
  background: #ddd;
}
</style>
