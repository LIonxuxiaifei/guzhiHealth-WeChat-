//app.js
App({
  onLaunch: function () {
    // 展示本地存储能力
    var logs = wx.getStorageSync('logs') || []
    logs.unshift(Date.now())
    wx.setStorageSync('logs', logs)

    // 登录
    wx.login({
      success: res => {
        // 发送 res.code 到后台换取 openId, sessionKey, unionId
      }
    })
    // 获取用户信息
    wx.getSetting({
      success: res => {
        if (res.authSetting['scope.userInfo']) {
          // 已经授权，可以直接调用 getUserInfo 获取头像昵称，不会弹框
          wx.getUserInfo({
            success: res => {
              // 可以将 res 发送给后台解码出 unionId
              this.globalData.userInfo = res.userInfo

              // 由于 getUserInfo 是网络请求，可能会在 Page.onLoad 之后才返回
              // 所以此处加入 callback 以防止这种情况
              if (this.userInfoReadyCallback) {
                this.userInfoReadyCallback(res)
              }
            }
          })
        }
      }
    })
  },
  globalData: {
    userInfo: null,
    gender:'2',
    birthday:'1995-06-20',
    labor: 1, //劳动强度
    bodyHeight: 160,//用户身高
    bodyWeight: 50,//用户体重
    targetWeight:'',//用户目标体重
    uid:1,//用户id
    openid:'',//用户openid
    sid:'',//用户sid
    nickname:'',//用户昵称
    avatar:'',//用户头像
    gender:2,//用户性别
    country:'',//用户国家
    province:'',//用户省份
    city:'',//用户城市
    bmi:'',//用户bmi
    bfr:'',//用户bfr
    ideal_weight:'',//理想体重
    type:0,//用户食谱类型
    taste:1,//用户食谱风味
    difficulty:0,//食谱制作难度
    tag:1,//食谱标签
    foodDetailId:'',
    count:1,//产品数量
    recipe_id:'',//用户id
    foodDetailId1: '',
    fat:'',//脂肪
    protein:'',//蛋白质
    carbohydrate:'',//碳水化物
    calorie:'',//食物产生的热量
    tiaozhuan:''//跳转所需要传的参数
  }
})