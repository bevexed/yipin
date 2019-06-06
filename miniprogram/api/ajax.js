"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.base = 'https://hupanxueyuan.tianyue0571.cn';
var index_1 = require("./index");
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
                        success: function () {
                            wx.login({
                                success: function (res) {
                                    console.log(res.code);
                                    index_1.reqOpenid(res.code).then(function (res) {
                                        if (res.code === 1) {
                                            wx.setStorage({
                                                key: 'openid',
                                                data: res.data.openid,
                                                success: function () {
                                                },
                                                fail: function () {
                                                }
                                            });
                                        }
                                        else {
                                            console.log('reqOpenid fail');
                                        }
                                    });
                                }
                            });
                            wx.navigateTo({
                                url: '/pages/login/login'
                            });
                        }
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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiYWpheC5qcyIsInNvdXJjZVJvb3QiOiIiLCJzb3VyY2VzIjpbImFqYXgudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7QUFFYSxRQUFBLElBQUksR0FBRyxxQ0FBcUMsQ0FBQztBQUUxRCxpQ0FBa0M7QUFFbEMsSUFBSSxJQUFrRyxDQUFDO0FBZ0YvRixvQkFBSTtBQTlFWixlQUFBLElBQUksR0FBRyxVQUFDLEdBQVcsRUFBRSxJQUFpQixFQUFFLE1BQStCLEVBQUUsU0FBZ0I7SUFBcEUscUJBQUEsRUFBQSxTQUFpQjtJQUFFLHVCQUFBLEVBQUEsZUFBK0I7SUFBRSwwQkFBQSxFQUFBLGdCQUFnQjtJQUV4RixPQUFPLElBQUksT0FBTyxDQUFDLFVBQUMsT0FBWSxFQUFFLE1BQVc7UUFDNUMsRUFBRSxDQUFDLFdBQVcsQ0FBQztZQUNkLEtBQUssRUFBRSxTQUFTO1lBQ2hCLElBQUksRUFBRSxJQUFJO1NBQ1YsQ0FBQyxDQUFDO1FBQ0gsRUFBRSxDQUFDLE9BQU8sQ0FBQztZQUNWLE1BQU0sUUFBQTtZQUNOLEdBQUcsRUFBRSxZQUFJLEdBQUcsR0FBRztZQUNmLElBQUksTUFBQTtZQUNKLE9BQU8sRUFBUCxVQUFRLEdBQUc7Z0JBQ1YsRUFBRSxDQUFDLFdBQVcsRUFBRSxDQUFDO2dCQUVqQixJQUFJLEdBQUcsQ0FBQyxJQUFJLENBQUMsSUFBSSxLQUFLLENBQUMsRUFBRTtvQkFDeEIsSUFBSSxDQUFDLFNBQVMsRUFBRTt3QkFDZixPQUFNO3FCQUNOO29CQUNELEVBQUUsQ0FBQyxTQUFTLENBQUM7d0JBR1osS0FBSyxFQUFFLEdBQUcsQ0FBQyxPQUFPO3dCQUNsQixJQUFJLEVBQUUsTUFBTTt3QkFDWixRQUFRLEVBQUUsSUFBSTt3QkFDZCxJQUFJLEVBQUUsSUFBSTtxQkFDVixDQUFDLENBQUE7aUJBQ0Y7Z0JBSUQsSUFBSSxHQUFHLENBQUMsSUFBSSxDQUFDLElBQUksS0FBSyxDQUFDLEVBQUU7b0JBQ3hCLEVBQUUsQ0FBQyxTQUFTLENBQUM7d0JBRVosS0FBSyxFQUFFLEdBQUcsQ0FBQyxJQUFJLENBQUMsT0FBTzt3QkFDdkIsSUFBSSxFQUFFLE1BQU07d0JBQ1osUUFBUSxFQUFFLElBQUk7d0JBQ2QsSUFBSSxFQUFFLElBQUk7d0JBQ1YsT0FBTyxFQUFQOzRCQUVDLEVBQUUsQ0FBQyxLQUFLLENBQUM7Z0NBQ1IsT0FBTyxFQUFQLFVBQVEsR0FBRztvQ0FDVixPQUFPLENBQUMsR0FBRyxDQUFDLEdBQUcsQ0FBQyxJQUFJLENBQUMsQ0FBQztvQ0FDdEIsaUJBQVMsQ0FBQyxHQUFHLENBQUMsSUFBSSxDQUFDLENBQUMsSUFBSSxDQUN2QixVQUFDLEdBQVE7d0NBQ1IsSUFBSSxHQUFHLENBQUMsSUFBSSxLQUFLLENBQUMsRUFBRTs0Q0FDbkIsRUFBRSxDQUFDLFVBQVUsQ0FBQztnREFDYixHQUFHLEVBQUUsUUFBUTtnREFDYixJQUFJLEVBQUUsR0FBRyxDQUFDLElBQUksQ0FBQyxNQUFNO2dEQUNyQixPQUFPO2dEQUNQLENBQUM7Z0RBQ0QsSUFBSTtnREFDSixDQUFDOzZDQUNELENBQUMsQ0FBQTt5Q0FDRjs2Q0FBTTs0Q0FDTixPQUFPLENBQUMsR0FBRyxDQUFDLGdCQUFnQixDQUFFLENBQUM7eUNBQy9CO29DQUNGLENBQUMsQ0FDRCxDQUFBO2dDQUVGLENBQUM7NkJBQ0QsQ0FBQyxDQUFDOzRCQUVILEVBQUUsQ0FBQyxVQUFVLENBQUM7Z0NBQ2IsR0FBRyxFQUFFLG9CQUFvQjs2QkFDekIsQ0FBQyxDQUFBO3dCQUNILENBQUM7cUJBQ0QsQ0FBQyxDQUFDO2lCQUNIO2dCQUNELE9BQU8sQ0FBQyxHQUFHLENBQUMsSUFBSSxDQUFDLENBQUE7WUFDbEIsQ0FBQztZQUNELElBQUksWUFBQyxHQUFHO2dCQUNQLEVBQUUsQ0FBQyxXQUFXLEVBQUUsQ0FBQztnQkFDakIsTUFBTSxDQUFDLEdBQUcsQ0FBQyxDQUFBO1lBQ1osQ0FBQztTQUNELENBQUMsQ0FBQTtJQUNILENBQUMsQ0FBQyxDQUFBO0FBQ0gsQ0FBQyxDQUFDIiwic291cmNlc0NvbnRlbnQiOlsiLy8gY29uc3QgYmFzZSA9ICdodHRwOi8vYWRtaW4udGlhbnl1ZTA1NzEuY24vJztcbi8vIGV4cG9ydCBjb25zdCBiYXNlID0gJ2h0dHA6Ly80Ny45Ny4yNTEuMTk2JztcbmV4cG9ydCBjb25zdCBiYXNlID0gJ2h0dHBzOi8vaHVwYW54dWV5dWFuLnRpYW55dWUwNTcxLmNuJztcblxuaW1wb3J0IHtyZXFPcGVuaWR9IGZyb20gXCIuL2luZGV4XCI7XG5cbmxldCBhamF4OiAodXJsOiBzdHJpbmcsIGRhdGE/OiBvYmplY3QsIG1ldGhvZD86IChcIlBPU1RcIiB8IFwiR0VUXCIpLCBzaG93VG9hc3Q/OiBib29sZWFuKSA9PiBQcm9taXNlPGFueT47XG5cbmFqYXggPSAodXJsOiBzdHJpbmcsIGRhdGE6IG9iamVjdCA9IHt9LCBtZXRob2Q6ICdQT1NUJyB8ICdHRVQnID0gJ1BPU1QnLCBzaG93VG9hc3QgPSB0cnVlKSA9PiB7XG5cdC8vIEB0cy1pZ25vcmVcblx0cmV0dXJuIG5ldyBQcm9taXNlKChyZXNvbHZlOiBhbnksIHJlamVjdDogYW55KTogYW55ID0+IHtcblx0XHR3eC5zaG93TG9hZGluZyh7XG5cdFx0XHR0aXRsZTogJ2xvYWRpbmcnLFxuXHRcdFx0bWFzazogdHJ1ZVxuXHRcdH0pO1xuXHRcdHd4LnJlcXVlc3Qoe1xuXHRcdFx0bWV0aG9kLFxuXHRcdFx0dXJsOiBiYXNlICsgdXJsLFxuXHRcdFx0ZGF0YSxcblx0XHRcdHN1Y2Nlc3MocmVzKSB7XG5cdFx0XHRcdHd4LmhpZGVMb2FkaW5nKCk7XG5cdFx0XHRcdC8vIEB0cy1pZ25vcmVcblx0XHRcdFx0aWYgKHJlcy5kYXRhLmNvZGUgPT09IDApIHtcblx0XHRcdFx0XHRpZiAoIXNob3dUb2FzdCkge1xuXHRcdFx0XHRcdFx0cmV0dXJuXG5cdFx0XHRcdFx0fVxuXHRcdFx0XHRcdHd4LnNob3dUb2FzdCh7XG5cdFx0XHRcdFx0XHQvLyBAdHMtaWdub3JlXG5cdFx0XHRcdFx0XHQvLyB0aXRsZTogcmVzLmRhdGEubWVzc2FnZSxcblx0XHRcdFx0XHRcdHRpdGxlOiByZXMubWVzc2FnZSxcblx0XHRcdFx0XHRcdGljb246ICdub25lJyxcblx0XHRcdFx0XHRcdGR1cmF0aW9uOiAyMDAwLFxuXHRcdFx0XHRcdFx0bWFzazogdHJ1ZVxuXHRcdFx0XHRcdH0pXG5cdFx0XHRcdH1cblxuXG5cdFx0XHRcdC8vIEB0cy1pZ25vcmVcblx0XHRcdFx0aWYgKHJlcy5kYXRhLmNvZGUgPT09IDIpIHtcblx0XHRcdFx0XHR3eC5zaG93VG9hc3Qoe1xuXHRcdFx0XHRcdFx0Ly8gQHRzLWlnbm9yZVxuXHRcdFx0XHRcdFx0dGl0bGU6IHJlcy5kYXRhLm1lc3NhZ2UsXG5cdFx0XHRcdFx0XHRpY29uOiAnbm9uZScsXG5cdFx0XHRcdFx0XHRkdXJhdGlvbjogMjAwMCxcblx0XHRcdFx0XHRcdG1hc2s6IHRydWUsXG5cdFx0XHRcdFx0XHRzdWNjZXNzKCl7XG5cblx0XHRcdFx0XHRcdFx0d3gubG9naW4oe1xuXHRcdFx0XHRcdFx0XHRcdHN1Y2Nlc3MocmVzKSB7XG5cdFx0XHRcdFx0XHRcdFx0XHRjb25zb2xlLmxvZyhyZXMuY29kZSk7XG5cdFx0XHRcdFx0XHRcdFx0XHRyZXFPcGVuaWQocmVzLmNvZGUpLnRoZW4oXG5cdFx0XHRcdFx0XHRcdFx0XHRcdChyZXM6IGFueSkgPT4ge1xuXHRcdFx0XHRcdFx0XHRcdFx0XHRcdGlmIChyZXMuY29kZSA9PT0gMSkge1xuXHRcdFx0XHRcdFx0XHRcdFx0XHRcdFx0d3guc2V0U3RvcmFnZSh7XG5cdFx0XHRcdFx0XHRcdFx0XHRcdFx0XHRcdGtleTogJ29wZW5pZCcsXG5cdFx0XHRcdFx0XHRcdFx0XHRcdFx0XHRcdGRhdGE6IHJlcy5kYXRhLm9wZW5pZCxcblx0XHRcdFx0XHRcdFx0XHRcdFx0XHRcdFx0c3VjY2VzcygpIHtcblx0XHRcdFx0XHRcdFx0XHRcdFx0XHRcdFx0fSxcblx0XHRcdFx0XHRcdFx0XHRcdFx0XHRcdFx0ZmFpbCgpIHtcblx0XHRcdFx0XHRcdFx0XHRcdFx0XHRcdFx0fVxuXHRcdFx0XHRcdFx0XHRcdFx0XHRcdFx0fSlcblx0XHRcdFx0XHRcdFx0XHRcdFx0XHR9IGVsc2Uge1xuXHRcdFx0XHRcdFx0XHRcdFx0XHRcdFx0Y29uc29sZS5sb2coJ3JlcU9wZW5pZCBmYWlsJywpO1xuXHRcdFx0XHRcdFx0XHRcdFx0XHRcdH1cblx0XHRcdFx0XHRcdFx0XHRcdFx0fVxuXHRcdFx0XHRcdFx0XHRcdFx0KVxuXHRcdFx0XHRcdFx0XHRcdFx0Ly8g5Y+R6YCBIF9yZXMuY29kZSDliLDlkI7lj7DmjaLlj5Ygb3BlbklkLCBzZXNzaW9uS2V5LCB1bmlvbklkXG5cdFx0XHRcdFx0XHRcdFx0fVxuXHRcdFx0XHRcdFx0XHR9KTtcblxuXHRcdFx0XHRcdFx0XHR3eC5uYXZpZ2F0ZVRvKHtcblx0XHRcdFx0XHRcdFx0XHR1cmw6ICcvcGFnZXMvbG9naW4vbG9naW4nXG5cdFx0XHRcdFx0XHRcdH0pXG5cdFx0XHRcdFx0XHR9XG5cdFx0XHRcdFx0fSk7XG5cdFx0XHRcdH1cblx0XHRcdFx0cmVzb2x2ZShyZXMuZGF0YSlcblx0XHRcdH0sXG5cdFx0XHRmYWlsKGVycikge1xuXHRcdFx0XHR3eC5oaWRlTG9hZGluZygpO1xuXHRcdFx0XHRyZWplY3QoZXJyKVxuXHRcdFx0fVxuXHRcdH0pXG5cdH0pXG59O1xuXG5leHBvcnQge2FqYXh9O1xuXG4iXX0=