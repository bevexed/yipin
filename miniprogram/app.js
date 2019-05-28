"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var index_1 = require("./api/index");
App({
    onLaunch: function () {
        var _this = this;
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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiYXBwLmpzIiwic291cmNlUm9vdCI6IiIsInNvdXJjZXMiOlsiYXBwLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7O0FBQUEscUNBQXNDO0FBV3RDLEdBQUcsQ0FBUztJQUNYLFFBQVEsRUFBUjtRQUFBLGlCQXFDQztRQW5DQSxFQUFFLENBQUMsS0FBSyxDQUFDO1lBQ1IsT0FBTyxFQUFQLFVBQVEsR0FBRztnQkFDVixPQUFPLENBQUMsR0FBRyxDQUFDLEdBQUcsQ0FBQyxJQUFJLENBQUMsQ0FBQztnQkFDdEIsaUJBQVMsQ0FBQyxHQUFHLENBQUMsSUFBSSxDQUFDLENBQUMsSUFBSSxDQUN2QixVQUFDLEdBQVE7b0JBQ1IsT0FBTyxDQUFDLEdBQUcsQ0FBQyxHQUFHLENBQUMsQ0FBQztvQkFDakIsRUFBRSxDQUFDLFVBQVUsQ0FBQzt3QkFDYixHQUFHLEVBQUUsUUFBUTt3QkFDYixJQUFJLEVBQUUsR0FBRyxDQUFDLElBQUksQ0FBQyxNQUFNO3FCQUNyQixDQUFDLENBQUE7Z0JBQ0gsQ0FBQyxDQUNELENBQUE7WUFFRixDQUFDO1NBQ0QsQ0FBQyxDQUFDO1FBR0gsRUFBRSxDQUFDLFVBQVUsQ0FBQztZQUNiLE9BQU8sRUFBRSxVQUFDLEdBQUc7Z0JBQ1osSUFBSSxHQUFHLENBQUMsV0FBVyxDQUFDLGdCQUFnQixDQUFDLEVBQUU7b0JBRXRDLEVBQUUsQ0FBQyxXQUFXLENBQUM7d0JBQ2QsT0FBTyxFQUFFLFVBQUEsR0FBRzs0QkFFWCxLQUFJLENBQUMsVUFBVSxDQUFDLFFBQVEsR0FBRyxHQUFHLENBQUMsUUFBUSxDQUFDOzRCQUd4QyxJQUFJLEtBQUksQ0FBQyxxQkFBcUIsRUFBRTtnQ0FDL0IsS0FBSSxDQUFDLHFCQUFxQixDQUFDLEdBQUcsQ0FBQyxRQUFRLENBQUMsQ0FBQTs2QkFDeEM7d0JBQ0YsQ0FBQztxQkFDRCxDQUFDLENBQUE7aUJBQ0Y7WUFDRixDQUFDO1NBQ0QsQ0FBQyxDQUFBO0lBQ0gsQ0FBQztJQUNELFVBQVUsRUFBRSxFQUFFO0NBQ2QsQ0FBQyxDQUFDIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHtyZXFPcGVuaWR9IGZyb20gXCIuL2FwaS9pbmRleFwiO1xuXG4vL2FwcC50c1xuZXhwb3J0IGludGVyZmFjZSBJTXlBcHAge1xuXHRnbG9iYWxEYXRhOiB7XG5cdFx0dXNlckluZm8/OiB3eC5Vc2VySW5mb1xuXHR9XG5cbiAgdXNlckluZm9SZWFkeUNhbGxiYWNrPyhyZXM6IHd4LlVzZXJJbmZvKTogdm9pZFxufVxuXG5BcHA8SU15QXBwPih7XG5cdG9uTGF1bmNoKCkge1xuXHRcdC8vIOeZu+W9lVxuXHRcdHd4LmxvZ2luKHtcblx0XHRcdHN1Y2Nlc3MocmVzKSB7XG5cdFx0XHRcdGNvbnNvbGUubG9nKHJlcy5jb2RlKTtcblx0XHRcdFx0cmVxT3BlbmlkKHJlcy5jb2RlKS50aGVuKFxuXHRcdFx0XHRcdChyZXM6IGFueSkgPT4ge1xuXHRcdFx0XHRcdFx0Y29uc29sZS5sb2cocmVzKTtcblx0XHRcdFx0XHRcdHd4LnNldFN0b3JhZ2Uoe1xuXHRcdFx0XHRcdFx0XHRrZXk6ICdvcGVuaWQnLFxuXHRcdFx0XHRcdFx0XHRkYXRhOiByZXMuZGF0YS5vcGVuaWRcblx0XHRcdFx0XHRcdH0pXG5cdFx0XHRcdFx0fVxuXHRcdFx0XHQpXG5cdFx0XHRcdC8vIOWPkemAgSBfcmVzLmNvZGUg5Yiw5ZCO5Y+w5o2i5Y+WIG9wZW5JZCwgc2Vzc2lvbktleSwgdW5pb25JZFxuXHRcdFx0fVxuXHRcdH0pO1xuXG5cdFx0Ly8g6I635Y+W55So5oi35L+h5oGvXG5cdFx0d3guZ2V0U2V0dGluZyh7XG5cdFx0XHRzdWNjZXNzOiAocmVzKSA9PiB7XG5cdFx0XHRcdGlmIChyZXMuYXV0aFNldHRpbmdbJ3Njb3BlLnVzZXJJbmZvJ10pIHtcblx0XHRcdFx0XHQvLyDlt7Lnu4/mjojmnYPvvIzlj6/ku6Xnm7TmjqXosIPnlKggZ2V0VXNlckluZm8g6I635Y+W5aS05YOP5pi156ew77yM5LiN5Lya5by55qGGXG5cdFx0XHRcdFx0d3guZ2V0VXNlckluZm8oe1xuXHRcdFx0XHRcdFx0c3VjY2VzczogcmVzID0+IHtcblx0XHRcdFx0XHRcdFx0Ly8g5Y+v5Lul5bCGIHJlcyDlj5HpgIHnu5nlkI7lj7Dop6PnoIHlh7ogdW5pb25JZFxuXHRcdFx0XHRcdFx0XHR0aGlzLmdsb2JhbERhdGEudXNlckluZm8gPSByZXMudXNlckluZm87XG5cdFx0XHRcdFx0XHRcdC8vIOeUseS6jiBnZXRVc2VySW5mbyDmmK/nvZHnu5zor7fmsYLvvIzlj6/og73kvJrlnKggUGFnZS5vbkxvYWQg5LmL5ZCO5omN6L+U5ZueXG5cdFx0XHRcdFx0XHRcdC8vIOaJgOS7peatpOWkhOWKoOWFpSBjYWxsYmFjayDku6XpmLLmraLov5nnp43mg4XlhrVcblx0XHRcdFx0XHRcdFx0aWYgKHRoaXMudXNlckluZm9SZWFkeUNhbGxiYWNrKSB7XG5cdFx0XHRcdFx0XHRcdFx0dGhpcy51c2VySW5mb1JlYWR5Q2FsbGJhY2socmVzLnVzZXJJbmZvKVxuXHRcdFx0XHRcdFx0XHR9XG5cdFx0XHRcdFx0XHR9XG5cdFx0XHRcdFx0fSlcblx0XHRcdFx0fVxuXHRcdFx0fVxuXHRcdH0pXG5cdH0sXG5cdGdsb2JhbERhdGE6IHt9XG59KTtcbiJdfQ==