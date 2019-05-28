import {reqService} from "../../api/index";

Page({
	data: {
		phone: ''
	},
	onLoad() {
		reqService().then(
			res => {
				console.log(res);
				this.setData!({
					phone: res.data
				})
			}
		)
	},
	showPhone() {
		let _this = this
		wx.showActionSheet({
			itemList: ['拨打客服电话'],
			success(res) {
				console.log(res);
				wx.makePhoneCall({
					phoneNumber: _this.data.phone //仅为示例，并非真实的电话号码
				})
			},
			fail(res) {
				console.log(res.errMsg)
			}
		})
	},
	handleClick() {
		wx.clearStorage(
			{
				success(res) {
					console.log(res);
					wx.showToast({
						title: '退出成功',
						duration: 2000,
						mask: true,
						complete() {
							wx.switchTab({
								url: '/pages/index/index'
							})
						}
					})

				}
			}
		)
	}
})
