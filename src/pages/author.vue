<template>
  <div class="Author" >
      <div class="AuthorHeader">
        <router-link to="my">
          <i class="iconfont icon-552cc14536532"></i>
        </router-link>
          关于我
      </div>
      <div class="AuthorMain">
        <div>在校学生一枚明年毕业，这是我第一个用vue写的项目</div>
        <p>我的QQ:2239657654</p>
        <p>我的邮箱:2239657654@qq.com</p>
        <p>如果这个小项目对你有帮助给个star</p>
        <router-link :to="{name:'Home'}" >前往首页</router-link>
      </div>
  </div>
</template>

<script>
import { mapState } from 'vuex';
export default {
}
</script>

<style>
.Author{
  position: absolute;
  width: 100%;
  height: 100%;
  z-index: 999;
  background: white;
}
.AuthorHeader{
    position: fixed;
    top: 0;
    width: 100%;
    height: 1.3rem;
    line-height: 1.3rem;
    background: white;
    padding-left: 0.3rem;
    -webkit-box-shadow: 0 0 10px #cecece;
    box-shadow: 0 0 10px #cecece;
    z-index: 1;
    font-size: 0.41rem;
}
.AuthorMain{
    margin-top: 1.6rem;
    font-size: 0.4rem;
    text-align: center;
}
.AuthorMain a{
    display: block;
    text-align: center;
    margin: 0.8rem auto;
    width: 110px;
    height: 37px;
    line-height: 37px;
    border-radius: 4px;
    text-align: center;
    background: #e0524b;
    color: white;
    font-weight: 800;
    font-size: 0.5rem;
}
.AuthorHeader i{
    display: block;
    float: left;
    height: 50px;
    font-size: 0.71rem;
    color: black;
    width: 0.9rem;
}

</style>
