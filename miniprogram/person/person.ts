import {reqUpdateBasicInformation, reqUserInformation} from "../api/index";
import {base} from "../api/ajax";

Page({
	data: {
		token: '',
		name: '',
		id_card: '',
		id_card_positive: '',
		id_card_contrary: '',

		identity:'',
		disabled: false,
		state: ['供货商', '加盟店', '区域代理']
		// 1：供货商；2：加盟店；3：区域代理
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
					}, () => _this.getInfor()
				)
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
		if (this.data.disabled) {
			return
		}
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
					url: base + '/api/upload_img', //仅为示例，非真实的接口地址
					filePath: tempFilePaths[0],
					name: 'image',
					// formData: {
					// 	'user': 'test'
					// },
					success (res){
						const data = JSON.parse(res.data);
						console.log(data);
						if (data.code ===1){
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
  yulan(){
    wx.previewImage({
      current: this.data.id_card_positive, // 当前显示图片的http链接
      urls: [this.data.id_card_positive] // 需要预览的图片http链接列表
    })
  },
  yulanF(){
    wx.previewImage({
      current: this.data.id_card_contrary, // 当前显示图片的http链接
      urls: [this.data.id_card_contrary] // 需要预览的图片http链接列表
    })
  },

	chooseBottom() {
		if (this.data.disabled) {
			return
		}
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
					success (res){
						const data = JSON.parse(res.data);
						console.log(data);
						if (data.code ===1){
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
	doUpdateBasicInformation() {
		const {name,token,id_card,id_card_contrary,id_card_positive} = this.data;
		if (!name || !token || !id_card_positive || !id_card_contrary || !id_card) {
			wx.showToast({
				title: '请检查表单填写是否完整',
				mask: true,
				duration: 2000,
				icon: "none"
			});
			return;
		}
		const data = {name,token,id_card,id_card_contrary,id_card_positive};
		reqUpdateBasicInformation(data).then(
			res => {
				console.log(res);
				if (res.code === 1) {
					wx.showToast({
						title: '修改成功',
						mask: true,
						duration: 2000,
						success() {
							wx.navigateBack({
								delta: 1
							})
						}
					})

				}
			}
		)
	},

	getInfor() {
		wx.showLoading({
			title: '',
			mask: true
		})
		const {token,state} = this.data;
		reqUserInformation({token}).then(
			(res: any) => {
				if (res.code === 1) {
					wx.hideLoading();

					const {name, id_card, id_card_contrary, id_card_positive,identity} = res.data;
					console.log(name, id_card, id_card_contrary, id_card_positive);
					if (name || id_card || id_card_contrary || id_card_positive) {
						this.setData!({
							disabled: true,
							name,
							id_card,
							id_card_contrary,
							id_card_positive,
							identity : state[identity]
						})
					}

				}
			}
		)
	}
})
