<template>
    <div class="container">
        <div class="container-box" v-for="(list,index) in NewsContainer" @click="goNewsDetail(list.id)">
            <div class="container-title">
                {{list.newsTitle}}
            </div>
            <div class="container-img">
                <img :src="list.newsImg" alt="图片">
            </div>
            <div class="container-con">
                {{list.newsCon}}
            </div>
            <div class="container-time">
                发布日期 2018-4-18
            </div>
        </div>
       
    </div>
</template>


<script>
export default {
    name:"NewsContainer",
    props:{
        NewsContainer:Array
    },
    methods: {
        goNewsDetail(id){
            this.$router.push({
                path:"newsDetail",
                query:{
                    id:id
                }
            })
        }
    },
}
</script>



<style lang="stylus" scoped>
   .container
        width 100%;
        height 100%
        padding-top 1.45rem
        padding-bottom 1.45rem
        // position absolute
       
        .container-box
            width 100%
            height 8rem
            background white
            border-bottom: 1px dotted #CCCCCC;
        .container-title
            color: #505b63
            width: 95%
            margin: auto
            text-align: left
            font-size: 0.5rem
            height: 1.5rem
            line-height: 1.5rem
        .container-img
            width 95%
            height 4.3rem
            margin auto
            img 
                width 100%
                height 100%
        .container-con
            width 95%;
            margin auto;
            line-height .5rem
            padding-top .3rem
            color #696969
            text-align justify
            font-size .3rem
        .container-time
            width: 95%;
            margin: auto;
            padding-top: .2rem
            color #696969
</style>