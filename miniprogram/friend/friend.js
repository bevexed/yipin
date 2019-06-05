"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var index_1 = require("../api/index");
var ajax_1 = require("../api/ajax");
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
        img: ''
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
        this.getImg();
    },
    getImg: function () {
        var _this_1 = this;
        index_1.reqActivityShow(2).then(function (res) {
            if (res.code === 1) {
                _this_1.setData({
                    img: res.data
                });
            }
        });
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
                console.log(res);
                var tempFilePaths = res.tempFilePaths;
                _this.setData({
                    id_card_positive: tempFilePaths
                });
                wx.uploadFile({
                    url: ajax_1.base + '/api/upload_img',
                    filePath: tempFilePaths[0],
                    name: 'image',
                    success: function (res) {
                        var data = JSON.parse(res.data);
                        console.log(data);
                        if (data.code === 1) {
                            _this.setData({
                                id_card_positive: data.data
                            });
                        }
                    }
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
                wx.uploadFile({
                    url: ajax_1.base + '/api/upload_img',
                    filePath: tempFilePaths[0],
                    name: 'image',
                    success: function (res) {
                        var data = JSON.parse(res.data);
                        console.log(data);
                        if (data.code === 1) {
                            _this.setData({
                                id_card_contrary: data.data
                            });
                        }
                    }
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
                token: token, phone: phone, name: name, address: address, id_card: id_card, identity: identity, id_card_positive: id_card_positive, id_card_contrary: id_card_contrary
            };
            if (!name || !token || !id_card_positive || !id_card_contrary || !id_card || !phone || !address || !identity) {
                wx.showToast({
                    title: '请检查表单填写是否完整',
                    mask: true,
                    duration: 2000,
                    icon: "none"
                });
                return;
            }
        }
        else {
            data = {
                token: token, phone: phone, name: name, address: address, identity: identity
            };
            if (!name || !token || !phone || !address || !identity) {
                wx.showToast({
                    title: '请检查表单填写是否完整',
                    mask: true,
                    duration: 2000,
                    icon: "none"
                });
                return;
            }
        }
        index_1.reqPartner(data).then(function (res) {
            console.log(res);
            if (res.code === 1) {
                wx.showToast({
                    title: '提交完成',
                    mask: true,
                    duration: 3000,
                    success: function () {
                        setTimeout(function () {
                            wx.navigateTo({
                                url: '../collect/collect'
                            });
                        }, 3000);
                    }
                });
            }
            else {
                wx.showToast({
                    icon: 'none',
                    mask: true,
                    duration: 3000,
                    title: res.message
                });
            }
        });
    }
});
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiZnJpZW5kLmpzIiwic291cmNlUm9vdCI6IiIsInNvdXJjZXMiOlsiZnJpZW5kLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7O0FBQUEsc0NBQWtGO0FBQ2xGLG9DQUFpQztBQUVqQyxJQUFJLENBQUM7SUFFSixJQUFJLEVBQUU7UUFDTCxPQUFPLEVBQUUsR0FBRztRQUVaLEtBQUssRUFBRSxFQUFFO1FBRVQsV0FBVyxFQUFDLEVBQUU7UUFFZCxNQUFNLEVBQUUsQ0FBQyxLQUFLLEVBQUUsS0FBSyxFQUFFLEtBQUssQ0FBQztRQUU3QixJQUFJLEVBQUUsRUFBRTtRQUNSLEtBQUssRUFBRSxFQUFFO1FBQ1QsT0FBTyxFQUFFLEVBQUU7UUFDWCxRQUFRLEVBQUUsRUFBRTtRQUNaLE9BQU8sRUFBRSxFQUFFO1FBQ1gsZ0JBQWdCLEVBQUUsRUFBRTtRQUNwQixnQkFBZ0IsRUFBRSxFQUFFO1FBRXBCLEdBQUcsRUFBQyxFQUFFO0tBQ047SUFFRCxNQUFNLEVBQU47UUFFQyxJQUFJLEtBQUssR0FBRyxJQUFJLENBQUM7UUFDakIsRUFBRSxDQUFDLFVBQVUsQ0FBQztZQUNiLEdBQUcsRUFBRSxPQUFPO1lBQ1osT0FBTyxFQUFQLFVBQVEsR0FBRztnQkFDVixPQUFPLENBQUMsR0FBRyxDQUFDLEdBQUcsQ0FBQyxDQUFDO2dCQUNqQixLQUFLLENBQUMsT0FBUSxDQUFDO29CQUNkLEtBQUssRUFBRSxHQUFHLENBQUMsSUFBSTtpQkFDZixDQUFDLENBQUE7WUFDSCxDQUFDO1NBQ0QsQ0FBQyxDQUFDO1FBR0gsSUFBSSxDQUFDLFVBQVUsRUFBRSxDQUFBO1FBQ2pCLElBQUksQ0FBQyxNQUFNLEVBQUUsQ0FBQTtJQUNkLENBQUM7SUFFRCxNQUFNLEVBQU47UUFBQSxtQkFVQztRQVRBLHVCQUFlLENBQUMsQ0FBQyxDQUFDLENBQUMsSUFBSSxDQUN0QixVQUFDLEdBQVE7WUFDUixJQUFJLEdBQUcsQ0FBQyxJQUFJLEtBQUssQ0FBQyxFQUFFO2dCQUNuQixPQUFJLENBQUMsT0FB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RUFBRSxJQUFJO29CQUNWLFFBQVEsRUFBRSxJQUFJO29CQUNkLElBQUksRUFBRSxNQUFNO2lCQUNaLENBQUMsQ0FBQztnQkFDSCxPQUFPO2FBQ1A7U0FDRDtRQUVELGtCQUFVLENBQUMsSUFBSSxDQUFDLENBQUMsSUFBSSxDQUNwQixVQUFDLEdBQVE7WUFDUixPQUFPLENBQUMsR0FBRyxDQUFDLEdBQUcsQ0FBQyxDQUFDO1lBQ2pCLElBQUksR0FBRyxDQUFDLElBQUksS0FBSyxDQUFDLEVBQUU7Z0JBQ25CLEVBQUUsQ0FBQyxTQUFTLENBQUM7b0JBQ1osS0FBSyxFQUFFLE1BQU07b0JBQ2IsSUFBSSxFQUFFLElBQUk7b0JBQ1YsUUFBUSxFQUFFLElBQUk7b0JBQ2QsT0FBTzt3QkFDTixVQUFVLENBQUM7NEJBQ1YsRUFBRSxDQUFDLFVBQVUsQ0FBQztnQ0FDYixHQUFHLEVBQUMsb0JBQW9COzZCQUN4QixDQUFDLENBQUE7d0JBQ0gsQ0FBQyxFQUFFLElBQUksQ0FBQyxDQUFBO29CQUNULENBQUM7aUJBQ0QsQ0FBQyxDQUFBO2FBQ0Y7aUJBQU07Z0JBQ04sRUFBRSxDQUFDLFNBQVMsQ0FBQztvQkFDWixJQUFJLEVBQUMsTUFBTTtvQkFDWCxJQUFJLEVBQUUsSUFBSTtvQkFDVixRQUFRLEVBQUUsSUFBSTtvQkFDZCxLQUFLLEVBQUUsR0FBRyxDQUFDLE9BQU87aUJBQ2xCLENBQUMsQ0FBQTthQUNGO1FBQ0YsQ0FBQyxDQUNELENBQUE7SUFDRixDQUFDO0NBQ0QsQ0FBQyxDQUFDIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHtQYXJ0bmV0LCByZXFBY3Rpdml0eVNob3csIHJlcUFkZHJlc3NMaXN0LCByZXFQYXJ0bmVyfSBmcm9tIFwiLi4vYXBpL2luZGV4XCI7XG5pbXBvcnQge2Jhc2V9IGZyb20gXCIuLi9hcGkvYWpheFwiO1xuXG5QYWdlKHtcblxuXHRkYXRhOiB7XG5cdFx0Y3VycmVudDogJzEnLFxuXG5cdFx0dG9rZW46ICcnLFxuXG5cdFx0YWRkcmVzc0xpc3Q6W10sXG5cblx0XHRyZWdpb246IFsn5bm/5Lic55yBJywgJ+W5v+W3nuW4gicsICfmtbfnj6DljLonXSxcblxuXHRcdG5hbWU6ICcnLFxuXHRcdHBob25lOiAnJyxcblx0XHRhZGRyZXNzOiAnJyxcblx0XHRpZGVudGl0eTogJycsXG5cdFx0aWRfY2FyZDogJycsXG5cdFx0aWRfY2FyZF9wb3NpdGl2ZTogJycsXG5cdFx0aWRfY2FyZF9jb250cmFyeTogJycsXG5cblx0XHRpbWc6Jydcblx0fSxcblxuXHRvbkxvYWQoKSB7XG5cdFx0Ly8g6K+75Y+WdG9rZW5cblx0XHRsZXQgX3RoaXMgPSB0aGlzO1xuXHRcdHd4LmdldFN0b3JhZ2Uoe1xuXHRcdFx0a2V5OiAndG9rZW4nLFxuXHRcdFx0c3VjY2VzcyhyZXMpIHtcblx0XHRcdFx0Y29uc29sZS5sb2cocmVzKTtcblx0XHRcdFx0X3RoaXMuc2V0RGF0YSEoe1xuXHRcdFx0XHRcdHRva2VuOiByZXMuZGF0YVxuXHRcdFx0XHR9KVxuXHRcdFx0fVxuXHRcdH0pO1xuXG5cdFx0Ly9cblx0XHR0aGlzLmdldEFkZHJlc3MoKVxuXHRcdHRoaXMuZ2V0SW1nKClcblx0fSxcblxuXHRnZXRJbWcoKSB7XG5cdFx0cmVxQWN0aXZpdHlTaG93KDIpLnRoZW4oXG5cdFx0XHQocmVzOiBhbnkpID0+IHtcblx0XHRcdFx0aWYgKHJlcy5jb2RlID09PSAxKSB7XG5cdFx0XHRcdFx0dGhpcy5zZXREYXRhISh7XG5cdFx0XHRcdFx0XHRpbWc6IHJlcy5kYXRhXG5cdFx0XHRcdFx0fSlcblx0XHRcdFx0fVxuXHRcdFx0fVxuXHRcdClcblx0fSxcblxuXHRiaW5kUmVnaW9uQ2hhbmdlKGU6YW55KSB7XG5cdFx0Y29uc29sZS5sb2coJ3BpY2tlcuWPkemAgemAieaLqeaUueWPmO+8jOaQuuW4puWAvOS4uicsIGUuZGV0YWlsLnZhbHVlKTtcblx0XHR0aGlzLnNldERhdGEhKHtcblx0XHRcdHJlZ2lvbjogZS5kZXRhaWwudmFsdWVcblx0XHR9KVxuXHR9LFxuXG5cdGdldEFkZHJlc3MoKSB7XG5cdFx0cmVxQWRkcmVzc0xpc3QoKS50aGVuKFxuXHRcdFx0cmVzID0+IHtcblx0XHRcdFx0aWYgKHJlcy5jb2RlID09PSAxKSB7XG5cdFx0XHRcdFx0Y29uc29sZS5sb2coJ+WcsOWdgCcscmVzKTtcblx0XHRcdFx0XHR0aGlzLnNldERhdGEhKHtcblx0XHRcdFx0XHRcdGFkZHJlc3NMaXN0OiByZXMuZGF0YVxuXHRcdFx0XHRcdH0pXG5cdFx0XHRcdH1cblx0XHRcdH1cblx0XHQpXG5cdH0sXG5cblxuXHRoYW5kbGVDaGFuZ2Uoe2RldGFpbH06IGFueSkge1xuXHRcdHRoaXMuc2V0RGF0YSEoe1xuXHRcdFx0Y3VycmVudDogZGV0YWlsLmtleVxuXHRcdH0pO1xuXHR9LFxuXG5cdGlucHV0KGU6IGFueSkge1xuXHRcdGNvbnNvbGUubG9nKGUpO1xuXHRcdGNvbnN0IGxhYmVsID0gZS50YXJnZXQuZGF0YXNldC50eXBlO1xuXHRcdGNvbnN0IHZhbHVlID0gZS5kZXRhaWwuZGV0YWlsLnZhbHVlO1xuXHRcdGNvbnNvbGUubG9nKHZhbHVlKTtcblx0XHR0aGlzLnNldERhdGEhKHtcblx0XHRcdFtsYWJlbF06IHZhbHVlXG5cdFx0fSk7XG5cblx0XHRjb25zb2xlLmxvZyhsYWJlbCwgdmFsdWUpO1xuXHR9LFxuXG5cdGNob29zZVRvcCgpIHtcblx0XHRsZXQgX3RoaXMgPSB0aGlzO1xuXHRcdHd4LmNob29zZUltYWdlKHtcblx0XHRcdGNvdW50OiAxLFxuXHRcdFx0c2l6ZVR5cGU6IFsnb3JpZ2luYWwnLCAnY29tcHJlc3NlZCddLFxuXHRcdFx0c291cmNlVHlwZTogWydhbGJ1bScsICdjYW1lcmEnXSxcblx0XHRcdHN1Y2Nlc3MocmVzKSB7XG5cdFx0XHRcdC8vIHRlbXBGaWxlUGF0aOWPr+S7peS9nOS4umltZ+agh+etvueahHNyY+WxnuaAp+aYvuekuuWbvueJh1xuXHRcdFx0XHRjb25zb2xlLmxvZyhyZXMpO1xuXHRcdFx0XHRjb25zdCB0ZW1wRmlsZVBhdGhzID0gcmVzLnRlbXBGaWxlUGF0aHM7XG5cdFx0XHRcdF90aGlzLnNldERhdGEhKHtcblx0XHRcdFx0XHRpZF9jYXJkX3Bvc2l0aXZlOiB0ZW1wRmlsZVBhdGhzXG5cdFx0XHRcdH0pO1xuXG5cdFx0XHRcdHd4LnVwbG9hZEZpbGUoe1xuXHRcdFx0XHRcdHVybDogYmFzZSsgJy9hcGkvdXBsb2FkX2ltZycsIC8v5LuF5Li656S65L6L77yM6Z2e55yf5a6e55qE5o6l5Y+j5Zyw5Z2AXG5cdFx0XHRcdFx0ZmlsZVBhdGg6IHRlbXBGaWxlUGF0aHNbMF0sXG5cdFx0XHRcdFx0bmFtZTogJ2ltYWdlJyxcblx0XHRcdFx0XHQvLyBmb3JtRGF0YToge1xuXHRcdFx0XHRcdC8vIFx0J3VzZXInOiAndGVzdCdcblx0XHRcdFx0XHQvLyB9LFxuXHRcdFx0XHRcdHN1Y2Nlc3MocmVzKSB7XG5cdFx0XHRcdFx0XHRjb25zdCBkYXRhID0gSlNPTi5wYXJzZShyZXMuZGF0YSk7XG5cdFx0XHRcdFx0XHRjb25zb2xlLmxvZyhkYXRhKTtcblx0XHRcdFx0XHRcdGlmIChkYXRhLmNvZGUgPT09IDEpIHtcblx0XHRcdFx0XHRcdFx0X3RoaXMuc2V0RGF0YSEoe1xuXHRcdFx0XHRcdFx0XHRcdGlkX2NhcmRfcG9zaXRpdmU6IGRhdGEuZGF0YVxuXHRcdFx0XHRcdFx0XHR9KTtcblx0XHRcdFx0XHRcdH1cblx0XHRcdFx0XHR9XG5cdFx0XHRcdH0pXG5cdFx0XHRcdGNvbnNvbGUubG9nKHRlbXBGaWxlUGF0aHMpO1xuXHRcdFx0fVxuXHRcdH0pXG5cdH0sXG5cblxuXHRjaG9vc2VCb3R0b20oKSB7XG5cdFx0bGV0IF90aGlzID0gdGhpcztcblx0XHR3eC5jaG9vc2VJbWFnZSh7XG5cdFx0XHRjb3VudDogMSxcblx0XHRcdHNpemVUeXBlOiBbJ29yaWdpbmFsJywgJ2NvbXByZXNzZWQnXSxcblx0XHRcdHNvdXJjZVR5cGU6IFsnYWxidW0nLCAnY2FtZXJhJ10sXG5cdFx0XHRzdWNjZXNzKHJlcykge1xuXHRcdFx0XHQvLyB0ZW1wRmlsZVBhdGjlj6/ku6XkvZzkuLppbWfmoIfnrb7nmoRzcmPlsZ7mgKfmmL7npLrlm77niYdcblx0XHRcdFx0Y29uc3QgdGVtcEZpbGVQYXRocyA9IHJlcy50ZW1wRmlsZVBhdGhzO1xuXHRcdFx0XHRfdGhpcy5zZXREYXRhISh7XG5cdFx0XHRcdFx0aWRfY2FyZF9jb250cmFyeTogdGVtcEZpbGVQYXRoc1xuXHRcdFx0XHR9KTtcblxuXHRcdFx0XHR3eC51cGxvYWRGaWxlKHtcblx0XHRcdFx0XHR1cmw6IGJhc2UrICcvYXBpL3VwbG9hZF9pbWcnLCAvL+S7heS4uuekuuS+i++8jOmdnuecn+WunueahOaOpeWPo+WcsOWdgFxuXHRcdFx0XHRcdGZpbGVQYXRoOiB0ZW1wRmlsZVBhdGhzWzBdLFxuXHRcdFx0XHRcdG5hbWU6ICdpbWFnZScsXG5cdFx0XHRcdFx0Ly8gZm9ybURhdGE6IHtcblx0XHRcdFx0XHQvLyBcdCd1c2VyJzogJ3Rlc3QnXG5cdFx0XHRcdFx0Ly8gfSxcblx0XHRcdFx0XHRzdWNjZXNzKHJlcykge1xuXHRcdFx0XHRcdFx0Y29uc3QgZGF0YSA9IEpTT04ucGFyc2UocmVzLmRhdGEpO1xuXHRcdFx0XHRcdFx0Y29uc29sZS5sb2coZGF0YSk7XG5cdFx0XHRcdFx0XHRpZiAoZGF0YS5jb2RlID09PSAxKSB7XG5cdFx0XHRcdFx0XHRcdF90aGlzLnNldERhdGEhKHtcblx0XHRcdFx0XHRcdFx0XHRpZF9jYXJkX2NvbnRyYXJ5OiBkYXRhLmRhdGFcblx0XHRcdFx0XHRcdFx0fSk7XG5cdFx0XHRcdFx0XHR9XG5cdFx0XHRcdFx0fVxuXHRcdFx0XHR9KTtcblx0XHRcdFx0Y29uc29sZS5sb2codGVtcEZpbGVQYXRocyk7XG5cdFx0XHR9XG5cdFx0fSlcblx0fSxcblxuXHRnZXRQYXJ0bmVyKCkge1xuXG5cdFx0bGV0IHt0b2tlbiwgcGhvbmUsIG5hbWUsIGFkZHJlc3MsIHJlZ2lvbiwgaWRlbnRpdHksIGlkX2NhcmQsIGlkX2NhcmRfcG9zaXRpdmUsIGlkX2NhcmRfY29udHJhcnksIGN1cnJlbnR9ID0gdGhpcy5kYXRhO1xuXG5cdFx0aWRlbnRpdHkgPSBjdXJyZW50O1xuXHRcdGFkZHJlc3MgPSByZWdpb24uam9pbignJyk7XG5cblx0XHRsZXQgZGF0YTogUGFydG5ldDtcblx0XHRpZiAoaWRlbnRpdHkgPT09ICcxJykge1xuXHRcdFx0ZGF0YSA9IHtcblx0XHRcdFx0dG9rZW4sIHBob25lLCBuYW1lLCBhZGRyZXNzLCBpZF9jYXJkLCBpZGVudGl0eSwgaWRfY2FyZF9wb3NpdGl2ZSwgaWRfY2FyZF9jb250cmFyeVxuXHRcdFx0fTtcblx0XHRcdGlmICghbmFtZSB8fCAhdG9rZW4gfHwgIWlkX2NhcmRfcG9zaXRpdmUgfHwgIWlkX2NhcmRfY29udHJhcnkgfHwgIWlkX2NhcmQgfHwgIXBob25lIHx8ICFhZGRyZXNzIHx8ICFpZGVudGl0eSkge1xuXHRcdFx0XHR3eC5zaG93VG9hc3Qoe1xuXHRcdFx0XHRcdHRpdGxlOiAn6K+35qOA5p+l6KGo5Y2V5aGr5YaZ5piv5ZCm5a6M5pW0Jyxcblx0XHRcdFx0XHRtYXNrOiB0cnVlLFxuXHRcdFx0XHRcdGR1cmF0aW9uOiAyMDAwLFxuXHRcdFx0XHRcdGljb246IFwibm9uZVwiXG5cdFx0XHRcdH0pO1xuXHRcdFx0XHRyZXR1cm47XG5cdFx0XHR9XG5cdFx0fSBlbHNlIHtcblx0XHRcdGRhdGEgPSB7XG5cdFx0XHRcdHRva2VuLCBwaG9uZSwgbmFtZSwgYWRkcmVzcyxpZGVudGl0eVxuXHRcdFx0fTtcblx0XHRcdGlmICghbmFtZSB8fCAhdG9rZW4gfHwgIXBob25lIHx8ICFhZGRyZXNzIHx8ICFpZGVudGl0eSkge1xuXHRcdFx0XHR3eC5zaG93VG9hc3Qoe1xuXHRcdFx0XHRcdHRpdGxlOiAn6K+35qOA5p+l6KGo5Y2V5aGr5YaZ5piv5ZCm5a6M5pW0Jyxcblx0XHRcdFx0XHRtYXNrOiB0cnVlLFxuXHRcdFx0XHRcdGR1cmF0aW9uOiAyMDAwLFxuXHRcdFx0XHRcdGljb246IFwibm9uZVwiXG5cdFx0XHRcdH0pO1xuXHRcdFx0XHRyZXR1cm47XG5cdFx0XHR9XG5cdFx0fVxuXG5cdFx0cmVxUGFydG5lcihkYXRhKS50aGVuKFxuXHRcdFx0KHJlczogYW55KSA9PiB7XG5cdFx0XHRcdGNvbnNvbGUubG9nKHJlcyk7XG5cdFx0XHRcdGlmIChyZXMuY29kZSA9PT0gMSkge1xuXHRcdFx0XHRcdHd4LnNob3dUb2FzdCh7XG5cdFx0XHRcdFx0XHR0aXRsZTogJ+aPkOS6pOWujOaIkCcsXG5cdFx0XHRcdFx0XHRtYXNrOiB0cnVlLFxuXHRcdFx0XHRcdFx0ZHVyYXRpb246IDMwMDAsXG5cdFx0XHRcdFx0XHRzdWNjZXNzKCkge1xuXHRcdFx0XHRcdFx0XHRzZXRUaW1lb3V0KCgpID0+IHtcblx0XHRcdFx0XHRcdFx0XHR3eC5uYXZpZ2F0ZVRvKHtcblx0XHRcdFx0XHRcdFx0XHRcdHVybDonLi4vY29sbGVjdC9jb2xsZWN0J1xuXHRcdFx0XHRcdFx0XHRcdH0pXG5cdFx0XHRcdFx0XHRcdH0sIDMwMDApXG5cdFx0XHRcdFx0XHR9XG5cdFx0XHRcdFx0fSlcblx0XHRcdFx0fSBlbHNlIHtcblx0XHRcdFx0XHR3eC5zaG93VG9hc3Qoe1xuXHRcdFx0XHRcdFx0aWNvbjonbm9uZScsXG5cdFx0XHRcdFx0XHRtYXNrOiB0cnVlLFxuXHRcdFx0XHRcdFx0ZHVyYXRpb246IDMwMDAsXG5cdFx0XHRcdFx0XHR0aXRsZTogcmVzLm1lc3NhZ2Vcblx0XHRcdFx0XHR9KVxuXHRcdFx0XHR9XG5cdFx0XHR9XG5cdFx0KVxuXHR9XG59KTtcbiJdfQ==