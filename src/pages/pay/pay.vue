<template>
    <div class="pay">
        <Pay-Header title="确认订单"></Pay-Header>
        <div @click="" class="pay-address">
             <p class="address-box">
                <span class="name">收货人：{{address_name}}</span>
              <span class="phone">{{address_phone}}</span>
            </p>
            <p class="address-details">
                收货地址：{{address}}{{xz_address}}
            </p>
        </div>
        <div class="pay-shop" v-for="(list,index) in pay" :key="index">
            <div class="pay-shop-list">
                <p class="pay-shop-1">商品清单</p>
                <p class="pay-shop-2">
                    <img :src="list.img_url" />
                    <p class="pay-shop-2-box">
                        <span class="name">{{list.name}}<p>× {{$route.params.value}}</p></span>
                        <span class="price">¥{{list.price}}</span>
                    </p>
                </p>
            </div>

            <div class="pay-shop-invoice">
                <p class="pay-invoice-1">发票信息</p>
                <div class="pay-invoice-2">
                    <div class="pay-invoice-2-2">
                        <div>
                            <p>*请输入发票抬头:</p>
                            <input type="text" id="input" v-model="invoice"  placeholder="请输入发票信息">
                        </div>
                    </div>
                </div>
            </div>

            <div class="pay-shop-fs">
                <div class="pay-fs-1">支付方式</div>
                <div class="pay-fs-2">
                    <div class="pay-fs-2-1" >
                        <div 
                        v-for="(list,index) in paymentType"
                        :class="paymentTypeIndex == index ? 'active' : ''"
                        @click="selectPaymentType(index)"
                        :key="index"
                        >{{list}}</div>
                    </div>
                    <div class="pay-fs-2-2">
                       <div v-show="listIndex===0" class="pay-fs-2-2-1">支持支付宝支付、微信支付、银行卡支付、财付通等</div>
                       <div v-show="listIndex===1" class="pay-fs-2-2-2">花呗分期是花呗联合天猫淘宝推出的，面向互联网的赊购服务，通过支付宝轻松还款，0首付</div>
                       <div v-show="listIndex===2" class="pay-fs-2-2-3">货到再付款，支持现金交易</div>
                    </div>
                </div>
                
            </div>

            <div class="pay-shop-liuyan">
                <p class="pay-liuyan-1">订单留言</p>
                <div class="pay-liuyan-2">
                    <textarea rows="5" v-model="content" placeholder="限300字（若有特殊需求，请联系商城在线客服)" maxlength="300"></textarea>
                    <p>商品总金额：¥{{list.price}}</p>
                    <p>运费：0.00</p>
                    <p>优惠：¥0.00</p>
                    <p>赠送积分：{{toFixed(list.price * 0.05)}}</p>
                </div>
            </div>
           
            <div class="pay-shop-footer">
                <p class="price">订单总金额：<span>¥{{toFixed(list.price * $route.params.value)}}</span></p>
                <a class="order" @click="addOrder(list,index)">提交订单</a>
            </div>
        </div>
    </div>
</template>
<style lang="stylus" scoped>
.active {
    border: 1px solid #444;
    color: red;
}

.pay-address {
    width: 100%;
    height: 4.3rem;
    background: url('https://shopstatic.vivo.com.cn/vivoshop/wap/dist/images/prod/bg-addr-box-line_d380baa.png') #fff left bottom repeat-x; // shopstatic.vivo.com.cn/vivoshop/wap/dist/images/prod/bg-addr-box-line_d380baa.png) #fff left bottom repeat-x;
    background-size: 1.6rem;
    padding-top: 1.45rem;
    display: block;

    .address-box {
        width: 87%;
        margin: auto;
        font-size: 0.4rem;
        padding-top: 0.3rem;
        padding-bottom: 0.3rem;

        .phone {
            float: right;
        }
    }

    .address-details {
        width: 87%;
        margin: auto;
        color: #666;
        font-size: 0.38rem;
    }
}

.pay-shop {
    width: 100%;
    margin-bottom: 1.5rem;

    .pay-shop-invoice {
        width: 100%;
        height: 4.3rem;
        background: #fff;
        margin-bottom: 10px;
        margin-top: 10px;

        .pay-invoice-1 {
            width: 100%;
            height: 1.5rem;
            line-height: 1.5rem;
            border-bottom: 1px solid #eaeaea;
            font-size: 0.4rem;
            padding-left: 0.7rem;
        }

        .pay-invoice-2 {
            width: 100%;
            height: 4rem;

            .pay-invoice-2-1 {
                width: 100%;
                height: 30%;

                div {
                    display: block;
                    width: 2.88rem;
                    height: 0.9rem;
                    line-height: 0.9rem;
                    border: 1px solid #d1d1d1;
                    border-radius: 3px;
                    margin: 0.1rem 0.3rem;
                    float: left;
                    text-align: center;
                }
            }

            .pay-invoice-2-2 {
                width: 92%;
                height: 70%;
                margin: auto;
                font-size 0.35rem

                p {
                    margin-top: 10px;
                    margin-bottom: 10px;
                }

                input {
                    width: 100%;
                    height: 1.18rem;
                    border: 1px solid #d1d1d1;
                    border-radius: 3px;
                    padding-left: 0.2rem;
                }
            }
        }
    }

    .pay-shop-list {
        width: 100%;
        height: 4.5rem;
        margin-top: 0.3rem;
        background: #fff;

        .pay-shop-1 {
            width: 100%;
            height: 1.5rem;
            line-height: 1.5rem;
            border-bottom: 1px solid #eaeaea;
            font-size: 0.4rem;
            padding-left: 0.7rem;
        }

        .pay-shop-2 {
            float: left;

            img {
                width: 2.5rem;
                margin: 0.2rem;
            }
        }

        .pay-shop-2-box {
            width: 70%;
            display: flex;
            flex-direction: column;

            .name {
                font-size: 0.4rem;
                margin-top: 0.3rem;
                height: 0.6rem;

                p {
                    float: right;
                    margin-right: 0.5rem;
                }
            }

            .price {
                color: red;
                font-size: 0.35rem;
                font-weight: 500;
                height: 0.6rem;
            }
        }
    }

    .pay-shop-liuyan {
        width: 100%;
        height: 6.5rem;
        background: #fff;
        margin-top: 0.3rem;
        margin-bottom: 0.3rem;

        .pay-liuyan-1 {
            width: 100%;
            height: 1.5rem;
            line-height: 1.5rem;
            border-bottom: 1px solid #eaeaea;
            font-size: 0.4rem;
            padding-left: 0.7rem;
        }

        .pay-liuyan-2 {
            width: 90%;
            margin: auto;

            textarea {
                width: 100%;
                height: 2rem;
                border: 1px solid #d1d1d1;
                border-radius: 3px;
                padding: 0.15rem 0.2rem;
                margin: 0.3rem auto;
                display: block;
            }

            p {
                color: #888;
                height: 0.48rem;
                font-size: 0.34rem;
            }
        }
    }

    .pay-shop-fs {
        width: 100%;
        height: 5rem;
        background: #ffffff;

        .pay-fs-1 {
            width: 100%;
            height: 1.5rem;
            line-height: 1.5rem;
            border-bottom: 1px solid #eaeaea;
            font-size: 0.4rem;
            padding-left: 0.7rem;
        }

        .pay-fs-2 {
            width: 100%;
            height: 3.5rem;
            background: #ffffff;

            .pay-fs-2-1 {
                width: 100%;
                height: 40%;
                font-size: 0.35rem;
                // background yellow
                display: flex;
                justify-content: center;
                align-items: center;

                div {
                    display: block;
                    width: 2.88rem;
                    height: 0.9rem;
                    line-height: 0.9rem;
                    border: 1px solid #d1d1d1;
                    border-radius: 3px;
                    margin: 0.1rem;
                    float: left;
                    text-align: center;
                }
            }

            .pay-fs-2-2 {
                width: 100%;
                height: 60%;
                font-size: 0.35rem;

                // background red
                div {
                    width: 90%;
                    height: 1.3rem;
                    border-radius: 3px;
                    border: 1px solid #d1d1d1;
                    margin: auto;
                    padding: 0.3rem;
                }

                .pay-fs-2-2-2 {
                    height: 1.56rem;
                }
            }
        }
    }
}

.pay-shop-footer {
    width: 100%;
    height: 1.5rem;
    border-top: 1px solid #eaeaea;
    background: white;
    position: fixed;
    bottom: 0;

    .price {
        float: left;
        line-height: 1.5rem;
        font-size: 0.43rem;
        color: #666;
        padding-left: 0.3rem;

        span {
            color: red;
        }
    }

    .order {
        width: 3.3rem;
        height: 0.9rem;
        line-height: 0.9rem;
        font-size: 0.35rem;
        margin-top: 0.3rem;
        margin-right: 0.3rem;
        border-radius: 30px;
        text-align: center;
        color: #fff;
        background: #f81200;
        float: right;
    }
}
</style>


<script>
import { Toast } from "mint-ui";
import PayHeader from "../../common/header";
export default {
  name: "pay",
  data() {
    return {
      integral:'', 
      pay: [],
      address:[],
      addressId: '5',
      address_name: '1', 
      address_phone: '15255460858', 
      address: '测试地址',
      xz_address:'详情地址',
      content: '', 
      invoice: '',
      paymentType:[
        '在线支付',
        '花呗分期',
        '货到付款'
      ],
      paymentTypeIndex: 0
    };
  },
    components: {
        PayHeader
    },

    created() {
        this.orderDetail()
        console.log(this.$route);
    },

    methods: {
        addOrder(list) {
            if(!this.invoice) {
                Toast('请输入发票抬头');
                return false
            }
            var myDate = new Date()
            var Year = myDate.getFullYear()
            var Month = myDate.getMonth() + 1
            var Day = myDate.getDate()

            list['paymentType']  = this.paymentType[this.paymentTypeIndex]
            list['invoice'] = this.invoice
            list['content'] = this.content
            list['homeValue'] = this.$route.params.value //改变原来固定的数量 1
            list['orderNumber'] = Year + ''  + Month + '' + Day + '' + Math.random().toFixed(15).substr(2) //订单号

            this.$store.commit('order/ADD_ORDER',list);
        },
        
        selectPaymentType(index) {
            this.paymentTypeIndex = index
        },

        toFixed(value) {
            return value.toFixed(2)
        },
        
        orderDetail() {
            this.$axios.get('/static/ceshi.json').then(res => {
                res.data.data.home.forEach(list => {
                    if(list.id == this.$route.query.id) {
                        this.pay.push(list);
                    }
                });
            });
        }
    }
};
</script>


