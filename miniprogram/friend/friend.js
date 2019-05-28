"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var index_1 = require("../api/index");
Page({
    data: {
        current: '1',
        token: '',
        addressList: [],
        region: ['广东省', '广州市', '海珠区'],
        name: '',
        phone: '',
        address: '',
        identity: '',
        id_card: '',
        id_card_positive: '',
        id_card_contrary: '',
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
    chooseTop: function () {
        var _this = this;
        wx.chooseImage({
            count: 1,
            sizeType: ['original', 'compressed'],
            sourceType: ['album', 'camera'],
            success: function (res) {
                var tempFilePaths = res.tempFilePaths;
                _this.setData({
                    id_card_positive: tempFilePaths
                });
                console.log(tempFilePaths);
            }
        });
    },
    chooseBottom: function () {
        var _this = this;
        wx.chooseImage({
            count: 1,
            sizeType: ['original', 'compressed'],
            sourceType: ['album', 'camera'],
            success: function (res) {
                var tempFilePaths = res.tempFilePaths;
                _this.setData({
                    id_card_contrary: tempFilePaths
                });
                console.log(tempFilePaths);
            }
        });
    },
    getPartner: function () {
        var _a = this.data, token = _a.token, phone = _a.phone, name = _a.name, address = _a.address, region = _a.region, identity = _a.identity, id_card = _a.id_card, id_card_positive = _a.id_card_positive, id_card_contrary = _a.id_card_contrary, current = _a.current;
        identity = current;
        address = region.join('');
        var data;
        if (identity === '1') {
            data = {
                token: token, phone: phone, name: name, address: address, id_card: id_card, identity: identity, id_card_positive: id_card_positive[0], id_card_contrary: id_card_contrary[0]
            };
        }
        else {
            data = {
                token: token, phone: phone, name: name, address: address, identity: identity
            };
        }
        index_1.reqPartner(data).then(function (res) {
            console.log(res);
        });
    }
});
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiZnJpZW5kLmpzIiwic291cmNlUm9vdCI6IiIsInNvdXJjZXMiOlsiZnJpZW5kLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7O0FBQUEsc0NBQWlFO0FBRWpFLElBQUksQ0FBQztJQUVKLElBQUksRUFBRTtRQUNMLE9BQU8sRUFBRSxHQUFHO1FBRVosS0FBSyxFQUFFLEVBQUU7UUFFVCxXQUFXLEVBQUMsRUFBRTtRQUVkLE1BQU0sRUFBRSxDQUFDLEtBQUssRUFBRSxLQUFLLEVBQUUsS0FBSyxDQUFDO1FBRTdCLElBQUksRUFBRSxFQUFFO1FBQ1IsS0FBSyxFQUFFLEVBQUU7UUFDVCxPQUFPLEVBQUUsRUFBRTtRQUNYLFFBQVEsRUFBRSxFQUFFO1FBQ1osT0FBTyxFQUFFLEVBQUU7UUFDWCxnQkFBZ0IsRUFBRSxFQUFFO1FBQ3BCLGdCQUFnQixFQUFFLEVBQUU7S0FDcEI7SUFFRCxNQUFNLEVBQU47UUFFQyxJQUFJLEtBQUssR0FBRyxJQUFJLENBQUM7UUFDakIsRUFBRSxDQUFDLFVBQVUsQ0FBQztZQUNiLEdBQUcsRUFBRSxPQUFPO1lBQ1osT0FBTyxFQUFQLFVBQVEsR0FBRztnQkFDVixPQUFPLENBQUMsR0FBRyxDQUFDLEdBQUcsQ0FBQyxDQUFDO2dCQUNqQixLQUFLLENBQUMsT0FBUSxDQUFDO29CQUNkLEtBQUssRUFBRSxHQUFHLENBQUMsSUFBSTtpQkFDZixDQUFDLENBQUE7WUFDSCxDQUFDO1NBQ0QsQ0FBQyxDQUFDO1FBR0gsSUFBSSxDQUFDLFVBQVUsRUFBRSxDQUFBO0lBQ2xCLENBQUM7SUFFRCxnQkFBZ0IsRUFBaEIsVUFBaUIsQ0FBSztRQUNyQixPQUFPLENBQUMsR0FBRyxDQUFDLG1CQUFtQixFQUFFLENBQUMsQ0FBQyxNQUFNLENBQUMsS0FBSyxDQUFDLENBQUM7UUFDakQsSUFBSSxDQUFDLE9BQVEsQ0FBQztZQUNiLE1BQU0sRUFBRSxDQUFDLENBQUMsTUFBTSxDQUFDLEtBQUs7U0FDdEIsQ0FBQyxDQUFBO0lBQ0gsQ0FBQztJQUVELFVB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QUEsRUFBRSxLQUFLLE9BQUEsRUFBRSxJQUFJLE1BQUEsRUFBRSxPQUFPLFNBQUEsRUFBRSxPQUFPLFNBQUEsRUFBRSxRQUFRLFVBQUEsRUFBRSxnQkFBZ0IsRUFBRSxnQkFBZ0IsQ0FBQyxDQUFDLENBQUMsRUFBRSxnQkFBZ0IsRUFBRSxnQkFBZ0IsQ0FBQyxDQUFDLENBQUM7YUFDNUgsQ0FBQTtTQUNEO2FBQU07WUFDTixJQUFJLEdBQUc7Z0JBQ04sS0FBSyxPQUFBLEVBQUUsS0FBSyxPQUFBLEVBQUUsSUFBSSxNQUFBLEVBQUUsT0FBTyxTQUFBLEVBQUMsUUFBUSxVQUFBO2FBQ3BDLENBQUE7U0FDRDtRQUVELGtCQUFVLENBQUMsSUFBSSxDQUFDLENBQUMsSUFBSSxDQUNwQixVQUFDLEdBQVE7WUFDUixPQUFPLENBQUMsR0FBRyxDQUFDLEdBQUcsQ0FBQyxDQUFDO1FBQ2xCLENBQUMsQ0FDRCxDQUFBO0lBQ0YsQ0FBQztDQUNELENBQUMsQ0FBQyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7UGFydG5ldCwgcmVxQWRkcmVzc0xpc3QsIHJlcVBhcnRuZXJ9IGZyb20gXCIuLi9hcGkvaW5kZXhcIjtcblxuUGFnZSh7XG5cblx0ZGF0YToge1xuXHRcdGN1cnJlbnQ6ICcxJyxcblxuXHRcdHRva2VuOiAnJyxcblxuXHRcdGFkZHJlc3NMaXN0OltdLFxuXG5cdFx0cmVnaW9uOiBbJ+W5v+S4nOecgScsICflub/lt57luIInLCAn5rW354+g5Yy6J10sXG5cblx0XHRuYW1lOiAnJyxcblx0XHRwaG9uZTogJycsXG5cdFx0YWRkcmVzczogJycsXG5cdFx0aWRlbnRpdHk6ICcnLFxuXHRcdGlkX2NhcmQ6ICcnLFxuXHRcdGlkX2NhcmRfcG9zaXRpdmU6ICcnLFxuXHRcdGlkX2NhcmRfY29udHJhcnk6ICcnLFxuXHR9LFxuXG5cdG9uTG9hZCgpIHtcblx0XHQvLyDor7vlj5Z0b2tlblxuXHRcdGxldCBfdGhpcyA9IHRoaXM7XG5cdFx0d3guZ2V0U3RvcmFnZSh7XG5cdFx0XHRrZXk6ICd0b2tlbicsXG5cdFx0XHRzdWNjZXNzKHJlcykge1xuXHRcdFx0XHRjb25zb2xlLmxvZyhyZXMpO1xuXHRcdFx0XHRfdGhpcy5zZXREYXRhISh7XG5cdFx0XHRcdFx0dG9rZW46IHJlcy5kYXRhXG5cdFx0XHRcdH0pXG5cdFx0XHR9XG5cdFx0fSk7XG5cblx0XHQvL1xuXHRcdHRoaXMuZ2V0QWRkcmVzcygpXG5cdH0sXG5cblx0YmluZFJlZ2lvbkNoYW5nZShlOmFueSkge1xuXHRcdGNvbnNvbGUubG9nKCdwaWNrZXLlj5HpgIHpgInmi6nmlLnlj5jvvIzmkLrluKblgLzkuLonLCBlLmRldGFpbC52YWx1ZSk7XG5cdFx0dGhpcy5zZXREYXRhISh7XG5cdFx0XHRyZWdpb246IGUuZGV0YWlsLnZhbHVlXG5cdFx0fSlcblx0fSxcblxuXHRnZXRBZGRyZXNzKCkge1xuXHRcdHJlcUFkZHJlc3NMaXN0KCkudGhlbihcblx0XHRcdHJlcyA9PiB7XG5cdFx0XHRcdGlmIChyZXMuY29kZSA9PT0gMSkge1xuXHRcdFx0XHRcdGNvbnNvbGUubG9nKCflnLDlnYAnLHJlcyk7XG5cdFx0XHRcdFx0dGhpcy5zZXREYXRhISh7XG5cdFx0XHRcdFx0XHRhZGRyZXNzTGlzdDogcmVzLmRhdGFcblx0XHRcdFx0XHR9KVxuXHRcdFx0XHR9XG5cdFx0XHR9XG5cdFx0KVxuXHR9LFxuXG5cblx0aGFuZGxlQ2hhbmdlKHtkZXRhaWx9OiBhbnkpIHtcblx0XHR0aGlzLnNldERhdGEhKHtcblx0XHRcdGN1cnJlbnQ6IGRldGFpbC5rZXlcblx0XHR9KTtcblx0fSxcblxuXHRpbnB1dChlOiBhbnkpIHtcblx0XHRjb25zb2xlLmxvZyhlKTtcblx0XHRjb25zdCBsYWJlbCA9IGUudGFyZ2V0LmRhdGFzZXQudHlwZTtcblx0XHRjb25zdCB2YWx1ZSA9IGUuZGV0YWlsLmRldGFpbC52YWx1ZTtcblx0XHRjb25zb2xlLmxvZyh2YWx1ZSk7XG5cdFx0dGhpcy5zZXREYXRhISh7XG5cdFx0XHRbbGFiZWxdOiB2YWx1ZVxuXHRcdH0pO1xuXG5cdFx0Y29uc29sZS5sb2cobGFiZWwsIHZhbHVlKTtcblx0fSxcblxuXHRjaG9vc2VUb3AoKSB7XG5cdFx0bGV0IF90aGlzID0gdGhpcztcblx0XHR3eC5jaG9vc2VJbWFnZSh7XG5cdFx0XHRjb3VudDogMSxcblx0XHRcdHNpemVUeXBlOiBbJ29yaWdpbmFsJywgJ2NvbXByZXNzZWQnXSxcblx0XHRcdHNvdXJjZVR5cGU6IFsnYWxidW0nLCAnY2FtZXJhJ10sXG5cdFx0XHRzdWNjZXNzKHJlcykge1xuXHRcdFx0XHQvLyB0ZW1wRmlsZVBhdGjlj6/ku6XkvZzkuLppbWfmoIfnrb7nmoRzcmPlsZ7mgKfmmL7npLrlm77niYdcblx0XHRcdFx0Y29uc3QgdGVtcEZpbGVQYXRocyA9IHJlcy50ZW1wRmlsZVBhdGhzO1xuXHRcdFx0XHRfdGhpcy5zZXREYXRhISh7XG5cdFx0XHRcdFx0aWRfY2FyZF9wb3NpdGl2ZTogdGVtcEZpbGVQYXRoc1xuXHRcdFx0XHR9KTtcblx0XHRcdFx0Y29uc29sZS5sb2codGVtcEZpbGVQYXRocyk7XG5cdFx0XHR9XG5cdFx0fSlcblx0fSxcblxuXHRjaG9vc2VCb3R0b20oKSB7XG5cdFx0bGV0IF90aGlzID0gdGhpcztcblx0XHR3eC5jaG9vc2VJbWFnZSh7XG5cdFx0XHRjb3VudDogMSxcblx0XHRcdHNpemVUeXBlOiBbJ29yaWdpbmFsJywgJ2NvbXByZXNzZWQnXSxcblx0XHRcdHNvdXJjZVR5cGU6IFsnYWxidW0nLCAnY2FtZXJhJ10sXG5cdFx0XHRzdWNjZXNzKHJlcykge1xuXHRcdFx0XHQvLyB0ZW1wRmlsZVBhdGjlj6/ku6XkvZzkuLppbWfmoIfnrb7nmoRzcmPlsZ7mgKfmmL7npLrlm77niYdcblx0XHRcdFx0Y29uc3QgdGVtcEZpbGVQYXRocyA9IHJlcy50ZW1wRmlsZVBhdGhzO1xuXHRcdFx0XHRfdGhpcy5zZXREYXRhISh7XG5cdFx0XHRcdFx0aWRfY2FyZF9jb250cmFyeTogdGVtcEZpbGVQYXRoc1xuXHRcdFx0XHR9KTtcblx0XHRcdFx0Y29uc29sZS5sb2codGVtcEZpbGVQYXRocyk7XG5cdFx0XHR9XG5cdFx0fSlcblx0fSxcblxuXHRnZXRQYXJ0bmVyKCkge1xuXG5cdFx0bGV0IHt0b2tlbiwgcGhvbmUsIG5hbWUsIGFkZHJlc3MsIHJlZ2lvbiwgaWRlbnRpdHksIGlkX2NhcmQsIGlkX2NhcmRfcG9zaXRpdmUsIGlkX2NhcmRfY29udHJhcnksIGN1cnJlbnR9ID0gdGhpcy5kYXRhO1xuXG5cdFx0aWRlbnRpdHkgPSBjdXJyZW50O1xuXHRcdGFkZHJlc3MgPSByZWdpb24uam9pbignJyk7XG5cblx0XHRsZXQgZGF0YTogUGFydG5ldDtcblx0XHRpZiAoaWRlbnRpdHkgPT09ICcxJykge1xuXHRcdFx0ZGF0YSA9IHtcblx0XHRcdFx0dG9rZW4sIHBob25lLCBuYW1lLCBhZGRyZXNzLCBpZF9jYXJkLCBpZGVudGl0eSwgaWRfY2FyZF9wb3NpdGl2ZTogaWRfY2FyZF9wb3NpdGl2ZVswXSwgaWRfY2FyZF9jb250cmFyeTogaWRfY2FyZF9jb250cmFyeVswXVxuXHRcdFx0fVxuXHRcdH0gZWxzZSB7XG5cdFx0XHRkYXRhID0ge1xuXHRcdFx0XHR0b2tlbiwgcGhvbmUsIG5hbWUsIGFkZHJlc3MsaWRlbnRpdHlcblx0XHRcdH1cblx0XHR9XG5cblx0XHRyZXFQYXJ0bmVyKGRhdGEpLnRoZW4oXG5cdFx0XHQocmVzOiBhbnkpID0+IHtcblx0XHRcdFx0Y29uc29sZS5sb2cocmVzKTtcblx0XHRcdH1cblx0XHQpXG5cdH1cbn0pO1xuIl19