"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var order_1 = require("../api/order");
var token = wx.getStorageSync('token');
Page({
    data: {
        motto: '点击 “编译” 以构建',
        userInfo: {},
        hasUserInfo: false,
        canIUse: wx.canIUse('button.open-type.getUserInfo'),
        itemList: [],
        company: '',
        track_number: '',
        id: ''
    },
    onLoad: function (e) {
        this.getCompanyList();
        console.log(e);
        this.setData({
            id: e.id
        });
    },
    change: function (e) {
        console.log(e);
        this.setData({
            track_number: e.detail.value
        });
    },
    getCompanyList: function () {
        var _this = this;
        order_1.tradeCompany().then(function (res) {
            _this.setData({
                itemList: res.data
            });
        });
    },
    choosePost: function () {
        var arr = [];
        this.data.itemList.map(function (ref) {
            arr.push(ref.name);
        });
        var that = this;
        wx.showActionSheet({
            itemList: arr,
            success: function (res) {
                that.setData({
                    company: arr[res.tapIndex]
                });
            },
            fail: function (res) {
                console.log(res.errMsg);
            }
        });
    },
    faHuo: function () {
        console.log(this.data.id, this.data.company, this.data.track_number);
        order_1.confirmFahuo(token, this.data.id, this.data.company, this.data.track_number).then(function (res) {
            if (res.code == 1) {
                wx.showToast({
                    title: res.message,
                    duration: 3000,
                    mask: true,
                    success: function () {
                        setTimeout(function () {
                            wx.switchTab({
                                url: '/pages/index/index'
                            });
                        }, 3000);
                    }
                });
            }
            else {
                wx.showToast({
                    title: res.message,
                    duration: 3000,
                    mask: true,
                    icon: "none"
                });
            }
        });
    }
});
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoicG9zdC5qcyIsInNvdXJjZVJvb3QiOiIiLCJzb3VyY2VzIjpbInBvc3QudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7QUFBQSxzQ0FBd0Q7QUFFeEQsSUFBTSxLQUFLLEdBQUcsRUFBRSxDQUFDLGNBQWMsQ0FBQyxPQUFPLENBQUMsQ0FBQztBQUN6QyxJQUFJLENBQUM7SUFDSCxJQUFJLEVBQUU7UUFDSixLQUFLLEVBQUUsYUFBYTtRQUNwQixRQUFRLEVBQUUsRUFBRTtRQUNaLFdBQVcsRUFBRSxLQUFLO1FBQ2xCLE9BQU8sRUFBRSxFQUFFLENBQUMsT0FBTyxDQUFDLDhCQUE4QixDQUFDO1FBRW5ELFFBQVEsRUFBQyxFQUFFO1FBQ1gsT0FBTyxFQUFDLEVBQUU7UUFDVixZQUFZLEVBQUMsRUFBRTtRQUNmLEVBQUUsRUFBQyxFQUFFO0tBRU47SUFDRCxNQUFNLEVBQU4sVUFBTyxDQUFLO1FBQ1YsSUFBSSxDQUFDLGNBQWMsRUFBRSxDQUFDO1FBQ3hCLE9BQU8sQ0FBQyxHQUFHLENBQUMsQ0FBQyxDQUFDLENBQUM7UUFDZixJQUFJLENBQUMsT0FBUSxDQUFDO1lBQ1YsRUFBRSxFQUFDLENBQUMsQ0FBQyxFQUFFO1NBQ1IsQ0FBQyxDQUFBO0lBQ0osQ0FBQztJQUVGLE1BQU0sRUFBTixVQUFPLENBQU07UUFDWixPQUFPLENBQUMsR0FBRyxDQUFDLENBQUMsQ0FBQyxDQUFDO1FBQ2YsSUFBSSxDQUFDLE9BQVEsQ0FBQztZQUNiLFlBQVksRUFBRSxDQUFDLENBQUMsTUFBTSxDQUFDLEtBQUs7U0FDNUIsQ0FBQyxDQUFBO0lBQ0gsQ0FBQztJQUdBLGNBQWMsRUFBZDtRQUFBLGlCQU1DO1FBTEMsb0JBQVksRUFBRSxDQUFDLElBQUksQ0FBQyxVQUFBLEdBQUc7WUFDckIsS0FBSSxDQUFDLE9BQVEsQ0FBQztnQkFDWixRQUFRLEVBQUMsR0FBRyxDQUFDLElBQUk7YUFDbEIsQ0FBQyxDQUFBO1FBQ0osQ0FBQyxDQUFDLENBQUE7SUFDSixDQUFDO0lBRUQsVUFBVSxFQUFWO1FBQ0UsSUFBTSxHQUFHLEdBQXVDLEVBQUUsQ0FBQztRQUNuRCxJQUFJLENBQUMsSUFBSSxDQUFDLFFBQVEsQ0FBQyxHQUFHLENBQUMsVUFBQyxHQUFHO1lBRTVCLEdBQUcsQ0FBQyxJQUFJLENBQUMsR0FBRyxDQUFDLElBQUksQ0FBQyxDQUFBO1FBQ2pCLENBQUMsQ0FBQyxDQUFBO1FBQ0YsSUFBSSxJQUFJLEdBQUcsSUFBSSxDQUFDO1FBQ2hCLEVBQUUsQ0FBQyxlQUFlLENBQUM7WUFDakIsUUFBUSxFQUFFLEdBQUc7WUFDYixPQUFPLEVBQVAsVUFBUSxHQUFHO2dCQUNULElBQUksQ0FBQyxPQUFRLENBQUM7b0JBQ1osT0FBTyxFQUFFLEdBQUcsQ0FBQyxHQUFHLENBQUMsUUFBUSxDQUFDO2lCQUMzQixDQUFDLENBQUE7WUFDSixDQUFDO1lBQ0QsSUFBSSxZQUFDLEdBQUc7Z0JBQ04sT0FBTyxDQUFDLEdBQUcsQ0FBQyxHQUFHLENBQUMsTUFBTSxDQUFDLENBQUE7WUFDekIsQ0FBQztTQUNGLENBQUMsQ0FBQTtJQUNKLENBQUM7SUFDRCxLQUFLO1FBQ0wsT0FBTyxDQUFDLEdBQUcsQ0FBQyxJQUFJLENBQUMsSUFBSSxDQUFDLEVBQUUsRUFBRSxJQUFJLENBQUMsSUFBSSxDQUFDLE9BQU8sRUFBRSxJQUFJLENBQUMsSUFBSSxDQUFDLFlBQVksQ0FBQyxDQUFDO1FBQ3JFLG9CQUFZLENBQUMsS0FBSyxFQUFFLElBQUksQ0FBQyxJQUFJLENBQUMsRUFBRSxFQUFFLElBQUksQ0FBQyxJQUFJLENBQUMsT0FBTyxFQUFFLElBQUksQ0FBQyxJQUFJLENBQUMsWUFBWSxDQUFDLENBQUMsSUFBSSxDQUFDLFVBQUEsR0FBRztZQUNqRixJQUFHLEdBQUcsQ0FBQyxJQUFJLElBQUksQ0FBQyxFQUFDO2dCQUNuQixFQUFFLENBQUMsU0FBUyxDQUFDO29CQUNaLEtBQUssRUFBRSxHQUFHLENBQUMsT0FBTztvQkFDbEIsUUFBUSxFQUFFLElBQUk7b0JBQ2QsSUFBSSxFQUFFLElBQUk7b0JBQ1YsT0FBTzt3QkFDTixVQUFVLENBQUM7NEJBQ1YsRUFBRSxDQUFDLFNBQVMsQ0FBQztnQ0FDWixHQUFHLEVBQUUsb0JBQW9COzZCQUN6QixDQUFDLENBQUE7d0JBQ0gsQ0FBQyxFQUFFLElBQUksQ0FBQyxDQUFBO29CQUNULENBQUM7aUJBQ0QsQ0FBQyxDQUFBO2FBQ0M7aUJBQUk7Z0JBQ0gsRUFBRSxDQUFDLFNBQVMsQ0FBQztvQkFDaEIsS0FBSyxFQUFFLEdBQUcsQ0FBQyxPQUFPO29CQUNsQixRQUFRLEVBQUUsSUFBSTtvQkFDZCxJQUFJLEVBQUUsSUFBSTtvQkFDVixJQUFJLEVBQUUsTUFBTTtpQkFDUixDQUFDLENBQUE7YUFHTjtRQUNBLENBQUMsQ0FBQyxDQUFBO0lBQ0osQ0FBQztDQUNGLENBQUMsQ0FBQSIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7Y29uZmlybUZhaHVvLCB0cmFkZUNvbXBhbnl9IGZyb20gJy4uL2FwaS9vcmRlcic7XHJcblxyXG5jb25zdCB0b2tlbiA9IHd4LmdldFN0b3JhZ2VTeW5jKCd0b2tlbicpO1xyXG5QYWdlKHtcclxuICBkYXRhOiB7XHJcbiAgICBtb3R0bzogJ+eCueWHuyDigJznvJbor5HigJ0g5Lul5p6E5bu6JyxcclxuICAgIHVzZXJJbmZvOiB7fSxcclxuICAgIGhhc1VzZXJJbmZvOiBmYWxzZSxcclxuICAgIGNhbklVc2U6IHd4LmNhbklVc2UoJ2J1dHRvbi5vcGVuLXR5cGUuZ2V0VXNlckluZm8nKSxcclxuXHJcbiAgICBpdGVtTGlzdDpbXSxcclxuICAgIGNvbXBhbnk6JycsXHJcbiAgICB0cmFja19udW1iZXI6JycsXHJcbiAgICBpZDonJ1xyXG5cclxuICB9LFxyXG4gIG9uTG9hZChlOmFueSkge1xyXG4gICAgdGhpcy5nZXRDb21wYW55TGlzdCgpO1xyXG5cdFx0Y29uc29sZS5sb2coZSk7XHJcblx0XHR0aGlzLnNldERhdGEhKHtcclxuICAgICAgaWQ6ZS5pZFxyXG4gICAgfSlcclxuICB9LFxyXG5cclxuXHRjaGFuZ2UoZTogYW55KSB7XHJcblx0XHRjb25zb2xlLmxvZyhlKTtcclxuXHRcdHRoaXMuc2V0RGF0YSEoe1xyXG5cdFx0XHR0cmFja19udW1iZXI6IGUuZGV0YWlsLnZhbHVlXHJcblx0XHR9KVxyXG5cdH0sXHJcblxyXG5cdC8vIOiOt+WPluW/q+mAkuWFrOWPuOWIl+ihqFxyXG4gIGdldENvbXBhbnlMaXN0KCl7XHJcbiAgICB0cmFkZUNvbXBhbnkoKS50aGVuKHJlcyA9PiB7XHJcbiAgICAgIHRoaXMuc2V0RGF0YSEoe1xyXG4gICAgICAgIGl0ZW1MaXN0OnJlcy5kYXRhXHJcbiAgICAgIH0pXHJcbiAgICB9KVxyXG4gIH0sXHJcbiAgLy8g6YCJ5oup54mp5rWB5YWs5Y+4XHJcbiAgY2hvb3NlUG9zdCgpe1xyXG4gICAgY29uc3QgYXJyOiBhbnlbXSB8IG5ldmVyW10gfCBzdHJpbmdbXSB8IGFueVtdID0gW107XHJcbiAgICB0aGlzLmRhdGEuaXRlbUxpc3QubWFwKChyZWYpID0+IHtcclxuICAgICAgLy8gQHRzLWlnbm9yZVxyXG5cdFx0XHRhcnIucHVzaChyZWYubmFtZSlcclxuICAgIH0pXHJcbiAgICB2YXIgdGhhdCA9IHRoaXM7XHJcbiAgICB3eC5zaG93QWN0aW9uU2hlZXQoe1xyXG4gICAgICBpdGVtTGlzdDogYXJyLFxyXG4gICAgICBzdWNjZXNzKHJlcykge1xyXG4gICAgICAgIHRoYXQuc2V0RGF0YSEoe1xyXG4gICAgICAgICAgY29tcGFueTogYXJyW3Jlcy50YXBJbmRleF1cclxuICAgICAgICB9KVxyXG4gICAgICB9LFxyXG4gICAgICBmYWlsKHJlcykge1xyXG4gICAgICAgIGNvbnNvbGUubG9nKHJlcy5lcnJNc2cpXHJcbiAgICAgIH1cclxuICAgIH0pXHJcbiAgfSxcclxuICBmYUh1bygpe1xyXG5cdFx0Y29uc29sZS5sb2codGhpcy5kYXRhLmlkLCB0aGlzLmRhdGEuY29tcGFueSwgdGhpcy5kYXRhLnRyYWNrX251bWJlcik7XHJcblx0XHRjb25maXJtRmFodW8odG9rZW4sIHRoaXMuZGF0YS5pZCwgdGhpcy5kYXRhLmNvbXBhbnksIHRoaXMuZGF0YS50cmFja19udW1iZXIpLnRoZW4ocmVzID0+IHtcclxuICAgICAgaWYocmVzLmNvZGUgPT0gMSl7XHJcblx0XHRcdFx0d3guc2hvd1RvYXN0KHtcclxuXHRcdFx0XHRcdHRpdGxlOiByZXMubWVzc2FnZSxcclxuXHRcdFx0XHRcdGR1cmF0aW9uOiAzMDAwLFxyXG5cdFx0XHRcdFx0bWFzazogdHJ1ZSxcclxuXHRcdFx0XHRcdHN1Y2Nlc3MoKSB7XHJcblx0XHRcdFx0XHRcdHNldFRpbWVvdXQoKCkgPT4ge1xyXG5cdFx0XHRcdFx0XHRcdHd4LnN3aXRjaFRhYih7XHJcblx0XHRcdFx0XHRcdFx0XHR1cmw6ICcvcGFnZXMvaW5kZXgvaW5kZXgnXHJcblx0XHRcdFx0XHRcdFx0fSlcclxuXHRcdFx0XHRcdFx0fSwgMzAwMClcclxuXHRcdFx0XHRcdH1cclxuXHRcdFx0XHR9KVxyXG4gICAgICB9ZWxzZXtcclxuICAgICAgICB3eC5zaG93VG9hc3Qoe1xyXG5cdFx0XHRcdFx0dGl0bGU6IHJlcy5tZXNzYWdlLFxyXG5cdFx0XHRcdFx0ZHVyYXRpb246IDMwMDAsXHJcblx0XHRcdFx0XHRtYXNrOiB0cnVlLFxyXG5cdFx0XHRcdFx0aWNvbjogXCJub25lXCJcclxuICAgICAgICB9KVxyXG5cclxuXHJcblx0XHRcdH1cclxuICAgIH0pXHJcbiAgfVxyXG59KVxyXG4iXX0=