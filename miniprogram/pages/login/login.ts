import {reqCheckUser, reqLogin} from "../../api/index";

Page({
	data: {
		openid: '',
		exist: 0
	},

	onLoad() {
		const _this = this;
		wx.getStorage({
			key: 'openid',
			success(res) {
				_this.setData!({
					openid: res.data
				}, () => _this.doCheck());
			}
		})
	},

	doCheck() {
		const {openid} = this.data;
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
		const {exist} = this.data;
		if (exist === 0){
			wx.navigateTo({
				url:'/complete/complete'
			});
			return
		}


		reqLogin({type: 1, openid: this.data.openid}).then(
			res => {
				console.log('token',res);
				if (res.code === 1) {
					wx.setStorageSync(
						'token',
						 res.data
					)
				}
			}
		);

	},

});
