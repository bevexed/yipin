"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var index_1 = require("./api/index");
App({
    onLaunch: function () {
        wx.login({
            success: function (res) {
                console.log(res.code);
                index_1.reqOpenid(res.code).then(function (res) {
                    console.log(res);
                    wx.setStorage({
                        key: 'openid',
                        data: res.data.openid
                    });
                });
            }
        });
    },
    globalData: {}
});
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiYXBwLmpzIiwic291cmNlUm9vdCI6IiIsInNvdXJjZXMiOlsiYXBwLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7O0FBQUEscUNBQXNDO0FBV3RDLEdBQUcsQ0FBUztJQUNYLFFBQVEsRUFBUjtRQUVDLEVBQUUsQ0FBQyxLQUFLLENBQUM7WUFDUixPQUFPLEVBQVAsVUFBUSxHQUFHO2dCQUNWLE9BQU8sQ0FBQyxHQUFHLENBQUMsR0FBRyxDQUFDLElBQUksQ0FBQyxDQUFDO2dCQUN0QixpQkFBUyxDQUFDLEdBQUcsQ0FBQyxJQUFJLENBQUMsQ0FBQyxJQUFJLENBQ3ZCLFVBQUMsR0FBUTtvQkFDUixPQUFPLENBQUMsR0FBRyxDQUFDLEdBQUcsQ0FBQyxDQUFDO29CQUNqQixFQUFFLENBQUMsVUFBVSxDQUFDO3dCQUNiLEdBQUcsRUFBRSxRQUFRO3dCQUNiLElBQUksRUFBRSxHQUFHLENBQUMsSUFBSSxDQUFDLE1BQU07cUJBQ3JCLENBQUMsQ0FBQTtnQkFDSCxDQUFDLENBQ0QsQ0FBQTtZQUVGLENBQUM7U0FDRCxDQUFDLENBQUM7SUFxQkosQ0FBQztJQUNELFVBQVUsRUFBRSxFQUFFO0NBQ2QsQ0FBQyxDQUFDIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHtyZXFPcGVuaWR9IGZyb20gXCIuL2FwaS9pbmRleFwiO1xyXG5cclxuLy9hcHAudHNcclxuZXhwb3J0IGludGVyZmFjZSBJTXlBcHAge1xyXG5cdGdsb2JhbERhdGE6IHtcclxuXHRcdHVzZXJJbmZvPzogd3guVXNlckluZm9cclxuXHR9XHJcblxyXG4gIHVzZXJJbmZvUmVhZHlDYWxsYmFjaz8ocmVzOiB3eC5Vc2VySW5mbyk6IHZvaWRcclxufVxyXG5cclxuQXBwPElNeUFwcD4oe1xyXG5cdG9uTGF1bmNoKCkge1xyXG5cdFx0Ly8g55m75b2VXHJcblx0XHR3eC5sb2dpbih7XHJcblx0XHRcdHN1Y2Nlc3MocmVzKSB7XHJcblx0XHRcdFx0Y29uc29sZS5sb2cocmVzLmNvZGUpO1xyXG5cdFx0XHRcdHJlcU9wZW5pZChyZXMuY29kZSkudGhlbihcclxuXHRcdFx0XHRcdChyZXM6IGFueSkgPT4ge1xyXG5cdFx0XHRcdFx0XHRjb25zb2xlLmxvZyhyZXMpO1xyXG5cdFx0XHRcdFx0XHR3eC5zZXRTdG9yYWdlKHtcclxuXHRcdFx0XHRcdFx0XHRrZXk6ICdvcGVuaWQnLFxyXG5cdFx0XHRcdFx0XHRcdGRhdGE6IHJlcy5kYXRhLm9wZW5pZFxyXG5cdFx0XHRcdFx0XHR9KVxyXG5cdFx0XHRcdFx0fVxyXG5cdFx0XHRcdClcclxuXHRcdFx0XHQvLyDlj5HpgIEgX3Jlcy5jb2RlIOWIsOWQjuWPsOaNouWPliBvcGVuSWQsIHNlc3Npb25LZXksIHVuaW9uSWRcclxuXHRcdFx0fVxyXG5cdFx0fSk7XHJcblxyXG5cdFx0Ly8g6I635Y+W55So5oi35L+h5oGvXHJcblx0XHQvLyB3eC5nZXRTZXR0aW5nKHtcclxuXHRcdC8vIFx0c3VjY2VzczogKHJlcykgPT4ge1xyXG5cdFx0Ly8gXHRcdGlmIChyZXMuYXV0aFNldHRpbmdbJ3Njb3BlLnVzZXJJbmZvJ10pIHtcclxuXHRcdC8vIFx0XHRcdC8vIOW3sue7j+aOiOadg++8jOWPr+S7peebtOaOpeiwg+eUqCBnZXRVc2VySW5mbyDojrflj5blpLTlg4/mmLXnp7DvvIzkuI3kvJrlvLnmoYZcclxuXHRcdC8vIFx0XHRcdHd4LmdldFVzZXJJbmZvKHtcclxuXHRcdC8vIFx0XHRcdFx0c3VjY2VzczogcmVzID0+IHtcclxuXHRcdC8vIFx0XHRcdFx0XHQvLyDlj6/ku6XlsIYgcmVzIOWPkemAgee7meWQjuWPsOino+eggeWHuiB1bmlvbklkXHJcblx0XHQvLyBcdFx0XHRcdFx0dGhpcy5nbG9iYWxEYXRhLnVzZXJJbmZvID0gcmVzLnVzZXJJbmZvO1xyXG5cdFx0Ly8gXHRcdFx0XHRcdC8vIOeUseS6jiBnZXRVc2VySW5mbyDmmK/nvZHnu5zor7fmsYLvvIzlj6/og73kvJrlnKggUGFnZS5vbkxvYWQg5LmL5ZCO5omN6L+U5ZueXHJcblx0XHQvLyBcdFx0XHRcdFx0Ly8g5omA5Lul5q2k5aSE5Yqg5YWlIGNhbGxiYWNrIOS7pemYsuatoui/meenjeaDheWGtVxyXG5cdFx0Ly8gXHRcdFx0XHRcdGlmICh0aGlzLnVzZXJJbmZvUmVhZHlDYWxsYmFjaykge1xyXG5cdFx0Ly8gXHRcdFx0XHRcdFx0dGhpcy51c2VySW5mb1JlYWR5Q2FsbGJhY2socmVzLnVzZXJJbmZvKVxyXG5cdFx0Ly8gXHRcdFx0XHRcdH1cclxuXHRcdC8vIFx0XHRcdFx0fVxyXG5cdFx0Ly8gXHRcdFx0fSlcclxuXHRcdC8vIFx0XHR9XHJcblx0XHQvLyBcdH1cclxuXHRcdC8vIH0pXHJcblx0fSxcclxuXHRnbG9iYWxEYXRhOiB7fVxyXG59KTtcclxuIl19