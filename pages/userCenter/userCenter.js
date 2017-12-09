// pages/userCenter/userCenter.js
var app = getApp()
Page({

  /**
   * 页面的初始数据
   */
  data: {
    userInfo:'',
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
  testReport: function() {
    wx.navigateTo({
      url: '../testResult/testResult',
      success: function(res) {},
    })
  },
  weightRecording: function() {
    wx.navigateTo({
      url: '../weightRecording/weightRecording',
      success: function(res) {},
    })
  },
  myPersonal: function() {
    wx.navigateTo({
      url: '../myPersonal/myPersonal',
      success: function(res) {},
    })
  },
  reTest: function() {
    app.globalData.tiaozhuan=1;
    wx.reLaunch({
      url: '../shouye/shouye',
      success: function(res) {},
    })
  }
})