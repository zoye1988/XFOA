// pages/card/index.js
var app = getApp();
Page({

  /**
   * 页面的初始数据
   */
  data: {
    uname: app.globalData.uname,
    num:"",
    bank:"",
    cards:[
      {
        id:1,
        num:"62285335611448632",
        bank:"中国工商银行曲靖麒麟支行",
        user:"李乐军",
        band:true
      },
      {
        id: 2,
        num: "6228888822366899",
        bank: "中国农业银行建宁路支行",
        user: "李乐军",
        band: false
      },
    ]
  },

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {
  
  },
  delCard: function (event){
    var that=this;
    var id = event.currentTarget.dataset.id;
    var cards = this.data.cards;
    var _cards=[];
    wx.showModal({
      title: "操作提示",
      content: "确定删除银行卡 "+id+"?",
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
            cards:_cards
          })
        }
      }
    })
  },
  bandCard: function (event){
    var that = this;
    var id = event.currentTarget.dataset.id;
    var cards = this.data.cards;
    for (var bt in cards) {
      if (cards[bt].id == id) {
        cards[bt].band=true;
      }else{
        cards[bt].band = false;
      }
    }
    that.setData({
      cards: cards
    })
  },
  numChange: function (e) {
    var _title = e.detail.value;
    _title = _title.replace(/[^\a-\z\A-\Z0-9\u4E00-\u9FA5]/g, '');
    this.setData({
      num: _title
    });
  },
  bankChange: function (e) {
    var _title = e.detail.value;
    _title = _title.replace(/[^\a-\z\A-\Z0-9\u4E00-\u9FA5]/g, '');
    this.setData({
      bank: _title
    });
  },
  addCard:function(){
    var that=this;
    var cards=that.data.cards;
    var card={
      id: cards.length+1,
      num: that.data.num,
      bank: that.data.bank,
      user: "邓恒靖",
      band: false
    }
    cards.push(card);
    that.setData({
      cards:cards
    });
  }
})