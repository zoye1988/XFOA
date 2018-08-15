// pages/items/oil/index.js
var app = getApp();
Page({

  /**
   * 页面的初始数据
   */
  data: {
    jotitle: app.globalData.jotitle,
    job: app.globalData.job,
    date:app.getDate(),
    select:"dy",
    oil:"",
    apply:"",
    uname: app.globalData.uname
  },

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {
    var that=this;
    var link = options.link;//读取传递的ID参数
    var oils = app.globalData.oil;
    var aid = options.aid;//读取传递的ID参数;
    var _apply = app.globalData.apply;
    for (var bt in oils) {
      if(oils[bt].id==link){
        that.setData({
          oil:oils[bt],
          select:oils[bt].select
        })
      }
    }
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
  
  }
})