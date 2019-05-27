import {reqLogin, reqRegister} from "../../api/index";

Page({
	data: {},

	login() {
		let data = {
			openid: 1123123122, phone: 123123123123, password: 123123123, code: 123213123
		};

		wx.setStorage({
			key: 'token',
			data: 'eyJpdiI6IlwvQUJrbWtaa2RQNklhdmJldHIrQ2V3PT0iLCJ2YWx1ZSI6IkVBNGdQT3NFNllFMm9zWEZLcVwvOUlRPT0iLCJtYWMiOiI3ODA1MjVkMzUzM2Y3ZTVlZTA1ZGY3MzQ0Y2IzMTkwMzQxZTc4MDA4ZTJkN2NiNGNlNWE3MTI0ZGViMWNhOTM0In0'
		})

		reqRegister(data).then(
			res => {
				console.log(res);
				wx.switchTab({
					url: '/pages/index/index'
				})
			}
		);

		reqLogin({type: 1, openid: '123'}).then(
			res => {
				console.log(res);
			}
		);

	},

	onLoad() {

	}
});
