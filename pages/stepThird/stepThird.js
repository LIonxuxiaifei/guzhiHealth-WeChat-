var app = getApp()
// pages/stepThird/stepThird.js
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
    wx.navigateTo({
      url: '../stepFourth/stepFourth',
      success: function(res) {},
    })
    // var labor = app.globalData.labor;
    // console.log(labor)
  },
  changeColor: function () {
    app.globalData.labor = 1;
    var Color = this.data.style1 == '#addf89' ? 'background-color: #fff;' : 'background-color: #addf89';
    var Color1 = this.data.style1x == '#addf89' ? 'color: #595959;' : 'color: #fff;';
    var Color2 = this.data.style1y == '#addf89' ? 'color: #999;' : 'color: #fff;';
    var Colora = this.data.style1 == '#addf89' ? 'background-color: #addf89 ;': 'background-color: #fff';
    var Colorb = this.data.style1x == '#addf89' ? 'color: #fff;' : 'color: #595959;';
    var Colorc = this.data.style1y == '#addf89' ? 'color: #fff;' : 'color: #999;';
    // 设置背景颜色数据
    this.setData({
      style1: Color,
      style1x: Color1,
      style1y: Color2,
      style2: Colora,
      style2x: Colorb,
      style2y: Colorc,
      style3: Colora,
      style3x: Colorb,
      style3y: Colorc,
    });
  },
  changeColor1: function () {
    app.globalData.labor = 2;
    var Color = this.data.style2 == '#addf89' ? 'background-color: #fff;' : 'background-color: #addf89';
    var Color1 = this.data.style2x == '#addf89' ? 'color: #595959;' : 'color: #fff;';
    var Color2 = this.data.style2y == '#addf89' ? 'color: #999;' : 'color: #fff;';
    var Colora = this.data.style1 == '#addf89' ? 'background-color: #addf89 ;' : 'background-color: #fff';
    var Colorb = this.data.style1x == '#addf89' ? 'color: #fff;' : 'color: #595959;';
    var Colorc = this.data.style1y == '#addf89' ? 'color: #fff;' : 'color: #999;';
    // 设置背景颜色数据
    this.setData({
      style2: Color,
      style2x: Color1,
      style2y: Color2,
      style1: Colora,
      style1x: Colorb,
      style1y: Colorc,
      style3: Colora,
      style3x: Colorb,
      style3y: Colorc,
    });
  },
  changeColor2: function () {
    app.globalData.labor = 3;
    var Color = this.data.style3 == '#addf89' ? 'background-color: #fff;' : 'background-color: #addf89';
    var Color1 = this.data.style3x == '#addf89' ? 'color: #595959;' : 'color: #fff;';
    var Color2 = this.data.style3y == '#addf89' ? 'color: #999;' : 'color: #fff;';
    var Colora = this.data.style1 == '#addf89' ? 'background-color: #addf89 ;' : 'background-color: #fff';
    var Colorb = this.data.style1x == '#addf89' ? 'color: #fff;' : 'color: #595959;';
    var Colorc = this.data.style1y == '#addf89' ? 'color: #fff;' : 'color: #999;';
    // 设置背景颜色数据
    this.setData({
      style3: Color,
      style3x: Color1,
      style3y: Color2,
      style1: Colora,
      style1x: Colorb,
      style1y: Colorc,
      style2: Colora,
      style2x: Colorb,
      style2y: Colorc,
    });
  },



})