<template>
    <div >
        <div class="Homeheader">
            <i class="iconfont icon-VIVO"></i>
        </div>
        <div class="official"></div>
        <div class="home-swiper">
            <mt-swipe :auto="4000">
                <mt-swipe-item >
                    <img src="https://shopstatic.vivo.com.cn/vivoshop/commodity/20180418/20180418104131830678_original.jpg">
                </mt-swipe-item>
            </mt-swipe>
        </div>
        <div class="HomeList">
            <ul>
                <li v-for="(list,index) in routers" :key='index'>
                    <div>
                        <router-link :to="list.url">
                            <img :src="list.img" alt="">
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
                    <li>
                        <div class="list">
                            <div class="image">
                                <img src="/static/img/list1.jpg" alt="图片">
                            </div>
                            <p class="name">20</p>
                            <p class="nametwo">哈哈</p>
                            <p class="Price">￥100</p>
                        </div>
                    </li>
                </ul>
            </div>
            </div>

             <!-- <div class="main-box">
                 <h2>精品手机</h2>
                <div class="main_box">
                <ul>
                    <li>
                        <div class="list">
                            <div class="image">
                                <img src="/static/img/list1.jpg" alt="图片">
                            </div>
                            <p class="name">手机名称</p>
                            <p class="nametwo">介绍</p>
                            <p class="Price">￥价格</p>
                        </div>
                    </li>
                </ul>
            </div>
            </div> -->

             <!-- <div class="main-box">
                 <h2>精品配件</h2>
                <div class="main_box">
                <ul>
                    <li>
                        <div class="list">
                            <div class="image">
                                <img src="/static/img/list1.jpg" alt="图片">
                            </div>
                            <p class="name">手机名称</p>
                            <p class="nametwo">介绍</p>
                            <p class="Price">￥价格</p>
                        </div>
                    </li>
                </ul>
            </div>
            </div> -->
          
        </div>
      
        <Home-Footer></Home-Footer>
    </div>
    </div>
    </div>
</template>
<script>
// import { mapState,mapMutations,mapGetters  } from 'vuex';
// import { Swipe, SwipeItem } from 'mint-ui';
// import { MessageBox } from 'mint-ui';
import HomeFooter from '../../pages/footer'
// import axios from 'axios';
// import { home_data,home_banner } from "../../assets/js/api.js";
export default {
  name:"Home",
  data(){
    return{
        routers: [{
            'img': '/static/img/xuangou.jpg',
            'src': '/collection'
        },{
            'img': '/static/img/peijian.jpg',
            'src': '/parts'
        },{
            'img': '/static/img/pingbao.jpg',
            'src': '/'
        },{
            'img': '/static/img/dingzhi.jpg',
            'src': '/'
        }]
    }
  },
  components:{
    HomeFooter
  },
  computed:{
      
  },
    created(){
       this.$axios.get('../../static/ceshi.json').then((res) => {
        console.log(res)
    });

    
    //   axios({
    //     url: "../../../../data.json",
    //     method: "post",
    //     // params: {
    //     //   id: list.id,
    //     //   token: cookier_token
    //     // }
    //   })
    //     .then(res => {
    //         console.log(res)
    //     //   if (res.data.code == 0) {
    //     //     Toast({
    //     //       message: "取消成功",
    //     //       duration: 950
    //     //     });
    //     //   } else if (res.data.code == 1) {
    //     //     Toast({
    //     //       message: "收藏成功",
    //     //       duration: 950
    //     //     });
          
    //     //   }
    //     })
    //     .catch(err => {
    //       //异常操作
    //     });
    },
  methods:{
    btn:function(){
      MessageBox('提示', 'Vue的第一个项目能给个star么？Thank you');
    }
  }
}
</script>

<style scoped>
    @import url('home.less');
</style>

