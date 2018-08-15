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
        title: "车辆维修审批",
        code: "car",
        time: "2018-02-03 10:12:32",
        status: "refuse",
        dptname: "马龙",
        totals: 125.30,
        job: 3,
        isnew: true
      },
      {
        id: 2,
        title: "差旅费审批",
        time: "2018-02-03 10:12:32",
        status: "waiting",
        code: "travel",
        dptname: "马龙",
        totals: 125.30,
        job: 17,
        isnew: false
      },
      {
        id: 3,
        title: "车辆加油审批",
        code: "oil",
        time: "2018-02-03 10:12:32",
        status: "comfirm",
        dptname: "马龙",
        totals: 125.30,
        job: 5,
        isnew: true
      },
      {
        id: 3,
        title: "车辆加油审批",
        code: "oil",
        time: "2018-02-03 10:12:32",
        status: "comfirm",
        dptname: "马龙",
        totals: 125.30,
        job: 5,
        isnew: true
      },
      {
        id: 3,
        title: "车辆加油审批",
        code: "oil",
        time: "2018-02-03 10:12:32",
        status: "comfirm",
        dptname: "马龙",
        totals: 125.30,
        job: 5,
        isnew: true
      },
      {
        id: 0,
        title: "车辆维修审批",
        code: "car",
        time: "2018-02-03 10:12:32",
        status: "refuse",
        dptname: "马龙",
        totals: 125.30,
        job: 3,
        isnew: true
      },
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

  itemChange: function (event) {
    var code = event.currentTarget.dataset.code
    this.setData({
      selectItem: code
    });
  },

  /**
   * 页面上拉触底事件的处理函数
   */
  onReachBottom: function () {
    console.log("shouw")
  },
})