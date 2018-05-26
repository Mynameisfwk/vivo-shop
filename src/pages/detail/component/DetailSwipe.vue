<template>
    <div class="goodDetaiSwipe">
         <div class="goodDetailMain" v-for="(goodDetail,index) in gos">
                        <div class="gooDetailNumber">商品编号：{{goodDetail.number}}</div>
                        <div class="goodDetailName">{{goodDetail.name}}</div>
                        <div style="text-align: justify;">
                            <span style="margin-left:-.2rem;color:#FF4B3D">{{goodDetail.homeBright}}</span>
                            {{goodDetail.homeTitle}}！
                        </div>
                        <div class="goodDetailColor">{{goodDetail.color}}</div>
                        <div class="goodDetailPaid">￥{{goodDetail.homePrice}}</div>
                    </div>
                    
                    <div class="goodDetailValue">
                        <div class="_Value">购买数量：</div>
                        <div class="_cartNumber" style="margin-left: 2rem;">
                            <a href="javascript:;" @click="jian(index)" class="goodDetailReduce">-</a>
                            <input type="text"   v-model="goodDetail.homeValue" readonly="readonly"/>
                            <a href="javascript:;" @click="jia(index)" class="goodDetailAdd">+</a>
                        </div>
                    </div>

                    <Detail-Layer></Detail-Layer>
                  
                    <div class="goodDetailBox">
                        <mt-navbar v-model="selected" >
                            <mt-tab-item id="tab-container1">图文详情</mt-tab-item>
                            <mt-tab-item id="tab-container2">参数</mt-tab-item>
                        </mt-navbar>


                        <mt-tab-container v-model="selected" swipeable>
                            <mt-tab-container-item id="tab-container1">
                               <div class="goodDetailImg">
                                   <p v-for="Image in goodDetail.Images">
                                       <img v-bind:src="Image.one" alt="详情图片">
                                    </p>
                                </div>
                            </mt-tab-container-item>

                            <mt-tab-container-item id="tab-container2">
                                <div class="peizhi" v-html="goodDetail.homePeizhi"></div>
                            </mt-tab-container-item>
                        </mt-tab-container>

                    </div>
    </div>
</template>


<script>
export default {
    name:"DetailSwipe",
    props:["gos"]
}
</script>


<style scoped>
.goodDetaiSwipe {
    height: 8rem;
    margin-top: 3px;
    background: white;
}

.goodDetaiSwipe img {
    width: 70%;
    height: 7rem;
    display: block;
    /* margin-top: 60px; */
    margin: auto;
}
</style>

