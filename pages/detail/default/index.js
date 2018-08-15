// pages/detail/index.js
var app = getApp();
Page({

  /**
   * 页面的初始数据
   */
  data: {
    target:"",
    selectItem:0,
    imgItem:1,
    imgs:"",
    countIndex:10,
    detail:[
      {
        id:7,
        uname:"谢毕红",
        time:"2018-02-29",
        dptname:"罗平县消防大队",
        approve_name:"零星采购审批",
        title:"付广告制作费用",
        total:70964,
        pay:"银行存款支付",
        account:"业务账目",
        CN:"柒万零玖佰陆拾肆元整",
        postCompany:"罗平县公安消防大队",
        postBank:"中国工商银行罗平县观音阁支行",
        postNum:"134024478569",
        getCompany:"罗平县菲凡科技运营部",
        getBank:"中国工商银行罗平县观音阁支行",
        getNum:"2505008709100014078",
        rules: [
          {
            rid: 0,
            rtime: "2018-02-29",
            jobname: "大队出纳",
            jobcode: 7,
            uname: "谢许红",
            approve_status: "comfirm",
            msg: "请领导审批"
          },
          {
            rid: 0,
            rtime: "2018-03-01",
            jobname: "大队领导",
            jobcode: 7,
            uname: "李付雷",
            approve_status: "comfirm",
            msg: "同意上报"
          },
          {
            rid: 0,
            rtime: "2018-03-02",
            jobname: "大队领导",
            jobcode: 7,
            uname: "付正虎",
            approve_status: "comfirm",
            msg: "同意上报"
          },
          {
            rid: 0,
            rtime: "2018-03-02",
            jobname: "外聘会计",
            jobcode: 7,
            uname: "冯旭丽",
            approve_status: "comfirm",
            msg: "审核未发现问题"

          },
          {
            rid: 0,
            rtime: "2018-03-04",
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
            imgs:[
              "https://www.zhurendata.com/wxadmin/res/temp/20180626084829.png",
            ]
          },
          {
            did: 2,
            docname: "发票验证单",
            imgs: [
              "https://www.zhurendata.com/wxadmin/res/temp/1111.jpg",
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
              "https://www.zhurendata.com/wxadmin/res/temp/20180626084858.png",
              "https://www.zhurendata.com/wxadmin/res/temp/20180626084941.png",
              "https://www.zhurendata.com/wxadmin/res/temp/20180626085006.png",
              "https://www.zhurendata.com/wxadmin/res/temp/20180626085033.png",
              "https://www.zhurendata.com/wxadmin/res/temp/20180626085054.png",
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
      {
        id:5,
        uname: "李世杰",
        time: "2018-03-13",
        dptname: "罗平县消防大队",
        approve_name: "零星采购审批",
        title: "付柴油购买费用",
        total: 70964,
        pay: "银行存款支付",
        account: "业务账目",
        CN: "捌仟伍佰壹拾元陆角陆分",
        postCompany: "罗平县公安消防大队",
        postBank: "中国工商银行罗平县观音阁支行",
        postNum: "134024478569",
        getCompany: "中国石化销售有限公司云南曲靖石油分公司",
        getBank: "中国农业银行曲靖市麟城支行",
        getNum: "24041401040004807",
        rules: [
          {
            rid: 0,
            rtime: "2018-03-13",
            jobname: "一般人员",
            jobcode: 7,
            uname: "李世杰",
            approve_status: "comfirm",
            msg: "请领导审批"
          },
          {
            rid: 0,
            rtime: "2018-03-15",
            jobname: "大队出纳",
            jobcode: 7,
            uname: "谢许红",
            approve_status: "comfirm",
            msg: "审核通过，请领导审核"
          },
          {
            rid: 0,
            rtime: "2018-03-15",
            jobname: "大队领导",
            jobcode: 7,
            uname: "李付雷",
            approve_status: "comfirm",
            msg: "同意上报"
          },
          {
            rid: 0,
            rtime: "2018-03-15",
            jobname: "大队领导",
            jobcode: 7,
            uname: "付正虎",
            approve_status: "comfirm",
            msg: "同意上报"
          },
          {
            rid: 0,
            rtime: "2018-03-16",
            jobname: "外聘会计",
            jobcode: 7,
            uname: "黄丹",
            approve_status: "comfirm",
            msg: "审核未发现问题"

          },
          {
            rid: 0,
            rtime: "2018-03-16",
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
              "https://www.zhurendata.com/wxadmin/res/temp/20180626085443.png",
            ]
          },
          {
            did: 2,
            docname: "验证单",
            imgs: [
              "https://www.zhurendata.com/wxadmin/res/temp/1111.jpg",
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
      {
        id: 6,
        uname: "鲁秋月",
        time: "2018-01-12",
        dptname: "麒麟区消防大队",
        approve_name: "零星采购审批",
        title: "复印机购置费",
        total: 32205.00,
        pay: "银行存款支付",
        account: "业务账目",
        CN: "叁万贰仟贰佰零伍元整",
        postCompany: "麒麟区公安消防大队",
        postBank: "中国工商银行麒麟支行",
        postNum: "2505026509026406928",
        getCompany: "曲靖市麒麟区瑞祥电脑",
        getBank: "招商银行曲靖分行营业部",
        getNum: "874900014210606",
        rules: [
          {
            rid: 0,
            rtime: "2018-01-12",
            jobname: "一般人员",
            jobcode: 7,
            uname: "鲁秋月",
            approve_status: "comfirm",
            msg: "请领导审批"
          },
          {
            rid: 0,
            rtime: "2018-01-13",
            jobname: "大队出纳",
            jobcode: 7,
            uname: "林瑾",
            approve_status: "comfirm",
            msg: "审核通过，请领导审核"
          },
          {
            rid: 0,
            rtime: "2018-01-15",
            jobname: "大队领导",
            jobcode: 7,
            uname: "吴松",
            approve_status: "comfirm",
            msg: "同意上报"
          },
          {
            rid: 0,
            rtime: "2018-01-15",
            jobname: "大队领导",
            jobcode: 7,
            uname: "赵琨",
            approve_status: "comfirm",
            msg: "同意上报"
          },
          {
            rid: 0,
            rtime: "2018-01-16",
            jobname: "外聘会计",
            jobcode: 7,
            uname: "徐浩玲",
            approve_status: "comfirm",
            msg: "审核未发现问题"

          },
          {
            rid: 0,
            rtime: "2018-01-16",
            jobname: "集中会计",
            jobcode: 7,
            jobcode: 7,
            uname: "潘柔",
            approve_status: "comfirm",
            msg: "请副支队长审批"
          },
          {
            rid: 0,
            rtime: "2018-01-17",
            jobname: "支队副职领导",
            jobcode: 7,
            jobcode: 7,
            uname: "兰鹏",
            approve_status: "comfirm",
            msg: "同意"
          }
        ],
        docs: [
          {
            did: 1,
            docname: "发票",
            imgs: [
              "https://www.zhurendata.com/wxadmin/res/temp/DOC031312-03132012075411_00.png",
            ]
          },
          {
            did: 2,
            docname: "验证单",
            imgs: [
              "https://www.zhurendata.com/wxadmin/res/temp/20180626085425.png",
              "https://www.zhurendata.com/wxadmin/res/temp/1111.jpg",
            ]
          },
          {
            did: 3,
            docname: "党委会议纪要",
            imgs: [
              "https://www.zhurendata.com/wxadmin/res/temp/20180626084715.png",
            ]
          },
          {
            did: 4,
            docname: "重大经费开支审批表",
            imgs: [
              "https://www.zhurendata.com/wxadmin/res/temp/20180626084800.png",
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
              "https://www.zhurendata.com/wxadmin/res/temp/2222.jpg",
            ]
          },

        ],
      }, 
      {
        id: 8,
        uname: "鲁秋月",
        time: "2018-01-12",
        dptname: "麒麟区消防大队",
        approve_name: "零星采购审批",
        title: "办公设备费",
        total: 22752.50,
        pay: "银行存款支付",
        account: "业务账目",
        CN: "贰万贰仟柒佰伍拾贰元伍角",
        postCompany: "麒麟区公安消防大队",
        postBank: "中国工商银行麒麟支行",
        postNum: "2505026509026406928",
        getCompany: "曲靖市麒麟区瑞丰科技经营部",
        getBank: "交通银行曲靖官坡寺支行",
        getNum: "533601080018010017954",
        rules: [
          {
            rid: 0,
            rtime: "2018-01-12",
            jobname: "一般人员",
            jobcode: 7,
            uname: "鲁秋月",
            approve_status: "comfirm",
            msg: "请领导审批"
          },
          {
            rid: 0,
            rtime: "2018-01-13",
            jobname: "大队出纳",
            jobcode: 7,
            uname: "林瑾",
            approve_status: "comfirm",
            msg: "审核通过，请领导审核"
          },
          {
            rid: 0,
            rtime: "2018-01-15",
            jobname: "大队领导",
            jobcode: 7,
            uname: "吴松",
            approve_status: "comfirm",
            msg: "同意上报"
          },
          {
            rid: 0,
            rtime: "2018-01-15",
            jobname: "大队领导",
            jobcode: 7,
            uname: "赵琨",
            approve_status: "comfirm",
            msg: "同意上报"
          },
          {
            rid: 0,
            rtime: "2018-01-16",
            jobname: "外聘会计",
            jobcode: 7,
            uname: "徐浩玲",
            approve_status: "comfirm",
            msg: "审核未发现问题"

          },
          {
            rid: 0,
            rtime: "2018-01-16",
            jobname: "集中会计",
            jobcode: 7,
            jobcode: 7,
            uname: "潘柔",
            approve_status: "comfirm",
            msg: "请副支队长审批"
          },
          {
            rid: 0,
            rtime: "2018-01-17",
            jobname: "支队副职领导",
            jobcode: 7,
            jobcode: 7,
            uname: "代红波",
            approve_status: "comfirm",
            msg: "同意"
          }
      
        ],
        docs: [
          {
            did: 1,
            docname: "发票",
            imgs: [
              "https://www.zhurendata.com/wxadmin/res/temp/1111.jpg",
            ]
          },
          {
            did: 2,
            docname: "验证单",
            imgs: [
              "https://www.zhurendata.com/wxadmin/res/temp/1111.jpg",
            ]
          },
          {
            did: 3,
            docname: "党委会议纪要",
            imgs: [
              "https://www.zhurendata.com/wxadmin/res/temp/20180626084715.png",
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
      {
        id: 1,
        uname: "木金明",
        time: "2018-06-22",
        dptname: "马龙区消防大队",
        approve_name: "车辆维修审批",
        title: "发动机故障",
        total: 1982.30,
        pay: "银行存款支付",
        account: "业务账目",
        CN: "壹仟玖佰捌拾贰元叁角",
        postCompany: "马龙区公安消防大队",
        postBank: "中国工商银行麒麟支行",
        postNum: "2505026509026406928",
        getCompany: "马林区长丰修理厂",
        getBank: "交通银行曲靖官坡寺支行",
        getNum: "533601080018010017954",
        rules: [
          {
            rid: 0,
            rtime: "2018-06-22",
            jobname: "一般人员",
            jobcode: 7,
            uname: "木金明",
            approve_status: "comfirm",
            msg: "请领导审批"
          },
          {
            rid: 0,
            rtime: "2018-06-23",
            jobname: "大队出纳",
            jobcode: 7,
            uname: "王飞",
            approve_status: "comfirm",
            msg: "审核通过，请领导审核"
          },
          {
            rid: 0,
            rtime: "2018-06-24",
            jobname: "大队领导",
            jobcode: 7,
            uname: "李发国",
            approve_status: "comfirm",
            msg: "同意上报"
          },
          {
            rid: 0,
            rtime: "2018-01-15",
            jobname: "大队领导",
            jobcode: 7,
            uname: "李剑锋",
            approve_status: "comfirm",
            msg: "同意上报"
          },
          {
            rid: 0,
            rtime: "2018-01-16",
            jobname: "外聘会计",
            jobcode: 7,
            uname: "徐浩玲",
            approve_status: "comfirm",
            msg: "审核未发现问题"

          },
          {
            rid: 0,
            rtime: "",
            jobname: "集中会计",
            jobcode: 7,
            jobcode: 7,
            uname: "",
            approve_status: "",
            msg: ""
          }

        ],
        docs: [
          {
            did: 1,
            docname: "发票",
            imgs: [
              "https://www.zhurendata.com/wxadmin/res/temp/1462387261.jpg",
            ]
          },
          {
            did: 2,
            docname: "验证单",
            imgs: [
              "https://www.zhurendata.com/wxadmin/res/temp/1352733162.jpg",
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
              "https://www.zhurendata.com/wxadmin/res/temp/1163905688.jpg",
            ]
          },

        ],
      },
      {
        id: 3,
        uname: "赵梓栋",
        time: "2017-11-30",
        dptname: "曲靖市消防支队机关",
        approve_name: "公务接待",
        title: "曲靖市财政局公务接待",
        total: 590.00,
        pay: "个人公务卡支付",
        account: "业务账目",
        CN: "伍佰玖拾整",
        postCompany: "曲靖市公安消防支队",
        postBank: "中国工商银行麒麟支行",
        postNum: "2505026509026406928",
        getCompany: "赵梓栋",
        getBank: "中国工商银行曲靖麒麟支行",
        getNum: "4270300061381215",
        rules: [
          {
            rid: 0,
            rtime: "2017-11-30",
            jobname: "一般人员",
            jobcode: 7,
            uname: "赵梓栋",
            approve_status: "comfirm",
            msg: "请领导审批"
          },
          {
            rid: 0,
            rtime: "2017-11-30",
            jobname: "支队会计",
            jobcode: 7,
            uname: "潘柔",
            approve_status: "comfirm",
            msg: "审核通过，请领导审核"
          },
          {
            rid: 0,
            rtime: "2017-11-30",
            jobname: "部门领导",
            jobcode: 7,
            uname: "余文渊",
            approve_status: "comfirm",
            msg: "同意上报"
          },
          {
            rid: 0,
            rtime: "2017-11-30",
            jobname: "外聘会计",
            jobcode: 7,
            uname: "徐浩玲",
            approve_status: "comfirm",
            msg: "审核未发现问题"

          },
          {
            rid: 0,
            rtime: "2017-11-30",
            jobname: "支队副职领导",
            jobcode: 7,
            jobcode: 7,
            uname: "蓝鹏",
            approve_status: "comfirm",
            msg: "同意"
          }

        ],
        docs: [
          {
            did: 1,
            docname: "发票",
            imgs: [
              "https://www.zhurendata.com/wxadmin/res/temp/webwxgetmsgimg(2).jpg",
              "https://www.zhurendata.com/wxadmin/res/temp/webwxgetmsgimg(3).jpg",
            ]
          },
          {
            did: 2,
            docname: "验证单",
            imgs: [
              "https://www.zhurendata.com/wxadmin/res/temp/webwxgetmsgimg.jpg",
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
              "https://www.zhurendata.com/wxadmin/res/temp/webwxgetmsgimg(1).jpg",
            ]
          },

        ],
      },
      {
        id: 4,
        uname: "赵梓栋",
        time: "2017-11-30",
        dptname: "曲靖市消防支队机关",
        approve_name: "疾病医疗",
        title: "因肝部受损和肠胃炎症到门诊就医",
        total: 1554.00,
        pay: "个人公务卡支付",
        account: "业务账目",
        CN: "壹仟伍佰伍拾肆元整",
        postCompany: "曲靖市公安消防支队",
        postBank: "中国工商银行麒麟支行",
        postNum: "2505026509026406928",
        getCompany: "赵梓栋",
        getBank: "中国工商银行曲靖麒麟支行",
        getNum: "4270300061381215",
        rules: [
          {
            rid: 0,
            rtime: "2017-11-30",
            jobname: "一般人员",
            jobcode: 7,
            uname: "赵梓栋",
            approve_status: "comfirm",
            msg: "请领导审批"
          },
          {
            rid: 0,
            rtime: "2017-11-30",
            jobname: "支队会计",
            jobcode: 7,
            uname: "潘柔",
            approve_status: "comfirm",
            msg: "审核通过，请领导审核"
          },
          {
            rid: 0,
            rtime: "2017-11-30",
            jobname: "部门领导",
            jobcode: 7,
            uname: "余文渊",
            approve_status: "comfirm",
            msg: "同意上报"
          },
          {
            rid: 0,
            rtime: "2017-11-30",
            jobname: "外聘会计",
            jobcode: 7,
            uname: "徐浩玲",
            approve_status: "comfirm",
            msg: "审核未发现问题"

          },
          {
            rid: 0,
            rtime: "2017-11-30",
            jobname: "支队副职领导",
            jobcode: 7,
            jobcode: 7,
            uname: "蓝鹏",
            approve_status: "comfirm",
            msg: "同意"
          }

        ],
        docs: [
          {
            did: 1,
            docname: "发票",
            imgs: [
              "https://www.zhurendata.com/wxadmin/res/temp/webwxgetmsgimg(2).jpg",
              "https://www.zhurendata.com/wxadmin/res/temp/webwxgetmsgimg(3).jpg",
            ]
          },
          {
            did: 2,
            docname: "验证单",
            imgs: [
              "https://www.zhurendata.com/wxadmin/res/temp/webwxgetmsgimg.jpg",
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
              "https://www.zhurendata.com/wxadmin/res/temp/webwxgetmsgimg(1).jpg",
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
    var that=this;
    var id = options.id;
    var detail=that.data.detail;
    for(var bt in detail){
      if (detail[bt].id == id){
        that.setData({
          target:detail[bt]
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
    var that=this;
    var did = event.currentTarget.dataset.did;
    var target=that.data.target;
    var docs = target.docs;
    console.log(did);
    this.setData({
      imgItem: did
    });
    for(var bt in docs){
      if(docs[bt].did==did){
        that.setData({
          imgs:docs[bt].imgs
        })
      }
    }
    //读取相关函数
  },
  defaultSelect: function () {
    var that = this;
    var did =1;
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