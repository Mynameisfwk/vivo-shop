<template>
  <div class="news">
    <v-header title="新闻资讯" :headerLeftStatus="headerLeftStatus"/>
    <div class="content">
      <li
        class="container-box"
        v-for="(list, index) in news"
        @click="jumpNewsDetail(list)"
        :key="index"
      >
        <div class="container-title">{{ list.newsTitle }}</div>
        <div class="container-img">
          <img :src="list.newsImg" alt="vivo" />
        </div>
        <div class="container-con">{{ list.newsCon }}</div>
        <div class="container-time">发布日期 {{ list.newsTime }}</div>
      </li>
    </div>
    <v-footer />
  </div>
</template>

<script>
import { getData } from '@/api/data'
import header from '@/components/header/index'
import footer from '@/components/footer/index'
export default {
  data() {
    return {
      news: [],
    };
  },
  methods: {
    jumpNewsDetail(list) {
      this.$router.push({
        name: "newsDetail",
        params: {
          data: list
        }
      });
    },
    newsData() {
      getData().then(res => {
        this.news = res.news;
      })
    }
  },
  mounted() {
    this.newsData();
  },
  components: {
    "v-header": header,
    "v-footer": footer
  }
};
</script>

<style lang="less" scoped>
.news {
  .content {
    width: 100%;
    height: 15rem;
    background: #ffffff;
    position: relative;
    top: 1.45rem;
    .container-box {
      width: 100%;
      height: auto;
      background: white;
      border-bottom: 1px dotted #cccccc;
      padding-bottom: 0.3rem;
      .container-title {
        color: #505b63;
        width: 95%;
        margin: auto;
        text-align: left;
        font-size: 0.5rem;
        height: 1.5rem;
        line-height: 1.5rem;
      }
      .container-img {
        width: 95%;
        height: 4.3rem;
        margin: auto;
        img {
          width: 100%;
          height: 100%;
        }
      }
      .container-con {
        width: 95%;
        margin: auto;
        line-height: 0.5rem;
        padding-top: 0.3rem;
        color: #696969;
        text-align: justify;
        font-size: 0.3rem;
      }
      .container-time {
        width: 95%;
        margin: auto;
        padding-top: 0.2rem;
        font-size: 0.3rem;
        color: #696969;
      }
    }
  }
}
</style>