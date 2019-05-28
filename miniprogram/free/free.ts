import {reqGetFreeFilm, reqPhoneModels} from "../api/index";

Page({

	data: {

		token: '',
		serial_number:'',
		phone:'',
		code:'',

		list:[],
		array: [],
		list2: [],
		array2: [],

		multiArray: [[],[]],
		multiIndex: [0, 0],

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

	bindMultiPickerChange: function (e: any) {
		console.log('picker发送选择改变，携带值为', e.detail.value);
		this.setData!({
			multiIndex: e.detail.value
		})
		console.log(this.data.multiIndex);
	},

	bindMultiPickerColumnChange: function (e: any) {
		console.log('修改的列为', e.detail.column, '，值为', e.detail.value);
		if (e.detail.column === 0) {
			let {list, array} = this.data;
			this.setData!({
				// @ts-ignore
				multiArray: [array, list[e.detail.value]["subclass"].map(item => item.name)]
			})
		}
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
						array: res.data.map((item: any) => item.name),
						list2: res.data[0].subclass,
						array2: res.data[0].subclass.map((item: any) => item.name),
						multiArray: [res.data.map((item: any) => item.name), res.data[0].subclass.map((item: any) => item.name)]
					})
				}
			}
		)
	},

	getFreeFilm() {
		const {token,multiArray,multiIndex,serial_number,phone,code} = this.data;

		let phone_model = multiArray[1][multiIndex[1]];
		console.log(phone_model);
		reqGetFreeFilm({token,phone_model,serial_number,phone,code}).then(
			(res:any) => {
				console.log('freefile', res);
			}
		)
	}

});
