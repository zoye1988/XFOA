// pages/application/daily/index.js
var app = getApp();
Page({
  /**
   * 页面的初始数据
   */
  data: {
    select: "dy",
    items: [
      { name: 'dy', value: ' 定点加油', checked: 'true' },
      { name: 'fdy', value: ' 非定点加油' },
    ],
    oil: ["92号", "95号", "98号", "柴油"],
    pindex: 0,
    date: app.getDate(),
    begin: app.getDate(),
    end: app.getDate(),
    joblist: app.globalData.joblist,
    jcode: 0,
    uname: app.globalData.uname,
    udptname: app.globalData.udptname,
    udptcode: app.globalData.udptcode,
    openid: app.globalData.openid,
    card:"",
    ctype:"",
    total:0,
    place:"",
    num:0,
    uoilreason: "",
    ucarusereason: "",
    ucarusefun: "",
  },
  beginDateChange: function (e) {
    console.log('picker发送选择改变，携带值为', e.detail.value)
    this.setData({
      begin: e.detail.value
    })
  },
  endDateChange: function (e) {
    console.log('picker发送选择改变，携带值为', e.detail.value)
    this.setData({
      end: e.detail.value
    })
  },
  radioChange: function (e) {
    console.log('checkbox发生change事件，携带value值为：', e.detail.value)
    this.setData({
      select: e.detail.value
    })
  },
  oilChange: function (e) {
    console.log('picker发送选择改变，携带值为', e.detail.value)
    this.setData({
      pindex: e.detail.value
    })
  },
  jobChange: function (e) {
    console.log('picker发送选择改变，携带值为', e.detail.value)
    this.setData({
      jcode: e.detail.value
    })
  },
  cardChange: function (e) {
    var _title = e.detail.value;
    _title = _title.replace(/[^\a-\z\A-\Z0-9\u4E00-\u9FA5]/g, '');
    this.setData({
      card: _title
    });
  },
  ctypeChange: function (e) {
    var _title = e.detail.value;
    _title = _title.replace(/[^\a-\z\A-\Z0-9\u4E00-\u9FA5]/g, '');
    this.setData({
      ctype: _title
    });
  },
  kilometerChange: function(e) {
    var _title = e.detail.value;
    _title = _title.replace(/[^\a-\z\A-\Z0-9\u4E00-\u9FA5]/g, '');
    this.setData({
      kilometer: _title
    });
  },
  totalChange: function (e) {
    var _title = e.detail.value;
    _title = _title.replace(/[^\a-\z\A-\Z0-9\u4E00-\u9FA5]/g, '');
    this.setData({
      total: _title
    });
  },
  placeChange: function (e) {
    var _title = e.detail.value;
    _title = _title.replace(/[^\a-\z\A-\Z0-9\u4E00-\u9FA5]/g, '');
    this.setData({
      place: _title
    });
  },
  numChange: function (e) {
    var _title = e.detail.value;
    _title = _title.replace(/[^\a-\z\A-\Z0-9\u4E00-\u9FA5]/g, '');
    this.setData({
      num: _title
    });
  },
  uoilreason: function (e) {
    var _title = e.detail.value;
    _title = _title.replace(/[^\a-\z\A-\Z0-9\u4E00-\u9FA5]/g, '');
    this.setData({
      uoilreason: _title
    });
  },
  ucarusereason: function(e) {
    var _title = e.detail.value;
    _title = _title.replace(/[^\a-\z\A-\Z0-9\u4E00-\u9FA5]/g, '');
    this.setData({
      ucarusereason: _title
    });
  },
  ucarusefun: function (e) {
    var _title = e.detail.value;
    _title = _title.replace(/[^\a-\z\A-\Z0-9\u4E00-\u9FA5]/g, '');
    this.setData({
      ucarusefun: _title
    });
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
  submitBuild:function(){
    var that=this;
    var apply = app.globalData.apply;
    var oil = app.globalData.oil;
    var _oil={
        id: oil.length + 1,
        uname:that.data.uname,
        openid: that.data.openid,
        dptname: that.data.udptname,
        date:that.data.date,
        card: that.data.card,
        ctype: that.data.ctype,
        kilometer: that.data.kilometer,
        select: that.data.select,
        oil: that.data.oil[that.data.pindex],
        num:that.data.num,
        total: that.data.total,
        begin:that.data.begin,
        end: that.data.end,
        place: that.data.place,
        uoilreason: that.data.uoilreason,
        ucarusereason: that.data.ucarusereason,
        ucarusefun: that.data.ucarusefun,
        jobtitle: that.data.joblist[that.data.jobcode],
        jobcode: that.data.jobcode,
        aid: apply.length + 1,
        status:"waiting"
    }
    var _apply = {
      aid: apply.length+1,
      title: "车辆加油申请",
      code: "oil",
      time: app.getDate()+" "+app.getTime(),
      status: "waiting",
      openid: that.data.openid,
      job: that.data.joblist[that.data.jcode],
      dptcode: that.data.udptcode,
      dptname: that.data.udptname,
      leader:"",
      answer:"",
      link: oil.length + 1
    };
    oil.unshift(_oil);
    apply.unshift(_apply);
    wx.showToast({
      title: "提交成功",
      image: "../../img/comfirm.png",
      duration: 2000
    })
  }
})