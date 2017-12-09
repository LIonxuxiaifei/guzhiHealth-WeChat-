// pages/weightRecording/weightRecording.js
var utilMd5 = require("../../utils/md5.js")
var utilRandom = require("../../utils/random.js")
var app = getApp()
Page({

  /**
   * 页面的初始数据
   */
  data: {
  
  },

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {
    var that=this
    var d = new Date()
    var callTime = parseInt(d.getTime() / 1000)
    var key = "l7k6yZSJd1DCEK1C4TsQT0ivMfuZeXRj"
    var random = utilRandom.random(16)
    var token = utilMd5.md5(callTime + random + key)
    var sid=app.globalData.sid;
    var uid=app.globalData.uid;
        wx.request({
          url: "https://gz-xcx.maoln.com/api/user/log",
          data: {
            uid: uid,
            token: token,
            t: callTime,
            r: random,
            sid: sid,
          },
          header: {
            'X-Requested-With': 'XMLHttpRequest'
          },
          method: "post",
          success: function(res) {
            // console.log(res)
            var detail=res.data;
            console.log(detail)
            detail.reverse()
            console.log(detail)
            that.setData({
              detail:detail,
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
  
  }
})