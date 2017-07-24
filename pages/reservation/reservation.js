const SerdetailURL = 'https://wangyunmeirong.realday.cn/index.php?s=/addon/Addresershop/Addresershop/getSerDetail/';
Page({
  data: {
    imgUrls: [
      '',
      '',
      ''
    ],
    indicatorDots: true,
    autoplay: true,
    interval: 5000,
    duration: 1000,
    info_title: '预约服务',
    rdetaildata: [
      { id: 1, rpoint: '', rdecs: '', raddress: '', rtel: '', rpname: '', rpimg: '', rpfile: '' },
    ]
  },

  callus: function () {
    var that = this;
    wx.makePhoneCall({
      phoneNumber: that.data.rdetaildata.rtel
    })
  },
  onLoad: function (options) {
    var that = this;
    wx.showToast({
      title: '加载中...',
      icon: 'loading',
      duration: 10000
    }),
      wx.request({
        url: SerdetailURL,
        data: { id: options.id },
        header: {
          'content-type': 'application/json'
        },
        success: function (res) {
          wx.hideToast();
          that.setData({
            rdetaildata: res.data,
            imgUrls: res.data.rimgs,
            ids: res.data.id
          })
        }
      })
  },
})