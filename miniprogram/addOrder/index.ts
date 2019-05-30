//index.js
//获取应用实例
import {addOrder, address} from '../api/order'
import {base} from '../api/ajax'

Page({
  data: {
    address:{},
    information:'',
    amount:'',
    note:'',
    pics:[],
    token:'',
    baseUrl:base
  },
  onLoad() {
    this.getAddress();
    const that = this;
    wx.getStorage({
      key: 'token',
      success(res) {
        that.setData!({
          token:res.data
        })
      }
    });
  },
  write(e:any){
   this.setData!({
     information:e.detail.value
   })
  },
  amount(e:any){
    this.setData!({
      amount: e.detail.value
    })
  },
  noteText(e:any){
    this.setData!({
      note: e.detail.value
    })
  },
  // 获取地址
  getAddress(){
    address().then(res => {
      this.setData!({
        address:res.data
      })
    })
  },
  // 上传图片
  uploadImage(){
  	const that = this;
    const pics = this.data.pics;
    wx.chooseImage({
      count: 3 - pics.length,
      sizeType: ['original', 'compressed'],
      sourceType: ['album', 'camera'],
      success(res) {
        // tempFilePath可以作为img标签的src属性显示图片
        const tempFilePaths = res.tempFilePaths
        // @ts-ignore
				const picAll = pics.concat(tempFilePaths);
        that.uploadimg({
            url: that.data.baseUrl + '/api/upload_img',
            path: picAll
        })
      }
    })
  },

	uploadimg(data:any){
		var that=this,
			i=data.i?data.i:0,//当前上传的哪张图片
			success=data.success?data.success:0,//上传成功的个数
			fail=data.fail?data.fail:0;//上传失败的个数
		// @ts-ignore
		wx.uploadFile({
			url: data.url,
			filePath: data.path[i],
			name: 'image',//这里根据自己的实际情况改
			// formData:null,//这里是上传图片时一起上传的数据
			success: (resp) => {
				success++;//图片上传成功，图片上传成功的变量+1
				const conf = JSON.parse(resp.data);
				const arrImage = [];
				arrImage.push(conf.data);
				// @ts-ignore
				const picAlls = that.data.pics.concat(arrImage);
				that.setData!({
					pics:picAlls
				})
				//这里可能有BUG，失败也会执行这里,所以这里应该是后台返回过来的状态码为成功时，这里的success才+1
			},
			fail: () => {
				fail++;//图片上传失败，图片上传失败的变量+1
				console.log('fail:'+i+"fail:"+fail);
			},
			complete: () => {
				console.log(i);
				i++;//这个图片执行完上传后，开始上传下一张
				if(i==data.path.length){   //当图片传完时，停止调用
					console.log('执行完毕');
					console.log('成功：'+success+" 失败："+fail);
				}else{//若图片还没有传完，则继续调用函数
					console.log(i);
					data.i=i;
					data.success=success;
					data.fail=fail;
					that.uploadimg(data);
				}

			}
		});
	},
  // 预览图片
  yulan(){
    wx.previewImage({
			//@ts-ignore
      current: this.data.pics, // 当前显示图片的http链接
      urls: this.data.pics // 需要预览的图片http链接列表
    })
  },

  // 提交订单
  tijiao(){
    let picture = '';
    this.data.pics.map((res) =>{
      picture += res + ',';
    });
		picture = picture.substring(0,picture.length - 1);
		if (this.data.information == '' || this.data.amount == '') {
      wx.showToast({
        title: '请输入必填信息',
        icon: 'none',
        duration: 2000
      })
      return;
    }

    var reg = /^[1-9]\d*$/;
    if (!reg.test(this.data.amount)){
      wx.showToast({
        title:'请输入正确的下单数量',
        icon:'none',
        duration:2000
      })
      return;
    }
    addOrder(this.data.token, this.data.information, this.data.amount, this.data.note, picture).then(res => {
      if(res.code == 1){

				console.log(res);
				console.log(res.data);

				wx.navigateTo({
					url: '../post/post?id=' + res.data
				})

        // wx.showModal({
        //   title:res.message,
				// 	content:'',
        //   showCancel:false,
        //   success(){
				//
        //   }
        // })
      }
    })
  }
})
