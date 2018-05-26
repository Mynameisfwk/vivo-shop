<template>
    <div class="my">
        <My-Header title="个人中心"></My-Header>
        <My-Container></My-Container>
        <v-footer></v-footer>
    </div>
</template>

<script>
import footer from '../../pages/footer'
import MyHeader from '../../common/header'
import MyContainer from './component/MyContainer'
export default {
  name:"my",
  data(){
      return{
        // lists:[]
        myName:"Chen Zi"
      }
  },
  components:{
      MyHeader,
      MyContainer,
      "v-footer":footer
  },
  methods:{
      order:function(){
         this.$router.push('/order')
      },
      author:function(){
          this.$router.push('/author')
      }
  }
}
</script>


<style>
   .myHeader{
        height: 1.3rem;
        line-height: 1.3rem;
        font-size: 0.35rem;
        padding-left: 0.3rem;
        background: white;
        font-size: 0.41rem;
   }
   
   .myMain{
       height: 100%;
       background: white;
       margin-top: 10px;
       width: 100%;
       
   }
    .MyBox{
        width: 100%;
        height: 110px;
        background: white;
    }
    .myOrder,.myCollection{
        height: 50%;
    }
   .Main, .Order{
       height: 100%;
       /* background: red; */
       margin-left: 10px;
       border-bottom: 1px solid #cccccc;
   }
   .myMain img{
       display: block;
       width: 60px;
       height: 60px;
       padding: 7px;
       float: left;
   }
    .myMain p{
        line-height: 75px;
    }
  
   .Order i , .Order p{
       display: block;
       line-height: 55px;
       float: left;
       padding-left: 10px;
   }
</style>
