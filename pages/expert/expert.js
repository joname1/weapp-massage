const expertURL = 'https://wangyunmeirong.realday.cn/index.php?s=/addon/Addresershop/Addresershop/getSerDetail/';
Page({
  data: {
    expertlist: [],
  },

  onLoad: function (options) {
    var that = this;
    wx.showToast({
      title: '加载中...',
      icon: 'loading',
      duration: 10000
    }),
      wx.request({
        url: expertURL,
        data: {id: options.id},
        header: {
          'content-type': 'json'
        },
        success: function (res) {
          wx.hideToast();
          that.setData({
            expertlist: res.data.expertses
          })
        }
      })
  }
})