<template>
  <div >
    <div class="header">
        <div>资讯动态</div>
    </div>
    <div class="container2">
        <div class="wrapper-father">
            <div class="wrapper" ref="wrapper">
                <div class="content">
                    <li class="container-box" v-for="(list,index) in NewsContainer" @click="goNewsDetail(list.id)" v-if="list.is_show==1" >
                        <div class="container-title">{{list.title}}</div>
                        <div class="container-img">
                            <img :src="'http://www.vivo-admin.com/static/image/'+list.img" alt="图片">
                        </div>
                        <div class="container-con">{{list.abstract}}</div>
                        <div class="container-time">发布日期 {{list.time}}</div>
                    </li>
                    
                    

                </div>
            </div>
        </div>
       <News-Footer></News-Footer>
    </div>
        
  </div>
</template>

<script>
import axios from 'axios';
import NewsFooter from '../../pages/footer'
import BScroll from 'better-scroll'
export default {
    name:"information",
    components:{
        NewsFooter,
    },
    data(){
        return{
            NewsContainer:[],
        }
    },
    created(){
        var _this=this;
        axios.get("http://www.vivo-admin.com/news_data/").then(function(res) {
           _this.NewsContainer=res.data.data
        })
       
    },
    mounted(){
        this.$nextTick(()=>{
                this.scroll= new BScroll(this.$refs.wrapper,{
                    click:true,
                    scrollY:true,
                    scrollbar:{
                        // fade:false //显示滚动条
                        fade:true //不显示滚动条
                    }
                })
            })
    },
    methods: {
        goNewsDetail(id){
            this.$router.push({
                path:"view",
                query:{
                    id:id
                }
            })
        }
    }

  
}
</script>


<style lang="stylus" scoped>
                
.header{
    width 100%
    height 1.45rem
    line-height 1.45rem
    font-size: 0.45rem;
    text-align center
    background #fff
    position fixed
}
.container2{
   width 100%;
    height 15rem;
   background #ffffff;
   position relative;
   top 1.45rem;
}
.content li{
    width 100%
    height auto
    background white
    border-bottom: 1px dotted #CCCCCC
    padding-bottom 0.3rem;
    // margin-bottom 10px
    // width 100%;
    // height 2.3rem;
    // background red;
    // margin-bottom 10px
}
.wrapper-father{
    width 100%;
    height 100%
}
.wrapper{
    height 100%;
    overflow hidden;
    padding-bottom: 50px;

}
 .container-title{
    color: #505b63
    width: 95%
    margin: auto
    text-align: left
    font-size: 0.5rem
    height: 1.5rem
    line-height: 1.5rem
 }    
.container-img{
    width 95%
    height 4.3rem
    margin auto
}
.container-img img{
    width 100%
    height 100%
}
.container-con{
    width 95%;
    margin auto;
    line-height .5rem
    padding-top .3rem
    color #696969
    text-align justify
    font-size .3rem
}
           
.container-time{
    width: 95%;
    margin: auto;
    padding-top: .2rem
    font-size .3rem
    color #696969
}
          
          

 
</style>
