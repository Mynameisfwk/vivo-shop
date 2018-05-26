<template>
<div>
<Classify-Header title="商品分类"></Classify-Header>
  <div class="calssify-con" >
        <div class="calssify-left" ref="wrapper">
            <ul class="calssify-left-ul" >
                <li v-for="(list,index) in left" :key="index" @click="qiehuan(index)" :class="{active:index===classifyIndex}">
                    {{list.name}}
                </li>
            </ul>
        </div>
        <div class="calssify-rigth" ref="wrapper2">
            <ul class="calssify-left-ul">
                <li v-for="(list,index) in rigth.ce" :key="index" @click="goDetails(list.id)">
                     <img v-lazy="list.img">
                    <span>{{list.name}}</span>
                </li>
            </ul>
        </div>
    </div>
<v-footer></v-footer>
</div>
  
</template>

<script>
import BScroll from 'better-scroll'
import ClassifyHeader from '../../common/header'
import footer from '../../pages/footer'
import axios from 'axios'
import { mapGetters } from 'vuex';
export default {
    data(){
        return{
            left:[],
            rigth:[],
            list:[],
            ce:[],
            key2:"",
            classifyIndex:0
        }
    },
    components:{
        "v-footer":footer,
        ClassifyHeader
    },
//    mounted(){
//       this.$nextTick(() => {
//         this.scroll = new BScroll(this.$refs.wrapper, {})
//         this.scroll = new BScroll(this.$refs.wrapper2, {})
//       })
//   },
    computed:{
        ...mapGetters(
            ["this.$store.state.sindex"]
        )
    },
    created(){
        var _this=this
        axios.get("/static/fel.json").then(function(res){
                // console.log(res.data.data.rigth[0])
                _this.left=res.data.data.left
                _this.list=res.data.data.rigth
                _this.rigth=_this.list[0]
        })
    },
  methods: {
      qiehuan(index){
          var _this=this
          _this.classifyIndex=index
          _this.rigth= _this.list[index]
      },
      goDetails(id){
          console.log(id)
          this.$router.push({
              path:"goodDetail",
              query:{id:id}
          })
      }
  }
 
}
</script>

<style lang="stylus" scoped>
.active
    border-left 2px solid
    background #ffffff
    color #199cfe   
.calssify-con
    display flex
    overflow hidden
    position absolute
    width 100%
    top 0
    bottom: 0
    padding-top 1.45rem
    .calssify-left
        flex: 0 0 2.9rem;
        width: 4rem;
        height 100%
        background: #f6f6f6;
        // border-right: 10px solid #f6f6f6;
        margin-bottom: 1.51rem;
        li
            height 1.3rem
            line-height 1.3rem
            text-align center
    .calssify-rigth 
        flex: 1;
        height 100%
        background white
        margin-bottom 1.51rem
        ul
            display flex
            flex-wrap wrap
            li
                display flex
                flex-direction column
                text-align center
                width 33%
                margin-top .3rem
                float left
                img 
                    width 1.98rem
                    display block
                    margin auto
                span 
                    color #999
                    line-height .9rem
</style>