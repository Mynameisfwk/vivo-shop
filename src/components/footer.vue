<template>
    <div class="footer" >
      <router-link class="nav-item" :to="{name:'Home'}"exact tag="li">
        <i class="iconfont icon-shouye"></i>
        <div>首页</div>
      </router-link>
      <router-link class="nav-item" :to="{name:'information'}" tag="li">
        <i class="iconfont icon-xinwen3"></i>
        <div>资讯</div>
      </router-link>
      <router-link class="nav-item" :to="{name:'cart'}" tag="li">
       <i class="iconfont icon-gouwuche"></i>
        <div>购物车</div>
      </router-link>

      <router-link class="nav-item" :to="{name:'my'}" tag="li">
       <i class="iconfont icon-wode2"></i>
        <div>我的</div>
      </router-link>
    </div>
</template>

<script>
export default {
}
</script>

<style>


 * {
  margin: 0;
  padding: 0;
  text-decoration:none;
  list-style: none;
}
 /* .icon-shouye-copy-copy-copy,.icon-wode1,.icon-gouwu,.icon-faxian{
   font-size: 0.6rem;
    color: black;
  } */

  .footer{
      position: fixed;
      bottom: 0;
      width: 100%;
      text-align: center;
      display: flex;
      justify-content: space-around;
      border-top: 1px solid #ccc;
      background-color: #fff;
      z-index: 100;
      background: E6E6E6;
      height: 1.5rem;
    }
    .footer i{
      font-size: 0.65rem;
    }
    .footer li{
      margin-top: 0.1rem;
    }
    .nav-item:link,.nav-item:visited{
      color: black
    }
    .router-link:hover,.router-link-active{   
      color: red;
   }
  
</style>

