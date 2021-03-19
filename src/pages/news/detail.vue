<template>
  <div class="detail">
    <div class="detail-con">
      <div class="detail-con-box">
        <div
          class="detail-con-box-2"
          v-html="$route.params.data.newsDetail"
        ></div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "newsDetail",
  data() {
    return {};
  },
  components: {
  }
};
</script>

<style lang="less" scoped>
.detail {
  .detail-con {
    width: 100%;
    height: 100%;
    background: white;
    position: absolute;

    .detail-con-box {
      background: white;

      .detail-con-box-2 {
        p {
          font-size: 0.45rem;
          line-height: 0.7rem;
        }
        img {
          width: 100%;
          margin: auto;
          display: block;
        }
      }
    }
  }
}
</style>