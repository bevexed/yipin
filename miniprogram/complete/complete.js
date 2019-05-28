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
        active: ''
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
    toIndex: function () {
        wx.navigateTo({
            url: '/pages/index/index'
        });
    }
});
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiY29tcGxldGUuanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyJjb21wbGV0ZS50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOztBQUFBLHNDQUFxQztBQUVyQyxJQUFJLENBQUM7SUFDSixJQUFJLEVBQUU7UUFDTCxLQUFLLEVBQUUsRUFBRTtRQUNULElBQUksRUFBRSxFQUFFO1FBQ1IsT0FBTyxFQUFFLE9BQU87UUFDaEIsSUFBSSxFQUFFLEVBQUU7UUFDUixLQUFLLEVBQUUsQ0FBQztRQUNSLE1BQU0sRUFBRSxFQUFFO0tBQ1Y7SUFDRCxXQUFXLEVBQUUsVUFBVSxDQUFLO1FBQzNCLE9BQU8sQ0FBQyxHQUFHLENBQUMsQ0FBQyxDQUFDLENBQUM7UUFDZixJQUFJLENBQUMsT0FBUSxDQUFDO1lBQ2IsS0FBSyxFQUFFLENBQUMsQ0FBQyxNQUFNLENBQUMsS0FBSztTQUNyQixDQUFDLENBQUM7SUFDSixDQUFDO0lBQ0QsVUFBVSxFQUFFLFVBQVUsQ0FBSztRQUMxQixPQUFPLENBQUMsR0FBRyxDQUFDLENBQUMsQ0FBQyxDQUFDO1FBQ2YsSUFBSSxDQUFDLE9BQVEsQ0FBQztZQUNiLElBQUksRUFBRSxDQUFDLENBQUMsTUFBTSxDQUFDLEtBQUs7U0FDcEIsQ0FBQyxDQUFDO1FBQ0gsT0FBTyxDQUFDLEdBQUcsQ0FBQyxJQUFJLENBQUMsSUFBSSxDQUFDLElBQUksQ0FBQyxDQUFDO0lBQzdCLENBQUM7SUFDRCxTQUFTLEVBQUU7UUFDVixJQUFJLEtBQUssR0FBRyxJQUFJLENBQUM7UUFDakIsSUFBSSxFQUFFLEdBQUcsSUFBSSxDQUFDLElBQUksRUFBRSxJQUFJLEdBQUcsRUFBRSxDQUFDLElBQUksRUFBRSxLQUFLLEdBQUcsRUFBRSxDQUFDLEtBQUssQ0FBQztRQUNyRCxJQUFJLEtBQUssS0FBSyxDQUFDLEVBQUU7WUFDaEIsT0FBTztTQUNQO1FBRUQsSUFBTSxNQUFNLEdBQUcsSUFBSSxDQUFDLElBQUksQ0FBQyxLQUFLLENBQUM7UUFDL0IsSUFBTSxJQUFJLEdBQUcsZUFBZSxDQUFDO1FBQzdCLGVBQU8sQ0FBQyxFQUFDLElBQUksTUFBQSxFQUFFLE1BQU0sUUFBQSxFQUFDLENBQUMsQ0FBQyxJQUFJLENBQzNCLFVBQUMsR0FBUTtZQUNSLElBQUksR0FBRyxDQUFDLElBQUksS0FBSyxDQUFDLEVBQUU7Z0JBRW5CLEtBQUssR0FBRyxXQUFXLENBQUM7b0JBQ25CLElBQUksSUFBSSxLQUFLLENBQUMsRUFBRTt3QkFDZixhQUFhLENBQUMsS0FBSyxDQUFDLENBQUM7d0JBQ3JCLEtBQUssQ0FBQyxPQUFRLENBQUM7NEJBQ2QsS0FBSyxFQUFFLENBQUM7NEJBQ1IsSUFBSSxFQUFFLEVBQUU7NEJBQ1IsT0FBTyxFQUFFLE9BQU87NEJBQ2hCLE1BQU0sRUFBRSxFQUFFO3lCQUNWLENBQUMsQ0FBQzt3QkFDSCxPQUFPO3FCQUNQO29CQUNELElBQUksRUFBRSxDQUFDO29CQUNQLEtBQUssQ0FBQyxPQUFRLENBQUM7d0JBQ2QsT0FBTyxFQUFFLElBQUksR0FBRyxHQUFHO3dCQUNuQixLQUFLLEVBQUUsS0FBSzt3QkFDWixNQUFNLEVBQUUsUUFBUTtxQkFDaEIsQ0FBQyxDQUFDO2dCQUNKLENBQUMsRUFBRSxJQUFJLENBQUMsQ0FBQzthQUNUO1FBQ0YsQ0FBQyxDQUNELENBQUM7SUFHSCxDQUFDO0lBQ0QsT0FBTyxFQUFFO1FBQ1IsRUFBRSxDQUFDLFVBQVUsQ0FBQztZQUNiLEdBQUcsRUFBRSxvQkFBb0I7U0FDekIsQ0FBQyxDQUFDO0lBQ0osQ0FBQztDQUNELENBQUMsQ0FBQyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7c2VuZE1zZ30gZnJvbSBcIi4uL2FwaS9pbmRleFwiO1xyXG5cclxuUGFnZSh7XHJcblx0ZGF0YToge1xyXG5cdFx0cGhvbmU6ICcnLFxyXG5cdFx0Y29kZTogJycsXHJcblx0XHRtc2dEYXRhOiAn6I635Y+W6aqM6K+B56CBJyxcclxuXHRcdHRpbWU6IDYwLFxyXG5cdFx0dGltZXI6IDAsXHJcblx0XHRhY3RpdmU6ICcnXHJcblx0fSxcclxuXHRjaGFuZ2VQaG9uZTogZnVuY3Rpb24gKGU6YW55KSB7XHJcblx0XHRjb25zb2xlLmxvZyhlKTtcclxuXHRcdHRoaXMuc2V0RGF0YSEoe1xyXG5cdFx0XHRwaG9uZTogZS5kZXRhaWwudmFsdWVcclxuXHRcdH0pO1xyXG5cdH0sXHJcblx0Y2hhbmdlQ29kZTogZnVuY3Rpb24gKGU6YW55KSB7XHJcblx0XHRjb25zb2xlLmxvZyhlKTtcclxuXHRcdHRoaXMuc2V0RGF0YSEoe1xyXG5cdFx0XHRjb2RlOiBlLmRldGFpbC52YWx1ZVxyXG5cdFx0fSk7XHJcblx0XHRjb25zb2xlLmxvZyh0aGlzLmRhdGEuY29kZSk7XHJcblx0fSxcclxuXHRkb1NlbmRNc2c6IGZ1bmN0aW9uICgpIHtcclxuXHRcdHZhciBfdGhpcyA9IHRoaXM7XHJcblx0XHR2YXIgX2EgPSB0aGlzLmRhdGEsIHRpbWUgPSBfYS50aW1lLCB0aW1lciA9IF9hLnRpbWVyO1xyXG5cdFx0aWYgKHRpbWVyICE9PSAwKSB7XHJcblx0XHRcdHJldHVybjtcclxuXHRcdH1cclxuXHJcblx0XHRjb25zdCBtb2JpbGUgPSB0aGlzLmRhdGEucGhvbmU7XHJcblx0XHRjb25zdCB0eXBlID0gJ1NNU18xNjYzMjAzNDgnO1xyXG5cdFx0c2VuZE1zZyh7dHlwZSwgbW9iaWxlfSkudGhlbihcclxuXHRcdFx0KHJlczogYW55KSA9PiB7XHJcblx0XHRcdFx0aWYgKHJlcy5jb2RlID09PSAxKSB7XHJcblxyXG5cdFx0XHRcdFx0dGltZXIgPSBzZXRJbnRlcnZhbChmdW5jdGlvbiAoKSB7XHJcblx0XHRcdFx0XHRcdGlmICh0aW1lID09PSAwKSB7XHJcblx0XHRcdFx0XHRcdFx0Y2xlYXJJbnRlcnZhbCh0aW1lcik7XHJcblx0XHRcdFx0XHRcdFx0X3RoaXMuc2V0RGF0YSEoe1xyXG5cdFx0XHRcdFx0XHRcdFx0dGltZXI6IDAsXHJcblx0XHRcdFx0XHRcdFx0XHR0aW1lOiA2MCxcclxuXHRcdFx0XHRcdFx0XHRcdG1zZ0RhdGE6ICfojrflj5bpqozor4HnoIEnLFxyXG5cdFx0XHRcdFx0XHRcdFx0YWN0aXZlOiAnJ1xyXG5cdFx0XHRcdFx0XHRcdH0pO1xyXG5cdFx0XHRcdFx0XHRcdHJldHVybjtcclxuXHRcdFx0XHRcdFx0fVxyXG5cdFx0XHRcdFx0XHR0aW1lLS07XHJcblx0XHRcdFx0XHRcdF90aGlzLnNldERhdGEhKHtcclxuXHRcdFx0XHRcdFx0XHRtc2dEYXRhOiB0aW1lICsgJ3MnLFxyXG5cdFx0XHRcdFx0XHRcdHRpbWVyOiB0aW1lcixcclxuXHRcdFx0XHRcdFx0XHRhY3RpdmU6ICdhY3RpdmUnXHJcblx0XHRcdFx0XHRcdH0pO1xyXG5cdFx0XHRcdFx0fSwgMTAwMCk7XHJcblx0XHRcdFx0fVxyXG5cdFx0XHR9XHJcblx0XHQpO1xyXG5cclxuXHJcblx0fSxcclxuXHR0b0luZGV4OiBmdW5jdGlvbiAoKSB7XHJcblx0XHR3eC5uYXZpZ2F0ZVRvKHtcclxuXHRcdFx0dXJsOiAnL3BhZ2VzL2luZGV4L2luZGV4J1xyXG5cdFx0fSk7XHJcblx0fVxyXG59KTtcclxuIl19