<template>
    <div >
        <div class="Homeheader">
            <i class="iconfont icon-VIVO"></i>
        </div>
        <div class="official"></div>
        <div class="home-swiper">
            <mt-swipe :auto="4000">
                <mt-swipe-item v-for="(list,index) in swiper" :key="index" v-if="list.is_show==1">
                    <img :src="'http://www.kuangjiahu.top/public/static/image/'+list.img">
                </mt-swipe-item>
            </mt-swipe>
        </div>
        <div class="HomeList">
            <ul>
                <li>
                    <div>
                        <router-link to="/collection">
                            <img src="/static/img/xuangou.jpg" alt="选购">
                        </router-link>
                    </div>
                </li>

                 <li>
                    <div>
                        <router-link to="/parts">
                            <img src="/static/img/peijian.jpg" alt="配件">
                        </router-link>
                    </div>
                </li>

                 <li>
                    <div>
                        <router-link to="/">
                            <img src="/static/img/pingbao.jpg" alt="屏保">
                        </router-link>
                    </div>
                </li>

                 <li>
                    <div>
                        <router-link to="/">
                            <img src="/static/img/dingzhi.jpg" alt="选购">
                        </router-link>
                    </div>
                </li>
            </ul>
        </div>
        <div class="main">
            
            <div class="main-box" >
                 <h2>热卖专区</h2>
                <div class="main_box">
                <ul>
                    <li v-for="(todo,index) in todos" :key='todo.index'  @click='goDetail(todo.id)' v-if="todo.is_show==1">
                        <router-link :to="{ name: 'shopDetail', query: { id: todo.id }}">
                            <div class="list" v-if="todo.sy_zs==1">
                                <div class="image">
                                    <!-- <img v-lazy="todo.homeImg" alt="图片"></div> -->
                                    <img :src="todo.fm_img" alt="图片">
                                </div>
                                <p class="name">{{todo.name}}</p>
                                <p class="nametwo">{{todo.jieshao}}</p>
                                <p class="Price">￥{{todo.price}}</p>
                            </div>
                        </router-link>
                    </li>
                </ul>
            </div>
            </div>

             <div class="main-box">
                 <h2>精品手机</h2>
                <div class="main_box">
                <ul>
                    <li v-for="(todo,index) in todos" :key='todo.index' @click='goDetail(todo.id)'  v-if="todo.is_show==1">
                        <router-link :to="{ name: 'shopDetail', query: { id: todo.id }}">
                            <div class="list"  v-if="todo.sy_zs==2">
                                <div class="image">
                                    <!-- <img v-lazy="todo.homeImg" alt="图片"></div> -->
                                    <img :src="todo.fm_img" alt="图片">
                                </div>
                                <p class="name">{{todo.name}}</p>
                                <p class="nametwo">{{todo.jieshao}}</p>
                                <p class="Price">￥{{todo.price}}</p>
                            </div>
                        </router-link>
                    </li>
                </ul>
            </div>
            </div>

             <div class="main-box">
                 <h2>精品配件</h2>
                <div class="main_box">
                <ul>
                    <li v-for="(todo,index) in todos" :key='todo.index' v-if="todo.is_show==1"  @click='goDetail(todo.id)'>
                        <router-link :to="{ name: 'shopDetail', query: { id: todo.id }}">
                            <div class="list" v-if="todo.sy_zs==3">
                                <div class="image">
                                    <!-- <img v-lazy="todo.homeImg" alt="图片"></div> -->
                                    <img :src="todo.fm_img" alt="图片">
                                </div>
                                <p class="name">{{todo.name}}</p>
                                <p class="nametwo">{{todo.jieshao}}</p>
                                <p class="Price">￥{{todo.price}}</p>
                            </div>
                        </router-link>
                    </li>
                </ul>
            </div>
            </div>
          
        </div>
      
        <Home-Footer></Home-Footer>
    </div>
    </div>
    </div>
</template>
<script>
import { mapState,mapMutations,mapGetters  } from 'vuex';
import { Swipe, SwipeItem } from 'mint-ui';
import { MessageBox } from 'mint-ui';
import HomeFooter from '../../pages/footer'
import axios from 'axios';
import { home_data,home_banner } from "../../assets/js/api.js";
export default {
  name:"Home",
  data(){
    return{
      todos:[],
      swiper:[],
      fm_img:"https://shopstatic.vivo.com.cn/vivoshop/commodity/20180418/20180418104131830678_original.jpg",

    }
  },
  components:{
    HomeFooter
  },
  computed:{
      
  },
  created(){
      
      var _this=this;
        axios.get(home_data).then(function(res) {
           _this.todos=res.data.data
        })

        axios.get(home_banner).then(function(res) {
            _this.swiper=res.data.data
        })
  },
  methods:{
    btn:function(){
      MessageBox('提示', 'Vue的第一个项目能给个star么？Thank you');
    }
  }
}
</script>

<style scoped>
  .Home {
	border-bottom: 10px;
    width: 100%;
    height: 100%;
    position: relative;
    background: white
}

.Homeheader i {
	font-size: 0.55rem;
	color: white;
	text-align: center;
	display: block;
}

.Homeheader {
	position: fixed;
	width: 100%;
	top: 0;
	z-index: 1;
	height: 1.45rem;
	line-height: 1.45rem;
	font-size: 0.35rem;
     /* padding-left: 0.3rem; */
	background: black;
}

.official {
	width: 100%;
	height: 0.8rem;
	background: white;
	margin-top: 1.45rem;
	background: url('/static/img/official.png') no-repeat;
	background-size: 100% 100%;
}

.home-swiper {
	margin-top: 1px;
	height: 6.9rem
}

.home-swiper img {
	width: 100%;
	height: 6.9rem
}

.HomeList {
	width: 100%;
	height: 2rem;
	background: white;
	border-bottom: 1px solid #f4f4f4;
	display: flex;
	justify-content: center;
	flex-direction: column;
}

.HomeList li {
	width: 25%;
	height: 100%;
	float: left;
	margin: auto;
}

.HomeList li div {
	width: 1.58rem;
	height: 1.59rem;
	margin: auto;
}

.HomeList li img {
	display: block;
	width: 100%;
	height: 100%
}

.main h2 {
	display: block;
	height: 1.6rem;
	background: #f7f7f7;
	font-size: 0.49rem;
	line-height: 1.6rem;
	color: #333;
	text-align: center;
}

.main h2::before,
.main h2::after {
	position: relative;
	margin: 0 .12rem;
	display: inline-block;
	content: ' ';
	height: 1px;
	width: .4rem;
	background-color: #9c9c9c;
	top: -0.16rem;
}

.main_box {
	/* height: 339px; */
    height: auto;
}

.list {
	/* height: 4.7rem; */
    height: auto;
	background: white;
	float: left;
	width: 50%;
	border-right: 1px solid #f4f4f4;
	border-top: 1px solid #f4f4f4;
    padding-bottom: 0.25rem
}

.list span {
	display: block;
	/* color: red; */
	/* padding-left: 0.5rem;
	padding-top: 0.1rem; */
}
.main{
    margin-bottom: 1.6rem;
}

.main_box ul {
	overflow: hidden;
	/* margin-bottom: 1.5rem; */
}

ul li {
	list-style: none;
}

.Price {
    margin: auto;
    text-align: center;
    font-size: 0.38rem;
    color: #f81200;
    font-weight: 500;
    padding-top: 0.8rem;
    padding-bottom: 0.2rem;
}

.name {
	width: 80%;
	height: 0.64rem;
	line-height: 0.5rem;
	overflow: hidden;
	white-space: nowrap;
	text-overflow: ellipsis;
	margin: auto;
	font-size: 0.38rem;
	font-weight: 800;
	text-align: center;
}

.nametwo {
	/* height: 0.48rem; */
	font-size: 0.29rem;
	text-align: center;
    /* padding-top: 0.2rem */
}

.image {
    width: 100%;
    background: white;
    padding-top: 0.2rem;
    padding-bottom: 0.3rem;
}

.image img {
	width: 2.48rem;
    height: 2.6rem;
    display: block;
    margin: auto;
    margin-top: .4rem;
    margin-bottom: .2rem;
}
</style>

