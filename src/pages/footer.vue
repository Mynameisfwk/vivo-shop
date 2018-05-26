<template>
  <div id="bottom">
    <ul class="bottom-ul"> 
      <router-link  to="/home" tag="li">
        <div class="index">
          <i class="iconfont icon-shouye_xuanzhong" style="color:#179dfe" v-if="active ==='home'"></i>
          <i class="iconfont icon-shouye2" v-else></i>
        </div>
        <span>首页</span>
      </router-link>

      <router-link to="/classify" tag="li">
        <div class="index">
          <i class="iconfont icon-fenleixuanzhong" style="color:#179dfe" v-if="active ==='classify'"></i>
          <i class="iconfont icon-fenlei-copy" v-else></i>
        </div>
        <span>分类</span>
      </router-link>

      <router-link to="/news" tag="li">
        <div class="index">
          <i class="iconfont icon-dongtaixuanzhong" style="color:#179dfe" v-if="active ==='news'"></i>
          <i class="iconfont icon-dongtai" v-else></i>
        </div>
        <span>动态</span>
      </router-link>

       <router-link to="/my" tag="li">
        <div class="index">
          <i class="iconfont icon-wode-" style="color:#179dfe" v-if="active ==='my'"></i>
          <i class="iconfont icon-wode"  v-else></i>
        </div>
        <span>我的</span>
      </router-link>
    </ul>
  </div>
</template>

<script>
  export default {
    data(){
      return {
        active:'home',
      }
    },
    mounted(){
      this.active = this.$route.path.slice(1);
    }
  }
</script>

<style lang="stylus" scoped>
  #bottom
    width: 100%;
    height: 1.4rem;
    background: yellow;
    position: fixed;
    bottom: 0;
    color: #666
    background white
    .bottom-ul
      display: flex;
      justify-content: center;
      align-items: center;
      height: 1.45rem;
      li
        width 25%
        display: flex;
        justify-content: center;
        flex-direction: column;
        text-align center
        i 
          font-size .55rem
      .router-link:hover,.router-link-active
        color: #25b5fe;
</style>
