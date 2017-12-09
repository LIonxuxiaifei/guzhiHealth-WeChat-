// pages/myPersonal/myPersonal.js
var utilMd5 = require("../../utils/md5.js")
var utilRandom = require("../../utils/random.js")
// var auth=require("../../utils/auth.js")
var app = getApp()
Page({

  /**
   * 页面的初始数据
   */
  data: {
    userInfo: '',
    name1:'',
    name2:'',
    name3:'',
    name4:'',
    name5:'',
    name6:'', 
    name7:'',
    name8:'',
    name9:'',
    name10:'',
    name11:'',
    name12:'',
    name13:'',
    name14:'',
    name15:'',
    name16:'',
    name17:'',
    name18:'',
    name19:'',
    name20:'',
    name21:'',
    name22:'',
    name23:'',
    name24:'',
    name26:'',
    name27:'',
    name28:'',
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
  uploadImage: function() {
    var that=this;
    var d = new Date()
    var callTime = parseInt(d.getTime() / 1000)
    var key = "l7k6yZSJd1DCEK1C4TsQT0ivMfuZeXRj"
    var random = utilRandom.random(16)
    var token = utilMd5.md5(callTime + random + key)
    var uid = app.globalData.uid;
    var sid = app.globalData.sid;
    var openid = app.globalData.openid;
    wx.chooseImage({
      count: 1,
      sizeType: ['compressed'],
      sourceType: [],
      success: function(res) {
        console.log(res)  
        console.log("请选择图片的上传路径")
        console.log(res.tempFilePaths[0]);
        // var imgUURL=res.tempFilePaths[0]
        // that.setData({
        //   imgUURL:imgUURL
        // })
        var  tempFilePaths= res.tempFilePaths;
        var tempFilePath0=tempFilePaths[0]
        // that.setData({
        //   tempFilePath0:tempFilePath0,
        // })
        var tempFile=res.tempFiles;
        // var formdata = new Formdata;
        // var formdata=new formdata;
        // var formdata=[];
        // var fomrdata=temImage;
        // console.log(formdata);
        // formdata.filePath = res.tempFilePaths;
        // console.log(formdata);
        // var data=auth.generateToken()
        // data.session = app.globalData.sid
        // data.openid = app.globalData.openid
        // console.log(temImage[0])
        console.log(tempFile)
        console.log("上传体检报告的临时路径")
        //上传体检报告
        wx.uploadFile({
          url: 'https://gz-xcx.maoln.com/api/user/upload',
          // file: tempFile[0],
          filePath: tempFilePaths[0],
          // filePath: tempFile[0],
          name: 'file',
          formData: {
            uid: uid,
            token: token,
            t: callTime,
            r: random,
            sid: sid,
          },
          header: {
            "content-type": 'application/x-www-form-urlencoded',
            'X-Requested-With': 'XMLHttpRequest',

          },
          success: function(res) {
            console.log(res)
            wx.request({
              url: 'https://gz-xcx.maoln.com/api/user/upload/list',
              data: {
                uid: uid,
                token: token,
                t: callTime,
                r: random,
                sid: sid,
              },
              header: {
                'X-Requested-With': 'XMLHttpRequest',
              },
              method: "post",
              success: function (res) {
                console.log(res)
                var i=res.data.length;
                console.log(i)
                // i--
                var imgList=res.data[0].path
                console.log(imgList)
                that.setData({
                  tempFilePath0:imgList,
                })  
                console.log("获取体检报告列表")
              },
            })
          },
        })
        // wx.request({
        //   url: "https://gz-xcx.maoln.com/api/user/upload",
        //   data: {
        //     // formData:formdata,
        //     file:tempFile,
        //     uid: uid,
        //     token: token,
        //     t: callTime,
        //     r: random,
        //     sid: sid,
        //   },
        //   header: {
        //     'X-Requested-With': 'XMLHttpRequest'
        //   },
        //   method: "post",
        //   success: function(res) {
        //     console.log(res)
        //   },
        // })
        //上传体检报告
        
        // wx.saveFile({
        //   tempFilePath: temImage,
        //   success: function(res) {
        //     console.log(res)
        //     that.setData({savedFilePath: res.savedFilePath})
        //     wx.setStorageSync('savedFilePath', res.savedFilePath)
        //   },
        // })
      },
    })

  },
  submit: function() {
    //haha
    if(this.data.name1==''){
      wx.showToast({
        title: '请填入必选1',
        image: '../../image/zhishu/h.png',
        duration: 2000,
        success: function(res) {},
      })
    }else if(this.data.name2==''){
      wx.showToast({
        title: '请填入必选2',
        image: '../../image/zhishu/h.png',
        duration: 2000,
        success: function(res) {},
      })
    }else if(this.data.name4==''){
      wx.showToast({
        title: '请填入必选项3',
        image: '../../image/zhishu/h.png',
        duration: 2000,
        success: function(res) {},
      })
    }else if(this.data.name5==''){
        wx.showToast({
          title: '请填入必选项4',
          image: '../../image/zhishu/h.png',
          duration: 2000,
          success: function(res) {},
        })
    }else if(this.data.name6==''){
        wx.showToast({
          title: '请填入必选项5',
          image: '../../image/zhishu/h.png',
          duration: 2000,
          success: function(res) {},
        })
    }else if(this.data.name7==''){
      wx.showToast({
        title: '请填入必选项6',
        image: '../../image/zhishu/h.png',
        duration: 2000,
        success: function(res) {},
      })
    }else if(this.data.name8==''){
      wx.showToast({
        title: '请填入必选项7',
        image: '../../image/zhishu/h.png',
        duration: 2000,
        success: function(res) {},
      })
    }else if(this.data.name10==''){
      wx.showToast({
        title: '请填入必选项8',
        image: '../../image/zhishu/h.png',
        duration: 2000,
        success: function(res) {},
      })
    }else if(this.data.name13==''){
      wx.showToast({
        title: '请填入必选项10',
        image: '../../image/zhishu/h.png',
        duration: 2000,
        success: function(res) {},
      })
    }else if(this.data.name16==''){
      wx.showToast({
        title: '请填入必选项12',
        image: '../../image/zhishu/h.png',
        duration: 2000,
        success: function(res) {},
      })
    }else if(this.data.name17==''){
      wx.showToast({
        title: '请填入必选项13',
        image: '../../image/zhishu/h.png',
        duration: 2000,
        success: function(res) {},
      })
    }else if(this.data.name18==''){
      wx.showToast({
        title: '请填入必选项14',
        image: '../../image/zhishu/h.png',
        duration: 2000,
        success: function(res) {},
      })
    }else if(this.data.name20==''){
      wx.showToast({
        title: '请填入必选项16',
        image: '../../image/zhishu/h.png',
        duration: 2000,
        success: function(res) {},
      })
    }else if(this.data.name24==''){
      wx.showToast({
        title: '请填入必选项18',
        image: '../../image/zhishu/h.png',
        duration: 2000,
        success: function(res) {
        },
      })
    }else if(this.data.name26==''){
      wx.showToast({
        title: '请填入必选项19',
        image: '../../image/zhishu/h.png',
        duration: 2000,
        success: function(res) {},
      })
    }else if(this.data.name28==''){
      wx.showToast({
        title: '请填入必选项22',
        image: '../../image/zhishu/h.png',
        duration: 2000,
        success: function(res) {},
      })
    }
    else{

    //haha
    var d = new Date()
    var callTime = parseInt(d.getTime() / 1000)
    var key = "l7k6yZSJd1DCEK1C4TsQT0ivMfuZeXRj"
    var random = utilRandom.random(16)
    var token = utilMd5.md5(callTime + random + key)
    var uid = app.globalData.uid;
    var sid = app.globalData.sid;
    var openid = app.globalData.openid;
    wx.request({
      url: "https://gz-xcx.maoln.com/api/user/private/set",
      data: {
        uid: uid,
        token: token,
        t: callTime,
        r: random,
        sid: sid,
        "姓名":this.data.name1,
        "性别":this.data.name2,
        "年龄":this.data.name4,
        "身高":this.data.name5,
        "体重":this.data.name6,
        "名族":this.data.name7,
        "婚姻状况":this.data.name8,
        "家族史":this.data.name10,
        "家族史说明":this.data.name12,
        "是否有慢性病":this.data.name13,
        "慢性病情说明":this.data.name15,
        "对哪些食物过敏":this.data.name16,
        "喜欢的食物":this.data.name17,
        "不喜欢吃的食物":this.data.name18,
        "是否服用保健药":this.data.name19,
        "工作性质":this.data.name20,
        "工作说明":this.data.name23,
        "是否喜欢运动":this.data.name24,
        "喜欢的运动说明":this.data.name26,
        "想要达到的目的":this.data.name27,
        "您的邮箱地址":this.data.name28,
      },
      header: {
        'X-Requested-With': 'XMLHttpRequest',
      },
      method: "post",
      success: function(res) {
        console.log(res)
      },
    })
  
    
    wx.request({
      url: 'https://gz-xcx.maoln.com/api/user/upload/list',
      data: {
        uid: uid,
        token: token,
        t: callTime,
        r: random,
        sid: sid,
      },
      header: {
        'X-Requested-With': 'XMLHttpRequest',
      },
      method: "post",
      success: function(res) {
        console.log(res)
        console.log("获取体检报告的产品列表")
      },
    })
    wx.showToast({
      title: '提交成功',
      icon: '../../image/mainPage/success.png',
      image: '',
      duration: 2000,
      mask: true,
      success: function(res) {},
    })
  //haha
    }
  },
  // goSubmit: function(e){
  //     var a=e.detail.value.name1;
  // },
  name1: function(e) {
    var that=this;
    var name1=e.detail.value
    that.setData({
      name1: name1,
    })
  },
  name2: function (e) {
    var that = this;
    var name2 = e.currentTarget.dataset.name
    console.log(name2)
    that.setData({
      name2:name2
    })
  },
  name3: function (e) {
    var that = this;
    var name3 = e.currentTarget.dataset.name
    console.log(name3)
    that.setData({
      name2: name3
    })
  },
  name4: function (e) {
    var that = this;
    var name4 = e.detail.value
    // console.log(name4)
    that.setData({
      name4: name4,
    })
  },
  name5: function (e) {
    var that = this;
    var name5 = e.detail.value
    console.log(name5)
    that.setData({
      name5: name5,
    })
  },
  name6: function (e) {
    var that = this;
    var name6 = e.detail.value
    console.log(name6)
    that.setData({
      name6: name6,
    })
  },
  name7: function (e) {
    var that = this;
    var name7 = e.detail.value
    console.log(name7)
    that.setData({
      name7: name7,
    })
  },
  name8: function (e) {
    var that = this;
    var name8 = e.currentTarget.dataset.name
    console.log(name8)
    that.setData({
      name8: name8
    })
  },
  name9: function (e) {
    var that = this;
    var name9 = e.currentTarget.dataset.name
    console.log(name9)
    that.setData({
      name8: name9
    })
  },
  name10: function (e) {
    var that = this;
    var name10 = e.currentTarget.dataset.name
    console.log(name10)
    that.setData({
      name10: name10
    })
  },
  name11: function (e) {
    var that = this;
    var name11 = e.currentTarget.dataset.name
    console.log(name11)
    that.setData({
      name10: name11
    })
  },
  name12: function (e) {
    var that = this;
    var name12 = e.detail.value
    console.log(name12)
    that.setData({
      name12: name12
    })
  },
  name13: function (e) {
    var that = this;
    var name13 = e.currentTarget.dataset.name
    console.log(name13)
    that.setData({
      name13: name13
    })
  },
  name14: function (e) {
    var that = this;
    var name14 = e.currentTarget.dataset.name
    console.log(name14)
    that.setData({
      name13: name14
    })
  },
  name15: function (e) {
    var that = this;
    var name15 = e.detail.value
    console.log(name15)
    that.setData({
      name15: name15
    })
  },
  name16: function (e) {
    var that = this;
    var name16 = e.detail.value
    console.log(name16)
    that.setData({
      name16: name16
    })
  },
  name17: function (e) {
    var that = this;
    var name17 = e.detail.value
    console.log(name17)
    that.setData({
      name17: name17
    })
  },
  name18: function (e) {
    var that = this;
    var name18 = e.detail.value
    console.log(name18)
    that.setData({
      name18: name18
    })
  },
  name19: function (e) {
    var that = this;
    var name19 = e.detail.value
    console.log(name19)
    that.setData({
      name19: name19
    })
  },
  name20: function (e) {
    var that = this;
    var name20 = e.currentTarget.dataset.name
    console.log(name20)
    that.setData({
      name20: name20
    })
  },
  name21: function (e) {
    var that = this;
    var name21 = e.currentTarget.dataset.name
    console.log(name21)
    that.setData({
      name20: name21
    })
  },
  name22: function (e) {
    var that = this;
    var name22 = e.currentTarget.dataset.name
    console.log(name22)
    that.setData({
      name20: name22
    })
  },
  name23: function (e) {
    var that = this;
    var name23= e.detail.value
    console.log(name23)
    that.setData({
      name23: name23
    })
  },
  name24: function (e) {
    var that = this;
    var name24 = e.currentTarget.dataset.name
    console.log(name24)
    that.setData({
      name24: name24
    })
  },
  name25: function (e) {
    var that = this;
    var name25 = e.currentTarget.dataset.name
    console.log(name25)
    that.setData({
      name24: name25
    })
  },
  name26: function (e) {
    var that = this;
    var name26 = e.detail.value
    console.log(name26)
    that.setData({
      name26: name26
    })
  },
  name27: function (e) {
    var that = this;
    var name27 = e.detail.value
    console.log(name27)
    that.setData({
      name27: name27
    })
  },
  name28: function (e) {
    var that = this;
    var name28 = e.detail.value
    console.log(name28)
    that.setData({
      name28: name28
    })
  },
  // submit: function(){
  //   var that = this;
  //   var d = new Date()
  //   var callTime = parseInt(d.getTime() / 1000)
  //   var key = "l7k6yZSJd1DCEK1C4TsQT0ivMfuZeXRj"
  //   var random = utilRandom.random(16)
  //   var token = utilMd5.md5(callTime + random + key)
  //   var uid = app.globalData.uid;
  //   var sid = app.globalData.sid;
  //   var openid = app.globalData.openid;
  //   wx.request({
  //     url: 'https://gz-xcx.maoln.com/api/user/upload/list',
  //     data: {
  //       uid: uid,
  //       token: token,
  //       t: callTime,
  //       r: random,
  //       sid: sid,
  //     },
  //     header: {
  //       'X-Requested-With': 'XMLHttpRequest',
  //     },
  //     method: "post",
  //     success: function(res) {
  //       console.log(res)
  //     },
  //   })
  // }
})