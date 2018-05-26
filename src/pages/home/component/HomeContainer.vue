<template>
  <div class="main">
        <h2>爆款产品</h2>
        <div class="main_box">
          <ul>
            <img src="https://shopstatic.vivo.com.cn/vivoshop/commodity/20180405/20180405101609299910_original.jpg" width="100%">
            <li v-for="(todo,index) in todos" :key="todo.id"   @click="open(todo.id)" >
              <div class="list">
                <div class="image">
                  <img v-lazy="todo.homeImg" alt="图片">
                </div>
                <div class="name">{{todo.homeName}}</div>
                <div class="nametwo">{{todo.homeNametwo}}</div>
                <div class="Price">￥{{todo.homePrice}}</div> 
              </div>
            </li>
          </ul>
        </div>
      </div>
</template>

<script>
import { mapState, mapMutations, mapGetters } from "vuex";
   export default{
       name:"HomeContainer",
       props:{
           todos:Array
       },
       methods: {
        open:function(id){
            this.$router.push({path:"goodDetail",query:{id:id}})
        },
       },
   }
</script>

<style lang="stylus" scoped>
  .main h2
    display block;
    height 1.3rem;
    background white;
    font-size 0.35rem;
    line-height 1.3rem;
    padding-left 0.3rem
    

 .main_box{
    height: 339px;
    
  }
  .list {
    height: 6.3rem;
    background: white;
    float: left;
    width:50%;
    border-right: 1px solid #f4f4f4;
    border-top: 1px solid #f4f4f4;
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
    font-weight: 800;
    text-align: center;
  }
    .nametwo{
      font-size: 0.01rem;
      text-align: center;
      padding-top: 0.15rem;
    }
    .Price{
      font-size: 0.33rem;
      color: red;
      margin: auto;
      /* padding: 0.1rem 0.9rem; */
      text-align: center;
      padding-top: 0.28rem;
      /* font-weight: bold; */
      font-size: 0.38rem;

    }
    .image{
      width: 100%;
      height: 3.3rem;
      background: white;
    }
    .image img{
      height: 3rem;
      width: 3.5rem;
      display: block;
      margin: auto;
      margin-top .5rem
    }
</style>