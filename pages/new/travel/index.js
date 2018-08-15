// pages/new/index.js
var app = getApp();
Page({

  /**
   * 页面的初始数据
   */
  data: {
    account: ["武警账户", "业务账户"],
    acode: [437, 323],
    aindex: 0,
    payment: ["个人公务卡支付"],
    pcode: [59, 4087],
    pindex: 0,
    approve_code: 0,//审批类别
    approve_name: "差旅费审批",
    title: "",
    total: 0,//金额
    udptkey: app.globalData.udptkey,
    udptname: app.globalData.udptname,
    udptcode: app.globalData.udptcode,
    uname: app.globalData.uname,
    CN: "",//中文
    ant: app.globalData.account,
    date: app.getDate(),
    car:0,
    air:0,
    back:0,
    train:0,
    taxi:0,
    safe:0,
    hotal:0,
    foot:0,
    snack:0,
    travel:600
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

  accountChange: function (e) {
    var that = this;
    this.setData({
      aindex: e.detail.value,
    })
  },
  paymentChange: function (e) {
    var that = this;
    this.setData({
      pindex: e.detail.value,
    })
  },
  moneyChange: function (total) {
    var CN = app.changeMoneyToChinese(total);
    this.setData({
      CN: CN
    });
  },

  titleChange: function (e) {
    var _title = e.detail.value;
    _title = _title.replace(/[^\Z0-9]/g, '');
    this.setData({
      title: _title
    });
  },

  totalChange: function (e) {
    var that=this;
    var _title = e.detail.value;
    var code = e.currentTarget.dataset.code;
    _title = _title.replace(/[^\Z0-9]/g, '');
    console.log(_title);
    if(code=='car'){
      this.setData({
        car: _title
      });
    }else if(code=="air"){
      this.setData({
        air: _title
      });
    } else if (code == "back") {
      this.setData({
        back: _title
      });
    } else if (code == "train") {
      this.setData({
        train: _title
      });
    } else if (code == "taxi") {
      this.setData({
        taxi: _title
      });
    } else if (code == "safe") {
      this.setData({
        safe: _title
      });
    } else if (code == "hotal") {
      this.setData({
        hotal: _title
      });
    } else if (code == "foot") {
      this.setData({
        foot: _title
      });
    } else if (code == "snack") {
      this.setData({
        snack: _title
      });
    }
    var total = 1 * that.data.car + 1 * that.data.air + 1 * that.data.back + 1 * that.data.train + 1 * that.data.taxi + 1 * that.data.safe + 1 * that.data.hotal + 1 * that.data.foot + 1 * that.data.snack + 1 *that.data.travel;
    that.setData({
      total:total
    });
    that.moneyChange(total);
  },

})