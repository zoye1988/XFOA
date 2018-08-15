// pages/register/index.js
var app = getApp();
Page({

  /**
   * 页面的初始数据
   */
  data: {
    uname: "",
    openid: "",
    udptname: app.globalData.udptname,
    udptcode: app.globalData.udptcode,
    phone: "",
    dcode: 0,
    jcode: 0,
    qr: "",
    dpt: [],
    dptcode:[],
    did:[],
    job: [],
    jobcode:[],
    limit: 0,
    uimg: ""
  },

  getDpt: function (host){
    var that=this;
    var dpt=[];
    var dptcode=[];
    var did=[];
    wx.request({
      url: host + "user.do",
      method: "post",
      data: {
        method: "dptList"
      },
      header: {
        'content-type': 'application/x-www-form-urlencoded'
      },
      success: function (res) {
        var temp = res.data;
        for (var bt in temp) {
          dpt.push(temp[bt].dname);
          dptcode.push(temp[bt].dcode);
          did.push(temp[bt].did);
        }
        that.setData({
          dpt:dpt,
          dptcode:dptcode,
          did:did
        })
      },
      fail: function (res) {
        wx.showModal({
          title: "操作异常",
          content: "请检查网络或重启程序",
          showCancel: false,
          confirmText: "确定"
        })
      }
    })
  },
  getJob: function (host) {
    var that = this;
    var job = [];
    var jobcode = [];
    wx.request({
      url: host + "user.do",
      method: "post",
      data: {
        method: "jobList"
      },
      header: {
        'content-type': 'application/x-www-form-urlencoded'
      },
      success: function (res) {
        var temp = res.data;
        for (var bt in temp) {
          job.push(temp[bt].dname);
          jobcode.push(temp[bt].dcode);
        }
        that.setData({
          job: job,
          jobcode: jobcode
        })
      },
      fail: function (res) {
        wx.showModal({
          title: "操作异常",
          content: "请检查网络或重启程序",
          showCancel: false,
          confirmText: "确定"
        })
      }
    })
  },

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {
    var that = this;//test
    var host = app.globalData.host;//默认系统地址
    this.getDpt(host);
    this.getJob(host);
    //获取用户信息和openid
    wx.getUserInfo({
      success: function (res) {
        var userInfo = res.userInfo;
        that.setData({
          uname: userInfo.nickName,
          uimg: userInfo.avatarUrl
        });
      }
    });
    wx.login({
      success: function (res) {
        console.log(res.code);
        if (res.code) {
          //发起网络请求
          wx.request({
            url: host + "user.do",
            method: "post",
            data: {
              method: "getOpenid",
              code: res.code
            },
            header: {
              'content-type': 'application/x-www-form-urlencoded'
            },
            success: function (res) {
              var openid = res.data.openid;
              if (openid == "" || openid == null || openid == "null") {
                wx.showModal({
                  title: "系统提示",
                  content: "读取用户信息失败，请重启程序",
                  showCancel: false,
                  confirmText: "确定"
                })
              } else {
                that.setData({
                  openid: openid
                })
              }
            },
            fail: function (res) {
              wx.showModal({
                title: "操作异常",
                content: "请检查网络或重启程序,",
                showCancel: false,
                confirmText: "确定"
              })
            }
          })
        } else {
          console.log('获取用户登录态失败！' + res.errMsg)
        }
      }
    });
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
  dptChange: function (e) {
    var that = this;
    this.setData({
      dcode: e.detail.value,
    })
  },
  jobChange: function (e) {
    var that = this;
    this.setData({
      jcode: e.detail.value,
    })
  },
  unameChange: function (e) {
    var _title = e.detail.value;
    //通过正则表达式，仅能输入数字、英文、中文。
    _title = _title.replace(/[^\a-\z\A-\Z0-9\u4E00-\u9FA5]/g, '');
    this.setData({
      uname: _title
    });
  },
  phoneChange: function (e) {
    var _title = e.detail.value;
    //通过正则表达式，仅能输入数字、英文、中文。
    _title = _title.replace(/[^\Z0-9]/g, '');
    this.setData({
      phone: _title
    });
  },
  qrChange: function (e) {
    var _title = e.detail.value;
    //通过正则表达式，仅能输入数字、英文、中文。
    _title = _title.replace(/[^\Z0-9]/g, '');
    this.setData({
      qr: _title
    });
  },
  getQR: function () {
    var that = this;
    var limit = this.data.limit;
    if (that.data.phone == "" || that.data.phone.length < 11) {
      wx.showModal({
        title: "操作提示",
        content: "手机号码不能为空",
        showCancel: false,
        confirmText: "确定"
      })
      return;
    }
    if (limit == 0) {
      that.setData({
        limit: 60
      });
      limit = 60;

      var host = app.globalData.host;//默认系统地址
      wx.request({
        url: host + "user.do",
        method: "post",
        data: {
          method: "getSms",
          phone: that.data.phone
        },
        header: {
          'content-type': 'application/x-www-form-urlencoded'
        },
        success: function (res) {
          var result = res.data.result;
          if(result==1){
            wx.showToast({
              title: "短信发送成功",
              duration: 2000
            })
          }else{
            wx.showToast({
              title: "短信发送失败",
              duration: 2000
            })
          }
        },
        fail: function (res) {
          wx.showModal({
            title: "操作异常",
            content: "请检查网络或重启程序,",
            showCancel: false,
            confirmText: "确定"
          })
        }
      })
    } else {
      return;
    }
    var t = setInterval(function () {
      console.log(limit--);
      that.setData({
        limit: limit
      });
      if (limit == 0) {
        clearInterval(t);
        that.setData({
          limit: 0
        });
      }
    }, 1000);
  },
  register:function(){
    var that=this;
    var openid=that.data.openid;
    var uname=that.data.uname;
    var jobtitle=that.data.job[that.data.jcode];
    var jobcode = that.data.jobcode[that.data.jcode];
    var dpttitle = that.data.dpt[that.data.dcode];

    var dptcode = that.data.dptcode[that.data.dcode];
    var phone=that.data.phone;
    var qr=that.data.qr;
    var dptkey = that.data.did[that.data.dcode];
    if(qr=="" || qr==null){
      wx.showToast({
        title: "验证码错误",
        duration: 2000,
        image: '../img/refuse.png',  //自定义图标的本地路径，image 的优先级高于 icon  
        icon: 'loading',  //图标，支持"success"、"loading"  
      })
      return;
    }
    if (phone == "" || phone == null) {
      wx.showToast({
        title: "电话号码错误",
        icon: 'loading',  //图标，支持"success"、"loading"  
        image: '../img/refuse.png',  //自定义图标的本地路径，image 的优先级高于 icon  
        duration: 2000
      })
      return;
    }
    if (uname == "" || uname == null) {
      wx.showToast({
        title: "用户姓名错误",
        icon: 'loading',  //图标，支持"success"、"loading" 
        image: '../img/refuse.png',  //自定义图标的本地路径，image 的优先级高于 icon   
        duration: 2000
      })
      return;
    }
    var host = app.globalData.host;//默认系统地址
    wx.request({
      url: host + "user.do",
      method: "post",
      data: {
        method: "register",
        openid:openid,
        uname:uname,
        jobtitle:jobtitle,
        jobcode:jobcode,
        dpttitle:dpttitle,
        dptcode:dptcode,
        phone:phone,
        qr:qr,
        dptkey:dptkey
      },
      header: {
        'content-type': 'application/x-www-form-urlencoded'
      },
      success: function (res) {
        var result = res.data.result;
        if(result==1){
          wx.setStorageSync("openid", openid);
          wx.setStorageSync("uname", uname);
          wx.setStorageSync("uimg", that.data.uimg);
          wx.setStorageSync("udptcode", dptcode);
          wx.setStorageSync("udptname", dpttitle);
          wx.setStorageSync("job", jobcode);
          wx.setStorageSync("jobtitle", jobtitle);
          wx.setStorageSync("udptkey", dptkey);
          wx.setStorageSync("welcome", false);
          wx.setStorageSync("ustatus", 1);
          wx.setStorageSync("homedate", '2000-10-01 09:00:00');
          app.globalData.welcome=false;
          wx.showModal({
            title: "操作提示",
            content: "注册成功",
            showCancel: false,
            confirmText: "确定",
            success(res){
              if (res.confirm) {
                wx.reLaunch({
                  url: '/page/index/index',
                })
              }
            }
          });
        }else{
          wx.showModal({
            title: "操作提示",
            content: "注册失败",
            showCancel: false,
            confirmText: "确定"
          });
        }
        
      },
      fail: function (res) {
        wx.showModal({
          title: "操作异常",
          content: "请检查网络或重启程序",
          showCancel: false,
          confirmText: "确定"
        })
      }
    })
  }
})