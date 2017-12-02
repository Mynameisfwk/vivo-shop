<template>
  <div class="news">
      <div class="newsHeader">
            <a href="#" @click="news">
                <i class="iconfont icon-552cc14536532"></i>
            </a>
            <span>新闻详情</span>
        </div>
        <div class="newsMain" v-for="(news,index) in list">
            <h3 class="newsTitle">{{news.title}}</h3>
            <span class="newsTime">{{news.time}}</span>
            <div style="margin-top: 0.6rem;">
                <div class="newsBox" v-for="box in news.boxs">
                    <p >{{box.p}}</p>
                    <img v-bind:src="box.img">
                </div>
            </div>
            
        </div>
        <div class="newsFooter"></div>
  </div>
</template>
<script>
export default {
  name:"news",
  data(){
      return{
        list:[]
      }
    },
    mounted:function(){
        this.getData()
    },
    methods:{
        getData:function(){
            var id=this.$route.query.id;
            var _this = this;
            this.$http.get("/static/information.json").then(function(res) {
                for (var i = 0; i < res.body.list.length; i++) {
                    if (res.body.list[i].id == id) {
                        _this.list.push(res.body.list[i])
                    }
                }
            })
        },
        news:function(){
            this.$router.go(-1)
        }
    },
}
</script>



<style>
.news{
    position: absolute;
    width: 100%;
    height: 100%;
    z-index: 999;
}
.newsHeader{
    position: fixed;
    width: 100%;
    -webkit-box-shadow: 0 0 10px #cecece;
    box-shadow: 0 0 10px #cecece;
    height: 1.3rem;
    line-height: 1.3rem;
    font-size: 0.41rem;
    padding-left: 0.3rem;
    background: white;
    top: 0;
    text-align: center;
}
.newsHeader i{
    display: block;
    float: left;
    height: 50px;
    font-size: 0.71rem;
    color: black;
}
.newsMain{
    margin-top: 0.1rem;
    background: white;
}
.newsTitle{
    width: 282px;
    margin: auto;
    text-align: center;
}
.newsTime{
    text-align: center;
    display: block;
    margin-top: 0.1rem;
}
.newsBox p{
    width: 296px;
    margin: auto;
    font-size: 0.44rem;
    line-height: 150%;
    font-family: 微软雅黑, sans-serif;
    margin-top: 0.3rem;
}
.newsBox img{
    width: 9.3rem;
    display: block;
    margin: auto;
}

</style>
