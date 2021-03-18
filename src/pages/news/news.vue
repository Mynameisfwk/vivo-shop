<template>
  <div>
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
    </div>
</template>

<script>
export default {
    name: "news",
    data(){
        return{
            titleData: {
                title: '新闻动态',
                status: true
            },
            contentData: [{
                'id': 1,
                'title': '新闻标题',
                'con': '这是文章介绍',
                'time': '2019/02/01'
            }]
        }
    },
    methods: {
        getMessage(id,title){
            console.log(id,title)
        }
    },
    created() {
        this.$axios.get('/static/ceshi.json').then(res=> {
            console.log(res)
            this.newsData = res.data.data.news
        })
    }
}
</script>

<style lang="less">
.content {
    width: 100%;
    height: 15rem;
    background:#ffffff;
    position: relative;
    top: 1.45rem;

    .container-box {
        width: 100%;
        height: auto;
        background:white;
        border-bottom: 1px dotted #CCCCCC;
        padding-bottom: 0.3rem;

        .container-title{
            color: #505b63;
            width: 95%;
            margin: auto;
            text-align: left;
            font-size: 0.5rem;
            height: 1.5rem;
            line-height: 1.5rem;
        } 
        
        .container-img {
            width: 95%;
            height: 4.3rem;
            margin: auto;

            img {
                width: 100%;
                height: 100%;
            }
        }

        .container-con {
            width: 95%;
            margin: auto;
            line-height: .5rem;
            padding-top: .3rem;
            color: #696969;
            text-align: justify;
            font-size: .3rem;
        }

        .container-time{
            width: 95%;
            margin: auto;
            padding-top: .2rem;
            font-size: .3rem;
            color: #696969
        }
    }
}
</style>