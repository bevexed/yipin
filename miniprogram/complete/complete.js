"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var index_1 = require("../api/index");
Page({
    data: {
        phone: '',
        code: '',
        msgData: '获取验证码',
        time: 60,
        timer: 0,
        active: '',
        openid: ''
    },
    onLoad: function () {
        var _this = this;
        wx.getStorage({
            key: 'openid',
            success: function (res) {
                console.log(res);
                _this.setData({
                    openid: res.data
                });
            }
        });
    },
    doLogin: function () {
        var _b = this.data, openid = _b.openid, phone = _b.phone, code = _b.code;
        if (!openid || !phone || !code) {
            wx.showToast({
                title: '请检查表单',
                icon: "none"
            });
        }
        var data = {
            openid: openid, phone: phone, password: 123456, code: code
        };
        index_1.reqRegister(data).then(function (res) {
            console.log(res);
            if (res.code === 1) {
                wx.switchTab({
                    url: '/pages/index/index'
                });
            }
            else {
                wx.showToast({
                    title: res.message,
                    icon: "none"
                });
            }
        });
    },
    changePhone: function (e) {
        console.log(e);
        this.setData({
            phone: e.detail.value
        });
    },
    changeCode: function (e) {
        console.log(e);
        this.setData({
            code: e.detail.value
        });
        console.log(this.data.code);
    },
    doSendMsg: function () {
        var _this = this;
        var _a = this.data, time = _a.time, timer = _a.timer;
        if (timer !== 0) {
            return;
        }
        var mobile = this.data.phone;
        var type = 'SMS_166320348';
        if (!mobile) {
            wx.showToast({
                title: '请先填写手机号',
                icon: "none"
            });
            return;
        }
        index_1.sendMsg({ type: type, mobile: mobile }).then(function (res) {
            if (res.code === 1) {
                timer = setInterval(function () {
                    if (time === 0) {
                        clearInterval(timer);
                        _this.setData({
                            timer: 0,
                            time: 60,
                            msgData: '获取验证码',
                            active: ''
                        });
                        return;
                    }
                    time--;
                    _this.setData({
                        msgData: time + 's',
                        timer: timer,
                        active: 'active'
                    });
                }, 1000);
            }
        });
    },
});
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiY29tcGxldGUuanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyJjb21wbGV0ZS50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOztBQUFBLHNDQUFrRDtBQUVsRCxJQUFJLENBQUM7SUFDSixJQUFJLEVBQUU7UUFDTCxLQUFLLEVBQUUsRUFBRTtRQUNULElBQUksRUFBRSxFQUFFO1FBQ1IsT0FBTyxFQUFFLE9BQU87UUFDaEIsSUFBSSxFQUFFLEVBQUU7UUFDUixLQUFLLEVBQUUsQ0FBQztRQUNSLE1BQU0sRUFBRSxFQUFFO1FBQ1YsTUFBTSxFQUFFLEVBQUU7S0FDVjtJQUVELE1BQU0sRUFBTjtRQUNDLElBQU0sS0FBSyxHQUFHLElBQUksQ0FBQztRQUNuQixFQUFFLENBQUMsVUFBVSxDQUFDO1lBQ2IsR0FBRyxFQUFFLFFBQVE7WUFDYixPQUFPLEVBQVAsVUFBUSxHQUFHO2dCQUNWLE9BQU8sQ0FBQyxHQUFHLENBQUMsR0FBRyxDQUFDLENBQUM7Z0JBQ2pCLEtBQUssQ0FBQyxPQUFRLENBQUM7b0JBQ2QsTUFBTSxFQUFFLEdBQUcsQ0FBQyxJQUFJO2lCQUNoQixDQUFDLENBQUE7WUFDSCxDQUFDO1NBQ0QsQ0FBQyxDQUFBO0lBQ0gsQ0FBQztJQUVELE9BQU87UUFDQSxJQUFBLGNBQWlDLEVBQWhDLGtCQUFNLEVBQUUsZ0JBQUssRUFBRSxjQUFpQixDQUFDO1FBRXhDLElBQUksQ0FBQyxNQUFNLElBQUksQ0FBQyxLQUFLLElBQUksQ0FBQyxJQUFJLEVBQUU7WUFDL0IsRUFBRSxDQUFDLFNBQVMsQ0FBQztnQkFDWixLQUFLLEVBQUUsT0FBTztnQkFDZCxJQUFJLEVBQUUsTUFBTTthQUNaLENBQUMsQ0FBQTtTQUNGO1FBRUQsSUFBSSxJQUFJLEdBQUc7WUFDVixNQUFNLFFBQUEsRUFBRSxLQUFLLE9BQUEsRUFBRSxRQUFRLEVBQUUsTUFBTSxFQUFFLElBQUksTUFBQTtTQUNyQyxDQUFDO1FBR0YsbUJBQVcsQ0FBQyxJQUFJLENBQUMsQ0FBQyxJQUFJLENBQ3JCLFVBQUEsR0FBRztZQUNGLE9BQU8sQ0FBQyxHQUFHLENBQUMsR0FBRyxDQUFDLENBQUM7WUFDakIsSUFBSSxHQUFHLENBQUMsSUFBSSxLQUFLLENBQUMsRUFBRTtnQkFDbkIsRUFBRSxDQUFDLFNBQVMsQ0FBQztvQkFDWixHQUFHLEVBQUUsb0JBQW9CO2lCQUN6QixDQUFDLENBQUE7YUFDRjtpQkFBTTtnQkFDTixFQUFFLENBQUMsU0FBUyxDQUFDO29CQUNaLEtBQUssRUFBRSxHQUFHLENBQUMsT0FBTztvQkFDbEIsSUFBSSxFQUFFLE1BQU07aUJBQ1osQ0FBQyxDQUFBO2FBQ0Y7UUFHRixDQUFDLENBQ0QsQ0FBQztJQUNILENBQUM7SUFDRCxXQUFXLEVBQUUsVUFBVSxDQUFNO1FBQzVCLE9BQU8sQ0FBQyxHQUFHLENBQUMsQ0FBQyxDQUFDLENBQUM7UUFDZixJQUFJLENBQUMsT0FBUSxDQUFDO1lBQ2IsS0FBSyxFQUFFLENBQUMsQ0FBQyxNQUFNLENBQUMsS0FBSztTQUNyQixDQUFDLENBQUM7SUFDSixDQUFDO0lBQ0QsVUFBVSxFQUFFLFVBQVUsQ0FBTTtRQUMzQixPQUFPLENBQUMsR0FBRyxDQUFDLENBQUMsQ0FBQyxDQUFDO1FBQ2YsSUFBSSxDQUFDLE9BQVEsQ0FBQztZQUNiLElBQUksRUFBRSxDQUFDLENBQUMsTUFBTSxDQUFDLEtBQUs7U0FDcEIsQ0FBQyxDQUFDO1FBQ0gsT0FBTyxDQUFDLEdBQUcsQ0FBQyxJQUFJLENBQUMsSUFBSSxDQUFDLElBQUksQ0FBQyxDQUFDO0lBQzdCLENBQUM7SUFDRCxTQUFTLEVBQUU7UUFDVixJQUFJLEtBQUssR0FBRyxJQUFJLENBQUM7UUFDakIsSUFBSSxFQUFFLEdBQUcsSUFBSSxDQUFDLElBQUksRUFBRSxJQUFJLEdBQUcsRUFBRSxDQUFDLElBQUksRUFBRSxLQUFLLEdBQUcsRUFBRSxDQUFDLEtBQUssQ0FBQztRQUNyRCxJQUFJLEtBQUssS0FBSyxDQUFDLEVBQUU7WUFDaEIsT0FBTztTQUNQO1FBRUQsSUFBTSxNQUFNLEdBQUcsSUFBSSxDQUFDLElBQUksQ0FBQyxLQUFLLENBQUM7UUFDL0IsSUFBTSxJQUFJLEdBQUcsZUFBZSxDQUFDO1FBRTdCLElBQUksQ0FBQyxNQUFNLEVBQUU7WUFDWixFQUFFLENBQUMsU0FBUyxDQUFDO2dCQUNaLEtBQUssRUFBRSxTQUFTO2dCQUNoQixJQUFJLEVBQUUsTUFBTTthQUNaLENBQUMsQ0FBQTtZQUNGLE9BQU87U0FDUDtRQUVELGVBQU8sQ0FBQyxFQUFDLElBQUksTUFBQSxFQUFFLE1BQU0sUUFBQSxFQUFDLENBQUMsQ0FBQyxJQUFJLENBQzNCLFVBQUMsR0FBUTtZQUNSLElBQUksR0FBRyxDQUFDLElBQUksS0FBSyxDQUFDLEVBQUU7Z0JBRW5CLEtBQUssR0FBRyxXQUFXLENBQUM7b0JBQ25CLElBQUksSUFBSSxLQUFLLENBQUMsRUFBRTt3QkFDZixhQUFhLENBQUMsS0FBSyxDQUFDLENBQUM7d0JBQ3JCLEtBQUssQ0FBQyxPQUFRLENBQUM7NEJBQ2QsS0FBSyxFQUFFLENBQUM7NEJBQ1IsSUFBSSxFQUFFLEVBQUU7NEJBQ1IsT0FBTyxFQUFFLE9BQU87NEJBQ2hCLE1BQU0sRUFBRSxFQUFFO3lCQUNWLENBQUMsQ0FBQzt3QkFDSCxPQUFPO3FCQUNQO29CQUNELElBQUksRUFBRSxDQUFDO29CQUNQLEtBQUssQ0FBQyxPQUFRLENBQUM7d0JBQ2QsT0FBTyxFQUFFLElBQUksR0FBRyxHQUFHO3dCQUNuQixLQUFLLEVBQUUsS0FBSzt3QkFDWixNQUFNLEVBQUUsUUFBUTtxQkFDaEIsQ0FBQyxDQUFDO2dCQUNKLENBQUMsRUFBRSxJQUFJLENBQUMsQ0FBQzthQUNUO1FBQ0YsQ0FBQyxDQUNELENBQUM7SUFDSCxDQUFDO0NBQ0QsQ0FBQyxDQUFDIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHtyZXFSZWdpc3Rlciwgc2VuZE1zZ30gZnJvbSBcIi4uL2FwaS9pbmRleFwiO1xuXG5QYWdlKHtcblx0ZGF0YToge1xuXHRcdHBob25lOiAnJyxcblx0XHRjb2RlOiAnJyxcblx0XHRtc2dEYXRhOiAn6I635Y+W6aqM6K+B56CBJyxcblx0XHR0aW1lOiA2MCxcblx0XHR0aW1lcjogMCxcblx0XHRhY3RpdmU6ICcnLFxuXHRcdG9wZW5pZDogJydcblx0fSxcblxuXHRvbkxvYWQoKSB7XG5cdFx0Y29uc3QgX3RoaXMgPSB0aGlzO1xuXHRcdHd4LmdldFN0b3JhZ2Uoe1xuXHRcdFx0a2V5OiAnb3BlbmlkJyxcblx0XHRcdHN1Y2Nlc3MocmVzKSB7XG5cdFx0XHRcdGNvbnNvbGUubG9nKHJlcyk7XG5cdFx0XHRcdF90aGlzLnNldERhdGEhKHtcblx0XHRcdFx0XHRvcGVuaWQ6IHJlcy5kYXRhXG5cdFx0XHRcdH0pXG5cdFx0XHR9XG5cdFx0fSlcblx0fSxcblxuXHRkb0xvZ2luKCkge1xuXHRcdGNvbnN0IHtvcGVuaWQsIHBob25lLCBjb2RlfSA9IHRoaXMuZGF0YTtcblxuXHRcdGlmICghb3BlbmlkIHx8ICFwaG9uZSB8fCAhY29kZSkge1xuXHRcdFx0d3guc2hvd1RvYXN0KHtcblx0XHRcdFx0dGl0bGU6ICfor7fmo4Dmn6XooajljZUnLFxuXHRcdFx0XHRpY29uOiBcIm5vbmVcIlxuXHRcdFx0fSlcblx0XHR9XG5cblx0XHRsZXQgZGF0YSA9IHtcblx0XHRcdG9wZW5pZCwgcGhvbmUsIHBhc3N3b3JkOiAxMjM0NTYsIGNvZGVcblx0XHR9O1xuXG5cblx0XHRyZXFSZWdpc3RlcihkYXRhKS50aGVuKFxuXHRcdFx0cmVzID0+IHtcblx0XHRcdFx0Y29uc29sZS5sb2cocmVzKTtcblx0XHRcdFx0aWYgKHJlcy5jb2RlID09PSAxKSB7XG5cdFx0XHRcdFx0d3guc3dpdGNoVGFiKHtcblx0XHRcdFx0XHRcdHVybDogJy9wYWdlcy9pbmRleC9pbmRleCdcblx0XHRcdFx0XHR9KVxuXHRcdFx0XHR9IGVsc2Uge1xuXHRcdFx0XHRcdHd4LnNob3dUb2FzdCh7XG5cdFx0XHRcdFx0XHR0aXRsZTogcmVzLm1lc3NhZ2UsXG5cdFx0XHRcdFx0XHRpY29uOiBcIm5vbmVcIlxuXHRcdFx0XHRcdH0pXG5cdFx0XHRcdH1cblxuXG5cdFx0XHR9XG5cdFx0KTtcblx0fSxcblx0Y2hhbmdlUGhvbmU6IGZ1bmN0aW9uIChlOiBhbnkpIHtcblx0XHRjb25zb2xlLmxvZyhlKTtcblx0XHR0aGlzLnNldERhdGEhKHtcblx0XHRcdHBob25lOiBlLmRldGFpbC52YWx1ZVxuXHRcdH0pO1xuXHR9LFxuXHRjaGFuZ2VDb2RlOiBmdW5jdGlvbiAoZTogYW55KSB7XG5cdFx0Y29uc29sZS5sb2coZSk7XG5cdFx0dGhpcy5zZXREYXRhISh7XG5cdFx0XHRjb2RlOiBlLmRldGFpbC52YWx1ZVxuXHRcdH0pO1xuXHRcdGNvbnNvbGUubG9nKHRoaXMuZGF0YS5jb2RlKTtcblx0fSxcblx0ZG9TZW5kTXNnOiBmdW5jdGlvbiAoKSB7XG5cdFx0dmFyIF90aGlzID0gdGhpcztcblx0XHR2YXIgX2EgPSB0aGlzLmRhdGEsIHRpbWUgPSBfYS50aW1lLCB0aW1lciA9IF9hLnRpbWVyO1xuXHRcdGlmICh0aW1lciAhPT0gMCkge1xuXHRcdFx0cmV0dXJuO1xuXHRcdH1cblxuXHRcdGNvbnN0IG1vYmlsZSA9IHRoaXMuZGF0YS5waG9uZTtcblx0XHRjb25zdCB0eXBlID0gJ1NNU18xNjYzMjAzNDgnO1xuXG5cdFx0aWYgKCFtb2JpbGUpIHtcblx0XHRcdHd4LnNob3dUb2FzdCh7XG5cdFx0XHRcdHRpdGxlOiAn6K+35YWI5aGr5YaZ5omL5py65Y+3Jyxcblx0XHRcdFx0aWNvbjogXCJub25lXCJcblx0XHRcdH0pXG5cdFx0XHRyZXR1cm47XG5cdFx0fVxuXG5cdFx0c2VuZE1zZyh7dHlwZSwgbW9iaWxlfSkudGhlbihcblx0XHRcdChyZXM6IGFueSkgPT4ge1xuXHRcdFx0XHRpZiAocmVzLmNvZGUgPT09IDEpIHtcblxuXHRcdFx0XHRcdHRpbWVyID0gc2V0SW50ZXJ2YWwoZnVuY3Rpb24gKCkge1xuXHRcdFx0XHRcdFx0aWYgKHRpbWUgPT09IDApIHtcblx0XHRcdFx0XHRcdFx0Y2xlYXJJbnRlcnZhbCh0aW1lcik7XG5cdFx0XHRcdFx0XHRcdF90aGlzLnNldERhdGEhKHtcblx0XHRcdFx0XHRcdFx0XHR0aW1lcjogMCxcblx0XHRcdFx0XHRcdFx0XHR0aW1lOiA2MCxcblx0XHRcdFx0XHRcdFx0XHRtc2dEYXRhOiAn6I635Y+W6aqM6K+B56CBJyxcblx0XHRcdFx0XHRcdFx0XHRhY3RpdmU6ICcnXG5cdFx0XHRcdFx0XHRcdH0pO1xuXHRcdFx0XHRcdFx0XHRyZXR1cm47XG5cdFx0XHRcdFx0XHR9XG5cdFx0XHRcdFx0XHR0aW1lLS07XG5cdFx0XHRcdFx0XHRfdGhpcy5zZXREYXRhISh7XG5cdFx0XHRcdFx0XHRcdG1zZ0RhdGE6IHRpbWUgKyAncycsXG5cdFx0XHRcdFx0XHRcdHRpbWVyOiB0aW1lcixcblx0XHRcdFx0XHRcdFx0YWN0aXZlOiAnYWN0aXZlJ1xuXHRcdFx0XHRcdFx0fSk7XG5cdFx0XHRcdFx0fSwgMTAwMCk7XG5cdFx0XHRcdH1cblx0XHRcdH1cblx0XHQpO1xuXHR9LFxufSk7XG4iXX0=