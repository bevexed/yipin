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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoibG9naW4uanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyJsb2dpbi50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOztBQUFBLHlDQUF1RDtBQUV2RCxJQUFJLENBQUM7SUFDSixJQUFJLEVBQUU7UUFDTCxNQUFNLEVBQUUsRUFBRTtRQUNWLEtBQUssRUFBRSxDQUFDO0tBQ1I7SUFFRCxNQUFNO0lBVU4sQ0FBQztJQUVELE9BQU8sRUFBUDtRQUFBLG1CQWNDO1FBYk8sSUFBQSx5QkFBTSxDQUFjO1FBQzNCLE9BQU8sQ0FBQyxHQUFHLENBQUMsTUFBTSxDQUFDLENBQUM7UUFDcEIsRUFBRSxDQUFDLFdBQVcsQ0FBQztZQUNkLEtBQUssRUFBQyxFQUFFO1NBQ1IsQ0FBQyxDQUFDO1FBQ0gsb0JBQVksQ0FBQyxNQUFNLENBQUMsQ0FBQyxJQUFJLENBQ3hCLFVBQUMsR0FBUTtZQUNSLEVBQUUsQ0FBQyxXQUFXLEVBQUUsQ0FBQztZQUNqQixPQUFJLENBQUMsT0FBUSxDQUFDO2dCQUNiLEtBQUssRUFBRSxHQUFHO2FBQ1YsRUFBQyxjQUFJLE9BQUEsT0FBSSxDQUFDLEtBQUssRUFBRSxFQUFaLENBQVksQ0FBQyxDQUFBO1FBQ3BCLENBQUMsQ0FDRCxDQUFBO0lBQ0YsQ0FBQztJQUVBLFdBQVcsRUFBWCxVQUFZLENBQUs7UUFDZixJQUFHLENBQUMsQ0FBQyxNQUFNLENBQUMsTUFBTSxDQUFDLFFBQVEsQ0FBQyxJQUFJLENBQUMsRUFBQztZQUNoQyxJQUFJLENBQUMsS0FBSyxFQUFFLENBQUM7U0FDZDthQUFJO1NBRUo7SUFDSCxDQUFDO0lBQ0YsS0FBSyxFQUFMO1FBRUMsSUFBTSxLQUFLLEdBQUcsSUFBSSxDQUFDO1FBRW5CLEVBQUUsQ0FBQyxVQUFVLENBQUM7WUFDYixHQUFHLEVBQUUsUUFBUTtZQUNiLE9BQU8sRUFBUCxVQUFRLEdBQUc7Z0JBQ1YsS0FBSyxDQUFDLE9BQVEsQ0FBQztvQkFDZCxNQUFNLEVBQUUsR0FBRyxDQUFDLElBQUk7aUJBQ2hCLEVBQUUsY0FBTSxPQUFBLEtBQUssQ0FBQyxPQUFPLEVBQUUsRUFBZixDQUFlLENBQUMsQ0FBQztZQUMzQixDQUFDO1NBQ0QsQ0FBQyxDQUFDO0lBT0osQ0FBQztJQUVBLEtBQUs7UUFDSCxPQUFPLENBQUMsR0FBRyxDQUFDLElBQUksQ0FBQyxJQUFJLENBQUMsTUFBTSxDQUFDLENBQUE7UUFDN0IsSUFBSSxDQUFDLElBQUksQ0FBQyxJQUFJLENBQUMsTUFBTSxFQUFFO1lBQ3JCLE9BQU07U0FDUDtRQUVPLElBQUEsdUJBQUssQ0FBZTtRQUU1QixJQUFJLEtBQUssS0FBSyxDQUFDLEVBQUU7WUFDZixFQUFFLENBQUMsVUFBVSxDQUFDO2dCQUNaLEdBQUcsRUFBRSxvQkFBb0I7YUFDMUIsQ0FBQyxDQUFDO1lBQ0gsT0FBTztTQUNSO2FBQU07WUFDTCxFQUFFLENBQUMsU0FBUyxDQUFDO2dCQUNYLEdBQUcsRUFBRSxvQkFBb0I7YUFDMUIsQ0FBQyxDQUFBO1NBQ0g7UUFFRCxnQkFBUSxDQUFDLEVBQUUsSUFBSSxFQUFFLENBQUMsRUFBRSxNQUFNLEVBQUUsSUFBSSxDQUFDLElBQUksQ0FBQyxNQUFNLEVBQUUsQ0FBQyxDQUFDLElBQUksQ0FDbEQsVUFBQSxHQUFHO1lBQ0QsT0FBTyxDQUFDLEdBQUcsQ0FBQyxPQUFPLEVBQUUsR0FBRyxDQUFDLENBQUM7WUFDMUIsSUFBSSxHQUFHLENBQUMsSUFBSSxLQUFLLENBQUMsRUFBRTtnQkFDbEIsRUFBRSxDQUFDLFVBQVUsQ0FBQztvQkFDWixHQUFHLEVBQUUsT0FBTztvQkFDWixJQUFJLEVBQUUsR0FBRyxDQUFDLElBQUk7b0JBQ2QsT0FBTzt3QkFDTCxJQUFJLEtBQUssS0FBSyxDQUFDLEVBQUU7NEJBQ2YsRUFBRSxDQUFDLFVBQVUsQ0FBQztnQ0FDWixHQUFHLEVBQUUsb0JBQW9COzZCQUMxQixDQUFDLENBQUM7eUJBQ0o7NkJBQU07NEJBQ0wsRUFBRSxDQUFDLFNBQVMsQ0FBQztnQ0FDWCxHQUFHLEVBQUUsb0JBQW9COzZCQUMxQixDQUFDLENBQUE7eUJBQ0g7b0JBQ0gsQ0FBQztpQkFDRixDQUFDLENBQUE7YUFDSDtRQUNILENBQUMsQ0FDRixDQUFDO0lBQ0osQ0FBQztDQUVGLENBQUMsQ0FBQyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7cmVxQ2hlY2tVc2VyLCByZXFMb2dpbn0gZnJvbSBcIi4uLy4uL2FwaS9pbmRleFwiO1xuXG5QYWdlKHtcblx0ZGF0YToge1xuXHRcdG9wZW5pZDogJycsXG5cdFx0ZXhpc3Q6IDBcblx0fSxcblxuXHRvbkxvYWQoKSB7XG5cdFx0Ly8gY29uc3QgX3RoaXMgPSB0aGlzO1xuXHRcdC8vIHd4LmdldFN0b3JhZ2Uoe1xuXHRcdC8vIFx0a2V5OiAnb3BlbmlkJyxcblx0XHQvLyBcdHN1Y2Nlc3MocmVzKSB7XG5cdFx0Ly8gXHRcdF90aGlzLnNldERhdGEhKHtcblx0XHQvLyBcdFx0XHRvcGVuaWQ6IHJlcy5kYXRhXG5cdFx0Ly8gXHRcdH0sICgpID0+IF90aGlzLmRvQ2hlY2soKSk7XG5cdFx0Ly8gXHR9XG5cdFx0Ly8gfSlcblx0fSxcblxuXHRkb0NoZWNrKCkge1xuXHRcdGNvbnN0IHtvcGVuaWR9ID0gdGhpcy5kYXRhO1xuXHRcdGNvbnNvbGUubG9nKG9wZW5pZCk7XG5cdFx0d3guc2hvd0xvYWRpbmcoe1xuXHRcdFx0dGl0bGU6Jydcblx0XHR9KTtcblx0XHRyZXFDaGVja1VzZXIob3BlbmlkKS50aGVuKFxuXHRcdFx0KHJlczogYW55KSA9PiB7XG5cdFx0XHRcdHd4LmhpZGVMb2FkaW5nKCk7XG5cdFx0XHRcdHRoaXMuc2V0RGF0YSEoe1xuXHRcdFx0XHRcdGV4aXN0OiByZXNcblx0XHRcdFx0fSwoKT0+dGhpcy5jaGVjaygpKVxuXHRcdFx0fVxuXHRcdClcblx0fSxcblxuICBnZXRVc2VySW5mbyhlOmFueSl7XG4gICAgaWYoZS5kZXRhaWwuZXJyTXNnLmluY2x1ZGVzKCdvaycpKXtcbiAgICAgIHRoaXMubG9naW4oKTtcbiAgICB9ZWxzZXtcblxuICAgIH1cbiAgfSxcblx0bG9naW4oKSB7XG5cblx0XHRjb25zdCBfdGhpcyA9IHRoaXM7XG5cblx0XHR3eC5nZXRTdG9yYWdlKHtcblx0XHRcdGtleTogJ29wZW5pZCcsXG5cdFx0XHRzdWNjZXNzKHJlcykge1xuXHRcdFx0XHRfdGhpcy5zZXREYXRhISh7XG5cdFx0XHRcdFx0b3BlbmlkOiByZXMuZGF0YVxuXHRcdFx0XHR9LCAoKSA9PiBfdGhpcy5kb0NoZWNrKCkpO1xuXHRcdFx0fVxuXHRcdH0pO1xuICAgIC8vIGNvbnN0IG9wZW5pZCA9IHd4LmdldFN0b3JhZ2UoJ29wZW5pZCcpO1xuICAgIC8vICAgdGhpcy5zZXREYXRhISh7XG4gICAgLy8gICAgIG9wZW5pZDogb3BlbmlkXG4gICAgLy8gICB9KVxuXG5cblx0fSxcblxuICBjaGVjaygpe1xuICAgIGNvbnNvbGUubG9nKHRoaXMuZGF0YS5vcGVuaWQpXG4gICAgaWYgKCF0aGlzLmRhdGEub3BlbmlkKSB7XG4gICAgICByZXR1cm5cbiAgICB9XG5cbiAgICBjb25zdCB7IGV4aXN0IH0gPSB0aGlzLmRhdGE7XG5cbiAgICBpZiAoZXhpc3QgPT09IDApIHtcbiAgICAgIHd4Lm5hdmlnYXRlVG8oe1xuICAgICAgICB1cmw6ICcvY29tcGxldGUvY29tcGxldGUnXG4gICAgICB9KTtcbiAgICAgIHJldHVybjtcbiAgICB9IGVsc2Uge1xuICAgICAgd3guc3dpdGNoVGFiKHtcbiAgICAgICAgdXJsOiAnL3BhZ2VzL2luZGV4L2luZGV4J1xuICAgICAgfSlcbiAgICB9XG5cbiAgICByZXFMb2dpbih7IHR5cGU6IDEsIG9wZW5pZDogdGhpcy5kYXRhLm9wZW5pZCB9KS50aGVuKFxuICAgICAgcmVzID0+IHtcbiAgICAgICAgY29uc29sZS5sb2coJ3Rva2VuJywgcmVzKTtcbiAgICAgICAgaWYgKHJlcy5jb2RlID09PSAxKSB7XG4gICAgICAgICAgd3guc2V0U3RvcmFnZSh7XG4gICAgICAgICAgICBrZXk6ICd0b2tlbicsXG4gICAgICAgICAgICBkYXRhOiByZXMuZGF0YSxcbiAgICAgICAgICAgIHN1Y2Nlc3MoKSB7XG4gICAgICAgICAgICAgIGlmIChleGlzdCA9PT0gMCkge1xuICAgICAgICAgICAgICAgIHd4Lm5hdmlnYXRlVG8oe1xuICAgICAgICAgICAgICAgICAgdXJsOiAnL2NvbXBsZXRlL2NvbXBsZXRlJ1xuICAgICAgICAgICAgICAgIH0pO1xuICAgICAgICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgICAgIHd4LnN3aXRjaFRhYih7XG4gICAgICAgICAgICAgICAgICB1cmw6ICcvcGFnZXMvaW5kZXgvaW5kZXgnXG4gICAgICAgICAgICAgICAgfSlcbiAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgfVxuICAgICAgICAgIH0pXG4gICAgICAgIH1cbiAgICAgIH1cbiAgICApO1xuICB9XG5cbn0pO1xuIl19