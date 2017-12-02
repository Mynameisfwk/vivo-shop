<template>
  <div class="parts">
      <div class="partsHeader">
            <a href="#" @click="parts">
                <i class="iconfont icon-552cc14536532"></i>
            </a>
            <span>选购配件</span>
        </div>
      <div class="partsMain">
            <mt-navbar v-model="selected">
                <mt-tab-item id="tab-container1">全部</mt-tab-item>
                <mt-tab-item id="tab-container2">充电器</mt-tab-item>
                <mt-tab-item id="tab-container3">保护膜</mt-tab-item>
                <mt-tab-item id="tab-container4">耳机音响</mt-tab-item>
            </mt-navbar>

            <mt-tab-container v-model="selected" swipeable>
                <mt-tab-container-item id="tab-container1">
                    <ul style="margin-top: 2px;">
                        <li class="_partsList" v-for="(parts,index) in list" @click="open(parts.id)">
                            <img v-bind:src="parts.image" alt="图片">
                            <h2>{{parts.name}}</h2>
                            <p>{{parts.nametwo}}</p>
                            <div>￥{{parts.price}}</div>
                        </li>
                    </ul>
                </mt-tab-container-item>

                <mt-tab-container-item id="tab-container2">
                    <ul style="margin-top: 2px;">
                        <li class="_partsList" v-for="(parts,index) in charger" @click="open(parts.id)">
                            <img v-bind:src="parts.image" alt="图片">
                            <h2>{{parts.name}}</h2>
                            <p>{{parts.nametwo}}</p>
                            <div>￥{{parts.price}}</div>
                        </li>
                    </ul>
                </mt-tab-container-item>

                <mt-tab-container-item id="tab-container3">
                    <ul style="margin-top: 2px;">
                        <li class="_partsList" v-for="(parts,index) in protect" @click="open(parts.id)">
                            <img v-bind:src="parts.image" alt="图片">
                            <h2>{{parts.name}}</h2>
                            <p>{{parts.nametwo}}</p>
                            <div>￥{{parts.price}}</div>
                        </li>
                    </ul>
                </mt-tab-container-item>

                <mt-tab-container-item id="tab-container4">
                    <ul style="margin-top: 2px;">
                        <li class="_partsList" v-for="(parts,index) in headset" @click="open(parts.id)">
                            <img v-bind:src="parts.image" alt="图片">
                            <h2>{{parts.name}}</h2>
                            <p>{{parts.nametwo}}</p>
                            <div>￥{{parts.price}}</div>
                        </li>
                    </ul>
                </mt-tab-container-item>
            </mt-tab-container>
      </div>
  </div>
</template>

<script>
import { Navbar, TabItem } from 'mint-ui';
export default {
    data(){
        return{
            selected:"tab-container1",
            list:[],
            charger:[],
            protect:[],
            headset:[]
        }
    },
    mounted:function(){
        this.getData(),
        this.chargerData(),
        this.protectData(),
        this.HeadsetData()
    },
    methods:{
        getData:function(){
            var _this=this;
            this.$http.get("/static/parts.json").then(function(res){
              for(var i=0,len=res.body.list.length;i<len;i++){
                  var selData=res.body.list[i];
                  var part=res.body.list[i].name;
                  _this.list.push(selData)
              }
          })
        },

        chargerData:function(){
            var _this=this;
            this.$http.get("/static/parts.json").then(function(res){
              for(var i=0,len=res.body.charger.length;i<len;i++){
                  var selData=res.body.charger[i];
                  var part=res.body.charger[i].name;
                  _this.charger.push(selData)
              }
          })
        },

        protectData:function(){
            var _this=this;
            this.$http.get("/static/parts.json").then(function(res){
              for(var i=0,len=res.body.protect.length;i<len;i++){
                  var selData=res.body.protect[i];
                  var part=res.body.protect[i].name;
                  _this.protect.push(selData)
              }
          })
        },

        HeadsetData:function(){
            var _this=this;
            this.$http.get("/static/parts.json").then(function(res){
              for(var i=0,len=res.body.headset.length;i<len;i++){
                  var selData=res.body.headset[i];
                  var part=res.body.headset[i].name;
                  _this.headset.push(selData)
              }
          })
        },
        parts:function(){
            this.$router.go(-1)
        },
        open:function(id){
            this.$router.push({path:"goodDetail",query:{id:id}})
        },
    }
}
</script>


<style>
.parts{
    position: absolute;
    background: white;
    width: 100%;
    height: 100%;
    top: 0;
    bottom: 0;
    z-index: 999;
} 
.partsHeader{
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
.partsHeader i{
    display: block;
    float: left;
    height: 50px;
    padding-left: 0.3rem;
    font-size: 0.71rem;
    color: black;
}
.partsMain{
    margin-top: 1.32rem;
}

._partsList{
    height: 7.8rem;
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

._partsList img{
    height: 3.6rem;
    width: 4rem;
    display: block;
    margin: auto;
    padding: 0.5rem;
}
._partsList h2{
    width: 90%; 
    text-align: center;
    white-space: nowrap;
    overflow: hidden;
    -o-text-overflow: ellipsis;
    text-overflow: ellipsis;
    font-size: .4rem;
    margin: auto;
}

._partsList p{
    width: 3.8rem;
    margin: 0 auto;
    padding: 0;
    height: 2.6em;
    font-size: .22rem;
    line-height: 1.4;
    color: #000;
    text-align: center;
    word-break: break-all;
    overflow: hidden;
    padding-top: 0.2rem;
}
._partsList div{
    text-align: center;
    color: red;
    padding-top: 0.6rem;
}
</style>
