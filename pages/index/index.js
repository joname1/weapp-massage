Page({
  data: {
    grab_title_cn: '集团简介',
    grab_title_en: 'Introduction',
    grbm_title_cn: '培训报名',
    grbm_title_en: 'Registration',
    grsc_title_cn: '集团商城',
    grsc_title_en: 'Group mall',
    gryy_title_cn: '预约服务',
    gryy_title_en: 'Reservation',
    footer_tel: '4000-600-183',
    footer_add: '广西南宁市西乡塘区新阳街道龙腾路80号台北中心',
    imgUrls: [
      'https://wangyunmeirong.realday.cn/Uploads/assets/home1.png',
      'https://wangyunmeirong.realday.cn/Uploads/assets/home2.png',
      'https://wangyunmeirong.realday.cn/Uploads/assets/home3.png'
    ],
    indicatorDots: true,
    autoplay: true,
    interval: 5000,
    duration: 1000
  },
  hotline: function () {
    wx.makePhoneCall({
      phoneNumber: '4000600183'
    });
  },
  onShareAppMessage: function (res) {
    if (res.from === 'button') {
      //console.log(res.target)
    }
    return {
      title: '王昀集团催乳小儿推拿微服务',
      path: 'pages/index/index',
      success: function (res) {
        //console.log(res)
      },
    }
  }
})