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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoibG9naW4uanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyJsb2dpbi50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOztBQUFBLHlDQUF1RDtBQUV2RCxJQUFJLENBQUM7SUFDSixJQUFJLEVBQUU7UUFDTCxNQUFNLEVBQUUsRUFBRTtRQUNWLEtBQUssRUFBRSxDQUFDO0tBQ1I7SUFFRCxNQUFNO0lBVU4sQ0FBQztJQUVELE9BQU8sRUFBUDtRQUFBLG1CQWNDO1FBYk8sSUFBQSx5QkFBTSxDQUFjO1FBQzNCLE9BQU8sQ0FBQyxHQUFHLENBQUMsTUFBTSxDQUFDLENBQUM7UUFDcEIsRUFBRSxDQUFDLFdBQVcsQ0FBQztZQUNkLEtBQUssRUFBQyxFQUFFO1NBQ1IsQ0FBQyxDQUFDO1FBQ0gsb0JBQVksQ0FBQyxNQUFNLENBQUMsQ0FBQyxJQUFJLENBQ3hCLFVBQUMsR0FBUTtZQUNSLEVBQUUsQ0FBQyxXQUFXLEVBQUUsQ0FBQztZQUNqQixPQUFJLENBQUMsT0FBUSxDQUFDO2dCQUNiLEtBQUssRUFBRSxHQUFHO2FBQ1YsRUFBQyxjQUFJLE9BQUEsT0FBSSxDQUFDLEtBQUssRUFBRSxFQUFaLENBQVksQ0FBQyxDQUFBO1FBQ3BCLENBQUMsQ0FDRCxDQUFBO0lBQ0YsQ0FBQztJQUVBLFdBQVcsRUFBWCxVQUFZLENBQUs7UUFDZixJQUFHLENBQUMsQ0FBQyxNQUFNLENBQUMsTUFBTSxDQUFDLFFBQVEsQ0FBQyxJQUFJLENBQUMsRUFBQztZQUNoQyxJQUFJLENBQUMsS0FBSyxFQUFFLENBQUM7U0FDZDthQUFJO1NBRUo7SUFDSCxDQUFDO0lBQ0YsS0FBSyxFQUFMO1FBRUMsSUFBTSxLQUFLLEdBQUcsSUFBSSxDQUFDO1FBRW5CLEVBQUUsQ0FBQyxVQUFVLENBQUM7WUFDYixHQUFHLEVBQUUsUUFBUTtZQUNiLE9BQU8sRUFBUCxVQUFRLEdBQUc7Z0JBQ1YsS0FBSyxDQUFDLE9BQVEsQ0FBQztvQkFDZCxNQUFNLEVBQUUsR0FBRyxDQUFDLElBQUk7aUJBQ2hCLEVBQUUsY0FBTSxPQUFBLEtBQUssQ0FBQyxPQUFPLEVBQUUsRUFBZixDQUFlLENBQUMsQ0FBQztZQUMzQixDQUFDO1NBQ0QsQ0FBQyxDQUFDO0lBT0osQ0FBQztJQUVBLEtBQUs7UUFDSCxPQUFPLENBQUMsR0FBRyxDQUFDLElBQUksQ0FBQyxJQUFJLENBQUMsTUFBTSxDQUFDLENBQUE7UUFDN0IsSUFBSSxDQUFDLElBQUksQ0FBQyxJQUFJLENBQUMsTUFBTSxFQUFFO1lBQ3JCLE9BQU07U0FDUDtRQUVPLElBQUEsdUJBQUssQ0FBZTtRQUU1QixJQUFJLEtBQUssS0FBSyxDQUFDLEVBQUU7WUFDZixFQUFFLENBQUMsVUFBVSxDQUFDO2dCQUNaLEdBQUcsRUFBRSxvQkFBb0I7YUFDMUIsQ0FBQyxDQUFDO1lBQ0gsT0FBTztTQUNSO2FBQU07WUFDTCxFQUFFLENBQUMsU0FBUyxDQUFDO2dCQUNYLEdBQUcsRUFBRSxvQkFBb0I7YUFDMUIsQ0FBQyxDQUFBO1NBQ0g7UUFFRCxnQkFBUSxDQUFDLEVBQUUsSUFBSSxFQUFFLENBQUMsRUFBRSxNQUFNLEVBQUUsSUFBSSxDQUFDLElBQUksQ0FBQyxNQUFNLEVBQUUsQ0FBQyxDQUFDLElBQUksQ0FDbEQsVUFBQSxHQUFHO1lBQ0QsT0FBTyxDQUFDLEdBQUcsQ0FBQyxPQUFPLEVBQUUsR0FBRyxDQUFDLENBQUM7WUFDMUIsSUFBSSxHQUFHLENBQUMsSUFBSSxLQUFLLENBQUMsRUFBRTtnQkFDbEIsRUFBRSxDQUFDLFVBQVUsQ0FBQztvQkFDWixHQUFHLEVBQUUsT0FBTztvQkFDWixJQUFJLEVBQUUsR0FBRyxDQUFDLElBQUk7b0JBQ2QsT0FBTzt3QkFDTCxJQUFJLEtBQUssS0FBSyxDQUFDLEVBQUU7NEJBQ2YsRUFBRSxDQUFDLFVBQVUsQ0FBQztnQ0FDWixHQUFHLEVBQUUsb0JBQW9COzZCQUMxQixDQUFDLENBQUM7eUJBQ0o7NkJBQU07NEJBQ0wsRUFBRSxDQUFDLFNBQVMsQ0FBQztnQ0FDWCxHQUFHLEVBQUUsb0JBQW9COzZCQUMxQixDQUFDLENBQUE7eUJBQ0g7b0JBQ0gsQ0FBQztpQkFDRixDQUFDLENBQUE7YUFDSDtRQUNILENBQUMsQ0FDRixDQUFDO0lBQ0osQ0FBQztDQUVGLENBQUMsQ0FBQyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7cmVxQ2hlY2tVc2VyLCByZXFMb2dpbn0gZnJvbSBcIi4uLy4uL2FwaS9pbmRleFwiO1xyXG5cclxuUGFnZSh7XHJcblx0ZGF0YToge1xyXG5cdFx0b3BlbmlkOiAnJyxcclxuXHRcdGV4aXN0OiAwXHJcblx0fSxcclxuXHJcblx0b25Mb2FkKCkge1xyXG5cdFx0Ly8gY29uc3QgX3RoaXMgPSB0aGlzO1xyXG5cdFx0Ly8gd3guZ2V0U3RvcmFnZSh7XHJcblx0XHQvLyBcdGtleTogJ29wZW5pZCcsXHJcblx0XHQvLyBcdHN1Y2Nlc3MocmVzKSB7XHJcblx0XHQvLyBcdFx0X3RoaXMuc2V0RGF0YSEoe1xyXG5cdFx0Ly8gXHRcdFx0b3BlbmlkOiByZXMuZGF0YVxyXG5cdFx0Ly8gXHRcdH0sICgpID0+IF90aGlzLmRvQ2hlY2soKSk7XHJcblx0XHQvLyBcdH1cclxuXHRcdC8vIH0pXHJcblx0fSxcclxuXHJcblx0ZG9DaGVjaygpIHtcclxuXHRcdGNvbnN0IHtvcGVuaWR9ID0gdGhpcy5kYXRhO1xyXG5cdFx0Y29uc29sZS5sb2cob3BlbmlkKTtcclxuXHRcdHd4LnNob3dMb2FkaW5nKHtcclxuXHRcdFx0dGl0bGU6JydcclxuXHRcdH0pO1xyXG5cdFx0cmVxQ2hlY2tVc2VyKG9wZW5pZCkudGhlbihcclxuXHRcdFx0KHJlczogYW55KSA9PiB7XHJcblx0XHRcdFx0d3guaGlkZUxvYWRpbmcoKTtcclxuXHRcdFx0XHR0aGlzLnNldERhdGEhKHtcclxuXHRcdFx0XHRcdGV4aXN0OiByZXNcclxuXHRcdFx0XHR9LCgpPT50aGlzLmNoZWNrKCkpXHJcblx0XHRcdH1cclxuXHRcdClcclxuXHR9LFxyXG5cclxuICBnZXRVc2VySW5mbyhlOmFueSl7XHJcbiAgICBpZihlLmRldGFpbC5lcnJNc2cuaW5jbHVkZXMoJ29rJykpe1xyXG4gICAgICB0aGlzLmxvZ2luKCk7XHJcbiAgICB9ZWxzZXtcclxuXHJcbiAgICB9XHJcbiAgfSxcclxuXHRsb2dpbigpIHtcclxuXHJcblx0XHRjb25zdCBfdGhpcyA9IHRoaXM7XHJcblxyXG5cdFx0d3guZ2V0U3RvcmFnZSh7XHJcblx0XHRcdGtleTogJ29wZW5pZCcsXHJcblx0XHRcdHN1Y2Nlc3MocmVzKSB7XHJcblx0XHRcdFx0X3RoaXMuc2V0RGF0YSEoe1xyXG5cdFx0XHRcdFx0b3BlbmlkOiByZXMuZGF0YVxyXG5cdFx0XHRcdH0sICgpID0+IF90aGlzLmRvQ2hlY2soKSk7XHJcblx0XHRcdH1cclxuXHRcdH0pO1xyXG4gICAgLy8gY29uc3Qgb3BlbmlkID0gd3guZ2V0U3RvcmFnZSgnb3BlbmlkJyk7XHJcbiAgICAvLyAgIHRoaXMuc2V0RGF0YSEoe1xyXG4gICAgLy8gICAgIG9wZW5pZDogb3BlbmlkXHJcbiAgICAvLyAgIH0pXHJcblxyXG5cclxuXHR9LFxyXG5cclxuICBjaGVjaygpe1xyXG4gICAgY29uc29sZS5sb2codGhpcy5kYXRhLm9wZW5pZClcclxuICAgIGlmICghdGhpcy5kYXRhLm9wZW5pZCkge1xyXG4gICAgICByZXR1cm5cclxuICAgIH1cclxuXHJcbiAgICBjb25zdCB7IGV4aXN0IH0gPSB0aGlzLmRhdGE7XHJcblxyXG4gICAgaWYgKGV4aXN0ID09PSAwKSB7XHJcbiAgICAgIHd4Lm5hdmlnYXRlVG8oe1xyXG4gICAgICAgIHVybDogJy9jb21wbGV0ZS9jb21wbGV0ZSdcclxuICAgICAgfSk7XHJcbiAgICAgIHJldHVybjtcclxuICAgIH0gZWxzZSB7XHJcbiAgICAgIHd4LnN3aXRjaFRhYih7XHJcbiAgICAgICAgdXJsOiAnL3BhZ2VzL2luZGV4L2luZGV4J1xyXG4gICAgICB9KVxyXG4gICAgfVxyXG5cclxuICAgIHJlcUxvZ2luKHsgdHlwZTogMSwgb3BlbmlkOiB0aGlzLmRhdGEub3BlbmlkIH0pLnRoZW4oXHJcbiAgICAgIHJlcyA9PiB7XHJcbiAgICAgICAgY29uc29sZS5sb2coJ3Rva2VuJywgcmVzKTtcclxuICAgICAgICBpZiAocmVzLmNvZGUgPT09IDEpIHtcclxuICAgICAgICAgIHd4LnNldFN0b3JhZ2Uoe1xyXG4gICAgICAgICAgICBrZXk6ICd0b2tlbicsXHJcbiAgICAgICAgICAgIGRhdGE6IHJlcy5kYXRhLFxyXG4gICAgICAgICAgICBzdWNjZXNzKCkge1xyXG4gICAgICAgICAgICAgIGlmIChleGlzdCA9PT0gMCkge1xyXG4gICAgICAgICAgICAgICAgd3gubmF2aWdhdGVUbyh7XHJcbiAgICAgICAgICAgICAgICAgIHVybDogJy9jb21wbGV0ZS9jb21wbGV0ZSdcclxuICAgICAgICAgICAgICAgIH0pO1xyXG4gICAgICAgICAgICAgIH0gZWxzZSB7XHJcbiAgICAgICAgICAgICAgICB3eC5zd2l0Y2hUYWIoe1xyXG4gICAgICAgICAgICAgICAgICB1cmw6ICcvcGFnZXMvaW5kZXgvaW5kZXgnXHJcbiAgICAgICAgICAgICAgICB9KVxyXG4gICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgfVxyXG4gICAgICAgICAgfSlcclxuICAgICAgICB9XHJcbiAgICAgIH1cclxuICAgICk7XHJcbiAgfVxyXG5cclxufSk7XHJcbiJdfQ==