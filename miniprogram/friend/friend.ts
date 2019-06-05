import {Partnet, reqActivityShow, reqAddressList, reqPartner} from "../api/index";
import {base} from "../api/ajax";

Page({

	data: {
		current: '1',

		token: '',

		addressList:[],

		region: ['广东省', '广州市', '海珠区'],

		name: '',
		phone: '',
		address: '',
		identity: '',
		id_card: '',
		id_card_positive: '',
		id_card_contrary: '',

		img:''
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

		//
		this.getAddress()
		this.getImg()
	},

	getImg() {
		reqActivityShow(2).then(
			(res: any) => {
				if (res.code === 1) {
					this.setData!({
						img: res.data
					})
				}
			}
		)
	},

	bindRegionChange(e:any) {
		console.log('picker发送选择改变，携带值为', e.detail.value);
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

	chooseTop() {
		let _this = this;
		wx.chooseImage({
			count: 1,
			sizeType: ['original', 'compressed'],
			sourceType: ['album', 'camera'],
			success(res) {
				// tempFilePath可以作为img标签的src属性显示图片
				console.log(res);
				const tempFilePaths = res.tempFilePaths;
				_this.setData!({
					id_card_positive: tempFilePaths
				});

				wx.uploadFile({
					url: base+ '/api/upload_img', //仅为示例，非真实的接口地址
					filePath: tempFilePaths[0],
					name: 'image',
					// formData: {
					// 	'user': 'test'
					// },
					success(res) {
						const data = JSON.parse(res.data);
						console.log(data);
						if (data.code === 1) {
							_this.setData!({
								id_card_positive: data.data
							});
						}
					}
				})
				console.log(tempFilePaths);
			}
		})
	},


	chooseBottom() {
		let _this = this;
		wx.chooseImage({
			count: 1,
			sizeType: ['original', 'compressed'],
			sourceType: ['album', 'camera'],
			success(res) {
				// tempFilePath可以作为img标签的src属性显示图片
				const tempFilePaths = res.tempFilePaths;
				_this.setData!({
					id_card_contrary: tempFilePaths
				});

				wx.uploadFile({
					url: base+ '/api/upload_img', //仅为示例，非真实的接口地址
					filePath: tempFilePaths[0],
					name: 'image',
					// formData: {
					// 	'user': 'test'
					// },
					success(res) {
						const data = JSON.parse(res.data);
						console.log(data);
						if (data.code === 1) {
							_this.setData!({
								id_card_contrary: data.data
							});
						}
					}
				});
				console.log(tempFilePaths);
			}
		})
	},

	getPartner() {

		let {token, phone, name, address, region, identity, id_card, id_card_positive, id_card_contrary, current} = this.data;

		identity = current;
		address = region.join('');

		let data: Partnet;
		if (identity === '1') {
			data = {
				token, phone, name, address, id_card, identity, id_card_positive, id_card_contrary
			};
			if (!name || !token || !id_card_positive || !id_card_contrary || !id_card || !phone || !address || !identity) {
				wx.showToast({
					title: '请检查表单填写是否完整',
					mask: true,
					duration: 2000,
					icon: "none"
				});
				return;
			}
		} else {
			data = {
				token, phone, name, address,identity
			};
			if (!name || !token || !phone || !address || !identity) {
				wx.showToast({
					title: '请检查表单填写是否完整',
					mask: true,
					duration: 2000,
					icon: "none"
				});
				return;
			}
		}

		reqPartner(data).then(
			(res: any) => {
				console.log(res);
				if (res.code === 1) {
					wx.showToast({
						title: '提交完成',
						mask: true,
						duration: 3000,
						success() {
							setTimeout(() => {
								wx.navigateTo({
									url:'../collect/collect'
								})
							}, 3000)
						}
					})
				} else {
					wx.showToast({
						icon:'none',
						mask: true,
						duration: 3000,
						title: res.message
					})
				}
			}
		)
	}
});
