"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.base = 'https://hupanxueyuan.tianyue0571.cn';
var ajax;
exports.ajax = ajax;
exports.ajax = ajax = function (url, data, method) {
    if (data === void 0) { data = {}; }
    if (method === void 0) { method = 'POST'; }
    return new Promise(function (resolve, reject) {
        wx.request({
            method: method,
            url: exports.base + url,
            data: data,
            success: function (res) {
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
                reject(err);
            }
        });
    });
};
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiYWpheC5qcyIsInNvdXJjZVJvb3QiOiIiLCJzb3VyY2VzIjpbImFqYXgudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7QUFFYSxRQUFBLElBQUksR0FBRyxxQ0FBcUMsQ0FBQztBQUUxRCxJQUFJLElBQTZFLENBQUM7QUF5QzFFLG9CQUFJO0FBdkNaLGVBQUEsSUFBSSxHQUFHLFVBQUMsR0FBVyxFQUFFLElBQWlCLEVBQUUsTUFBK0I7SUFBbEQscUJBQUEsRUFBQSxTQUFpQjtJQUFFLHVCQUFBLEVBQUEsZUFBK0I7SUFFdEUsT0FBTyxJQUFJLE9BQU8sQ0FBQyxVQUFDLE9BQVksRUFBRSxNQUFXO1FBQzVDLEVBQUUsQ0FBQyxPQUFPLENBQUM7WUFDVixNQUFNLFFBQUE7WUFDTixHQUFHLEVBQUUsWUFBSSxHQUFHLEdBQUc7WUFDZixJQUFJLE1BQUE7WUFDSixPQUFPLFlBQUMsR0FBRztnQkFFVixJQUFJLEdBQUcsQ0FBQyxJQUFJLENBQUMsSUFBSSxLQUFLLENBQUMsRUFBRTtvQkFDeEIsRUFBRSxDQUFDLFNBQVMsQ0FBQzt3QkFFWixLQUFLLEVBQUUsR0FBRyxDQUFDLElBQUksQ0FBQyxPQUFPO3dCQUN2QixJQUFJLEVBQUUsTUFBTTt3QkFDWixRQUFRLEVBQUUsSUFBSTt3QkFDZCxJQUFJLEVBQUUsSUFBSTtxQkFDVixDQUFDLENBQUE7aUJBQ0Y7Z0JBSUQsSUFBSSxHQUFHLENBQUMsSUFBSSxDQUFDLElBQUksS0FBSyxDQUFDLEVBQUU7b0JBQ3hCLEVBQUUsQ0FBQyxTQUFTLENBQUM7d0JBRVosS0FBSyxFQUFFLEdBQUcsQ0FBQyxJQUFJLENBQUMsT0FBTzt3QkFDdkIsSUFBSSxFQUFFLE1BQU07d0JBQ1osUUFBUSxFQUFFLElBQUk7d0JBQ2QsSUFBSSxFQUFFLElBQUk7cUJBQ1YsQ0FBQyxDQUFDO2lCQUNIO2dCQUNELE9BQU8sQ0FBQyxHQUFHLENBQUMsSUFBSSxDQUFDLENBQUE7WUFDbEIsQ0FBQztZQUNELElBQUksWUFBQyxHQUFHO2dCQUNQLE1BQU0sQ0FBQyxHQUFHLENBQUMsQ0FBQTtZQUNaLENBQUM7U0FDRCxDQUFDLENBQUE7SUFDSCxDQUFDLENBQUMsQ0FBQTtBQUNILENBQUMsQ0FBQyIsInNvdXJjZXNDb250ZW50IjpbIi8vIGNvbnN0IGJhc2UgPSAnaHR0cDovL2FkbWluLnRpYW55dWUwNTcxLmNuLyc7XHJcbi8vIGV4cG9ydCBjb25zdCBiYXNlID0gJ2h0dHA6Ly80Ny45Ny4yNTEuMTk2JztcclxuZXhwb3J0IGNvbnN0IGJhc2UgPSAnaHR0cHM6Ly9odXBhbnh1ZXl1YW4udGlhbnl1ZTA1NzEuY24nO1xyXG5cclxubGV0IGFqYXg6ICh1cmw6IHN0cmluZywgZGF0YT86IG9iamVjdCwgbWV0aG9kPzogKFwiUE9TVFwiIHwgXCJHRVRcIikpID0+IFByb21pc2U8YW55PjtcclxuXHJcbmFqYXggPSAodXJsOiBzdHJpbmcsIGRhdGE6IG9iamVjdCA9IHt9LCBtZXRob2Q6ICdQT1NUJyB8ICdHRVQnID0gJ1BPU1QnKSA9PiB7XHJcblx0Ly8gQHRzLWlnbm9yZVxyXG5cdHJldHVybiBuZXcgUHJvbWlzZSgocmVzb2x2ZTogYW55LCByZWplY3Q6IGFueSk6IGFueSA9PiB7XHJcblx0XHR3eC5yZXF1ZXN0KHtcclxuXHRcdFx0bWV0aG9kLFxyXG5cdFx0XHR1cmw6IGJhc2UgKyB1cmwsXHJcblx0XHRcdGRhdGEsXHJcblx0XHRcdHN1Y2Nlc3MocmVzKSB7XHJcblx0XHRcdFx0Ly8gQHRzLWlnbm9yZVxyXG5cdFx0XHRcdGlmIChyZXMuZGF0YS5jb2RlID09PSAwKSB7XHJcblx0XHRcdFx0XHR3eC5zaG93VG9hc3Qoe1xyXG5cdFx0XHRcdFx0XHQvLyBAdHMtaWdub3JlXHJcblx0XHRcdFx0XHRcdHRpdGxlOiByZXMuZGF0YS5tZXNzYWdlLFxyXG5cdFx0XHRcdFx0XHRpY29uOiAnbm9uZScsXHJcblx0XHRcdFx0XHRcdGR1cmF0aW9uOiAyMDAwLFxyXG5cdFx0XHRcdFx0XHRtYXNrOiB0cnVlXHJcblx0XHRcdFx0XHR9KVxyXG5cdFx0XHRcdH1cclxuXHJcblxyXG5cdFx0XHRcdC8vIEB0cy1pZ25vcmVcclxuXHRcdFx0XHRpZiAocmVzLmRhdGEuY29kZSA9PT0gMikge1xyXG5cdFx0XHRcdFx0d3guc2hvd1RvYXN0KHtcclxuXHRcdFx0XHRcdFx0Ly8gQHRzLWlnbm9yZVxyXG5cdFx0XHRcdFx0XHR0aXRsZTogcmVzLmRhdGEubWVzc2FnZSxcclxuXHRcdFx0XHRcdFx0aWNvbjogJ25vbmUnLFxyXG5cdFx0XHRcdFx0XHRkdXJhdGlvbjogMjAwMCxcclxuXHRcdFx0XHRcdFx0bWFzazogdHJ1ZVxyXG5cdFx0XHRcdFx0fSk7XHJcblx0XHRcdFx0fVxyXG5cdFx0XHRcdHJlc29sdmUocmVzLmRhdGEpXHJcblx0XHRcdH0sXHJcblx0XHRcdGZhaWwoZXJyKSB7XHJcblx0XHRcdFx0cmVqZWN0KGVycilcclxuXHRcdFx0fVxyXG5cdFx0fSlcclxuXHR9KVxyXG59O1xyXG5cclxuZXhwb3J0IHthamF4fTtcclxuXHJcbiJdfQ==