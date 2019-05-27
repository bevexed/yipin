"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
App({
    onLaunch: function () {
        var _this = this;
        var logs = wx.getStorageSync('logs') || [];
        logs.unshift(Date.now());
        wx.setStorageSync('logs', logs);
        wx.login({
            success: function (_res) {
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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiYXBwLmpzIiwic291cmNlUm9vdCI6IiIsInNvdXJjZXMiOlsiYXBwLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7O0FBU0EsR0FBRyxDQUFTO0lBQ1gsUUFBUSxFQUFSO1FBQUEsaUJBZ0NDO1FBOUJBLElBQUksSUFBSSxHQUFhLEVBQUUsQ0FBQyxjQUFjLENBQUMsTUFBTSxDQUFDLElBQUksRUFBRSxDQUFDO1FBQ3JELElBQUksQ0FBQyxPQUFPLENBQUMsSUFBSSxDQUFDLEdBQUcsRUFBRSxDQUFDLENBQUM7UUFDekIsRUFBRSxDQUFDLGNBQWMsQ0FBQyxNQUFNLEVBQUUsSUFBSSxDQUFDLENBQUM7UUFHaEMsRUFBRSxDQUFDLEtBQUssQ0FBQztZQUNSLE9BQU8sWUFBQyxJQUFJO1lBR1osQ0FBQztTQUNELENBQUMsQ0FBQztRQUVILEVBQUUsQ0FBQyxVQUFVLENBQUM7WUFDYixPQUFPLEVBQUUsVUFBQyxHQUFHO2dCQUNaLElBQUksR0FBRyxDQUFDLFdBQVcsQ0FBQyxnQkFBZ0IsQ0FBQyxFQUFFO29CQUV0QyxFQUFFLENBQUMsV0FBVyxDQUFDO3dCQUNkLE9BQU8sRUFBRSxVQUFBLEdBQUc7NEJBRVgsS0FBSSxDQUFDLFVBQVUsQ0FBQyxRQUFRLEdBQUcsR0FBRyxDQUFDLFFBQVEsQ0FBQzs0QkFHeEMsSUFBSSxLQUFJLENBQUMscUJBQXFCLEVBQUU7Z0NBQy9CLEtBQUksQ0FBQyxxQkFBcUIsQ0FBQyxHQUFHLENBQUMsUUFBUSxDQUFDLENBQUE7NkJBQ3hDO3dCQUNGLENBQUM7cUJBQ0QsQ0FBQyxDQUFBO2lCQUNGO1lBQ0YsQ0FBQztTQUNELENBQUMsQ0FBQTtJQUNILENBQUM7SUFDRCxVQUFVLEVBQUUsRUFBRTtDQUNkLENBQUMsQ0FBQyIsInNvdXJjZXNDb250ZW50IjpbIi8vYXBwLnRzXHJcbmV4cG9ydCBpbnRlcmZhY2UgSU15QXBwIHtcclxuXHRnbG9iYWxEYXRhOiB7XHJcblx0XHR1c2VySW5mbz86IHd4LlVzZXJJbmZvXHJcblx0fVxyXG5cclxuICB1c2VySW5mb1JlYWR5Q2FsbGJhY2s/KHJlczogd3guVXNlckluZm8pOiB2b2lkXHJcbn1cclxuXHJcbkFwcDxJTXlBcHA+KHtcclxuXHRvbkxhdW5jaCgpIHtcclxuXHRcdC8vIOWxleekuuacrOWcsOWtmOWCqOiDveWKm1xyXG5cdFx0dmFyIGxvZ3M6IG51bWJlcltdID0gd3guZ2V0U3RvcmFnZVN5bmMoJ2xvZ3MnKSB8fCBbXTtcclxuXHRcdGxvZ3MudW5zaGlmdChEYXRlLm5vdygpKTtcclxuXHRcdHd4LnNldFN0b3JhZ2VTeW5jKCdsb2dzJywgbG9ncyk7XHJcblxyXG5cdFx0Ly8g55m75b2VXHJcblx0XHR3eC5sb2dpbih7XHJcblx0XHRcdHN1Y2Nlc3MoX3Jlcykge1xyXG5cdFx0XHRcdC8vIGNvbnNvbGUubG9nKF9yZXMuY29kZSlcclxuXHRcdFx0XHQvLyDlj5HpgIEgX3Jlcy5jb2RlIOWIsOWQjuWPsOaNouWPliBvcGVuSWQsIHNlc3Npb25LZXksIHVuaW9uSWRcclxuXHRcdFx0fVxyXG5cdFx0fSk7XHJcblx0XHQvLyDojrflj5bnlKjmiLfkv6Hmga9cclxuXHRcdHd4LmdldFNldHRpbmcoe1xyXG5cdFx0XHRzdWNjZXNzOiAocmVzKSA9PiB7XHJcblx0XHRcdFx0aWYgKHJlcy5hdXRoU2V0dGluZ1snc2NvcGUudXNlckluZm8nXSkge1xyXG5cdFx0XHRcdFx0Ly8g5bey57uP5o6I5p2D77yM5Y+v5Lul55u05o6l6LCD55SoIGdldFVzZXJJbmZvIOiOt+WPluWktOWDj+aYteensO+8jOS4jeS8muW8ueahhlxyXG5cdFx0XHRcdFx0d3guZ2V0VXNlckluZm8oe1xyXG5cdFx0XHRcdFx0XHRzdWNjZXNzOiByZXMgPT4ge1xyXG5cdFx0XHRcdFx0XHRcdC8vIOWPr+S7peWwhiByZXMg5Y+R6YCB57uZ5ZCO5Y+w6Kej56CB5Ye6IHVuaW9uSWRcclxuXHRcdFx0XHRcdFx0XHR0aGlzLmdsb2JhbERhdGEudXNlckluZm8gPSByZXMudXNlckluZm87XHJcblx0XHRcdFx0XHRcdFx0Ly8g55Sx5LqOIGdldFVzZXJJbmZvIOaYr+e9kee7nOivt+axgu+8jOWPr+iDveS8muWcqCBQYWdlLm9uTG9hZCDkuYvlkI7miY3ov5Tlm55cclxuXHRcdFx0XHRcdFx0XHQvLyDmiYDku6XmraTlpITliqDlhaUgY2FsbGJhY2sg5Lul6Ziy5q2i6L+Z56eN5oOF5Ya1XHJcblx0XHRcdFx0XHRcdFx0aWYgKHRoaXMudXNlckluZm9SZWFkeUNhbGxiYWNrKSB7XHJcblx0XHRcdFx0XHRcdFx0XHR0aGlzLnVzZXJJbmZvUmVhZHlDYWxsYmFjayhyZXMudXNlckluZm8pXHJcblx0XHRcdFx0XHRcdFx0fVxyXG5cdFx0XHRcdFx0XHR9XHJcblx0XHRcdFx0XHR9KVxyXG5cdFx0XHRcdH1cclxuXHRcdFx0fVxyXG5cdFx0fSlcclxuXHR9LFxyXG5cdGdsb2JhbERhdGE6IHt9XHJcbn0pO1xyXG4iXX0=