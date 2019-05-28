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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiY29tcGxldGUuanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyJjb21wbGV0ZS50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOztBQUFBLHNDQUFxQztBQUVyQyxJQUFJLENBQUM7SUFDSixJQUFJLEVBQUU7UUFDTCxLQUFLLEVBQUUsRUFBRTtRQUNULElBQUksRUFBRSxFQUFFO1FBQ1IsT0FBTyxFQUFFLE9BQU87UUFDaEIsSUFBSSxFQUFFLEVBQUU7UUFDUixLQUFLLEVBQUUsQ0FBQztRQUNSLE1BQU0sRUFBRSxFQUFFO0tBQ1Y7SUFDRCxXQUFXLEVBQUUsVUFBVSxDQUFLO1FBQzNCLE9BQU8sQ0FBQyxHQUFHLENBQUMsQ0FBQyxDQUFDLENBQUM7UUFDZixJQUFJLENBQUMsT0FBUSxDQUFDO1lBQ2IsS0FBSyxFQUFFLENBQUMsQ0FBQyxNQUFNLENBQUMsS0FBSztTQUNyQixDQUFDLENBQUM7SUFDSixDQUFDO0lBQ0QsVUFBVSxFQUFFLFVBQVUsQ0FBSztRQUMxQixPQUFPLENBQUMsR0FBRyxDQUFDLENBQUMsQ0FBQyxDQUFDO1FBQ2YsSUFBSSxDQUFDLE9BQVEsQ0FBQztZQUNiLElBQUksRUFBRSxDQUFDLENBQUMsTUFBTSxDQUFDLEtBQUs7U0FDcEIsQ0FBQyxDQUFDO1FBQ0gsT0FBTyxDQUFDLEdBQUcsQ0FBQyxJQUFJLENBQUMsSUFBSSxDQUFDLElBQUksQ0FBQyxDQUFDO0lBQzdCLENBQUM7SUFDRCxTQUFTLEVBQUU7UUFDVixJQUFJLEtBQUssR0FBRyxJQUFJLENBQUM7UUFDakIsSUFBSSxFQUFFLEdBQUcsSUFBSSxDQUFDLElBQUksRUFBRSxJQUFJLEdBQUcsRUFBRSxDQUFDLElBQUksRUFBRSxLQUFLLEdBQUcsRUFBRSxDQUFDLEtBQUssQ0FBQztRQUNyRCxJQUFJLEtBQUssS0FBSyxDQUFDLEVBQUU7WUFDaEIsT0FBTztTQUNQO1FBRUQsSUFBTSxNQUFNLEdBQUcsSUFBSSxDQUFDLElBQUksQ0FBQyxLQUFLLENBQUM7UUFDL0IsSUFBTSxJQUFJLEdBQUcsZUFBZSxDQUFDO1FBQzdCLGVBQU8sQ0FBQyxFQUFDLElBQUksTUFBQSxFQUFFLE1BQU0sUUFBQSxFQUFDLENBQUMsQ0FBQyxJQUFJLENBQzNCLFVBQUMsR0FBUTtZQUNSLElBQUksR0FBRyxDQUFDLElBQUksS0FBSyxDQUFDLEVBQUU7Z0JBRW5CLEtBQUssR0FBRyxXQUFXLENBQUM7b0JBQ25CLElBQUksSUFBSSxLQUFLLENBQUMsRUFBRTt3QkFDZixhQUFhLENBQUMsS0FBSyxDQUFDLENBQUM7d0JBQ3JCLEtBQUssQ0FBQyxPQUFRLENBQUM7NEJBQ2QsS0FBSyxFQUFFLENBQUM7NEJBQ1IsSUFBSSxFQUFFLEVBQUU7NEJBQ1IsT0FBTyxFQUFFLE9BQU87NEJBQ2hCLE1BQU0sRUFBRSxFQUFFO3lCQUNWLENBQUMsQ0FBQzt3QkFDSCxPQUFPO3FCQUNQO29CQUNELElBQUksRUFBRSxDQUFDO29CQUNQLEtBQUssQ0FBQyxPQUFRLENBQUM7d0JBQ2QsT0FBTyxFQUFFLElBQUksR0FBRyxHQUFHO3dCQUNuQixLQUFLLEVBQUUsS0FBSzt3QkFDWixNQUFNLEVBQUUsUUFBUTtxQkFDaEIsQ0FBQyxDQUFDO2dCQUNKLENBQUMsRUFBRSxJQUFJLENBQUMsQ0FBQzthQUNUO1FBQ0YsQ0FBQyxDQUNELENBQUM7SUFHSCxDQUFDO0lBQ0QsT0FBTyxFQUFFO1FBQ1IsRUFBRSxDQUFDLFVBQVUsQ0FBQztZQUNiLEdBQUcsRUFBRSxvQkFBb0I7U0FDekIsQ0FBQyxDQUFDO0lBQ0osQ0FBQztDQUNELENBQUMsQ0FBQyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7c2VuZE1zZ30gZnJvbSBcIi4uL2FwaS9pbmRleFwiO1xuXG5QYWdlKHtcblx0ZGF0YToge1xuXHRcdHBob25lOiAnJyxcblx0XHRjb2RlOiAnJyxcblx0XHRtc2dEYXRhOiAn6I635Y+W6aqM6K+B56CBJyxcblx0XHR0aW1lOiA2MCxcblx0XHR0aW1lcjogMCxcblx0XHRhY3RpdmU6ICcnXG5cdH0sXG5cdGNoYW5nZVBob25lOiBmdW5jdGlvbiAoZTphbnkpIHtcblx0XHRjb25zb2xlLmxvZyhlKTtcblx0XHR0aGlzLnNldERhdGEhKHtcblx0XHRcdHBob25lOiBlLmRldGFpbC52YWx1ZVxuXHRcdH0pO1xuXHR9LFxuXHRjaGFuZ2VDb2RlOiBmdW5jdGlvbiAoZTphbnkpIHtcblx0XHRjb25zb2xlLmxvZyhlKTtcblx0XHR0aGlzLnNldERhdGEhKHtcblx0XHRcdGNvZGU6IGUuZGV0YWlsLnZhbHVlXG5cdFx0fSk7XG5cdFx0Y29uc29sZS5sb2codGhpcy5kYXRhLmNvZGUpO1xuXHR9LFxuXHRkb1NlbmRNc2c6IGZ1bmN0aW9uICgpIHtcblx0XHR2YXIgX3RoaXMgPSB0aGlzO1xuXHRcdHZhciBfYSA9IHRoaXMuZGF0YSwgdGltZSA9IF9hLnRpbWUsIHRpbWVyID0gX2EudGltZXI7XG5cdFx0aWYgKHRpbWVyICE9PSAwKSB7XG5cdFx0XHRyZXR1cm47XG5cdFx0fVxuXG5cdFx0Y29uc3QgbW9iaWxlID0gdGhpcy5kYXRhLnBob25lO1xuXHRcdGNvbnN0IHR5cGUgPSAnU01TXzE2NjMyMDM0OCc7XG5cdFx0c2VuZE1zZyh7dHlwZSwgbW9iaWxlfSkudGhlbihcblx0XHRcdChyZXM6IGFueSkgPT4ge1xuXHRcdFx0XHRpZiAocmVzLmNvZGUgPT09IDEpIHtcblxuXHRcdFx0XHRcdHRpbWVyID0gc2V0SW50ZXJ2YWwoZnVuY3Rpb24gKCkge1xuXHRcdFx0XHRcdFx0aWYgKHRpbWUgPT09IDApIHtcblx0XHRcdFx0XHRcdFx0Y2xlYXJJbnRlcnZhbCh0aW1lcik7XG5cdFx0XHRcdFx0XHRcdF90aGlzLnNldERhdGEhKHtcblx0XHRcdFx0XHRcdFx0XHR0aW1lcjogMCxcblx0XHRcdFx0XHRcdFx0XHR0aW1lOiA2MCxcblx0XHRcdFx0XHRcdFx0XHRtc2dEYXRhOiAn6I635Y+W6aqM6K+B56CBJyxcblx0XHRcdFx0XHRcdFx0XHRhY3RpdmU6ICcnXG5cdFx0XHRcdFx0XHRcdH0pO1xuXHRcdFx0XHRcdFx0XHRyZXR1cm47XG5cdFx0XHRcdFx0XHR9XG5cdFx0XHRcdFx0XHR0aW1lLS07XG5cdFx0XHRcdFx0XHRfdGhpcy5zZXREYXRhISh7XG5cdFx0XHRcdFx0XHRcdG1zZ0RhdGE6IHRpbWUgKyAncycsXG5cdFx0XHRcdFx0XHRcdHRpbWVyOiB0aW1lcixcblx0XHRcdFx0XHRcdFx0YWN0aXZlOiAnYWN0aXZlJ1xuXHRcdFx0XHRcdFx0fSk7XG5cdFx0XHRcdFx0fSwgMTAwMCk7XG5cdFx0XHRcdH1cblx0XHRcdH1cblx0XHQpO1xuXG5cblx0fSxcblx0dG9JbmRleDogZnVuY3Rpb24gKCkge1xuXHRcdHd4Lm5hdmlnYXRlVG8oe1xuXHRcdFx0dXJsOiAnL3BhZ2VzL2luZGV4L2luZGV4J1xuXHRcdH0pO1xuXHR9XG59KTtcbiJdfQ==