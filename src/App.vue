<template>
  <div id="app">
    <router-view />
  </div>
</template>

<script>
import rem from './rem/rem.js'
export default {
  name: 'app',
   data(){
    return{
     
    }
  },
}
</script>

<style>
 @import 'styles/style.css';
 @import './fon/iconfont.css';
body{
  background: #F4F4F4;
}
.mint-swipe-indicator{
  background: #000;
  border: 1px solid black
}
.mint-swipe-indicator.is-active{
  background: #ddd;
}
</style>
