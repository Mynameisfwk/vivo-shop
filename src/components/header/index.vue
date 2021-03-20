<template>
    <div class="header">
       <div class="header-left">
            <i class="iconfont icon-zuojiantou" v-show="headerLeftStatus"  @click="$router.back()"></i>
       </div>
        <div class="header-in">{{title}}</div>
        <div class="header-right"></div>
    </div>
</template>

<script>
export default {
    name: 'ceshi',
    props: ['title','headerLeftStatus'],
    data() {
        return {}
    },
    methods: {
    }
}
</script>

<style lang="less" scoped>
  .header {
      width: 100%;
      height: 1.45rem;
      background: #fff;
      position: fixed;
      z-index: 1;
      display: flex;

      .header-left {
          width: 10%;
          height: 100%;

          i {
              font-size: 0.6rem;
              line-height: 1.45rem;
              text-align: center;
              display: block;
          }
      }

      .header-in {
          width: 80%;
          height: 100%;
          line-height: 1.45rem;
          text-align: center;
          font-size: 0.45rem;
          display: block;
      }

      .header-right {
          width: 10%;
          height: 100%;
      }
  }
</style>
