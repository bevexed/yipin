// const base = 'http://admin.tianyue0571.cn/';
const base = 'http://47.97.251.196/';

let ajax: (url: string, data?: object, method?: ("POST" | "GET")) => Promise<any>;

ajax = (url: string, data: object = {}, method: 'POST' | 'GET' = 'POST') => {
	// @ts-ignore
	return new Promise((resolve: any, reject: any): any => {
		wx.request({
			method,
			url: base + url,
			data,
			success(res) {
				// @ts-ignore
				if (res.data.code === 0) {
					wx.showToast({
						// @ts-ignore
						title: res.data.message,
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
						mask: true
					});
				}
				resolve(res.data)
			},
			fail(err) {
				reject(err)
			}
		})
	})
};

export {ajax};

