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
                        title: res.message,
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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiYWpheC5qcyIsInNvdXJjZVJvb3QiOiIiLCJzb3VyY2VzIjpbImFqYXgudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7QUFFYSxRQUFBLElBQUksR0FBRyxxQ0FBcUMsQ0FBQztBQUUxRCxJQUFJLElBQWtHLENBQUM7QUFvRC9GLG9CQUFJO0FBbERaLGVBQUEsSUFBSSxHQUFHLFVBQUMsR0FBVyxFQUFFLElBQWlCLEVBQUUsTUFBK0IsRUFBRSxTQUFnQjtJQUFwRSxxQkFBQSxFQUFBLFNBQWlCO0lBQUUsdUJBQUEsRUFBQSxlQUErQjtJQUFFLDBCQUFBLEVBQUEsZ0JBQWdCO0lBRXhGLE9BQU8sSUFBSSxPQUFPLENBQUMsVUFBQyxPQUFZLEVBQUUsTUFBVztRQUM1QyxFQUFFLENBQUMsV0FBVyxDQUFDO1lBQ2QsS0FBSyxFQUFFLFNBQVM7WUFDaEIsSUFBSSxFQUFFLElBQUk7U0FDVixDQUFDLENBQUM7UUFDSCxFQUFFLENBQUMsT0FBTyxDQUFDO1lBQ1YsTUFBTSxRQUFBO1lBQ04sR0FBRyxFQUFFLFlBQUksR0FBRyxHQUFHO1lBQ2YsSUFBSSxNQUFBO1lBQ0osT0FBTyxZQUFDLEdBQUc7Z0JBQ1YsRUFBRSxDQUFDLFdBQVcsRUFBRSxDQUFDO2dCQUVqQixJQUFJLEdBQUcsQ0FBQyxJQUFJLENBQUMsSUFBSSxLQUFLLENBQUMsRUFBRTtvQkFDeEIsSUFBSSxDQUFDLFNBQVMsRUFBRTt3QkFDZixPQUFNO3FCQUNOO29CQUNELEVBQUUsQ0FBQyxTQUFTLENBQUM7d0JBR1osS0FBSyxFQUFFLEdBQUcsQ0FBQyxPQUFPO3dCQUNsQixJQUFJLEVBQUUsTUFBTTt3QkFDWixRQUFRLEVBQUUsSUFBSTt3QkFDZCxJQUFJLEVBQUUsSUFBSTtxQkFDVixDQUFDLENBQUE7aUJBQ0Y7Z0JBSUQsSUFBSSxHQUFHLENBQUMsSUFBSSxDQUFDLElBQUksS0FBSyxDQUFDLEVBQUU7b0JBQ3hCLEVBQUUsQ0FBQyxTQUFTLENBQUM7d0JBRVosS0FBSyxFQUFFLEdBQUcsQ0FBQyxJQUFJLENBQUMsT0FBTzt3QkFDdkIsSUFBSSxFQUFFLE1BQU07d0JBQ1osUUFBUSxFQUFFLElBQUk7d0JBQ2QsSUFBSSxFQUFFLElBQUk7cUJBRVYsQ0FBQyxDQUFDO2lCQUNIO2dCQUNELE9BQU8sQ0FBQyxHQUFHLENBQUMsSUFBSSxDQUFDLENBQUE7WUFDbEIsQ0FBQztZQUNELElBQUksWUFBQyxHQUFHO2dCQUNQLEVBQUUsQ0FBQyxXQUFXLEVBQUUsQ0FBQztnQkFDakIsTUFBTSxDQUFDLEdBQUcsQ0FBQyxDQUFBO1lBQ1osQ0FBQztTQUNELENBQUMsQ0FBQTtJQUNILENBQUMsQ0FBQyxDQUFBO0FBQ0gsQ0FBQyxDQUFDIiwic291cmNlc0NvbnRlbnQiOlsiLy8gY29uc3QgYmFzZSA9ICdodHRwOi8vYWRtaW4udGlhbnl1ZTA1NzEuY24vJztcbi8vIGV4cG9ydCBjb25zdCBiYXNlID0gJ2h0dHA6Ly80Ny45Ny4yNTEuMTk2JztcbmV4cG9ydCBjb25zdCBiYXNlID0gJ2h0dHBzOi8vaHVwYW54dWV5dWFuLnRpYW55dWUwNTcxLmNuJztcblxubGV0IGFqYXg6ICh1cmw6IHN0cmluZywgZGF0YT86IG9iamVjdCwgbWV0aG9kPzogKFwiUE9TVFwiIHwgXCJHRVRcIiksIHNob3dUb2FzdD86IGJvb2xlYW4pID0+IFByb21pc2U8YW55PjtcblxuYWpheCA9ICh1cmw6IHN0cmluZywgZGF0YTogb2JqZWN0ID0ge30sIG1ldGhvZDogJ1BPU1QnIHwgJ0dFVCcgPSAnUE9TVCcsIHNob3dUb2FzdCA9IHRydWUpID0+IHtcblx0Ly8gQHRzLWlnbm9yZVxuXHRyZXR1cm4gbmV3IFByb21pc2UoKHJlc29sdmU6IGFueSwgcmVqZWN0OiBhbnkpOiBhbnkgPT4ge1xuXHRcdHd4LnNob3dMb2FkaW5nKHtcblx0XHRcdHRpdGxlOiAnbG9hZGluZycsXG5cdFx0XHRtYXNrOiB0cnVlXG5cdFx0fSk7XG5cdFx0d3gucmVxdWVzdCh7XG5cdFx0XHRtZXRob2QsXG5cdFx0XHR1cmw6IGJhc2UgKyB1cmwsXG5cdFx0XHRkYXRhLFxuXHRcdFx0c3VjY2VzcyhyZXMpIHtcblx0XHRcdFx0d3guaGlkZUxvYWRpbmcoKTtcblx0XHRcdFx0Ly8gQHRzLWlnbm9yZVxuXHRcdFx0XHRpZiAocmVzLmRhdGEuY29kZSA9PT0gMCkge1xuXHRcdFx0XHRcdGlmICghc2hvd1RvYXN0KSB7XG5cdFx0XHRcdFx0XHRyZXR1cm5cblx0XHRcdFx0XHR9XG5cdFx0XHRcdFx0d3guc2hvd1RvYXN0KHtcblx0XHRcdFx0XHRcdC8vIEB0cy1pZ25vcmVcblx0XHRcdFx0XHRcdC8vIHRpdGxlOiByZXMuZGF0YS5tZXNzYWdlLFxuXHRcdFx0XHRcdFx0dGl0bGU6IHJlcy5tZXNzYWdlLFxuXHRcdFx0XHRcdFx0aWNvbjogJ25vbmUnLFxuXHRcdFx0XHRcdFx0ZHVyYXRpb246IDIwMDAsXG5cdFx0XHRcdFx0XHRtYXNrOiB0cnVlXG5cdFx0XHRcdFx0fSlcblx0XHRcdFx0fVxuXG5cblx0XHRcdFx0Ly8gQHRzLWlnbm9yZVxuXHRcdFx0XHRpZiAocmVzLmRhdGEuY29kZSA9PT0gMikge1xuXHRcdFx0XHRcdHd4LnNob3dUb2FzdCh7XG5cdFx0XHRcdFx0XHQvLyBAdHMtaWdub3JlXG5cdFx0XHRcdFx0XHR0aXRsZTogcmVzLmRhdGEubWVzc2FnZSxcblx0XHRcdFx0XHRcdGljb246ICdub25lJyxcblx0XHRcdFx0XHRcdGR1cmF0aW9uOiAyMDAwLFxuXHRcdFx0XHRcdFx0bWFzazogdHJ1ZSxcblxuXHRcdFx0XHRcdH0pO1xuXHRcdFx0XHR9XG5cdFx0XHRcdHJlc29sdmUocmVzLmRhdGEpXG5cdFx0XHR9LFxuXHRcdFx0ZmFpbChlcnIpIHtcblx0XHRcdFx0d3guaGlkZUxvYWRpbmcoKTtcblx0XHRcdFx0cmVqZWN0KGVycilcblx0XHRcdH1cblx0XHR9KVxuXHR9KVxufTtcblxuZXhwb3J0IHthamF4fTtcblxuIl19