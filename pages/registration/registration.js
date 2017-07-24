const searchURL = 'https://wangyunmeirong.realday.cn/index.php?s=/addon/Addshop/Addshop/searchShopList/keyword/';
const shopURL = 'https://wangyunmeirong.realday.cn/index.php?s=/addon/Addshop/Addshop/getShopList';
Page({
  data: {
    reg_title: '培训报名',
    regdata: [
      { id: 1, point: '', img: '', address: '', tel: '' }
    ],
  },
  onLoad: function () {
    var that = this;
    wx.showToast({
      title: '加载中...',
      icon: 'loading',
      duration: 10000
    }),
      wx.request({
        url: shopURL,
        data: {},
        header: {
          'content-type': 'application/json'
        },
        success: function (res) {
          wx.hideToast();
          that.setData({
            regdata: res.data
          })
        }
      })
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
    var that = this;
    wx.request({
      url: shopURL,
      data: {},
      header: {
        'content-type': 'application/json'
      },
      success: function (res) {
        that.setData({
          regdata: res.data
        })
      }
    })
  },
  clearInput: function () {
    this.setData({
      inputVal: ""
    });
    var that = this;
    wx.request({
      url: shopURL,
      data: {},
      header: {
        'content-type': 'application/json'
      },
      success: function (res) {
        that.setData({
          regdata: res.data
        })
      }
    })
  },
  inputTyping: function (e) {
    if (!e.detail.value) {
      return;
    }
    wx.showToast({
      title: '搜索中...',
      icon: 'loading',
      duration: 10000
    });
    var that = this;
    wx.request({
      url: searchURL + e.detail.value,
      data: {},
      header: {
        'content-type': 'application/json'
      },
      success: function (res) {
        wx.hideToast();
        that.setData({
          regdata: res.data
        })
      }
    })
    this.setData({
      inputVal: e.detail.value
    });
  }
})