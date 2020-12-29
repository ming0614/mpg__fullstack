# 云开发 quickstart

这是云开发的快速启动指引，其中演示了如何上手使用云开发的三大基础能力：

- 数据库：一个既可在小程序前端操作，也能在云函数中读写的 JSON 文档型数据库
- 文件存储：在小程序前端直接上传/下载云端文件，在云开发控制台可视化管理
- 云函数：在云端运行的代码，微信私有协议天然鉴权，开发者只需编写业务逻辑代码

## 参考文档

- [云开发文档](https://developers.weixin.qq.com/miniprogram/dev/wxcloud/basis/getting-started.html)

# 电商小程序开发
  前端

- 前端框架 vant 
  1. npm i @vant/weapp -S --production 
  来自有赞， 微信生态得为长
  2. npm init -y 
  安装第三方插件 
  3. 构建
  miniprogram_npm 
  @vant/weapptton/index

- api在哪里？
  商品列表 
  apifm-wxapi 提供数据 


  - 电商项目的感觉
    搜索栏
    导航栏
    banners
    推荐
    商品列表

- 总结一下搜索体验 把自己当小白
  placeholder + padding-left + bindinput + bindConfirm + search 图标


- 业务
    1. 搜索
    2. tabbar(前端)条件筛选业务(后端查询参数? order=price)
    3. 列表业务 wx:for
    data:{
      goods:[]
    }
    apifm 
    /goods?order=&page=&{n}&size=20&keyword=addidas []


- 页面的生命周期
 谁先发生，适合做什么
 onLoad 加载资源wxml，wxss js 最少
 onShow wxml +  wxss 渲染 js 还没有执行完 还不能交互的
 onReady 