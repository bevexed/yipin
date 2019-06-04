"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var index_1 = require("../../api/index");
Page({
    data: {
        openid: '',
        exist: 0
    },
    onLoad: function () {
    },
    doCheck: function () {
        var _this_1 = this;
        var openid = this.data.openid;
        console.log(openid);
        wx.showLoading({
            title: '',
            mask: true
        });
        index_1.reqCheckUser(openid).then(function (res) {
            _this_1.setData({
                exist: res
            }, function () { return _this_1.check(); });
        });
    },
    getUserInfo: function (e) {
        if (e.detail.errMsg.includes('ok')) {
            this.login();
        }
        else {
        }
    },
    login: function () {
        wx.showLoading({
            title: 'loading',
            mask: true,
        });
        var _this = this;
        wx.getStorage({
            key: 'openid',
            success: function (res) {
                _this.setData({
                    openid: res.data
                }, function () { return _this.doCheck(); });
            }
        });
    },
    check: function () {
        console.log(this.data.openid);
        if (!this.data.openid) {
            return;
        }
        var exist = this.data.exist;
        wx.showToast({
            title: '',
            icon: "none",
            mask: true,
            success: function () {
                if (exist === 0) {
                    wx.navigateTo({
                        url: '/complete/complete'
                    });
                    return;
                }
                else {
                    wx.switchTab({
                        url: '/pages/index/index'
                    });
                }
            }
        });
        index_1.reqLogin({ type: 1, openid: this.data.openid }).then(function (res) {
            console.log('token', res);
            if (res.code === 1) {
                wx.setStorage({
                    key: 'token',
                    data: res.data,
                    success: function () {
                        if (exist === 0) {
                            wx.showLoading({
                                title: 'loading',
                                mask: true,
                            });
                            wx.navigateTo({
                                url: '/complete/complete'
                            });
                        }
                        else {
                            wx.switchTab({
                                url: '/pages/index/index'
                            });
                        }
                    }
                });
            }
        });
    }
});
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoibG9naW4uanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyJsb2dpbi50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOztBQUFBLHlDQUF1RDtBQUV2RCxJQUFJLENBQUM7SUFDSixJQUFJLEVBQUU7UUFDTCxNQUFNLEVBQUUsRUFBRTtRQUNWLEtBQUssRUFBRSxDQUFDO0tBQ1I7SUFFRCxNQUFNO0lBVU4sQ0FBQztJQUVELE9BQU8sRUFBUDtRQUFBLG1CQWVDO1FBZE8sSUFBQSx5QkFBTSxDQUFjO1FBQzNCLE9BQU8sQ0FBQyxHQUFHLENBQUMsTUFBTSxDQUFDLENBQUM7UUFDcEIsRUFBRSxDQUFDLFdBQVcsQ0FBQztZQUNkLEtBQUssRUFBRSxFQUFFO1lBQ1QsSUFBSSxFQUFFLElBQUk7U0FDVixDQUFDLENBQUM7UUFDSCxvQkFBWSxDQUFDLE1BQU0sQ0FBQyxDQUFDLElBQUksQ0FDeEIsVUFBQyxHQUFRO1lBRVIsT0FBSSxDQUFDLE9BQVEsQ0FBQztnQkFDYixLQUFLLEVBQUUsR0FBRzthQUNWLEVBQUUsY0FBTSxPQUFBLE9BQUksQ0FBQyxLQUFLLEVBQUUsRUFBWixDQUFZLENBQUMsQ0FBQTtRQUN2QixDQUFDLENBQ0QsQ0FBQTtJQUNGLENBQUM7SUFFRCxXQUFXLEVBQVgsVUFBWSxDQUFNO1FBQ2pCLElBQUksQ0FBQyxDQUFDLE1BQU0sQ0FBQyxNQUFNLENBQUMsUUFBUSxDQUFDLElBQUksQ0FBQyxFQUFFO1lBQ25DLElBQUksQ0FBQyxLQUFLLEVBQUUsQ0FBQztTQUNiO2FBQU07U0FFTjtJQUNGLENBQUM7SUFDRCxLQUFLLEVBQUw7UUFDQyxFQUFFLENBQUMsV0FBVyxDQUFDO1lBQ2QsS0FBSyxFQUFFLFNBQVM7WUFDaEIsSUFBSSxFQUFFLElBQUk7U0FDVixDQUFDLENBQUM7UUFDSCxJQUFNLEtBQUssR0FBRyxJQUFJLENBQUM7UUFFbkIsRUFBRSxDQUFDLFVBQVUsQ0FBQztZQUNiLEdBQUcsRUFBRSxRQUFRO1lBQ2IsT0FBTyxFQUFQLFVBQVEsR0FBRztnQkFDVixLQUFLLENBQUMsT0FBUSxDQUFDO29CQUNkLE1BQU0sRUFBRSxHQUFHLENBQUMsSUFBSTtpQkFDaEIsRUFBRSxjQUFNLE9BQUEsS0FBSyxDQUFDLE9BQU8sRUFBRSxFQUFmLENBQWUsQ0FBQyxDQUFDO1lBQzNCLENBQUM7U0FDRCxDQUFDLENBQUM7SUFPSixDQUFDO0lBRUQsS0FBSztRQUNKLE9BQU8sQ0FBQyxHQUFHLENBQUMsSUFBSSxDQUFDLElBQUksQ0FBQyxNQUFNLENBQUMsQ0FBQTtRQUM3QixJQUFJLENBQUMsSUFBSSxDQUFDLElBQUksQ0FBQyxNQUFNLEVBQUU7WUFDdEIsT0FBTTtTQUNOO1FBRU0sSUFBQSx1QkFBSyxDQUFjO1FBQzFCLEVBQUUsQ0FBQyxTQUFTLENBQUM7WUFDWixLQUFLLEVBQUUsRUFBRTtZQUNULElBQUksRUFBRSxNQUFNO1lBQ1osSUFBSSxFQUFFLElBQUk7WUFDVixPQUFPO2dCQUNOLElBQUksS0FBSyxLQUFLLENBQUMsRUFBRTtvQkFDaEIsRUFBRSxDQUFDLFVBQVUsQ0FBQzt3QkFDYixHQUFHLEVBQUUsb0JBQW9CO3FCQUN6QixDQUFDLENBQUM7b0JBQ0gsT0FBTztpQkFDUDtxQkFBTTtvQkFDTixFQUFFLENBQUMsU0FBUyxDQUFDO3dCQUNaLEdBQUcsRUFBRSxvQkFBb0I7cUJBQ3pCLENBQUMsQ0FBQTtpQkFDRjtZQUNGLENBQUM7U0FDRCxDQUFDLENBQUE7UUFHRixnQkFBUSxDQUFDLEVBQUMsSUFBSSxFQUFFLENBQUMsRUFBRSxNQUFNLEVBQUUsSUFBSSxDQUFDLElBQUksQ0FBQyxNQUFNLEVBQUMsQ0FBQyxDQUFDLElBQUksQ0FDakQsVUFBQSxHQUFHO1lBQ0YsT0FBTyxDQUFDLEdBQUcsQ0FBQyxPQUFPLEVBQUUsR0FBRyxDQUFDLENBQUM7WUFDMUIsSUFBSSxHQUFHLENBQUMsSUFBSSxLQUFLLENBQUMsRUFBRTtnQkFDbkIsRUFBRSxDQUFDLFVBQVUsQ0FBQztvQkFDYixHQUFHLEVBQUUsT0FBTztvQkFDWixJQUFJLEVBQUUsR0FBRyxDQUFDLElBQUk7b0JBQ2QsT0FBTzt3QkFDTixJQUFJLEtBQUssS0FBSyxDQUFDLEVBQUU7NEJBQ2hCLEVBQUUsQ0FBQyxXQUFXLENBQUM7Z0NBQ2QsS0FBSyxFQUFFLFNBQVM7Z0NBQ2hCLElBQUksRUFBRSxJQUFJOzZCQUNWLENBQUMsQ0FBQTs0QkFDRixFQUFFLENBQUMsVUFBVSxDQUFDO2dDQUNiLEdBQUcsRUFBRSxvQkFBb0I7NkJBQ3pCLENBQUMsQ0FBQzt5QkFDSDs2QkFBTTs0QkFDTixFQUFFLENBQUMsU0FBUyxDQUFDO2dDQUNaLEdBQUcsRUFBRSxvQkFBb0I7NkJBQ3pCLENBQUMsQ0FBQTt5QkFDRjtvQkFDRixDQUFDO2lCQUNELENBQUMsQ0FBQTthQUNGO1FBQ0YsQ0FBQyxDQUNELENBQUM7SUFDSCxDQUFDO0NBRUQsQ0FBQyxDQUFDIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHtyZXFDaGVja1VzZXIsIHJlcUxvZ2lufSBmcm9tIFwiLi4vLi4vYXBpL2luZGV4XCI7XG5cblBhZ2Uoe1xuXHRkYXRhOiB7XG5cdFx0b3BlbmlkOiAnJyxcblx0XHRleGlzdDogMFxuXHR9LFxuXG5cdG9uTG9hZCgpIHtcblx0XHQvLyBjb25zdCBfdGhpcyA9IHRoaXM7XG5cdFx0Ly8gd3guZ2V0U3RvcmFnZSh7XG5cdFx0Ly8gXHRrZXk6ICdvcGVuaWQnLFxuXHRcdC8vIFx0c3VjY2VzcyhyZXMpIHtcblx0XHQvLyBcdFx0X3RoaXMuc2V0RGF0YSEoe1xuXHRcdC8vIFx0XHRcdG9wZW5pZDogcmVzLmRhdGFcblx0XHQvLyBcdFx0fSwgKCkgPT4gX3RoaXMuZG9DaGVjaygpKTtcblx0XHQvLyBcdH1cblx0XHQvLyB9KVxuXHR9LFxuXG5cdGRvQ2hlY2soKSB7XG5cdFx0Y29uc3Qge29wZW5pZH0gPSB0aGlzLmRhdGE7XG5cdFx0Y29uc29sZS5sb2cob3BlbmlkKTtcblx0XHR3eC5zaG93TG9hZGluZyh7XG5cdFx0XHR0aXRsZTogJycsXG5cdFx0XHRtYXNrOiB0cnVlXG5cdFx0fSk7XG5cdFx0cmVxQ2hlY2tVc2VyKG9wZW5pZCkudGhlbihcblx0XHRcdChyZXM6IGFueSkgPT4ge1xuXHRcdFx0XHQvLyB3eC5oaWRlTG9hZGluZygpO1xuXHRcdFx0XHR0aGlzLnNldERhdGEhKHtcblx0XHRcdFx0XHRleGlzdDogcmVzXG5cdFx0XHRcdH0sICgpID0+IHRoaXMuY2hlY2soKSlcblx0XHRcdH1cblx0XHQpXG5cdH0sXG5cblx0Z2V0VXNlckluZm8oZTogYW55KSB7XG5cdFx0aWYgKGUuZGV0YWlsLmVyck1zZy5pbmNsdWRlcygnb2snKSkge1xuXHRcdFx0dGhpcy5sb2dpbigpO1xuXHRcdH0gZWxzZSB7XG5cblx0XHR9XG5cdH0sXG5cdGxvZ2luKCkge1xuXHRcdHd4LnNob3dMb2FkaW5nKHtcblx0XHRcdHRpdGxlOiAnbG9hZGluZycsXG5cdFx0XHRtYXNrOiB0cnVlLFxuXHRcdH0pO1xuXHRcdGNvbnN0IF90aGlzID0gdGhpcztcblxuXHRcdHd4LmdldFN0b3JhZ2Uoe1xuXHRcdFx0a2V5OiAnb3BlbmlkJyxcblx0XHRcdHN1Y2Nlc3MocmVzKSB7XG5cdFx0XHRcdF90aGlzLnNldERhdGEhKHtcblx0XHRcdFx0XHRvcGVuaWQ6IHJlcy5kYXRhXG5cdFx0XHRcdH0sICgpID0+IF90aGlzLmRvQ2hlY2soKSk7XG5cdFx0XHR9XG5cdFx0fSk7XG5cdFx0Ly8gY29uc3Qgb3BlbmlkID0gd3guZ2V0U3RvcmFnZSgnb3BlbmlkJyk7XG5cdFx0Ly8gICB0aGlzLnNldERhdGEhKHtcblx0XHQvLyAgICAgb3BlbmlkOiBvcGVuaWRcblx0XHQvLyAgIH0pXG5cblxuXHR9LFxuXG5cdGNoZWNrKCkge1xuXHRcdGNvbnNvbGUubG9nKHRoaXMuZGF0YS5vcGVuaWQpXG5cdFx0aWYgKCF0aGlzLmRhdGEub3BlbmlkKSB7XG5cdFx0XHRyZXR1cm5cblx0XHR9XG5cblx0XHRjb25zdCB7ZXhpc3R9ID0gdGhpcy5kYXRhO1xuXHRcdHd4LnNob3dUb2FzdCh7XG5cdFx0XHR0aXRsZTogJycsXG5cdFx0XHRpY29uOiBcIm5vbmVcIixcblx0XHRcdG1hc2s6IHRydWUsXG5cdFx0XHRzdWNjZXNzKCkge1xuXHRcdFx0XHRpZiAoZXhpc3QgPT09IDApIHtcblx0XHRcdFx0XHR3eC5uYXZpZ2F0ZVRvKHtcblx0XHRcdFx0XHRcdHVybDogJy9jb21wbGV0ZS9jb21wbGV0ZSdcblx0XHRcdFx0XHR9KTtcblx0XHRcdFx0XHRyZXR1cm47XG5cdFx0XHRcdH0gZWxzZSB7XG5cdFx0XHRcdFx0d3guc3dpdGNoVGFiKHtcblx0XHRcdFx0XHRcdHVybDogJy9wYWdlcy9pbmRleC9pbmRleCdcblx0XHRcdFx0XHR9KVxuXHRcdFx0XHR9XG5cdFx0XHR9XG5cdFx0fSlcblxuXG5cdFx0cmVxTG9naW4oe3R5cGU6IDEsIG9wZW5pZDogdGhpcy5kYXRhLm9wZW5pZH0pLnRoZW4oXG5cdFx0XHRyZXMgPT4ge1xuXHRcdFx0XHRjb25zb2xlLmxvZygndG9rZW4nLCByZXMpO1xuXHRcdFx0XHRpZiAocmVzLmNvZGUgPT09IDEpIHtcblx0XHRcdFx0XHR3eC5zZXRTdG9yYWdlKHtcblx0XHRcdFx0XHRcdGtleTogJ3Rva2VuJyxcblx0XHRcdFx0XHRcdGRhdGE6IHJlcy5kYXRhLFxuXHRcdFx0XHRcdFx0c3VjY2VzcygpIHtcblx0XHRcdFx0XHRcdFx0aWYgKGV4aXN0ID09PSAwKSB7XG5cdFx0XHRcdFx0XHRcdFx0d3guc2hvd0xvYWRpbmcoe1xuXHRcdFx0XHRcdFx0XHRcdFx0dGl0bGU6ICdsb2FkaW5nJyxcblx0XHRcdFx0XHRcdFx0XHRcdG1hc2s6IHRydWUsXG5cdFx0XHRcdFx0XHRcdFx0fSlcblx0XHRcdFx0XHRcdFx0XHR3eC5uYXZpZ2F0ZVRvKHtcblx0XHRcdFx0XHRcdFx0XHRcdHVybDogJy9jb21wbGV0ZS9jb21wbGV0ZSdcblx0XHRcdFx0XHRcdFx0XHR9KTtcblx0XHRcdFx0XHRcdFx0fSBlbHNlIHtcblx0XHRcdFx0XHRcdFx0XHR3eC5zd2l0Y2hUYWIoe1xuXHRcdFx0XHRcdFx0XHRcdFx0dXJsOiAnL3BhZ2VzL2luZGV4L2luZGV4J1xuXHRcdFx0XHRcdFx0XHRcdH0pXG5cdFx0XHRcdFx0XHRcdH1cblx0XHRcdFx0XHRcdH1cblx0XHRcdFx0XHR9KVxuXHRcdFx0XHR9XG5cdFx0XHR9XG5cdFx0KTtcblx0fVxuXG59KTtcbiJdfQ==