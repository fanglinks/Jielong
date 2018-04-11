// pages/personal/joinJieLong/joinJieLong.js
var app = getApp();

Page({

  /**
   * 页面的初始数据
   */
  data: {
    isShow:false,
    data:[{
      time:"2018",
      work:"已发货",
      topic:"蛋黄酥"
    }, {
      time: "2018",
      work: "已发货",
      topic: "蛋黄酥"
      }, {
        time: "2018",
        work: "已发货",
        topic: "蛋黄酥"
      }]
  
  },

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {
    //加载数据
    this.initData();
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
  
  // 自定义事件
  initData:function(e){
    var _this = this;
    wx.request({
      url: app.globalData.domain +'/order/selectByCustomerId',
      data:{
        customerId:wx.getStorageSync("userId")
      },
      success:function(res){
        console.log(res)
        if(res.statusCode == 200){
          _this.setData({
            data:res.data.data,
            isShow:true
          })
        }
      }
    })


  }
})