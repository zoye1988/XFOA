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
    _items: [
      {
        id: 1,
        title: "昆明江泰科技有限公司",
        code: "bcompany",
        dptname: "马龙区消防大队",
        time:"2018-01-02",
        reason:"招投标中存在违法行为"
      },
      {
        id: 1,
        title: "曲靖市麒麟区开拓者广告制作部",
        code: "bcompany",
        dptname: "马龙区消防大队",
        time: "2018-02-10",
        reason: "提供产品以次充好"
      },
      {
        id: 1,
        title: "陈涛",
        code: "bperson",
        dptname: "马龙区消防大队",
        time: "2018-01-02",
        reason: "招投标中存在违法行为"
      },
      {
        id: 1,
        title: "孙鑫",
        code: "bperson",
        dptname: "马龙区消防大队",
        time: "2018-01-02",
        reason: "拒不按照合同履行服务"
      },
      {
        id: 1,
        title: "桂宝要",
        code: "bperson",
        dptname: "马龙区消防大队",
        time: "2018-01-02",
        reason: "拒不按照合同履行服务"
      },
      {
        id: 1,
        title: "宣威市鸿博商贸有限公司",
        code: "bcompany",
        dptname: "马龙区消防大队",
        time: "2018-02-11",
        reason: "拒不按照合同履行服务"
      },
      {
        id: 1,
        title: "昆明市琨皓科技有限公司",
        code: "bcompany",
        dptname: "马龙区消防大队",
        time: "2018-02-11",
        reason: "拒不按照合同履行服务"
      }
    ],
    items:[]
  },

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {
    var _items = this.data._items;
    var items=[];
    for (var i = 0; i < _items.length; i++) {
      if (_items[i].code == "bcompany") {
        items.push(_items[i]);
      }
    }
    this.setData({
      items:items
    })
  },

  /**
   * 生命周期函数--监听页面初次渲染完成
   */
  onReady: function () {

  },

  itemChange: function (event) {
    var that = this;
    var _items = this.data._items;
    var code = event.currentTarget.dataset.code
    this.setData({
      selectItem: code
    });
    if (code == 0) {
      //企业
      var items = [];
      for (var i = 0; i < _items.length; i++) {
        if (_items[i].code == "bcompany") {
          items.push(_items[i]);
        }
      }
      
    } else {
      var items = [];
      for (var i = 0; i < _items.length; i++) {
        if (_items[i].code == "bperson") {
          items.push(_items[i]);
        }
      }
    }
    that.setData({
      items: items
    });
  },

  /**
   * 页面上拉触底事件的处理函数
   */
  onReachBottom: function () {
    console.log("shouw")
  },
})