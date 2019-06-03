"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.base = 'https://hupanxueyuan.tianyue0571.cn';
var ajax;
exports.ajax = ajax;
exports.ajax = ajax = function (url, data, method) {
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
                    wx.showToast({
                        title: res.data.message,
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
                        mask: true
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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiYWpheC5qcyIsInNvdXJjZVJvb3QiOiIiLCJzb3VyY2VzIjpbImFqYXgudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7QUFFYSxRQUFBLElBQUksR0FBRyxxQ0FBcUMsQ0FBQztBQUUxRCxJQUFJLElBQTZFLENBQUM7QUErQzFFLG9CQUFJO0FBN0NaLGVBQUEsSUFBSSxHQUFHLFVBQUMsR0FBVyxFQUFFLElBQWlCLEVBQUUsTUFBK0I7SUFBbEQscUJBQUEsRUFBQSxTQUFpQjtJQUFFLHVCQUFBLEVBQUEsZUFBK0I7SUFFdEUsT0FBTyxJQUFJLE9BQU8sQ0FBQyxVQUFDLE9BQVksRUFBRSxNQUFXO1FBQzVDLEVBQUUsQ0FBQyxXQUFXLENBQUM7WUFDZCxLQUFLLEVBQUMsU0FBUztZQUNmLElBQUksRUFBQyxJQUFJO1NBQ1QsQ0FBQyxDQUFDO1FBQ0gsRUFBRSxDQUFDLE9BQU8sQ0FBQztZQUNWLE1BQU0sUUFBQTtZQUNOLEdBQUcsRUFBRSxZQUFJLEdBQUcsR0FBRztZQUNmLElBQUksTUFBQTtZQUNKLE9BQU8sWUFBQyxHQUFHO2dCQUNWLEVBQUUsQ0FBQyxXQUFXLEVBQUUsQ0FBQztnQkFFakIsSUFBSSxHQUFHLENBQUMsSUFBSSxDQUFDLElBQUksS0FBSyxDQUFDLEVBQUU7b0JBQ3hCLEVBQUUsQ0FBQyxTQUFTLENBQUM7d0JBRVosS0FBSyxFQUFFLEdBQUcsQ0FBQyxJQUFJLENBQUMsT0FBTzt3QkFDdkIsSUFBSSxFQUFFLE1BQU07d0JBQ1osUUFBUSxFQUFFLElBQUk7d0JBQ2QsSUFBSSxFQUFFLElBQUk7cUJBQ1YsQ0FBQyxDQUFBO2lCQUNGO2dCQUlELElBQUksR0FBRyxDQUFDLElBQUksQ0FBQyxJQUFJLEtBQUssQ0FBQyxFQUFFO29CQUN4QixFQUFFLENBQUMsU0FBUyxDQUFDO3dCQUVaLEtBQUssRUFBRSxHQUFHLENBQUMsSUFBSSxDQUFDLE9BQU87d0JBQ3ZCLElBQUksRUFBRSxNQUFNO3dCQUNaLFFBQVEsRUFBRSxJQUFJO3dCQUNkLElBQUksRUFBRSxJQUFJO3FCQUNWLENBQUMsQ0FBQztpQkFDSDtnQkFDRCxPQUFPLENBQUMsR0FBRyxDQUFDLElBQUksQ0FBQyxDQUFBO1lBQ2xCLENBQUM7WUFDRCxJQUFJLFlBQUMsR0FBRztnQkFDUCxFQUFFLENBQUMsV0FBVyxFQUFFLENBQUM7Z0JBQ2pCLE1BQU0sQ0FBQyxHQUFHLENBQUMsQ0FBQTtZQUNaLENBQUM7U0FDRCxDQUFDLENBQUE7SUFDSCxDQUFDLENBQUMsQ0FBQTtBQUNILENBQUMsQ0FBQyIsInNvdXJjZXNDb250ZW50IjpbIi8vIGNvbnN0IGJhc2UgPSAnaHR0cDovL2FkbWluLnRpYW55dWUwNTcxLmNuLyc7XG4vLyBleHBvcnQgY29uc3QgYmFzZSA9ICdodHRwOi8vNDcuOTcuMjUxLjE5Nic7XG5leHBvcnQgY29uc3QgYmFzZSA9ICdodHRwczovL2h1cGFueHVleXVhbi50aWFueXVlMDU3MS5jbic7XG5cbmxldCBhamF4OiAodXJsOiBzdHJpbmcsIGRhdGE/OiBvYmplY3QsIG1ldGhvZD86IChcIlBPU1RcIiB8IFwiR0VUXCIpKSA9PiBQcm9taXNlPGFueT47XG5cbmFqYXggPSAodXJsOiBzdHJpbmcsIGRhdGE6IG9iamVjdCA9IHt9LCBtZXRob2Q6ICdQT1NUJyB8ICdHRVQnID0gJ1BPU1QnKSA9PiB7XG5cdC8vIEB0cy1pZ25vcmVcblx0cmV0dXJuIG5ldyBQcm9taXNlKChyZXNvbHZlOiBhbnksIHJlamVjdDogYW55KTogYW55ID0+IHtcblx0XHR3eC5zaG93TG9hZGluZyh7XG5cdFx0XHR0aXRsZTonbG9hZGluZycsXG5cdFx0XHRtYXNrOnRydWVcblx0XHR9KTtcblx0XHR3eC5yZXF1ZXN0KHtcblx0XHRcdG1ldGhvZCxcblx0XHRcdHVybDogYmFzZSArIHVybCxcblx0XHRcdGRhdGEsXG5cdFx0XHRzdWNjZXNzKHJlcykge1xuXHRcdFx0XHR3eC5oaWRlTG9hZGluZygpO1xuXHRcdFx0XHQvLyBAdHMtaWdub3JlXG5cdFx0XHRcdGlmIChyZXMuZGF0YS5jb2RlID09PSAwKSB7XG5cdFx0XHRcdFx0d3guc2hvd1RvYXN0KHtcblx0XHRcdFx0XHRcdC8vIEB0cy1pZ25vcmVcblx0XHRcdFx0XHRcdHRpdGxlOiByZXMuZGF0YS5tZXNzYWdlLFxuXHRcdFx0XHRcdFx0aWNvbjogJ25vbmUnLFxuXHRcdFx0XHRcdFx0ZHVyYXRpb246IDIwMDAsXG5cdFx0XHRcdFx0XHRtYXNrOiB0cnVlXG5cdFx0XHRcdFx0fSlcblx0XHRcdFx0fVxuXG5cblx0XHRcdFx0Ly8gQHRzLWlnbm9yZVxuXHRcdFx0XHRpZiAocmVzLmRhdGEuY29kZSA9PT0gMikge1xuXHRcdFx0XHRcdHd4LnNob3dUb2FzdCh7XG5cdFx0XHRcdFx0XHQvLyBAdHMtaWdub3JlXG5cdFx0XHRcdFx0XHR0aXRsZTogcmVzLmRhdGEubWVzc2FnZSxcblx0XHRcdFx0XHRcdGljb246ICdub25lJyxcblx0XHRcdFx0XHRcdGR1cmF0aW9uOiAyMDAwLFxuXHRcdFx0XHRcdFx0bWFzazogdHJ1ZVxuXHRcdFx0XHRcdH0pO1xuXHRcdFx0XHR9XG5cdFx0XHRcdHJlc29sdmUocmVzLmRhdGEpXG5cdFx0XHR9LFxuXHRcdFx0ZmFpbChlcnIpIHtcblx0XHRcdFx0d3guaGlkZUxvYWRpbmcoKTtcblx0XHRcdFx0cmVqZWN0KGVycilcblx0XHRcdH1cblx0XHR9KVxuXHR9KVxufTtcblxuZXhwb3J0IHthamF4fTtcblxuIl19