<template>
  <div class="detail" id="transition">
      <Detail-Header title="资讯详情"></Detail-Header>
      <div class="detail-con" v-for="(list,index) in newsDetail">
        <div class="detail-con-box" v-html="list.newsDetail"></div>
        <div class="details-box">
          <div class="stars">
            <i class="iconfont icon-dianzan"></i>
            <span>1</span>
          </div>
          <div class="collection" @click="btn(list)">
            <i class="iconfont icon-praise" v-show="!list.sc" ></i>
            <i class="iconfont icon-praise" v-show="list.sc" style="color:red"></i>
            <span>收藏</span>
          </div>
        </div>
      </div>
  </div>
</template>

<script>
import axios from "axios";
import {
  Toast,
  MessageBox,
  Navbar,
  TabItem,
  TabContainer,
  TabContainerItem
} from "mint-ui";
import DetailHeader from '../../common/header';
import { mapGetters, mapMutations } from "vuex";
export default {
  name: "newsDetail",
  data() {
    return {
      newsDetail: []
    };
  },
  components: {
    DetailHeader
  },
  computed: {
    ...mapGetters(["this.$store.state.article"])
  },
  methods: {
    btn(list) {
      var date = new Date();
      var fh1 = "-";
      var fh2 = ":";
      var year = date.getFullYear(); // 年
      var month = date.getMonth() + 1; // 月
      var day = date.getDate(); // 日
      var hour = date.getHours(); // 时
      var minutes = date.getMinutes(); // 分
      //如果时间中只有个位话那么十位加0
      if (month >= 1 && month <= 9) {
        month = "0" + month;
      }else if(day >= 1 && day <= 9){
        day = "0" + day;
      }else if(hour>=1 && hour<=9){
        hour = "0" + hour;
      }else if(minutes>=1 && minutes<=9){
        minutes = "0" + minutes;
      }
      
      var currentdate =
        year + fh1 + month + fh1 + day + " " + hour + fh2 + minutes;

      var idExist = this.$store.state.article.find(data => {
        return data.id == list.id;
      });
      if (!idExist) {
        var data = {
          id: list.id,
          title: list.newsTitle,
          newsCon:list.newsCon,
          currentdate: currentdate
        };
        Toast({
          message: "收藏成功",
          duration: 950
        });
        this.$store.commit("SET_ARTICLE", data);
      } else {
        Toast({
          message: "您已经收藏过了",
          duration: 950
        });
      }
    }
  },
  created() {
    var _this = this;
    var id = this.$route.query.id;
    axios.get("/static/ceshi.json").then(function(res) {
      for (var i = 0; i < res.data.data.news.length; i++) {
        if (res.data.data.news[i].id == id) {
          _this.newsDetail.push(res.data.data.news[i]);
        }
      }
    });
  }
  // created(){
  //   var id = this.$route.query.id;

  // }
};
</script>


<style lang="stylus" scoped>
.detail {
  position: absolute;

  .detail-con {
    background: white;

    .detail-con-box {
      width: 90%;
      margin: auto;
      text-align: justify;
      font-weight: 400;
      padding-top: 1.45rem;
      font-size: 0.4rem;
      line-height: 0.59rem;
    }

    .details-box {
      width: 100%;
      height: 2rem;
      background: #ffffff;
      display: flex;
      justify-content: center;
      color: #25b5fe;

      div {
        width: 3rem;
        height: 1rem;
        line-height: 1rem;
        border: 1px solid #25b5fe;
        border-radius: 30px;
        margin: auto 0.3rem;
        text-align: center;
        float: left;

        span {
          padding-left: 0.1rem;
        }
      }

      .collection {
        display: flex;
        justify-content: center;
      }
    }
  }
}
</style>