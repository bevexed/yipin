"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var index_1 = require("../../api/index");
Page({
    data: {},
    login: function () {
        var data = {
            openid: 123456789, phone: 123123123123, password: 123123123, code: 123213123
        };
        index_1.reqRegister(data).then(function (res) {
            console.log(res);
            wx.switchTab({
                url: '/pages/index/index'
            });
        });
        index_1.reqLogin({ type: 1, openid: '123456789' }).then(function (res) {
            console.log('token', res);
            if (res.code === 1) {
                wx.setStorageSync('token', res.data);
            }
        });
    },
    onLoad: function () {
    }
});
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoibG9naW4uanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyJsb2dpbi50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOztBQUFBLHlDQUFzRDtBQUV0RCxJQUFJLENBQUM7SUFDSixJQUFJLEVBQUUsRUFBRTtJQUVSLEtBQUs7UUFDSixJQUFJLElBQUksR0FBRztZQUNWLE1BQU0sRUFBRSxTQUFTLEVBQUUsS0FBSyxFQUFFLFlBQVksRUFBRSxRQUFRLEVBQUUsU0FBUyxFQUFFLElBQUksRUFBRSxTQUFTO1NBQzVFLENBQUM7UUFHRixtQkFBVyxDQUFDLElBQUksQ0FBQyxDQUFDLElBQUksQ0FDckIsVUFBQSxHQUFHO1lBQ0YsT0FBTyxDQUFDLEdBQUcsQ0FBQyxHQUFHLENBQUMsQ0FBQztZQUNqQixFQUFFLENBQUMsU0FBUyxDQUFDO2dCQUNaLEdBQUcsRUFBRSxvQkFBb0I7YUFDekIsQ0FBQyxDQUFBO1FBQ0gsQ0FBQyxDQUNELENBQUM7UUFFRixnQkFBUSxDQUFDLEVBQUMsSUFBSSxFQUFFLENBQUMsRUFBRSxNQUFNLEVBQUUsV0FBVyxFQUFDLENBQUMsQ0FBQyxJQUFJLENBQzVDLFVBQUEsR0FBRztZQUNGLE9BQU8sQ0FBQyxHQUFHLENBQUMsT0FBTyxFQUFDLEdBQUcsQ0FBQyxDQUFDO1lBQ3pCLElBQUksR0FBRyxDQUFDLElBQUksS0FBSyxDQUFDLEVBQUU7Z0JBQ25CLEVBQUUsQ0FBQyxjQUFjLENBQ2hCLE9BQU8sRUFDTixHQUFHLENBQUMsSUFBSSxDQUNULENBQUE7YUFDRDtRQUNGLENBQUMsQ0FDRCxDQUFDO0lBRUgsQ0FBQztJQUVELE1BQU07SUFFTixDQUFDO0NBQ0QsQ0FBQyxDQUFDIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHtyZXFMb2dpbiwgcmVxUmVnaXN0ZXJ9IGZyb20gXCIuLi8uLi9hcGkvaW5kZXhcIjtcblxuUGFnZSh7XG5cdGRhdGE6IHt9LFxuXG5cdGxvZ2luKCkge1xuXHRcdGxldCBkYXRhID0ge1xuXHRcdFx0b3BlbmlkOiAxMjM0NTY3ODksIHBob25lOiAxMjMxMjMxMjMxMjMsIHBhc3N3b3JkOiAxMjMxMjMxMjMsIGNvZGU6IDEyMzIxMzEyM1xuXHRcdH07XG5cblxuXHRcdHJlcVJlZ2lzdGVyKGRhdGEpLnRoZW4oXG5cdFx0XHRyZXMgPT4ge1xuXHRcdFx0XHRjb25zb2xlLmxvZyhyZXMpO1xuXHRcdFx0XHR3eC5zd2l0Y2hUYWIoe1xuXHRcdFx0XHRcdHVybDogJy9wYWdlcy9pbmRleC9pbmRleCdcblx0XHRcdFx0fSlcblx0XHRcdH1cblx0XHQpO1xuXG5cdFx0cmVxTG9naW4oe3R5cGU6IDEsIG9wZW5pZDogJzEyMzQ1Njc4OSd9KS50aGVuKFxuXHRcdFx0cmVzID0+IHtcblx0XHRcdFx0Y29uc29sZS5sb2coJ3Rva2VuJyxyZXMpO1xuXHRcdFx0XHRpZiAocmVzLmNvZGUgPT09IDEpIHtcblx0XHRcdFx0XHR3eC5zZXRTdG9yYWdlU3luYyhcblx0XHRcdFx0XHRcdCd0b2tlbicsXG5cdFx0XHRcdFx0XHQgcmVzLmRhdGFcblx0XHRcdFx0XHQpXG5cdFx0XHRcdH1cblx0XHRcdH1cblx0XHQpO1xuXG5cdH0sXG5cblx0b25Mb2FkKCkge1xuXG5cdH1cbn0pO1xuIl19