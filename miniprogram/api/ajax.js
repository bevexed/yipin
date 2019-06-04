"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.base = 'https://hupanxueyuan.tianyue0571.cn';
var ajax;
exports.ajax = ajax;
exports.ajax = ajax = function (url, data, method, showToast) {
    if (data === void 0) { data = {}; }
    if (method === void 0) { method = 'POST'; }
    if (showToast === void 0) { showToast = true; }
    return new Promise(function (resolve, reject) {
        wx.showLoading({
            title: 'loading',
            mask: true
        });
        wx.request({
            method: method,
            url: exports.base + url,
            data: data,
            success: function (res) {
                wx.hideLoading();
                if (res.data.code === 0) {
                    if (!showToast) {
                        return;
                    }
                    wx.showToast({
                        title: '',
                        icon: 'none',
                        duration: 2000,
                        mask: true
                    });
                }
                if (res.data.code === 2) {
                    wx.showToast({
                        title: res.data.message,
                        icon: 'none',
                        duration: 2000,
                        mask: true,
                    });
                }
                resolve(res.data);
            },
            fail: function (err) {
                wx.hideLoading();
                reject(err);
            }
        });
    });
};
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiYWpheC5qcyIsInNvdXJjZVJvb3QiOiIiLCJzb3VyY2VzIjpbImFqYXgudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7QUFFYSxRQUFBLElBQUksR0FBRyxxQ0FBcUMsQ0FBQztBQUUxRCxJQUFJLElBQWtHLENBQUM7QUFvRC9GLG9CQUFJO0FBbERaLGVBQUEsSUFBSSxHQUFHLFVBQUMsR0FBVyxFQUFFLElBQWlCLEVBQUUsTUFBK0IsRUFBRSxTQUFnQjtJQUFwRSxxQkFBQSxFQUFBLFNBQWlCO0lBQUUsdUJBQUEsRUFBQSxlQUErQjtJQUFFLDBCQUFBLEVBQUEsZ0JBQWdCO0lBRXhGLE9BQU8sSUFBSSxPQUFPLENBQUMsVUFBQyxPQUFZLEVBQUUsTUFBVztRQUM1QyxFQUFFLENBQUMsV0FBVyxDQUFDO1lBQ2QsS0FBSyxFQUFFLFNBQVM7WUFDaEIsSUFBSSxFQUFFLElBQUk7U0FDVixDQUFDLENBQUM7UUFDSCxFQUFFLENBQUMsT0FBTyxDQUFDO1lBQ1YsTUFBTSxRQUFBO1lBQ04sR0FBRyxFQUFFLFlBQUksR0FBRyxHQUFHO1lBQ2YsSUFBSSxNQUFBO1lBQ0osT0FBTyxZQUFDLEdBQUc7Z0JBQ1YsRUFBRSxDQUFDLFdBQVcsRUFBRSxDQUFDO2dCQUVqQixJQUFJLEdBQUcsQ0FBQyxJQUFJLENBQUMsSUFBSSxLQUFLLENBQUMsRUFBRTtvQkFDeEIsSUFBSSxDQUFDLFNBQVMsRUFBRTt3QkFDZixPQUFNO3FCQUNOO29CQUNELEVBQUUsQ0FBQyxTQUFTLENBQUM7d0JBR1osS0FBSyxFQUFFLEVBQUU7d0JBQ1QsSUFBSSxFQUFFLE1BQU07d0JBQ1osUUFBUSxFQUFFLElBQUk7d0JBQ2QsSUFBSSxFQUFFLElBQUk7cUJBQ1YsQ0FBQyxDQUFBO2lCQUNGO2dCQUlELElBQUksR0FBRyxDQUFDLElBQUksQ0FBQyxJQUFJLEtBQUssQ0FBQyxFQUFFO29CQUN4QixFQUFFLENBQUMsU0FBUyxDQUFDO3dCQUVaLEtBQUssRUFBRSxHQUFHLENBQUMsSUFBSSxDQUFDLE9BQU87d0JBQ3ZCLElBQUksRUFBRSxNQUFNO3dCQUNaLFFBQVEsRUFBRSxJQUFJO3dCQUNkLElBQUksRUFBRSxJQUFJO3FCQUVWLENBQUMsQ0FBQztpQkFDSDtnQkFDRCxPQUFPLENBQUMsR0FBRyxDQUFDLElBQUksQ0FBQyxDQUFBO1lBQ2xCLENBQUM7WUFDRCxJQUFJLFlBQUMsR0FBRztnQkFDUCxFQUFFLENBQUMsV0FBVyxFQUFFLENBQUM7Z0JBQ2pCLE1BQU0sQ0FBQyxHQUFHLENBQUMsQ0FBQTtZQUNaLENBQUM7U0FDRCxDQUFDLENBQUE7SUFDSCxDQUFDLENBQUMsQ0FBQTtBQUNILENBQUMsQ0FBQyIsInNvdXJjZXNDb250ZW50IjpbIi8vIGNvbnN0IGJhc2UgPSAnaHR0cDovL2FkbWluLnRpYW55dWUwNTcxLmNuLyc7XG4vLyBleHBvcnQgY29uc3QgYmFzZSA9ICdodHRwOi8vNDcuOTcuMjUxLjE5Nic7XG5leHBvcnQgY29uc3QgYmFzZSA9ICdodHRwczovL2h1cGFueHVleXVhbi50aWFueXVlMDU3MS5jbic7XG5cbmxldCBhamF4OiAodXJsOiBzdHJpbmcsIGRhdGE/OiBvYmplY3QsIG1ldGhvZD86IChcIlBPU1RcIiB8IFwiR0VUXCIpLCBzaG93VG9hc3Q/OiBib29sZWFuKSA9PiBQcm9taXNlPGFueT47XG5cbmFqYXggPSAodXJsOiBzdHJpbmcsIGRhdGE6IG9iamVjdCA9IHt9LCBtZXRob2Q6ICdQT1NUJyB8ICdHRVQnID0gJ1BPU1QnLCBzaG93VG9hc3QgPSB0cnVlKSA9PiB7XG5cdC8vIEB0cy1pZ25vcmVcblx0cmV0dXJuIG5ldyBQcm9taXNlKChyZXNvbHZlOiBhbnksIHJlamVjdDogYW55KTogYW55ID0+IHtcblx0XHR3eC5zaG93TG9hZGluZyh7XG5cdFx0XHR0aXRsZTogJ2xvYWRpbmcnLFxuXHRcdFx0bWFzazogdHJ1ZVxuXHRcdH0pO1xuXHRcdHd4LnJlcXVlc3Qoe1xuXHRcdFx0bWV0aG9kLFxuXHRcdFx0dXJsOiBiYXNlICsgdXJsLFxuXHRcdFx0ZGF0YSxcblx0XHRcdHN1Y2Nlc3MocmVzKSB7XG5cdFx0XHRcdHd4LmhpZGVMb2FkaW5nKCk7XG5cdFx0XHRcdC8vIEB0cy1pZ25vcmVcblx0XHRcdFx0aWYgKHJlcy5kYXRhLmNvZGUgPT09IDApIHtcblx0XHRcdFx0XHRpZiAoIXNob3dUb2FzdCkge1xuXHRcdFx0XHRcdFx0cmV0dXJuXG5cdFx0XHRcdFx0fVxuXHRcdFx0XHRcdHd4LnNob3dUb2FzdCh7XG5cdFx0XHRcdFx0XHQvLyBAdHMtaWdub3JlXG5cdFx0XHRcdFx0XHQvLyB0aXRsZTogcmVzLmRhdGEubWVzc2FnZSxcblx0XHRcdFx0XHRcdHRpdGxlOiAnJyxcblx0XHRcdFx0XHRcdGljb246ICdub25lJyxcblx0XHRcdFx0XHRcdGR1cmF0aW9uOiAyMDAwLFxuXHRcdFx0XHRcdFx0bWFzazogdHJ1ZVxuXHRcdFx0XHRcdH0pXG5cdFx0XHRcdH1cblxuXG5cdFx0XHRcdC8vIEB0cy1pZ25vcmVcblx0XHRcdFx0aWYgKHJlcy5kYXRhLmNvZGUgPT09IDIpIHtcblx0XHRcdFx0XHR3eC5zaG93VG9hc3Qoe1xuXHRcdFx0XHRcdFx0Ly8gQHRzLWlnbm9yZVxuXHRcdFx0XHRcdFx0dGl0bGU6IHJlcy5kYXRhLm1lc3NhZ2UsXG5cdFx0XHRcdFx0XHRpY29uOiAnbm9uZScsXG5cdFx0XHRcdFx0XHRkdXJhdGlvbjogMjAwMCxcblx0XHRcdFx0XHRcdG1hc2s6IHRydWUsXG5cblx0XHRcdFx0XHR9KTtcblx0XHRcdFx0fVxuXHRcdFx0XHRyZXNvbHZlKHJlcy5kYXRhKVxuXHRcdFx0fSxcblx0XHRcdGZhaWwoZXJyKSB7XG5cdFx0XHRcdHd4LmhpZGVMb2FkaW5nKCk7XG5cdFx0XHRcdHJlamVjdChlcnIpXG5cdFx0XHR9XG5cdFx0fSlcblx0fSlcbn07XG5cbmV4cG9ydCB7YWpheH07XG5cbiJdfQ==