import { orderAll, confirmOrder} from '../api/order'
import { IMyApp } from '../app'

const app = getApp<IMyApp>();
let token;
try {
  token = wx.getStorageSync('token');
  if (token) {
    // Do something with return value
  }
} catch (e) {
  // Do something when catch error
  wx.getStorage({
    key: 'token', success(res) {
      token = res.data
    }
  });
}
Page({
  data: {
    motto: '点击 “编译” 以构建',
    userInfo: {},
    hasUserInfo: false,
    canIUse: wx.canIUse('button.open-type.getUserInfo'),

    bannerList: [],
    consult: '',
    orderList:[],
    current_scroll: 7,
    type:7,
    page:1,
    token:''
  },
  //事件处理函数
  bindViewTap() {
    wx.navigateTo({
      url: 'logs/logs'
    })
  },
  onLoad() {
    if (app.globalData.userInfo) {
      this.setData!({
        userInfo: app.globalData.userInfo,
        hasUserInfo: true,
      })
    } else if (this.data.canIUse) {
      // 由于 getUserInfo 是网络请求，可能会在 Page.onLoad 之后才返回
      // 所以此处加入 callback 以防止这种情况
      app.userInfoReadyCallback = (res) => {
        this.setData!({
          userInfo: res,
          hasUserInfo: true
        })
      }
    } else {
      // 在没有 open-type=getUserInfo 版本的兼容处理
      wx.getUserInfo({
        success: res => {
          app.globalData.userInfo = res.userInfo
          this.setData!({
            userInfo: res.userInfo,
            hasUserInfo: true
          })
        }
      })
    }
    const that = this;
    wx.getStorage({
      key: 'token',
      success(res){
        that.setData!({
          token:res.data
        },() => {
          that.getOrderList(that.data.token, that.data.type, that.data.page);
        })
      }
    });
    

  },
  getOrderList(token:any, type:any, page:any){
    // 全部订单
    orderAll(token, type, page).then(
      res => {
        console.log(res.data.list);
        this.setData!({
          orderList: res.data.list
        })
      }
    )
  },
  // tab切换
  handleChangeScroll({detail}:any) {
    const key = detail.key;
    this.setData!({
      current_scroll: key,
      type:key
    });
    this.data.orderList = [];
    this.getOrderList(this.data.token,key,this.data.page)
  },
  // 上拉加载更多
  onReachBottom: function () {
    wx.showLoading({
      title: '玩命加载中',
    })
    // 页数+1
    this.data.page = this.data.page + 1;
    this.getOrderList(this.data.token, this.data.type, this.data.page);
    wx.hideLoading();
  },
  getUserInfo(e: any) {
    console.log(e);
    app.globalData.userInfo = e.detail.userInfo
    this.setData!({
      userInfo: e.detail.userInfo,
      hasUserInfo: true
    })
  },
  // 订单详情
  toWaitPost(e:any){
    wx.navigateTo({
      url: '../wait-post/wait-post?id=' + e.currentTarget.dataset.id + '&status=' + e.currentTarget.dataset.status
    })
  },
  // 发货
  toFahuo(e:any){
    wx.navigateTo({
      url: '../post/post?id=' + e.currentTarget.dataset.id
    })
  },
  // 去确认
  toFirstTrial(e:any){
    confirmOrder(this.data.token, e.currentTarget.dataset.id,'2').then(res => {
      if(res.code == 1){
        wx.showToast({
          title:res.message
        })
      }
    })
  },
  toToday() {
    wx.navigateTo({
      url: '../../today/today'
    })
  },

  toFriend() {
    wx.navigateTo({
      url: '../../friend/friend'
    })
  },

  toSaleAfter() {
    wx.navigateTo({
      url: '../../sale-after/sale-after'
    })
  },


})
