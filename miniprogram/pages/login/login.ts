import {reqCheckUser, reqLogin} from "../../api/index";

Page({
	data: {
		openid: '',
		exist: 0
	},

	onLoad() {
		// const _this = this;
		// wx.getStorage({
		// 	key: 'openid',
		// 	success(res) {
		// 		_this.setData!({
		// 			openid: res.data
		// 		}, () => _this.doCheck());
		// 	}
		// })

		this.login();
		this.login();

	},

	doCheck() {
		const {openid} = this.data;
		console.log(openid);
		wx.showLoading({
			title:''
		});
		reqCheckUser(openid).then(
			(res: any) => {
				wx.hideLoading();
				this.setData!({
					exist: res
				})
			}
		)
	},

	login() {

		const _this = this;

		wx.getStorage({
			key: 'openid',
			success(res) {
				_this.setData!({
					openid: res.data
				}, () => _this.doCheck());
			}
		});

		if (!this.data.openid){
			return
		}

		const {exist} = this.data;
		reqLogin({type: 1, openid: this.data.openid}).then(
			res => {
				console.log('token',res);
				if (res.code === 1) {
					wx.setStorage({
						key: 'token',
						data: res.data,
						success() {
							if (exist === 0) {
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

	},

});
