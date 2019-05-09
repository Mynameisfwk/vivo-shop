# vue2.0全家桶实现vivo商城 shop
vue全家桶 vue2.0+vuex+axios+better-scroll还有就是miut-ui组件库

## 反馈
如果运行报错 
A complete log of this run can be found in:   
/Users/xxx/.npm/_logs/2019-05-09T01_36_59_916Z-debug.log

 npm install webpack -g  </br>
 vue init webpack 项目名 </br>
 npm run dev          
 即可

## 开头

## 2018/09/22 如果发现图片打不开 ，我七牛云的那边域名出问题了 ！
## 2019/01/08 最近在用TP5 写后台，持续关注哦 这个项目也会更新一些功能的，先放两张图！！！！！！！😊😊😊😊
![](https://github.com/Mynameisfwk/vivo-shop/blob/master/static/img/D246F738D61254CF43058771EB0C256B.jpg)
![](https://github.com/Mynameisfwk/vivo-shop/blob/master/static/img/E2CF505C13B27427AA8B7173161F9736.jpg)


### 在线预览

旧的版本：<del>[vivo移动端商城](http://fwk01.top)</del><br>
新的版本：<del>[vivo移动端商城](http://fwk02.top)</del><br>
项目演示地址：<del>[vivo移动端商城](http://fwk02.top)</del><br>
建议Chrome调试手机模式下预览<br>
因为刚买的域名主机所以要解析，实名认证才可以浏览，所以你们还是下把项目给下载下来本地运行看把！😊

### 废话
项目源码地址：[vivo-shop](https://github.com/Mynameisfwk/vivo-shop)，觉得还可以的话给个star 在这先谢谢了~<br>
刚出来实习两个月 所以没有那么的时间来写，只有周六周日有时间！所以帮忙star鼓励下！🙏

## 写在前面

> 这个小项目还有很多地方做的还不是那么完美还存在一些小BUG，不过后期我会努力完善的，但求各位大佬提出你们的->[建议](https://github.com/Mynameisfwk/vivo-shop/issues)，如果你觉的对你有帮助帮忙点个star谢谢！

> 因为比较赶所以有些功能还没实现，一些代码也没有优化好尤其是一些样式你们将就看吧，不过基本功能都写完了，没有实现都功能上拉下拉刷新、加载更多等等，后面会陆陆续续的做完的！

> vuex可以看看我写的这个项目 [地址在这里](https://github.com/Mynameisfwk/vue-Todo-list)

> 每周五更新上传一次，主要就是优化代码、增加功能、使这个小demo更加完美！

> 前端交流群740625675 志同道合的可以加下一起学习！

> Ps：因为我喜欢简约大气一点的所以主题颜色就是白+天蓝色

# 技术栈
> [vue-router](https://router.vuejs.org/zh-cn/) 是官方提供的路由器，使用vue.js构建单页面应用程序变得轻而易举。

> [vuex](https://vuex.vuejs.org/zh-cn/) 是一个专为 vue.js 应用程序开发的状态管理模式，简单来说Vuex就是管理数据的。

> [Mint UI](http://mint-ui.github.io/#!/zh-cn) 由饿了么前端团队推出的 Mint UI 是一个基于 vue.js 的移动端组件库。

> [better-scroll](http://ustbhuangyi.github.io/better-scroll/doc/options.html)：解决移动端各种滚动场景需求的插件，使移动端滑动体验更加流畅

> [axios](https://www.npmjs.com/package/axios)：用来请求后端api数据

## 效果预览

#### 首页、分类、动态、我的
![](https://user-gold-cdn.xitu.io/2018/5/17/1636ba09e546a28f?w=1555&h=608&f=png&s=419439)

#### 商品详情、提交订单、订单详情
![](https://user-gold-cdn.xitu.io/2018/5/17/1636bb0a57c224a2?w=1555&h=608&f=png&s=305775)

#### 文章列表、文章详情、文章收藏
![](https://user-gold-cdn.xitu.io/2018/5/26/1639adefcd1b5296?w=1555&h=608&f=png&s=637802)

#### 我的订单、商品收藏、我的购物车
![](https://user-gold-cdn.xitu.io/2018/5/18/16371f71217202ea?w=1555&h=608&f=png&s=246290)

#### 收货地址、地址添加、地址管理
![](https://user-gold-cdn.xitu.io/2018/5/26/1639add2f11ba68d?w=1555&h=608&f=png&s=127953)

## 开发目的
想着写一个案例放在开源网站上，时不时更新、完善、修改来提高自己技术能力，当然我也需要你们的建议有你们的建议我的作品也会更加完美

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
