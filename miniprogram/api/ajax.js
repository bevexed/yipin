"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var base = 'http://admin.tianyue0571.cn/';
var ajax;
exports.ajax = ajax;
exports.ajax = ajax = function (url, data, method) {
    if (data === void 0) { data = {}; }
    if (method === void 0) { method = 'POST'; }
    return new Promise(function (resolve, reject) {
        wx.request({
            method: method,
            url: base + url,
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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiYWpheC5qcyIsInNvdXJjZVJvb3QiOiIiLCJzb3VyY2VzIjpbImFqYXgudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7QUFBQSxJQUFNLElBQUksR0FBRyw4QkFBOEIsQ0FBQztBQUU1QyxJQUFJLElBQTZFLENBQUM7QUE2QjFFLG9CQUFJO0FBM0JaLGVBQUEsSUFBSSxHQUFHLFVBQUMsR0FBVyxFQUFFLElBQWlCLEVBQUUsTUFBK0I7SUFBbEQscUJBQUEsRUFBQSxTQUFpQjtJQUFFLHVCQUFBLEVBQUEsZUFBK0I7SUFFdEUsT0FBTyxJQUFJLE9BQU8sQ0FBQyxVQUFDLE9BQVksRUFBRSxNQUFXO1FBQzVDLEVBQUUsQ0FBQyxPQUFPLENBQUM7WUFDVixNQUFNLFFBQUE7WUFDTixHQUFHLEVBQUUsSUFBSSxHQUFHLEdBQUc7WUFDZixJQUFJLE1BQUE7WUFDSixPQUFPLFlBQUMsR0FBRztnQkFFVixJQUFJLEdBQUcsQ0FBQyxJQUFJLENBQUMsSUFBSSxLQUFLLENBQUMsRUFBRTtvQkFDeEIsRUFBRSxDQUFDLFNBQVMsQ0FBQzt3QkFFWixLQUFLLEVBQUUsR0FBRyxDQUFDLElBQUksQ0FBQyxPQUFPO3dCQUN2QixJQUFJLEVBQUUsTUFBTTt3QkFDWixRQUFRLEVBQUUsSUFBSTt3QkFDZCxJQUFJLEVBQUUsSUFBSTtxQkFDVixDQUFDLENBQUE7aUJBQ0Y7Z0JBQ0QsT0FBTyxDQUFDLEdBQUcsQ0FBQyxJQUFJLENBQUMsQ0FBQTtZQUNsQixDQUFDO1lBQ0QsSUFBSSxZQUFDLEdBQUc7Z0JBQ1AsTUFBTSxDQUFDLEdBQUcsQ0FBQyxDQUFBO1lBQ1osQ0FBQztTQUNELENBQUMsQ0FBQTtJQUNILENBQUMsQ0FBQyxDQUFBO0FBQ0gsQ0FBQyxDQUFDIiwic291cmNlc0NvbnRlbnQiOlsiY29uc3QgYmFzZSA9ICdodHRwOi8vYWRtaW4udGlhbnl1ZTA1NzEuY24vJztcblxubGV0IGFqYXg6ICh1cmw6IHN0cmluZywgZGF0YT86IG9iamVjdCwgbWV0aG9kPzogKFwiUE9TVFwiIHwgXCJHRVRcIikpID0+IFByb21pc2U8YW55PjtcblxuYWpheCA9ICh1cmw6IHN0cmluZywgZGF0YTogb2JqZWN0ID0ge30sIG1ldGhvZDogJ1BPU1QnIHwgJ0dFVCcgPSAnUE9TVCcpID0+IHtcblx0Ly8gQHRzLWlnbm9yZVxuXHRyZXR1cm4gbmV3IFByb21pc2UoKHJlc29sdmU6IGFueSwgcmVqZWN0OiBhbnkpOiBhbnkgPT4ge1xuXHRcdHd4LnJlcXVlc3Qoe1xuXHRcdFx0bWV0aG9kLFxuXHRcdFx0dXJsOiBiYXNlICsgdXJsLFxuXHRcdFx0ZGF0YSxcblx0XHRcdHN1Y2Nlc3MocmVzKSB7XG5cdFx0XHRcdC8vIEB0cy1pZ25vcmVcblx0XHRcdFx0aWYgKHJlcy5kYXRhLmNvZGUgPT09IDApIHtcblx0XHRcdFx0XHR3eC5zaG93VG9hc3Qoe1xuXHRcdFx0XHRcdC8vIEB0cy1pZ25vcmVcblx0XHRcdFx0XHRcdHRpdGxlOiByZXMuZGF0YS5tZXNzYWdlLFxuXHRcdFx0XHRcdFx0aWNvbjogJ25vbmUnLFxuXHRcdFx0XHRcdFx0ZHVyYXRpb246IDIwMDAsXG5cdFx0XHRcdFx0XHRtYXNrOiB0cnVlXG5cdFx0XHRcdFx0fSlcblx0XHRcdFx0fVxuXHRcdFx0XHRyZXNvbHZlKHJlcy5kYXRhKVxuXHRcdFx0fSxcblx0XHRcdGZhaWwoZXJyKSB7XG5cdFx0XHRcdHJlamVjdChlcnIpXG5cdFx0XHR9XG5cdFx0fSlcblx0fSlcbn07XG5cbmV4cG9ydCB7YWpheH07XG5cbiJdfQ==
