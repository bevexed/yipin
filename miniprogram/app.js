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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiYXBwLmpzIiwic291cmNlUm9vdCI6IiIsInNvdXJjZXMiOlsiYXBwLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7O0FBQUEscUNBQXNDO0FBV3RDLEdBQUcsQ0FBUztJQUNYLFFBQVEsRUFBUjtRQUdDLEVBQUUsQ0FBQyxLQUFLLENBQUM7WUFDUixPQUFPLEVBQVAsVUFBUSxHQUFHO2dCQUNWLE9BQU8sQ0FBQyxHQUFHLENBQUMsR0FBRyxDQUFDLElBQUksQ0FBQyxDQUFDO2dCQUN0QixpQkFBUyxDQUFDLEdBQUcsQ0FBQyxJQUFJLENBQUMsQ0FBQyxJQUFJLENBQ3ZCLFVBQUMsR0FBUTtvQkFDUixJQUFJLEdBQUcsQ0FBQyxJQUFJLEtBQUssQ0FBQyxFQUFFO3dCQUNuQixFQUFFLENBQUMsVUFBVSxDQUFDOzRCQUNiLEdBQUcsRUFBRSxRQUFROzRCQUNiLElBQUksRUFBRSxHQUFHLENBQUMsSUFBSSxDQUFDLE1BQU07NEJBQ3JCLE9BQU87NEJBQ1AsQ0FBQzs0QkFDRCxJQUFJOzRCQUNKLENBQUM7eUJBQ0QsQ0FBQyxDQUFBO3FCQUNGO3lCQUFNO3dCQUNOLE9BQU8sQ0FBQyxHQUFHLENBQUMsZ0JBQWdCLENBQUUsQ0FBQztxQkFDL0I7Z0JBQ0YsQ0FBQyxDQUNELENBQUE7WUFFRixDQUFDO1NBQ0QsQ0FBQyxDQUFDO0lBQ0osQ0FBQztJQUNELFVBQVUsRUFBRSxFQUFFO0NBQ2QsQ0FBQyxDQUFDIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHtyZXFPcGVuaWR9IGZyb20gXCIuL2FwaS9pbmRleFwiO1xuXG4vL2FwcC50c1xuZXhwb3J0IGludGVyZmFjZSBJTXlBcHAge1xuXHRnbG9iYWxEYXRhOiB7XG5cdFx0dXNlckluZm8/OiB3eC5Vc2VySW5mb1xuXHR9XG5cblx0dXNlckluZm9SZWFkeUNhbGxiYWNrPyhyZXM6IHd4LlVzZXJJbmZvKTogdm9pZFxufVxuXG5BcHA8SU15QXBwPih7XG5cdG9uTGF1bmNoKCkge1xuXG5cdFx0Ly8g55m75b2VXG5cdFx0d3gubG9naW4oe1xuXHRcdFx0c3VjY2VzcyhyZXMpIHtcblx0XHRcdFx0Y29uc29sZS5sb2cocmVzLmNvZGUpO1xuXHRcdFx0XHRyZXFPcGVuaWQocmVzLmNvZGUpLnRoZW4oXG5cdFx0XHRcdFx0KHJlczogYW55KSA9PiB7XG5cdFx0XHRcdFx0XHRpZiAocmVzLmNvZGUgPT09IDEpIHtcblx0XHRcdFx0XHRcdFx0d3guc2V0U3RvcmFnZSh7XG5cdFx0XHRcdFx0XHRcdFx0a2V5OiAnb3BlbmlkJyxcblx0XHRcdFx0XHRcdFx0XHRkYXRhOiByZXMuZGF0YS5vcGVuaWQsXG5cdFx0XHRcdFx0XHRcdFx0c3VjY2VzcygpIHtcblx0XHRcdFx0XHRcdFx0XHR9LFxuXHRcdFx0XHRcdFx0XHRcdGZhaWwoKSB7XG5cdFx0XHRcdFx0XHRcdFx0fVxuXHRcdFx0XHRcdFx0XHR9KVxuXHRcdFx0XHRcdFx0fSBlbHNlIHtcblx0XHRcdFx0XHRcdFx0Y29uc29sZS5sb2coJ3JlcU9wZW5pZCBmYWlsJywpO1xuXHRcdFx0XHRcdFx0fVxuXHRcdFx0XHRcdH1cblx0XHRcdFx0KVxuXHRcdFx0XHQvLyDlj5HpgIEgX3Jlcy5jb2RlIOWIsOWQjuWPsOaNouWPliBvcGVuSWQsIHNlc3Npb25LZXksIHVuaW9uSWRcblx0XHRcdH1cblx0XHR9KTtcblx0fSxcblx0Z2xvYmFsRGF0YToge31cbn0pO1xuIl19