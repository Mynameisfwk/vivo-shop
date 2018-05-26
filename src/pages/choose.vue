<template>
  <div class="choose">
       <input type="text" placeholder="搜索" v-model="key">
        <Choose-Header title="选购手机"></Choose-Header>
        <div class="_choose_twoMain">
            <mt-navbar v-model="selected" >
                <mt-tab-item id="tab-container1">全部</mt-tab-item>
                <mt-tab-item id="tab-container2">Xplay系列</mt-tab-item>
                <mt-tab-item id="tab-container3">X系列</mt-tab-item>
                <mt-tab-item id="tab-container4">Y系列</mt-tab-item>
            </mt-navbar>

            <mt-tab-container v-model="selected" swipeable>
                <mt-tab-container-item id="tab-container1">
                   
                    <ul style="margin-top: 2px;">
                        <li class="_chooseList" v-for="(choose,index) in filterGoodses" :id="choose.id" @click="goDetails(choose.id)">
                            <img v-bind:src="choose.ImageOne" alt="图片">
                            <p>{{choose.name}}</p>
                            <p style="font-size: 0.3rem;">{{choose.nametwo}}</p>
                            <div>￥{{choose.Price}}</div>
                        </li>
                    </ul>

                     <div v-if="!filterGoodses.length">没有搜索到</div>
                </mt-tab-container-item>
                <mt-tab-container-item id="tab-container2">
                    <ul style="margin-top: 2px;">
                        <li class="_chooseList" v-for="(choose,index) in motos" :id="choose.id" @click="goDetails(choose.id)"> 
                            <img v-bind:src="choose.ImageOne" alt="图片">
                            <p>{{choose.name}}</p>
                            <p style="font-size: 0.3rem;">{{choose.nametwo}}</p>
                            <div>￥{{choose.Price}}</div>
                        </li>
                    </ul>
                </mt-tab-container-item>
                <mt-tab-container-item id="tab-container3">
                     <ul style="margin-top: 2px;">
                        <li class="_chooseList" v-for="(choose,index) in MotoZs" :id="choose.id" @click="goDetails(choose.id)"> 
                            <img v-bind:src="choose.ImageOne" alt="图片">
                            <p>{{choose.name}}</p>
                            <p style="font-size: 0.3rem;">{{choose.nametwo}}</p>
                            <div>￥{{choose.Price}}</div>
                        </li>
                    </ul>
                </mt-tab-container-item>
                <mt-tab-container-item id="tab-container4">
                    <ul style="margin-top: 2px;">
                        <li class="_chooseList" v-for="(choose,index) in z2s" :id="choose.id" @click="goDetails(choose.id)"> 
                            <img v-bind:src="choose.ImageOne" alt="图片">
                            <p>{{choose.name}}</p>
                            <p style="font-size: 0.3rem;">{{choose.nametwo}}</p>
                            <div>￥{{choose.Price}}</div>
                        </li>
                    </ul>
                </mt-tab-container-item>
            </mt-tab-container>
            
           
        </div>
  </div>
</template>


<script>
import axios from 'axios'
import ChooseHeader from '../common/header'
import { Navbar, TabItem } from 'mint-ui';
export default {
  name:"choose",
  data(){
      return{
        selected:"tab-container1",
        chooses:[],
        motos:[],
        MotoZs:[],
        z2s:[],
        key:""
      }
  },
  components:{
      ChooseHeader
  },
  created(){
      var _this=this
      axios.get("/static/ceshi.json").then(function(res){
          _this.chooses=res.data.data.chooses
          _this.motos=res.data.data.motos
          _this.MotoZs=res.data.data.MotoZs
          _this.z2s=res.data.data.z2s
      })
  },
  computed:{
        filterGoodses: function () {   // 过滤器
        var key = this.key;
        var chooses =this.chooses
        return chooses.filter(function (chooses,Price,name) {
          return chooses.name.toLowerCase().indexOf(key.toLowerCase()) != -1 ||chooses.Price.toLowerCase().indexOf(key.toLowerCase()) != -1
          /*
           *indexOf() 方法对大小写敏感！
           * 如果要检索的字符串值没有出现，则该方法返回 -1
           * 
           * toLowerCase() 方法用于把字符串转换为小写。
           * */

        })
      }
  },
  methods: {
     goDetails:function(id){
            this.$router.push({
                path:"goodDetail",
                query:{
                    id:id
                }
            })
            // this.$router.push({path:"goodDetail",query:{id:id}})
        }, 
  },
}
</script>

<style>
.choose{
    position: absolute;
    background: white;
    width: 100%;
    height: 100%;
    top: 0;
    bottom: 0;
    z-index:999;
}
._choose_header{
    width: 100%;
    z-index: 1;
    height: 1.3rem;
    line-height: 1.3rem;
    font-size: 12px;
    background: white;
    position: fixed;
    -webkit-box-shadow: 0 0 10px #cecece;
    box-shadow: 0 0 10px #cecece;
    text-align: center;
    font-size: 0.41rem;
}
._choose_header i{
    display: block;
    float: left;
    height: 50px;
    padding-left: 0.3rem;
    font-size: 0.71rem;
    color: black;
}
._choose_twoMain{
    margin-top: 1.32rem;
}
._chooseList{
    height: 6.3rem;
    background: white;
    float: left;
    box-sizing: border-box;
    width: 50%;
    border-right: 1px solid #F4F4F4;
    border-bottom: 1px solid #F4F4F4;
    float: left;
    margin-top: 1px;
    list-style: none;
}
._chooseList p{
    width: 94%;
    overflow: hidden;
    text-overflow: ellipsis;
    margin: auto;
    font-size: 0.35rem;
    text-align: center;
}
._chooseList div{
    text-align: center;
    color: red;
    margin-top: 10px;
}
._chooseList img{
    height: 3.2rem;
    width: 4rem;
    display: block;
    margin: auto;
    padding: 0.5rem;
}
</style>
