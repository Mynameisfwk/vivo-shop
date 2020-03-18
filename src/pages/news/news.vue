<template>
  <div>
    <v-header :data='titleData'></v-header>
    <v-content :newsData='contentData' @btn='getMessage'></v-content>
  </div>
</template>

<script>
import header from '../../components/header/header'
import newslist from '../../components/NewsList/NewsList'

export default {
    name:"information",
    components: {
        'v-header': header,
        'v-content': newslist
    },
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
            // this.$router.push({
            //     path:"view",
            //     query:{
            //         id:id
            //     }
            // })
        }
    }
}
</script>