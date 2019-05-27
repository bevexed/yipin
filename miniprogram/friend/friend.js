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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiZnJpZW5kLmpzIiwic291cmNlUm9vdCI6IiIsInNvdXJjZXMiOlsiZnJpZW5kLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7O0FBQUEsc0NBQXdEO0FBRXhELElBQUksQ0FBQztJQUVKLElBQUksRUFBRTtRQUNMLE9BQU8sRUFBRSxHQUFHO1FBQ1osY0FBYyxFQUFFLEdBQUc7UUFFbkIsS0FBSyxFQUFFLEVBQUU7UUFFVCxXQUFXLEVBQUMsRUFBRTtRQUVkLE1BQU0sRUFBRSxDQUFDLEtBQUssRUFBRSxLQUFLLEVBQUUsS0FBSyxDQUFDO1FBRTdCLElBQUksRUFBRSxFQUFFO1FBQ1IsS0FBSyxFQUFFLEVBQUU7UUFDVCxPQUFPLEVBQUUsRUFBRTtRQUNYLFFBQVEsRUFBRSxFQUFFO1FBQ1osT0FBTyxFQUFFLEVBQUU7UUFDWCxNQUFNLEVBQUUsUUFBUTtRQUNoQixNQUFNLEVBQUUsRUFBRTtRQUNWLE1BQU0sRUFBRSxFQUFFO1FBQ1YsTUFBTSxFQUFFLEVBQUU7S0FDVjtJQUVELE1BQU0sRUFBTjtRQUVDLElBQUksS0FBSyxHQUFHLElBQUksQ0FBQztRQUNqQixFQUFFLENBQUMsVUFBVSxDQUFDO1lBQ2IsR0FBRyxFQUFFLE9BQU87WUFDWixPQUFPLEVBQVAsVUFBUSxHQUFHO2dCQUNWLE9BQU8sQ0FBQyxHQUFHLENBQUMsR0FBRyxDQUFDLENBQUM7Z0JBQ2pCLEtBQUssQ0FBQyxPQUFRLENBQUM7b0JBQ2QsS0FBSyxFQUFFLEdBQUcsQ0FBQyxJQUFJO2lCQUNmLENBQUMsQ0FBQTtZQUNILENBQUM7U0FDRCxDQUFDLENBQUE7UUFHRixJQUFJLENBQUMsVUFBVSxFQUFFLENBQUE7SUFDbEIsQ0FBQztJQUVELGdCQUFnQixFQUFoQixVQUFpQixDQUFLO1FBQ3JCLE9BQU8sQ0FBQyxHQUFHLENBQUMsbUJBQW1CLEVBQUUsQ0FBQyxDQUFDLE1BQU0sQ0FBQyxLQUFLLENBQUMsQ0FBQTtRQUNoRCxJQUFJLENBQUMsT0FBUSxDQUFDO1lBQ2IsTUFBTSxFQUFFLENBQUMsQ0FBQyxNQUFNLENBQUMsS0FBSztTQUN0QixDQUFDLENBQUE7SUFDSCxDQUFDO0lBRUQsVUFBVSxFQUFWO1FBQUEsbUJBV0M7UUFWQSxzQkFBYyxFQUFFLENBQUMsSUFBSSxDQUNwQixVQUFBLEdBQUc7WUFDRixJQUFJLEdBQUcsQ0FBQyxJQUFJLEtBQUssQ0FBQyxFQUFFO2dCQUNuQixPQUFPLENBQUMsR0FBRyxDQUFDLElBQUksRUFBQyxHQUFHLENBQUMsQ0FBQztnQkFDdEIsT0FBSSxDQUFDLE9BQVEsQ0FBQztvQkFDYixXQUFXLEVBQUUsR0FBRyxDQUFDLElBQUk7aUJBQ3JCLENBQUMsQ0FBQTthQUNGO1FBQ0YsQ0FBQyxDQUNELENBQUE7SUFDRixDQUFDO0lBR0QsWUFBWSxFQUFaLFVBQWEsRUFBYTtZQUFaLGtCQUFNO1FBQ25CLElBQUksQ0FBQyxPQUFRLENBQUM7WUFDYixPQUFPLEVBQUUsTUFBTSxDQUFDLEdBQUc7U0FDbkIsQ0FBQyxDQUFDO0lBQ0osQ0FBQztJQUVELGtCQUFrQixFQUFsQixVQUFtQixFQUFhO1lBQVosa0JBQU07UUFDekIsSUFBSSxDQUFDLE9BQVEsQ0FBQztZQUNiLGNBQWMsRUFBRSxNQUFNLENBQUMsR0FBRztTQUUxQixDQUFDLENBQUM7SUFDSixDQUFDO0lBRUQsVUFBVSxFQUFWO1FBRUMsa0JBQVUsQ0FBQyxFQUFFLENBQUMsQ0FBQyxJQUFJLENBQ2xCLFVBQUMsR0FBUTtZQUNSLE9BQU8sQ0FBQyxHQUFHLENBQUMsR0FBRyxDQUFDLENBQUM7UUFDbEIsQ0FBQyxDQUNELENBQUE7SUFDRixDQUFDO0NBQ0QsQ0FBQyxDQUFBIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHtyZXFBZGRyZXNzTGlzdCwgcmVxUGFydG5lcn0gZnJvbSBcIi4uL2FwaS9pbmRleFwiO1xuXG5QYWdlKHtcblxuXHRkYXRhOiB7XG5cdFx0Y3VycmVudDogJzEnLFxuXHRcdGN1cnJlbnRfc2Nyb2xsOiAnMScsXG5cblx0XHR0b2tlbjogJycsXG5cblx0XHRhZGRyZXNzTGlzdDpbXSxcblxuXHRcdHJlZ2lvbjogWyflub/kuJznnIEnLCAn5bm/5bee5biCJywgJ+a1t+ePoOWMuiddLFxuXG5cdFx0bmFtZTogJycsXG5cdFx0cGhvbmU6ICcnLFxuXHRcdGFkZHJlc3M6ICcnLFxuXHRcdGlkZW50aXR5OiAnJyxcblx0XHRpZF9jYXJkOiAnJyxcblx0XHR2YWx1ZTQ6ICfovpPlhaXmoYblt7LnpoHnlKgnLFxuXHRcdHZhbHVlNTogJycsXG5cdFx0dmFsdWU2OiAnJyxcblx0XHR2YWx1ZTc6ICcnXG5cdH0sXG5cblx0b25Mb2FkKCkge1xuXHRcdC8vIOivu+WPlnRva2VuXG5cdFx0bGV0IF90aGlzID0gdGhpcztcblx0XHR3eC5nZXRTdG9yYWdlKHtcblx0XHRcdGtleTogJ3Rva2VuJyxcblx0XHRcdHN1Y2Nlc3MocmVzKSB7XG5cdFx0XHRcdGNvbnNvbGUubG9nKHJlcyk7XG5cdFx0XHRcdF90aGlzLnNldERhdGEhKHtcblx0XHRcdFx0XHR0b2tlbjogcmVzLmRhdGFcblx0XHRcdFx0fSlcblx0XHRcdH1cblx0XHR9KVxuXG5cdFx0Ly9cblx0XHR0aGlzLmdldEFkZHJlc3MoKVxuXHR9LFxuXG5cdGJpbmRSZWdpb25DaGFuZ2UoZTphbnkpIHtcblx0XHRjb25zb2xlLmxvZygncGlja2Vy5Y+R6YCB6YCJ5oup5pS55Y+Y77yM5pC65bim5YC85Li6JywgZS5kZXRhaWwudmFsdWUpXG5cdFx0dGhpcy5zZXREYXRhISh7XG5cdFx0XHRyZWdpb246IGUuZGV0YWlsLnZhbHVlXG5cdFx0fSlcblx0fSxcblxuXHRnZXRBZGRyZXNzKCkge1xuXHRcdHJlcUFkZHJlc3NMaXN0KCkudGhlbihcblx0XHRcdHJlcyA9PiB7XG5cdFx0XHRcdGlmIChyZXMuY29kZSA9PT0gMSkge1xuXHRcdFx0XHRcdGNvbnNvbGUubG9nKCflnLDlnYAnLHJlcyk7XG5cdFx0XHRcdFx0dGhpcy5zZXREYXRhISh7XG5cdFx0XHRcdFx0XHRhZGRyZXNzTGlzdDogcmVzLmRhdGFcblx0XHRcdFx0XHR9KVxuXHRcdFx0XHR9XG5cdFx0XHR9XG5cdFx0KVxuXHR9LFxuXG5cblx0aGFuZGxlQ2hhbmdlKHtkZXRhaWx9OiBhbnkpIHtcblx0XHR0aGlzLnNldERhdGEhKHtcblx0XHRcdGN1cnJlbnQ6IGRldGFpbC5rZXlcblx0XHR9KTtcblx0fSxcblxuXHRoYW5kbGVDaGFuZ2VTY3JvbGwoe2RldGFpbH06IGFueSkge1xuXHRcdHRoaXMuc2V0RGF0YSEoe1xuXHRcdFx0Y3VycmVudF9zY3JvbGw6IGRldGFpbC5rZXlcblxuXHRcdH0pO1xuXHR9LFxuXG5cdGdldFBhcnRuZXIoKSB7XG5cblx0XHRyZXFQYXJ0bmVyKHt9KS50aGVuKFxuXHRcdFx0KHJlczogYW55KSA9PiB7XG5cdFx0XHRcdGNvbnNvbGUubG9nKHJlcyk7XG5cdFx0XHR9XG5cdFx0KVxuXHR9XG59KVxuIl19