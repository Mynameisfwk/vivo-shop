<template>
  <div id="app">
    <router-view/>
  </div>
</template>

<script>
import rem from './rem/rem.js'
export default {
  name: 'app',
   data(){
    return{
      transitionName:''
    }
  }
}
</script>

<style>
 /* @import  "//at.alicdn.com/t/font_337147_rz7i21pv98fzjjor.css"; */
 /* @import "./font/font.css"; */
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
