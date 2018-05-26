<template>
    <div>
        <div class="category"  @click="show=!show">
            <div class="category-con">
                <i class="iconfont icon-icon--"></i>
                <p>支持花呗分期</p>
            </div>
            <div class="category-con">
                <i class="iconfont icon-icon--"></i>
                <p>支持以旧换新</p>
            </div>

            <div class="category-rigth">
                <i class="iconfont icon-youjiantou"></i>
            </div>
        </div>
         <transition name="fade">
            <div class="boxbox" v-show="show" @click="close">
                <div class="layer" v-show="show">
                    <div class="layer-box">
                        <div class="layer-box-left"></div>
                        <div class="layer-box-in">
                            <h3>服务说明</h3>
                        </div>
                        <div class="layer-box-rigt" @click.stop="show=!show">
                            <i class="iconfont icon-cancel-1-copy"></i>
                        </div>
                    </div>
                    <div class="layer-box-2">
                        <div class="layer-box-2-1">
                            <i class="iconfont icon-icon--"></i>
                            <h3>支持花呗分期</h3>
                            <p>商品支持花呗分期</p>
                        </div>
                        <div class="layer-box-2-1 top">
                            <i class="iconfont icon-icon--"></i>
                            <h3>可以使用换新鼓励金</h3>
                            <p>
                                换新鼓励金通过参加以旧换新回收旧手机以后获得，旧手机享受额外补贴。
                                <router-link to="/change" >现在换机 </router-link>
                            </p>
                        </div>
                    </div>
                    <div class="layer-box-button">
                        <div >关闭</div>
                    </div>
                    
                </div>
            </div>
        </transition>
       
   
</div>


</template>

<script>
export default {
  name: "DetailLayer",
  data() {
    return {
      show: false
    };
  },
    methods: {
        close(){
            this.show=false
        }
    },
};
</script>

<style lang="stylus" >
.category
    width 100%
    height 1.5rem
    border-bottom: 10px solid #f4f4f4;
    .category-con
        float left
        margin-left 10px
        line-height 1.28rem
        font-size .34rem
        i 
            float left
            color #0098df
        p
            float left
            color #777
            padding-left .1rem
    .category-rigth
        float right
        margin-right 10px
        line-height 1.28rem
.boxbox
    width 100%
    height 100%
    position fixed
    background rgba(0,0,0,0.4)
    top 0
    bottom 0
    z-index 1

.layer 
    width 100%
    height 9rem
    background white
    position fixed
    bottom 0
    z-index 2

    .layer-box 
        width 100%
        height: 1.5rem;
        line-height: 1.5rem;
        .layer-box-left 
            width 10%
            height 100%;
            float left

        .layer-box-in 
            width 80%
            height 100%
            font-size 0.4rem
            float left
            text-align center
        .layer-box-right 
            width 10%
            height 100%
            float left
            i 
                font-size 0.4rem
    
    .layer-box-2
       width 85%
       margin 20px auto
       .layer-box-2-1
            width 100%
            h3
                font-size .4rem
                padding-left .1rem
                display inline-block
            p
                font-size .35rem
                height .7rem
                line-height .7rem
                color #666
                margin-top .15rem
                padding-left .3rem
                a
                    color #00acff
            i
                float left
                color #0098df
                font-size .5rem
        .top
            margin-top .6rem
    .layer-box-button
        width 100%
        height 1.5rem
        border-top 1px solid #eee
        position absolute
        bottom 0
        div
            width 95%
            height 0.89rem
            line-height 0.89rem
            display block
            text-align center
            margin .25rem auto
            background #00acff
            border-radius 30px
            color white
            font-size .35rem
    


.fade-enter-active, .fade-leave-active {
    transition: all 0.3s ease;
}

.fade-enter, .fade-leave-active {
    transform: translateY(100%);
}
</style>