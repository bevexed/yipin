//index.js
//获取应用实例
import {IMyApp} from '../../app'
import {reqBanner} from '../../api/index'

const app = getApp<IMyApp>()

Page({
	data: {
		motto: '点击 “编译” 以构建',
		userInfo: {},
		hasUserInfo: false,
		canIUse: wx.canIUse('button.open-type.getUserInfo'),

		bannerList: [],
		consult: ''

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

		reqBanner().then(
			res => {
				console.log('banner', res);
				if (res.code === 1) {
					this.setData!({
						bannerList: res.data.banner,
						consult: res.data.consult[0]
					})
				}
			}
		)
	},
  // 添加订单
  goAdd(){
    wx.navigateTo({
      url:'../../addOrder/index'
    })
  },

	getUserInfo(e: any) {
		console.log(e);
		app.globalData.userInfo = e.detail.userInfo
		this.setData!({
			userInfo: e.detail.userInfo,
			hasUserInfo: true
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

	toFree() {
		wx.navigateTo({
			url: '../../free/free'
		})
	}


})
