<template>
   <div class="HomeList">
    <ul>
        <li><div @click="xuangou"><img src="/static/img/xuangou.jpg" alt="选购"></div></li>
        <li><div  @click="parts"><img src="/static/img/peijian.jpg" alt="配件"></div></li>
        <li><div @click="btn"><img src="/static/img/pingbao.jpg" alt="屏保"></div></li>
        <li><div @click="btn"><img src="/static/img/dingzhi.jpg" alt="定制"></div></li>
    </ul>
    </div>
</template>

<style lang="stylus" scoped>
.HomeList
    width 100%;
    height 2.5rem;
    background white;
    border-bottom 1px solid #cccccc;
    li
        width: 25%;
        float: left;
        margin: auto;
        div
            width: 1.7rem;
            height: 1.68rem;
            margin: auto;
        img 
            display: block;
            width: 100%;
            height: 100%;
            margin: 15px auto
</style>

<script>
export default {
  methods: {
      xuangou:function(){
      this.$router.push({path:"choose"})
    },
    parts:function(){
      this.$router.push({path:"parts"})
    },
    btn:function(){
      MessageBox('提示', 'Vue的第一个项目能给个star么？Thank you');
    }
  },
}
</script>

