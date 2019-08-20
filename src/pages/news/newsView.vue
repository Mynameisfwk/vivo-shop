<template>
  <div class="view">
    <Detail-Header title="资讯详情"></Detail-Header>
    <div class="detail-con" v-for="(list,index) in newsDetail">
      <div class="detail-con-box">
        <div class="detail-con-box-2" v-html="list.content"></div>
      </div>
      <div class="details-pl">
        <div class="pl-box" v-for="(list,index) in user_pl_data">
          <div class="pl-box-one">
            <div class="pl-box-left">
              <div class="left-tx">
                <img src="/static/img/tou.jpg" alt>
              </div>
            </div>
            <div class="pl-box-in">
              <p class="in-user">{{list.name}}</p>
              <p class="in-time">15分钟前</p>
              <!--  -->
            </div>
          </div>
          <div class="pl-box-two">
            <p class="in-text">
              <span>{{list.text}}</span>
            </p>
          </div>
        </div>
      </div>
      <div class="details-box">
        <div class="details-box-pl" @click="qu_pl">输入评论...</div>
        <div class="details-box-dp">
          <p class="dp-sc" @click="btn(list)">
            <!-- <i class="iconfont icon-collection" style="color:red" v-if="sc_num==1"></i>
            <i class="iconfont icon-collection" style="color:#cccccc;" v-else="sc_num==0"></i>
            1 -->
            <span v-if="$store.state.sc_zt==1">1</span>
            <span v-else>0</span>
            <!-- 0没有收藏 1收藏 -->
          </p>
          <p class="dp-pl">
            <i class="iconfont icon-collection"></i>
            {{details_pl}}
          </p>
        </div>
      </div>
    </div>
    <div class="popup" ref="popup">
      <div class="popup-title">
        <p class="left"></p>
        <p class="in">发表评论</p>
        <p class="right" @click="go_pl">发送</p>
      </div>

      <input type="text" v-model="text_data" placeholder="ceshi">
    </div>
  </div>
</template>


<script>
import { setCookie, getCookie } from "../../assets/js/cookie.js";
import axios from "axios";
import {
  Toast,
  MessageBox,
  Navbar,
  TabItem,
  TabContainer,
  TabContainerItem
} from "mint-ui";
import DetailHeader from "../../common/header";
import { mapGetters, mapMutations } from "vuex";
import { news_data,user_pl } from "../../assets/js/api.js";
export default {
  name: "newsDetail",
  inject: ["reload"],
  data() {
    return {
      newsDetail: [],
      user_pl_data: [],
      text_data: "",
      details_pl: "",
      sc_num: ""
    };
  },
  components: {
    DetailHeader
  },
  computed: {
    ...mapGetters(
      ["this.$store.state.article"]
    )
  },
  created() {
    var _this = this;
    var id = this.$route.query.id;
    setCookie("wz_id", id);
    // var sz_cc=sessionStorage.getItem('code')
    
    // _this.sc_zt==sz_cc
    axios.get(news_data).then(function(res) {
      _this.user_pl_data = res.data.user_pl;
      for (var i = 0; i < res.data.data.length; i++) {
        if (res.data.data[i].id == id) {
          _this.newsDetail.push(res.data.data[i]);
        }
      }
      axios({
        url: news_data,
        method: "post",
        params: {
          id: id
        }
      })
        .then(res => {
          _this.details_pl = res.data.user_pl.length;
          _this.user_pl_data = res.data.user_pl;
        })
        .catch(err => {
          //异常操作
        });
    });

    console.log()

  },
  methods: {
    qu_pl() {
      this.$refs.popup.style.top = "0vh";
    },
    go_pl() {
      let cookier_token = getCookie("token");
      let cookier_name = getCookie("username");
      let id = getCookie("wz_id");
      axios({
        url: "http://www.vivo-admin.com/user_pl/",
        method: "post",
        params: {
          id: id,
          name: cookier_name,
          token: cookier_token,
          text: this.text_data
        }
      })
        .then(res => {
       
          if (res.data.code == 1) {
            
            Toast({
              message: res.data.msg,
              duration: 950
            });
            this.$refs.popup.style.top='100vh'
            
          } else {
            Toast({
              message: res.data.msg,
              duration: 950
            });
          }
        })
        .catch(err => {
          //异常操作
        });
    },
    btn(list) {
      console.log(list)
      let cookier_token = getCookie("token");
      axios({
        url: user_pl,
        method: "post",
        params: {
          id: list.id,
          token: cookier_token
        }
      })
        .then(res => {
     
          // console.log('点击后res里面的='+res.data.code)
          // console.log('点击后本地的='+this.sc_zt)
          // this.$store.state.sc_zt=1 
          // this.$store.commit('gb',res.data.code)
        //  sessionStorage.setItem('code',JSON.stringify(res.data.code))
          if (res.data.code == 0) {
            
            //  console.log('点击后2本地的='+this.sc_zt)
            Toast({
              message: "取消成功",
              duration: 950
            });
          } else if (res.data.code == 1) {
            //  this.sc_zt=res.data.code
              //  console.log('点击后2本地的='+this.sc_zt)
            Toast({
              message: "收藏成功",
              duration: 950
            });
            
          
          
          }
        })
        .catch(err => {
          //异常操作
        });
    }
  }
};
</script>

<style>
.view {
  width: 100%;
  height: 100%;
  background: white;
  position: absolute;
}
.detail-con {
  width: 100%;
  height: 100%;
  background: #f5f6f8;
  padding-top: 1.45rem;
}
.detail-con-box {
  background: white;
}
.detail-con-box img {
  width: 100%;
  margin: auto;
  display: block;
}
.detail-con-box {
  width: 100%;
  margin: auto;
  text-align: justify;
  line-height: 0.4rem;
  font-size: 1rem;
}
.detail-con-box-2 {
  width: 93%;
  margin: auto;
  text-align: justify;
  line-height: 0.4rem;
  font-size: 1rem;
  padding-bottom: 1rem
}
.detail-con-box-2 p{
    font-size: 0.45rem;
    line-height: 0.7rem;
}
.details-box {
  width: 100%;
  height: 1.3rem;
  position: fixed;
  bottom: 0;
  background: white;
  border-top: 1px solid #f5f6f8;
}
.details-box-pl {
  width: 65%;
  height: 0.95rem;
  line-height: 0.85rem;
  border: 1px solid #cccccc;
  background: #f5f6f8;
  border-radius: 50px;
  margin-top: 0.15rem;
  margin-left: 0.2rem;
  color: #cccccc;
  font-size: 0.4rem;
  text-indent: 20px;
  float: left;
}
.details-box-dp {
  width: 30%;
  height: 100;
  float: right;
}
.dp-sc {
  color: #cccccc;
}
.dp_sc i {
  font-size: 0.5rem;
  color: #cccccc;
}
.dp-pl {
}
.details-box-dp p {
  float: left;
  margin-left: 10px;
}
.details-box .pl {
}
.pl input {
  width: 150px;
  height: 30px;
  border: 1px solid #f5f6f8;
  border-radius: 20px;
}
.popup {
  position: fixed;
  bottom: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background: white;
  z-index: 999;
  top: 100vh;
  transition: 0.3s;
}
.popup-title {
  width: 100%;
  height: 1.5rem;
  line-height: 1.5rem;
  border-bottom: 1px solid #f5f6f8;
  font-size: 0.45rem;
  text-align: center;
}
.popup-title .left {
  width: 20%;
  height: 100%;
  float: left;
}
.popup-title .in {
  width: 60%;
  height: 100%;
  float: left;
}
.popup-title .right {
  width: 20%;
  height: 100%;
  float: right;
  text-align: center;
}
.details-pl {
  width: 100%;
  height: auto;
  padding-bottom: 1.45rem;
  margin-top: 1.2rem;
}
.pl-box {
  width: 100%;
  height: auto;
  background: white;
  /* border-bottom: 1px solid #f5f6f8;
  border-top: 1px solid #f5f6f8; */
  padding-top: 0.15rem;
  padding-bottom: 0.1rem
}
.pl-box{
  width: 100%;
  height:auto;
  overflow: hidden;
   border-bottom: 1px solid #f5f6f8;
  /* background: yellow */
}
.pl-box-one{
  width: 100%;
  height: 1.5rem;
  /* background: yellow */
}
.pl-box-two{
  width: 100%;
  height: auto;
  float: right;
}
.in-text{
  width: 80%;
  float: right;
  padding-bottom: 0.2rem;
  font-size: 0.4rem
}
.in-text span{
  width: 90%;
  display: block;
  text-align: justify
}
.pl-box-left {
  width: 20%;
  height: 100%;
  float: left;
}
.left-tx {
  width: 1.2rem;
  height: 1.2rem;
  border-radius: 50%;
  margin: 0.2rem auto;
}
.left-tx img {
  width: 100%;
  height: 100%;
  border-radius: 50%;
}
.pl-box-in {
}
.pl-box-in p {
  /* font-size: 0.5rem; */
}
.in-user {
  /* height: 1rem; */
  /* line-height: 1rem; */
  font-size: 0.48rem;
  padding-top: 0.1rem;
  padding-bottom: 0.02rem
}
.in-time{
  font-size: 0.35rem;
  color: #9ba6b2
}
</style>
