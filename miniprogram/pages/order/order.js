"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var index_1 = require("../../api/index");
Page({
    data: {
        phone: ''
    },
    onLoad: function () {
        var _this_1 = this;
        index_1.reqService().then(function (res) {
            console.log(res);
            _this_1.setData({
                phone: res.data
            });
        });
    },
    showPhone: function () {
        var _this = this;
        wx.showActionSheet({
            itemList: ['拨打客服电话'],
            success: function (res) {
                console.log(res);
                wx.makePhoneCall({
                    phoneNumber: _this.data.phone
                });
            },
            fail: function (res) {
                console.log(res.errMsg);
            }
        });
    },
    handleClick: function () {
        wx.clearStorage({
            success: function (res) {
                console.log(res);
                wx.showToast({
                    title: '退出成功',
                    duration: 2000,
                    mask: true,
                    complete: function () {
                        wx.switchTab({
                            url: '/pages/index/index'
                        });
                    }
                });
            }
        });
    }
});
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoib3JkZXIuanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyJvcmRlci50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOztBQUFBLHlDQUEyQztBQUUzQyxJQUFJLENBQUM7SUFDSixJQUFJLEVBQUU7UUFDTCxLQUFLLEVBQUUsRUFBRTtLQUNUO0lBQ0QsTUFBTSxFQUFOO1FBQUEsbUJBU0M7UUFSQSxrQkFBVSxFQUFFLENBQUMsSUFBSSxDQUNoQixVQUFBLEdBQUc7WUFDRixPQUFPLENBQUMsR0FBRyxDQUFDLEdBQUcsQ0FBQyxDQUFDO1lBQ2pCLE9BQUksQ0FBQyxPQUFRLENBQUM7Z0JBQ2IsS0FBSyxFQUFFLEdBQUcsQ0FBQyxJQUFJO2FBQ2YsQ0FBQyxDQUFBO1FBQ0gsQ0FBQyxDQUNELENBQUE7SUFDRixDQUFDO0lBQ0QsU0FBUztRQUNSLElBQUksS0FBSyxHQUFHLElBQUksQ0FBQTtRQUNoQixFQUFFLENBQUMsZUFBZSxDQUFDO1lBQ2xCLFFBQVEsRUFBRSxDQUFDLFFBQVEsQ0FBQztZQUNwQixPQUFPLFlBQUMsR0FBRztnQkFDVixPQUFPLENBQUMsR0FBRyxDQUFDLEdBQUcsQ0FBQyxDQUFDO2dCQUNqQixFQUFFLENBQUMsYUFBYSxDQUFDO29CQUNoQixXQUFXLEVBQUUsS0FBSyxDQUFDLElBQUksQ0FBQyxLQUFLO2lCQUM3QixDQUFDLENBQUE7WUFDSCxDQUFDO1lBQ0QsSUFBSSxZQUFDLEdBQUc7Z0JBQ1AsT0FBTyxDQUFDLEdBQUcsQ0FBQyxHQUFHLENBQUMsTUFBTSxDQUFDLENBQUE7WUFDeEIsQ0FBQztTQUNELENBQUMsQ0FBQTtJQUNILENBQUM7SUFDRCxXQUFXO1FBQ1YsRUFBRSxDQUFDLFlBQVksQ0FDZDtZQUNDLE9BQU8sWUFBQyxHQUFHO2dCQUNWLE9BQU8sQ0FBQyxHQUFHLENBQUMsR0FBRyxDQUFDLENBQUM7Z0JBQ2pCLEVBQUUsQ0FBQyxTQUFTLENBQUM7b0JBQ1osS0FBSyxFQUFFLE1BQU07b0JBQ2IsUUFBUSxFQUFFLElBQUk7b0JBQ2QsSUFBSSxFQUFFLElBQUk7b0JBQ1YsUUFBUTt3QkFDUCxFQUFFLENBQUMsU0FBUyxDQUFDOzRCQUNaLEdBQUcsRUFBRSxvQkFBb0I7eUJBQ3pCLENBQUMsQ0FBQTtvQkFDSCxDQUFDO2lCQUNELENBQUMsQ0FBQTtZQUVILENBQUM7U0FDRCxDQUNELENBQUE7SUFDRixDQUFDO0NBQ0QsQ0FBQyxDQUFBIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHtyZXFTZXJ2aWNlfSBmcm9tIFwiLi4vLi4vYXBpL2luZGV4XCI7XHJcblxyXG5QYWdlKHtcclxuXHRkYXRhOiB7XHJcblx0XHRwaG9uZTogJydcclxuXHR9LFxyXG5cdG9uTG9hZCgpIHtcclxuXHRcdHJlcVNlcnZpY2UoKS50aGVuKFxyXG5cdFx0XHRyZXMgPT4ge1xyXG5cdFx0XHRcdGNvbnNvbGUubG9nKHJlcyk7XHJcblx0XHRcdFx0dGhpcy5zZXREYXRhISh7XHJcblx0XHRcdFx0XHRwaG9uZTogcmVzLmRhdGFcclxuXHRcdFx0XHR9KVxyXG5cdFx0XHR9XHJcblx0XHQpXHJcblx0fSxcclxuXHRzaG93UGhvbmUoKSB7XHJcblx0XHRsZXQgX3RoaXMgPSB0aGlzXHJcblx0XHR3eC5zaG93QWN0aW9uU2hlZXQoe1xyXG5cdFx0XHRpdGVtTGlzdDogWyfmi6jmiZPlrqLmnI3nlLXor50nXSxcclxuXHRcdFx0c3VjY2VzcyhyZXMpIHtcclxuXHRcdFx0XHRjb25zb2xlLmxvZyhyZXMpO1xyXG5cdFx0XHRcdHd4Lm1ha2VQaG9uZUNhbGwoe1xyXG5cdFx0XHRcdFx0cGhvbmVOdW1iZXI6IF90aGlzLmRhdGEucGhvbmUgLy/ku4XkuLrnpLrkvovvvIzlubbpnZ7nnJ/lrp7nmoTnlLXor53lj7fnoIFcclxuXHRcdFx0XHR9KVxyXG5cdFx0XHR9LFxyXG5cdFx0XHRmYWlsKHJlcykge1xyXG5cdFx0XHRcdGNvbnNvbGUubG9nKHJlcy5lcnJNc2cpXHJcblx0XHRcdH1cclxuXHRcdH0pXHJcblx0fSxcclxuXHRoYW5kbGVDbGljaygpIHtcclxuXHRcdHd4LmNsZWFyU3RvcmFnZShcclxuXHRcdFx0e1xyXG5cdFx0XHRcdHN1Y2Nlc3MocmVzKSB7XHJcblx0XHRcdFx0XHRjb25zb2xlLmxvZyhyZXMpO1xyXG5cdFx0XHRcdFx0d3guc2hvd1RvYXN0KHtcclxuXHRcdFx0XHRcdFx0dGl0bGU6ICfpgIDlh7rmiJDlip8nLFxyXG5cdFx0XHRcdFx0XHRkdXJhdGlvbjogMjAwMCxcclxuXHRcdFx0XHRcdFx0bWFzazogdHJ1ZSxcclxuXHRcdFx0XHRcdFx0Y29tcGxldGUoKSB7XHJcblx0XHRcdFx0XHRcdFx0d3guc3dpdGNoVGFiKHtcclxuXHRcdFx0XHRcdFx0XHRcdHVybDogJy9wYWdlcy9pbmRleC9pbmRleCdcclxuXHRcdFx0XHRcdFx0XHR9KVxyXG5cdFx0XHRcdFx0XHR9XHJcblx0XHRcdFx0XHR9KVxyXG5cclxuXHRcdFx0XHR9XHJcblx0XHRcdH1cclxuXHRcdClcclxuXHR9XHJcbn0pXHJcbiJdfQ==