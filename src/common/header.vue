<template>
  <div class="header">
      <div class="header-left" @click="$router.go(-1)">
          <i class="iconfont icon-zuojiantou"></i>
      </div>
      <div class="header-in">{{title}}</div>
      <div class="header-rigth"></div>
  </div>
</template>

<script>
export default {
  name:"header",
  props:[
      "title"
  ]
}
</script>

<style lang="stylus" scoped>
.header
    width 100%
    height 1.45rem
    background white
    position fixed
    z-index 1
    .header-left
        width 10%
        height 100%
        float left
        i 
            font-size: 0.6rem;
            line-height: 1.45rem;
            text-align: center;
            display: block;
    .header-in
        width: 80%;
        float: left;
        text-align: center;
        font-size: 0.45rem;
        line-height: 1.45rem;
    .header-rigth
        width 10%
        height 100%
        float left
        
</style>
