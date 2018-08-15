// pages/application/daily/index.js
var app = getApp();
Page({
  /**
   * 页面的初始数据
   */
  data: {
    select: "dy",
    items: [
      { name: 'dy', value: ' 定点维修', checked: 'true' },
      { name: 'fdy', value: ' 非定点维修' },
    ],
    payment: ["报价单询价", "电话询价", "现场询价", "其他询价"],
    pindex: 0,
    date: app.getDate(),
    joblist: app.globalData.joblist,
    jcode:0,
    uname:app.globalData.uname,
    udptname: app.globalData.udptname
  },
  radioChange: function (e) {
    console.log('checkbox发生change事件，携带value值为：', e.detail.value)
    this.setData({
      select: e.detail.value
    })
  },
  accountChange: function (e) {
    this.setData({
      jcode: e.detail.value
    })
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
  submitBuild: function () {
    wx.showToast({
      icon: "success",
      title: "演示版本",
      duration: 1000
    })
  }
})