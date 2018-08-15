// pages/list/index.js
var app = getApp();
Page({

  /**
   * 页面的初始数据
   */
  data: {
    selectItem: 0,
    job: app.globalData.job,
    items: [
      {
        id: 0,
        title: "车辆维修验收",
        code: "car",
        time: "2018-02-11 10:12:32",
        status: "refuse",
        dptname: "马龙区消防大队",
      },
      {
        id: 2,
        title: "零星采购验收",
        time: "2018-01-18 15:32:13",
        status: "waiting",
        code: "daily",
        dptname: "麒麟区消防大队",
      },
      {
        id: 3,
        title: "零星采购验收",
        code: "daily",
        time: "2018-02-09 14:39:33",
        status: "comfirm",
        dptname: "麒麟区消防大队",
      },
      {
        id: 3,
        title: "房屋维修验收",
        code: "house",
        time: "2018-05-19 18:40:12",
        status: "comfirm",
        dptname: "经开区消防大队",
      }
    ]
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

})