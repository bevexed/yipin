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
        });
    }
});
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiZnJpZW5kLmpzIiwic291cmNlUm9vdCI6IiIsInNvdXJjZXMiOlsiZnJpZW5kLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7O0FBQUEsc0NBQWlFO0FBQ2pFLG9DQUFpQztBQUVqQyxJQUFJLENBQUM7SUFFSixJQUFJLEVBQUU7UUFDTCxPQUFPLEVBQUUsR0FBRztRQUVaLEtBQUssRUFBRSxFQUFFO1FBRVQsV0FBVyxFQUFDLEVBQUU7UUFFZCxNQUFNLEVBQUUsQ0FBQyxLQUFLLEVBQUUsS0FBSyxFQUFFLEtBQUssQ0FBQztRQUU3QixJQUFJLEVBQUUsRUFBRTtRQUNSLEtBQUssRUFBRSxFQUFFO1FBQ1QsT0FBTyxFQUFFLEVBQUU7UUFDWCxRQUFRLEVBQUUsRUFBRTtRQUNaLE9BQU8sRUFBRSxFQUFFO1FBQ1gsZ0JBQWdCLEVBQUUsRUFBRTtRQUNwQixnQkFBZ0IsRUFBRSxFQUFFO0tBQ3BCO0lBRUQsTUFBTSxFQUFOO1FBRUMsSUFBSSxLQUFLLEdBQUcsSUFBSSxDQUFDO1FBQ2pCLEVBQUUsQ0FBQyxVQUFVLENBQUM7WUFDYixHQUFHLEVBQUUsT0FBTztZQUNaLE9BQU8sRUFBUCxVQUFRLEdBQUc7Z0JBQ1YsT0FBTyxDQUFDLEdBQUcsQ0FBQyxHQUFHLENBQUMsQ0FBQztnQkFDakIsS0FBSyxDQUFDLE9BQVEsQ0FBQztvQkFDZCxLQUFLLEVBQUUsR0FBRyxDQUFDLElBQUk7aUJBQ2YsQ0FBQyxDQUFBO1lBQ0gsQ0FBQztTQUNELENBQUMsQ0FBQztRQUdILElBQUksQ0FBQyxVQUFVLEVBQUUsQ0FBQTtJQUNsQixDQUFDO0lBRUQsZ0JBQWdCLEVBQWhCLFVBQWlCLENBQUs7UUFDckIsT0FBTyxDQUFDLEdBQUcsQ0FBQyxtQkFBbUIsRUFBRSxDQUFDLENBQUMsTUFBTSxDQUFDLEtBQUssQ0FBQyxDQUFDO1FBQ2pELElBQUksQ0FBQyxPQUFRLENBQUM7WUFDYixNQUFNLEVBQUUsQ0FBQyxDQUFDLE1BQU0sQ0FBQyxLQUFLO1NBQ3RCLENBQUMsQ0FBQTtJQUNI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dCwgcmVxUGFydG5lcn0gZnJvbSBcIi4uL2FwaS9pbmRleFwiO1xuaW1wb3J0IHtiYXNlfSBmcm9tIFwiLi4vYXBpL2FqYXhcIjtcblxuUGFnZSh7XG5cblx0ZGF0YToge1xuXHRcdGN1cnJlbnQ6ICcxJyxcblxuXHRcdHRva2VuOiAnJyxcblxuXHRcdGFkZHJlc3NMaXN0OltdLFxuXG5cdFx0cmVnaW9uOiBbJ+W5v+S4nOecgScsICflub/lt57luIInLCAn5rW354+g5Yy6J10sXG5cblx0XHRuYW1lOiAnJyxcblx0XHRwaG9uZTogJycsXG5cdFx0YWRkcmVzczogJycsXG5cdFx0aWRlbnRpdHk6ICcnLFxuXHRcdGlkX2NhcmQ6ICcnLFxuXHRcdGlkX2NhcmRfcG9zaXRpdmU6ICcnLFxuXHRcdGlkX2NhcmRfY29udHJhcnk6ICcnLFxuXHR9LFxuXG5cdG9uTG9hZCgpIHtcblx0XHQvLyDor7vlj5Z0b2tlblxuXHRcdGxldCBfdGhpcyA9IHRoaXM7XG5cdFx0d3guZ2V0U3RvcmFnZSh7XG5cdFx0XHRrZXk6ICd0b2tlbicsXG5cdFx0XHRzdWNjZXNzKHJlcykge1xuXHRcdFx0XHRjb25zb2xlLmxvZyhyZXMpO1xuXHRcdFx0XHRfdGhpcy5zZXREYXRhISh7XG5cdFx0XHRcdFx0dG9rZW46IHJlcy5kYXRhXG5cdFx0XHRcdH0pXG5cdFx0XHR9XG5cdFx0fSk7XG5cblx0XHQvL1xuXHRcdHRoaXMuZ2V0QWRkcmVzcygpXG5cdH0sXG5cblx0YmluZFJlZ2lvbkNoYW5nZShlOmFueSkge1xuXHRcdGNvbnNvbGUubG9nKCdwaWNrZXLlj5HpgIHpgInmi6nmlLnlj5jvvIzmkLrluKblgLzkuLonLCBlLmRldGFpbC52YWx1ZSk7XG5cdFx0dGhpcy5zZXREYXRhISh7XG5cdFx0XHRyZWdpb246IGUuZGV0YWlsLnZhbHVlXG5cdFx0fSlcblx0fSxcblxuXHRnZXRBZGRyZXNzKCkge1xuXHRcdHJlcUFkZHJlc3NMaXN0KCkudGhlbihcblx0XHRcdHJlcyA9PiB7XG5cdFx0XHRcdGlmIChyZXMuY29kZSA9PT0gMSkge1xuXHRcdFx0XHRcdGNvbnNvbGUubG9nKCflnLDlnYAnLHJlcyk7XG5cdFx0XHRcdFx0dGhpcy5zZXREYXRhISh7XG5cdFx0XHRcdFx0XHRhZGRyZXNzTGlzdDogcmVzLmRhdGFcblx0XHRcdFx0XHR9KVxuXHRcdFx0XHR9XG5cdFx0XHR9XG5cdFx0KVxuXHR9LFxuXG5cblx0aGFuZGxlQ2hhbmdlKHtkZXRhaWx9OiBhbnkpIHtcblx0XHR0aGlzLnNldERhdGEhKHtcblx0XHRcdGN1cnJlbnQ6IGRldGFpbC5rZXlcblx0XHR9KTtcblx0fSxcblxuXHRpbnB1dChlOiBhbnkpIHtcblx0XHRjb25zb2xlLmxvZyhlKTtcblx0XHRjb25zdCBsYWJlbCA9IGUudGFyZ2V0LmRhdGFzZXQudHlwZTtcblx0XHRjb25zdCB2YWx1ZSA9IGUuZGV0YWlsLmRldGFpbC52YWx1ZTtcblx0XHRjb25zb2xlLmxvZyh2YWx1ZSk7XG5cdFx0dGhpcy5zZXREYXRhISh7XG5cdFx0XHRbbGFiZWxdOiB2YWx1ZVxuXHRcdH0pO1xuXG5cdFx0Y29uc29sZS5sb2cobGFiZWwsIHZhbHVlKTtcblx0fSxcblxuXHRjaG9vc2VUb3AoKSB7XG5cdFx0bGV0IF90aGlzID0gdGhpcztcblx0XHR3eC5jaG9vc2VJbWFnZSh7XG5cdFx0XHRjb3VudDogMSxcblx0XHRcdHNpemVUeXBlOiBbJ29yaWdpbmFsJywgJ2NvbXByZXNzZWQnXSxcblx0XHRcdHNvdXJjZVR5cGU6IFsnYWxidW0nLCAnY2FtZXJhJ10sXG5cdFx0XHRzdWNjZXNzKHJlcykge1xuXHRcdFx0XHQvLyB0ZW1wRmlsZVBhdGjlj6/ku6XkvZzkuLppbWfmoIfnrb7nmoRzcmPlsZ7mgKfmmL7npLrlm77niYdcblx0XHRcdFx0Y29uc29sZS5sb2cocmVzKTtcblx0XHRcdFx0Y29uc3QgdGVtcEZpbGVQYXRocyA9IHJlcy50ZW1wRmlsZVBhdGhzO1xuXHRcdFx0XHRfdGhpcy5zZXREYXRhISh7XG5cdFx0XHRcdFx0aWRfY2FyZF9wb3NpdGl2ZTogdGVtcEZpbGVQYXRoc1xuXHRcdFx0XHR9KTtcblxuXHRcdFx0XHR3eC51cGxvYWRGaWxlKHtcblx0XHRcdFx0XHR1cmw6IGJhc2UrICcvYXBpL3VwbG9hZF9pbWcnLCAvL+S7heS4uuekuuS+i++8jOmdnuecn+WunueahOaOpeWPo+WcsOWdgFxuXHRcdFx0XHRcdGZpbGVQYXRoOiB0ZW1wRmlsZVBhdGhzWzBdLFxuXHRcdFx0XHRcdG5hbWU6ICdpbWFnZScsXG5cdFx0XHRcdFx0Ly8gZm9ybURhdGE6IHtcblx0XHRcdFx0XHQvLyBcdCd1c2VyJzogJ3Rlc3QnXG5cdFx0XHRcdFx0Ly8gfSxcblx0XHRcdFx0XHRzdWNjZXNzKHJlcykge1xuXHRcdFx0XHRcdFx0Y29uc3QgZGF0YSA9IEpTT04ucGFyc2UocmVzLmRhdGEpO1xuXHRcdFx0XHRcdFx0Y29uc29sZS5sb2coZGF0YSk7XG5cdFx0XHRcdFx0XHRpZiAoZGF0YS5jb2RlID09PSAxKSB7XG5cdFx0XHRcdFx0XHRcdF90aGlzLnNldERhdGEhKHtcblx0XHRcdFx0XHRcdFx0XHRpZF9jYXJkX3Bvc2l0aXZlOiBkYXRhLmRhdGFcblx0XHRcdFx0XHRcdFx0fSk7XG5cdFx0XHRcdFx0XHR9XG5cdFx0XHRcdFx0fVxuXHRcdFx0XHR9KVxuXHRcdFx0XHRjb25zb2xlLmxvZyh0ZW1wRmlsZVBhdGhzKTtcblx0XHRcdH1cblx0XHR9KVxuXHR9LFxuXG5cdGNob29zZUJvdHRvbSgpIHtcblx0XHRsZXQgX3RoaXMgPSB0aGlzO1xuXHRcdHd4LmNob29zZUltYWdlKHtcblx0XHRcdGNvdW50OiAxLFxuXHRcdFx0c2l6ZVR5cGU6IFsnb3JpZ2luYWwnLCAnY29tcHJlc3NlZCddLFxuXHRcdFx0c291cmNlVHlwZTogWydhbGJ1bScsICdjYW1lcmEnXSxcblx0XHRcdHN1Y2Nlc3MocmVzKSB7XG5cdFx0XHRcdC8vIHRlbXBGaWxlUGF0aOWPr+S7peS9nOS4umltZ+agh+etvueahHNyY+WxnuaAp+aYvuekuuWbvueJh1xuXHRcdFx0XHRjb25zdCB0ZW1wRmlsZVBhdGhzID0gcmVzLnRlbXBGaWxlUGF0aHM7XG5cdFx0XHRcdF90aGlzLnNldERhdGEhKHtcblx0XHRcdFx0XHRpZF9jYXJkX2NvbnRyYXJ5OiB0ZW1wRmlsZVBhdGhzXG5cdFx0XHRcdH0pO1xuXG5cdFx0XHRcdHd4LnVwbG9hZEZpbGUoe1xuXHRcdFx0XHRcdHVybDogYmFzZSsgJy9hcGkvdXBsb2FkX2ltZycsIC8v5LuF5Li656S65L6L77yM6Z2e55yf5a6e55qE5o6l5Y+j5Zyw5Z2AXG5cdFx0XHRcdFx0ZmlsZVBhdGg6IHRlbXBGaWxlUGF0aHNbMF0sXG5cdFx0XHRcdFx0bmFtZTogJ2ltYWdlJyxcblx0XHRcdFx0XHQvLyBmb3JtRGF0YToge1xuXHRcdFx0XHRcdC8vIFx0J3VzZXInOiAndGVzdCdcblx0XHRcdFx0XHQvLyB9LFxuXHRcdFx0XHRcdHN1Y2Nlc3MocmVzKSB7XG5cdFx0XHRcdFx0XHRjb25zdCBkYXRhID0gSlNPTi5wYXJzZShyZXMuZGF0YSk7XG5cdFx0XHRcdFx0XHRjb25zb2xlLmxvZyhkYXRhKTtcblx0XHRcdFx0XHRcdGlmIChkYXRhLmNvZGUgPT09IDEpIHtcblx0XHRcdFx0XHRcdFx0X3RoaXMuc2V0RGF0YSEoe1xuXHRcdFx0XHRcdFx0XHRcdGlkX2NhcmRfY29udHJhcnk6IGRhdGEuZGF0YVxuXHRcdFx0XHRcdFx0XHR9KTtcblx0XHRcdFx0XHRcdH1cblx0XHRcdFx0XHR9XG5cdFx0XHRcdH0pO1xuXHRcdFx0XHRjb25zb2xlLmxvZyh0ZW1wRmlsZVBhdGhzKTtcblx0XHRcdH1cblx0XHR9KVxuXHR9LFxuXG5cdGdldFBhcnRuZXIoKSB7XG5cblx0XHRsZXQge3Rva2VuLCBwaG9uZSwgbmFtZSwgYWRkcmVzcywgcmVnaW9uLCBpZGVudGl0eSwgaWRfY2FyZCwgaWRfY2FyZF9wb3NpdGl2ZSwgaWRfY2FyZF9jb250cmFyeSwgY3VycmVudH0gPSB0aGlzLmRhdGE7XG5cblx0XHRpZGVudGl0eSA9IGN1cnJlbnQ7XG5cdFx0YWRkcmVzcyA9IHJlZ2lvbi5qb2luKCcnKTtcblxuXHRcdGxldCBkYXRhOiBQYXJ0bmV0O1xuXHRcdGlmIChpZGVudGl0eSA9PT0gJzEnKSB7XG5cdFx0XHRkYXRhID0ge1xuXHRcdFx0XHR0b2tlbiwgcGhvbmUsIG5hbWUsIGFkZHJlc3MsIGlkX2NhcmQsIGlkZW50aXR5LCBpZF9jYXJkX3Bvc2l0aXZlLCBpZF9jYXJkX2NvbnRyYXJ5XG5cdFx0XHR9O1xuXHRcdFx0aWYgKCFuYW1lIHx8ICF0b2tlbiB8fCAhaWRfY2FyZF9wb3NpdGl2ZSB8fCAhaWRfY2FyZF9jb250cmFyeSB8fCAhaWRfY2FyZCB8fCAhcGhvbmUgfHwgIWFkZHJlc3MgfHwgIWlkZW50aXR5KSB7XG5cdFx0XHRcdHd4LnNob3dUb2FzdCh7XG5cdFx0XHRcdFx0dGl0bGU6ICfor7fmo4Dmn6XooajljZXloavlhpnmmK/lkKblrozmlbQnLFxuXHRcdFx0XHRcdG1hc2s6IHRydWUsXG5cdFx0XHRcdFx0ZHVyYXRpb246IDIwMDAsXG5cdFx0XHRcdFx0aWNvbjogXCJub25lXCJcblx0XHRcdFx0fSk7XG5cdFx0XHRcdHJldHVybjtcblx0XHRcdH1cblx0XHR9IGVsc2Uge1xuXHRcdFx0ZGF0YSA9IHtcblx0XHRcdFx0dG9rZW4sIHBob25lLCBuYW1lLCBhZGRyZXNzLGlkZW50aXR5XG5cdFx0XHR9O1xuXHRcdFx0aWYgKCFuYW1lIHx8ICF0b2tlbiB8fCAhcGhvbmUgfHwgIWFkZHJlc3MgfHwgIWlkZW50aXR5KSB7XG5cdFx0XHRcdHd4LnNob3dUb2FzdCh7XG5cdFx0XHRcdFx0dGl0bGU6ICfor7fmo4Dmn6XooajljZXloavlhpnmmK/lkKblrozmlbQnLFxuXHRcdFx0XHRcdG1hc2s6IHRydWUsXG5cdFx0XHRcdFx0ZHVyYXRpb246IDIwMDAsXG5cdFx0XHRcdFx0aWNvbjogXCJub25lXCJcblx0XHRcdFx0fSk7XG5cdFx0XHRcdHJldHVybjtcblx0XHRcdH1cblx0XHR9XG5cblx0XHRyZXFQYXJ0bmVyKGRhdGEpLnRoZW4oXG5cdFx0XHQocmVzOiBhbnkpID0+IHtcblx0XHRcdFx0Y29uc29sZS5sb2cocmVzKTtcblx0XHRcdH1cblx0XHQpXG5cdH1cbn0pO1xuIl19