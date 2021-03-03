// miniprogram/components/search/search.js
Page({
  data: {
    list: [],
    userPart:[],

  },
  showInput: function () {
    this.setData({
    inputShowed: true
    });
    },
    hideInput: function () {
    this.setData({
    inputVal: "",
    inputShowed: false
    });
    // getList(this);
    },
    clearInput: function () {
    this.setData({
    inputVal: ""
    });
    // getList(this);
    },
    // inputTyping: function (e) {
    // //搜索数据
    // // getList(this, e.detail.value);
    // this.setData({
    // inputVal: e.detail.value      //btnSbmit
    // });
    // },
  inputTyping: function (e) {
      let that = this;
      const db = wx.cloud.database()
      db.collection('fruit-board').where({
        name:/e.detail.value/i
      })
      db.collection('fruit-board').where({
        name:db.RegExp({
          regexp:e.detail.value,
          options:'i',
        })
      }).get({
        success: res => {
          that.setData({
            userPart: res.data
          })
          this.setData({
            queryResult: JSON.stringify(res.data, null, 2),       
          })
          console.log('[数据库] [查询记录] 成功: ', res)  
        },
        fail: err => {
          wx.showToast({
            icon: 'none',
            title: '查询记录失败'
          })
          console.error('[数据库] [查询记录] 失败：', err)
        }
      })
    },
});