<template>
  <div class="detail">
    <v-header title="新闻详情" :headerLeftStatus="headerLeftStatus" @jumpRouter='jumpNews()'/>
    <div class="detail-content" v-html="$route.params.data.newsDetail" ></div>
  </div>
</template>

<script>
import header from '@/components/header/index'
export default {
  name: "newsDetail",
  data() {
    return {
      headerLeftStatus: true
    };
  },
  methods: {
    jumpNews() {
      this.$router.push({
        path: '/news'
      })
    }
  },
  components: {
    'v-header': header
  }
};
</script>

<style lang="less" scoped>
  .detail {
    width: 90%;
    height: auto;
    font-size: 0.42rem;
    line-height: 0.8rem;
    display: flex;
    justify-content: center;
    margin: auto;
    .detail-content {
      width: 100%;
      height: auto;
    }
  }
</style>