<template>
  <div class="parts">
    <Parts-Header title="选购配件"></Parts-Header>
    <div class="partsMain">
        <div class="upper">
            <span v-for="(list,index) in PartsUpper" class="list" :class="{active:index===partsIndex}" :key="index" @click="btn(index)" >{{list.name}}</span>
        </div>
        <div class="lower">
            <div class="lower_list" v-for="(list,index) in PartsLower.PartsLower_data" :key="index" @click="goDetails(list.id)">
            <img v-bind:src="list.homeImg">
            <h2>{{list.homeName}}</h2>
            <p>{{list.homeNametwo}}</p>
            <div>￥{{list.homePrice}}</div>
        </div>
        </div>
    </div>
  </div>
</template>

<script>
import axios from "axios";
import PartsHeader from "../common/header";
import { Navbar, TabItem } from "mint-ui";
export default {
  data() {
    return {
      selected: "tab-container1",
      list: [],
      PartsUpper: [],
      PartsLower: [],
      partsIndex: 0
    };
  },
  components: {
    PartsHeader
  },
  created() {
    var _this = this;
    axios.get("/static/ceshi.json").then(function(res) {
      console.log(res);
      _this.PartsUpper = res.data.data.parts.PartsUpper;
      _this.list = res.data.data.parts.PartsLower;
      _this.PartsLower = _this.list[0];
    });
  },
  methods: {
    goDetails: function(id) {
      this.$router.push({
        path: "goodDetail",
        query: {
          id: id
        }
      });
    },
    btn(index) {
      var _this = this;
      _this.partsIndex = index;
      _this.PartsLower = _this.list[index];
    }
    // btn(){
    //     this.charger.sort((a,b)=>{
    //         // return a.price>b.price
    //         console.log(b.homePrice)
    //         return a.homePrice>b.homePrice
    //     })
    // }
  }
};
</script>


<style lang="stylus" scoped>
.active {
  color: #25b5fe;
  border-bottom: 2px solid #25b5fe;
}
.upper{
    width: 100%;
    height: 1.2rem;
    line-height: 1.2rem;
    position: fixed;
    background: #ffffff;
}
.lower{
  padding-top:1.2rem;
  border-bottom: 1px solid #f4f4f4;
}

.list {
    float: left;
    text-align: center;
    width: 25%;
    font-size: 0.37rem;
}

.box {
    width: 100%;
    height: 1rem;
    background: #ecf0f1;
}

.parts {
    position: absolute;
    background: white;
    width: 100%;
    height: 100%;
    top: 0;
    bottom: 0;
    z-index: 999;
}

.partsHeader {
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

.partsHeader i {
    display: block;
    float: left;
    height: 50px;
    padding-left: 0.3rem;
    font-size: 0.71rem;
    color: black;
}

.partsMain {
    margin-top: 1.32rem;
}

.lower_list {
    height: 6.3rem;
    background: white;
    float: left;
    -webkit-box-sizing: border-box;
    box-sizing: border-box;
    width: 50%;
    border-right: 1px solid #f4f4f4;
    border-bottom: 1px solid #f4f4f4;
    float: left;
    margin-top: 1px;
    list-style: none;

    img {
        height: 3.6rem;
        width: 4rem;
        display: block;
        margin: auto;
        padding: 0.5rem;
    }

    h2 {
        width: 90%;
        white-space: nowrap;
        text-overflow: ellipsis;
        font-size: 0.4rem;
        margin: auto;
        text-align: center;
        overflow: hidden;
    }

    p {
        width: 3.8rem;
        margin: 0 auto;
        padding: 0;
        height: 1.1rem;
        font-size: 0.22rem;
        line-height: 1.4;
        color: #000;
        word-break: break-all;
        padding-top: 0.2rem;
        text-align: center;
        overflow: hidden;
    }

    div {
        text-align: center;
        color: red;
        line-height: 1rem;
        font-size: 0.4rem;
    }
}
</style>
