var app = getApp()
// pages/stepFourth/stepFourth.js
Page({

  /**
   * 页面的初始数据
   */
  data: {
    array:'',
    array1:'',
    height_index:'',
    // height1:'160',
    height1: '-',
    weight_index:'',
    // weight1:'50',
    weight1: '-',
    danwei1:'-',
    danwei2:'-',
  },

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {
    var arr = []
    for (var i = 150; i < 240; i++) {
      arr.push(i);
    }
    this.setData({
      array: arr
    })
    var arr1 = []
    for (var i = 70; i < 299; i++) {
      var j=i/2;
      arr1.push(j);
    }
    this.setData({
      array1: arr1
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
  nextStep: function() {
    var bodyHeight = app.globalData.bodyHeight;
    var bodyWeight = app.globalData.bodyWeight;
    console.log(bodyHeight)
    console.log(bodyWeight)
    wx.navigateTo({
      url: '../stepFifth/stepFifth',
      success: function(res) {},
      fail: function(res) {},
      complete: function(res) {},
    })
  },
  bindHeightChange: function (e) {
    var array = this.data.array;
    var bodyHeight = array[e.detail.value]
    app.globalData.bodyHeight = bodyHeight;
    console.log('picker发送选择改变，携带值为', e.detail.value)
    this.setData({height1:''})
    this.setData({
      height_index: e.detail.value,
      danwei1:'CM'
    })
  },
  bindWeightChange: function (e) {
    var array1=this.data.array1;
    var bodyWeight = array1[e.detail.value]
    app.globalData.bodyWeight = bodyWeight;
    this.setData({ weight1: '' })
    this.setData({
      weight_index: e.detail.value,
      danwei2:'KG'
    })
  },
})