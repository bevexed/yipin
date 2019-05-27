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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiYXBwLmpzIiwic291cmNlUm9vdCI6IiIsInNvdXJjZXMiOlsiYXBwLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7O0FBU0EsR0FBRyxDQUFTO0lBQ1gsUUFBUSxFQUFSO1FBQUEsaUJBZ0NDO1FBOUJBLElBQUksSUFBSSxHQUFhLEVBQUUsQ0FBQyxjQUFjLENBQUMsTUFBTSxDQUFDLElBQUksRUFBRSxDQUFDO1FBQ3JELElBQUksQ0FBQyxPQUFPLENBQUMsSUFBSSxDQUFDLEdBQUcsRUFBRSxDQUFDLENBQUM7UUFDekIsRUFBRSxDQUFDLGNBQWMsQ0FBQyxNQUFNLEVBQUUsSUFBSSxDQUFDLENBQUM7UUFHaEMsRUFBRSxDQUFDLEtBQUssQ0FBQztZQUNSLE9BQU8sWUFBQyxJQUFJO1lBR1osQ0FBQztTQUNELENBQUMsQ0FBQztRQUVILEVBQUUsQ0FBQyxVQUFVLENBQUM7WUFDYixPQUFPLEVBQUUsVUFBQyxHQUFHO2dCQUNaLElBQUksR0FBRyxDQUFDLFdBQVcsQ0FBQyxnQkFBZ0IsQ0FBQyxFQUFFO29CQUV0QyxFQUFFLENBQUMsV0FBVyxDQUFDO3dCQUNkLE9BQU8sRUFBRSxVQUFBLEdBQUc7NEJBRVgsS0FBSSxDQUFDLFVBQVUsQ0FBQyxRQUFRLEdBQUcsR0FBRyxDQUFDLFFBQVEsQ0FBQzs0QkFHeEMsSUFBSSxLQUFJLENBQUMscUJBQXFCLEVBQUU7Z0NBQy9CLEtBQUksQ0FBQyxxQkFBcUIsQ0FBQyxHQUFHLENBQUMsUUFBUSxDQUFDLENBQUE7NkJBQ3hDO3dCQUNGLENBQUM7cUJBQ0QsQ0FBQyxDQUFBO2lCQUNGO1lBQ0YsQ0FBQztTQUNELENBQUMsQ0FBQTtJQUNILENBQUM7SUFDRCxVQUFVLEVBQUUsRUFBRTtDQUNkLENBQUMsQ0FBQyIsInNvdXJjZXNDb250ZW50IjpbIi8vYXBwLnRzXG5leHBvcnQgaW50ZXJmYWNlIElNeUFwcCB7XG5cdGdsb2JhbERhdGE6IHtcblx0XHR1c2VySW5mbz86IHd4LlVzZXJJbmZvXG5cdH1cblxuXHR1c2VySW5mb1JlYWR5Q2FsbGJhY2s/KHJlczogd3guVXNlckluZm8pOiB2b2lkXG59XG5cbkFwcDxJTXlBcHA+KHtcblx0b25MYXVuY2goKSB7XG5cdFx0Ly8g5bGV56S65pys5Zyw5a2Y5YKo6IO95YqbXG5cdFx0dmFyIGxvZ3M6IG51bWJlcltdID0gd3guZ2V0U3RvcmFnZVN5bmMoJ2xvZ3MnKSB8fCBbXTtcblx0XHRsb2dzLnVuc2hpZnQoRGF0ZS5ub3coKSk7XG5cdFx0d3guc2V0U3RvcmFnZVN5bmMoJ2xvZ3MnLCBsb2dzKTtcblxuXHRcdC8vIOeZu+W9lVxuXHRcdHd4LmxvZ2luKHtcblx0XHRcdHN1Y2Nlc3MoX3Jlcykge1xuXHRcdFx0XHQvLyBjb25zb2xlLmxvZyhfcmVzLmNvZGUpXG5cdFx0XHRcdC8vIOWPkemAgSBfcmVzLmNvZGUg5Yiw5ZCO5Y+w5o2i5Y+WIG9wZW5JZCwgc2Vzc2lvbktleSwgdW5pb25JZFxuXHRcdFx0fVxuXHRcdH0pO1xuXHRcdC8vIOiOt+WPlueUqOaIt+S/oeaBr1xuXHRcdHd4LmdldFNldHRpbmcoe1xuXHRcdFx0c3VjY2VzczogKHJlcykgPT4ge1xuXHRcdFx0XHRpZiAocmVzLmF1dGhTZXR0aW5nWydzY29wZS51c2VySW5mbyddKSB7XG5cdFx0XHRcdFx0Ly8g5bey57uP5o6I5p2D77yM5Y+v5Lul55u05o6l6LCD55SoIGdldFVzZXJJbmZvIOiOt+WPluWktOWDj+aYteensO+8jOS4jeS8muW8ueahhlxuXHRcdFx0XHRcdHd4LmdldFVzZXJJbmZvKHtcblx0XHRcdFx0XHRcdHN1Y2Nlc3M6IHJlcyA9PiB7XG5cdFx0XHRcdFx0XHRcdC8vIOWPr+S7peWwhiByZXMg5Y+R6YCB57uZ5ZCO5Y+w6Kej56CB5Ye6IHVuaW9uSWRcblx0XHRcdFx0XHRcdFx0dGhpcy5nbG9iYWxEYXRhLnVzZXJJbmZvID0gcmVzLnVzZXJJbmZvO1xuXHRcdFx0XHRcdFx0XHQvLyDnlLHkuo4gZ2V0VXNlckluZm8g5piv572R57uc6K+35rGC77yM5Y+v6IO95Lya5ZyoIFBhZ2Uub25Mb2FkIOS5i+WQjuaJjei/lOWbnlxuXHRcdFx0XHRcdFx0XHQvLyDmiYDku6XmraTlpITliqDlhaUgY2FsbGJhY2sg5Lul6Ziy5q2i6L+Z56eN5oOF5Ya1XG5cdFx0XHRcdFx0XHRcdGlmICh0aGlzLnVzZXJJbmZvUmVhZHlDYWxsYmFjaykge1xuXHRcdFx0XHRcdFx0XHRcdHRoaXMudXNlckluZm9SZWFkeUNhbGxiYWNrKHJlcy51c2VySW5mbylcblx0XHRcdFx0XHRcdFx0fVxuXHRcdFx0XHRcdFx0fVxuXHRcdFx0XHRcdH0pXG5cdFx0XHRcdH1cblx0XHRcdH1cblx0XHR9KVxuXHR9LFxuXHRnbG9iYWxEYXRhOiB7fVxufSk7XG4iXX0=