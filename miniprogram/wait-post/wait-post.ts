//index.js
//获取应用实例
import {confirmOrder, orderDetail} from '../api/order'

Page({
	data: {
		motto: '点击 “编译” 以构建',
		userInfo: {},
		hasUserInfo: false,
		canIUse: wx.canIUse('button.open-type.getUserInfo'),
		info: {},
		pics: [],
		status: '',
		id: '',
		token: ''
	},
	onLoad(options: any) {
		const that = this;
		wx.getStorage({
			key: 'token',
			success(res) {
				that.setData!({
					token: res.data
				}, () => {
					that.getDetail(that.data.token, options.id);
				})
			}
		});
		this.setData!({
			status: options.status,
			id: options.id
		})
	},
	getDetail(token: any, id: string) {
		orderDetail(token, id).then(
			res => {
				this.setData!({
					info: res.data,
					pics: res.data.picture
				})
			}
		)
	},
	// 发货
	faHuo() {
		wx.navigateTo({
			url: '../post/post?id=' + this.data.id
		})
	},
	// 子订单
	goChild(e: any) {
		wx.navigateTo({
			url: '../childOrder/childOrder?title=' + e.currentTarget.dataset.title + '&note=' + e.currentTarget.dataset.note + '&imei=' + e.currentTarget.dataset.imei + '&level=' + e.currentTarget.dataset.level + '&code=' + e.currentTarget.dataset.code + '&price=' + e.currentTarget.dataset.price
		})
	},
	// 接受报价
	jieshou(e: any) {
		let that = this;
		confirmOrder(this.data.token, e.currentTarget.dataset.id, '1').then(res => {
			if (res.code == 1) {
				wx.showToast({
					title: res.message,
					mask: true,
					duration: 3000,
					success() {
						that.getDetail(that.data.token, that.data.id);
						// setTimeout(() => {
						// 	wx.navigateBack({
						// 		delta: 1
						// 	})
						// }, 3000)
					}
				})
			} else {
				wx.showToast({
					title: '操作失败'
				})
			}
		})
	},
	fouren(e: any) {
		confirmOrder(this.data.token, e.currentTarget.dataset.id, '2').then(res => {
			if (res.code == 1) {
				wx.navigateBack({
					delta: 1
				})
			}
		})
	}
})
