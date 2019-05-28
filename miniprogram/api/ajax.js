"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.base = 'http://47.97.251.196';
exports.baseUrl = 'http://admin.tianyue0571.cn';
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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiYWpheC5qcyIsInNvdXJjZVJvb3QiOiIiLCJzb3VyY2VzIjpbImFqYXgudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7QUFDYSxRQUFBLElBQUksR0FBRyxzQkFBc0IsQ0FBQztBQUM5QixRQUFBLE9BQU8sR0FBRyw2QkFBNkIsQ0FBQztBQUVyRCxJQUFJLElBQTZFLENBQUM7QUF3QzFFLG9CQUFJO0FBdENaLGVBQUEsSUFBSSxHQUFHLFVBQUMsR0FBVyxFQUFFLElBQWlCLEVBQUUsTUFBK0I7SUFBbEQscUJBQUEsRUFBQSxTQUFpQjtJQUFFLHVCQUFBLEVBQUEsZUFBK0I7SUFFdEUsT0FBTyxJQUFJLE9BQU8sQ0FBQyxVQUFDLE9BQVksRUFBRSxNQUFXO1FBQzVDLEVBQUUsQ0FBQyxPQUFPLENBQUM7WUFDVixNQUFNLFFBQUE7WUFDTixHQUFHLEVBQUUsWUFBSSxHQUFHLEdBQUc7WUFDZixJQUFJLE1BQUE7WUFDSixPQUFPLFlBQUMsR0FBRztnQkFFVixJQUFJLEdBQUcsQ0FBQyxJQUFJLENBQUMsSUFBSSxLQUFLLENBQUMsRUFBRTtvQkFDeEIsRUFBRSxDQUFDLFNBQVMsQ0FBQzt3QkFFWixLQUFLLEVBQUUsR0FBRyxDQUFDLElBQUksQ0FBQyxPQUFPO3dCQUN2QixJQUFJLEVBQUUsTUFBTTt3QkFDWixRQUFRLEVBQUUsSUFBSTt3QkFDZCxJQUFJLEVBQUUsSUFBSTtxQkFDVixDQUFDLENBQUE7aUJBQ0Y7Z0JBR0QsSUFBSSxHQUFHLENBQUMsSUFBSSxDQUFDLElBQUksS0FBSyxDQUFDLEVBQUU7b0JBQ3hCLEVBQUUsQ0FBQyxTQUFTLENBQUM7d0JBRVosS0FBSyxFQUFFLEdBQUcsQ0FBQyxJQUFJLENBQUMsT0FBTzt3QkFDdkIsSUFBSSxFQUFFLE1BQU07d0JBQ1osUUFBUSxFQUFFLElBQUk7d0JBQ2QsSUFBSSxFQUFFLElBQUk7cUJBQ1YsQ0FBQyxDQUFDO2lCQUNIO2dCQUNELE9BQU8sQ0FBQyxHQUFHLENBQUMsSUFBSSxDQUFDLENBQUE7WUFDbEIsQ0FBQztZQUNELElBQUksWUFBQyxHQUFHO2dCQUNQLE1BQU0sQ0FBQyxHQUFHLENBQUMsQ0FBQTtZQUNaLENBQUM7U0FDRCxDQUFDLENBQUE7SUFDSCxDQUFDLENBQUMsQ0FBQTtBQUNILENBQUMsQ0FBQyIsInNvdXJjZXNDb250ZW50IjpbIi8vIGV4cG9ydCBjb25zdCBiYXNlID0gJ2h0dHA6Ly9hZG1pbi50aWFueXVlMDU3MS5jbi8nO1xuZXhwb3J0IGNvbnN0IGJhc2UgPSAnaHR0cDovLzQ3Ljk3LjI1MS4xOTYnO1xuZXhwb3J0IGNvbnN0IGJhc2VVcmwgPSAnaHR0cDovL2FkbWluLnRpYW55dWUwNTcxLmNuJztcblxubGV0IGFqYXg6ICh1cmw6IHN0cmluZywgZGF0YT86IG9iamVjdCwgbWV0aG9kPzogKFwiUE9TVFwiIHwgXCJHRVRcIikpID0+IFByb21pc2U8YW55PjtcblxuYWpheCA9ICh1cmw6IHN0cmluZywgZGF0YTogb2JqZWN0ID0ge30sIG1ldGhvZDogJ1BPU1QnIHwgJ0dFVCcgPSAnUE9TVCcpID0+IHtcblx0Ly8gQHRzLWlnbm9yZVxuXHRyZXR1cm4gbmV3IFByb21pc2UoKHJlc29sdmU6IGFueSwgcmVqZWN0OiBhbnkpOiBhbnkgPT4ge1xuXHRcdHd4LnJlcXVlc3Qoe1xuXHRcdFx0bWV0aG9kLFxuXHRcdFx0dXJsOiBiYXNlICsgdXJsLFxuXHRcdFx0ZGF0YSxcblx0XHRcdHN1Y2Nlc3MocmVzKSB7XG5cdFx0XHRcdC8vIEB0cy1pZ25vcmVcblx0XHRcdFx0aWYgKHJlcy5kYXRhLmNvZGUgPT09IDApIHtcblx0XHRcdFx0XHR3eC5zaG93VG9hc3Qoe1xuXHRcdFx0XHRcdFx0Ly8gQHRzLWlnbm9yZVxuXHRcdFx0XHRcdFx0dGl0bGU6IHJlcy5kYXRhLm1lc3NhZ2UsXG5cdFx0XHRcdFx0XHRpY29uOiAnbm9uZScsXG5cdFx0XHRcdFx0XHRkdXJhdGlvbjogMjAwMCxcblx0XHRcdFx0XHRcdG1hc2s6IHRydWVcblx0XHRcdFx0XHR9KVxuXHRcdFx0XHR9XG5cblxuXHRcdFx0XHRpZiAocmVzLmRhdGEuY29kZSA9PT0gMikge1xuXHRcdFx0XHRcdHd4LnNob3dUb2FzdCh7XG5cdFx0XHRcdFx0XHQvLyBAdHMtaWdub3JlXG5cdFx0XHRcdFx0XHR0aXRsZTogcmVzLmRhdGEubWVzc2FnZSxcblx0XHRcdFx0XHRcdGljb246ICdub25lJyxcblx0XHRcdFx0XHRcdGR1cmF0aW9uOiAyMDAwLFxuXHRcdFx0XHRcdFx0bWFzazogdHJ1ZVxuXHRcdFx0XHRcdH0pO1xuXHRcdFx0XHR9XG5cdFx0XHRcdHJlc29sdmUocmVzLmRhdGEpXG5cdFx0XHR9LFxuXHRcdFx0ZmFpbChlcnIpIHtcblx0XHRcdFx0cmVqZWN0KGVycilcblx0XHRcdH1cblx0XHR9KVxuXHR9KVxufTtcblxuZXhwb3J0IHthamF4fTtcblxuIl19