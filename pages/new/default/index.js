// pages/new/index.js
var app = getApp();
Page({

  /**
   * 页面的初始数据
   */
  data: {
    account:["武警账户","业务账户"],
    acode:[437,323],
    aindex:0,
    payment:["银行存款支付","个人公务卡支付"],
    pcode:[59,4087],
    pindex:0,
    approve_code:0,//审批类别
    approve_name:"车辆加油审批",
    title:"",
    total:0,//金额
    udptkey: app.globalData.udptkey,
    udptname: app.globalData.udptname,
    udptcode: app.globalData.udptcode,
    uname: app.globalData.uname,
    CN:"",//中文
    ant: app.globalData.account,
    date:app.getDate()
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

  accountChange:function(e){
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
  moneyChange: function (e) {
    var _title = e.detail.value;
    //通过正则表达式，仅能输入数字。
    _title = _title.replace(/[^\Z0-9]/g, '');
    var CN = app.changeMoneyToChinese(_title);
    this.setData({
      total: _title,
      CN: CN
    });
  },

  titleChange: function (e) {
    var _title = e.detail.value;
    _title = _title.replace(/[^\a-\z\A-\Z0-9\u4E00-\u9FA5]/g, '');
    this.setData({
      title: _title
    });
  },

})