// pages/mainPage/mainPage.js
var utilMd5=require("../../utils/md5.js")
var utilRandom=require("../../utils/random.js")
var app = getApp()
Page({

  /**
   * 页面的初始数据
   */
  data: {
    userInfo: '',
    detail:[
      {
        url1: '/image/mainPage/minus1.png',
        url2: '/image/mainPage/add1.png',
        fN: '杂粮饼干',
        num: '1',
        id: '1',
    },
      {
        url1: '/image/mainPage/minus1.png',
        url2: '/image/mainPage/add1.png',
        fN: '牛奶饼干',
        num: '1',
        id: '2',
      },
      {
        url1: '/image/mainPage/minus1.png',
        url2: '/image/mainPage/add1.png',
        fN: '牛奶饼干1',
        num: '1',
        id:'3',
      },
      {
        url1: '/image/mainPage/minus1.png',
        url2: '/image/mainPage/add1.png',
        fN: '牛奶饼干2',
        num: '1',
        id: '4',
      },
    ],
    detail1: [
      {
        url1: '/image/mainPage/minus1.png',
        url2: '/image/mainPage/add1.png',
        fN: '杂粮饼干',
        num: '1',
        id: '1',
      },
      {
        url1: '/image/mainPage/minus1.png',
        url2: '/image/mainPage/add1.png',
        fN: '牛奶饼干',
        num: '1',
        id: '2',
      },
      {
        url1: '/image/mainPage/minus1.png',
        url2: '/image/mainPage/add1.png',
        fN: '牛奶饼干1',
        num: '1',
        id: '3',
      },
      {
        url1: '/image/mainPage/minus1.png',
        url2: '/image/mainPage/add1.png',
        fN: '牛奶饼干2',
        num: '1',
        id: '4',
      },
    ],
    detail2: [
      {
        url1: '/image/mainPage/minus1.png',
        url2: '/image/mainPage/add1.png',
        fN: '杂粮饼干',
        num: '1',
        id: '1',
      },
      {
        url1: '/image/mainPage/minus1.png',
        url2: '/image/mainPage/add1.png',
        fN: '牛奶饼干',
        num: '1',
        id: '2',
      },
      {
        url1: '/image/mainPage/minus1.png',
        url2: '/image/mainPage/add1.png',
        fN: '牛奶饼干1',
        num: '1',
        id: '3',
      },
      {
        url1: '/image/mainPage/minus1.png',
        url2: '/image/mainPage/add1.png',
        fN: '牛奶饼干2',
        num: '1',
        id: '4',
      },
    ],
    detailx: [
      {
        url1: '/image/mainPage/minus1.png',
        url2: '/image/mainPage/add1.png',
        fN: '杂粮饼干',
        num: '1',
        id: '1',
      },
      {
        url1: '/image/mainPage/minus1.png',
        url2: '/image/mainPage/add1.png',
        fN: '牛奶饼干',
        num: '1',
        id: '2',
      },
      {
        url1: '/image/mainPage/minus1.png',
        url2: '/image/mainPage/add1.png',
        fN: '牛奶饼干1',
        num: '1',
        id: '3',
      },
      {
        url1: '/image/mainPage/minus1.png',
        url2: '/image/mainPage/add1.png',
        fN: '牛奶饼干2',
        num: '1',
        id: '4',
      },
    ],
    detaily: [
      {
        url1: '/image/mainPage/minus1.png',
        url2: '/image/mainPage/add1.png',
        fN: '杂粮饼干',
        num: '1',
        id: '1',
      },
      {
        url1: '/image/mainPage/minus1.png',
        url2: '/image/mainPage/add1.png',
        fN: '牛奶饼干',
        num: '1',
        id: '2',
      },
      {
        url1: '/image/mainPage/minus1.png',
        url2: '/image/mainPage/add1.png',
        fN: '牛奶饼干1',
        num: '1',
        id: '3',
      },
      {
        url1: '/image/mainPage/minus1.png',
        url2: '/image/mainPage/add1.png',
        fN: '牛奶饼干2',
        num: '1',
        id: '4',
      },
    ],
    detailz: [
      {
        url1: '/image/mainPage/minus1.png',
        url2: '/image/mainPage/add1.png',
        fN: '杂粮饼干',
        num: '1',
        id: '1',
      },
      {
        url1: '/image/mainPage/minus1.png',
        url2: '/image/mainPage/add1.png',
        fN: '牛奶饼干',
        num: '1',
        id: '2',
      },
      {
        url1: '/image/mainPage/minus1.png',
        url2: '/image/mainPage/add1.png',
        fN: '牛奶饼干1',
        num: '1',
        id: '3',
      },
      {
        url1: '/image/mainPage/minus1.png',
        url2: '/image/mainPage/add1.png',
        fN: '牛奶饼干2',
        num: '1',
        id: '4',
      },
    ],
    nummm:'1',
    number:'1',
    number1:'1',
    different:'3',
    inforDetail1:'',
    inforDetail2:'',
    inforDetail3:'',
    currentDay:'',
    protein:'63.88',
    carbohydrate:'191.63',
    fat:'28.39',
    calorie:'1277.5',
    totalData:'',
  },

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {
    var that=this
   
   
  },

  /**
  * 生命周期函数--监听页面显示
  */
  onShow: function () {
    

    var that = this
    wx.getStorage({
      key: 'SProtein',
      success: function (res) {
        console.log(res)
        var protein = res.data
        that.setData({
          protein: protein
        })
      },
    })
    wx.getStorage({
      key: 'SCarbohydrate',
      success: function (res) {
        var carbohydrate = res.data
        that.setData({
          carbohydrate: carbohydrate
        })
      },
    })
    wx.getStorage({
      key: 'SFat',
      success: function (res) {
        var fat = res.data
        that.setData({
          fat: fat
        })
      },
    })
    wx.getStorage({
      key: 'SCalorie',
      success: function (res) {
        var calorie = res.data
        that.setData({
          calorie: calorie
        })
      },
    })
 
    
    // console.log("页面重新显示出来了")
    // var protein = app.globalData.protein;
    // var carbohydrate = app.globalData.carbohydrate;
    // var fat = app.globalData.fat;
    // var calorie = app.globalData.calorie;

    

    var d = new Date()
    console.log(d)
    console.log("获取今天的日期")
    var currentDay = d.getDate();
    if(currentDay<10){
      var currentDay="0"+currentDay
    }
    this.setData({
      currentDay: currentDay,
      // protein: protein,
      // carbohydrate: carbohydrate,
      // fat: fat,
      // calorie: calorie,
    })


    var callTime = parseInt(d.getTime() / 1000)
    var key = "l7k6yZSJd1DCEK1C4TsQT0ivMfuZeXRj"
    var random = utilRandom.random(16)
    console.log(random)
    var token = utilMd5.md5(callTime + random + key)
    console.log(token)
    console.log(callTime)


    wx.login({
      success: function (res) {
        var code = res.code;
        console.log(code)
        console.log("登陆不了了")
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
            var sid = res.data.sid;
            console.log(sid)
            console.log("ahahahahahhahah")
            var openid = res.data.openid;
            app.globalData.uid = uid;
            app.globalData.sid = sid;
            app.globalData.openid = openid;
            console.log(sid)
            console.log(openid)
            console.log(uid)
            console.log("获取用户的sessionid")
            // 获取系统参数
            // wx.login({
              // success: function (res) {
                // var code1 = res.code;
                // console.log(coed1)
                console.log("看看啊剋")

                // 获取早中晚餐的百分比
                // var callTime = parseInt(d.getTime() / 1000)
                // console.log(callTime)
                // var key = "l7k6yZSJd1DCEK1C4TsQT0ivMfuZeXRj"
                // var random = utilRandom.random(16)
                // console.log(random)
                // var token = utilMd5.md5(callTime + random + key)
                // console.log(token)
                // console.log("开始")
                wx.request({
                  url: "https://gz-xcx.maoln.com/api/user/recipe/calc",
                  data: {
                    token: token,
                    t: callTime,
                    r: random,
                    sid: sid,
                    uid:uid
                  },
                  header: {
                    'X-Requested-With': 'XMLHttpRequest'
                  },
                  method: "post",
                  success: function (res) {
                    var zao=res.data[1]
                    var zhong=res.data[2]
                    var wan=res.data[3]
                    var addrImg1="../../image/zhishu/lower.png";
                    var addrImg2="../../image/zhishu/standard.png";
                    var addrImg3="../../image/zhishu/higher.png";
                    // 早餐标准图片
                    if(zao<25){
                      that.setData({
                        zaoImg:addrImg1
                      })
                    }else if(zao>25&zao<30){
                      that.setData({
                        zaoImg:addrImg2
                      })
                    }else if(zao>30){
                      that.setData({
                        zaoImg:addrImg3
                      })
                    }
                    // 早餐标准图片
                    // 午餐标准图片
                    if (zhong < 30) {
                      that.setData({
                        zhongImg: addrImg1
                      })
                    } else if (zhong > 30 & zhong < 40) {
                      that.setData({
                        zhongImg: addrImg2
                      })
                    } else if (zhong > 40) {
                      that.setData({
                        zhongImg: addrImg3
                      })
                    }
                    // 午餐标准图片
                    // 晚餐标准图片
                    if (wan < 30) {
                      that.setData({
                        wanImg: addrImg1
                      })
                    } else if (wan > 30 & wan < 40) {
                      that.setData({
                        wanImg: addrImg2
                      })
                    } else if (wan > 40) {
                      that.setData({
                        wanImg: addrImg3
                      })
                    }
                    // 晚餐标准图片
                    that.setData({
                      zao:zao,
                      zhong:zhong,
                      wan:wan,
                    })
                    console.log(res)
                    console.log("获取早中晚餐的百分比")
                  },
                })
    // 获取早中晚餐的百分比
                wx.request({
                  url: "https://gz-xcx.maoln.com/api/meta",
                  data: {
                    token: token,
                    t: callTime,
                    r: random,
                    code: code,
                  },
                  header: { 'X-Requested-With': 'XMLHttpRequest' },
                  method: "post",
                  success: function (res) {
                    console.log(res)
                    console.log("获取系统参数坎坎坷坷")
                  },
                })
              // },
            // })
            // 获取系统参数
            // 获取全部食谱列表
            var uid = res.data.uid;
            var sid = res.data.sid;
            console.log(uid)
            console.log(sid)
            console.log("获取用户的食谱参数")
            wx.request({
              url: "https://gz-xcx.maoln.com/api/user/recipe",
              data: {
                token: token,
                t: callTime,
                r: random,
                uid: uid,
                sid: sid,
              },
              header: {
                'X-Requested-With': 'XMLHttpRequest'
              },
              method: "post",
              success: function (res) {
                console.log(res)
                var sipuDetail = []
                var sipuDetail2 = []
                var sipuDetail3 = []
                var length = res.data.length;
                console.log(res.data);
                // console.log(res.data[0].recipe.thumbnail)
                for (var j = 0; j < res.data.length; j++) {
                  if (res.data[j].recipe.thumbnail == "") {
                    res.data[j].recipe.thumbnail = "/uploads/%E5%BE%AE%E4%BF%A1%E5%9B%BE%E7%89%87_20171124111807.jpg"
                  }
                }

                console.log(length)
                console.log("数组长度")
                for (var i = 0; i < res.data.length; i++) {
                  var type = res.data[i].recipe.type;
        
                  console.log(type)
                  if (type == 1) {
                    // 计算页面的早、中、晚餐的占比
                    sipuDetail.push(res.data[i])
                    // for(var j=0;j<sipuDetail.length;j++){
                    //   if (sipuDetail[i].thumbnail == "") {
                    //     sipuDetail[i].thumbnail = "/uploads/%E5%BE%AE%E4%BF%A1%E5%9B%BE%E7%89%87_20171124111807.jpg"
                    //   }
                    // }
            
                    that.setData({
                      sipuDetail: sipuDetail,
                      inforDetail1: sipuDetail
                    })
                  } else if (type == 2) {
                    sipuDetail2.push(res.data[i])

                    // for (var j = 0; j < sipuDetail.length; j++) {
                    //   if (sipuDetail2[i].thumbnail == "") {
                    //     sipuDetail2[i].thumbnail = "/uploads/%E5%BE%AE%E4%BF%A1%E5%9B%BE%E7%89%87_20171124111807.jpg"
                    //   }
                    // }

                    that.setData({
                      sipuDetail2: sipuDetail2,
                      inforDetail2: sipuDetail2
                    })
                  } else if (type == 3) {
                    sipuDetail3.push(res.data[i])
                    that.setData({
                      sipuDetail3: sipuDetail3,
                      inforDetail3: sipuDetail3
                    })
                  }

                }
                console.log(sipuDetail)
                console.log(sipuDetail2)
                console.log(sipuDetail3)
                console.log("获取用户食谱")
              },
            })
            // 获取全部食谱列表
          },
        })
      },
    })

   

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
  changeToDetail: function (e) {
    
    var recipe_id = e.currentTarget.dataset.id;//产品id值
    app.globalData.foodDetailId1=recipe_id
    console.log(recipe_id)
    console.log("获取产品id")
    wx.navigateTo({
      url: '../foodDetail/foodDetail',
      success: function (res) { },
    })
  },
  changeToDetail1: function() {
    app.globalData.type=1;
    wx.navigateTo({
      url: '../jumpDetail/jumpDetail',
      success: function(res) {},
    })
  },
  changeToDetail2: function () {
    app.globalData.type=2;
    wx.navigateTo({
      url: '../jumpDetail/jumpDetail',
      success: function (res) { },
    })
  },
  changeToDetail3: function () {
    app.globalData.type=3;
    wx.navigateTo({
      url: '../jumpDetail/jumpDetail',
      success: function (res) { },
    })
  },



  addNum: function (e) {   
    var totalData = this.data.totalData;
    var addnum = e.currentTarget.dataset.addnum;//产品id值
    console.log("开始获取产品的具体id值")
    console.log(addnum)
    console.log(totalData)
    console.log("获取产品的具体id值")
    var that = this;
    var uid = app.globalData.uid;
    var d = new Date()
    var callTime = parseInt(d.getTime() / 1000)
    var key = "l7k6yZSJd1DCEK1C4TsQT0ivMfuZeXRj"
    var random = utilRandom.random(16)
    var token = utilMd5.md5(callTime + random + key)
    var uid = app.globalData.uid;
    var sid = app.globalData.sid;
    var openid = app.globalData.openid;

    wx.request({
      url: "https://gz-xcx.maoln.com/api/user/recipe/add",
      data: {
        uid: uid,
        id: addnum,
        count: 1,
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
        wx.navigateTo({
          url: '../confirm/confirm',
          success: function(res) {},
          fail: function(res) {},
          complete: function(res) {},
        })
        // wx.switchTab({
        //   url: '../mainPage/mainPage',
        //   success: function (res) { },
        //   fail: function (res) { 
        //     console.log("失败了")
        //   },
        //   complete: function (res) { },
        // })
        // wx.showToast({
        //   title: '食谱添加1',
        //   duration: 1000,
        //   success: function(res) {},
        // })

        
        // 获取全部食谱列表
        // setTimeout(function(){ 

        
        // wx.request({
        //   url: "https://gz-xcx.maoln.com/api/user/recipe",
        //   data: {
        //     token: token,
        //     t: callTime,
        //     r: random,
        //     uid: uid,
        //     sid: sid,
        //   },
        //   header: {
        //     'X-Requested-With': 'XMLHttpRequest'
        //   },
        //   method: "post",
        //   success: function (res) {
        //     var sipuDetail = []
        //     var sipuDetail2 = []
        //     var sipuDetail3 = []
        //     var length = res.data.length;
        //     that.setData({
        //       totalData: res.data,
        //     })
        //     for (var i = 0; i < res.data.length; i++) {
        //       var type = res.data[i].recipe.type;
        //       if (type == 1) {
        //         sipuDetail.push(res.data[i])
        //         that.setData({
        //           sipuDetail: sipuDetail
        //         })
        //       } else if (type == 2) {
        //         sipuDetail2.push(res.data[i])
        //         that.setData({
        //           sipuDetail2: sipuDetail2
        //         })
        //       } else if (type == 3) {
        //         sipuDetail3.push(res.data[i])
        //         that.setData({
        //           sipuDetail3: sipuDetail3
        //         })
        //       }

        //     }
        //   },
        // })
        // },1000)
            // 获取全部食谱列表
      },
    })

  },
  minusNum: function (e) {
    var that = this;
    var totalData=this.data.totalData;
   var inforDetail1=this.data.inforDetail1;
   console.log(inforDetail1)
    console.log(totalData)
    var minusnum = e.currentTarget.dataset.minusnum;//产品id值
    console.log(minusnum)
    console.log("获取产品的id值")
    var uid = app.globalData.uid; 
    var minuscount=e.currentTarget.dataset.count;
    var d = new Date()
    var callTime = parseInt(d.getTime() / 1000)
    var key = "l7k6yZSJd1DCEK1C4TsQT0ivMfuZeXRj"
    var random = utilRandom.random(16)
    var token = utilMd5.md5(callTime + random + key)
    var uid = app.globalData.uid;
    var sid = app.globalData.sid;
    var openid = app.globalData.openid;
    console.log(minuscount)
    console.log("获取产品的数量")
    if (minuscount == 1) {
      wx.request({
        url: "https://gz-xcx.maoln.com/api/user/recipe/delete",
        data: {
          uid: uid,
          recipe_id: minusnum,
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
          // wx.navigateTo({
          //   url: '../delete/delete',
          //   success: function (res) { },
          // })
          wx.reLaunch({
            url: '../confirm/confirm',
            success: function(res) {},
          })
        
          console.log("删除成功")
          console.log(res)
        },
      })
    }
    else{
      minuscount--
      console.log(minuscount)
    wx.request({
      url: "https://gz-xcx.maoln.com/api/user/recipe/update",
      // url: "https://gz-xcx.maoln.com/api/user/recipe/add",
      data: {
        uid: uid,
        id: minusnum,
        count: minuscount,
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
        wx.navigateTo({
          url: '../confirm/confirm',
          success: function (res) { },
          fail: function (res) { },
          complete: function (res) { },
        })
        console.log(res)
        // 获取全部食谱列表
        // wx.request({
        //   url: "https://gz-xcx.maoln.com/api/user/recipe",
        //   data: {
        //     token: token,
        //     t: callTime,
        //     r: random,
        //     uid: uid,
        //     sid: sid,
        //   },
        //   header: {
        //     'X-Requested-With': 'XMLHttpRequest'
        //   },
        //   method: "post",
        //   success: function (res) {
        //     var sipuDetail = []
        //     var sipuDetail2 = []
        //     var sipuDetail3 = []
        //     var length = res.data.length;
        //     that.setData({
        //       inforDetail: res.data,
        //     })
        //     for (var i = 0; i < res.data.length; i++) {
        //       var type = res.data[i].recipe.type;
        //       if (type == 1) {
        //         sipuDetail.push(res.data[i])
        //         that.setData({
        //           sipuDetail: sipuDetail
        //         })
        //       } else if (type == 2) {
        //         sipuDetail2.push(res.data[i])
        //         that.setData({
        //           sipuDetail2: sipuDetail2
        //         })
        //       } else if (type == 3) {
        //         sipuDetail3.push(res.data[i])
        //         that.setData({
        //           sipuDetail3: sipuDetail3
        //         })
        //       }

        //     }
        //   },
        // })
        // 获取全部食谱列表
      },
    })
    }//if判断结束
  },

  showitem: function () {
    this.setData({
      down: !this.data.down
    })
  },
  showitem1: function () {
    this.setData({
      down1: !this.data.down1
    })
  },
  showitem2: function () {
    this.setData({
      down2: !this.data.down2
    })
  },

})