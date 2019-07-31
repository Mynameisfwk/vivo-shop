<template>
  <div class="header" >
     <div class="left" @click="Return">
        <i class="iconfont icon-zuojiantou"></i>
     </div>
     <div class="in">{{title}}</div>
     <div class="rigth"></div>
  </div>
</template>

<script>
export default {
 name:"DetailHeader",
 props:[
     "title"
 ],
 data(){
     return{
         
     }
 },
 methods: {
     Return(){
        this.$router.go(-1)
     }
 },
}
</script>

<style lang="stylus" scoped>
    .header
        width 100%
        height 1.5rem
        z-index 1
        position fixed
        background white
        .in
            width 80%
            height 100%
            line-height 1.5rem
            float left
            text-align center
            font-size 0.45rem
        .left
            width 10%; 
            height 100%
            float left
            i 
                font-size: 0.6rem;
                line-height: 1.45rem;
                text-align: center;
                display: block;
        .rigth
            width 10%; 
            height 100%
            float left
        
</style>