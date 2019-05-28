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
            title: ''
        });
        index_1.reqCheckUser(openid).then(function (res) {
            wx.hideLoading();
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
    }
});
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoibG9naW4uanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyJsb2dpbi50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOztBQUFBLHlDQUF1RDtBQUV2RCxJQUFJLENBQUM7SUFDSixJQUFJLEVBQUU7UUFDTCxNQUFNLEVBQUUsRUFBRTtRQUNWLEtBQUssRUFBRSxDQUFDO0tBQ1I7SUFFRCxNQUFNO0lBVU4sQ0FBQztJQUVELE9BQU8sRUFBUDtRQUFBLG1CQWNDO1FBYk8sSUFBQSx5QkFBTSxDQUFjO1FBQzNCLE9BQU8sQ0FBQyxHQUFHLENBQUMsTUFBTSxDQUFDLENBQUM7UUFDcEIsRUFBRSxDQUFDLFdBQVcsQ0FBQztZQUNkLEtBQUssRUFBQyxFQUFFO1NBQ1IsQ0FBQyxDQUFDO1FBQ0gsb0JBQVksQ0FBQyxNQUFNLENBQUMsQ0FBQyxJQUFJLENBQ3hCLFVBQUMsR0FBUTtZQUNSLEVBQUUsQ0FBQyxXQUFXLEVBQUUsQ0FBQztZQUNqQixPQUFJLENBQUMsT0FBUSxDQUFDO2dCQUNiLEtBQUssRUFBRSxHQUFHO2FBQ1YsRUFBQyxjQUFJLE9BQUEsT0FBSSxDQUFDLEtBQUssRUFBRSxFQUFaLENBQVksQ0FBQyxDQUFBO1FBQ3BCLENBQUMsQ0FDRCxDQUFBO0lBQ0YsQ0FBQztJQUVBLFdBQVcsWUFBQyxDQUFDO1FBQ1gsSUFBRyxDQUFDLENBQUMsTUFBTSxDQUFDLE1BQU0sQ0FBQyxRQUFRLENBQUMsSUFBSSxDQUFDLEVBQUM7WUFDaEMsSUFBSSxDQUFDLEtBQUssRUFBRSxDQUFDO1NBQ2Q7YUFBSTtTQUVKO0lBQ0gsQ0FBQztJQUNGLEtBQUssRUFBTDtRQUVDLElBQU0sS0FBSyxHQUFHLElBQUksQ0FBQztRQUVuQixFQUFFLENBQUMsVUFBVSxDQUFDO1lBQ2IsR0FBRyxFQUFFLFFBQVE7WUFDYixPQUFPLEVBQVAsVUFBUSxHQUFHO2dCQUNWLEtBQUssQ0FBQyxPQUFRLENBQUM7b0JBQ2QsTUFBTSxFQUFFLEdBQUcsQ0FBQyxJQUFJO2lCQUNoQixFQUFFLGNBQU0sT0FBQSxLQUFLLENBQUMsT0FBTyxFQUFFLEVBQWYsQ0FBZSxDQUFDLENBQUM7WUFDM0IsQ0FBQztTQUNELENBQUMsQ0FBQztJQU9KLENBQUM7SUFFQSxLQUFLO1FBQ0gsT0FBTyxDQUFDLEdBQUcsQ0FBQyxJQUFJLENBQUMsSUFBSSxDQUFDLE1BQU0sQ0FBQyxDQUFBO1FBQzdCLElBQUksQ0FBQyxJQUFJLENBQUMsSUFBSSxDQUFDLE1BQU0sRUFBRTtZQUNyQixPQUFNO1NBQ1A7UUFFTyxJQUFBLHVCQUFLLENBQWU7UUFFNUIsSUFBSSxLQUFLLEtBQUssQ0FBQyxFQUFFO1lBQ2YsRUFBRSxDQUFDLFVBQVUsQ0FBQztnQkFDWixHQUFHLEVBQUUsb0JBQW9CO2FBQzFCLENBQUMsQ0FBQztZQUNILE9BQU87U0FDUjthQUFNO1lBQ0wsRUFBRSxDQUFDLFNBQVMsQ0FBQztnQkFDWCxHQUFHLEVBQUUsb0JBQW9CO2FBQzFCLENBQUMsQ0FBQTtTQUNIO1FBRUQsZ0JBQVEsQ0FBQyxFQUFFLElBQUksRUFBRSxDQUFDLEVBQUUsTUFBTSxFQUFFLElBQUksQ0FBQyxJQUFJLENBQUMsTUFBTSxFQUFFLENBQUMsQ0FBQyxJQUFJLENBQ2xELFVBQUEsR0FBRztZQUNELE9BQU8sQ0FBQyxHQUFHLENBQUMsT0FBTyxFQUFFLEdBQUcsQ0FBQyxDQUFDO1lBQzFCLElBQUksR0FBRyxDQUFDLElBQUksS0FBSyxDQUFDLEVBQUU7Z0JBQ2xCLEVBQUUsQ0FBQyxVQUFVLENBQUM7b0JBQ1osR0FBRyxFQUFFLE9BQU87b0JBQ1osSUFBSSxFQUFFLEdBQUcsQ0FBQyxJQUFJO29CQUNkLE9BQU87d0JBQ0wsSUFBSSxLQUFLLEtBQUssQ0FBQyxFQUFFOzRCQUNmLEVBQUUsQ0FBQyxVQUFVLENBQUM7Z0NBQ1osR0FBRyxFQUFFLG9CQUFvQjs2QkFDMUIsQ0FBQyxDQUFDO3lCQUNKOzZCQUFNOzRCQUNMLEVBQUUsQ0FBQyxTQUFTLENBQUM7Z0NBQ1gsR0FBRyxFQUFFLG9CQUFvQjs2QkFDMUIsQ0FBQyxDQUFBO3lCQUNIO29CQUNILENBQUM7aUJBQ0YsQ0FBQyxDQUFBO2FBQ0g7UUFDSCxDQUFDLENBQ0YsQ0FBQztJQUNKLENBQUM7Q0FFRixDQUFDLENBQUMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQge3JlcUNoZWNrVXNlciwgcmVxTG9naW59IGZyb20gXCIuLi8uLi9hcGkvaW5kZXhcIjtcblxuUGFnZSh7XG5cdGRhdGE6IHtcblx0XHRvcGVuaWQ6ICcnLFxuXHRcdGV4aXN0OiAwXG5cdH0sXG5cblx0b25Mb2FkKCkge1xuXHRcdC8vIGNvbnN0IF90aGlzID0gdGhpcztcblx0XHQvLyB3eC5nZXRTdG9yYWdlKHtcblx0XHQvLyBcdGtleTogJ29wZW5pZCcsXG5cdFx0Ly8gXHRzdWNjZXNzKHJlcykge1xuXHRcdC8vIFx0XHRfdGhpcy5zZXREYXRhISh7XG5cdFx0Ly8gXHRcdFx0b3BlbmlkOiByZXMuZGF0YVxuXHRcdC8vIFx0XHR9LCAoKSA9PiBfdGhpcy5kb0NoZWNrKCkpO1xuXHRcdC8vIFx0fVxuXHRcdC8vIH0pXG5cdH0sXG5cblx0ZG9DaGVjaygpIHtcblx0XHRjb25zdCB7b3BlbmlkfSA9IHRoaXMuZGF0YTtcblx0XHRjb25zb2xlLmxvZyhvcGVuaWQpO1xuXHRcdHd4LnNob3dMb2FkaW5nKHtcblx0XHRcdHRpdGxlOicnXG5cdFx0fSk7XG5cdFx0cmVxQ2hlY2tVc2VyKG9wZW5pZCkudGhlbihcblx0XHRcdChyZXM6IGFueSkgPT4ge1xuXHRcdFx0XHR3eC5oaWRlTG9hZGluZygpO1xuXHRcdFx0XHR0aGlzLnNldERhdGEhKHtcblx0XHRcdFx0XHRleGlzdDogcmVzXG5cdFx0XHRcdH0sKCk9PnRoaXMuY2hlY2soKSlcblx0XHRcdH1cblx0XHQpXG5cdH0sXG5cbiAgZ2V0VXNlckluZm8oZSl7XG4gICAgaWYoZS5kZXRhaWwuZXJyTXNnLmluY2x1ZGVzKCdvaycpKXtcbiAgICAgIHRoaXMubG9naW4oKTtcbiAgICB9ZWxzZXtcbiAgICAgIFxuICAgIH1cbiAgfSxcblx0bG9naW4oKSB7XG5cblx0XHRjb25zdCBfdGhpcyA9IHRoaXM7XG5cblx0XHR3eC5nZXRTdG9yYWdlKHtcblx0XHRcdGtleTogJ29wZW5pZCcsXG5cdFx0XHRzdWNjZXNzKHJlcykge1xuXHRcdFx0XHRfdGhpcy5zZXREYXRhISh7XG5cdFx0XHRcdFx0b3BlbmlkOiByZXMuZGF0YVxuXHRcdFx0XHR9LCAoKSA9PiBfdGhpcy5kb0NoZWNrKCkpO1xuXHRcdFx0fVxuXHRcdH0pO1xuICAgIC8vIGNvbnN0IG9wZW5pZCA9IHd4LmdldFN0b3JhZ2UoJ29wZW5pZCcpO1xuICAgIC8vICAgdGhpcy5zZXREYXRhISh7XG4gICAgLy8gICAgIG9wZW5pZDogb3BlbmlkXG4gICAgLy8gICB9KVxuIFxuXG5cdH0sXG5cbiAgY2hlY2soKXtcbiAgICBjb25zb2xlLmxvZyh0aGlzLmRhdGEub3BlbmlkKVxuICAgIGlmICghdGhpcy5kYXRhLm9wZW5pZCkge1xuICAgICAgcmV0dXJuXG4gICAgfVxuXG4gICAgY29uc3QgeyBleGlzdCB9ID0gdGhpcy5kYXRhO1xuXG4gICAgaWYgKGV4aXN0ID09PSAwKSB7XG4gICAgICB3eC5uYXZpZ2F0ZVRvKHtcbiAgICAgICAgdXJsOiAnL2NvbXBsZXRlL2NvbXBsZXRlJ1xuICAgICAgfSk7XG4gICAgICByZXR1cm47XG4gICAgfSBlbHNlIHtcbiAgICAgIHd4LnN3aXRjaFRhYih7XG4gICAgICAgIHVybDogJy9wYWdlcy9pbmRleC9pbmRleCdcbiAgICAgIH0pXG4gICAgfVxuXG4gICAgcmVxTG9naW4oeyB0eXBlOiAxLCBvcGVuaWQ6IHRoaXMuZGF0YS5vcGVuaWQgfSkudGhlbihcbiAgICAgIHJlcyA9PiB7XG4gICAgICAgIGNvbnNvbGUubG9nKCd0b2tlbicsIHJlcyk7XG4gICAgICAgIGlmIChyZXMuY29kZSA9PT0gMSkge1xuICAgICAgICAgIHd4LnNldFN0b3JhZ2Uoe1xuICAgICAgICAgICAga2V5OiAndG9rZW4nLFxuICAgICAgICAgICAgZGF0YTogcmVzLmRhdGEsXG4gICAgICAgICAgICBzdWNjZXNzKCkge1xuICAgICAgICAgICAgICBpZiAoZXhpc3QgPT09IDApIHtcbiAgICAgICAgICAgICAgICB3eC5uYXZpZ2F0ZVRvKHtcbiAgICAgICAgICAgICAgICAgIHVybDogJy9jb21wbGV0ZS9jb21wbGV0ZSdcbiAgICAgICAgICAgICAgICB9KTtcbiAgICAgICAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgICAgICB3eC5zd2l0Y2hUYWIoe1xuICAgICAgICAgICAgICAgICAgdXJsOiAnL3BhZ2VzL2luZGV4L2luZGV4J1xuICAgICAgICAgICAgICAgIH0pXG4gICAgICAgICAgICAgIH1cbiAgICAgICAgICAgIH1cbiAgICAgICAgICB9KVxuICAgICAgICB9XG4gICAgICB9XG4gICAgKTtcbiAgfVxuXG59KTtcbiJdfQ==