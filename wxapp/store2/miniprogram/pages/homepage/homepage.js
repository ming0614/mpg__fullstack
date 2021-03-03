// miniprogram/pages/homepage/homepage.js
const app = getApp(); //全局方法， app.js 定义的全局方法

Page({

  /**
   * 页面的初始数据
   */
  data: {
    
    fruitInfo: [],
    offline: false, // 打烊
    isShow: false,
    imgUrls: [
      'https://6d70-mpg-8ghafon5a7e64e30-1304585125.tcb.qcloud.la/11.jpg?sign=85aa5b34f17f9dffc80c90366857439d&t=1611747615',
      'https://6d70-mpg-8ghafon5a7e64e30-1304585125.tcb.qcloud.la/12.jpg?sign=cd5a996ecbe058d306b8629b98156ac0&t=1611747638',
      'https://6d70-mpg-8ghafon5a7e64e30-1304585125.tcb.qcloud.la/13.jpg?sign=0acd37612b30620b6c75edd64d55069b&t=1611747655',
      'https://6d70-mpg-8ghafon5a7e64e30-1304585125.tcb.qcloud.la/14.jpg?sign=faada2fc983345ac42000f78f9a93843&t=1611747670'
    ],
    motto: 'Hello World',
    userInfo: {},
    hasUserInfo: false,
    canIUse: wx.canIUse('button.open-type.getUserInfo'),
    navData: [
      {
        text: '首页'
      },
      {
        text: '热点快讯'
      },
      {
        text: 'NBA'
      },
      {
        text: 'CBA'
      },
      {
        text: 'FIBA'
      },
      {
        text: '欧冠'
      },
      {
        text: '西甲'
      },
      {
        text: '中超'
      },
      {
        text: '英超'
      },
      {
        text: '下课'
      }
    ],
    currentTab: 0,
    navScrollLeft: 0,
  

    
  
    activeTypeId: 0,
    typeCat: [ /** 类型的数据配置 */
      {
        id: 0, name:"美味鲜果",
      },
      {
        id: 1, name: "今日特惠"
      },
      {
        id: 2, name: "新鲜上架"
      },
      {
        id: 3, name: "店主推荐"
      }
    ]
  },
  onLoad: function () {
    if (app.globalData.userInfo) {
      this.setData({
        userInfo: app.globalData.userInfo,
        hasUserInfo: true
      })
    } else if (this.data.canIUse) {
      // 由于 getUserInfo 是网络请求，可能会在 Page.onLoad 之后才返回
      // 所以此处加入 callback 以防止这种情况
      app.userInfoReadyCallback = res => {
        this.setData({
          userInfo: res.userInfo,
          hasUserInfo: true
        })
      }
    } else {
      // 在没有 open-type=getUserInfo 版本的兼容处理
      wx.getUserInfo({
        success: res => {
          app.globalData.userInfo = res.userInfo
          this.setData({
            userInfo: res.userInfo,
            hasUserInfo: true
          })
        }
      })
    }
  
 
 
    wx.getSystemInfo({
      success: (res) => {
        this.setData({
          pixelRatio: res.pixelRatio,
          windowHeight: res.windowHeight,
          windowWidth: res.windowWidth
        })
      },
    })
  },
  switchNav(event) {
    var cur = event.currentTarget.dataset.current;
    //每个tab选项宽度占1/5
    var singleNavWidth = this.data.windowWidth / 5;
    //tab选项居中                            
    this.setData({
      navScrollLeft: (cur - 2) * singleNavWidth
    })
    if (this.data.currentTab == cur) {
      return false;
    } else {
      this.setData({
        currentTab: cur
      })
    }
  },
  switchTab(event) {
    console.log(event);
    var cur = event.detail.current;
    var singleNavWidth = this.data.windowWidth / 5;
    this.setData({
      currentTab: cur,
      navScrollLeft: (cur - 2) * singleNavWidth
    });
  },


  // 加入购物车
  addCartByHome(e) {
    const id = e.currentTarget.dataset.fid;
    // console.log(id);
    // 1. 去app.js carts 有没有? 
    // 2. 加入购物车或数量加一
    let newItem = {}
    // 全局的云数据库操作 where 
    // 传统后端  全局的CRUD 
    app.getInfoWhere('fruit-board', {_id: id}, e => {
      // console.log(e)
      let newCartItem = e.data[0];
      newCartItem.num = 1;
      app.isNotRepeteToCart(newCartItem)
      wx.showToast({
        title: '已添加至购物车'
      })
      
    })


  },
  // 去详情页 
  tapToDetail(e) {
    console.log('+++++');
    const id = e.currentTarget.dataset.fid;
    console.log(id);
    wx.navigateTo({
      url: '/pages/detail/detail?_id='+id,
    })
  },
  typeSwitch(e) {
    this.setData({
      activeTypeId: e.currentTarget.dataset.id
    })
    // 重新走数据库， 刷新列表
    wx.showLoading({
      title: '数据加载中...'
    });
    console.log(e.currentTarget.dataset.id)
    switch(e.currentTarget.dataset.id) {
      case 0:
        app.getInfoByOrder('fruit-board', 'time', 'desc', e => {
          this.setData({
            fruitInfo: e.data
          })
          wx.hideLoading();
        })
        break;
      // 今日特惠
      case 1:
        app.getInfoWhere('fruit-board', {myClass:'1'}, e => {
          this.setData({
            fruitInfo: e.data
          })
        })
        wx.hideLoading();
        break;  
      //新鲜上架
      case 2:
        app
          .getInfoByOrder('fruit-board', 'time', 'desc', e => {
            this.setData({
              fruitInfo: e.data
            })
          })
          wx.hideLoading();
        break;
      // 店主推荐
      case 3:
        app.getInfoWhere('fruit-board', { recommend: '1'}, e => {
          this.setData({
            fruitInfo: e.data
          })
        })
        wx.hideLoading();
        break;
    }
  },
  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {
    console.log('load') // wxml wxss
    wx.showLoading({
      title: '正在加载中...',
    })
  },

  /**
   * 生命周期函数--监听页面初次渲染完成
   */
  onReady: function () {
    // ready 在show 后面？ js 跟页面交互了 
    console.log('ready'); 
    // 
  },

  /**
   * 生命周期函数--监听页面显示
   */
  onShow: function () {
    console.log('show')
    // 数据请求 云端请求数据 比较早， 放
// 到ready 晚了, 花时间， 尽量提前, 
// onLoad 正在加载  加载且计算渲染页面， 线程
// 如果又再启动下载进程的话 可能就会卡到
    // 封装所有的请求为一个方法
    // app  当前应用
    app.getInfoByOrder('fruit-board', 'time', 'desc', e => {
      this.setData({
        fruitInfo: e.data,
        isShow:true
      })
      wx.hideLoading(); // 
    })
  },

  /**
   * 生命周期函数--监听页面隐藏
   */
  onHide: function () {

  },

  /**
   * 生命周期函数--监听页面卸载
   */
  onUnload: function () {

  },

  /**
   * 页面相关事件处理函数--监听用户下拉动作
   */
  onPullDownRefresh: function () {

  },

  /**
   * 页面上拉触底事件的处理函数
   */
  onReachBottom: function () {

  },

  /**
   * 用户点击右上角分享
   */
  onShareAppMessage: function () {

  }
})
