//app.js
App({
  globalData: {
    hasLogin: false,
    openid: "test",//登录用户openid
    uname: "赵琨",//用户名称
    udptcode: 10,//所属单位标号
    udptname: "麒麟区消防大队",//所属单位名称
    udptkey: 0,
    tel:"15288653843",
    uimg: "",//用户头像
    job: 7,//用户职务
    jobtitle: "大队领导",
    ustatus: false,//用户审核，默认为0未通过
    lastlogindate: "2000-10-01 09:00:00",//默认用户登录时间，储存在本地的时间
    homedate: "2000-10-01 09:00:00",//首页登录时间
    msg_comfirm: 2,
    msg_refuse: 1,
    msg_waiting: 0, //系统的消息提示
    welcome: false, //显示欢迎页面
    joblist: ['大队领导', '部门领导', '支队副职领导', '支队主官'],
    account: {
      personNum: "622200159963325112",
      personBank: "曲靖市商业银行",
      personName: "李乐军",
      companyNum: "622200159963325112",
      companyBank: "中国工商银行",
      companyName: "马龙区公安消防大队",
    },
    oil:[
      {
        id:1,
        uname:"李乐军",
        openid:"test",
        dptname:"马龙区消防大队",
        card:"0705X",
        ctype:"消防车",
        kilometer:1590.5,
        select:"dy",
        oil:"92号",
        num:180,
        total:7800,
        date:"2018-06-12",
        begin:"2018-06-22",
        end:"2018-06-23",
        place:"云南昆明",
        uoilreason:"",
        ucarusereason:"",
        ucarusefun:"",
        jobtitle:"",
        jobcode:0
      },
    ],
    //申请列表
    apply: [
      {
        aid:1,
        title:"车辆维修申请",
        code:"car",
        time:"2018-06-10 15:50:15",
        status:"comfirm",
        openid:"test",
        job:"大队领导",
        dptcode:10,
        dptname:"马龙区消防大队",
        link:1,
        leader:"李发国",
        answer:"同意",
        atime:"2018-06-12 09:10:11"
      },
      {
        aid: 2,
        title: "零星采购申请",
        code: "daily",
        time: "2018-01-09 09:10:15",
        status: "comfirm",
        openid: "19FED12",
        job: "大队领导",
        dptcode: 10,
        dptname: "麒麟区消防大队",
        link: 1,
        leader: "吴松",
        answer: "同意采购",
        atime: "2017-12-17"
      },
      {
        aid: 3,
        title: "转(诊)院申请",
        code: "medicine",
        time: "2018-06-09 09:10:15",
        status:"waiting",
        openid: "19FED12",
        job: "大队领导",
        dptcode: 10,
        dptname: "马龙区消防大队",
        link: 1,
        leader: "",
        answer: "",
        atime: ""
      },
      {
        aid: 4,
        title: "车辆加油申请",
        code: "oil",
        time: "2018-06-15 09:10:15",
        status: "refuse",
        openid: "test",
        job: "大队领导",
        dptcode: 10,
        dptname: "马龙区消防大队",
        link: 1,
        leader: "李发国",
        answer: "驳回",
        atime: "2018-06-16 09:10:11"
      },
      {
        aid: 5,
        title: "公务出差申请",
        code: "travel",
        time: "2018-03-15 09:10:15",
        status: "comfirm",
        openid: "test",
        job: "大队领导",
        dptcode: 10,
        dptname: "罗平县消防大队",
        link: 1,
        leader: "付正虎",
        answer: "同意申请",
        atime: "2018-03-15 10:10:15"
        
      },
      {
        aid: 6,
        title: "公务接待申请",
        code: "recept",
        time: "2018-06-19 09:10:15",
        status: "waiting",
        openid: "test",
        job: "大队领导",
        dptcode: 10,
        dptname: "马龙区消防大队",
        link: 1,
        leader: "",
        answer: "",
        atime: ""
      },
      {
        aid: 7,
        title: "房屋维修申请",
        code: "house",
        time: "2018-05-19 16:39:15",
        status: "comfirm",
        openid: "test",
        job: "大队领导",
        dptcode: 10,
        dptname: "经开区消防大队",
        link: 1,
        leader: "赵红舟",
        answer: "同意申请",
        atime: "2018-05-22 09:00:32"
      }
    ],
    items: [
      {
        id: 1,
        title: "车辆维修审批",
        code: "car",
        time: "2018-06-22 10:12:32",
        status: "waiting",
        dptname: "马龙区消防大队",
        totals: 1982.30,
        job: 3,
        isnew: true
      },
      {
        id: 8,
        title: "零星物资采购",
        code: "daily",
        time: "2018-01-12 08:45:22",
        status: "comfirm",
        dptname: "麒麟区消防大队",
        totals: 22752.50,
        job: 5,
        isnew: true
      },
      {
        id: 2,
        title: "差旅费审批",
        time: "2018-03-·5 10:12:32",
        status: "comfirm",
        code: "travel",
        dptname: "罗平县消防大队",
        totals: 488,
        job: 17,
        isnew: false
      },
      {
        id: 3,
        title: "公务接待审批",
        code: "recept",
        time: "2017-11-30 11:45:32",
        status: "comfirm",
        dptname: "曲靖市消防支队机关",
        totals: 590.00,
        job: 5,
        isnew: true
      },
      {
        id: 4,
        title: "转(诊)院审批",
        code: "medicine",
        time: "2018-05-03 15:12:00",
        status: "comfirm",
        dptname: "曲靖市消防支队机关",
        totals: 1554.00,
        job: 5,
        isnew: true
      },
      {
        id: 5,
        title: "车辆加油审批",
        code: "oil",
        time: "2018-03-13 10:12:32",
        status: "comfirm",
        dptname: "罗平县消防大队",
        totals: 8520.66,
        job: 5,
        isnew: true
      },
      {
        id: 6,
        title: "零星物资采购",
        code: "daily",
        time: "2018-01-12 17:12:09",
        status: "comfirm",
        dptname: "麒麟区消防大队",
        totals: 32205,
        job: 5,
        isnew: true
      },
      {
        id: 7,
        title: "零星物资采购",
        code: "daily",
        time: "2018-02-09 14:39:33",
        status: "comfirm",
        dptname: "罗平县消防大队",
        totals: 70964.2,
        job: 5,
        isnew: true
      }
    ],
    /**
     * 系统默认参数
     */
    downloadurl: 'http://192.168.3.42:8080/wxadmin/res/',//默认系统下载链接
    host: "http://192.168.3.42:8080/wxadmin/",//默认系统数据访问地址
  },
  onLaunch: function () {//登录时，全局读取用户信息
    var ustatus = wx.getStorageSync("ustatus");
    this.globalData.ustatus = wx.getStorageSync("ustatus");
    if (ustatus == true) {
      this.globalData.uname = wx.getStorageSync("uname");
      this.globalData.uimg = wx.getStorageSync("uimg");
    }
  },
  getTime: function () {
    var t = new Date();
    var hour = t.getHours();
    var min = t.getMinutes();
    return hour + ":" + min;
  },
  getDate: function () {
    var t = new Date();
    var year = t.getFullYear();
    var month = t.getMonth() + 1;
    var day = t.getDate();
    return year + "-" + month + "-" + day;
  },
  changeMoneyToChinese: function (money) {
    var cnNums = new Array("零", "壹", "贰", "叁", "肆", "伍", "陆", "柒", "捌", "玖"); //汉字的数字  
    var cnIntRadice = new Array("", "拾", "佰", "仟"); //基本单位  
    var cnIntUnits = new Array("", "万", "亿", "兆"); //对应整数部分扩展单位  
    var cnDecUnits = new Array("角", "分", "毫", "厘"); //对应小数部分单位  
    var cnInteger = "整"; //整数金额时后面跟的字符  
    var cnIntLast = "元"; //整型完以后的单位  
    var maxNum = 999999999999999.9999; //最大处理的数字  
    var zeroCount = 0;
    var IntLen = "";

    var IntegerNum; //金额整数部分  
    var DecimalNum; //金额小数部分  
    var ChineseStr = ""; //输出的中文金额字符串  
    var parts; //分离金额后用的数组，预定义  
    if (money == "") {
      return "";
    }
    money = parseFloat(money);
    if (money >= maxNum) {
      $.alert('超出最大处理数字');
      return "";
    }
    if (money == 0) {
      ChineseStr = cnNums[0] + cnIntLast + cnInteger;
      //ChineseStr = cnNums[0] + cnIntLast
      //document.getElementById("show").value=ChineseStr;  
      return ChineseStr;
    }
    money = money.toString(); //转换为字符串  
    if (money.indexOf(".") == -1) {
      IntegerNum = money;
      DecimalNum = '';
    } else {
      parts = money.split(".");
      IntegerNum = parts[0];
      DecimalNum = parts[1].substr(0, 4);
    }
    if (parseInt(IntegerNum, 10) > 0) {//获取整型部分转换  
      zeroCount = 0;
      IntLen = IntegerNum.length;
      for (var i = 0; i < IntLen; i++) {
        var n = IntegerNum.substr(i, 1);
        var p = IntLen - i - 1;
        var q = p / 4;
        var m = p % 4;
        if (n == "0") {
          zeroCount++;
        } else {
          if (zeroCount > 0) {
            ChineseStr += cnNums[0];
          }
          zeroCount = 0; //归零  
          ChineseStr += cnNums[parseInt(n)] + cnIntRadice[m];
        }
        if (m == 0 && zeroCount < 4) {
          ChineseStr += cnIntUnits[q];
        }
      }
      ChineseStr += cnIntLast;
      //整型部分处理完毕  
    }
    if (DecimalNum != '') {//小数部分  
      decLen = DecimalNum.length;
      for (i = 0; i < decLen; i++) {
        n = DecimalNum.substr(i, 1);
        if (n != '0') {
          ChineseStr += cnNums[Number(n)] + cnDecUnits[i];
        }
      }
    }
    if (ChineseStr == '') {
      ChineseStr += cnNums[0] + cnIntLast + cnInteger;
      //ChineseStr += cnNums[0] + cnIntLast;
    }/* else if( DecimalNum == '' ){ 
                ChineseStr += cnInteger; 
                ChineseStr += cnInteger; 
            } */
    return ChineseStr;
  }
})