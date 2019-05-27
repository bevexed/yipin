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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiYWpheC5qcyIsInNvdXJjZVJvb3QiOiIiLCJzb3VyY2VzIjpbImFqYXgudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7QUFBQSxJQUFNLElBQUksR0FBRyw4QkFBOEIsQ0FBQztBQUU1QyxJQUFJLElBQTZFLENBQUM7QUF3QzFFLG9CQUFJO0FBdENaLGVBQUEsSUFBSSxHQUFHLFVBQUMsR0FBVyxFQUFFLElBQWlCLEVBQUUsTUFBK0I7SUFBbEQscUJBQUEsRUFBQSxTQUFpQjtJQUFFLHVCQUFBLEVBQUEsZUFBK0I7SUFFdEUsT0FBTyxJQUFJLE9BQU8sQ0FBQyxVQUFDLE9BQVksRUFBRSxNQUFXO1FBQzVDLEVBQUUsQ0FBQyxPQUFPLENBQUM7WUFDVixNQUFNLFFBQUE7WUFDTixHQUFHLEVBQUUsSUFBSSxHQUFHLEdBQUc7WUFDZixJQUFJLE1BQUE7WUFDSixPQUFPLFlBQUMsR0FBRztnQkFFVixJQUFJLEdBQUcsQ0FBQyxJQUFJLENBQUMsSUFBSSxLQUFLLENBQUMsRUFBRTtvQkFDeEIsRUFBRSxDQUFDLFNBQVMsQ0FBQzt3QkFFWixLQUFLLEVBQUUsR0FBRyxDQUFDLElBQUksQ0FBQyxPQUFPO3dCQUN2QixJQUFJLEVBQUUsTUFBTTt3QkFDWixRQUFRLEVBQUUsSUFBSTt3QkFDZCxJQUFJLEVBQUUsSUFBSTtxQkFDVixDQUFDLENBQUE7aUJBQ0Y7Z0JBR0QsSUFBSSxHQUFHLENBQUMsSUFBSSxDQUFDLElBQUksS0FBSyxDQUFDLEVBQUU7b0JBQ3hCLEVBQUUsQ0FBQyxTQUFTLENBQUM7d0JBRVosS0FBSyxFQUFFLEdBQUcsQ0FBQyxJQUFJLENBQUMsT0FBTzt3QkFDdkIsSUFBSSxFQUFFLE1BQU07d0JBQ1osUUFBUSxFQUFFLElBQUk7d0JBQ2QsSUFBSSxFQUFFLElBQUk7cUJBQ1YsQ0FBQyxDQUFDO2lCQUNIO2dCQUNELE9BQU8sQ0FBQyxHQUFHLENBQUMsSUFBSSxDQUFDLENBQUE7WUFDbEIsQ0FBQztZQUNELElBQUksWUFBQyxHQUFHO2dCQUNQLE1BQU0sQ0FBQyxHQUFHLENBQUMsQ0FBQTtZQUNaLENBQUM7U0FDRCxDQUFDLENBQUE7SUFDSCxDQUFDLENBQUMsQ0FBQTtBQUNILENBQUMsQ0FBQyIsInNvdXJjZXNDb250ZW50IjpbImNvbnN0IGJhc2UgPSAnaHR0cDovL2FkbWluLnRpYW55dWUwNTcxLmNuLyc7XHJcblxyXG5sZXQgYWpheDogKHVybDogc3RyaW5nLCBkYXRhPzogb2JqZWN0LCBtZXRob2Q/OiAoXCJQT1NUXCIgfCBcIkdFVFwiKSkgPT4gUHJvbWlzZTxhbnk+O1xyXG5cclxuYWpheCA9ICh1cmw6IHN0cmluZywgZGF0YTogb2JqZWN0ID0ge30sIG1ldGhvZDogJ1BPU1QnIHwgJ0dFVCcgPSAnUE9TVCcpID0+IHtcclxuXHQvLyBAdHMtaWdub3JlXHJcblx0cmV0dXJuIG5ldyBQcm9taXNlKChyZXNvbHZlOiBhbnksIHJlamVjdDogYW55KTogYW55ID0+IHtcclxuXHRcdHd4LnJlcXVlc3Qoe1xyXG5cdFx0XHRtZXRob2QsXHJcblx0XHRcdHVybDogYmFzZSArIHVybCxcclxuXHRcdFx0ZGF0YSxcclxuXHRcdFx0c3VjY2VzcyhyZXMpIHtcclxuXHRcdFx0XHQvLyBAdHMtaWdub3JlXHJcblx0XHRcdFx0aWYgKHJlcy5kYXRhLmNvZGUgPT09IDApIHtcclxuXHRcdFx0XHRcdHd4LnNob3dUb2FzdCh7XHJcblx0XHRcdFx0XHRcdC8vIEB0cy1pZ25vcmVcclxuXHRcdFx0XHRcdFx0dGl0bGU6IHJlcy5kYXRhLm1lc3NhZ2UsXHJcblx0XHRcdFx0XHRcdGljb246ICdub25lJyxcclxuXHRcdFx0XHRcdFx0ZHVyYXRpb246IDIwMDAsXHJcblx0XHRcdFx0XHRcdG1hc2s6IHRydWVcclxuXHRcdFx0XHRcdH0pXHJcblx0XHRcdFx0fVxyXG5cclxuXHJcblx0XHRcdFx0aWYgKHJlcy5kYXRhLmNvZGUgPT09IDIpIHtcclxuXHRcdFx0XHRcdHd4LnNob3dUb2FzdCh7XHJcblx0XHRcdFx0XHRcdC8vIEB0cy1pZ25vcmVcclxuXHRcdFx0XHRcdFx0dGl0bGU6IHJlcy5kYXRhLm1lc3NhZ2UsXHJcblx0XHRcdFx0XHRcdGljb246ICdub25lJyxcclxuXHRcdFx0XHRcdFx0ZHVyYXRpb246IDIwMDAsXHJcblx0XHRcdFx0XHRcdG1hc2s6IHRydWVcclxuXHRcdFx0XHRcdH0pO1xyXG5cdFx0XHRcdH1cclxuXHRcdFx0XHRyZXNvbHZlKHJlcy5kYXRhKVxyXG5cdFx0XHR9LFxyXG5cdFx0XHRmYWlsKGVycikge1xyXG5cdFx0XHRcdHJlamVjdChlcnIpXHJcblx0XHRcdH1cclxuXHRcdH0pXHJcblx0fSlcclxufTtcclxuXHJcbmV4cG9ydCB7YWpheH07XHJcblxyXG4iXX0=