<template>
  <div class="header">
      <div class="header-left">
          <router-link to="/news">
             <i class="iconfont icon-zuojiantou"></i>
        </router-link>
      </div>
      <div class="header-in">购物车</div>
      <div class="header-rigth"></div>
  </div>
</template>

<script>
export default {
  
}
</script>
<style lang="stylus" scoped>
.header
    width 100%
    height 1.5rem
    background white
    position fixed
    z-index 1
    .header-left 
        width 10%
        height 100%
        float left
        i 
            font-size .6rem
            line-height 1.45rem
            text-align center
            display block
    .header-in
        width 80%
        height 100%
        float left
        text-align: center
        font-size: 0.45rem
        line-height: 1.45rem
    .header-right 
        width 10%
        height 100%
        float left

</style>