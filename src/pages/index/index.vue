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
                    <router-link :to="list.url">
                        <img :src="list.img" alt="">
                    </router-link>
                </li>
            </ul>
        </div>
        <div class="main">
            <div class="main-box" >
                <h2>热卖专区</h2>
                <div class="main_box">
                <ul>
                    <li v-for="(list,index) in shopListData" :key='index' @click="jumpDetails(list)">
                        <div class="list" >
                            <div class="image">
                                <img :src="list.img_url" alt="图片">
                            </div>
                            <p class="name">{{list.name}}</p>
                            <p class="nametwo">{{list.content}}</p>
                            <p class="Price">￥ {{list.price}}</p>
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
      
        <v-footer></v-footer>
    </div>
    </div>
    </div>
</template>
<script>
import footer from "@/components/footer/index";
export default {
  name: "index",
  data() {
    return {
      routers: [
        {
          img: "/static/img/xuangou.jpg",
          src: "/collection"
        },
        {
          img: "/static/img/peijian.jpg",
          src: "/parts"
        },
        {
          img: "/static/img/pingbao.jpg",
          src: "/"
        },
        {
          img: "/static/img/dingzhi.jpg",
          src: "/"
        }
      ],
      shopListData: []
    };
  },
  components: {
    'v-footer': footer
  },

  created() {
    this.homeShopListData();
  },

  methods: {
    jumpDetails(list) {
      this.$router.push({
        path: "detail",
        query: {
          id: list.id
        }
      });
    },

    homeShopListData() {
      this.$axios.get("../../static/ceshi.json").then(res => {
        this.shopListData = res.data.data.home;
      });
    },

    btn: function() {
      MessageBox("提示", "Vue的第一个项目能给个star么？Thank you");
    }
  }
};
</script>

<style scoped>
@import url("index.less");
</style>

