//index.js
//获取应用实例
const app = getApp();

Page({
  data: {
    msg_comfirm: app.globalData.msg_comfirm,
    msg_refuse: app.globalData.msg_refuse,
    msg_waiting: app.globalData.msg_waiting,
    ustatus: app.globalData.ustatus,
    indicatorDots: false,
    vertical: false,
    autoplay: true,
    interval: 3000,
    duration: 500,

  },
  onLoad: function () {
    
  },
  register:function(){
    var that=this;
    wx.getUserInfo({
      success: function (res) {
        var userInfo = res.userInfo;
        console.log(userInfo);
        wx.setStorageSync("uname", userInfo.nickName);
        wx.setStorageSync("uimg", userInfo.avatarUrl);
        wx.setStorageSync("ustatus", true);
        app.globalData.uname = userInfo.nickName;
        app.globalData.uimg = userInfo.avatarUrl;
        app.globalData.ustatus = userInfo.ustatus;
        that.setData({
          ustatus:true
        })
        wx.showToast({
          icon: "success",
          title: "注册成功",
          duration: 1000
        })
      }, fail: function (res) {
        console.log(res);
      }
    });
  },
  forward: function (event){
    var that = this;
    var code = event.currentTarget.dataset.code
    wx.switchTab({
      url: "../"+code+"/index"
    })
  },
  closeAD:function(){
    app.globalData.welcome=false;
    this.setData({
      welcome:false
    })
  }
})
