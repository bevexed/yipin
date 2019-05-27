import {reqPhoneModels} from "../api/index";

Page({

	data: {

		token: '',

		array: ['美国', '中国', '巴西', '日本'],

		list:[],

		index: 0,

	},

	onLoad() {
		// 读取token
		let _this = this;
		wx.getStorage({
			key: 'token',
			success(res) {
				console.log(res);
				_this.setData!({
					token: res.data
				})
			}
		});

		this.getPhoneModels();
	},

	bindPickerChange(e: any) {
		console.log('picker发送选择改变，携带值为', e.detail.value);
		this.setData!({
			index: e.detail.value
		})
	},


	input(e: any) {
		console.log(e);
		const label = e.target.dataset.type;
		const value = e.detail.detail.value;
		console.log(value);
		this.setData!({
			[label]: value
		});

		console.log(label, value);
	},


	getPhoneModels() {
		reqPhoneModels().then(
			res => {
				if (res.code === 1) {
					console.log('get-phone-models', res);
					this.setData!({
						list: res.data,
						array: res.data.map((item:any) => item.name)
					})
				}
			}
		)
	}
});
