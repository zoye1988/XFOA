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
        status:'pass',
        dptcode: 10,
        dptname: "马龙区消防大队",
        editor:"邓恒靖"
      },
      {
        aid: 2,
        title: "车辆加油",
        code: "oil",
        time: "2018-06-14",
        status: 'wait',
        dptcode: 10,
        dptname: "马龙区消防大队",
        editor: "邓恒靖"
      },
      {
        aid: 3,
        title: "公务接待",
        code: "recept",
        time: "2018-06-14",
        status: 'refuse',
        dptcode: 10,
        dptname: "马龙区消防大队",
        editor: "邓恒靖"
      },
      {
        aid: 4,
        title: "零星采购",
        code: "daily",
        time: "2018-06-14",
        status: 'refuse',
        dptcode: 10,
        dptname: "马龙区消防大队",
        editor: "邓恒靖"
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
    var items = this.data.items;
    var code = event.currentTarget.dataset.code
    this.setData({
      selectItem: code
    });
    if (code == 0) {
      that.setData({
        items: that.data.items
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