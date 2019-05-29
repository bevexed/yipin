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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoibG9naW4uanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyJsb2dpbi50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOztBQUFBLHlDQUF1RDtBQUV2RCxJQUFJLENBQUM7SUFDSixJQUFJLEVBQUU7UUFDTCxNQUFNLEVBQUUsRUFBRTtRQUNWLEtBQUssRUFBRSxDQUFDO0tBQ1I7SUFFRCxNQUFNO0lBVU4sQ0FBQztJQUVELE9BQU8sRUFBUDtRQUFBLG1CQWNDO1FBYk8sSUFBQSx5QkFBTSxDQUFjO1FBQzNCLE9BQU8sQ0FBQyxHQUFHLENBQUMsTUFBTSxDQUFDLENBQUM7UUFDcEIsRUFBRSxDQUFDLFdBQVcsQ0FBQztZQUNkLEtBQUssRUFBQyxFQUFFO1NBQ1IsQ0FBQyxDQUFDO1FBQ0gsb0JBQVksQ0FBQyxNQUFNLENBQUMsQ0FBQyxJQUFJLENBQ3hCLFVBQUMsR0FBUTtZQUNSLEVBQUUsQ0FBQyxXQUFXLEVBQUUsQ0FBQztZQUNqQixPQUFJLENBQUMsT0FBUSxDQUFDO2dCQUNiLEtBQUssRUFBRSxHQUFHO2FBQ1YsRUFBQyxjQUFJLE9BQUEsT0FBSSxDQUFDLEtBQUssRUFBRSxFQUFaLENBQVksQ0FBQyxDQUFBO1FBQ3BCLENBQUMsQ0FDRCxDQUFBO0lBQ0YsQ0FBQztJQUVBLFdBQVcsWUFBQyxDQUFDO1FBQ1gsSUFBRyxDQUFDLENBQUMsTUFBTSxDQUFDLE1BQU0sQ0FBQyxRQUFRLENBQUMsSUFBSSxDQUFDLEVBQUM7WUFDaEMsSUFBSSxDQUFDLEtBQUssRUFBRSxDQUFDO1NBQ2Q7YUFBSTtTQUVKO0lBQ0gsQ0FBQztJQUNGLEtBQUssRUFBTDtRQUVDLElBQU0sS0FBSyxHQUFHLElBQUksQ0FBQztRQUVuQixFQUFFLENBQUMsVUFBVSxDQUFDO1lBQ2IsR0FBRyxFQUFFLFFBQVE7WUFDYixPQUFPLEVBQVAsVUFBUSxHQUFHO2dCQUNWLEtBQUssQ0FBQyxPQUFRLENBQUM7b0JBQ2QsTUFBTSxFQUFFLEdBQUcsQ0FBQyxJQUFJO2lCQUNoQixFQUFFLGNBQU0sT0FBQSxLQUFLLENBQUMsT0FBTyxFQUFFLEVBQWYsQ0FBZSxDQUFDLENBQUM7WUFDM0IsQ0FBQztTQUNELENBQUMsQ0FBQztJQU9KLENBQUM7SUFFQSxLQUFLO1FBQ0gsT0FBTyxDQUFDLEdBQUcsQ0FBQyxJQUFJLENBQUMsSUFBSSxDQUFDLE1BQU0sQ0FBQyxDQUFBO1FBQzdCLElBQUksQ0FBQyxJQUFJLENBQUMsSUFBSSxDQUFDLE1BQU0sRUFBRTtZQUNyQixPQUFNO1NBQ1A7UUFFTyxJQUFBLHVCQUFLLENBQWU7UUFFNUIsSUFBSSxLQUFLLEtBQUssQ0FBQyxFQUFFO1lBQ2YsRUFBRSxDQUFDLFVBQVUsQ0FBQztnQkFDWixHQUFHLEVBQUUsb0JBQW9CO2FBQzFCLENBQUMsQ0FBQztZQUNILE9BQU87U0FDUjthQUFNO1lBQ0wsRUFBRSxDQUFDLFNBQVMsQ0FBQztnQkFDWCxHQUFHLEVBQUUsb0JBQW9CO2FBQzFCLENBQUMsQ0FBQTtTQUNIO1FBRUQsZ0JBQVEsQ0FBQyxFQUFFLElBQUksRUFBRSxDQUFDLEVBQUUsTUFBTSxFQUFFLElBQUksQ0FBQyxJQUFJLENBQUMsTUFBTSxFQUFFLENBQUMsQ0FBQyxJQUFJLENBQ2xELFVBQUEsR0FBRztZQUNELE9BQU8sQ0FBQyxHQUFHLENBQUMsT0FBTyxFQUFFLEdBQUcsQ0FBQyxDQUFDO1lBQzFCLElBQUksR0FBRyxDQUFDLElBQUksS0FBSyxDQUFDLEVBQUU7Z0JBQ2xCLEVBQUUsQ0FBQyxVQUFVLENBQUM7b0JBQ1osR0FBRyxFQUFFLE9BQU87b0JBQ1osSUFBSSxFQUFFLEdBQUcsQ0FBQyxJQUFJO29CQUNkLE9BQU87d0JBQ0wsSUFBSSxLQUFLLEtBQUssQ0FBQyxFQUFFOzRCQUNmLEVBQUUsQ0FBQyxVQUFVLENBQUM7Z0NBQ1osR0FBRyxFQUFFLG9CQUFvQjs2QkFDMUIsQ0FBQyxDQUFDO3lCQUNKOzZCQUFNOzRCQUNMLEVBQUUsQ0FBQyxTQUFTLENBQUM7Z0NBQ1gsR0FBRyxFQUFFLG9CQUFvQjs2QkFDMUIsQ0FBQyxDQUFBO3lCQUNIO29CQUNILENBQUM7aUJBQ0YsQ0FBQyxDQUFBO2FBQ0g7UUFDSCxDQUFDLENBQ0YsQ0FBQztJQUNKLENBQUM7Q0FFRixDQUFDLENBQUMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQge3JlcUNoZWNrVXNlciwgcmVxTG9naW59IGZyb20gXCIuLi8uLi9hcGkvaW5kZXhcIjtcclxuXHJcblBhZ2Uoe1xyXG5cdGRhdGE6IHtcclxuXHRcdG9wZW5pZDogJycsXHJcblx0XHRleGlzdDogMFxyXG5cdH0sXHJcblxyXG5cdG9uTG9hZCgpIHtcclxuXHRcdC8vIGNvbnN0IF90aGlzID0gdGhpcztcclxuXHRcdC8vIHd4LmdldFN0b3JhZ2Uoe1xyXG5cdFx0Ly8gXHRrZXk6ICdvcGVuaWQnLFxyXG5cdFx0Ly8gXHRzdWNjZXNzKHJlcykge1xyXG5cdFx0Ly8gXHRcdF90aGlzLnNldERhdGEhKHtcclxuXHRcdC8vIFx0XHRcdG9wZW5pZDogcmVzLmRhdGFcclxuXHRcdC8vIFx0XHR9LCAoKSA9PiBfdGhpcy5kb0NoZWNrKCkpO1xyXG5cdFx0Ly8gXHR9XHJcblx0XHQvLyB9KVxyXG5cdH0sXHJcblxyXG5cdGRvQ2hlY2soKSB7XHJcblx0XHRjb25zdCB7b3BlbmlkfSA9IHRoaXMuZGF0YTtcclxuXHRcdGNvbnNvbGUubG9nKG9wZW5pZCk7XHJcblx0XHR3eC5zaG93TG9hZGluZyh7XHJcblx0XHRcdHRpdGxlOicnXHJcblx0XHR9KTtcclxuXHRcdHJlcUNoZWNrVXNlcihvcGVuaWQpLnRoZW4oXHJcblx0XHRcdChyZXM6IGFueSkgPT4ge1xyXG5cdFx0XHRcdHd4LmhpZGVMb2FkaW5nKCk7XHJcblx0XHRcdFx0dGhpcy5zZXREYXRhISh7XHJcblx0XHRcdFx0XHRleGlzdDogcmVzXHJcblx0XHRcdFx0fSwoKT0+dGhpcy5jaGVjaygpKVxyXG5cdFx0XHR9XHJcblx0XHQpXHJcblx0fSxcclxuXHJcbiAgZ2V0VXNlckluZm8oZSl7XHJcbiAgICBpZihlLmRldGFpbC5lcnJNc2cuaW5jbHVkZXMoJ29rJykpe1xyXG4gICAgICB0aGlzLmxvZ2luKCk7XHJcbiAgICB9ZWxzZXtcclxuICAgICAgXHJcbiAgICB9XHJcbiAgfSxcclxuXHRsb2dpbigpIHtcclxuXHJcblx0XHRjb25zdCBfdGhpcyA9IHRoaXM7XHJcblxyXG5cdFx0d3guZ2V0U3RvcmFnZSh7XHJcblx0XHRcdGtleTogJ29wZW5pZCcsXHJcblx0XHRcdHN1Y2Nlc3MocmVzKSB7XHJcblx0XHRcdFx0X3RoaXMuc2V0RGF0YSEoe1xyXG5cdFx0XHRcdFx0b3BlbmlkOiByZXMuZGF0YVxyXG5cdFx0XHRcdH0sICgpID0+IF90aGlzLmRvQ2hlY2soKSk7XHJcblx0XHRcdH1cclxuXHRcdH0pO1xyXG4gICAgLy8gY29uc3Qgb3BlbmlkID0gd3guZ2V0U3RvcmFnZSgnb3BlbmlkJyk7XHJcbiAgICAvLyAgIHRoaXMuc2V0RGF0YSEoe1xyXG4gICAgLy8gICAgIG9wZW5pZDogb3BlbmlkXHJcbiAgICAvLyAgIH0pXHJcbiBcclxuXHJcblx0fSxcclxuXHJcbiAgY2hlY2soKXtcclxuICAgIGNvbnNvbGUubG9nKHRoaXMuZGF0YS5vcGVuaWQpXHJcbiAgICBpZiAoIXRoaXMuZGF0YS5vcGVuaWQpIHtcclxuICAgICAgcmV0dXJuXHJcbiAgICB9XHJcblxyXG4gICAgY29uc3QgeyBleGlzdCB9ID0gdGhpcy5kYXRhO1xyXG5cclxuICAgIGlmIChleGlzdCA9PT0gMCkge1xyXG4gICAgICB3eC5uYXZpZ2F0ZVRvKHtcclxuICAgICAgICB1cmw6ICcvY29tcGxldGUvY29tcGxldGUnXHJcbiAgICAgIH0pO1xyXG4gICAgICByZXR1cm47XHJcbiAgICB9IGVsc2Uge1xyXG4gICAgICB3eC5zd2l0Y2hUYWIoe1xyXG4gICAgICAgIHVybDogJy9wYWdlcy9pbmRleC9pbmRleCdcclxuICAgICAgfSlcclxuICAgIH1cclxuXHJcbiAgICByZXFMb2dpbih7IHR5cGU6IDEsIG9wZW5pZDogdGhpcy5kYXRhLm9wZW5pZCB9KS50aGVuKFxyXG4gICAgICByZXMgPT4ge1xyXG4gICAgICAgIGNvbnNvbGUubG9nKCd0b2tlbicsIHJlcyk7XHJcbiAgICAgICAgaWYgKHJlcy5jb2RlID09PSAxKSB7XHJcbiAgICAgICAgICB3eC5zZXRTdG9yYWdlKHtcclxuICAgICAgICAgICAga2V5OiAndG9rZW4nLFxyXG4gICAgICAgICAgICBkYXRhOiByZXMuZGF0YSxcclxuICAgICAgICAgICAgc3VjY2VzcygpIHtcclxuICAgICAgICAgICAgICBpZiAoZXhpc3QgPT09IDApIHtcclxuICAgICAgICAgICAgICAgIHd4Lm5hdmlnYXRlVG8oe1xyXG4gICAgICAgICAgICAgICAgICB1cmw6ICcvY29tcGxldGUvY29tcGxldGUnXHJcbiAgICAgICAgICAgICAgICB9KTtcclxuICAgICAgICAgICAgICB9IGVsc2Uge1xyXG4gICAgICAgICAgICAgICAgd3guc3dpdGNoVGFiKHtcclxuICAgICAgICAgICAgICAgICAgdXJsOiAnL3BhZ2VzL2luZGV4L2luZGV4J1xyXG4gICAgICAgICAgICAgICAgfSlcclxuICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICAgIH0pXHJcbiAgICAgICAgfVxyXG4gICAgICB9XHJcbiAgICApO1xyXG4gIH1cclxuXHJcbn0pO1xyXG4iXX0=