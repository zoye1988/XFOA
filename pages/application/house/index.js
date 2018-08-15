// pages/application/daily/index.js
var app = getApp();
Page({
  /**
   * 页面的初始数据
   */
  data: {
    select: "dy",
    items: [
      { name: 'dy', value: ' 非单一来源', checked: 'true' },
      { name: 'fdy', value: '单一来源' },
    ],
    payment: ["报价单询价", "电话询价", "现场询价", "其他询价"],
    pindex: 0,
    date: app.getDate(),
    joblist: app.globalData.joblist,
    jcode: 0,
    uname: app.globalData.uname,
    udptname: app.globalData.udptname,
    cards: [

    ],
    company: "",
    leader: "",
    tel: "",
    total: 0,
  },
  radioChange: function (e) {
    console.log('checkbox发生change事件，携带value值为：', e.detail.value)
    this.setData({
      select: e.detail.value
    })
  },

  paymentChange: function (e) {
    this.setData({
      pindex: e.detail.value
    })
  },
  submitBuild: function () {
    wx.showToast({
      icon: "success",
      title: "演示版本",
      duration: 1000
    })
  },

  accountChange: function (e) {
    this.setData({
      jcode: e.detail.value
    })
  },

  delCard: function (event) {
    var that = this;
    var id = event.currentTarget.dataset.id;
    var cards = this.data.cards;
    var _cards = [];
    wx.showModal({
      title: "操作提示",
      content: "确定询价单标号" + id + "?",
      showCancel: true,
      confirmText: "确定",
      success: function (res) {
        if (res.confirm) {
          for (var bt in cards) {
            if (cards[bt].id != id) {
              _cards.push(cards[bt]);
            }
          }
          that.setData({
            cards: _cards
          })
        }
      }
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
  companyChange: function (e) {
    var _title = e.detail.value;
    _title = _title.replace(/[^\a-\z\A-\Z0-9\u4E00-\u9FA5]/g, '');
    this.setData({
      company: _title
    });
  },
  leaderChange: function (e) {
    var _title = e.detail.value;
    _title = _title.replace(/[^\a-\z\A-\Z0-9\u4E00-\u9FA5]/g, '');
    this.setData({
      leader: _title
    });
  },
  telChange: function (e) {
    var _title = e.detail.value;
    _title = _title.replace(/[^\a-\z\A-\Z0-9\u4E00-\u9FA5]/g, '');
    this.setData({
      tel: _title
    });
  },
  totalChange: function (e) {
    var _title = e.detail.value;
    _title = _title.replace(/[^\Z0-9]/g, '');
    this.setData({
      total: _title
    });
  },
  addCard: function () {
    var that = this;
    var cards = that.data.cards;
    var card = {
      id: cards.length + 1,
      company: that.data.company,
      leader: that.data.leader,
      tel: that.data.tel,
      pay: that.data.payment[that.data.pindex],
      total: that.data.total
    }
    cards.push(card);
    that.setData({
      cards: cards
    });
  }
})