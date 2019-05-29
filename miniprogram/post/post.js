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
        this.setData({
            id: e.id
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
        order_1.confirmFahuo(token, this.data.id, this.data.company, this.data.track_number).then(function (res) {
            if (res.code == 0) {
                wx.showToast({
                    title: res.message,
                    icon: 'success',
                    duration: 3000,
                    mask: true,
                    success: function () {
                        wx.redirectTo({
                            url: '../sold-out/sold-out'
                        });
                    }
                });
            }
            else {
                wx.showToast({
                    title: res.message
                });
            }
        });
    }
});
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoicG9zdC5qcyIsInNvdXJjZVJvb3QiOiIiLCJzb3VyY2VzIjpbInBvc3QudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7QUFBQSxzQ0FBMEQ7QUFFMUQsSUFBTSxLQUFLLEdBQUcsRUFBRSxDQUFDLGNBQWMsQ0FBQyxPQUFPLENBQUMsQ0FBQztBQUN6QyxJQUFJLENBQUM7SUFDSCxJQUFJLEVBQUU7UUFDSixLQUFLLEVBQUUsYUFBYTtRQUNwQixRQUFRLEVBQUUsRUFBRTtRQUNaLFdBQVcsRUFBRSxLQUFLO1FBQ2xCLE9BQU8sRUFBRSxFQUFFLENBQUMsT0FBTyxDQUFDLDhCQUE4QixDQUFDO1FBRW5ELFFBQVEsRUFBQyxFQUFFO1FBQ1gsT0FBTyxFQUFDLEVBQUU7UUFDVixZQUFZLEVBQUMsRUFBRTtRQUNmLEVBQUUsRUFBQyxFQUFFO0tBRU47SUFDRCxNQUFNLEVBQU4sVUFBTyxDQUFLO1FBQ1YsSUFBSSxDQUFDLGNBQWMsRUFBRSxDQUFDO1FBQ3RCLElBQUksQ0FBQyxPQUFRLENBQUM7WUFDWixFQUFFLEVBQUMsQ0FBQyxDQUFDLEVBQUU7U0FDUixDQUFDLENBQUE7SUFDSixDQUFDO0lBRUQsY0FBYyxFQUFkO1FBQUEsaUJBTUM7UUFMQyxvQkFBWSxFQUFFLENBQUMsSUFBSSxDQUFDLFVBQUEsR0FBRztZQUNyQixLQUFJLENBQUMsT0FBUSxDQUFDO2dCQUNaLFFBQVEsRUFBQyxHQUFHLENBQUMsSUFBSTthQUNsQixDQUFDLENBQUE7UUFDSixDQUFDLENBQUMsQ0FBQTtJQUNKLENBQUM7SUFFRCxVQUFVLEVBQVY7UUFDRSxJQUFNLEdBQUcsR0FBdUMsRUFBRSxDQUFDO1FBQ25ELElBQUksQ0FBQyxJQUFJLENBQUMsUUFBUSxDQUFDLEdBQUcsQ0FBQyxVQUFDLEdBQUc7WUFFNUIsR0FBRyxDQUFDLElBQUksQ0FBQyxHQUFHLENBQUMsSUFBSSxDQUFDLENBQUE7UUFDakIsQ0FBQyxDQUFDLENBQUE7UUFDRixJQUFJLElBQUksR0FBRyxJQUFJLENBQUM7UUFDaEIsRUFBRSxDQUFDLGVBQWUsQ0FBQztZQUNqQixRQUFRLEVBQUUsR0FBRztZQUNiLE9BQU8sRUFBUCxVQUFRLEdBQUc7Z0JBQ1QsSUFBSSxDQUFDLE9BQVEsQ0FBQztvQkFDWixPQUFPLEVBQUUsR0FBRyxDQUFDLEdBQUcsQ0FBQyxRQUFRLENBQUM7aUJBQzNCLENBQUMsQ0FBQTtZQUNKLENBQUM7WUFDRCxJQUFJLFlBQUMsR0FBRztnQkFDTixPQUFPLENBQUMsR0FBRyxDQUFDLEdBQUcsQ0FBQyxNQUFNLENBQUMsQ0FBQTtZQUN6QixDQUFDO1NBQ0YsQ0FBQyxDQUFBO0lBQ0osQ0FBQztJQUNELEtBQUs7UUFDSCxvQkFBWSxDQUFDLEtBQUssRUFBRSxJQUFJLENBQUMsSUFBSSxDQUFDLEVBQUUsRUFBRSxJQUFJLENBQUMsSUFBSSxDQUFDLE9BQU8sRUFBRSxJQUFJLENBQUMsSUFBSSxDQUFDLFlBQVksQ0FBQyxDQUFDLElBQUksQ0FBQyxVQUFBLEdBQUc7WUFDbkYsSUFBRyxHQUFHLENBQUMsSUFBSSxJQUFJLENBQUMsRUFBQztnQkFDZixFQUFFLENBQUMsU0FBUyxDQUFDO29CQUNYLEtBQUssRUFBQyxHQUFHLENBQUMsT0FBTztvQkFDakIsSUFBSSxFQUFFLFNBQVM7b0JBQ2YsUUFBUSxFQUFFLElBQUk7b0JBQ2QsSUFBSSxFQUFDLElBQUk7b0JBQ1QsT0FBTzt3QkFDTCxFQUFFLENBQUMsVUFBVSxDQUFDOzRCQUNaLEdBQUcsRUFBRSxzQkFBc0I7eUJBQzVCLENBQUMsQ0FBQTtvQkFDSixDQUFDO2lCQUNGLENBQUMsQ0FBQzthQUNKO2lCQUFJO2dCQUNILEVBQUUsQ0FBQyxTQUFTLENBQUM7b0JBQ1gsS0FBSyxFQUFDLEdBQUcsQ0FBQyxPQUFPO2lCQUNsQixDQUFDLENBQUE7YUFDSDtRQUNILENBQUMsQ0FBQyxDQUFBO0lBQ0osQ0FBQztDQUNGLENBQUMsQ0FBQSIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IHRyYWRlQ29tcGFueSwgY29uZmlybUZhaHVvIH0gZnJvbSAnLi4vYXBpL29yZGVyJztcblxuY29uc3QgdG9rZW4gPSB3eC5nZXRTdG9yYWdlU3luYygndG9rZW4nKTtcblBhZ2Uoe1xuICBkYXRhOiB7XG4gICAgbW90dG86ICfngrnlh7sg4oCc57yW6K+R4oCdIOS7peaehOW7uicsXG4gICAgdXNlckluZm86IHt9LFxuICAgIGhhc1VzZXJJbmZvOiBmYWxzZSxcbiAgICBjYW5JVXNlOiB3eC5jYW5JVXNlKCdidXR0b24ub3Blbi10eXBlLmdldFVzZXJJbmZvJyksXG5cbiAgICBpdGVtTGlzdDpbXSxcbiAgICBjb21wYW55OicnLFxuICAgIHRyYWNrX251bWJlcjonJyxcbiAgICBpZDonJ1xuXG4gIH0sXG4gIG9uTG9hZChlOmFueSkge1xuICAgIHRoaXMuZ2V0Q29tcGFueUxpc3QoKTtcbiAgICB0aGlzLnNldERhdGEhKHtcbiAgICAgIGlkOmUuaWRcbiAgICB9KVxuICB9LFxuICAvLyDojrflj5blv6vpgJLlhazlj7jliJfooahcbiAgZ2V0Q29tcGFueUxpc3QoKXtcbiAgICB0cmFkZUNvbXBhbnkoKS50aGVuKHJlcyA9PiB7XG4gICAgICB0aGlzLnNldERhdGEhKHtcbiAgICAgICAgaXRlbUxpc3Q6cmVzLmRhdGFcbiAgICAgIH0pXG4gICAgfSlcbiAgfSxcbiAgLy8g6YCJ5oup54mp5rWB5YWs5Y+4XG4gIGNob29zZVBvc3QoKXtcbiAgICBjb25zdCBhcnI6IGFueVtdIHwgbmV2ZXJbXSB8IHN0cmluZ1tdIHwgYW55W10gPSBbXTtcbiAgICB0aGlzLmRhdGEuaXRlbUxpc3QubWFwKChyZWYpID0+IHtcbiAgICAgIC8vIEB0cy1pZ25vcmVcblx0XHRcdGFyci5wdXNoKHJlZi5uYW1lKVxuICAgIH0pXG4gICAgdmFyIHRoYXQgPSB0aGlzO1xuICAgIHd4LnNob3dBY3Rpb25TaGVldCh7XG4gICAgICBpdGVtTGlzdDogYXJyLFxuICAgICAgc3VjY2VzcyhyZXMpIHtcbiAgICAgICAgdGhhdC5zZXREYXRhISh7XG4gICAgICAgICAgY29tcGFueTogYXJyW3Jlcy50YXBJbmRleF1cbiAgICAgICAgfSlcbiAgICAgIH0sXG4gICAgICBmYWlsKHJlcykge1xuICAgICAgICBjb25zb2xlLmxvZyhyZXMuZXJyTXNnKVxuICAgICAgfVxuICAgIH0pXG4gIH0sXG4gIGZhSHVvKCl7XG4gICAgY29uZmlybUZhaHVvKHRva2VuLCB0aGlzLmRhdGEuaWQsIHRoaXMuZGF0YS5jb21wYW55LCB0aGlzLmRhdGEudHJhY2tfbnVtYmVyKS50aGVuKHJlcyA9PiB7XG4gICAgICBpZihyZXMuY29kZSA9PSAwKXtcbiAgICAgICAgd3guc2hvd1RvYXN0KHtcbiAgICAgICAgICB0aXRsZTpyZXMubWVzc2FnZSxcbiAgICAgICAgICBpY29uOiAnc3VjY2VzcycsXG4gICAgICAgICAgZHVyYXRpb246IDMwMDAsXG4gICAgICAgICAgbWFzazp0cnVlLFxuICAgICAgICAgIHN1Y2Nlc3MoKXtcbiAgICAgICAgICAgIHd4LnJlZGlyZWN0VG8oe1xuICAgICAgICAgICAgICB1cmw6ICcuLi9zb2xkLW91dC9zb2xkLW91dCdcbiAgICAgICAgICAgIH0pXG4gICAgICAgICAgfVxuICAgICAgICB9KTtcbiAgICAgIH1lbHNle1xuICAgICAgICB3eC5zaG93VG9hc3Qoe1xuICAgICAgICAgIHRpdGxlOnJlcy5tZXNzYWdlXG4gICAgICAgIH0pXG4gICAgICB9XG4gICAgfSlcbiAgfVxufSlcbiJdfQ==