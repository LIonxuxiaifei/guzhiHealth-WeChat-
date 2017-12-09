var utilMd5 = require("../../utils/md5.js")
var utilRandom = require("../../utils/random.js")
// var utilToken=require("../../utils/token.js")
var app=getApp()
// pages/stepFifth/stepFifth.js
Page({

  /**
   * 页面的初始数据
   */
  data: {
      weight1:'-',
      hehe:'-',
      array:'',
      bmi:17.5,
      bfr:24,
      ideal_weight: 50,
      bodyHeight:'',
      gender:'',
      zhishu:'',
      canshu:'',
      weightTarget:'',
  },

  /**
   * 生命周期函数--监听页面加载
   */
  
  onLoad: function (options) {


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
    var arr = []
    for (var i = 70; i < 299; i++) {
      var j = i / 2;
      arr.push(j);
    }
    this.setData({
      array: arr
    })
    // 登陆
    //用户信息
    var nickname = app.globalData.nickname;
    var avatar = app.globalData.avatar;
    var gender = app.globalData.gender;
    console.log(gender)
    var country = app.globalData.country;
    var province = app.globalData.province;
    var city = app.globalData.city;
    var birthday = app.globalData.birthday;
    var labor = app.globalData.labor;
    var height = app.globalData.bodyHeight;
    that.setData({
      bodyHeight: height,
      gender: gender,
    })
    var weight = app.globalData.bodyWeight;
    var target_weight = app.globalData.targetWeight;
    console.log(birthday)
    // 用户信息
    var d = new Date()
    console.log(d)
    var callTime = parseInt(d.getTime() / 1000)
    var key = "l7k6yZSJd1DCEK1C4TsQT0ivMfuZeXRj"
    var random = utilRandom.random(16)
    console.log(random)
    var token = utilMd5.md5(callTime + random + key)
    console.log(token)
    console.log(callTime)
    var zhishu1 = "../../image/zhishu/low.png"
    var zhishu2 = "../../image/zhishu/stand.png"
    var zhishu3 = "../../image/zhishu/high.png"
    var canshu1 = "../../image/zhishu/1.png"
    var canshu2 = "../../image/zhishu/2.png"
    var canshu3 = "../../image/zhishu/3.png"
    var canshu4 = "../../image/zhishu/4.png"
    var canshu5 = "../../image/zhishu/5.png"
    if (gender == 1) {
      var ideal_weight = height - 100;
      app.globalData.ideal_weight = ideal_weight
      console.log(ideal_weight)
      that.setData({
        ideal_weight: ideal_weight,
      })

    } else if (gender == 2) {
      var ideal_weight = height - 105;
      app.globalData.ideal_weight = ideal_weight
      console.log(ideal_weight)
      that.setData({
        ideal_weight: ideal_weight,
      })
    }

    var bmi = weight / (height * height / 10000);
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


    // console.log(bmi)
    console.log("用户的bmi指数")
    wx.login({
      success: function (res) {
        var code = res.code;
        console.log(code)
        wx.request({
          url: "https://gz-xcx.maoln.com/api/login",
          data: {
            code: code,
            token: token,
            t: callTime,
            r: random,
          },
          header: {
            // "Content-Type":"application/x-www-form-urlencoded"
            'X-Requested-With': 'XMLHttpRequest'
          },
          method: "post",
          success: function (res) {
            console.log(res)
            var uid = res.data.uid;
            var openid = res.data.openid;
            console.log(openid)
            console.log(uid)
            var sid = res.data.sid;
            console.log(sid)
            console.log("获取用户的sid")
            app.globalData.uid = uid;
            app.globalData.openid = openid;
            app.globalData.sid = sid;
            // 更新用户信息
            wx.request({
              url: "https://gz-xcx.maoln.com/api/user/update",
              data: {
                nickname: nickname,
                avatar: avatar,
                gender: gender,
                country: country,
                province: province,
                city: city,
                birthday: birthday,
                labor: labor,
                height: height,
                weight: weight,
                // targetweight: target_weight,
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
              },
            })
            // 更新用户信息
            // 获取用户信息

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
                wx.setStorage({
                  key: 'Sideal_weight',
                  data: ideal_weight,
                  success: function(res) {},
                  fail: function(res) {},
                  complete: function(res) {},
                })
                var fat = res.data.fat;
                var protein = res.data.protein;
                var carbohydrate = res.data.carbohydrate;
                var calorie = res.data.calorie;

                var fat = Math.round(fat * 100) / 100
                var protein = Math.round(protein * 100) / 100
                var carbohydrate = Math.round(carbohydrate * 100) / 100
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
        })
      },
    })
        // 登陆
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
  nextStep: function() {
    var targetWeight = app.globalData.targetWeight;
    console.log(targetWeight)
    if(targetWeight==""){
        wx.showToast({
          title: '请输入目标体重',
          icon: '',
          image: '../../image/zhishu/h.png',
          duration: 2000,
          mask: true,
          success: function(res) {},
          fail: function(res) {},
          complete: function(res) {},
        })
    }else{
      wx.navigateTo({
        url: '../testResult/testResult',
        success: function (res) { },
        fail: function (res) { },
        complete: function (res) { },
      })
    }

    // 更新用户信息
    var weightTarget=this.data.weightTarget;
    console.log(weightTarget)
    console.log("更新用户的目标体重")
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
        target_weight: weightTarget,
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
      },
    })
      // 更新用户信息
  },
  bindWeightchange: function(e) {
    var array=this.data.array;
    var targetWeight = array[e.detail.value]

    app.globalData.targetWeight = targetWeight;
    console.log(targetWeight)
    console.log("设置目标体重的全局变量")
  
    this.setData({ weight1: '' })
    var weightTarget = array[e.detail.value];
    wx.setStorage({
      key: 'STarget_weight',
      data: weightTarget,
      success: function(res) {},
      fail: function(res) {},
      complete: function(res) {},
    })
    // app.globalData.targetWeight=weightTarget;
    this.setData({
      weight_index: e.detail.value,
      weightTarget: targetWeight,
      hehe:'KG'
    })
    

  }
})