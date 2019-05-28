import {reqAfterQuery} from "../api/index";

Page({
	data: {
		imei: '',

		iCode: 0,

		code: 0,
	},

	onLoad(): void {
		this.getCode()
	},

	getCode() {
		let code = (Math.random() * 1000000).toString().slice(0, 4);
		console.log(code);
		this.setData!({
			code
		})
	},

	IMEI(e: any) {
		console.log(this.data.imei);
		this.setData!({
			imei: e.detail.value
		})
	},

	icode(e: any) {
		console.log(this.data.imei);
		this.setData!({
			iCode: e.detail.value
		})
	},

	getAfterQuery() {
		const {imei, iCode, code} = this.data;
		if (iCode !== code) {
			wx.showToast({
				mask: true,
				icon: "none",
				title: '验证码错误',
				duration: 2000,
			});
			return
		}
		reqAfterQuery(imei).then(
			res => {
				console.log(res);
			}
		)
	}


});
