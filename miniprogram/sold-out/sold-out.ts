import {orderAll} from '../api/order'
import { IMyApp } from '../app'
import { baseUrl } from '../api/ajax'

const app = getApp<IMyApp>();

Page({
  data: {
    motto: '点击 “编译” 以构建',
    userInfo: {},
    hasUserInfo: false,
    canIUse: wx.canIUse('button.open-type.getUserInfo'),

    bannerList: [],
    consult: '',
    orderList:[],
    current_scroll: 'tab1',
    imageUrl: baseUrl
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
    const token = wx.getStorageSync('token');

// 全部订单
    orderAll(token).then(
      res => {
        console.log(res.data.list);
        this.setData!({
          orderList: res.data.list
        })
      }
    )
  },
  // tab切换
  handleChangeScroll({ detail }) {
    this.setData!({
      current_scroll: detail.key
    });
  },

  getUserInfo(e: any) {
    console.log(e);
    app.globalData.userInfo = e.detail.userInfo
    this.setData!({
      userInfo: e.detail.userInfo,
      hasUserInfo: true
    })
  },
  toWaitPost(e:any){
    wx.navigateTo({
      url:'../wait-post/wait-post?id=' + e.currentTarget.dataset.id
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
