// pages/detail/index.js
var app = getApp();
Page({

  /**
   * 页面的初始数据
   */
  data: {
    target: "",
    selectItem: 0,
    imgItem: 1,
    imgs: "",
    countIndex: 10,
    detail: [
      {
        id: 2,
        uname: "成文涛",
        time: "2018-03-15",
        dptname: "罗平县消防大队",
        approve_name: "差旅费审批",
        title: "到支队做账",
        total: 488,
        pay: "个人公务卡支付",
        account: "业务账目",
        CN: "肆佰捌拾捌元整",
        postCompany: "罗平县公安消防大队",
        postBank: "中国工商银行罗平县观音阁支行",
        postNum: "2505064709226700550",
        getCompany: "成文涛",
        getBank: "中国工商银行",
        getNum: "622202250502721815",
        totals:{
          car: 0,
          air: 0,
          back: 0,
          train: 0,
          taxi: 0,
          safe: 0,
          hotal: 288,
          foot: 0,
          snack: 0,
          travel: 200
        },
        rules: [
          {
            rid: 0,
            rtime: "2018-03-15",
            jobname: "大队出纳",
            jobcode: 7,
            uname: "黄丹",
            approve_status: "comfirm",
            msg: "请领导审批"
          },
          {
            rid: 0,
            rtime: "2018-03-16",
            jobname: "大队领导",
            jobcode: 7,
            uname: "李义雷",
            approve_status: "comfirm",
            msg: "同意上报"
          },
          {
            rid: 0,
            rtime: "2018-03-16",
            jobname: "外聘会计",
            jobcode: 7,
            uname: "冯旭丽",
            approve_status: "comfirm",
            msg: "审核未发现问题"

          },
          {
            rid: 0,
            rtime: "2018-03-17",
            jobname: "集中会计",
            jobcode: 7,
            jobcode: 7,
            uname: "潘柔",
            approve_status: "comfirm",
            msg: "同意审批"
          }
        ],
        docs: [
          {
            did: 1,
            docname: "发票",
            imgs: [
              "https://www.zhurendata.com/wxadmin/res/temp/20180626085401.png",
            ]
          },
          {
            did: 2,
            docname: "验证单",
            imgs: [
              "https://www.zhurendata.com/wxadmin/res/temp/20180626085425.png",
            ]
          },
          {
            did: 3,
            docname: "党委会议纪要",
            imgs: [
              
            ]
          },
          {
            did: 4,
            docname: "重大经费开支审批表",
            imgs: [
              
            ]
          },
          {
            did: 5,
            docname: "合同文件",
            imgs: [
              
            ]
          },
          {
            did: 6,
            docname: "其他附件",
            imgs: [
              
            ]
          },

        ],
      },
    ],
    files: [],
  },

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {
    var that = this;
    var id = options.id;
    console.log("id="+id);
    var detail = that.data.detail;
    for (var bt in detail) {
      if (detail[bt].id == id) {
        that.setData({
          target: detail[bt]
        });
        break;
      }
    }
    that.defaultSelect();
  },
  previewImage: function (e) {
    var that = this;
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

  /**
   * 生命周期函数--监听页面初次渲染完成
   */
  onReady: function () {

  },
  changeSelect: function (event) {
    var that = this;
    var did = event.currentTarget.dataset.did;
    var target = that.data.target;
    var docs = target.docs;
    console.log(did);
    this.setData({
      imgItem: did
    });
    for (var bt in docs) {
      if (docs[bt].did == did) {
        that.setData({
          imgs: docs[bt].imgs
        })
      }
    }
    //读取相关函数
  },
  defaultSelect: function () {
    var that = this;
    var did = 1;
    var target = that.data.target;
    var docs = target.docs;
    console.log(did);
    this.setData({
      imgItem: did
    });
    for (var bt in docs) {
      if (docs[bt].did == did) {
        that.setData({
          imgs: docs[bt].imgs
        })
      }
    }
    //读取相关函数
  },

  /**
   * 生命周期函数--监听页面显示
   */
  onShow: function () {

  },

  /**
   * 用户点击右上角分享
   */
  onShareAppMessage: function () {

  },
  itemChange: function (event) {
    var code = event.currentTarget.dataset.code
    this.setData({
      selectItem: code
    });
  },

})