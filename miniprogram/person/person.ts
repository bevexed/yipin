import {reqUpdateBasicInformation} from "../api/index";

Page({
	data: {
		token: '',
		name: '',
		id_card: '',
		id_card_positive: '',
		id_card_contrary: '',
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
				console.log(tempFilePaths);
			}
		})
	},
	doUpdateBasicInformation() {
		const {name,token,id_card,id_card_contrary,id_card_positive} = this.data;
		const data = {name,token,id_card,id_card_contrary:id_card_contrary[0],id_card_positive:id_card_positive[0]};
		reqUpdateBasicInformation(data).then(
			res => {
				console.log(res);
			}
		)
	}
})
