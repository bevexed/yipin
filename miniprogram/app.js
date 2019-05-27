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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiYXBwLmpzIiwic291cmNlUm9vdCI6IiIsInNvdXJjZXMiOlsiYXBwLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7O0FBUUEsR0FBRyxDQUFTO0lBQ1gsUUFBUSxFQUFSO1FBQUEsaUJBZ0NDO1FBOUJBLElBQUksSUFBSSxHQUFhLEVBQUUsQ0FBQyxjQUFjLENBQUMsTUFBTSxDQUFDLElBQUksRUFBRSxDQUFBO1FBQ3BELElBQUksQ0FBQyxPQUFPLENBQUMsSUFBSSxDQUFDLEdBQUcsRUFBRSxDQUFDLENBQUE7UUFDeEIsRUFBRSxDQUFDLGNBQWMsQ0FBQyxNQUFNLEVBQUUsSUFBSSxDQUFDLENBQUE7UUFHL0IsRUFBRSxDQUFDLEtBQUssQ0FBQztZQUNSLE9BQU8sWUFBQyxJQUFJO1lBR1osQ0FBQztTQUNELENBQUMsQ0FBQTtRQUVGLEVBQUUsQ0FBQyxVQUFVLENBQUM7WUFDYixPQUFPLEVBQUUsVUFBQyxHQUFHO2dCQUNaLElBQUksR0FBRyxDQUFDLFdBQVcsQ0FBQyxnQkFBZ0IsQ0FBQyxFQUFFO29CQUV0QyxFQUFFLENBQUMsV0FBVyxDQUFDO3dCQUNkLE9BQU8sRUFBRSxVQUFBLEdBQUc7NEJBRVgsS0FBSSxDQUFDLFVBQVUsQ0FBQyxRQUFRLEdBQUcsR0FBRyxDQUFDLFFBQVEsQ0FBQTs0QkFHdkMsSUFBSSxLQUFJLENBQUMscUJBQXFCLEVBQUU7Z0NBQy9CLEtBQUksQ0FBQyxxQkFBcUIsQ0FBQyxHQUFHLENBQUMsUUFBUSxDQUFDLENBQUE7NkJBQ3hDO3dCQUNGLENBQUM7cUJBQ0QsQ0FBQyxDQUFBO2lCQUNGO1lBQ0YsQ0FBQztTQUNELENBQUMsQ0FBQTtJQUNILENBQUM7SUFDRCxVQUFVLEVBQUUsRUFDWDtDQUNELENBQUMsQ0FBQSIsInNvdXJjZXNDb250ZW50IjpbIi8vYXBwLnRzXG5leHBvcnQgaW50ZXJmYWNlIElNeUFwcCB7XG5cdHVzZXJJbmZvUmVhZHlDYWxsYmFjaz8ocmVzOiB3eC5Vc2VySW5mbyk6IHZvaWRcblx0Z2xvYmFsRGF0YToge1xuXHRcdHVzZXJJbmZvPzogd3guVXNlckluZm9cblx0fVxufVxuXG5BcHA8SU15QXBwPih7XG5cdG9uTGF1bmNoKCkge1xuXHRcdC8vIOWxleekuuacrOWcsOWtmOWCqOiDveWKm1xuXHRcdHZhciBsb2dzOiBudW1iZXJbXSA9IHd4LmdldFN0b3JhZ2VTeW5jKCdsb2dzJykgfHwgW11cblx0XHRsb2dzLnVuc2hpZnQoRGF0ZS5ub3coKSlcblx0XHR3eC5zZXRTdG9yYWdlU3luYygnbG9ncycsIGxvZ3MpXG5cblx0XHQvLyDnmbvlvZVcblx0XHR3eC5sb2dpbih7XG5cdFx0XHRzdWNjZXNzKF9yZXMpIHtcblx0XHRcdFx0Ly8gY29uc29sZS5sb2coX3Jlcy5jb2RlKVxuXHRcdFx0XHQvLyDlj5HpgIEgX3Jlcy5jb2RlIOWIsOWQjuWPsOaNouWPliBvcGVuSWQsIHNlc3Npb25LZXksIHVuaW9uSWRcblx0XHRcdH1cblx0XHR9KVxuXHRcdC8vIOiOt+WPlueUqOaIt+S/oeaBr1xuXHRcdHd4LmdldFNldHRpbmcoe1xuXHRcdFx0c3VjY2VzczogKHJlcykgPT4ge1xuXHRcdFx0XHRpZiAocmVzLmF1dGhTZXR0aW5nWydzY29wZS51c2VySW5mbyddKSB7XG5cdFx0XHRcdFx0Ly8g5bey57uP5o6I5p2D77yM5Y+v5Lul55u05o6l6LCD55SoIGdldFVzZXJJbmZvIOiOt+WPluWktOWDj+aYteensO+8jOS4jeS8muW8ueahhlxuXHRcdFx0XHRcdHd4LmdldFVzZXJJbmZvKHtcblx0XHRcdFx0XHRcdHN1Y2Nlc3M6IHJlcyA9PiB7XG5cdFx0XHRcdFx0XHRcdC8vIOWPr+S7peWwhiByZXMg5Y+R6YCB57uZ5ZCO5Y+w6Kej56CB5Ye6IHVuaW9uSWRcblx0XHRcdFx0XHRcdFx0dGhpcy5nbG9iYWxEYXRhLnVzZXJJbmZvID0gcmVzLnVzZXJJbmZvXG5cdFx0XHRcdFx0XHRcdC8vIOeUseS6jiBnZXRVc2VySW5mbyDmmK/nvZHnu5zor7fmsYLvvIzlj6/og73kvJrlnKggUGFnZS5vbkxvYWQg5LmL5ZCO5omN6L+U5ZueXG5cdFx0XHRcdFx0XHRcdC8vIOaJgOS7peatpOWkhOWKoOWFpSBjYWxsYmFjayDku6XpmLLmraLov5nnp43mg4XlhrVcblx0XHRcdFx0XHRcdFx0aWYgKHRoaXMudXNlckluZm9SZWFkeUNhbGxiYWNrKSB7XG5cdFx0XHRcdFx0XHRcdFx0dGhpcy51c2VySW5mb1JlYWR5Q2FsbGJhY2socmVzLnVzZXJJbmZvKVxuXHRcdFx0XHRcdFx0XHR9XG5cdFx0XHRcdFx0XHR9XG5cdFx0XHRcdFx0fSlcblx0XHRcdFx0fVxuXHRcdFx0fVxuXHRcdH0pXG5cdH0sXG5cdGdsb2JhbERhdGE6IHtcblx0fVxufSlcbiJdfQ==