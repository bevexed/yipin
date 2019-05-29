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
            if (res.code == 1) {
                wx.showModal({
                    title: res.message,
                    content: '',
                    showCancel: false,
                    success: function () {
                        wx.navigateBack({
                            delta: 1
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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoicG9zdC5qcyIsInNvdXJjZVJvb3QiOiIiLCJzb3VyY2VzIjpbInBvc3QudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7QUFBQSxzQ0FBMEQ7QUFFMUQsSUFBTSxLQUFLLEdBQUcsRUFBRSxDQUFDLGNBQWMsQ0FBQyxPQUFPLENBQUMsQ0FBQztBQUN6QyxJQUFJLENBQUM7SUFDSCxJQUFJLEVBQUU7UUFDSixLQUFLLEVBQUUsYUFBYTtRQUNwQixRQUFRLEVBQUUsRUFBRTtRQUNaLFdBQVcsRUFBRSxLQUFLO1FBQ2xCLE9BQU8sRUFBRSxFQUFFLENBQUMsT0FBTyxDQUFDLDhCQUE4QixDQUFDO1FBRW5ELFFBQVEsRUFBQyxFQUFFO1FBQ1gsT0FBTyxFQUFDLEVBQUU7UUFDVixZQUFZLEVBQUMsRUFBRTtRQUNmLEVBQUUsRUFBQyxFQUFFO0tBRU47SUFDRCxNQUFNLEVBQU4sVUFBTyxDQUFLO1FBQ1YsSUFBSSxDQUFDLGNBQWMsRUFBRSxDQUFDO1FBQ3RCLElBQUksQ0FBQyxPQUFRLENBQUM7WUFDWixFQUFFLEVBQUMsQ0FBQyxDQUFDLEVBQUU7U0FDUixDQUFDLENBQUE7SUFDSixDQUFDO0lBRUQsY0FBYyxFQUFkO1FBQUEsaUJBTUM7UUFMQyxvQkFBWSxFQUFFLENBQUMsSUFBSSxDQUFDLFVBQUEsR0FBRztZQUNyQixLQUFJLENBQUMsT0FBUSxDQUFDO2dCQUNaLFFBQVEsRUFBQyxHQUFHLENBQUMsSUFBSTthQUNsQixDQUFDLENBQUE7UUFDSixDQUFDLENBQUMsQ0FBQTtJQUNKLENBQUM7SUFFRCxVQUFVLEVBQVY7UUFDRSxJQUFNLEdBQUcsR0FBdUMsRUFBRSxDQUFDO1FBQ25ELElBQUksQ0FBQyxJQUFJLENBQUMsUUFBUSxDQUFDLEdBQUcsQ0FBQyxVQUFDLEdBQUc7WUFFNUIsR0FBRyxDQUFDLElBQUksQ0FBQyxHQUFHLENBQUMsSUFBSSxDQUFDLENBQUE7UUFDakIsQ0FBQyxDQUFDLENBQUE7UUFDRixJQUFJLElBQUksR0FBRyxJQUFJLENBQUM7UUFDaEIsRUFBRSxDQUFDLGVBQWUsQ0FBQztZQUNqQixRQUFRLEVBQUUsR0FBRztZQUNiLE9BQU8sRUFBUCxVQUFRLEdBQUc7Z0JBQ1QsSUFBSSxDQUFDLE9BQVEsQ0FBQztvQkFDWixPQUFPLEVBQUUsR0FBRyxDQUFDLEdBQUcsQ0FBQyxRQUFRLENBQUM7aUJBQzNCLENBQUMsQ0FBQTtZQUNKLENBQUM7WUFDRCxJQUFJLFlBQUMsR0FBRztnQkFDTixPQUFPLENBQUMsR0FBRyxDQUFDLEdBQUcsQ0FBQyxNQUFNLENBQUMsQ0FBQTtZQUN6QixDQUFDO1NBQ0YsQ0FBQyxDQUFBO0lBQ0osQ0FBQztJQUNELEtBQUs7UUFDSCxvQkFBWSxDQUFDLEtBQUssRUFBRSxJQUFJLENBQUMsSUFBSSxDQUFDLEVBQUUsRUFBRSxJQUFJLENBQUMsSUFBSSxDQUFDLE9BQU8sRUFBRSxJQUFJLENBQUMsSUFBSSxDQUFDLFlBQVksQ0FBQyxDQUFDLElBQUksQ0FBQyxVQUFBLEdBQUc7WUFDbkYsSUFBRyxHQUFHLENBQUMsSUFBSSxJQUFJLENBQUMsRUFBQztnQkFDZixFQUFFLENBQUMsU0FBUyxDQUFDO29CQUNYLEtBQUssRUFBQyxHQUFHLENBQUMsT0FBTztvQkFDakIsT0FBTyxFQUFDLEVBQUU7b0JBQ1YsVUFBVSxFQUFDLEtBQUs7b0JBQ2hCLE9BQU87d0JBQ0wsRUFBRSxDQUFDLFlBQVksQ0FBQzs0QkFDZCxLQUFLLEVBQUUsQ0FBQzt5QkFDVCxDQUFDLENBQUE7b0JBQ0osQ0FBQztpQkFDRixDQUFDLENBQUM7YUFDSjtpQkFBSTtnQkFDSCxFQUFFLENBQUMsU0FBUyxDQUFDO29CQUNYLEtBQUssRUFBQyxHQUFHLENBQUMsT0FBTztpQkFDbEIsQ0FBQyxDQUFBO2FBQ0g7UUFDSCxDQUFDLENBQUMsQ0FBQTtJQUNKLENBQUM7Q0FDRixDQUFDLENBQUEiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyB0cmFkZUNvbXBhbnksIGNvbmZpcm1GYWh1byB9IGZyb20gJy4uL2FwaS9vcmRlcic7XHJcblxyXG5jb25zdCB0b2tlbiA9IHd4LmdldFN0b3JhZ2VTeW5jKCd0b2tlbicpO1xyXG5QYWdlKHtcclxuICBkYXRhOiB7XHJcbiAgICBtb3R0bzogJ+eCueWHuyDigJznvJbor5HigJ0g5Lul5p6E5bu6JyxcclxuICAgIHVzZXJJbmZvOiB7fSxcclxuICAgIGhhc1VzZXJJbmZvOiBmYWxzZSxcclxuICAgIGNhbklVc2U6IHd4LmNhbklVc2UoJ2J1dHRvbi5vcGVuLXR5cGUuZ2V0VXNlckluZm8nKSxcclxuXHJcbiAgICBpdGVtTGlzdDpbXSxcclxuICAgIGNvbXBhbnk6JycsXHJcbiAgICB0cmFja19udW1iZXI6JycsXHJcbiAgICBpZDonJ1xyXG5cclxuICB9LFxyXG4gIG9uTG9hZChlOmFueSkge1xyXG4gICAgdGhpcy5nZXRDb21wYW55TGlzdCgpO1xyXG4gICAgdGhpcy5zZXREYXRhISh7XHJcbiAgICAgIGlkOmUuaWRcclxuICAgIH0pXHJcbiAgfSxcclxuICAvLyDojrflj5blv6vpgJLlhazlj7jliJfooahcclxuICBnZXRDb21wYW55TGlzdCgpe1xyXG4gICAgdHJhZGVDb21wYW55KCkudGhlbihyZXMgPT4ge1xyXG4gICAgICB0aGlzLnNldERhdGEhKHtcclxuICAgICAgICBpdGVtTGlzdDpyZXMuZGF0YVxyXG4gICAgICB9KVxyXG4gICAgfSlcclxuICB9LFxyXG4gIC8vIOmAieaLqeeJqea1geWFrOWPuFxyXG4gIGNob29zZVBvc3QoKXtcclxuICAgIGNvbnN0IGFycjogYW55W10gfCBuZXZlcltdIHwgc3RyaW5nW10gfCBhbnlbXSA9IFtdO1xyXG4gICAgdGhpcy5kYXRhLml0ZW1MaXN0Lm1hcCgocmVmKSA9PiB7XHJcbiAgICAgIC8vIEB0cy1pZ25vcmVcclxuXHRcdFx0YXJyLnB1c2gocmVmLm5hbWUpXHJcbiAgICB9KVxyXG4gICAgdmFyIHRoYXQgPSB0aGlzO1xyXG4gICAgd3guc2hvd0FjdGlvblNoZWV0KHtcclxuICAgICAgaXRlbUxpc3Q6IGFycixcclxuICAgICAgc3VjY2VzcyhyZXMpIHtcclxuICAgICAgICB0aGF0LnNldERhdGEhKHtcclxuICAgICAgICAgIGNvbXBhbnk6IGFycltyZXMudGFwSW5kZXhdXHJcbiAgICAgICAgfSlcclxuICAgICAgfSxcclxuICAgICAgZmFpbChyZXMpIHtcclxuICAgICAgICBjb25zb2xlLmxvZyhyZXMuZXJyTXNnKVxyXG4gICAgICB9XHJcbiAgICB9KVxyXG4gIH0sXHJcbiAgZmFIdW8oKXtcclxuICAgIGNvbmZpcm1GYWh1byh0b2tlbiwgdGhpcy5kYXRhLmlkLCB0aGlzLmRhdGEuY29tcGFueSwgdGhpcy5kYXRhLnRyYWNrX251bWJlcikudGhlbihyZXMgPT4ge1xyXG4gICAgICBpZihyZXMuY29kZSA9PSAxKXtcclxuICAgICAgICB3eC5zaG93TW9kYWwoe1xyXG4gICAgICAgICAgdGl0bGU6cmVzLm1lc3NhZ2UsXHJcbiAgICAgICAgICBjb250ZW50OicnLFxyXG4gICAgICAgICAgc2hvd0NhbmNlbDpmYWxzZSxcclxuICAgICAgICAgIHN1Y2Nlc3MoKXtcclxuICAgICAgICAgICAgd3gubmF2aWdhdGVCYWNrKHtcclxuICAgICAgICAgICAgICBkZWx0YTogMVxyXG4gICAgICAgICAgICB9KVxyXG4gICAgICAgICAgfVxyXG4gICAgICAgIH0pO1xyXG4gICAgICB9ZWxzZXtcclxuICAgICAgICB3eC5zaG93VG9hc3Qoe1xyXG4gICAgICAgICAgdGl0bGU6cmVzLm1lc3NhZ2VcclxuICAgICAgICB9KVxyXG4gICAgICB9XHJcbiAgICB9KVxyXG4gIH1cclxufSlcclxuIl19