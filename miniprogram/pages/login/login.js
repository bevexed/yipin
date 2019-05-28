"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var index_1 = require("../../api/index");
Page({
    data: {
        openid: '',
        exist: 0
    },
    onLoad: function () {
        this.login();
        this.login();
    },
    doCheck: function () {
        var _this_1 = this;
        var openid = this.data.openid;
        console.log(openid);
        wx.showLoading({
            title: ''
        });
        index_1.reqCheckUser(openid).then(function (res) {
            wx.hideLoading();
            _this_1.setData({
                exist: res
            });
        });
    },
    login: function () {
        var _this = this;
        wx.getStorage({
            key: 'openid',
            success: function (res) {
                _this.setData({
                    openid: res.data
                }, function () { return _this.doCheck(); });
            }
        });
        if (!this.data.openid) {
            return;
        }
        var exist = this.data.exist;
        index_1.reqLogin({ type: 1, openid: this.data.openid }).then(function (res) {
            console.log('token', res);
            if (res.code === 1) {
                wx.setStorage({
                    key: 'token',
                    data: res.data,
                    success: function () {
                        if (exist === 0) {
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
    },
});
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoibG9naW4uanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyJsb2dpbi50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOztBQUFBLHlDQUF1RDtBQUV2RCxJQUFJLENBQUM7SUFDSixJQUFJLEVBQUU7UUFDTCxNQUFNLEVBQUUsRUFBRTtRQUNWLEtBQUssRUFBRSxDQUFDO0tBQ1I7SUFFRCxNQUFNO1FBV0wsSUFBSSxDQUFDLEtBQUssRUFBRSxDQUFDO1FBQ2IsSUFBSSxDQUFDLEtBQUssRUFBRSxDQUFDO0lBRWQsQ0FBQztJQUVELE9BQU8sRUFBUDtRQUFBLG1CQWNDO1FBYk8sSUFBQSx5QkFBTSxDQUFjO1FBQzNCLE9BQU8sQ0FBQyxHQUFHLENBQUMsTUFBTSxDQUFDLENBQUM7UUFDcEIsRUFBRSxDQUFDLFdBQVcsQ0FBQztZQUNkLEtBQUssRUFBQyxFQUFFO1NBQ1IsQ0FBQyxDQUFDO1FBQ0gsb0JBQVksQ0FBQyxNQUFNLENBQUMsQ0FBQyxJQUFJLENBQ3hCLFVBQUMsR0FBUTtZQUNSLEVBQUUsQ0FBQyxXQUFXLEVBQUUsQ0FBQztZQUNqQixPQUFJLENBQUMsT0FBUSxDQUFDO2dCQUNiLEtBQUssRUFBRSxHQUFHO2FBQ1YsQ0FBQyxDQUFBO1FBQ0gsQ0FBQyxDQUNELENBQUE7SUFDRixDQUFDO0lBRUQsS0FBSyxFQUFMO1FBRUMsSUFBTSxLQUFLLEdBQUcsSUFBSSxDQUFDO1FBRW5CLEVBQUUsQ0FBQyxVQUFVLENBQUM7WUFDYixHQUFHLEVBQUUsUUFBUTtZQUNiLE9BQU8sRUFBUCxVQUFRLEdBQUc7Z0JBQ1YsS0FBSyxDQUFDLE9BQVEsQ0FBQztvQkFDZCxNQUFNLEVBQUUsR0FBRyxDQUFDLElBQUk7aUJBQ2hCLEVBQUUsY0FBTSxPQUFBLEtBQUssQ0FBQyxPQUFPLEVBQUUsRUFBZixDQUFlLENBQUMsQ0FBQztZQUMzQixDQUFDO1NBQ0QsQ0FBQyxDQUFDO1FBRUgsSUFBSSxDQUFDLElBQUksQ0FBQyxJQUFJLENBQUMsTUFBTSxFQUFDO1lBQ3JCLE9BQU07U0FDTjtRQUVNLElBQUEsdUJBQUssQ0FBYztRQUMxQixnQkFBUSxDQUFDLEVBQUMsSUFBSSxFQUFFLENBQUMsRUFBRSxNQUFNLEVBQUUsSUFBSSxDQUFDLElBQUksQ0FBQyxNQUFNLEVBQUMsQ0FBQyxDQUFDLElBQUksQ0FDakQsVUFBQSxHQUFHO1lBQ0YsT0FBTyxDQUFDLEdBQUcsQ0FBQyxPQUFPLEVBQUMsR0FBRyxDQUFDLENBQUM7WUFDekIsSUFBSSxHQUFHLENBQUMsSUFBSSxLQUFLLENBQUMsRUFBRTtnQkFDbkIsRUFBRSxDQUFDLFVBQVUsQ0FBQztvQkFDYixHQUFHLEVBQUUsT0FBTztvQkFDWixJQUFJLEVBQUUsR0FBRyxDQUFDLElBQUk7b0JBQ2QsT0FBTzt3QkFDTixJQUFJLEtBQUssS0FBSyxDQUFDLEVBQUU7NEJBQ2hCLEVBQUUsQ0FBQyxVQUFVLENBQUM7Z0NBQ2IsR0FBRyxFQUFFLG9CQUFvQjs2QkFDekIsQ0FBQyxDQUFDO3lCQUNIOzZCQUFNOzRCQUNOLEVBQUUsQ0FBQyxTQUFTLENBQUM7Z0NBQ1osR0FBRyxFQUFFLG9CQUFvQjs2QkFDekIsQ0FBQyxDQUFBO3lCQUNGO29CQUNGLENBQUM7aUJBQ0QsQ0FBQyxDQUFBO2FBQ0Y7UUFDRixDQUFDLENBQ0QsQ0FBQztJQUVILENBQUM7Q0FFRCxDQUFDLENBQUMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQge3JlcUNoZWNrVXNlciwgcmVxTG9naW59IGZyb20gXCIuLi8uLi9hcGkvaW5kZXhcIjtcblxuUGFnZSh7XG5cdGRhdGE6IHtcblx0XHRvcGVuaWQ6ICcnLFxuXHRcdGV4aXN0OiAwXG5cdH0sXG5cblx0b25Mb2FkKCkge1xuXHRcdC8vIGNvbnN0IF90aGlzID0gdGhpcztcblx0XHQvLyB3eC5nZXRTdG9yYWdlKHtcblx0XHQvLyBcdGtleTogJ29wZW5pZCcsXG5cdFx0Ly8gXHRzdWNjZXNzKHJlcykge1xuXHRcdC8vIFx0XHRfdGhpcy5zZXREYXRhISh7XG5cdFx0Ly8gXHRcdFx0b3BlbmlkOiByZXMuZGF0YVxuXHRcdC8vIFx0XHR9LCAoKSA9PiBfdGhpcy5kb0NoZWNrKCkpO1xuXHRcdC8vIFx0fVxuXHRcdC8vIH0pXG5cblx0XHR0aGlzLmxvZ2luKCk7XG5cdFx0dGhpcy5sb2dpbigpO1xuXG5cdH0sXG5cblx0ZG9DaGVjaygpIHtcblx0XHRjb25zdCB7b3BlbmlkfSA9IHRoaXMuZGF0YTtcblx0XHRjb25zb2xlLmxvZyhvcGVuaWQpO1xuXHRcdHd4LnNob3dMb2FkaW5nKHtcblx0XHRcdHRpdGxlOicnXG5cdFx0fSk7XG5cdFx0cmVxQ2hlY2tVc2VyKG9wZW5pZCkudGhlbihcblx0XHRcdChyZXM6IGFueSkgPT4ge1xuXHRcdFx0XHR3eC5oaWRlTG9hZGluZygpO1xuXHRcdFx0XHR0aGlzLnNldERhdGEhKHtcblx0XHRcdFx0XHRleGlzdDogcmVzXG5cdFx0XHRcdH0pXG5cdFx0XHR9XG5cdFx0KVxuXHR9LFxuXG5cdGxvZ2luKCkge1xuXG5cdFx0Y29uc3QgX3RoaXMgPSB0aGlzO1xuXG5cdFx0d3guZ2V0U3RvcmFnZSh7XG5cdFx0XHRrZXk6ICdvcGVuaWQnLFxuXHRcdFx0c3VjY2VzcyhyZXMpIHtcblx0XHRcdFx0X3RoaXMuc2V0RGF0YSEoe1xuXHRcdFx0XHRcdG9wZW5pZDogcmVzLmRhdGFcblx0XHRcdFx0fSwgKCkgPT4gX3RoaXMuZG9DaGVjaygpKTtcblx0XHRcdH1cblx0XHR9KTtcblxuXHRcdGlmICghdGhpcy5kYXRhLm9wZW5pZCl7XG5cdFx0XHRyZXR1cm5cblx0XHR9XG5cblx0XHRjb25zdCB7ZXhpc3R9ID0gdGhpcy5kYXRhO1xuXHRcdHJlcUxvZ2luKHt0eXBlOiAxLCBvcGVuaWQ6IHRoaXMuZGF0YS5vcGVuaWR9KS50aGVuKFxuXHRcdFx0cmVzID0+IHtcblx0XHRcdFx0Y29uc29sZS5sb2coJ3Rva2VuJyxyZXMpO1xuXHRcdFx0XHRpZiAocmVzLmNvZGUgPT09IDEpIHtcblx0XHRcdFx0XHR3eC5zZXRTdG9yYWdlKHtcblx0XHRcdFx0XHRcdGtleTogJ3Rva2VuJyxcblx0XHRcdFx0XHRcdGRhdGE6IHJlcy5kYXRhLFxuXHRcdFx0XHRcdFx0c3VjY2VzcygpIHtcblx0XHRcdFx0XHRcdFx0aWYgKGV4aXN0ID09PSAwKSB7XG5cdFx0XHRcdFx0XHRcdFx0d3gubmF2aWdhdGVUbyh7XG5cdFx0XHRcdFx0XHRcdFx0XHR1cmw6ICcvY29tcGxldGUvY29tcGxldGUnXG5cdFx0XHRcdFx0XHRcdFx0fSk7XG5cdFx0XHRcdFx0XHRcdH0gZWxzZSB7XG5cdFx0XHRcdFx0XHRcdFx0d3guc3dpdGNoVGFiKHtcblx0XHRcdFx0XHRcdFx0XHRcdHVybDogJy9wYWdlcy9pbmRleC9pbmRleCdcblx0XHRcdFx0XHRcdFx0XHR9KVxuXHRcdFx0XHRcdFx0XHR9XG5cdFx0XHRcdFx0XHR9XG5cdFx0XHRcdFx0fSlcblx0XHRcdFx0fVxuXHRcdFx0fVxuXHRcdCk7XG5cblx0fSxcblxufSk7XG4iXX0=