// pages/statics/index.js
var Charts = require('../../utils/wxcharts.js');
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
    new Charts({
      canvasId: 'canvas1',
      type: 'pie',
      series: [
        { name: '水费', data: 2184.00 }, 
        { name: '电费', data: 6300.00 }, 
        { name: '通信服务费', data: 4207.38 },
        { name: '差旅费', data: 3680.00 },

        { name: '维修（护）费', data: 248325.56 },
        { name: '培训费', data: 300.00 },
        { name: '专用燃油费', data: 13624.70 },
        { name: '其他业务经费', data: 13329.69 },
      ],
      width: 350,
      height: 400,
      dataLabel: true,
    });
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