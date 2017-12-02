<template>
  <div class="Home">
      <div class="Homeheader"><i class="iconfont icon-VIVO"></i></div>
      <div class="official"><img src="/static/img/official.png" alt="图片" style="width: 100%;height:100%"></div>
      <div class="swipe">
        <mt-swipe :auto="4000">
          <mt-swipe-item><router-link to="goodDetail?id=4"><img src="https://shopstatic.vivo.com.cn/vivoshop/commodity/20171113/20171113232814110405_original.jpg" alt="轮播图"></router-link></mt-swipe-item>
          <mt-swipe-item><router-link to="choose"><img src="https://shopstatic.vivo.com.cn/vivoshop/commodity/20171122/20171122174336166279_original.jpg" alt="轮播图"></router-link></mt-swipe-item>
        </mt-swipe>
      </div>
      <div class="HomeList">
        <ul >
          <li><div @click="xuangou"><img src="/static/img/xuangou.jpg" alt="选购"></div></li>
          <li><div  @click="parts"><img src="/static/img/peijian.jpg" alt="配件"></div></li>
          <li><div @click="btn"><img src="/static/img/pingbao.jpg" alt="屏保"></div></li>
          <li><div @click="btn"><img src="/static/img/dingzhi.jpg" alt="定制"></div></li>
        </ul>
      </div>
      <div class="main">
        <span >爆款产品</span>
        <div class="main_box">
          <ul><!-- <img src="../assets/list1.jpg" alt="商品"> -->
            <li v-for="(todo,index) in todos" :id="todo.id"  @click="open(todo.id)" class="list">
                <div class="image">
                  <img v-bind:src="todo.img" alt="图片">
                </div>
                <div class="name">{{todo.name}}</div>
                <div class="nametwo">{{todo.nametwo}}</div>
                <div class="Price">￥{{todo.Price}}</div> 
            </li>
          </ul>
        </div>
      </div>
  </div>
  </div>  
</div>
    
</template>

<script>
import { mapState,mapMutations,mapGetters  } from 'vuex';
import { Swipe, SwipeItem } from 'mint-ui';
import { MessageBox } from 'mint-ui';
export default {
  name:"Home",
  data(){
    return{
      todos:[]
    }
  },
  mounted:function(){
    this.getData();
  },
  methods:{
    getData:function(){
      var _this=this;
      this.$http.get("/static/Home.json").then(function(res) {
        for (var i = 0, len = res.body.todos.length; i < len; i++) {
          var selData = res.body.todos[i];
          var part = res.body.todos[i].name;
          _this.todos.push(selData);
        }
      })
    },
    open:function(id){
    this.$router.push({path:"goodDetail",query:{id:id}})
  },
    xuangou:function(){
      this.$router.push({path:"choose"})
    },
    parts:function(){
      this.$router.push({path:"parts"})
    },
    btn:function(){
      MessageBox('提示', 'Vue的第一个项目能给个star么？Thank you');
    }
  },
}
</script>

<style>
  .Home{
    border-bottom: 10px;
  }
  .Homeheader i{
    font-size: 0.55rem;
  }
   .Homeheader{
     position: fixed;
     width: 100%;
     top: 0;
     z-index: 1;
     height: 1.3rem;
     line-height: 1.3rem;
     font-size: 0.35rem;
     padding-left: 0.3rem;
     background: white;
   }
   .swipe{
     height: 6.5rem;
     margin-top: 1px;
   }
   .swipe img{
      width: 100%;
      height: 6.5rem;
  }
  .main_box{
    /* margin-bottom: 34px;  */
    height: 339px;
    
  }
  .main span{
    display: block;
    height: 1.3rem;
    background: white;
    font-size: 0.35rem;
    line-height: 1.3rem;
    padding-left: 0.3rem;
  }
  .list {
    height: 7.3rem;
    background: white;
    float: left;
    box-sizing:border-box;
    width:50%;
    border-right: 1px solid #F4F4F4;
    border-top: 1px solid #cccccc;
  }
  .list span{
    display: block;
    color: red;
    padding-left: 0.5rem;
    padding-top: 0.1rem;
  }
  .main_box ul{
      overflow: hidden;
      margin-bottom: 1.5rem;
  }
  ul li{
    list-style: none;
  }
  .name{
    width: 80%;
    overflow: hidden;
    white-space: nowrap;
    text-overflow: ellipsis;
    margin: auto;
    font-size: 0.37rem;
    padding-top: 0.8rem;
    font-weight: 800;
    text-align: center;
  }
    .nametwo{
      font-size: 0.01rem;
      text-align: center;
      padding-top: 0.15rem;
      font-family: "微软雅黑"
    }
    .Price{
      font-size: 0.33rem;
      color: red;
      margin: auto;
      /* padding: 0.1rem 0.9rem; */
      text-align: center;
      padding-top: 0.48rem;
      /* font-weight: bold; */
      font-size: 0.38rem;

    }
    .image{
      width: 100%;
      height: 4rem;
      background: white;
    }
    .image img{
      height: 3.3rem;
      width: 3.5rem;
      display: block;
      margin: auto;
      padding-top: 0.9rem;
    }
    .HomeList{
      width: 100%;
      height: 2.5rem;
      background: white;
      border-bottom: 1px solid #cccccc;
    }
    .HomeList>ul>li{
      width: 25%;
    }
    .HomeList>ul>li div{
      /* width: 60px; */
      width: 1.7rem;
      /* height: 58px; */
      height: 1.68rem;
      margin: auto;
    }
    .HomeList>ul>li img{
      display: block;
      width: 100%;
      height: 100%;
      margin: 15px auto;
    }
    .HomeList>ul>li{
      float: left;
      margin: auto;
    }
    .official{
      width: 100%;
      height: 0.8rem;
      background: white;
      margin-top: 1.33rem;
    }
</style>

