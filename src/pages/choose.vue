<template>
  <div class="choose">
        <Choose-Header title="选购手机"></Choose-Header>
        <div class="_choose_twoMain">
          <div class="upper">
            <span v-for="(list,index) in upper" :key="index" class="list" @click="btn(index)" :class="{active:index===phoneIndex}">{{list.name}}</span>
          </div>
          <div class="sort">
              <p @click="rise">价格升序</p>
              <p @click="drop">价格降序</p>
              <p>销量优先</p>
          </div>
          <div class="lower">
            <div v-for="(list,index) in lower.lower_data" :key="index" class="lower_list" @click="goDetails(list.id)">
              <img v-bind:src="list.ImageOne" alt="图片">
              <p>{{list.name}}</p>
              <p style="font-size: 0.3rem;">{{list.nametwo}}</p>
              <div>￥{{list.Price}}</div>
            </div>
          </div>
        </div>
  </div>
</template>


<script>
import axios from "axios";
import ChooseHeader from "../common/header";
export default {
  name: "choose",
  data() {
    return {
      upper: [],
      lower: [],
      list: [],
      phoneIndex: 0
    };
  },
  components: {
    ChooseHeader
  },
  created() {
    var _this = this;
    axios.get("/static/ceshi.json").then(function(res) {
      _this.upper = res.data.data.phone.upper;
      _this.list = res.data.data.phone.lower;
      _this.lower = _this.list[0];
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
      _this.phoneIndex = index;
      _this.lower = this.list[index];
    },
    rise() {
      var _this = this;
      var data = _this.lower.lower_data;
      data.sort((a, b) => {
        return a.Price > b.Price;
      });
    },
    drop(){
      var _this = this;
      var data = _this.lower.lower_data;
      data.sort((a, b) => {
        return a.Price < b.Price;
      });
    }
  }
};
</script>

<style lang="stylus" scoped>
.active {
  color: #25b5fe;
  border-bottom: 2px solid #25b5fe;
}

.sort {
  width: 100%;
  height: 1rem;
  background: #f4f4f4;
  position: relative;
  top: 1.3rem;
  display: flex;
  justify-content: center;

  p {
    line-height: 1rem;
    font-size: 0.35rem;
    float: left;
    width: 33%;
    text-align: center;
  }
}

.upper {
  width: 100%;
  height: 1.2rem;
  line-height: 1.2rem;
  position: fixed;
  background: #ffffff;
  z-index: 1;
}

.lower {
  padding-top: 1.2rem;
  border-bottom: 1px solid #f4f4f4;
}

.list {
  float: left;
  text-align: center;
  width: 25%;
  font-size: 0.37rem;
}

.choose {
  position: absolute;
  background: white;
  width: 100%;
  height: 100%;
  top: 0;
  bottom: 0;
  z-index: 999;
}

._choose_header {
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

._choose_header i {
  display: block;
  float: left;
  height: 50px;
  padding-left: 0.3rem;
  font-size: 0.71rem;
  color: black;
}

._choose_twoMain {
  margin-top: 1.32rem;
}

.lower_list {
  height: 6.3rem;
  background: white;
  float: left;
  box-sizing: border-box;
  width: 50%;
  border-right: 1px solid #f4f4f4;
  border-bottom: 1px solid #f4f4f4;
  float: left;
  margin-top: 0.1rem;
  list-style: none;

  img {
    height: 3.9rem;
    width: 4rem;
    display: block;
    margin: auto;
    padding: 0.5rem;
  }

  p {
    width: 94%;
    overflow: hidden;
    text-overflow: ellipsis;
    margin: auto;
    font-size: 0.35rem;
    text-align: center;
  }

  div {
    text-align: center;
    color: red;
    margin-top: 10px;
    font-size: 0.35rem;
  }
}

._chooseList div {
  text-align: center;
  color: red;
  margin-top: 10px;
  font-size: 0.35rem;
}
</style>
