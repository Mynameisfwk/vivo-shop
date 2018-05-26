<template>
  <div class="parts">
       <Parts-Header title="选购配件"></Parts-Header>
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
                        <li class="_partsList" v-for="(parts,index) in list" @click="goDetails(parts.id)">
                            <img v-bind:src="parts.homeImg" alt="图片">
                            <h2>{{parts.homeName}}</h2>
                            <p>{{parts.homeNametwo}}</p>
                            <div>￥{{parts.homePrice}}</div>
                        </li>
                    </ul>
                </mt-tab-container-item>

                <mt-tab-container-item id="tab-container2">
                    <ul style="margin-top: 2px;">
                        <li class="_partsList" v-for="(parts,index) in charger" @click="goDetails(parts.id)">
                            <img v-bind:src="parts.homeImg" alt="图片">
                            <h2>{{parts.homeName}}</h2>
                            <p>{{parts.homeNametwo}}</p>
                            <div>￥{{parts.homePrice}}</div>
                        </li>
                    </ul>
                </mt-tab-container-item>

                <mt-tab-container-item id="tab-container3">
                    <ul style="margin-top: 2px;">
                        <li class="_partsList" v-for="(parts,index) in protect" @click="goDetails(parts.id)">
                            <img v-bind:src="parts.homeImg" alt="图片">
                            <h2>{{parts.homeName}}</h2>
                            <p>{{parts.homeNametwo}}</p>
                            <div>￥{{parts.homePrice}}</div>
                        </li>
                    </ul>
                </mt-tab-container-item>

                <mt-tab-container-item id="tab-container4">
                    <ul style="margin-top: 2px;">
                        <li class="_partsList" v-for="(parts,index) in headset" @click="goDetails(parts.id)">
                            <img v-bind:src="parts.homeImg" alt="图片">
                            <h2>{{parts.homeName}}</h2>
                            <p>{{parts.homeNametwo}}</p>
                            <div>￥{{parts.homePrice}}</div>
                        </li>
                    </ul>
                </mt-tab-container-item>
            </mt-tab-container>
      </div>
  </div>
</template>

<script>
import axios from "axios"
import PartsHeader from "../common/header"
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
    components:{
        PartsHeader
    },
    created(){
        var _this=this
        axios.get("/static/ceshi.json").then(function(res){
            _this.list=res.data.data.list
            _this.charger=res.data.data.charger
            _this.protect=res.data.data.protect
            _this.headset=res.data.data.headset
        })
    },
    methods: {
        goDetails:function(id){
            this.$router.push({
                path:"goodDetail",
                query:{
                    id:id
                }
            })
        }, 
    },
    
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
    height: 6.3rem;
    background: white;
    float: left;
    -webkit-box-sizing: border-box;
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
    white-space: nowrap;
    text-overflow: ellipsis;
    font-size: .4rem;
    margin: auto;
    text-align: center;
    overflow: hidden;
}

._partsList p{
    width: 3.8rem;
    margin: 0 auto;
    padding: 0;
    height: 2.6em;
    font-size: .22rem;
    line-height: 1.4;
    color: #000;
    word-break: break-all;
    padding-top: .2rem;
    text-align: center;
    overflow: hidden;
}
._partsList div{
    text-align: center;
    color: red;
    padding-top: 0.6rem;
}
</style>
