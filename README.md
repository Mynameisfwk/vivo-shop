

# 前言
初学vue2.0也有一两个月的心想想做个小项目来测试下我的水平，这不撸起袖子就是干，看了vivo移动商城挺简洁的就仿了个vivo商城，之所以选择vivo商城，是因为商城涉及到购物车操作、订单管理、其次就是网上也有很多的案例但都是音乐播放器，外卖手机端，千篇一律，所以我就选择了商城。

该项目是由(vue2.0+vuex+vue-router+vue-resource+webpack)完成的，后期会用axios代替vue-resource 因为是第一次做手机端有些地方做的还不是那么完美还存在一些小BUG，不过后期我会努力完善的。:crying_cat_face:

写完这个项目我学到了很多收获了很多知识尤其对vue组件指令、渲染数据、计算属性、绑定事件以及vuex状态管理、vue-router路由的使用有了一定了解。

另外欢迎各位fork、star :blush:

# 技术栈
> [vue.js](https://cn.vuejs.org/) 构建用户界面的 MVVM 框架，核心思想是：数据驱动、组件系统。

> [vue-cli](https://www.npmjs.com/package/vue-cli) 是vue的脚手架工具，目录结构、本地调试、代码部署、热加载、单元测试。

> [vue-router](https://router.vuejs.org/zh-cn/) 是官方提供的路由器，使用vue.js构建单页面应用程序变得轻而易举。

> [vue-resource](https://www.npmjs.com/package/vue-resource) 请求数据，服务器通讯，官方推荐[axios](https://www.npmjs.com/package/axios)请求数据，本项目后期改用[axios](https://www.npmjs.com/package/axios)。

> [vuex](https://vuex.vuejs.org/zh-cn/) 是一个专为 vue.js 应用程序开发的状态管理模式，简单来说Vuex就是管理数据的。

> [Mint UI](http://mint-ui.github.io/#!/zh-cn) 由饿了么前端团队推出的 Mint UI 是一个基于 vue.js 的移动端组件库。


# 项目预览
:point_right: [在线预览](http://www.fangwenkang.xyz/#/ "在线预览")<br>  目前打不来域名正在实名
建议在手机或F12手机模式下浏览
<h3>手机端扫描二维码</h3>

![](https://github.com/Mynameisfwk/vivo-shop/blob/master/static/lowSource/vue.png)

# 基本功能
* 首页轮播图效果
* 首页轮播图实现链接跳转
* 商品详情列表
* 商品详情轮播效果
* 商品立即购买/加入购物车
* 购物车加减数量删除商品
* 购物车结算清空
* 商品删除结算
* 模拟支付成功后加入订单
* 商品订单删除
* 模拟订单付款成功生成订单
* Localstorage本地存储数据


# 效果截图演示

![](https://github.com/Mynameisfwk/vivo-shop/blob/master/static/lowSource/1.0.gif)
![](https://github.com/Mynameisfwk/vivo-shop/blob/master/static/lowSource/2.0.png)
![](https://github.com/Mynameisfwk/vivo-shop/blob/master/static/lowSource/3.0.png)
![](https://github.com/Mynameisfwk/vivo-shop/blob/master/static/lowSource/4.0.png)

## 项目安装及运行

``` bash
# 安装项目依赖
npm install 

# 启动服务 浏览器本地访问http://localhost:8080
npm run dev

# 编译打包
npm run build

```



