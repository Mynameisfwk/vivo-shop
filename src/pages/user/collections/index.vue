<template>
    <div class="collection">
        <v-header title="我的收藏" :headerLeftStatus="headerLeftStatus" />
        <div class="item">
            <div class="list" 
            v-for="(list,index) in collections" 
            :key="index">
                <div class="list-title">
                    <p class="inventory">库存充足</p>
                    <p class="noCollection" @click="delCollection(index)">取消收藏</p>
                </div>
                <div class="list-shop">
                    <div class="list-shop-box">
                        <div class="list-box-left">
                            <img :src="list.img_url"></img>
                            <p>
                                <span class="title">{{list.name}}</span>
                                <span class="price">¥{{toFixed(list.price)}}</span>
                            </p>
                        </div>
                        <div class="list-box-right">
                            <p @click="jumpPay(list.id)">立即购买</p>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div>
</template>

<script>
import { mapState,mapMutations } from 'vuex'
import header from '@/components/header/index'
export default {
    data() {
        return {
            headerLeftStatus: true
        }
    },
    methods: {
        ...mapMutations ({
            delCollection: 'cart/DEL_COLLECTION'
        }),
        jumpPay(id) {
            this.$router.push({
                path: "/pay",
                query: {
                    id: id
                }
            })
        },
        toFixed(value) {
            return JSON.parse(value).toFixed(2)
        }
    },
    computed: {
        ...mapState({
            collections: state => state.cart.collections
        })
    },  
    components: {
        'v-header': header
    }
}
</script>

<style lang="less" scoped>
    .collection {
        width: 100%;
        height: auto;
        .item {
            width: 100%;
            height: 100%;
            position: relative;
            top: 1.5rem;
            .list {
                width: 100%;
                height: 4.7rem;
                background: #ffffff;
                display: flex;
                flex-direction: column;
                margin-bottom: 0.05rem;
                .list-title {
                    width: 100%;
                    height: 1.3rem;
                    border-bottom: 1px solid #F4F4F4;
                    font-size: 0.35rem;
                    display: flex;
                    justify-content: space-between;
                    align-items: center;
                    .inventory {
                        color: #55B451;
                        padding-left: 0.5rem;
                        font-weight: 500;
                    }
                    .noCollection {
                        padding-right: 0.5rem;
                        color: #626262;
                        font-weight: 500;
                    }
                }
                .list-shop {
                    width: 100%;
                    height: 3.4rem;
                    .list-shop-box {
                        width: 95%;
                        height: 100%;
                        margin: auto;
                        display: flex;
                        .list-box-left {
                            width: 68%;
                            height: 100%;
                            position: relative;
                            display: flex;
                            img {
                                width: 2.9rem;
                                height: 2.7rem;
                                margin-top: 0.2rem;
                            }
                            p {
                                width: 50%;
                                height: 100%;
                                font-size: 0.45rem;
                                display: flex;
                                flex-direction: column;
                                text-indent: 0.3rem;
                                .title {
                                    width: 4rem;
                                    color: #514E56;
                                    font-weight: 500;
                                    margin-top: 0.3rem;
                                    margin-bottom: 0.2rem;
                                }
                                .price {
                                    color: #FF0202;
                                    font-weight: 500;
                                }
                            }
                        }
                        .list-box-right {
                            width: 32%;
                            height: 100%;
                            display: flex;
                            align-items: flex-end;
                            position: relative;
                            p {
                                width: 3rem;
                                height: 0.95rem;
                                line-height: 0.95rem;
                                background: #FF0202;
                                border-radius: 0.5rem;
                                color: #fff;
                                font-size: 0.2rem;
                                text-align: center;
                                position: absolute;
                                bottom: 0.5rem;
                                font-size: 0.35rem;
                            }
                        }
                    }
                }
            }
        }
    }
</style>