<template>
  <div class="newe">
    <div class="content">
      <li class="container-box" v-for="(list,index) in newsData" :key='index' @click="btn(list.id,list.title)">
        <div class="container-title">{{ list.title }}</div>
        <div class="container-img">
          <img
            src="https://ss3.bdstatic.com/70cFv8Sh_Q1YnxGkpoWK1HF6hhy/it/u=3979362026,1852116509&fm=26&gp=0.jpg"
            alt="图片"
          />
        </div>
        <div class="container-con">{{ list.con }}</div>
        <div class="container-time">发布日期 {{ list.time }}</div>
      </li>
    </div>
  </div>
</template>

<script>
export default {
    props:['newsData'],
    methods: {
        btn(id,title){
            this.$emit('btn',id,title)
        }
    },
}
</script>

<style lang="stylus" scoped> 
    @import './NewsList.less';
</style>


