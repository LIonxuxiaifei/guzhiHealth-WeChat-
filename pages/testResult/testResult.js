// pages/testResult/testResult.js
var app = getApp()
var utilMd5 = require("../../utils/md5.js")
var utilRandom = require("../../utils/random.js")
Page({

  /**
   * 页面的初始数据
   */
  data: {
      currentWeight:50,
      currentBMI:17.5,
      currentBfr:'',
      currentIdeal_weight:50,
      protein:'',
      fat:'',
      carbohydrate:'',
      heat:'',
      // dWeight:50,
      targetWeight:35,
      canshu:'',
      zhishu:'',
      people:'',
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
    var currentWeight = app.globalData.bodyWeight;
    wx.setStorage({
      key: 'SCurrentWeight',
      data: currentWeight,
      success: function(res) {},
      fail: function(res) {},
      complete: function(res) {},
    })
    var currentBMI = app.globalData.bmi;
    var currentBFR = app.globalData.bfr;
    var currentIdeal_weight = app.globalData.ideal_weight;
    // 获取缓存
    wx.getStorage({
      key: 'SCurrentWeight',
      success: function(res) {
        var currentWeight=res.data
        that.setData({
          currentWeight: currentWeight
        })
      },
    })
    wx.getStorage({
      key: 'SBmi',
      success: function (res) {
        var currentBMI = res.data
        that.setData({
          currentBMI: currentBMI
        })
      },
    })
    wx.getStorage({
      key: 'SBfr',
      success: function (res) {
        var currentBfr = res.data
        that.setData({
          currentBfr: currentBfr
        })
      },
    })
    wx.getStorage({
      key: 'Sideal_weight',
      success: function (res) {
        var currentIdeal_weight = res.data
        that.setData({
          currentIdeal_weight: currentIdeal_weight
        })
      },
    })
    // 获取缓存

    // var dWeight = app.globalData.targetWeight;
    var targetWeight = app.globalData.targetWeight;

    console.log(targetWeight)
    console.log("获取目标的当前体重")

    // var fat = app.globalData.fat;
    // var protein = app.globalData.protein;
    // var carbohydrate = app.globalData.carbohydrate;
    // var calorie = app.globalData.calorie;
    var that = this
    if (targetWeight == '') {
      that.setData({
        targetWeight: 35
      })
    }else{
      that.setData({
        targetWeight:targetWeight
      })
    }

    this.setData({
      currentWeight: currentWeight,
      currentBMI: currentBMI,
      currentBfr: currentBFR,
      currentIdeal_weight: currentIdeal_weight,
      // fat: fat,
      // protein: protein,
      // carbohydrate: carbohydrate,
      // heat: calorie,
      // targetWeight: targetWeight,
    })
    var that = this;
    var gender = app.globalData.gender;
    var zhishu1 = "../../image/zhishu/low.png"
    var zhishu2 = "../../image/zhishu/stand.png"
    var zhishu3 = "../../image/zhishu/high.png"
    var canshu1 = "../../image/zhishu/1.png"
    var canshu2 = "../../image/zhishu/2.png"
    var canshu3 = "../../image/zhishu/3.png"
    var canshu4 = "../../image/zhishu/4.png"
    var canshu5 = "../../image/zhishu/5.png"
    var bmi = currentBMI;
    var bfr = currentBFR;
    if (bmi < 18.5) {
      that.setData({
        canshu: canshu1,
        people: '消瘦'
      })
    } else if (bmi > 18.5 & bmi < 24.9) {
      that.setData({
        canshu: canshu2,
        people: '正常'
      })
    } else if (bmi > 25 & bmi < 29) {
      that.setData({
        canshu: canshu3,
        people: '超重'
      })
    } else if (bmi > 30 & bmi < 39.9) {
      that.setData({
        canshu: canshu4,
        people: '肥胖'
      })
    } else if (bmi > 40) {
      that.setData({
        canshu: canshu5,
        people: '极胖'
      })
    }

    if (gender == 2) {
      if (bfr > 25 & bfr < 31.9) {
        that.setData({
          zhishu: zhishu2,
        })
      } else if (bfr > 32) {
        that.setData({
          zhishu: zhishu3
        })
      } else if (bfr < 25) {
        that.setData({
          zhishu: zhishu1
        })
      }
    } else if (gender == 1) {
      if (bfr > 20 & bfr < 24.9) {
        that.setData({
          zhishu: zhishu2,
        })
      } else if (bfr > 25) {
        that.setData({
          zhishu: zhishu3
        })
      } else if (bfr < 20) {
        that.setData({
          zhishu: zhishu1
        })
      }
    }
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
          success: function(res) {},
        })
        wx.setStorage({
          key: 'SBfr',
          data: bfr,
          success: function (res) { },
        })
        wx.setStorage({
          key: 'SProtein',
          data: protein,
          success: function(res) {},
        })
        wx.setStorage({
          key: 'SCarbohydrate',
          data: carbohydrate,
          success: function(res) {},
        })
        wx.setStorage({
          key: 'SFat',
          data: fat,
          success: function(res) {},
        })
        wx.setStorage({
          key: 'SCalorie',
          data: calorie,
          success: function (res) {},
        })

        
        that.setData({
          fat:fat,
          protein:protein,
          carbohydrate:carbohydrate,
          heat:calorie,
        })
        console.log(fat)
        console.log("给脂肪取整")
        app.globalData.bmi = bmi;
        console.log("获取用户的bmi指数")
        app.globalData.bfr = bfr;
        app.globalData.ideal_weight = ideal_weight;
        app.globalData.fat = fat;
        app.globalData.protein = protein;
        app.globalData.carbohydrate = carbohydrate;
        app.globalData.calorie = calorie;

        if (bmi < 18.5) {
          that.setData({
            canshu: canshu1,
          })
        } else if (bmi > 18.5 & bmi < 24.9) {
          that.setData({
            canshu: canshu2
          })
        } else if (bmi > 25 & bmi < 29) {
          that.setData({
            canshu: canshu3
          })
        } else if (bmi > 30 & bmi < 39.9) {
          that.setData({
            canshu: canshu4
          })
        } else if (bmi > 40) {
          that.setData({
            canshu: canshu5
          })
        }

        if (gender == 2) {
          if (bfr > 25 & bfr < 31.9) {
            that.setData({
              zhishu: zhishu2,
            })
          } else if (bfr > 32) {
            that.setData({
              zhishu: zhishu3
            })
          } else if (bfr < 25) {
            that.setData({
              zhishu: zhishu1
            })
          }
        } else if (gender == 1) {
          if (bfr > 20 & bfr < 24.9) {
            that.setData({
              zhishu: zhishu2,
            })
          } else if (bfr > 25) {
            that.setData({
              zhishu: zhishu3
            })
          } else if (bfr < 20) {
            that.setData({
              zhishu: zhishu1
            })
          }
        }

        that.setData({
          bmi: bmi,
          bfr: bfr,
          ideal_weight: ideal_weight,
        })

        console.log(bmi)
        console.log(bfr)
        console.log(ideal_weight)
      },
    })
        // 获取用户信息
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
  reTest: function() {
    app.globalData.tiaozhuan=1;
    wx.reLaunch({
      url: '../shouye/shouye',
      success: function(res) {},
      fail: function(res) {},
      complete: function(res) {},
    })
  },
  toMainPage: function() {
    wx.switchTab({
      url: '../mainPage/mainPage',
      success: function(res) {},
      fail: function(res) {},
      complete: function(res) {},
    })
  }
})