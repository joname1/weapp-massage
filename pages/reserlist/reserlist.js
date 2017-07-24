const SerlistURL = 'https://wangyunmeirong.realday.cn/index.php?s=/addon/Addresershop/Addresershop/getSerList';
const SearchListURL = 'https://wangyunmeirong.realday.cn/index.php?s=/addon/Addresershop/Addresershop/searchShopList/keyword/';
Page({
  data: {
    reg_title: '预约门店',
    reserdata: [
      { id: 1, rpoint: '', rimg: '', raddress: '', rtel: '' },
    ],
  },
  onLoad: function (options) {
    var that = this;
    wx.showToast({
      title: '加载中...',
      icon: 'loading',
      duration: 10000
    }),
      wx.request({
        url: SerlistURL,
        data: {},
        header: {
          'content-type': 'application/json'
        },
        success: function (res) {
          wx.hideToast();
          that.setData({
            reserdata: res.data
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
    var that = this;
    wx.request({
      url: SerlistURL,
      data: {},
      header: {
        'content-type': 'application/json'
      },
      success: function (res) {
        that.setData({
          reserdata: res.data
        })
      }
    })
    this.setData({
      inputVal: "",
      inputShowed: false
    });
  },
  clearInput: function () {
    var that = this;
    wx.request({
      url: SerlistURL,
      data: {},
      header: {
        'content-type': 'application/json'
      },
      success: function (res) {
        that.setData({
          reserdata: res.data
        })
      }
    })
    this.setData({
      inputVal: ""
    });
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
      url: SearchListURL + e.detail.value,
      data: {},
      header: {
        'content-type': 'application/json'
      },
      success: function (res) {
        wx.hideToast();
        that.setData({
          reserdata: res.data
        })
      }
    })
    this.setData({
      inputVal: e.detail.value
    });
  }
})