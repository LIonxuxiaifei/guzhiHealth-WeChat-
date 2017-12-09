// pages/shouye/shouye.js
var utilMd5 = require("../../utils/md5.js")
var utilRandom = require("../../utils/random.js")
var app = getApp()
Page({

  /**
   * 页面的初始数据
   */
  data: {
    // date:"1995年6月20日",
    date:"----"
  },

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {

    var that = this
    wx.getUserInfo({
      withCredentials: true,
      lang: '',
      success: function (res) {
        console.log(res)
        var userInfo = res.userInfo;
        var nickName=userInfo.nickName;
        var avatarUrl=userInfo.avatarUrl;
        var gender=userInfo.gender;
        var country=userInfo.country;
        var province=userInfo.province;
        var city=userInfo.city;
        app.globalData.nickname = nickName;
        app.globalData.avatar=avatarUrl;
        // app.globalData.gender=gender;
        app.globalData.country=country;
        app.globalData.province=province;
        app.globalData.city=city;
        console.log(userInfo)
        that.setData({
          userInfo: userInfo,
        })
      },
    })
  },

  /**
   * 生命周期函数--监听页面初次渲染完成
   */
  onReady: function () {
  
  },

  /**
   * 生命周期函数--监听页面显示
   */
  onShow: function () {

    var d = new Date()
    var callTime = parseInt(d.getTime() / 1000)
    var key = "l7k6yZSJd1DCEK1C4TsQT0ivMfuZeXRj"
    var random = utilRandom.random(16)
    var token = utilMd5.md5(callTime + random + key)
    wx.login({
      success: function(res) {
        var code=res.code;
        wx.request({
          url: "https://gz-xcx.maoln.com/api/login",
          data: {
            code: code,
            token: token,
            t: callTime,
            r: random,
          },
          header: {
            'X-Requested-With': 'XMLHttpRequest'
          },
          method: "post",
          success: function(res) {
                // wx.getStorage({
                //   key: 'tiaozhuan',
                  // success: function (res) {
                    // var tiaozhuan = res.data
                    var tiaozhuan=app.globalData.tiaozhuan
                    console.log(tiaozhuan)
                    if (tiaozhuan != 1) {
                      if (res.data.sid != "") {
                        wx.switchTab({
                          url: '../mainPage/mainPage',
                          success: function (res) { },
                        })
                      }
                    }
                  // },
                // })
          },
        })
      },
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
  
  },
  nextStep: function () {
    app.globalData.tiaozhuan=0;
    wx.navigateTo({
      url: '../stepThird/stepThird',
      success: function(res) {},
      fail: function(res) {},
      complete: function(res) {},
    })
  },
  changeColor: function () {
    var bgColor = this.data.style == '#a4db7c' ? 'background-color: #fff;' : 'background-color: #a4db7c;color:#fff;';
    var bgColor1 = this.data.style1 == '#a4db7c' ? 'background-color: #a4db7c;color:#fff;' : 'background-color: #fff;color:#5e5e5e;';
    app.globalData.gender = 1;
    // 设置背景颜色数据
    this.setData({
      style: bgColor,
      style1:bgColor1
    });
  },
  changeColor1: function () {
    var bgColor1 = this.data.style == '#a4db7c' ? 'background-color: #fff;' : 'background-color: #a4db7c;color:#fff;';
    var bgColor = this.data.style1 == '#a4db7c' ? 'background-color: #a4db7c;color:#fff;' : 'background-color: #fff;color:#5e5e5e;';
    // 设置背景颜色数据
    app.globalData.gender = 2;
    this.setData({
      style: bgColor,
      style1: bgColor1
    });
  },
  bindDateChange: function (e) {
    app.globalData.birthday = e.detail.value;
    // var birthday = app.globalData.birthday;
    // console.log(birthday)
    console.log('picker发送选择改变，携带值为', e.detail.value)
    this.setData({
      date: e.detail.value
    })
  },


})
