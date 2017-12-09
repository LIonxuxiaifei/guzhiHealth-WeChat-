// pages/foodDetail/foodDetail.js
var utilMd5 = require("../../utils/md5.js")
var utilRandom = require("../../utils/random.js")
var WxParse = require("../../wxParser/wxParse.js")
var app = getApp()
Page({

  /**
   * 页面的初始数据
   */
  data: {
    foodInfor:'',
    image1:'../../image/zhishu/star2.png',
    image2:'../../image/zhishu/star2.png',
    image3:'../../image/zhishu/star2.png',
    image4:'../../image/zhishu/star1.png',
    inforDetail:1,
  },

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {
    var recipe_id=app.globalData.foodDetailId1;
    
    var that = this;
    var d = new Date()
    var callTime = parseInt(d.getTime() / 1000)
    var key = "l7k6yZSJd1DCEK1C4TsQT0ivMfuZeXRj"
    var random = utilRandom.random(16)
    console.log(callTime)
    console.log(random)
    console.log(recipe_id)
    var token = utilMd5.md5(callTime + random + key)
      wx.request({
        url: "https://gz-xcx.maoln.com/api/recipe/show",
        data: {
          recipe_id:recipe_id,
          token: token,
          t: callTime,
          r: random,
        },
        header: {
          'X-Requested-With': 'XMLHttpRequest'
        },
        method: "post",
        success: function(res) {
          console.log(res)
          var foodInfor=res.data;
          if(foodInfor.thumbnail==""){
            
              foodInfor.thumbnail = "/uploads/%E5%BE%AE%E4%BF%A1%E5%9B%BE%E7%89%87_20171124111807.jpg"
          }
          // 食物的星际
          var star=foodInfor.star;
          var image1=that.data.image1;
          console.log(image1)
          var starKong=that.data.image4;
          console.log(starKong)
          if(star==0){
            that.setData({
              image1:starKong,
              image2:starKong,
              image3:starKong
            })
          }else if(star==1){
            that.setData({
              image3:starKong,
              image2:starKong,
            })
          }else if(star==2){
            that.setData({
              image3:starKong,
            })
          }
          var article = foodInfor.step;
          var materials=foodInfor.materials;
          // var description =foodInfor.description;
          var materials=JSON.parse(materials)
          console.log("遍历一下数组")
          // if(article!=''){
          //   that.setData({
          //       stepDetail:''
          //   })
          // }

          
          // if (materials != null){
            WxParse.wxParse('article', 'html', article, that, 5);
            // var contentDetail = 'wxParseData:article.nodes'
            // that.setData({
            //   contentDetail:contentDetail
            // })
          // }
        
          console.log("食谱详情页面信息")
          that.setData({
            foodInfor:foodInfor,
            materials:materials,
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
  addFood: function(e){
    var uid = app.globalData.uid;
    console.log(uid)
    var recipe_id = app.globalData.foodDetailId1;
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
      url: "https://gz-xcx.maoln.com/api/user/recipe/add",
      data: {
        uid: uid,
        id: recipe_id,
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
        console.log(res)
        wx.showToast({
          title: '添加食谱成功',
          icon: '../../image/mainPage/success.png',
          image: '',
          duration: 2000,
          mask: true,
          success: function (res) { },
        })
      },
    })
  }
})