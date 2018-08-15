// pages/items/travel/index.js
var app = getApp();
Page({

  /**
   * 页面的初始数据
   */
  data: {
    jotitle: app.globalData.jotitle,
    job: app.globalData.job,
    date: app.getDate(),
    select: "dy",
    oil: "",
    apply: "",
    uname: app.globalData.uname
  },

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {
    var that = this;
    var aid = options.aid;//读取传递的ID参数
    console.log(aid);
    var _apply = app.globalData.apply;
    for (var bt in _apply) {
      if (_apply[bt].aid == aid) {
        that.setData({
          apply: _apply[bt],
        })
      }
    }
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
  
  }
})