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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoicG9zdC5qcyIsInNvdXJjZVJvb3QiOiIiLCJzb3VyY2VzIjpbInBvc3QudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7QUFBQSxzQ0FBd0Q7QUFFeEQsSUFBTSxLQUFLLEdBQUcsRUFBRSxDQUFDLGNBQWMsQ0FBQyxPQUFPLENBQUMsQ0FBQztBQUN6QyxJQUFJLENBQUM7SUFDSCxJQUFJLEVBQUU7UUFDSixLQUFLLEVBQUUsYUFBYTtRQUNwQixRQUFRLEVBQUUsRUFBRTtRQUNaLFdBQVcsRUFBRSxLQUFLO1FBQ2xCLE9BQU8sRUFBRSxFQUFFLENBQUMsT0FBTyxDQUFDLDhCQUE4QixDQUFDO1FBRW5ELFFBQVEsRUFBQyxFQUFFO1FBQ1gsT0FBTyxFQUFDLEVBQUU7UUFDVixZQUFZLEVBQUMsRUFBRTtRQUNmLEVBQUUsRUFBQyxFQUFFO0tBRU47SUFDRCxNQUFNLEVBQU4sVUFBTyxDQUFLO1FBQ1YsSUFBSSxDQUFDLGNBQWMsRUFBRSxDQUFDO1FBQ3hCLE9BQU8sQ0FBQyxHQUFHLENBQUMsQ0FBQyxDQUFDLENBQUM7UUFDZixJQUFJLENBQUMsT0FBUSxDQUFDO1lBQ1YsRUFBRSxFQUFDLENBQUMsQ0FBQyxFQUFFO1NBQ1IsQ0FBQyxDQUFBO0lBQ0osQ0FBQztJQUVGLE1BQU0sRUFBTixVQUFPLENBQU07UUFDWixPQUFPLENBQUMsR0FBRyxDQUFDLENBQUMsQ0FBQyxDQUFDO1FBQ2YsSUFBSSxDQUFDLE9BQVEsQ0FBQztZQUNiLFlBQVksRUFBRSxDQUFDLENBQUMsTUFBTSxDQUFDLEtBQUs7U0FDNUIsQ0FBQyxDQUFBO0lBQ0gsQ0FBQztJQUdBLGNBQWMsRUFBZDtRQUFBLGlCQU1DO1FBTEMsb0JBQVksRUFBRSxDQUFDLElBQUksQ0FBQyxVQUFBLEdBQUc7WUFDckIsS0FBSSxDQUFDLE9BQVEsQ0FBQztnQkFDWixRQUFRLEVBQUMsR0FBRyxDQUFDLElBQUk7YUFDbEIsQ0FBQyxDQUFBO1FBQ0osQ0FBQyxDQUFDLENBQUE7SUFDSixDQUFDO0lBRUQsVUFBVSxFQUFWO1FBQ0UsSUFBTSxHQUFHLEdBQXVDLEVBQUUsQ0FBQztRQUNuRCxJQUFJLENBQUMsSUFBSSxDQUFDLFFBQVEsQ0FBQyxHQUFHLENBQUMsVUFBQyxHQUFHO1lBRTVCLEdBQUcsQ0FBQyxJQUFJLENBQUMsR0FBRyxDQUFDLElBQUksQ0FBQyxDQUFBO1FBQ2pCLENBQUMsQ0FBQyxDQUFBO1FBQ0YsSUFBSSxJQUFJLEdBQUcsSUFBSSxDQUFDO1FBQ2hCLEVBQUUsQ0FBQyxlQUFlLENBQUM7WUFDakIsUUFBUSxFQUFFLEdBQUc7WUFDYixPQUFPLEVBQVAsVUFBUSxHQUFHO2dCQUNULElBQUksQ0FBQyxPQUFRLENBQUM7b0JBQ1osT0FBTyxFQUFFLEdBQUcsQ0FBQyxHQUFHLENBQUMsUUFBUSxDQUFDO2lCQUMzQixDQUFDLENBQUE7WUFDSixDQUFDO1lBQ0QsSUFBSSxZQUFDLEdBQUc7Z0JBQ04sT0FBTyxDQUFDLEdBQUcsQ0FBQyxHQUFHLENBQUMsTUFBTSxDQUFDLENBQUE7WUFDekIsQ0FBQztTQUNGLENBQUMsQ0FBQTtJQUNKLENBQUM7SUFDRCxLQUFLO1FBQ0wsT0FBTyxDQUFDLEdBQUcsQ0FBQyxJQUFJLENBQUMsSUFBSSxDQUFDLEVBQUUsRUFBRSxJQUFJLENBQUMsSUFBSSxDQUFDLE9BQU8sRUFBRSxJQUFJLENBQUMsSUFBSSxDQUFDLFlBQVksQ0FBQyxDQUFDO1FBQ3JFLG9CQUFZLENBQUMsS0FBSyxFQUFFLElBQUksQ0FBQyxJQUFJLENBQUMsRUFBRSxFQUFFLElBQUksQ0FBQyxJQUFJLENBQUMsT0FBTyxFQUFFLElBQUksQ0FBQyxJQUFJLENBQUMsWUFBWSxDQUFDLENBQUMsSUFBSSxDQUFDLFVBQUEsR0FBRztZQUNqRixJQUFHLEdBQUcsQ0FBQyxJQUFJLElBQUksQ0FBQyxFQUFDO2dCQUNuQixFQUFFLENBQUMsU0FBUyxDQUFDO29CQUNaLEtBQUssRUFBRSxHQUFHLENBQUMsT0FBTztvQkFDbEIsUUFBUSxFQUFFLElBQUk7b0JBQ2QsSUFBSSxFQUFFLElBQUk7b0JBQ1YsT0FBTzt3QkFDTixVQUFVLENBQUM7NEJBQ1YsRUFBRSxDQUFDLFNBQVMsQ0FBQztnQ0FDWixHQUFHLEVBQUUsb0JBQW9COzZCQUN6QixDQUFDLENBQUE7d0JBQ0gsQ0FBQyxFQUFFLElBQUksQ0FBQyxDQUFBO29CQUNULENBQUM7aUJBQ0QsQ0FBQyxDQUFBO2FBQ0M7aUJBQUk7Z0JBQ0gsRUFBRSxDQUFDLFNBQVMsQ0FBQztvQkFDaEIsS0FBSyxFQUFFLEdBQUcsQ0FBQyxPQUFPO29CQUNsQixRQUFRLEVBQUUsSUFBSTtvQkFDZCxJQUFJLEVBQUUsSUFBSTtvQkFDVixJQUFJLEVBQUUsTUFBTTtpQkFDUixDQUFDLENBQUE7YUFHTjtRQUNBLENBQUMsQ0FBQyxDQUFBO0lBQ0osQ0FBQztDQUNGLENBQUMsQ0FBQSIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7Y29uZmlybUZhaHVvLCB0cmFkZUNvbXBhbnl9IGZyb20gJy4uL2FwaS9vcmRlcic7XG5cbmNvbnN0IHRva2VuID0gd3guZ2V0U3RvcmFnZVN5bmMoJ3Rva2VuJyk7XG5QYWdlKHtcbiAgZGF0YToge1xuICAgIG1vdHRvOiAn54K55Ye7IOKAnOe8luivkeKAnSDku6XmnoTlu7onLFxuICAgIHVzZXJJbmZvOiB7fSxcbiAgICBoYXNVc2VySW5mbzogZmFsc2UsXG4gICAgY2FuSVVzZTogd3guY2FuSVVzZSgnYnV0dG9uLm9wZW4tdHlwZS5nZXRVc2VySW5mbycpLFxuXG4gICAgaXRlbUxpc3Q6W10sXG4gICAgY29tcGFueTonJyxcbiAgICB0cmFja19udW1iZXI6JycsXG4gICAgaWQ6JydcblxuICB9LFxuICBvbkxvYWQoZTphbnkpIHtcbiAgICB0aGlzLmdldENvbXBhbnlMaXN0KCk7XG5cdFx0Y29uc29sZS5sb2coZSk7XG5cdFx0dGhpcy5zZXREYXRhISh7XG4gICAgICBpZDplLmlkXG4gICAgfSlcbiAgfSxcblxuXHRjaGFuZ2UoZTogYW55KSB7XG5cdFx0Y29uc29sZS5sb2coZSk7XG5cdFx0dGhpcy5zZXREYXRhISh7XG5cdFx0XHR0cmFja19udW1iZXI6IGUuZGV0YWlsLnZhbHVlXG5cdFx0fSlcblx0fSxcblxuXHQvLyDojrflj5blv6vpgJLlhazlj7jliJfooahcbiAgZ2V0Q29tcGFueUxpc3QoKXtcbiAgICB0cmFkZUNvbXBhbnkoKS50aGVuKHJlcyA9PiB7XG4gICAgICB0aGlzLnNldERhdGEhKHtcbiAgICAgICAgaXRlbUxpc3Q6cmVzLmRhdGFcbiAgICAgIH0pXG4gICAgfSlcbiAgfSxcbiAgLy8g6YCJ5oup54mp5rWB5YWs5Y+4XG4gIGNob29zZVBvc3QoKXtcbiAgICBjb25zdCBhcnI6IGFueVtdIHwgbmV2ZXJbXSB8IHN0cmluZ1tdIHwgYW55W10gPSBbXTtcbiAgICB0aGlzLmRhdGEuaXRlbUxpc3QubWFwKChyZWYpID0+IHtcbiAgICAgIC8vIEB0cy1pZ25vcmVcblx0XHRcdGFyci5wdXNoKHJlZi5uYW1lKVxuICAgIH0pXG4gICAgdmFyIHRoYXQgPSB0aGlzO1xuICAgIHd4LnNob3dBY3Rpb25TaGVldCh7XG4gICAgICBpdGVtTGlzdDogYXJyLFxuICAgICAgc3VjY2VzcyhyZXMpIHtcbiAgICAgICAgdGhhdC5zZXREYXRhISh7XG4gICAgICAgICAgY29tcGFueTogYXJyW3Jlcy50YXBJbmRleF1cbiAgICAgICAgfSlcbiAgICAgIH0sXG4gICAgICBmYWlsKHJlcykge1xuICAgICAgICBjb25zb2xlLmxvZyhyZXMuZXJyTXNnKVxuICAgICAgfVxuICAgIH0pXG4gIH0sXG4gIGZhSHVvKCl7XG5cdFx0Y29uc29sZS5sb2codGhpcy5kYXRhLmlkLCB0aGlzLmRhdGEuY29tcGFueSwgdGhpcy5kYXRhLnRyYWNrX251bWJlcik7XG5cdFx0Y29uZmlybUZhaHVvKHRva2VuLCB0aGlzLmRhdGEuaWQsIHRoaXMuZGF0YS5jb21wYW55LCB0aGlzLmRhdGEudHJhY2tfbnVtYmVyKS50aGVuKHJlcyA9PiB7XG4gICAgICBpZihyZXMuY29kZSA9PSAxKXtcblx0XHRcdFx0d3guc2hvd1RvYXN0KHtcblx0XHRcdFx0XHR0aXRsZTogcmVzLm1lc3NhZ2UsXG5cdFx0XHRcdFx0ZHVyYXRpb246IDMwMDAsXG5cdFx0XHRcdFx0bWFzazogdHJ1ZSxcblx0XHRcdFx0XHRzdWNjZXNzKCkge1xuXHRcdFx0XHRcdFx0c2V0VGltZW91dCgoKSA9PiB7XG5cdFx0XHRcdFx0XHRcdHd4LnN3aXRjaFRhYih7XG5cdFx0XHRcdFx0XHRcdFx0dXJsOiAnL3BhZ2VzL2luZGV4L2luZGV4J1xuXHRcdFx0XHRcdFx0XHR9KVxuXHRcdFx0XHRcdFx0fSwgMzAwMClcblx0XHRcdFx0XHR9XG5cdFx0XHRcdH0pXG4gICAgICB9ZWxzZXtcbiAgICAgICAgd3guc2hvd1RvYXN0KHtcblx0XHRcdFx0XHR0aXRsZTogcmVzLm1lc3NhZ2UsXG5cdFx0XHRcdFx0ZHVyYXRpb246IDMwMDAsXG5cdFx0XHRcdFx0bWFzazogdHJ1ZSxcblx0XHRcdFx0XHRpY29uOiBcIm5vbmVcIlxuICAgICAgICB9KVxuXG5cblx0XHRcdH1cbiAgICB9KVxuICB9XG59KVxuIl19