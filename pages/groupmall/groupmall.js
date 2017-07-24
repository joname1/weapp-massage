Page({
  data: {
    store_title: '集团商城',
    cuiru: '催乳服务定价标准',
    p1_smfw_once: '单次: 300元, 金牌: 500元',
    p1_smfw_thrice: '三次: 600元, 金牌: 1200元',
    p1_ddfw_once: '单次: 200元, 金牌: 400元',
    p1_ddfw_thrice: '三次: 400元, 金牌: 900元',
    p2_ddfw_once: '单次: 200元, 金牌: 400元',
    p2_ddfw_thrice: '三次: 400元, 金牌: 900元',
    p2_smfw_once: '单次: 300元, 金牌: 500元',
    p2_smfw_thrice: '三次: 600元, 金牌: 1200元',
    xiaoer: '小儿推拿服务定价标准',
    p3_ddfw_once: '单次: 120元, 800元(10次), 1200元(20次)',
    chanhou: '产后康复服务定价标准',
    pricedata: [
      { id: 1, title: '宫寒调理', price: '¥3880/疗程', time: '90分钟' },
      { id: 2, title: '卵巢保养', price: '¥3880/疗程', time: '90分钟' },
      { id: 3, title: '养心安神', price: '¥3680/疗程', time: '60分钟' },
      { id: 4, title: '私密紧致', price: '¥3880/疗程', time: '60分钟' },
      { id: 5, title: '神灸理疗', price: '¥1980/疗程', time: '60分钟' },
      { id: 6, title: '满月发汗', price: '¥680 (3次)', time: '60分钟' },
      { id: 7, title: '产后强身浴', price: '¥1280 (3次)', time: '60分钟' },
      { id: 8, title: '产后整体康复', price: '¥6980/疗程', time: '150分钟' },
      { id: 9, title: '产后美体塑形', price: '¥3980/疗程', time: '90分钟' },
      { id: 10, title: '产后骨盆修复', price: '¥4280/疗程', time: '90分钟' },
      { id: 11, title: '产后痛症调理', price: '¥4280/疗程', time: '90分钟' },
      { id: 12, title: '乳腺护理/丰胸美乳', price: '¥3980/疗程', time: '90分钟' },
      { id: 13, title: '孕前/产后气血调整', price: '¥3880/疗程', time: '90分钟' }
    ],
    caution1: '催乳师、小儿推拿师、产后康复、母婴护理等项目根据市场需求价格会有变动.'
  },

  calltel: function () {
    wx.makePhoneCall({
      phoneNumber: '4000600183'
    })
  },

  callmobile: function () {
    wx.makePhoneCall({
      phoneNumber: '13393646247'
    })
  }
})