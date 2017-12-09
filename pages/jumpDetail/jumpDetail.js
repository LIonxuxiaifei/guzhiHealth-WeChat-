// pages/mainPage/mainPage.js
var utilMd5 = require("../../utils/md5.js")
var utilRandom = require("../../utils/random.js")
var app = getApp()
Page({

  /**
   * 页面的初始数据
   */
  data: {
    movies: [{
      url: 'http://www.maoln.com/pkg/mainsite/201707/15010617823771.jpeg'
    },
    {
      url: 'http://www.maoln.com/pkg/mainsite/201707/15010617823771.jpeg'
    },
    {
      url: 'http://www.maoln.com/pkg/mainsite/201707/15010617823771.jpeg'
    },
    {
      url: 'http://www.maoln.com/pkg/mainsite/201707/15010617823771.jpeg'
    }],
    down: false,
    // down3Detail1Change:false,
    down3Detail1: true,
    down3Detail2: true,
    down5Detail1: true,
    down5Detail2: false,
    down5Detail3: false,
    down7Detail1: true,
    down7Detail2: false,
    down7Detail3: false,
    down7Detail4: false,
    difficulty:'简单',
    tag:'奶制品',
    taste:'中餐',
    type:'',
    CellId:0,
    CellId1:0,
    // CellId2:[],
    indexArr:'',
    // indexArr1:[],
    inforDetail:'',
    // count:1,
    tagName:[],
    tagname1:'豆浆',
    tagname2:'简单',
    tagname3:'奶制品',
    biaoqian:'添加标签',
    biaoqianImg:'../../image/mainPage/pullDown.png',
    biaoqianImg2:'',
    tasteDetail: "down3Detail1Change1",
    // haha: "{{indexArr==index?'changeColor':'changeColor1'}}",
    tasteInfor:'',
    tagInfor:'',
    difficultyInfor:'',
    page:2,
    page2:2,
    page3:2,
    page4:2,
    page5:2,
    scrollHeight:'101',
    // scrollTop:'100rpx'
    scrollTop: {
      scroll_top: 0,
      goTop_show: false
    }  
  },

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {
    var that=this;
    var d = new Date()
    var callTime = parseInt(d.getTime() / 1000)
    var key = "l7k6yZSJd1DCEK1C4TsQT0ivMfuZeXRj"
    var random = utilRandom.random(16)
    var token = utilMd5.md5(callTime + random + key)
    var uid=app.globalData.uid;
    var sid=app.globalData.sid;
    console.log(sid)
    var openid=app.globalData.openid;
    var typea= app.globalData.type;
    console.log(typea)
    wx.request({
      url: "https://gz-xcx.maoln.com/api/recipe",
      data: {
        token: token,
        t: callTime,
        r: random,
        type:typea,
        // difficulty: difficulty,
        // taste: taste,
        // tag: tag,
      },
      header: {
        'X-Requested-With': 'XMLHttpRequest'
      },
      method: "post",
      success: function (res) {
        console.log(res)
        console.log("确定后获取用户食谱")
        var inforDetail = res.data;
        for (var i = 0; i < inforDetail.length; i++) {
          inforDetail[i].count = 1
          if (inforDetail[i].thumbnail==""){
            inforDetail[i].thumbnail = "/uploads/%E5%BE%AE%E4%BF%A1%E5%9B%BE%E7%89%87_20171124111807.jpg"
          }
        }
        that.setData({ inforDetail: inforDetail })
      },
    })
    wx.login({
      success: function (res) {
        var code = res.code;
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
            var difficulty=res.data.recipe.difficulty;
            var tag=res.data.recipe.tag;
            var taste=res.data.recipe.taste;
            console.log(taste)
            // var taste1=[];
            var tasteFirst="全部";
            taste.unshift({name:"全部"})
            tag.unshift({name:"全部"})
            // difficulty.unshift({name:"全部"})
            console.log("口味全部")
            var type=res.data.recipe.type;
            that.setData({
              difficulty:difficulty,
              tag:tag,
              taste:taste,
              type:type,
            })
          },
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
      console.log("页面被盖住了")
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
    console.log("进入到滑动到底部了")
    var that = this;
    var scrollHeight = this.data.scrollHeight;
    console.log(scrollHeight)
    console.log("获取高度")
    var scrollHeight = parseInt(scrollHeight) + 100;
    console.log(scrollHeight)
    console.log("获取高度第二次")
    that.setData({
      scrollHeight:scrollHeight,
    })


    var d = new Date()
    var callTime = parseInt(d.getTime() / 1000)
    var key = "l7k6yZSJd1DCEK1C4TsQT0ivMfuZeXRj"
    var random = utilRandom.random(16)
    var token = utilMd5.md5(callTime + random + key)
    var uid = app.globalData.uid;
    var sid = app.globalData.sid;
    var openid = app.globalData.openid;
    var typea = app.globalData.type;
    var taste = this.data.tasteInfor;
    console.log(taste)
    console.log("获取点击完的口味")
    var difficulty = this.data.difficultyInfor;
    console.log(difficulty)
    console.log("获取产品的难度值")
    var tag = this.data.tagInfor;
    console.log(tag)
    console.log("获取点击完的标签")
    this.setData({ down: false })

    if (taste == "" & tag == "") {
      var page2=this.data.page2;
      var page2=page2;
      wx.request({
        url: "https://gz-xcx.maoln.com/api/recipe",
        data: {
          token: token,
          t: callTime,
          r: random,
          type: typea,
          difficulty: difficulty,
          page:page2
        },
        header: {
          'X-Requested-With': 'XMLHttpRequest'
        },
        method: "post",
        success: function (res) {
          console.log(res)
          console.log("确定后获取用户食谱")
          var inforDetail1 = res.data;
          for (var i = 0; i < inforDetail1.length; i++) {
            inforDetail1[i].count = 1
            if (inforDetail1[i].thumbnail == "") {
              inforDetail1[i].thumbnail = "/uploads/%E5%BE%AE%E4%BF%A1%E5%9B%BE%E7%89%87_20171124111807.jpg"
            }
          }
          var inforDetail=that.data.inforDetail;
          var inforDetail = inforDetail.concat(inforDetail1);
          page2++
          that.setData({ 
            inforDetail: inforDetail,
            page2:page2
             })
        },
      })
    }
    else if (taste == "") {
      var page3=this.data.page3;
      var page3=page3
      console.log("跳到口味这边来了")
      wx.request({
        url: "https://gz-xcx.maoln.com/api/recipe",
        data: {
          token: token,
          t: callTime,
          r: random,
          type: typea,
          difficulty: difficulty,
          tag: tag,
          page:page3
        },
        header: {
          'X-Requested-With': 'XMLHttpRequest'
        },
        method: "post",
        success: function (res) {
          console.log(res)
          console.log("确定后获取用户食谱")
          var inforDetail1 = res.data;
          for (var i = 0; i < inforDetail1.length; i++) {
            inforDetail1[i].count = 1
            if (inforDetail1[i].thumbnail == "") {
              inforDetail1[i].thumbnail = "/uploads/%E5%BE%AE%E4%BF%A1%E5%9B%BE%E7%89%87_20171124111807.jpg"
            }
          }
          var inforDetail = that.data.inforDetail;
          var inforDetail = inforDetail.concat(inforDetail1);
          page3++
          that.setData({ 
            inforDetail: inforDetail,
            page3:page3
             })
        },
      })
    }
    else if (tag == "") {
      var page4=this.data.page4;
      var page4=page4
      console.log("跳转标签为空这边来了")

      wx.request({
        url: "https://gz-xcx.maoln.com/api/recipe",
        data: {
          token: token,
          t: callTime,
          r: random,
          type: typea,
          difficulty: difficulty,
          taste: taste,
          page:page4
        },
        header: {
          'X-Requested-With': 'XMLHttpRequest'
        },
        method: "post",
        success: function (res) {
          console.log(res)
          console.log("确定后获取用户食谱")
          var inforDetail1 = res.data;
          for (var i = 0; i < inforDetail1.length; i++) {
            inforDetail1[i].count = 1
            if (inforDetail1[i].thumbnail == "") {
              inforDetail1[i].thumbnail = "/uploads/%E5%BE%AE%E4%BF%A1%E5%9B%BE%E7%89%87_20171124111807.jpg"
            }
          }
          var inforDetail = that.data.inforDetail;
          var inforDetail = inforDetail.concat(inforDetail1);
          page4++
          that.setData({ 
            inforDetail: inforDetail,
            page4:page4
             })
        },
      })
    }
    else {
      var page5=this.data.page5
      var page5=page5
      wx.request({
        url: "https://gz-xcx.maoln.com/api/recipe",
        data: {
          token: token,
          t: callTime,
          r: random,
          type: typea,
          difficulty: difficulty,
          taste: taste,
          tag: tag,
          page:page5
        },
        header: {
          'X-Requested-With': 'XMLHttpRequest'
        },
        method: "post",
        success: function (res) {
          console.log(res)
          console.log("确定后获取用户食谱")
          var inforDetail1 = res.data;
          for (var i = 0; i < inforDetail1.length; i++) {
            inforDetail1[i].count = 1
            if (inforDetail1[i].thumbnail == "") {
              inforDetail1[i].thumbnail = "/uploads/%E5%BE%AE%E4%BF%A1%E5%9B%BE%E7%89%87_20171124111807.jpg"
            }
          }
          var inforDetail = that.data.inforDetail;
          var inforDetail = inforDetail.concat(inforDetail1);
          page5++
          that.setData({ 
            inforDetail: inforDetail,
            page5:page5 
            })
        },
      })
    }
  },

  /**
   * 用户点击右上角分享
   */
  onShareAppMessage: function () {

  },
  showitem: function () {
    var tagName=this.data.tagName;
    console.log(tagName)
    tagName=[];
    console.log(tagName)
    console.log("设置标签为空")
    this.setData({
      down: !this.data.down,  
      ret:'',
      biaoqian: '添加标签',
      biaoqianImg: '../../image/mainPage/pullDown.png',
      biaoqianImg2:'',
      tagName: tagName,
      // tasteInfor:'',
      // tagInfor:'',
      // difficultyInfor:'',
    })
  },
  // chooseFood: function() {
  //   this.setData({
  //     down3Detail1: !this.data.down3Detail1,
  //     down3Detail2: !this.data.down3Detail2,
  //   })
  // },
  chooseFood: function (e) {
    var taste=this.data.taste;
    for(var i=0;i<taste.length;i++){
      
    }
    console.log(taste)
    var index1 = e.currentTarget.dataset.taste;

    var index2 = e.currentTarget.dataset.key;
    var tasteName=e.currentTarget.dataset.name;
    var tagName=this.data.tagName;
    if(tasteName!="全部"){
      tagName.push(tasteName)
      this.setData({
        biaoqianImg2: biaoqianImg2,
      })
    }
    console.log(index1)
    console.log(tasteName)
    console.log("获取味道")
    
    var ret = [],
      json = {},
      length = tagName.length;

    for (var i = 0; i < length; i++) {
      var val = tagName[i];
      if (!json[val]) {
        json[val] = 1;
        var val1='#'+val
        ret.push(val1);
      }
    }
    // return ret;
    console.log(ret)
    console.log("获取去除重复元素后的数组")
    var biaoqianImg2 ="../../image/mainPage/down.png"
    console.log(index2)
    if(index1!=0){
      // app.globalData.taste="";
      this.setData({
        tasteInfor: index2,
      })
    }else if(index1==0){
      this.setData({
        tasteInfor: '',
      })
    }
    // else{
      // app.globalData.taste = index2;
      // tasteInfor:index2
    // }
   
      this.setData({
        CellId1: index1,
        tagName: tagName,
        ret: ret,
        biaoqian:'',
        biaoqianImg:'',
        
      })
  },
  chooseColor: function(e) {
    var index=e.currentTarget.dataset.index;
    // app.globalData.difficulty = index;
    console.log(index)
    console.log("获取难度的标签")
    if(index==0){
      this.setData({
        difficultyInfor: ''
      })
    }else if(index!=0){
      this.setData({
        difficultyInfor: index
      })
    }
    this.setData({
      CellId: index,
      // difficultyInfor:index
      
    })
 
  },
  // chooseColor1: function () {
  //   this.setData({
  //     down5Detail1: false,
  //     down5Detail2: true,
  //     down5Detail3: false,
  //   })
  // },
  // chooseColor2: function () {
  //   this.setData({
  //     down5Detail1: false,
  //     down5Detail2: false,
  //     down5Detail3: true,
  //   })
  // },
  change: function () {
    this.setData({
      down7Detail1: !this.data.down7Detail1,
    })
  },
  change1: function (e) {
    var index = e.target.dataset.key
    var tag = e.target.dataset.tag
    var name=e.target.dataset.name
    var tagName=this.data.tagName;
    console.log(index)
    console.log("获取产品的tag标签")
      if (index!= 0) {
        // app.globalData.tag = "";
        this.setData({
            tagInfor: tag
        })
      }else if(index==0){
        this.setData({
          tagInfor: ''
        })
      }
      // else {
      //   app.globalData.tag = tag;
      // }
    if(name!="全部"){
      tagName.push(name)
      this.setData({
        biaoqianImg2: biaoqianImg2,
      })
    }
    


    var ret = [],
      json = {},
      length = tagName.length;

    for (var i = 0; i < length; i++) {
      var val = tagName[i];
      if (!json[val]) {
        json[val] = 1;
        var val1 = '#' + val
        ret.push(val1);
      }
    }
    // return ret;
    console.log(ret)
    console.log("获取去除重复元素后的数组")

    app.globalData.tag=tag;
    var indexArr = this.data.indexArr;
    // indexArr.push(index)
    var biaoqianImg2 ="../../image/mainPage/down.png"
    this.setData({
      indexArr: index,
      tagName: tagName,
      ret:ret,
      biaoqian: '',
      biaoqianImg: '',
      
    })
    console.log(this.data.indexArr)
    // console.log(this.data.indexArr1)
  },
  change2: function () {
    this.setData({
      down7Detail3: !this.data.down7Detail3,
    })
  },
  change3: function () {
    this.setData({
      down7Detail4: !this.data.down7Detail4,
    })
  },
  close: function() {

    var that = this;
    var d = new Date()
    var callTime = parseInt(d.getTime() / 1000)
    var key = "l7k6yZSJd1DCEK1C4TsQT0ivMfuZeXRj"
    var random = utilRandom.random(16)
    var token = utilMd5.md5(callTime + random + key)
    var uid = app.globalData.uid;
    var sid = app.globalData.sid;
    var openid = app.globalData.openid;
    var type=app.globalData.type;

    var biaoqian=this.data.biaoqian;
    if(biaoqian==""){
      var biaoqianImg2 = "../../image/mainPage/down.png"
      that.setData({
        biaoqianImg2: biaoqianImg2,
      })
    }
    that.setData({
      scrollHeight:101
    })

    var taste=this.data.tasteInfor;
    console.log(taste)
    console.log("获取点击完的口味")
    var difficulty = this.data.difficultyInfor;
    console.log(difficulty)
    console.log("获取产品的难度值")
    var tag=this.data.tagInfor;
    console.log(tag)
    console.log("获取点击完的标签")
    this.setData({down: false})

    if(taste==""&tag==""){
        wx.request({
          url: "https://gz-xcx.maoln.com/api/recipe",
          data: {
            token: token,
            t: callTime,
            r: random,
            type: type,
            difficulty:difficulty,
          },
          header: {
            'X-Requested-With': 'XMLHttpRequest'
          },
          method: "post",
          success: function (res) {
            console.log(res)
            console.log("确定后获取用户食谱")
            var inforDetail = res.data;
            for (var i = 0; i < inforDetail.length; i++) {
              inforDetail[i].count = 1
              if (inforDetail[i].thumbnail == "") {
                inforDetail[i].thumbnail = "/uploads/%E5%BE%AE%E4%BF%A1%E5%9B%BE%E7%89%87_20171124111807.jpg"
              }
            }
            that.setData({ inforDetail: inforDetail })
          },
        })
    }
    else if(taste==""){
      console.log("跳到口味这边来了")
      wx.request({
        url: "https://gz-xcx.maoln.com/api/recipe",
        data: {
          token: token,
          t: callTime,
          r: random,
          type: type,
          difficulty: difficulty,
          tag: tag,
        },
        header: {
          'X-Requested-With': 'XMLHttpRequest'
        },
        method: "post",
        success: function (res) {
          console.log(res)
          console.log("确定后获取用户食谱")
          var inforDetail = res.data;
          for (var i = 0; i < inforDetail.length; i++) {
            inforDetail[i].count = 1
            if (inforDetail[i].thumbnail == "") {
              inforDetail[i].thumbnail = "/uploads/%E5%BE%AE%E4%BF%A1%E5%9B%BE%E7%89%87_20171124111807.jpg"
            }
          }
          that.setData({ inforDetail: inforDetail })
        },
      })
    }
    else if (tag=="") {
      console.log("跳转标签为空这边来了")
      
      wx.request({
        url: "https://gz-xcx.maoln.com/api/recipe",
        data: {
          token: token,
          t: callTime,
          r: random,
          type: type,
          difficulty: difficulty,
          taste: taste
        },
        header: {
          'X-Requested-With': 'XMLHttpRequest'
        },
        method: "post",
        success: function (res) {
          console.log(res)
          console.log("确定后获取用户食谱")
          var inforDetail = res.data;
          for (var i = 0; i < inforDetail.length; i++) {
            inforDetail[i].count = 1
            if (inforDetail[i].thumbnail == "") {
              inforDetail[i].thumbnail = "/uploads/%E5%BE%AE%E4%BF%A1%E5%9B%BE%E7%89%87_20171124111807.jpg"
            }
          }
          that.setData({ inforDetail: inforDetail })
        },
      })
    }
    else{
      wx.request({
        url: "https://gz-xcx.maoln.com/api/recipe",
        data: {
          token: token,
          t: callTime,
          r: random,
          type: type,
          difficulty: difficulty,
          taste: taste,
          tag: tag,
        },
        header: {
          'X-Requested-With': 'XMLHttpRequest'
        },
        method: "post",
        success: function (res) {
          console.log(res)
          console.log("确定后获取用户食谱")
          var inforDetail = res.data;
          for (var i = 0; i < inforDetail.length; i++) {
            inforDetail[i].count = 1
            if (inforDetail[i].thumbnail == "") {
              inforDetail[i].thumbnail = "/uploads/%E5%BE%AE%E4%BF%A1%E5%9B%BE%E7%89%87_20171124111807.jpg"
            }
          }
          that.setData({ inforDetail: inforDetail })
        },
      })
    }

  },
  foodDetail: function(e){
    var idx = e.currentTarget.dataset.change;
    app.globalData.foodDetailId=idx;
    console.log(idx)
    var recipe_id = e.currentTarget.dataset.id;
    console.log(recipe_id)
    console.log("获取用户的产品接收id值")
    app.globalData.foodDetailId1 = recipe_id;
    wx.navigateTo({
      url: '../foodDetail/foodDetail',
      success: function(res) {},
      fail: function(res) {},
      complete: function(res) {},
    })
  },
  addNum: function(e){
      var that=this;
      var addnum=e.currentTarget.dataset.addnum;
      app.globalData.recipe_id = addnum;
      var inforDetail=this.data.inforDetail;
      var count = inforDetail[addnum].count;
      count++
      app.globalData.count = count;
      inforDetail[addnum].count=count
      that.setData({
        inforDetail: inforDetail,
    })
  },
  minusNum: function(e){
    var that = this;
    var minusnum = e.currentTarget.dataset.minusnum;
    app.globalData.recipe_id=minusnum;
    var inforDetail = this.data.inforDetail;
    console.log(inforDetail)
    var count = inforDetail[minusnum].count;
    if(count>=2){
    count--
    app.globalData.count = count;
    inforDetail[minusnum].count = count
    that.setData({
      inforDetail: inforDetail,
    })
    }
  },
  addFood: function(e){
      var uid=app.globalData.uid;
      var idx=e.currentTarget.dataset.add;
      var recipe_id=e.currentTarget.dataset.id;
      // var recipe_id=idx+1;
      var inforDetail=this.data.inforDetail;
      var count=inforDetail[idx].count;
      console.log(uid)
      // console.log(recipe_id)
      console.log(count)
      var that = this;
      var d = new Date()
      var callTime = parseInt(d.getTime() / 1000)
      var key = "l7k6yZSJd1DCEK1C4TsQT0ivMfuZeXRj"
      var random = utilRandom.random(16)
      var token = utilMd5.md5(callTime + random + key)
      var uid = app.globalData.uid;
      var sid = app.globalData.sid;
      var openid = app.globalData.openid;
      // var count=app.globalData.count;
      // var recipe_id=app.globalData.recipe_id;
     
      wx.request({
        // url: "https://gz-xcx.maoln.com/api/user/recipe/update",
        url: "https://gz-xcx.maoln.com/api/user/recipe/add",
        data: {
          uid:uid,
          id:recipe_id,
          count:count,
          token:token,
          t: callTime,
          r: random,
          sid:sid,
        },
        header: {
          'X-Requested-With': 'XMLHttpRequest'
        },
        method: "post",
        success: function(res) {
          console.log(res)
          wx.showToast({
            title: '添加食谱成功',
            icon: '../../image/mainPage/success.png',
            image: '',
            duration: 2000,
            mask: true,
            success: function(res) {},
          })
        },
      })
  },
  //返回顶部
  scrollTopFun: function (e) {
    // console.log(e.detail);
    if (e.detail.scrollTop > 300) {//触发gotop的显示条件  
      this.setData({
        'scrollTop.goTop_show': true
      });
      // console.log(this.data.scrollTop)
    } else {
      this.setData({
        'scrollTop.goTop_show': false
      });
    }
  },
  goTopFun: function (e) {
    var _top = this.data.scrollTop.scroll_top;//发现设置scroll-top值不能和上一次的值一样，否则无效，所以这里加了个判断  
    if (_top == 1) {
      _top = 0;
    } else {
      _top = 1;
    }
    this.setData({
      'scrollTop.scroll_top': _top
    });
    console.log("----");
    console.log(this.data.scrollTop)
  },
  // backToTop: function(){

  //   var that=this;
  //   console.log("我进点击返回到顶部的按钮了")
  //   that.setData({
  //     // scrollHeight:'500px',
  //     scrollTop:0
  //   })
  // },

  // scroll: function(e){
  //   wx.getSystemInfo({
  //     success: function (res) {
  //       console.info(res.windowHeight);
  //       console.log("实时获取高度")
  //       that.setData({
  //         scrollHeight: res.windowHeight
  //       });
  //      },
  //     fail: function (res) { }, 
  //     complete: function (res) { },
  //   })

    // if (e.detail.scrollTop > 500) {
    //   this.setData({
    //     floorstatus: true
    //   });
    // }
    // else {
    //   this.setData({
    //     floorstatus: false
    //   });
    // }
  // }
})