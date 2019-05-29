"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var order_1 = require("../api/order");
var app = getApp();
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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoicG9zdC5qcyIsInNvdXJjZVJvb3QiOiIiLCJzb3VyY2VzIjpbInBvc3QudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7QUFDQSxzQ0FBMEQ7QUFFMUQsSUFBTSxHQUFHLEdBQUcsTUFBTSxFQUFVLENBQUM7QUFDN0IsSUFBTSxLQUFLLEdBQUcsRUFBRSxDQUFDLGNBQWMsQ0FBQyxPQUFPLENBQUMsQ0FBQztBQUN6QyxJQUFJLENBQUM7SUFDSCxJQUFJLEVBQUU7UUFDSixLQUFLLEVBQUUsYUFBYTtRQUNwQixRQUFRLEVBQUUsRUFBRTtRQUNaLFdBQVcsRUFBRSxLQUFLO1FBQ2xCLE9BQU8sRUFBRSxFQUFFLENBQUMsT0FBTyxDQUFDLDhCQUE4QixDQUFDO1FBRW5ELFFBQVEsRUFBQyxFQUFFO1FBQ1gsT0FBTyxFQUFDLEVBQUU7UUFDVixZQUFZLEVBQUMsRUFBRTtRQUNmLEVBQUUsRUFBQyxFQUFFO0tBRU47SUFDRCxNQUFNLFlBQUMsQ0FBQztRQUNOLElBQUksQ0FBQyxjQUFjLEVBQUUsQ0FBQztRQUN0QixJQUFJLENBQUMsT0FBTyxDQUFDO1lBQ1gsRUFBRSxFQUFDLENBQUMsQ0FBQyxFQUFFO1NBQ1IsQ0FBQyxDQUFBO0lBQ0osQ0FBQztJQUVELGNBQWMsRUFBZDtRQUFBLGlCQU1DO1FBTEMsb0JBQVksRUFBRSxDQUFDLElBQUksQ0FBQyxVQUFBLEdBQUc7WUFDckIsS0FBSSxDQUFDLE9BQVEsQ0FBQztnQkFDWixRQUFRLEVBQUMsR0FBRyxDQUFDLElBQUk7YUFDbEIsQ0FBQyxDQUFBO1FBQ0osQ0FBQyxDQUFDLENBQUE7SUFDSixDQUFDO0lBRUQsVUFBVSxFQUFWO1FBQ0UsSUFBTSxHQUFHLEdBQUcsRUFBRSxDQUFDO1FBQ2YsSUFBSSxDQUFDLElBQUksQ0FBQyxRQUFRLENBQUMsR0FBRyxDQUFDLFVBQUMsR0FBRztZQUN6QixHQUFHLENBQUMsSUFBSSxDQUFDLEdBQUcsQ0FBQyxJQUFJLENBQUMsQ0FBQTtRQUNwQixDQUFDLENBQUMsQ0FBQTtRQUNGLElBQUksSUFBSSxHQUFHLElBQUksQ0FBQztRQUNoQixFQUFFLENBQUMsZUFBZSxDQUFDO1lBQ2pCLFFBQVEsRUFBRSxHQUFHO1lBQ2IsT0FBTyxFQUFQLFVBQVEsR0FBRztnQkFDVCxJQUFJLENBQUMsT0FBUSxDQUFDO29CQUNaLE9BQU8sRUFBRSxHQUFHLENBQUMsR0FBRyxDQUFDLFFBQVEsQ0FBQztpQkFDM0IsQ0FBQyxDQUFBO1lBQ0osQ0FBQztZQUNELElBQUksWUFBQyxHQUFHO2dCQUNOLE9BQU8sQ0FBQyxHQUFHLENBQUMsR0FBRyxDQUFDLE1BQU0sQ0FBQyxDQUFBO1lBQ3pCLENBQUM7U0FDRixDQUFDLENBQUE7SUFDSixDQUFDO0lBQ0QsS0FBSztRQUNILG9CQUFZLENBQUMsS0FBSyxFQUFFLElBQUksQ0FBQyxJQUFJLENBQUMsRUFBRSxFQUFFLElBQUksQ0FBQyxJQUFJLENBQUMsT0FBTyxFQUFFLElBQUksQ0FBQyxJQUFJLENBQUMsWUFBWSxDQUFDLENBQUMsSUFBSSxDQUFDLFVBQUEsR0FBRztZQUNuRixJQUFHLEdBQUcsQ0FBQyxJQUFJLElBQUksQ0FBQyxFQUFDO2dCQUNmLEVBQUUsQ0FBQyxTQUFTLENBQUM7b0JBQ1gsS0FBSyxFQUFDLEdBQUcsQ0FBQyxPQUFPO29CQUNqQixJQUFJLEVBQUUsU0FBUztvQkFDZixRQUFRLEVBQUUsSUFBSTtvQkFDZCxJQUFJLEVBQUMsSUFBSTtvQkFDVCxPQUFPO3dCQUNMLEVBQUUsQ0FBQyxVQUFVLENBQUM7NEJBQ1osR0FBRyxFQUFFLHNCQUFzQjt5QkFDNUIsQ0FBQyxDQUFBO29CQUNKLENBQUM7aUJBQ0YsQ0FBQyxDQUFDO2FBQ0o7aUJBQUk7Z0JBQ0gsRUFBRSxDQUFDLFNBQVMsQ0FBQztvQkFDWCxLQUFLLEVBQUMsR0FBRyxDQUFDLE9BQU87aUJBQ2xCLENBQUMsQ0FBQTthQUNIO1FBQ0gsQ0FBQyxDQUFDLENBQUE7SUFDSixDQUFDO0NBQ0YsQ0FBQyxDQUFBIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgSU15QXBwIH0gZnJvbSAnLi4vYXBwJ1xyXG5pbXBvcnQgeyB0cmFkZUNvbXBhbnksIGNvbmZpcm1GYWh1byB9IGZyb20gJy4uL2FwaS9vcmRlcic7XHJcblxyXG5jb25zdCBhcHAgPSBnZXRBcHA8SU15QXBwPigpO1xyXG5jb25zdCB0b2tlbiA9IHd4LmdldFN0b3JhZ2VTeW5jKCd0b2tlbicpO1xyXG5QYWdlKHtcclxuICBkYXRhOiB7XHJcbiAgICBtb3R0bzogJ+eCueWHuyDigJznvJbor5HigJ0g5Lul5p6E5bu6JyxcclxuICAgIHVzZXJJbmZvOiB7fSxcclxuICAgIGhhc1VzZXJJbmZvOiBmYWxzZSxcclxuICAgIGNhbklVc2U6IHd4LmNhbklVc2UoJ2J1dHRvbi5vcGVuLXR5cGUuZ2V0VXNlckluZm8nKSxcclxuXHJcbiAgICBpdGVtTGlzdDpbXSxcclxuICAgIGNvbXBhbnk6JycsXHJcbiAgICB0cmFja19udW1iZXI6JycsXHJcbiAgICBpZDonJ1xyXG5cclxuICB9LFxyXG4gIG9uTG9hZChlKSB7XHJcbiAgICB0aGlzLmdldENvbXBhbnlMaXN0KCk7XHJcbiAgICB0aGlzLnNldERhdGEoe1xyXG4gICAgICBpZDplLmlkXHJcbiAgICB9KVxyXG4gIH0sXHJcbiAgLy8g6I635Y+W5b+r6YCS5YWs5Y+45YiX6KGoXHJcbiAgZ2V0Q29tcGFueUxpc3QoKXtcclxuICAgIHRyYWRlQ29tcGFueSgpLnRoZW4ocmVzID0+IHtcclxuICAgICAgdGhpcy5zZXREYXRhISh7XHJcbiAgICAgICAgaXRlbUxpc3Q6cmVzLmRhdGFcclxuICAgICAgfSlcclxuICAgIH0pXHJcbiAgfSxcclxuICAvLyDpgInmi6nnianmtYHlhazlj7hcclxuICBjaG9vc2VQb3N0KCl7XHJcbiAgICBjb25zdCBhcnIgPSBbXTtcclxuICAgIHRoaXMuZGF0YS5pdGVtTGlzdC5tYXAoKHJlZikgPT4ge1xyXG4gICAgICBhcnIucHVzaChyZWYubmFtZSlcclxuICAgIH0pXHJcbiAgICB2YXIgdGhhdCA9IHRoaXM7XHJcbiAgICB3eC5zaG93QWN0aW9uU2hlZXQoe1xyXG4gICAgICBpdGVtTGlzdDogYXJyLFxyXG4gICAgICBzdWNjZXNzKHJlcykge1xyXG4gICAgICAgIHRoYXQuc2V0RGF0YSEoe1xyXG4gICAgICAgICAgY29tcGFueTogYXJyW3Jlcy50YXBJbmRleF1cclxuICAgICAgICB9KVxyXG4gICAgICB9LFxyXG4gICAgICBmYWlsKHJlcykge1xyXG4gICAgICAgIGNvbnNvbGUubG9nKHJlcy5lcnJNc2cpXHJcbiAgICAgIH1cclxuICAgIH0pXHJcbiAgfSxcclxuICBmYUh1bygpe1xyXG4gICAgY29uZmlybUZhaHVvKHRva2VuLCB0aGlzLmRhdGEuaWQsIHRoaXMuZGF0YS5jb21wYW55LCB0aGlzLmRhdGEudHJhY2tfbnVtYmVyKS50aGVuKHJlcyA9PiB7XHJcbiAgICAgIGlmKHJlcy5jb2RlID09IDApe1xyXG4gICAgICAgIHd4LnNob3dUb2FzdCh7XHJcbiAgICAgICAgICB0aXRsZTpyZXMubWVzc2FnZSxcclxuICAgICAgICAgIGljb246ICdzdWNjZXNzJyxcclxuICAgICAgICAgIGR1cmF0aW9uOiAzMDAwLFxyXG4gICAgICAgICAgbWFzazp0cnVlLFxyXG4gICAgICAgICAgc3VjY2Vzcygpe1xyXG4gICAgICAgICAgICB3eC5yZWRpcmVjdFRvKHtcclxuICAgICAgICAgICAgICB1cmw6ICcuLi9zb2xkLW91dC9zb2xkLW91dCdcclxuICAgICAgICAgICAgfSlcclxuICAgICAgICAgIH1cclxuICAgICAgICB9KTtcclxuICAgICAgfWVsc2V7XHJcbiAgICAgICAgd3guc2hvd1RvYXN0KHtcclxuICAgICAgICAgIHRpdGxlOnJlcy5tZXNzYWdlXHJcbiAgICAgICAgfSlcclxuICAgICAgfVxyXG4gICAgfSlcclxuICB9XHJcbn0pXHJcbiJdfQ==