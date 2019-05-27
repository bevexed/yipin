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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiZnJpZW5kLmpzIiwic291cmNlUm9vdCI6IiIsInNvdXJjZXMiOlsiZnJpZW5kLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7O0FBQUEsc0NBQWlFO0FBRWpFLElBQUksQ0FBQztJQUVKLElBQUksRUFBRTtRQUNMLE9BQU8sRUFBRSxHQUFHO1FBRVosS0FBSyxFQUFFLEVBQUU7UUFFVCxXQUFXLEVBQUMsRUFBRTtRQUVkLE1BQU0sRUFBRSxDQUFDLEtBQUssRUFBRSxLQUFLLEVBQUUsS0FBSyxDQUFDO1FBRTdCLElBQUksRUFBRSxFQUFFO1FBQ1IsS0FBSyxFQUFFLEVBQUU7UUFDVCxPQUFPLEVBQUUsRUFBRTtRQUNYLFFBQVEsRUFBRSxFQUFFO1FBQ1osT0FBTyxFQUFFLEVBQUU7UUFDWCxnQkFBZ0IsRUFBRSxFQUFFO1FBQ3BCLGdCQUFnQixFQUFFLEVBQUU7S0FDcEI7SUFFRCxNQUFNLEVBQU47UUFFQyxJQUFJLEtBQUssR0FBRyxJQUFJLENBQUM7UUFDakIsRUFBRSxDQUFDLFVBQVUsQ0FBQztZQUNiLEdBQUcsRUFBRSxPQUFPO1lBQ1osT0FBTyxFQUFQLFVBQVEsR0FBRztnQkFDVixPQUFPLENBQUMsR0FBRyxDQUFDLEdBQUcsQ0FBQyxDQUFDO2dCQUNqQixLQUFLLENBQUMsT0FBUSxDQUFDO29CQUNkLEtBQUssRUFBRSxHQUFHLENBQUMsSUFBSTtpQkFDZixDQUFDLENBQUE7WUFDSCxDQUFDO1NBQ0QsQ0FBQyxDQUFDO1FBR0gsSUFBSSxDQUFDLFVBQVUsRUFBRSxDQUFBO0lBQ2xCLENBQUM7SUFFRCxnQkFBZ0IsRUFBaEIsVUFBaUIsQ0FBSztRQUNyQixPQUFPLENBQUMsR0FBRyxDQUFDLG1CQUFtQixFQUFFLENBQUMsQ0FBQyxNQUFNLENBQUMsS0FBSyxDQUFDLENBQUE7UUFDaEQsSUFBSSxDQUFDLE9BQVEsQ0FBQztZQUNiLE1BQU0sRUFBRSxDQUFDLENBQUMsTUFBTSxDQUFDLEtBQUs7U0FDdEIsQ0FBQyxDQUFBO0lBQ0gsQ0FBQztJQUVELFVB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QUEsRUFBRSxLQUFLLE9BQUEsRUFBRSxJQUFJLE1BQUEsRUFBRSxPQUFPLFNBQUEsRUFBRSxPQUFPLFNBQUEsRUFBRSxRQUFRLFVBQUEsRUFBRSxnQkFBZ0IsRUFBRSxnQkFBZ0IsQ0FBQyxDQUFDLENBQUMsRUFBRSxnQkFBZ0IsRUFBRSxnQkFBZ0IsQ0FBQyxDQUFDLENBQUM7YUFDNUgsQ0FBQTtTQUNEO2FBQU07WUFDTixJQUFJLEdBQUc7Z0JBQ04sS0FBSyxPQUFBLEVBQUUsS0FBSyxPQUFBLEVBQUUsSUFBSSxNQUFBLEVBQUUsT0FBTyxTQUFBLEVBQUMsUUFBUSxVQUFBO2FBQ3BDLENBQUE7U0FDRDtRQUVELGtCQUFVLENBQUMsSUFBSSxDQUFDLENBQUMsSUFBSSxDQUNwQixVQUFDLEdBQVE7WUFDUixPQUFPLENBQUMsR0FBRyxDQUFDLEdBQUcsQ0FBQyxDQUFDO1FBQ2xCLENBQUMsQ0FDRCxDQUFBO0lBQ0YsQ0FBQztDQUNELENBQUMsQ0FBQyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7UGFydG5ldCwgcmVxQWRkcmVzc0xpc3QsIHJlcVBhcnRuZXJ9IGZyb20gXCIuLi9hcGkvaW5kZXhcIjtcblxuUGFnZSh7XG5cblx0ZGF0YToge1xuXHRcdGN1cnJlbnQ6ICcxJyxcblxuXHRcdHRva2VuOiAnJyxcblxuXHRcdGFkZHJlc3NMaXN0OltdLFxuXG5cdFx0cmVnaW9uOiBbJ+W5v+S4nOecgScsICflub/lt57luIInLCAn5rW354+g5Yy6J10sXG5cblx0XHRuYW1lOiAnJyxcblx0XHRwaG9uZTogJycsXG5cdFx0YWRkcmVzczogJycsXG5cdFx0aWRlbnRpdHk6ICcnLFxuXHRcdGlkX2NhcmQ6ICcnLFxuXHRcdGlkX2NhcmRfcG9zaXRpdmU6ICcnLFxuXHRcdGlkX2NhcmRfY29udHJhcnk6ICcnLFxuXHR9LFxuXG5cdG9uTG9hZCgpIHtcblx0XHQvLyDor7vlj5Z0b2tlblxuXHRcdGxldCBfdGhpcyA9IHRoaXM7XG5cdFx0d3guZ2V0U3RvcmFnZSh7XG5cdFx0XHRrZXk6ICd0b2tlbicsXG5cdFx0XHRzdWNjZXNzKHJlcykge1xuXHRcdFx0XHRjb25zb2xlLmxvZyhyZXMpO1xuXHRcdFx0XHRfdGhpcy5zZXREYXRhISh7XG5cdFx0XHRcdFx0dG9rZW46IHJlcy5kYXRhXG5cdFx0XHRcdH0pXG5cdFx0XHR9XG5cdFx0fSk7XG5cblx0XHQvL1xuXHRcdHRoaXMuZ2V0QWRkcmVzcygpXG5cdH0sXG5cblx0YmluZFJlZ2lvbkNoYW5nZShlOmFueSkge1xuXHRcdGNvbnNvbGUubG9nKCdwaWNrZXLlj5HpgIHpgInmi6nmlLnlj5jvvIzmkLrluKblgLzkuLonLCBlLmRldGFpbC52YWx1ZSlcblx0XHR0aGlzLnNldERhdGEhKHtcblx0XHRcdHJlZ2lvbjogZS5kZXRhaWwudmFsdWVcblx0XHR9KVxuXHR9LFxuXG5cdGdldEFkZHJlc3MoKSB7XG5cdFx0cmVxQWRkcmVzc0xpc3QoKS50aGVuKFxuXHRcdFx0cmVzID0+IHtcblx0XHRcdFx0aWYgKHJlcy5jb2RlID09PSAxKSB7XG5cdFx0XHRcdFx0Y29uc29sZS5sb2coJ+WcsOWdgCcscmVzKTtcblx0XHRcdFx0XHR0aGlzLnNldERhdGEhKHtcblx0XHRcdFx0XHRcdGFkZHJlc3NMaXN0OiByZXMuZGF0YVxuXHRcdFx0XHRcdH0pXG5cdFx0XHRcdH1cblx0XHRcdH1cblx0XHQpXG5cdH0sXG5cblxuXHRoYW5kbGVDaGFuZ2Uoe2RldGFpbH06IGFueSkge1xuXHRcdHRoaXMuc2V0RGF0YSEoe1xuXHRcdFx0Y3VycmVudDogZGV0YWlsLmtleVxuXHRcdH0pO1xuXHR9LFxuXG5cdGlucHV0KGU6IGFueSkge1xuXHRcdGNvbnNvbGUubG9nKGUpO1xuXHRcdGNvbnN0IGxhYmVsID0gZS50YXJnZXQuZGF0YXNldC50eXBlO1xuXHRcdGNvbnN0IHZhbHVlID0gZS5kZXRhaWwuZGV0YWlsLnZhbHVlO1xuXHRcdGNvbnNvbGUubG9nKHZhbHVlKTtcblx0XHR0aGlzLnNldERhdGEhKHtcblx0XHRcdFtsYWJlbF06IHZhbHVlXG5cdFx0fSlcblxuXHRcdGNvbnNvbGUubG9nKGxhYmVsLCB2YWx1ZSk7XG5cdH0sXG5cblx0Y2hvb3NlVG9wKCkge1xuXHRcdGxldCBfdGhpcyA9IHRoaXM7XG5cdFx0d3guY2hvb3NlSW1hZ2Uoe1xuXHRcdFx0Y291bnQ6IDEsXG5cdFx0XHRzaXplVHlwZTogWydvcmlnaW5hbCcsICdjb21wcmVzc2VkJ10sXG5cdFx0XHRzb3VyY2VUeXBlOiBbJ2FsYnVtJywgJ2NhbWVyYSddLFxuXHRcdFx0c3VjY2VzcyhyZXMpIHtcblx0XHRcdFx0Ly8gdGVtcEZpbGVQYXRo5Y+v5Lul5L2c5Li6aW1n5qCH562+55qEc3Jj5bGe5oCn5pi+56S65Zu+54mHXG5cdFx0XHRcdGNvbnN0IHRlbXBGaWxlUGF0aHMgPSByZXMudGVtcEZpbGVQYXRocztcblx0XHRcdFx0X3RoaXMuc2V0RGF0YSEoe1xuXHRcdFx0XHRcdGlkX2NhcmRfcG9zaXRpdmU6IHRlbXBGaWxlUGF0aHNcblx0XHRcdFx0fSk7XG5cdFx0XHRcdGNvbnNvbGUubG9nKHRlbXBGaWxlUGF0aHMpO1xuXHRcdFx0fVxuXHRcdH0pXG5cdH0sXG5cblx0Y2hvb3NlQm90dG9tKCkge1xuXHRcdGxldCBfdGhpcyA9IHRoaXM7XG5cdFx0d3guY2hvb3NlSW1hZ2Uoe1xuXHRcdFx0Y291bnQ6IDEsXG5cdFx0XHRzaXplVHlwZTogWydvcmlnaW5hbCcsICdjb21wcmVzc2VkJ10sXG5cdFx0XHRzb3VyY2VUeXBlOiBbJ2FsYnVtJywgJ2NhbWVyYSddLFxuXHRcdFx0c3VjY2VzcyhyZXMpIHtcblx0XHRcdFx0Ly8gdGVtcEZpbGVQYXRo5Y+v5Lul5L2c5Li6aW1n5qCH562+55qEc3Jj5bGe5oCn5pi+56S65Zu+54mHXG5cdFx0XHRcdGNvbnN0IHRlbXBGaWxlUGF0aHMgPSByZXMudGVtcEZpbGVQYXRocztcblx0XHRcdFx0X3RoaXMuc2V0RGF0YSEoe1xuXHRcdFx0XHRcdGlkX2NhcmRfY29udHJhcnk6IHRlbXBGaWxlUGF0aHNcblx0XHRcdFx0fSk7XG5cdFx0XHRcdGNvbnNvbGUubG9nKHRlbXBGaWxlUGF0aHMpO1xuXHRcdFx0fVxuXHRcdH0pXG5cdH0sXG5cblx0Z2V0UGFydG5lcigpIHtcblxuXHRcdGxldCB7dG9rZW4sIHBob25lLCBuYW1lLCBhZGRyZXNzLCByZWdpb24sIGlkZW50aXR5LCBpZF9jYXJkLCBpZF9jYXJkX3Bvc2l0aXZlLCBpZF9jYXJkX2NvbnRyYXJ5LCBjdXJyZW50fSA9IHRoaXMuZGF0YTtcblxuXHRcdGlkZW50aXR5ID0gY3VycmVudDtcblx0XHRhZGRyZXNzID0gcmVnaW9uLmpvaW4oJycpO1xuXG5cdFx0bGV0IGRhdGE6IFBhcnRuZXQ7XG5cdFx0aWYgKGlkZW50aXR5ID09PSAnMScpIHtcblx0XHRcdGRhdGEgPSB7XG5cdFx0XHRcdHRva2VuLCBwaG9uZSwgbmFtZSwgYWRkcmVzcywgaWRfY2FyZCwgaWRlbnRpdHksIGlkX2NhcmRfcG9zaXRpdmU6IGlkX2NhcmRfcG9zaXRpdmVbMF0sIGlkX2NhcmRfY29udHJhcnk6IGlkX2NhcmRfY29udHJhcnlbMF1cblx0XHRcdH1cblx0XHR9IGVsc2Uge1xuXHRcdFx0ZGF0YSA9IHtcblx0XHRcdFx0dG9rZW4sIHBob25lLCBuYW1lLCBhZGRyZXNzLGlkZW50aXR5XG5cdFx0XHR9XG5cdFx0fVxuXG5cdFx0cmVxUGFydG5lcihkYXRhKS50aGVuKFxuXHRcdFx0KHJlczogYW55KSA9PiB7XG5cdFx0XHRcdGNvbnNvbGUubG9nKHJlcyk7XG5cdFx0XHR9XG5cdFx0KVxuXHR9XG59KTtcbiJdfQ==