<template>
  <div id="bottom">
    <ul class="bottom-ul"> 
      <router-link  to="/index" tag="li">
          <i class="iconfont icon-shouye_xuanzhong" style="color:#179dfe" v-if="$route.path === '/'"></i>
          <i class="iconfont icon-shouye2" v-else></i>
          <span :style="$route.path ==='/' ? 'color: #179DFE ': 'color: #666'">首页</span>
      </router-link>

      <!-- <router-link to="/classify" tag="li">
        <div class="index">
          <i class="iconfont icon-fenleixuanzhong" style="color:#179dfe" v-if="active ==='classify'"></i>
          <i class="iconfont icon-fenlei-copy" v-else></i>
        </div>
        <span>分类</span>
      </router-link> -->

      <router-link to="/news" tag="li">
        <i class="iconfont icon-dongtaixuanzhong" style="color:#179dfe" v-if="$route.path ==='/news'"></i>
        <i class="iconfont icon-dongtai" v-else></i>
        <span :style="$route.path ==='/news' ? 'color: #179DFE ': 'color: #666'">动态</span>
      </router-link>

       <router-link to="/main" tag="li">
        <i class="iconfont icon-wode-" style="color:#179dfe" v-if="$route.path ==='/main'"></i>
        <i class="iconfont icon-wode"  v-else></i>
        <span :style="$route.path ==='/main' ? 'color: #179DFE ': 'color: #666'">我的</span>
      </router-link>
    </ul>
  </div>
</template>

<script>
  export default {
    data(){
      return {
        active:'/',
      }
    },
    mounted(){
    }
  }
</script>

<style scoped>
 @import url("index.less");
</style>