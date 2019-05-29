"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.base = 'http://47.97.251.196';
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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiYWpheC5qcyIsInNvdXJjZVJvb3QiOiIiLCJzb3VyY2VzIjpbImFqYXgudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7QUFDYSxRQUFBLElBQUksR0FBRyxzQkFBc0IsQ0FBQztBQUUzQyxJQUFJLElBQTZFLENBQUM7QUF3QzFFLG9CQUFJO0FBdENaLGVBQUEsSUFBSSxHQUFHLFVBQUMsR0FBVyxFQUFFLElBQWlCLEVBQUUsTUFBK0I7SUFBbEQscUJBQUEsRUFBQSxTQUFpQjtJQUFFLHVCQUFBLEVBQUEsZUFBK0I7SUFFdEUsT0FBTyxJQUFJLE9BQU8sQ0FBQyxVQUFDLE9BQVksRUFBRSxNQUFXO1FBQzVDLEVBQUUsQ0FBQyxPQUFPLENBQUM7WUFDVixNQUFNLFFBQUE7WUFDTixHQUFHLEVBQUUsWUFBSSxHQUFHLEdBQUc7WUFDZixJQUFJLE1BQUE7WUFDSixPQUFPLFlBQUMsR0FBRztnQkFFVixJQUFJLEdBQUcsQ0FBQyxJQUFJLENBQUMsSUFBSSxLQUFLLENBQUMsRUFBRTtvQkFDeEIsRUFBRSxDQUFDLFNBQVMsQ0FBQzt3QkFFWixLQUFLLEVBQUUsR0FBRyxDQUFDLElBQUksQ0FBQyxPQUFPO3dCQUN2QixJQUFJLEVBQUUsTUFBTTt3QkFDWixRQUFRLEVBQUUsSUFBSTt3QkFDZCxJQUFJLEVBQUUsSUFBSTtxQkFDVixDQUFDLENBQUE7aUJBQ0Y7Z0JBR0QsSUFBSSxHQUFHLENBQUMsSUFBSSxDQUFDLElBQUksS0FBSyxDQUFDLEVBQUU7b0JBQ3hCLEVBQUUsQ0FBQyxTQUFTLENBQUM7d0JBRVosS0FBSyxFQUFFLEdBQUcsQ0FBQyxJQUFJLENBQUMsT0FBTzt3QkFDdkIsSUFBSSxFQUFFLE1BQU07d0JBQ1osUUFBUSxFQUFFLElBQUk7d0JBQ2QsSUFBSSxFQUFFLElBQUk7cUJBQ1YsQ0FBQyxDQUFDO2lCQUNIO2dCQUNELE9BQU8sQ0FBQyxHQUFHLENBQUMsSUFBSSxDQUFDLENBQUE7WUFDbEIsQ0FBQztZQUNELElBQUksWUFBQyxHQUFHO2dCQUNQLE1BQU0sQ0FBQyxHQUFHLENBQUMsQ0FBQTtZQUNaLENBQUM7U0FDRCxDQUFDLENBQUE7SUFDSCxDQUFDLENBQUMsQ0FBQTtBQUNILENBQUMsQ0FBQyIsInNvdXJjZXNDb250ZW50IjpbIi8vIGNvbnN0IGJhc2UgPSAnaHR0cDovL2FkbWluLnRpYW55dWUwNTcxLmNuLyc7XHJcbmV4cG9ydCBjb25zdCBiYXNlID0gJ2h0dHA6Ly80Ny45Ny4yNTEuMTk2JztcclxuXHJcbmxldCBhamF4OiAodXJsOiBzdHJpbmcsIGRhdGE/OiBvYmplY3QsIG1ldGhvZD86IChcIlBPU1RcIiB8IFwiR0VUXCIpKSA9PiBQcm9taXNlPGFueT47XHJcblxyXG5hamF4ID0gKHVybDogc3RyaW5nLCBkYXRhOiBvYmplY3QgPSB7fSwgbWV0aG9kOiAnUE9TVCcgfCAnR0VUJyA9ICdQT1NUJykgPT4ge1xyXG5cdC8vIEB0cy1pZ25vcmVcclxuXHRyZXR1cm4gbmV3IFByb21pc2UoKHJlc29sdmU6IGFueSwgcmVqZWN0OiBhbnkpOiBhbnkgPT4ge1xyXG5cdFx0d3gucmVxdWVzdCh7XHJcblx0XHRcdG1ldGhvZCxcclxuXHRcdFx0dXJsOiBiYXNlICsgdXJsLFxyXG5cdFx0XHRkYXRhLFxyXG5cdFx0XHRzdWNjZXNzKHJlcykge1xyXG5cdFx0XHRcdC8vIEB0cy1pZ25vcmVcclxuXHRcdFx0XHRpZiAocmVzLmRhdGEuY29kZSA9PT0gMCkge1xyXG5cdFx0XHRcdFx0d3guc2hvd1RvYXN0KHtcclxuXHRcdFx0XHRcdFx0Ly8gQHRzLWlnbm9yZVxyXG5cdFx0XHRcdFx0XHR0aXRsZTogcmVzLmRhdGEubWVzc2FnZSxcclxuXHRcdFx0XHRcdFx0aWNvbjogJ25vbmUnLFxyXG5cdFx0XHRcdFx0XHRkdXJhdGlvbjogMjAwMCxcclxuXHRcdFx0XHRcdFx0bWFzazogdHJ1ZVxyXG5cdFx0XHRcdFx0fSlcclxuXHRcdFx0XHR9XHJcblxyXG5cclxuXHRcdFx0XHRpZiAocmVzLmRhdGEuY29kZSA9PT0gMikge1xyXG5cdFx0XHRcdFx0d3guc2hvd1RvYXN0KHtcclxuXHRcdFx0XHRcdFx0Ly8gQHRzLWlnbm9yZVxyXG5cdFx0XHRcdFx0XHR0aXRsZTogcmVzLmRhdGEubWVzc2FnZSxcclxuXHRcdFx0XHRcdFx0aWNvbjogJ25vbmUnLFxyXG5cdFx0XHRcdFx0XHRkdXJhdGlvbjogMjAwMCxcclxuXHRcdFx0XHRcdFx0bWFzazogdHJ1ZVxyXG5cdFx0XHRcdFx0fSk7XHJcblx0XHRcdFx0fVxyXG5cdFx0XHRcdHJlc29sdmUocmVzLmRhdGEpXHJcblx0XHRcdH0sXHJcblx0XHRcdGZhaWwoZXJyKSB7XHJcblx0XHRcdFx0cmVqZWN0KGVycilcclxuXHRcdFx0fVxyXG5cdFx0fSlcclxuXHR9KVxyXG59O1xyXG5cclxuZXhwb3J0IHthamF4fTtcclxuXHJcbiJdfQ==