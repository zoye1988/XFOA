// pages/files/index.js
var app = getApp();
Page({

  /**
   * 页面的初始数据
   */
  data: {
    approve_code: 0,//审批类别
    approve_name: "车辆加油审批",
    status: "waiting",
    code: "travel",
    total: 150,//金额
    editer:"test",//当前编辑的人员openid
    udptkey: app.globalData.udptkey,
    udptname: app.globalData.udptname,
    udptcode: app.globalData.udptcode,
    uname: app.globalData.uname,
    openid:app.globalData.openid,
    time: "2018-02-03 02:02:15",
    selected:0,
    countIndex:10,
    sourceTypeIndex: ['album', 'camera'],//拍照或图册
    sizeTypeIndex: ['compressed'],//压缩
    docs: [
      {
        did: 0,
        docname: "经费结算单"
      },
      {
        did: 1,
        docname: "发票"
      },
      {
        did: 2,
        docname: "验证单"
      },
      {
        did: 3,
        docname: "党委会议纪要"
      },
      {
        did: 4,
        docname: "重大经费审批表"
      },
      {
        did: 5,
        docname: "银行存款支付审批表"
      },
    ],
    imgs:[
      "https://img3.doubanio.com/view/photo/l/public/p2519448043.webp",
      "https://img3.doubanio.com/view/photo/s_ratio_poster/public/p2499583872.webp",
      "https://img3.doubanio.com/view/photo/s_ratio_poster/public/p2249048164.webp",
    ],
    files:[]
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
  changeSelect:function(event){
    var did = event.currentTarget.dataset.did;
    this.setData({
      selected:did
    });
    //读取相关函数
  },
  previewImage: function (e) {
    var that=this;
    var current = e.target.dataset.src;
    wx.previewImage({
      current: current,
      urls: this.data.imgs
    })
  },
  previewImage2: function (e) {
    var that = this;
    var current = e.target.dataset.src;
    wx.previewImage({
      current: current,
      urls: this.data.files
    })
  },
  deleteImg:function(e){
    var that = this;
    var current = e.target.dataset.name;
    wx.showModal({
      content: '确定删除此文件',
      title:"操作提示",
      success: function (res){
        if (res.confirm) {
          console.log('用户点击确定')
        } else if (res.cancel) {
          console.log('用户点击取消')
        }
      },
    })
  },
  /**
   * 选择图片
   */
  chooseImage: function () {
    var that = this;
    var host = app.globalData.host;//默认系统地址
    wx.chooseImage({
      sourceType: that.data.sourceTypeIndex,
      sizeType: that.data.sizeTypeIndex,
      count: this.data.countIndex,
      success: function (res) {
        var imagelist = res.tempFilePaths;
        console.log(imagelist)
        that.setData({
          files: imagelist
        })
      }
    })
  }
})