"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var index_1 = require("./api/index");
App({
    onLaunch: function () {
        var _this = this;
        var logs = wx.getStorageSync('logs') || [];
        logs.unshift(Date.now());
        wx.setStorageSync('logs', logs);
        wx.login({
            success: function (res) {
                console.log(res.code);
                index_1.reqOpenid(res.code).then(function (res) {
                    console.log(res);
                });
            }
        });
        wx.getSetting({
            success: function (res) {
                if (res.authSetting['scope.userInfo']) {
                    wx.getUserInfo({
                        success: function (res) {
                            _this.globalData.userInfo = res.userInfo;
                            if (_this.userInfoReadyCallback) {
                                _this.userInfoReadyCallback(res.userInfo);
                            }
                        }
                    });
                }
            }
        });
    },
    globalData: {}
});
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiYXBwLmpzIiwic291cmNlUm9vdCI6IiIsInNvdXJjZXMiOlsiYXBwLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7O0FBQUEscUNBQXNDO0FBV3RDLEdBQUcsQ0FBUztJQUNYLFFBQVEsRUFBUjtRQUFBLGlCQXNDQztRQXBDQSxJQUFJLElBQUksR0FBYSxFQUFFLENBQUMsY0FBYyxDQUFDLE1BQU0sQ0FBQyxJQUFJLEVBQUUsQ0FBQztRQUNyRCxJQUFJLENBQUMsT0FBTyxDQUFDLElBQUksQ0FBQyxHQUFHLEVBQUUsQ0FBQyxDQUFDO1FBQ3pCLEVBQUUsQ0FBQyxjQUFjLENBQUMsTUFBTSxFQUFFLElBQUksQ0FBQyxDQUFDO1FBR2hDLEVBQUUsQ0FBQyxLQUFLLENBQUM7WUFDUixPQUFPLEVBQVAsVUFBUSxHQUFHO2dCQUNWLE9BQU8sQ0FBQyxHQUFHLENBQUMsR0FBRyxDQUFDLElBQUksQ0FBQyxDQUFDO2dCQUN0QixpQkFBUyxDQUFDLEdBQUcsQ0FBQyxJQUFJLENBQUMsQ0FBQyxJQUFJLENBQ3ZCLFVBQUMsR0FBUTtvQkFDUixPQUFPLENBQUMsR0FBRyxDQUFDLEdBQUcsQ0FBQyxDQUFDO2dCQUNsQixDQUFDLENBQ0QsQ0FBQTtZQUVGLENBQUM7U0FDRCxDQUFDLENBQUM7UUFHSCxFQUFFLENBQUMsVUFBVSxDQUFDO1lBQ2IsT0FBTyxFQUFFLFVBQUMsR0FBRztnQkFDWixJQUFJLEdBQUcsQ0FBQyxXQUFXLENBQUMsZ0JBQWdCLENBQUMsRUFBRTtvQkFFdEMsRUFBRSxDQUFDLFdBQVcsQ0FBQzt3QkFDZCxPQUFPLEVBQUUsVUFBQSxHQUFHOzRCQUVYLEtBQUksQ0FBQyxVQUFVLENBQUMsUUFBUSxHQUFHLEdBQUcsQ0FBQyxRQUFRLENBQUM7NEJBR3hDLElBQUksS0FBSSxDQUFDLHFCQUFxQixFQUFFO2dDQUMvQixLQUFJLENBQUMscUJBQXFCLENBQUMsR0FBRyxDQUFDLFFBQVEsQ0FBQyxDQUFBOzZCQUN4Qzt3QkFDRixDQUFDO3FCQUNELENBQUMsQ0FBQTtpQkFDRjtZQUNGLENBQUM7U0FDRCxDQUFDLENBQUE7SUFDSCxDQUFDO0lBQ0QsVUFBVSxFQUFFLEVBQUU7Q0FDZCxDQUFDLENBQUMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQge3JlcU9wZW5pZH0gZnJvbSBcIi4vYXBpL2luZGV4XCI7XG5cbi8vYXBwLnRzXG5leHBvcnQgaW50ZXJmYWNlIElNeUFwcCB7XG5cdGdsb2JhbERhdGE6IHtcblx0XHR1c2VySW5mbz86IHd4LlVzZXJJbmZvXG5cdH1cblxuXHR1c2VySW5mb1JlYWR5Q2FsbGJhY2s/KHJlczogd3guVXNlckluZm8pOiB2b2lkXG59XG5cbkFwcDxJTXlBcHA+KHtcblx0b25MYXVuY2goKSB7XG5cdFx0Ly8g5bGV56S65pys5Zyw5a2Y5YKo6IO95YqbXG5cdFx0dmFyIGxvZ3M6IG51bWJlcltdID0gd3guZ2V0U3RvcmFnZVN5bmMoJ2xvZ3MnKSB8fCBbXTtcblx0XHRsb2dzLnVuc2hpZnQoRGF0ZS5ub3coKSk7XG5cdFx0d3guc2V0U3RvcmFnZVN5bmMoJ2xvZ3MnLCBsb2dzKTtcblxuXHRcdC8vIOeZu+W9lVxuXHRcdHd4LmxvZ2luKHtcblx0XHRcdHN1Y2Nlc3MocmVzKSB7XG5cdFx0XHRcdGNvbnNvbGUubG9nKHJlcy5jb2RlKTtcblx0XHRcdFx0cmVxT3BlbmlkKHJlcy5jb2RlKS50aGVuKFxuXHRcdFx0XHRcdChyZXM6IGFueSkgPT4ge1xuXHRcdFx0XHRcdFx0Y29uc29sZS5sb2cocmVzKTtcblx0XHRcdFx0XHR9XG5cdFx0XHRcdClcblx0XHRcdFx0Ly8g5Y+R6YCBIF9yZXMuY29kZSDliLDlkI7lj7DmjaLlj5Ygb3BlbklkLCBzZXNzaW9uS2V5LCB1bmlvbklkXG5cdFx0XHR9XG5cdFx0fSk7XG5cblx0XHQvLyDojrflj5bnlKjmiLfkv6Hmga9cblx0XHR3eC5nZXRTZXR0aW5nKHtcblx0XHRcdHN1Y2Nlc3M6IChyZXMpID0+IHtcblx0XHRcdFx0aWYgKHJlcy5hdXRoU2V0dGluZ1snc2NvcGUudXNlckluZm8nXSkge1xuXHRcdFx0XHRcdC8vIOW3sue7j+aOiOadg++8jOWPr+S7peebtOaOpeiwg+eUqCBnZXRVc2VySW5mbyDojrflj5blpLTlg4/mmLXnp7DvvIzkuI3kvJrlvLnmoYZcblx0XHRcdFx0XHR3eC5nZXRVc2VySW5mbyh7XG5cdFx0XHRcdFx0XHRzdWNjZXNzOiByZXMgPT4ge1xuXHRcdFx0XHRcdFx0XHQvLyDlj6/ku6XlsIYgcmVzIOWPkemAgee7meWQjuWPsOino+eggeWHuiB1bmlvbklkXG5cdFx0XHRcdFx0XHRcdHRoaXMuZ2xvYmFsRGF0YS51c2VySW5mbyA9IHJlcy51c2VySW5mbztcblx0XHRcdFx0XHRcdFx0Ly8g55Sx5LqOIGdldFVzZXJJbmZvIOaYr+e9kee7nOivt+axgu+8jOWPr+iDveS8muWcqCBQYWdlLm9uTG9hZCDkuYvlkI7miY3ov5Tlm55cblx0XHRcdFx0XHRcdFx0Ly8g5omA5Lul5q2k5aSE5Yqg5YWlIGNhbGxiYWNrIOS7pemYsuatoui/meenjeaDheWGtVxuXHRcdFx0XHRcdFx0XHRpZiAodGhpcy51c2VySW5mb1JlYWR5Q2FsbGJhY2spIHtcblx0XHRcdFx0XHRcdFx0XHR0aGlzLnVzZXJJbmZvUmVhZHlDYWxsYmFjayhyZXMudXNlckluZm8pXG5cdFx0XHRcdFx0XHRcdH1cblx0XHRcdFx0XHRcdH1cblx0XHRcdFx0XHR9KVxuXHRcdFx0XHR9XG5cdFx0XHR9XG5cdFx0fSlcblx0fSxcblx0Z2xvYmFsRGF0YToge31cbn0pO1xuIl19