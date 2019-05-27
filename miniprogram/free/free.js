"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var index_1 = require("../api/index");
Page({
    data: {
        token: '',
        array: ['美国', '中国', '巴西', '日本'],
        list: [],
        index: 0,
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
        this.getPhoneModels();
    },
    bindPickerChange: function (e) {
        console.log('picker发送选择改变，携带值为', e.detail.value);
        this.setData({
            index: e.detail.value
        });
    },
    input: function (e) {
        var _a;
        console.log(e);
        var label = e.target.dataset.type;
        var value = e.detail.detail.value;
        console.log(value);
        this.setData((_a = {},
            _a[label] = value,
            _a));
        console.log(label, value);
    },
    getPhoneModels: function () {
        var _this_1 = this;
        index_1.reqPhoneModels().then(function (res) {
            if (res.code === 1) {
                console.log('get-phone-models', res);
                _this_1.setData({
                    list: res.data,
                    array: res.data.map(function (item) { return item.name; })
                });
            }
        });
    }
});
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiZnJlZS5qcyIsInNvdXJjZVJvb3QiOiIiLCJzb3VyY2VzIjpbImZyZWUudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7QUFBQSxzQ0FBNEM7QUFFNUMsSUFBSSxDQUFDO0lBRUosSUFBSSxFQUFFO1FBRUwsS0FBSyxFQUFFLEVBQUU7UUFFVCxLQUFLLEVBQUUsQ0FBQyxJQUFJLEVBQUUsSUFBSSxFQUFFLElBQUksRUFBRSxJQUFJLENBQUM7UUFFL0IsSUFBSSxFQUFDLEVBQUU7UUFFUCxLQUFLLEVBQUUsQ0FBQztLQUVSO0lBRUQsTUFBTSxFQUFOO1FBRUMsSUFBSSxLQUFLLEdBQUcsSUFBSSxDQUFDO1FBQ2pCLEVBQUUsQ0FBQyxVQUFVLENBQUM7WUFDYixHQUFHLEVBQUUsT0FBTztZQUNaLE9BQU8sRUFBUCxVQUFRLEdBQUc7Z0JBQ1YsT0FBTyxDQUFDLEdBQUcsQ0FBQyxHQUFHLENBQUMsQ0FBQztnQkFDakIsS0FBSyxDQUFDLE9BQVEsQ0FBQztvQkFDZCxLQUFLLEVBQUUsR0FBRyxDQUFDLElBQUk7aUJBQ2YsQ0FBQyxDQUFBO1lBQ0gsQ0FBQztTQUNELENBQUMsQ0FBQztRQUVILElBQUksQ0FBQyxjQUFjLEVBQUUsQ0FBQztJQUN2QixDQUFDO0lBRUQsZ0JBQWdCLEVBQWhCLFVBQWlCLENBQU07UUFDdEIsT0FBTyxDQUFDLEdBQUcsQ0FBQyxtQkFBbUIsRUFBRSxDQUFDLENBQUMsTUFBTSxDQUFDLEtBQUssQ0FBQyxDQUFDO1FBQ2pELElBQUksQ0FBQyxPQUFRLENBQUM7WUFDYixLQUFLLEVBQUUsQ0FBQyxDQUFDLE1BQU0sQ0FBQyxLQUFLO1NBQ3JCLENBQUMsQ0FBQTtJQUNILENBQUM7SUFHRCxLQUFLLEVBQUwsVUFBTSxDQUFNOztRQUNYLE9BQU8sQ0FBQyxHQUFHLENBQUMsQ0FBQyxDQUFDLENBQUM7UUFDZixJQUFNLEtBQUssR0FBRyxDQUFDLENBQUMsTUFBTSxDQUFDLE9BQU8sQ0FBQyxJQUFJLENBQUM7UUFDcEMsSUFBTSxLQUFLLEdBQUcsQ0FBQyxDQUFDLE1BQU0sQ0FBQyxNQUFNLENBQUMsS0FBSyxDQUFDO1FBQ3BDLE9BQU8sQ0FBQyxHQUFHLENBQUMsS0FBSyxDQUFDLENBQUM7UUFDbkIsSUFBSSxDQUFDLE9BQVE7WUFDWixHQUFDLEtBQUssSUFBRyxLQUFLO2dCQUNiLENBQUM7UUFFSCxPQUFPLENBQUMsR0FBRyxDQUFDLEtBQUssRUFBRSxLQUFLLENBQUMsQ0FBQztJQUMzQixDQUFDO0lBR0QsY0FBYyxFQUFkO1FBQUEsbUJBWUM7UUFYQSxzQkFBYyxFQUFFLENBQUMsSUFBSSxDQUNwQixVQUFBLEdBQUc7WUFDRixJQUFJLEdBQUcsQ0FBQyxJQUFJLEtBQUssQ0FBQyxFQUFFO2dCQUNuQixPQUFPLENBQUMsR0FBRyxDQUFDLGtCQUFrQixFQUFFLEdBQUcsQ0FBQyxDQUFDO2dCQUNyQyxPQUFJLENBQUMsT0FBUSxDQUFDO29CQUNiLElBQUksRUFBRSxHQUFHLENBQUMsSUFBSTtvQkFDZCxLQUFLLEVBQUUsR0FBRyxDQUFDLElBQUksQ0FBQyxHQUFHLENBQUMsVUFBQyxJQUFRLElBQUssT0FBQSxJQUFJLENBQUMsSUFBSSxFQUFULENBQVMsQ0FBQztpQkFDNUMsQ0FBQyxDQUFBO2FBQ0Y7UUFDRixDQUFDLENBQ0QsQ0FBQTtJQUNGLENBQUM7Q0FDRCxDQUFDLENBQUMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQge3JlcVBob25lTW9kZWxzfSBmcm9tIFwiLi4vYXBpL2luZGV4XCI7XG5cblBhZ2Uoe1xuXG5cdGRhdGE6IHtcblxuXHRcdHRva2VuOiAnJyxcblxuXHRcdGFycmF5OiBbJ+e+juWbvScsICfkuK3lm70nLCAn5be06KW/JywgJ+aXpeacrCddLFxuXG5cdFx0bGlzdDpbXSxcblxuXHRcdGluZGV4OiAwLFxuXG5cdH0sXG5cblx0b25Mb2FkKCkge1xuXHRcdC8vIOivu+WPlnRva2VuXG5cdFx0bGV0IF90aGlzID0gdGhpcztcblx0XHR3eC5nZXRTdG9yYWdlKHtcblx0XHRcdGtleTogJ3Rva2VuJyxcblx0XHRcdHN1Y2Nlc3MocmVzKSB7XG5cdFx0XHRcdGNvbnNvbGUubG9nKHJlcyk7XG5cdFx0XHRcdF90aGlzLnNldERhdGEhKHtcblx0XHRcdFx0XHR0b2tlbjogcmVzLmRhdGFcblx0XHRcdFx0fSlcblx0XHRcdH1cblx0XHR9KTtcblxuXHRcdHRoaXMuZ2V0UGhvbmVNb2RlbHMoKTtcblx0fSxcblxuXHRiaW5kUGlja2VyQ2hhbmdlKGU6IGFueSkge1xuXHRcdGNvbnNvbGUubG9nKCdwaWNrZXLlj5HpgIHpgInmi6nmlLnlj5jvvIzmkLrluKblgLzkuLonLCBlLmRldGFpbC52YWx1ZSk7XG5cdFx0dGhpcy5zZXREYXRhISh7XG5cdFx0XHRpbmRleDogZS5kZXRhaWwudmFsdWVcblx0XHR9KVxuXHR9LFxuXG5cblx0aW5wdXQoZTogYW55KSB7XG5cdFx0Y29uc29sZS5sb2coZSk7XG5cdFx0Y29uc3QgbGFiZWwgPSBlLnRhcmdldC5kYXRhc2V0LnR5cGU7XG5cdFx0Y29uc3QgdmFsdWUgPSBlLmRldGFpbC5kZXRhaWwudmFsdWU7XG5cdFx0Y29uc29sZS5sb2codmFsdWUpO1xuXHRcdHRoaXMuc2V0RGF0YSEoe1xuXHRcdFx0W2xhYmVsXTogdmFsdWVcblx0XHR9KTtcblxuXHRcdGNvbnNvbGUubG9nKGxhYmVsLCB2YWx1ZSk7XG5cdH0sXG5cblxuXHRnZXRQaG9uZU1vZGVscygpIHtcblx0XHRyZXFQaG9uZU1vZGVscygpLnRoZW4oXG5cdFx0XHRyZXMgPT4ge1xuXHRcdFx0XHRpZiAocmVzLmNvZGUgPT09IDEpIHtcblx0XHRcdFx0XHRjb25zb2xlLmxvZygnZ2V0LXBob25lLW1vZGVscycsIHJlcyk7XG5cdFx0XHRcdFx0dGhpcy5zZXREYXRhISh7XG5cdFx0XHRcdFx0XHRsaXN0OiByZXMuZGF0YSxcblx0XHRcdFx0XHRcdGFycmF5OiByZXMuZGF0YS5tYXAoKGl0ZW06YW55KSA9PiBpdGVtLm5hbWUpXG5cdFx0XHRcdFx0fSlcblx0XHRcdFx0fVxuXHRcdFx0fVxuXHRcdClcblx0fVxufSk7XG4iXX0=