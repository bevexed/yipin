import { sheet } from '../api/index' 
Page({
	data: {},
	onHide(): void {
	},
	to(e:any){
		wx.navigateTo({
      url: '../price-detail/price-detail?id=' + e.currentTarget.dataset.id
    })
	}
});
