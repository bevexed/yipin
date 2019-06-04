"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.base = 'https://hupanxueyuan.tianyue0571.cn';
var ajax;
exports.ajax = ajax;
exports.ajax = ajax = function (url, data, method, showToast) {
    if (data === void 0) { data = {}; }
    if (method === void 0) { method = 'POST'; }
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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiYWpheC5qcyIsInNvdXJjZVJvb3QiOiIiLCJzb3VyY2VzIjpbImFqYXgudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7QUFFYSxRQUFBLElBQUksR0FBRyxxQ0FBcUMsQ0FBQztBQUUxRCxJQUFJLElBQWtHLENBQUM7QUFvRC9GLG9CQUFJO0FBbERaLGVBQUEsSUFBSSxHQUFHLFVBQUMsR0FBVyxFQUFFLElBQWlCLEVBQUUsTUFBK0IsRUFBRSxTQUFTO0lBQTdELHFCQUFBLEVBQUEsU0FBaUI7SUFBRSx1QkFBQSxFQUFBLGVBQStCO0lBRXRFLE9BQU8sSUFBSSxPQUFPLENBQUMsVUFBQyxPQUFZLEVBQUUsTUFBVztRQUM1QyxFQUFFLENBQUMsV0FBVyxDQUFDO1lBQ2QsS0FBSyxFQUFFLFNBQVM7WUFDaEIsSUFBSSxFQUFFLElBQUk7U0FDVixDQUFDLENBQUM7UUFDSCxFQUFFLENBQUMsT0FBTyxDQUFDO1lBQ1YsTUFBTSxRQUFBO1lBQ04sR0FBRyxFQUFFLFlBQUksR0FBRyxHQUFHO1lBQ2YsSUFBSSxNQUFBO1lBQ0osT0FBTyxZQUFDLEdBQUc7Z0JBQ1YsRUFBRSxDQUFDLFdBQVcsRUFBRSxDQUFDO2dCQUVqQixJQUFJLEdBQUcsQ0FBQyxJQUFJLENBQUMsSUFBSSxLQUFLLENBQUMsRUFBRTtvQkFDeEIsSUFBSSxDQUFDLFNBQVMsRUFBRTt3QkFDZixPQUFNO3FCQUNOO29CQUNELEVBQUUsQ0FBQyxTQUFTLENBQUM7d0JBR1osS0FBSyxFQUFFLEVBQUU7d0JBQ1QsSUFBSSxFQUFFLE1BQU07d0JBQ1osUUFBUSxFQUFFLElBQUk7d0JBQ2QsSUFBSSxFQUFFLElBQUk7cUJBQ1YsQ0FBQyxDQUFBO2lCQUNGO2dCQUlELElBQUksR0FBRyxDQUFDLElBQUksQ0FBQyxJQUFJLEtBQUssQ0FBQyxFQUFFO29CQUN4QixFQUFFLENBQUMsU0FBUyxDQUFDO3dCQUVaLEtBQUssRUFBRSxHQUFHLENBQUMsSUFBSSxDQUFDLE9BQU87d0JBQ3ZCLElBQUksRUFBRSxNQUFNO3dCQUNaLFFBQVEsRUFBRSxJQUFJO3dCQUNkLElBQUksRUFBRSxJQUFJO3FCQUVWLENBQUMsQ0FBQztpQkFDSDtnQkFDRCxPQUFPLENBQUMsR0FBRyxDQUFDLElBQUksQ0FBQyxDQUFBO1lBQ2xCLENBQUM7WUFDRCxJQUFJLFlBQUMsR0FBRztnQkFDUCxFQUFFLENBQUMsV0FBVyxFQUFFLENBQUM7Z0JBQ2pCLE1BQU0sQ0FBQyxHQUFHLENBQUMsQ0FBQTtZQUNaLENBQUM7U0FDRCxDQUFDLENBQUE7SUFDSCxDQUFDLENBQUMsQ0FBQTtBQUNILENBQUMsQ0FBQyIsInNvdXJjZXNDb250ZW50IjpbIi8vIGNvbnN0IGJhc2UgPSAnaHR0cDovL2FkbWluLnRpYW55dWUwNTcxLmNuLyc7XG4vLyBleHBvcnQgY29uc3QgYmFzZSA9ICdodHRwOi8vNDcuOTcuMjUxLjE5Nic7XG5leHBvcnQgY29uc3QgYmFzZSA9ICdodHRwczovL2h1cGFueHVleXVhbi50aWFueXVlMDU3MS5jbic7XG5cbmxldCBhamF4OiAodXJsOiBzdHJpbmcsIGRhdGE/OiBvYmplY3QsIG1ldGhvZD86IChcIlBPU1RcIiB8IFwiR0VUXCIpLCBzaG93VG9hc3Q/OiBib29sZWFuKSA9PiBQcm9taXNlPGFueT47XG5cbmFqYXggPSAodXJsOiBzdHJpbmcsIGRhdGE6IG9iamVjdCA9IHt9LCBtZXRob2Q6ICdQT1NUJyB8ICdHRVQnID0gJ1BPU1QnLCBzaG93VG9hc3QpID0+IHtcblx0Ly8gQHRzLWlnbm9yZVxuXHRyZXR1cm4gbmV3IFByb21pc2UoKHJlc29sdmU6IGFueSwgcmVqZWN0OiBhbnkpOiBhbnkgPT4ge1xuXHRcdHd4LnNob3dMb2FkaW5nKHtcblx0XHRcdHRpdGxlOiAnbG9hZGluZycsXG5cdFx0XHRtYXNrOiB0cnVlXG5cdFx0fSk7XG5cdFx0d3gucmVxdWVzdCh7XG5cdFx0XHRtZXRob2QsXG5cdFx0XHR1cmw6IGJhc2UgKyB1cmwsXG5cdFx0XHRkYXRhLFxuXHRcdFx0c3VjY2VzcyhyZXMpIHtcblx0XHRcdFx0d3guaGlkZUxvYWRpbmcoKTtcblx0XHRcdFx0Ly8gQHRzLWlnbm9yZVxuXHRcdFx0XHRpZiAocmVzLmRhdGEuY29kZSA9PT0gMCkge1xuXHRcdFx0XHRcdGlmICghc2hvd1RvYXN0KSB7XG5cdFx0XHRcdFx0XHRyZXR1cm5cblx0XHRcdFx0XHR9XG5cdFx0XHRcdFx0d3guc2hvd1RvYXN0KHtcblx0XHRcdFx0XHRcdC8vIEB0cy1pZ25vcmVcblx0XHRcdFx0XHRcdC8vIHRpdGxlOiByZXMuZGF0YS5tZXNzYWdlLFxuXHRcdFx0XHRcdFx0dGl0bGU6ICcnLFxuXHRcdFx0XHRcdFx0aWNvbjogJ25vbmUnLFxuXHRcdFx0XHRcdFx0ZHVyYXRpb246IDIwMDAsXG5cdFx0XHRcdFx0XHRtYXNrOiB0cnVlXG5cdFx0XHRcdFx0fSlcblx0XHRcdFx0fVxuXG5cblx0XHRcdFx0Ly8gQHRzLWlnbm9yZVxuXHRcdFx0XHRpZiAocmVzLmRhdGEuY29kZSA9PT0gMikge1xuXHRcdFx0XHRcdHd4LnNob3dUb2FzdCh7XG5cdFx0XHRcdFx0XHQvLyBAdHMtaWdub3JlXG5cdFx0XHRcdFx0XHR0aXRsZTogcmVzLmRhdGEubWVzc2FnZSxcblx0XHRcdFx0XHRcdGljb246ICdub25lJyxcblx0XHRcdFx0XHRcdGR1cmF0aW9uOiAyMDAwLFxuXHRcdFx0XHRcdFx0bWFzazogdHJ1ZSxcblxuXHRcdFx0XHRcdH0pO1xuXHRcdFx0XHR9XG5cdFx0XHRcdHJlc29sdmUocmVzLmRhdGEpXG5cdFx0XHR9LFxuXHRcdFx0ZmFpbChlcnIpIHtcblx0XHRcdFx0d3guaGlkZUxvYWRpbmcoKTtcblx0XHRcdFx0cmVqZWN0KGVycilcblx0XHRcdH1cblx0XHR9KVxuXHR9KVxufTtcblxuZXhwb3J0IHthamF4fTtcblxuIl19