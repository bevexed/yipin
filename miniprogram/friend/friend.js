"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var index_1 = require("../api/index");
Page({
    data: {
        current: '1',
        current_scroll: '1',
        token: '',
        addressList: [],
        region: ['广东省', '广州市', '海珠区'],
        name: '',
        phone: '',
        address: '',
        identity: '',
        id_card: '',
        value4: '输入框已禁用',
        value5: '',
        value6: '',
        value7: ''
    },
    onLoad: function () {
        var _this = this;
        wx.getStorage({
            key: 'token',
            success: function (res) {
                console.log(res);
                _this.setData({
                    token: res.data
                });
            }
        });
        this.getAddress();
    },
    bindRegionChange: function (e) {
        console.log('picker发送选择改变，携带值为', e.detail.value);
        this.setData({
            region: e.detail.value
        });
    },
    getAddress: function () {
        var _this_1 = this;
        index_1.reqAddressList().then(function (res) {
            if (res.code === 1) {
                console.log('地址', res);
                _this_1.setData({
                    addressList: res.data
                });
            }
        });
    },
    handleChange: function (_a) {
        var detail = _a.detail;
        this.setData({
            current: detail.key
        });
    },
    handleChangeScroll: function (_a) {
        var detail = _a.detail;
        this.setData({
            current_scroll: detail.key
        });
    },
    getPartner: function () {
        index_1.reqPartner({}).then(function (res) {
            console.log(res);
        });
    }
});
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiZnJpZW5kLmpzIiwic291cmNlUm9vdCI6IiIsInNvdXJjZXMiOlsiZnJpZW5kLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7O0FBQUEsc0NBQXdEO0FBRXhELElBQUksQ0FBQztJQUVKLElBQUksRUFBRTtRQUNMLE9BQU8sRUFBRSxHQUFHO1FBQ1osY0FBYyxFQUFFLEdBQUc7UUFFbkIsS0FBSyxFQUFFLEVBQUU7UUFFVCxXQUFXLEVBQUMsRUFBRTtRQUVkLE1BQU0sRUFBRSxDQUFDLEtBQUssRUFBRSxLQUFLLEVBQUUsS0FBSyxDQUFDO1FBRTdCLElBQUksRUFBRSxFQUFFO1FBQ1IsS0FBSyxFQUFFLEVBQUU7UUFDVCxPQUFPLEVBQUUsRUFBRTtRQUNYLFFBQVEsRUFBRSxFQUFFO1FBQ1osT0FBTyxFQUFFLEVBQUU7UUFDWCxNQUFNLEVBQUUsUUFBUTtRQUNoQixNQUFNLEVBQUUsRUFBRTtRQUNWLE1BQU0sRUFBRSxFQUFFO1FBQ1YsTUFBTSxFQUFFLEVBQUU7S0FDVjtJQUVELE1BQU0sRUFBTjtRQUVDLElBQUksS0FBSyxHQUFHLElBQUksQ0FBQztRQUNqQixFQUFFLENBQUMsVUFBVSxDQUFDO1lBQ2IsR0FBRyxFQUFFLE9BQU87WUFDWixPQUFPLEVBQVAsVUFBUSxHQUFHO2dCQUNWLE9BQU8sQ0FBQyxHQUFHLENBQUMsR0FBRyxDQUFDLENBQUM7Z0JBQ2pCLEtBQUssQ0FBQyxPQUFRLENBQUM7b0JBQ2QsS0FBSyxFQUFFLEdBQUcsQ0FBQyxJQUFJO2lCQUNmLENBQUMsQ0FBQTtZQUNILENBQUM7U0FDRCxDQUFDLENBQUE7UUFHRixJQUFJLENBQUMsVUFBVSxFQUFFLENBQUE7SUFDbEIsQ0FBQztJQUVELGdCQUFnQixFQUFoQixVQUFpQixDQUFLO1FBQ3JCLE9BQU8sQ0FBQyxHQUFHLENBQUMsbUJBQW1CLEVBQUUsQ0FBQyxDQUFDLE1BQU0sQ0FBQyxLQUFLLENBQUMsQ0FBQTtRQUNoRCxJQUFJLENBQUMsT0FBUSxDQUFDO1lBQ2IsTUFBTSxFQUFFLENBQUMsQ0FBQyxNQUFNLENBQUMsS0FBSztTQUN0QixDQUFDLENBQUE7SUFDSCxDQUFDO0lBRUQsVUFBVSxFQUFWO1FBQUEsbUJBV0M7UUFWQSxzQkFBYyxFQUFFLENBQUMsSUFBSSxDQUNwQixVQUFBLEdBQUc7WUFDRixJQUFJLEdBQUcsQ0FBQyxJQUFJLEtBQUssQ0FBQyxFQUFFO2dCQUNuQixPQUFPLENBQUMsR0FBRyxDQUFDLElBQUksRUFBQyxHQUFHLENBQUMsQ0FBQztnQkFDdEIsT0FBSSxDQUFDLE9BQVEsQ0FBQztvQkFDYixXQUFXLEVBQUUsR0FBRyxDQUFDLElBQUk7aUJBQ3JCLENBQUMsQ0FBQTthQUNGO1FBQ0YsQ0FBQyxDQUNELENBQUE7SUFDRixDQUFDO0lBR0QsWUFBWSxFQUFaLFVBQWEsRUFBYTtZQUFaLGtCQUFNO1FBQ25CLElBQUksQ0FBQyxPQUFRLENBQUM7WUFDYixPQUFPLEVBQUUsTUFBTSxDQUFDLEdBQUc7U0FDbkIsQ0FBQyxDQUFDO0lBQ0osQ0FBQztJQUVELGtCQUFrQixFQUFsQixVQUFtQixFQUFhO1lBQVosa0JBQU07UUFDekIsSUFBSSxDQUFDLE9BQVEsQ0FBQztZQUNiLGNBQWMsRUFBRSxNQUFNLENBQUMsR0FBRztTQUUxQixDQUFDLENBQUM7SUFDSixDQUFDO0lBRUQsVUFBVSxFQUFWO1FBRUMsa0JBQVUsQ0FBQyxFQUFFLENBQUMsQ0FBQyxJQUFJLENBQ2xCLFVBQUMsR0FBUTtZQUNSLE9BQU8sQ0FBQyxHQUFHLENBQUMsR0FBRyxDQUFDLENBQUM7UUFDbEIsQ0FBQyxDQUNELENBQUE7SUFDRixDQUFDO0NBQ0QsQ0FBQyxDQUFBIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHtyZXFBZGRyZXNzTGlzdCwgcmVxUGFydG5lcn0gZnJvbSBcIi4uL2FwaS9pbmRleFwiO1xyXG5cclxuUGFnZSh7XHJcblxyXG5cdGRhdGE6IHtcclxuXHRcdGN1cnJlbnQ6ICcxJyxcclxuXHRcdGN1cnJlbnRfc2Nyb2xsOiAnMScsXHJcblxyXG5cdFx0dG9rZW46ICcnLFxyXG5cclxuXHRcdGFkZHJlc3NMaXN0OltdLFxyXG5cclxuXHRcdHJlZ2lvbjogWyflub/kuJznnIEnLCAn5bm/5bee5biCJywgJ+a1t+ePoOWMuiddLFxyXG5cclxuXHRcdG5hbWU6ICcnLFxyXG5cdFx0cGhvbmU6ICcnLFxyXG5cdFx0YWRkcmVzczogJycsXHJcblx0XHRpZGVudGl0eTogJycsXHJcblx0XHRpZF9jYXJkOiAnJyxcclxuXHRcdHZhbHVlNDogJ+i+k+WFpeahhuW3suemgeeUqCcsXHJcblx0XHR2YWx1ZTU6ICcnLFxyXG5cdFx0dmFsdWU2OiAnJyxcclxuXHRcdHZhbHVlNzogJydcclxuXHR9LFxyXG5cclxuXHRvbkxvYWQoKSB7XHJcblx0XHQvLyDor7vlj5Z0b2tlblxyXG5cdFx0bGV0IF90aGlzID0gdGhpcztcclxuXHRcdHd4LmdldFN0b3JhZ2Uoe1xyXG5cdFx0XHRrZXk6ICd0b2tlbicsXHJcblx0XHRcdHN1Y2Nlc3MocmVzKSB7XHJcblx0XHRcdFx0Y29uc29sZS5sb2cocmVzKTtcclxuXHRcdFx0XHRfdGhpcy5zZXREYXRhISh7XHJcblx0XHRcdFx0XHR0b2tlbjogcmVzLmRhdGFcclxuXHRcdFx0XHR9KVxyXG5cdFx0XHR9XHJcblx0XHR9KVxyXG5cclxuXHRcdC8vXHJcblx0XHR0aGlzLmdldEFkZHJlc3MoKVxyXG5cdH0sXHJcblxyXG5cdGJpbmRSZWdpb25DaGFuZ2UoZTphbnkpIHtcclxuXHRcdGNvbnNvbGUubG9nKCdwaWNrZXLlj5HpgIHpgInmi6nmlLnlj5jvvIzmkLrluKblgLzkuLonLCBlLmRldGFpbC52YWx1ZSlcclxuXHRcdHRoaXMuc2V0RGF0YSEoe1xyXG5cdFx0XHRyZWdpb246IGUuZGV0YWlsLnZhbHVlXHJcblx0XHR9KVxyXG5cdH0sXHJcblxyXG5cdGdldEFkZHJlc3MoKSB7XHJcblx0XHRyZXFBZGRyZXNzTGlzdCgpLnRoZW4oXHJcblx0XHRcdHJlcyA9PiB7XHJcblx0XHRcdFx0aWYgKHJlcy5jb2RlID09PSAxKSB7XHJcblx0XHRcdFx0XHRjb25zb2xlLmxvZygn5Zyw5Z2AJyxyZXMpO1xyXG5cdFx0XHRcdFx0dGhpcy5zZXREYXRhISh7XHJcblx0XHRcdFx0XHRcdGFkZHJlc3NMaXN0OiByZXMuZGF0YVxyXG5cdFx0XHRcdFx0fSlcclxuXHRcdFx0XHR9XHJcblx0XHRcdH1cclxuXHRcdClcclxuXHR9LFxyXG5cclxuXHJcblx0aGFuZGxlQ2hhbmdlKHtkZXRhaWx9OiBhbnkpIHtcclxuXHRcdHRoaXMuc2V0RGF0YSEoe1xyXG5cdFx0XHRjdXJyZW50OiBkZXRhaWwua2V5XHJcblx0XHR9KTtcclxuXHR9LFxyXG5cclxuXHRoYW5kbGVDaGFuZ2VTY3JvbGwoe2RldGFpbH06IGFueSkge1xyXG5cdFx0dGhpcy5zZXREYXRhISh7XHJcblx0XHRcdGN1cnJlbnRfc2Nyb2xsOiBkZXRhaWwua2V5XHJcblxyXG5cdFx0fSk7XHJcblx0fSxcclxuXHJcblx0Z2V0UGFydG5lcigpIHtcclxuXHJcblx0XHRyZXFQYXJ0bmVyKHt9KS50aGVuKFxyXG5cdFx0XHQocmVzOiBhbnkpID0+IHtcclxuXHRcdFx0XHRjb25zb2xlLmxvZyhyZXMpO1xyXG5cdFx0XHR9XHJcblx0XHQpXHJcblx0fVxyXG59KVxyXG4iXX0=