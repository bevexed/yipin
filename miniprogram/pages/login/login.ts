import {reqLogin, reqRegister} from "../../api/index";

Page({
	data: {},

	login() {
		let data = {
			openid: 123456789, phone: 123123123123, password: 123123123, code: 123213123
		};


		reqRegister(data).then(
			res => {
				console.log(res);
				wx.switchTab({
					url: '/pages/index/index'
				})
			}
		);

		reqLogin({type: 1, openid: '123456789'}).then(
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

	onLoad() {

	}
});
