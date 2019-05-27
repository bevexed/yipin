import {reqAddressList, reqPartner} from "../api/index";

Page({

	data: {
		current: '1',
		current_scroll: '1',

		token: '',

		addressList:[],

		region: ['广东省', '广州市', '海珠区'],

		name: '',
		phone: '',
		address: '',
		identity: '',
		id_card: '',
		value4: '输入框已禁用',
		value5: '',
		value6: '',
		value7: ''
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
		})

		//
		this.getAddress()
	},

	bindRegionChange(e:any) {
		console.log('picker发送选择改变，携带值为', e.detail.value)
		this.setData!({
			region: e.detail.value
		})
	},

	getAddress() {
		reqAddressList().then(
			res => {
				if (res.code === 1) {
					console.log('地址',res);
					this.setData!({
						addressList: res.data
					})
				}
			}
		)
	},


	handleChange({detail}: any) {
		this.setData!({
			current: detail.key
		});
	},

	handleChangeScroll({detail}: any) {
		this.setData!({
			current_scroll: detail.key

		});
	},

	getPartner() {

		reqPartner({}).then(
			(res: any) => {
				console.log(res);
			}
		)
	}
})
