// pages/list/index.js
var app = getApp();
Page({

  /**
   * 页面的初始数据
   */
  data: {
    selectItem: 0,
    job: app.globalData.job,
    openid: app.globalData.openid,
    items: [
      {
        aid: 1,
        title: "车辆维修",
        code: "car",
        time: "2018-06-10",
        status: "comfirm",
        dptcode: 10,
        dptname: "马龙区消防大队",
        editor:"邓恒靖"
      }
    ],
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

  itemChange: function (event) {
    var that = this;
    var items = app.globalData.apply;
    var code = event.currentTarget.dataset.code
    this.setData({
      selectItem: code
    });
    if (code == 0) {
      that.setData({
        items: app.globalData.apply
      });
    } else {
      var _items = [];
      var _openid = that.data.openid;
      for (var i = 0; i < items.length; i++) {
        if (items[i].openid == _openid) {
          _items.push(items[i]);
        }
      }
      that.setData({
        items: _items
      });
    }
  },

  /**
   * 页面上拉触底事件的处理函数
   */
  onReachBottom: function () {
    console.log("shouw")
  },
})