const actions={
    //购物车
    setCart({commit},data){
        commit('SET_CARTS',data)
    },
    //文章收藏
    setArticle({commit},data){
        commit('SET_ARTICLE',data)
    },
    //商品收藏
    setGoods({commit},data){
        commit('SET_GOODS',data)
    },
    //地址
    setAddress({commit},data){
        commit('SET_ADDRESS',data)
    },
    //订单
    setOrders({commit},data){
        commit('SET_ORDERS',data)
    }

}

export default actions