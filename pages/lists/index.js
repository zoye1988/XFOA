// pages/list/index.js
var app = getApp();
Page({

  /**
   * 页面的初始数据
   */
  data: {
    selectItem:0,
    job:app.globalData.job,
    items: app.globalData.items,
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
    var items = app.globalData.items;
    var code = event.currentTarget.dataset.code
    this.setData({
      selectItem: code
    });
    if (code == 0) {
      that.setData({
        items: items
      });
    } else if(code==1) {
      var _items = [];
      for (var i = 0; i < items.length; i++) {
        if (items[i].status == "comfirm") {
          _items.push(items[i]);
        }
      }
      that.setData({
        items: _items
      });
    } else if (code == 2) {
      var _items = [];
  
      for (var i = 0; i < items.length; i++) {
        if (items[i].status == "refuse") {
          _items.push(items[i]);
        }
      }
      that.setData({
        items: _items
      });
    } else if (code == 3) {
      var _items = [];

      for (var i = 0; i < items.length; i++) {
        if (items[i].status == "waiting") {
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
  getDetail: function (event){
    var code = event.currentTarget.dataset.code;
    var id = event.currentTarget.dataset.id;
    if(code=='travel'){
      wx.navigateTo({
        url: '../detail/travel/index?id='+id,
      });
    }else{
      wx.navigateTo({
        url: '../detail/default/index?id=' + id,
      });
    }
  }
})