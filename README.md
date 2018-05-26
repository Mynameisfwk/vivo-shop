# vue2.0全家桶实现vivo商城 shop
vue全家桶 vue2.0+vuex+axios+better-scroll还有就是miut-ui组件库


## 开头

<<<<<<< HEAD
### 在线预览
旧的版本：[vivo移动端商城](http://fwk01.top)<br>
新的版本：[vivo移动端商城](http://fwk02.top)<br>
项目演示地址：[vivo移动端商城](http://fwk02.top)<br>
建议Chrome调试手机模式下预览<br>
因为刚买的域名主机所以要解析，实名认证才可以浏览，所以你们还是下把项目给下载下来本地运行看把！😊

### 废话
项目源码地址：[vivo-shop](https://github.com/Mynameisfwk/vivo-shop)，觉得还可以的话给个star 在这先谢谢了~<br>
刚出来实习两个月 所以没有那么的时间来写，只有周六周日有时间！所以帮忙赞下这篇文章感谢了！🙏
=======
如果你想学微信小程序可以来看看我写的一个商城项目 [地址点这里](https://github.com/Mynameisfwk/wechat-app-vivo)<br>
刚出来的快应用，可以看看我写的商城项目 [地址点这里](https://github.com/Mynameisfwk/shop-quickapp)<br>
这个项目后期会重构，~~到时候会加上MongoDB+node.js来写后台~~，欢迎大家踊跃issues [提出建议](https://github.com/Mynameisfwk/vivo-shop/issues)<br>
另外如果这个项目对你有帮助欢迎各位fork、star，谢谢

## 项目正在重构中会加上很多功能！有想知道进展的———>>>>  qq2239657654
## 正在重构需要加什么功能请移步issues给出建议[点这里> issues](https://github.com/Mynameisfwk/vivo-shop/issues)
## 前端交流群 740625675

# 技术栈
> [vue.js](https://cn.vuejs.org/) 构建用户界面的 MVVM 框架，核心思想是：数据驱动、组件系统。
>>>>>>> ece6bd9133a1a0d8d3a8a45069906c3dfc5ebb65

## 写在前面

> 这个小项目还有很多地方做的还不是那么完美还存在一些小BUG，不过后期我会努力完善的，但求各位大佬提出你们的->[建议](https://github.com/Mynameisfwk/vivo-shop/issues)，如果你觉的对你有帮助帮忙点个star谢谢！

> 因为比较赶所以有些功能还没实现，一些代码也没有优化好尤其是一些样式你们将就看吧，不过基本功能都写完了，没有实现都功能上拉下拉刷新、加载更多等等，后面会陆陆续续的做完的！

> 前端交流群740625675 志同道合的可以加下一起学习！

> Ps：因为我喜欢简约大气一点的所以主题颜色就是白+天蓝色
## 效果预览

#### 首页、分类、动态、我的
![](https://user-gold-cdn.xitu.io/2018/5/26/1639ae3b8d2910ff?w=1555&h=608&f=png&s=502986)

#### 商品详情、提交订单、订单详情
![](https://user-gold-cdn.xitu.io/2018/5/17/1636bb0a57c224a2?w=1555&h=608&f=png&s=305775)

#### 文章列表、文章详情、文章收藏
![](https://user-gold-cdn.xitu.io/2018/5/26/1639adefcd1b5296?w=1555&h=608&f=png&s=637802)

#### 我的订单、商品收藏、我的购物车
![](https://user-gold-cdn.xitu.io/2018/5/18/16371f71217202ea?w=1555&h=608&f=png&s=246290)

#### 收货地址、地址添加、地址管理
![](https://user-gold-cdn.xitu.io/2018/5/26/1639add2f11ba68d?w=1555&h=608&f=png&s=127953)


<<<<<<< HEAD
## 开发目的
想着写一个案例放在开源网站上，时不时更新、完善、修改来提高自己技术能力，当然我也需要你们的建议有你们的建议我的作品也会更加完美
=======
# 项目预览
:point_right: [在线预览](http://fwk01.top/#/ "链接已失效,请自行下载预览")<br>
建议在手机或F12手机模式下浏览
>>>>>>> ece6bd9133a1a0d8d3a8a45069906c3dfc5ebb65

## 技术栈
> [vue-cli](https://www.npmjs.com/package/vue-cli) 是vue的脚手架工具，目录结构、本地调试、代码部署、热加载、单元测试。

> [vue-router](https://router.vuejs.org/zh-cn/) 是官方提供的路由器，使用vue.js构建单页面应用程序变得轻而易举。

> [vuex](https://vuex.vuejs.org/zh-cn/) 是一个专为 vue.js 应用程序开发的状态管理模式，简单来说Vuex就是管理数据的。

> [Mint UI](http://mint-ui.github.io/#!/zh-cn) 由饿了么前端团队推出的 Mint UI 是一个基于 vue.js 的移动端组件库。

> [better-scroll](http://ustbhuangyi.github.io/better-scroll/doc/options.html)：解决移动端各种滚动场景需求的插件，使移动端滑动体验更加流畅

<<<<<<< HEAD
> [axios](https://www.npmjs.com/package/axios)：用来请求后端api数据
=======
# 重构之后的效果展示
## 加了很多东西还有功能 先放上来看看吧，还有一点没写完 写完就传上来

#### 首页、分类、动态、我的
![](https://user-gold-cdn.xitu.io/2018/5/17/1636ba09e546a28f?w=1555&h=608&f=png&s=419439)

#### 商品详情、提交订单、订单详情
![](https://user-gold-cdn.xitu.io/2018/5/17/1636bb0a57c224a2?w=1555&h=608&f=png&s=305775)

#### 我的订单、我的收藏、我的购物车
![](https://user-gold-cdn.xitu.io/2018/5/18/16371fa7f4ceb8e2?w=1555&h=608&f=png&s=247923)



## 项目安装及运行
>>>>>>> ece6bd9133a1a0d8d3a8a45069906c3dfc5ebb65

## 实现功能
商品详情、文章详情、订单详情、订单提交、分类管理、商品搜索、商品/文章收藏、购物车功能(增、删、单全选)、积分动态获取、订单管理、收货地址管理、localstorage储存等功能


## 项目运行
```
# 安装项目依赖
npm install 

# 启动服务 访问http://localhost:8080
npm run dev

# 编译打包
npm run build
```

## 骚话
记得当时在学校自学前端的时候一个布局浮动弄了我快三四天的时间，当时一度怀疑我是不是适合学编程，之后冷静下来想想别人能做到为什么我就不能？那时候也是总是沉不住气，一遇到问题就想要放弃，学编程不是一蹴而就，而是慢慢的积累知识点哪怕是每天写两三个功能或是说解决一个问题，长期积累下去也会学到很多，只有不急不躁具有空杯心态才能硕果累累！

对。以上就是我的骚话！！！说下我个人的观点！！！写的不好，大佬轻喷！！

## 写在最后
数据都来自于vivo官网如有侵权请请联系删除这个小项目做的有点粗糙可以说是非常粗糙、各位将就看看吧、大佬轻喷、还有就是我要厚着脸皮要个star 感谢 🙏

<img src="https://user-gold-cdn.xitu.io/2018/5/17/1636bde1d014d991?w=198&h=198&f=jpeg&s=3630"></img>
