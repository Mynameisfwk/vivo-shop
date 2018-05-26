<template>
  <div >
    <Collection-Header title="我的收藏"></Collection-Header>
    <div class="box">
        <div class="shop_1">
            <p v-for="(list,index) in item" class="list"  :key="index" @click="btn(index)">
                <span :class="{active:index==collectionIndex}">{{list.name}}</span>
            </p>
        </div>
        <div class="shop_2_box">
            <div class="shop_2" v-show="collectionIndex===0"  v-for="(list,index) in collections" :key="index">
                <div class="shop-1">
                    <p class="left">库存充足</p>
                    <p class="right" @click="cancel(index)">取消收藏</p>
                </div>
                <div class="shop-2">
                    <p class="img">
                        <img :src="list.img">
                    </p>
                    <p class="text">
                        <span class="name">{{list.name}}</span>
                        <span class="price">¥{{list.price}}</span>
                    </p>

                    <p class="go" @click="goDetalis(list.id)">
                        <span>去购买</span>
                    </p>
                    
                </div>
            </div>
        </div>
       
        
        <div v-show="collectionIndex===1" v-for="(list,index) in article"  @click="goNewsDetail(list.id)">
           <div class="article" >
                <p class="tltie">{{list.title}}</p>
                <p class="con">{{list.newsCon}}</p>
                <p class="time">收藏时间：{{list.currentdate}}</p>
                <i @click.stop="del(index)" class="iconfont icon-huishouzhan7"></i>
           </div>
        </div>
    </div>
  </div>
</template>

<script>
import CollectionHeader from '../../common/Header'
import { mapState, mapMutations, mapGetters } from "vuex";
import { MessageBox } from 'mint-ui';
export default {
    name:"MyCollection",
    data(){
        return{
            collectionIndex:0,
            item:[
                {
                    name:"商品"
                },
                {
                    name:"文章"
                }
            ]
        }
    },
    computed: {
    collections() {
      return this.$store.state.collections;
      
    },
    article(){
        return this.$store.state.article;
    },
    ...mapGetters(
            ["this.$store.state.collections"],
            ["this.$store.state.article"]
        ),
 
    },
    components:{
        CollectionHeader
    },
    methods: {
           ...mapMutations(['del','cancel']),
        btn(index){
           this.collectionIndex=index
        },
        goNewsDetail(id){
           this.$router.push({
               path:"newsDetail",
               query:{
                   id:id
               }
           })
        },
        goDetalis(id){
            this.$router.push({
                path:"goodDetail",
                query:{
                    id:id
                }
            })
        }
    },
  
}
</script>

<style lang="stylus" scoped>
.box
    padding-top 1.45rem
.active
    color #199cfe
    border-bottom: 2px solid #199cfe;
.list
    width 50%
    height 1rem
    line-height 1rem
    float left
    text-align center
    span 
        width 25%
        height 100%
        font-size .38rem
        display block
        margin auto
.shop_1
    width 100%
    height 1rem
    background #ffffff
    margin-bottom 1px
.shop_2
    width 100%
    height 4rem
    margin-bottom .18rem
    .shop-1
        width 100%
        height 1.3rem
        background #ffffff
        border-bottom 1px solid #eee
        .left
            float left
            margin-left .5rem
            line-height 1.3rem
            font-size .35rem
            color #17af58
        .right 
            float right
            margin-right .35rem
            line-height 1.3rem
            font-size .35rem
            color #666
    .shop-2
        width 100%
        height 2.7rem
        background #ffffff
        .img
            width 30%
            height 100%
            float left
            img 
                display block
                width 2.4rem
                margin .1rem .3rem
        .text
            width 40%
            height 100%
            float left
            display flex
            flex-direction column
            .name
                font-size .4rem
                margin .2rem .3rem
                
            .price
                color red
                font-weight 500
                font-size .4rem
                margin .1rem .3rem
        .go
            width 30%
            height 100%
            float left
            position relative
            span 
                display block
                width 90%
                height 0.8rem
                line-height .8rem
                background red
                text-align center
                color #ffffff
                border-radius 30px
                position absolute
                bottom .4rem
.article
    width 100%
    height 3.1rem
    background #ffffff
    border-bottom 1px solid #eee
    text-align justify
    i 
        float right
        margin 0.2rem 0.45rem
        font-size .49rem
    p
        width 90%
        margin auto
        display -webkit-box
        -webkit-box-orient vertical
        -webkit-line-clamp 2
        overflow hidden
    .time
        width 51%
        margin 0.2rem 0.55rem
        float left
    .tltie
        font-size .48rem
        padding-top .38rem

</style>
