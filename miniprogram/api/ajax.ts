// const base = 'http://admin.tianyue0571.cn/';
// export const base = 'http://47.97.251.196';
export const base = 'https://hupanxueyuan.tianyue0571.cn';

let ajax: (url: string, data?: object, method?: ("POST" | "GET"), showToast?: boolean) => Promise<any>;

ajax = (url: string, data: object = {}, method: 'POST' | 'GET' = 'POST', showToast = true) => {
	// @ts-ignore
	return new Promise((resolve: any, reject: any): any => {
		wx.showLoading({
			title: 'loading',
			mask: true
		});
		wx.request({
			method,
			url: base + url,
			data,
			success(res) {
				wx.hideLoading();
				// @ts-ignore
				if (res.data.code === 0) {
					if (!showToast) {
						return
					}
					wx.showToast({
						// @ts-ignore
						// title: res.data.message,
						title: '',
						icon: 'none',
						duration: 2000,
						mask: true
					})
				}


				// @ts-ignore
				if (res.data.code === 2) {
					wx.showToast({
						// @ts-ignore
						title: res.data.message,
						icon: 'none',
						duration: 2000,
						mask: true,

					});
				}
				resolve(res.data)
			},
			fail(err) {
				wx.hideLoading();
				reject(err)
			}
		})
	})
};

export {ajax};

