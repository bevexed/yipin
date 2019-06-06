"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var index_1 = require("./api/index");
App({
    onLaunch: function () {
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
    },
    globalData: {}
});
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiYXBwLmpzIiwic291cmNlUm9vdCI6IiIsInNvdXJjZXMiOlsiYXBwLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7O0FBQUEscUNBQXNDO0FBV3RDLEdBQUcsQ0FBUztJQUNYLFFBQVEsRUFBUjtRQUVDLEVBQUUsQ0FBQyxLQUFLLENBQUM7WUFDUixPQUFPLEVBQVAsVUFBUSxHQUFHO2dCQUNWLE9BQU8sQ0FBQyxHQUFHLENBQUMsR0FBRyxDQUFDLElBQUksQ0FBQyxDQUFDO2dCQUN0QixpQkFBUyxDQUFDLEdBQUcsQ0FBQyxJQUFJLENBQUMsQ0FBQyxJQUFJLENBQ3ZCLFVBQUMsR0FBUTtvQkFDUixJQUFJLEdBQUcsQ0FBQyxJQUFJLEtBQUssQ0FBQyxFQUFFO3dCQUNuQixFQUFFLENBQUMsVUFBVSxDQUFDOzRCQUNiLEdBQUcsRUFBRSxRQUFROzRCQUNiLElBQUksRUFBRSxHQUFHLENBQUMsSUFBSSxDQUFDLE1BQU07NEJBQ3JCLE9BQU87NEJBQ1AsQ0FBQzs0QkFDRCxJQUFJOzRCQUNKLENBQUM7eUJBQ0QsQ0FBQyxDQUFBO3FCQUNGO3lCQUFNO3dCQUNOLE9BQU8sQ0FBQyxHQUFHLENBQUMsZ0JBQWdCLENBQUUsQ0FBQztxQkFDL0I7Z0JBQ0YsQ0FBQyxDQUNELENBQUE7WUFFRixDQUFDO1NBQ0QsQ0FBQyxDQUFDO0lBQ0osQ0FBQztJQUNELFVBQVUsRUFBRSxFQUFFO0NBQ2QsQ0FBQyxDQUFDIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHtyZXFPcGVuaWR9IGZyb20gXCIuL2FwaS9pbmRleFwiO1xuXG4vL2FwcC50c1xuZXhwb3J0IGludGVyZmFjZSBJTXlBcHAge1xuXHRnbG9iYWxEYXRhOiB7XG5cdFx0dXNlckluZm8/OiB3eC5Vc2VySW5mb1xuXHR9XG5cblx0dXNlckluZm9SZWFkeUNhbGxiYWNrPyhyZXM6IHd4LlVzZXJJbmZvKTogdm9pZFxufVxuXG5BcHA8SU15QXBwPih7XG5cdG9uTGF1bmNoKCkge1xuXHRcdC8vIOeZu+W9lVxuXHRcdHd4LmxvZ2luKHtcblx0XHRcdHN1Y2Nlc3MocmVzKSB7XG5cdFx0XHRcdGNvbnNvbGUubG9nKHJlcy5jb2RlKTtcblx0XHRcdFx0cmVxT3BlbmlkKHJlcy5jb2RlKS50aGVuKFxuXHRcdFx0XHRcdChyZXM6IGFueSkgPT4ge1xuXHRcdFx0XHRcdFx0aWYgKHJlcy5jb2RlID09PSAxKSB7XG5cdFx0XHRcdFx0XHRcdHd4LnNldFN0b3JhZ2Uoe1xuXHRcdFx0XHRcdFx0XHRcdGtleTogJ29wZW5pZCcsXG5cdFx0XHRcdFx0XHRcdFx0ZGF0YTogcmVzLmRhdGEub3BlbmlkLFxuXHRcdFx0XHRcdFx0XHRcdHN1Y2Nlc3MoKSB7XG5cdFx0XHRcdFx0XHRcdFx0fSxcblx0XHRcdFx0XHRcdFx0XHRmYWlsKCkge1xuXHRcdFx0XHRcdFx0XHRcdH1cblx0XHRcdFx0XHRcdFx0fSlcblx0XHRcdFx0XHRcdH0gZWxzZSB7XG5cdFx0XHRcdFx0XHRcdGNvbnNvbGUubG9nKCdyZXFPcGVuaWQgZmFpbCcsKTtcblx0XHRcdFx0XHRcdH1cblx0XHRcdFx0XHR9XG5cdFx0XHRcdClcblx0XHRcdFx0Ly8g5Y+R6YCBIF9yZXMuY29kZSDliLDlkI7lj7DmjaLlj5Ygb3BlbklkLCBzZXNzaW9uS2V5LCB1bmlvbklkXG5cdFx0XHR9XG5cdFx0fSk7XG5cdH0sXG5cdGdsb2JhbERhdGE6IHt9XG59KTtcbiJdfQ==