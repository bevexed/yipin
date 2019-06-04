import {reqCheckUser, reqLogin} from "../../api/index";

Page({
	data: {
		openid: '',
		exist: 0,

		dian: false
	},

	onLoad() {
		this.setData!({
			dian: false
		})
		// const _this = this;
		// wx.getStorage({
		// 	key: 'openid',
		// 	success(res) {
		// 		_this.setData!({
		// 			openid: res.data
		// 		}, () => _this.doCheck());
		// 	}
		// })
	},

	doCheck() {
		const {openid} = this.data;
		console.log(openid);
		wx.showLoading({
			title: '',
			mask: true
		});
		reqCheckUser(openid).then(
			(res: any) => {
				// wx.hideLoading();
				this.setData!({
					exist: res
				}, () => this.check())
			}
		)
	},

	getUserInfo(e: any) {
		if (e.detail.errMsg.includes('ok')) {
			this.login();
		} else {

		}
	},
	login() {
		if (this.data.dian) {
			return
		}
		this.setData!({
			dian: true
		})
		wx.showLoading({
			title: 'loading',
			mask: true,
		});
		const _this = this;

		wx.getStorage({
			key: 'openid',
			success(res) {
				_this.setData!({
					openid: res.data
				}, () => _this.doCheck());
			}
		});
		// const openid = wx.getStorage('openid');
		//   this.setData!({
		//     openid: openid
		//   })


	},

	check() {
		let that = this;
		console.log(this.data.openid)
		if (!this.data.openid) {
			return
		}

		const {exist} = this.data;
		wx.showToast({
			title: '',
			icon: "none",
			mask: true,
			success() {
				if (exist === 0) {
					wx.navigateTo({
						url: '/complete/complete',
						success() {
							setTimeout(() =>
									that.setData!({
										dian: false
									})
								, 1000)
						}
					});
					return;
				} else {
					wx.switchTab({
						url: '/pages/index/index',
						success() {
							setTimeout(() =>
									that.setData!({
										dian: false
									})
								, 1000)
						}
					})
				}
			}
		})


		reqLogin({type: 1, openid: this.data.openid}).then(
			res => {
				console.log('token', res);
				if (res.code === 1) {
					wx.setStorage({
						key: 'token',
						data: res.data,
						success() {
							if (exist === 0) {
								wx.showLoading({
									title: 'loading',
									mask: true,
								})
								wx.navigateTo({
									url: '/complete/complete'
								});
							} else {
								wx.switchTab({
									url: '/pages/index/index'
								})
							}
						}
					})
				}
			}
		);
	}

});
