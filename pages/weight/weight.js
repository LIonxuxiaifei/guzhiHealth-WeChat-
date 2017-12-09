// pages/weight/weight.js
var app=getApp()
var utilMd5 = require("../../utils/md5.js")
var utilRandom = require("../../utils/random.js")
Page({

  /**
   * 页面的初始数据
   */
  data: {
    weightDetail: '55',
    weight_index: '',
    currentWeight: 55,
    idealWeight:55,
  },

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {
    var that=this
    wx.getStorage({
      key: 'STarget_weight',
      success: function (res) {
        var weightDetail = res.data
        that.setData({
          weightDetail: weightDetail
        })
      },
    })

    var targetWeight = app.globalData.targetWeight;
    var currentWeight = app.globalData.bodyWeight;
    var idealWeight = app.globalData.ideal_weight;
    // wx.request({
    //   url: "",
    //   data: ,
    //   header: {},
    //   method: GET,
    //   dataType: json,
    //   success: function(res) {},
    //   fail: function(res) {},
    //   complete: function(res) {},
    // })
    if(idealWeight==''){
      this.setData({
        idealWeight:idealWeight
      })
    }else{
      this.setData({
        weightDetail: targetWeight,
        currentWeight: currentWeight,
        idealWeight: idealWeight,
      })
    }

    
    var arr = []
    for (var i = 60; i < 299; i++) {
      var j = i / 2;
      arr.push(j);
    }
    this.setData({
      array1: arr
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
    var that = this
    wx.getStorage({
      key: 'Sideal_weight',
      success: function (res) {
        var idealWeight = res.data
        if (idealWeight==''){
          that.setData({
            idealWeight:55
          })
        }else{
          that.setData({
            idealWeight: idealWeight
          })
        }
  
      },
    })

    wx.getStorage({
      key: 'SCurrentWeight',
      success: function (res) {
        var currentWeight = res.data
        that.setData({
          currentWeight: currentWeight
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
  bindWeightChange: function (e) {
    this.setData({ weightDetail: '' })
    console.log(e.detail.value)

    var arr1=this.data.array1;
    var targetWeight = arr1[e.detail.value]
    wx.setStorage({
      key: 'STarget_weight',
      data: targetWeight,
      success: function(res) {},
      fail: function(res) {},
      complete: function(res) {},
    })
    app.globalData.targetWeight=targetWeight
    // 更新用户信息
    var uid = app.globalData.uid;
    var openid = app.globalData.openid;
    var sid = app.globalData.sid;
    var d = new Date()
    var callTime = parseInt(d.getTime() / 1000)
    var key = "l7k6yZSJd1DCEK1C4TsQT0ivMfuZeXRj"
    var random = utilRandom.random(16)
    var token = utilMd5.md5(callTime + random + key)
    wx.request({
      url: "https://gz-xcx.maoln.com/api/user/update",
      data: {
        // target_weight: targetWeight,
        target_weight: targetWeight,
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
      success: function (res) {
        console.log(res)
        console.log("更新用户信息")
        // 获取用户信息
        var that = this;
        var d = new Date()
        var callTime = parseInt(d.getTime() / 1000)
        var key = "l7k6yZSJd1DCEK1C4TsQT0ivMfuZeXRj"
        var random = utilRandom.random(16)
        var token = utilMd5.md5(callTime + random + key)
        var uid = app.globalData.uid;
        var sid = app.globalData.sid;
        var openid = app.globalData.openid;
        wx.request({
          url: "https://gz-xcx.maoln.com/api/user/info",
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
          success: function (res) {
            console.log(res)
            console.log("获取用户的各种参数和指数")
            var bmi = res.data.bmi;
            var bfr = res.data.bfr;
            var ideal_weight = res.data.ideal_weight;
            var fat = res.data.fat;
            var protein = res.data.protein;
            var carbohydrate = res.data.carbohydrate;
            var calorie = res.data.calorie;

            var calorie = Math.round(calorie * 100) / 100
            var fat = Math.round(fat * 100) / 100
            var protein = Math.round(protein * 100) / 100
            var carbohydrate = Math.round(carbohydrate * 100) / 100


            wx.setStorage({
              key: 'SBmi',
              data: bmi,
              success: function (res) { },
            })
            wx.setStorage({
              key: 'SBfr',
              data: bfr,
              success: function (res) { },
            })
            wx.setStorage({
              key: 'SProtein',
              data: protein,
              success: function (res) { },
            })
            wx.setStorage({
              key: 'SCarbohydrate',
              data: carbohydrate,
              success: function (res) { },
            })
            wx.setStorage({
              key: 'SFat',
              data: fat,
              success: function (res) { },
            })
            wx.setStorage({
              key: 'SCalorie',
              data: calorie,
              success: function (res) { },
            })
            // that.setData({
            //   fat: fat,
            //   protein: protein,
            //   carbohydrate: carbohydrate,
            //   calorie: calorie,
            // })

          },
        })
        // 获取用户信息
       
      },
    })
      // 更新用户信息
    
    this.setData({
      weight_index: e.detail.value
    })
  },
})