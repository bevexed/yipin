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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoibG9naW4uanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyJsb2dpbi50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOztBQUFBLHlDQUFzRDtBQUV0RCxJQUFJLENBQUM7SUFDSixJQUFJLEVBQUUsRUFBRTtJQUVSLEtBQUs7UUFDSixJQUFJLElBQUksR0FBRztZQUNWLE1BQU0sRUFBRSxTQUFTLEVBQUUsS0FBSyxFQUFFLFlBQVksRUFBRSxRQUFRLEVBQUUsU0FBUyxFQUFFLElBQUksRUFBRSxTQUFTO1NBQzVFLENBQUM7UUFHRixtQkFBVyxDQUFDLElBQUksQ0FBQyxDQUFDLElBQUksQ0FDckIsVUFBQSxHQUFHO1lBQ0YsT0FBTyxDQUFDLEdBQUcsQ0FBQyxHQUFHLENBQUMsQ0FBQztZQUNqQixFQUFFLENBQUMsU0FBUyxDQUFDO2dCQUNaLEdBQUcsRUFBRSxvQkFBb0I7YUFDekIsQ0FBQyxDQUFBO1FBQ0gsQ0FBQyxDQUNELENBQUM7UUFFRixnQkFBUSxDQUFDLEVBQUMsSUFBSSxFQUFFLENBQUMsRUFBRSxNQUFNLEVBQUUsV0FBVyxFQUFDLENBQUMsQ0FBQyxJQUFJLENBQzVDLFVBQUEsR0FBRztZQUNGLE9BQU8sQ0FBQyxHQUFHLENBQUMsT0FBTyxFQUFDLEdBQUcsQ0FBQyxDQUFDO1lBQ3pCLElBQUksR0FBRyxDQUFDLElBQUksS0FBSyxDQUFDLEVBQUU7Z0JBQ25CLEVBQUUsQ0FBQyxjQUFjLENBQ2hCLE9BQU8sRUFDTixHQUFHLENBQUMsSUFBSSxDQUNULENBQUE7YUFDRDtRQUNGLENBQUMsQ0FDRCxDQUFDO0lBRUgsQ0FBQztJQUVELE1BQU07SUFFTixDQUFDO0NBQ0QsQ0FBQyxDQUFDIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHtyZXFMb2dpbiwgcmVxUmVnaXN0ZXJ9IGZyb20gXCIuLi8uLi9hcGkvaW5kZXhcIjtcclxuXHJcblBhZ2Uoe1xyXG5cdGRhdGE6IHt9LFxyXG5cclxuXHRsb2dpbigpIHtcclxuXHRcdGxldCBkYXRhID0ge1xyXG5cdFx0XHRvcGVuaWQ6IDEyMzQ1Njc4OSwgcGhvbmU6IDEyMzEyMzEyMzEyMywgcGFzc3dvcmQ6IDEyMzEyMzEyMywgY29kZTogMTIzMjEzMTIzXHJcblx0XHR9O1xyXG5cclxuXHJcblx0XHRyZXFSZWdpc3RlcihkYXRhKS50aGVuKFxyXG5cdFx0XHRyZXMgPT4ge1xyXG5cdFx0XHRcdGNvbnNvbGUubG9nKHJlcyk7XHJcblx0XHRcdFx0d3guc3dpdGNoVGFiKHtcclxuXHRcdFx0XHRcdHVybDogJy9wYWdlcy9pbmRleC9pbmRleCdcclxuXHRcdFx0XHR9KVxyXG5cdFx0XHR9XHJcblx0XHQpO1xyXG5cclxuXHRcdHJlcUxvZ2luKHt0eXBlOiAxLCBvcGVuaWQ6ICcxMjM0NTY3ODknfSkudGhlbihcclxuXHRcdFx0cmVzID0+IHtcclxuXHRcdFx0XHRjb25zb2xlLmxvZygndG9rZW4nLHJlcyk7XHJcblx0XHRcdFx0aWYgKHJlcy5jb2RlID09PSAxKSB7XHJcblx0XHRcdFx0XHR3eC5zZXRTdG9yYWdlU3luYyhcclxuXHRcdFx0XHRcdFx0J3Rva2VuJyxcclxuXHRcdFx0XHRcdFx0IHJlcy5kYXRhXHJcblx0XHRcdFx0XHQpXHJcblx0XHRcdFx0fVxyXG5cdFx0XHR9XHJcblx0XHQpO1xyXG5cclxuXHR9LFxyXG5cclxuXHRvbkxvYWQoKSB7XHJcblxyXG5cdH1cclxufSk7XHJcbiJdfQ==