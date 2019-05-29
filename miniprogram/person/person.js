"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var index_1 = require("../api/index");
Page({
    data: {
        token: '',
        name: '',
        id_card: '',
        id_card_positive: '',
        id_card_contrary: '',
        identity: '',
        disabled: false,
        state: ['供货商', '加盟店', '区域代理']
    },
    onLoad: function () {
        var _this = this;
        wx.getStorage({
            key: 'token',
            success: function (res) {
                console.log(res);
                _this.setData({
                    token: res.data
                }, function () { return _this.getInfor(); });
            }
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
        if (this.data.disabled) {
            return;
        }
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
                    url: 'http://47.97.251.196/api/upload_img',
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
        if (this.data.disabled) {
            return;
        }
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
                    url: 'http://47.97.251.196/api/upload_img',
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
    doUpdateBasicInformation: function () {
        var _a = this.data, name = _a.name, token = _a.token, id_card = _a.id_card, id_card_contrary = _a.id_card_contrary, id_card_positive = _a.id_card_positive;
        if (!name || !token || !id_card_positive || !id_card_contrary || !id_card) {
            wx.showToast({
                title: '请检查表单填写是否完整',
                mask: true,
                duration: 2000,
                icon: "none"
            });
            return;
        }
        var data = { name: name, token: token, id_card: id_card, id_card_contrary: id_card_contrary, id_card_positive: id_card_positive };
        index_1.reqUpdateBasicInformation(data).then(function (res) {
            console.log(res);
            if (res.code === 1) {
                wx.showToast({
                    title: '修改成功',
                    mask: true,
                    duration: 2000,
                    success: function () {
                        wx.navigateBack({
                            delta: 1
                        });
                    }
                });
            }
        });
    },
    getInfor: function () {
        var _this_1 = this;
        wx.showLoading({
            title: '',
            mask: true
        });
        var _a = this.data, token = _a.token, state = _a.state;
        index_1.reqUserInformation({ token: token }).then(function (res) {
            if (res.code === 1) {
                wx.hideLoading();
                var _a = res.data, name_1 = _a.name, id_card = _a.id_card, id_card_contrary = _a.id_card_contrary, id_card_positive = _a.id_card_positive, identity = _a.identity;
                console.log(name_1, id_card, id_card_contrary, id_card_positive);
                if (name_1 || id_card || id_card_contrary || id_card_positive) {
                    _this_1.setData({
                        disabled: true,
                        name: name_1,
                        id_card: id_card,
                        id_card_contrary: id_card_contrary,
                        id_card_positive: id_card_positive,
                        identity: state[identity]
                    });
                }
            }
        });
    }
});
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoicGVyc29uLmpzIiwic291cmNlUm9vdCI6IiIsInNvdXJjZXMiOlsicGVyc29uLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7O0FBQUEsc0NBQTJFO0FBRTNFLElBQUksQ0FBQztJQUNKLElBQUksRUFBRTtRQUNMLEtBQUssRUFBRSxFQUFFO1FBQ1QsSUFBSSxFQUFFLEVBQUU7UUFDUixPQUFPLEVBQUUsRUFBRTtRQUNYLGdCQUFnQixFQUFFLEVBQUU7UUFDcEIsZ0JBQWdCLEVBQUUsRUFBRTtRQUVwQixRQUFRLEVBQUMsRUFBRTtRQUNYLFFBQVEsRUFBRSxLQUFLO1FBQ2YsS0FBSyxFQUFFLENBQUMsS0FBSyxFQUFFLEtBQUssRUFBRSxNQUFNLENBQUM7S0FFN0I7SUFDRCxNQUFNLEVBQU47UUFFQyxJQUFJLEtBQUssR0FBRyxJQUFJLENBQUM7UUFDakIsRUFBRSxDQUFDLFVBQVUsQ0FBQztZQUNiLEdBQUcsRUFBRSxPQUFPO1lBQ1osT0FBTyxFQUFQLFVBQVEsR0FBRztnQkFDVixPQUFPLENBQUMsR0FBRyxDQUFDLEdBQUcsQ0FBQyxDQUFDO2dCQUNqQixLQUFLLENBQUMsT0FBUSxDQUFDO29CQUNkLEtBQUssRUFBRSxHQUFHLENBQUMsSUFBSTtpQkFDZCxFQUFFLGNBQU0sT0FBQSxLQUFLLENBQUMsUUFBUSxFQUFFLEVBQWhCLENBQWdCLENBQ3pCLENBQUE7WUFDRixDQUFDO1NBQ0QsQ0FBQyxDQUFDO0lBQ0osQ0FBQztJQUVELEtBQUssRUFBTCxVQUFNLENBQU07O1FBQ1gsT0FBTyxDQUFDLEdBQUcsQ0FBQyxDQUFDLENBQUMsQ0FBQztRQUNmLElBQU0sS0FBSyxHQUFHLENBQUMsQ0FBQyxNQUFNLENBQUMsT0FBTyxDQUFDLElBQUksQ0FBQztRQUNwQyxJQUFNLEtBQUssR0FBRyxDQUFDLENBQUMsTUFBTSxDQUFDLE1BQU0sQ0FBQyxLQUFLLENBQUM7UUFDcEMsT0FBTyxDQUFDLEdBQUcsQ0FBQyxLQUFLLENBQUMsQ0FBQztRQUNuQixJQUFJLENBQUMs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VixDQUFDLENBQUE7UUFDSSxJQUFBLGNBQXlCLEVBQXhCLGdCQUFLLEVBQUMsZ0JBQWtCLENBQUM7UUFDaEMsMEJBQWtCLENBQUMsRUFBQyxLQUFLLE9BQUEsRUFBQyxDQUFDLENBQUMsSUFBSSxDQUMvQixVQUFDLEdBQVE7WUFDUixJQUFJLEdBQUcsQ0FBQyxJQUFJLEtBQUssQ0FBQyxFQUFFO2dCQUNuQixFQUFFLENBQUMsV0FBVyxFQUFFLENBQUM7Z0JBRVgsSUFBQSxhQUF1RSxFQUF0RSxnQkFBSSxFQUFFLG9CQUFPLEVBQUUsc0NBQWdCLEVBQUUsc0NBQWdCLEVBQUMsc0JBQW9CLENBQUM7Z0JBQzlFLE9BQU8sQ0FBQyxHQUFHLENBQUMsTUFBSSxFQUFFLE9BQU8sRUFBRSxnQkFBZ0IsRUFBRSxnQkFBZ0IsQ0FBQyxDQUFDO2dCQUMvRCxJQUFJLE1BQUksSUFBSSxPQUFPLElBQUksZ0JBQWdCLElBQUksZ0JBQWdCLEVBQUU7b0JBQzVELE9BQUksQ0FBQyxPQUFRLENBQUM7d0JBQ2IsUUFBUSxFQUFFLElBQUk7d0JBQ2QsSUFBSSxRQUFBO3dCQUNKLE9BQU8sU0FBQTt3QkFDUCxnQkFBZ0Isa0JBQUE7d0JBQ2hCLGdCQUFnQixrQkFBQTt3QkFDaEIsUUFBUSxFQUFHLEtBQUssQ0FBQyxRQUFRLENBQUM7cUJBQzFCLENBQUMsQ0FBQTtpQkFDRjthQUVEO1FBQ0YsQ0FBQyxDQUNELENBQUE7SUFDRixDQUFDO0NBQ0QsQ0FBQyxDQUFBIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHtyZXFVcGRhdGVCYXNpY0luZm9ybWF0aW9uLCByZXFVc2VySW5mb3JtYXRpb259IGZyb20gXCIuLi9hcGkvaW5kZXhcIjtcblxuUGFnZSh7XG5cdGRhdGE6IHtcblx0XHR0b2tlbjogJycsXG5cdFx0bmFtZTogJycsXG5cdFx0aWRfY2FyZDogJycsXG5cdFx0aWRfY2FyZF9wb3NpdGl2ZTogJycsXG5cdFx0aWRfY2FyZF9jb250cmFyeTogJycsXG5cblx0XHRpZGVudGl0eTonJyxcblx0XHRkaXNhYmxlZDogZmFsc2UsXG5cdFx0c3RhdGU6IFsn5L6b6LSn5ZWGJywgJ+WKoOebn+W6lycsICfljLrln5/ku6PnkIYnXVxuXHRcdC8vIDHvvJrkvpvotKfllYbvvJsy77ya5Yqg55uf5bqX77ybM++8muWMuuWfn+S7o+eQhlxuXHR9LFxuXHRvbkxvYWQoKSB7XG5cdFx0Ly8g6K+75Y+WdG9rZW5cblx0XHRsZXQgX3RoaXMgPSB0aGlzO1xuXHRcdHd4LmdldFN0b3JhZ2Uoe1xuXHRcdFx0a2V5OiAndG9rZW4nLFxuXHRcdFx0c3VjY2VzcyhyZXMpIHtcblx0XHRcdFx0Y29uc29sZS5sb2cocmVzKTtcblx0XHRcdFx0X3RoaXMuc2V0RGF0YSEoe1xuXHRcdFx0XHRcdHRva2VuOiByZXMuZGF0YVxuXHRcdFx0XHRcdH0sICgpID0+IF90aGlzLmdldEluZm9yKClcblx0XHRcdFx0KVxuXHRcdFx0fVxuXHRcdH0pO1xuXHR9LFxuXG5cdGlucHV0KGU6IGFueSkge1xuXHRcdGNvbnNvbGUubG9nKGUpO1xuXHRcdGNvbnN0IGxhYmVsID0gZS50YXJnZXQuZGF0YXNldC50eXBlO1xuXHRcdGNvbnN0IHZhbHVlID0gZS5kZXRhaWwuZGV0YWlsLnZhbHVlO1xuXHRcdGNvbnNvbGUubG9nKHZhbHVlKTtcblx0XHR0aGlzLnNldERhdGEhKHtcblx0XHRcdFtsYWJlbF06IHZhbHVlXG5cdFx0fSk7XG5cblx0XHRjb25zb2xlLmxvZyhsYWJlbCwgdmFsdWUpO1xuXHR9LFxuXG5cdGNob29zZVRvcCgpIHtcblx0XHRpZiAodGhpcy5kYXRhLmRpc2FibGVkKSB7XG5cdFx0XHRyZXR1cm5cblx0XHR9XG5cdFx0bGV0IF90aGlzID0gdGhpcztcblx0XHR3eC5jaG9vc2VJbWFnZSh7XG5cdFx0XHRjb3VudDogMSxcblx0XHRcdHNpemVUeXBlOiBbJ29yaWdpbmFsJywgJ2NvbXByZXNzZWQnXSxcblx0XHRcdHNvdXJjZVR5cGU6IFsnYWxidW0nLCAnY2FtZXJhJ10sXG5cdFx0XHRzdWNjZXNzKHJlcykge1xuXHRcdFx0XHQvLyB0ZW1wRmlsZVBhdGjlj6/ku6XkvZzkuLppbWfmoIfnrb7nmoRzcmPlsZ7mgKfmmL7npLrlm77niYdcblx0XHRcdFx0Y29uc29sZS5sb2cocmVzKTtcblx0XHRcdFx0Y29uc3QgdGVtcEZpbGVQYXRocyA9IHJlcy50ZW1wRmlsZVBhdGhzO1xuXHRcdFx0XHRfdGhpcy5zZXREYXRhISh7XG5cdFx0XHRcdFx0aWRfY2FyZF9wb3NpdGl2ZTogdGVtcEZpbGVQYXRoc1xuXHRcdFx0XHR9KTtcblxuXHRcdFx0XHR3eC51cGxvYWRGaWxlKHtcblx0XHRcdFx0XHR1cmw6ICdodHRwOi8vNDcuOTcuMjUxLjE5Ni9hcGkvdXBsb2FkX2ltZycsIC8v5LuF5Li656S65L6L77yM6Z2e55yf5a6e55qE5o6l5Y+j5Zyw5Z2AXG5cdFx0XHRcdFx0ZmlsZVBhdGg6IHRlbXBGaWxlUGF0aHNbMF0sXG5cdFx0XHRcdFx0bmFtZTogJ2ltYWdlJyxcblx0XHRcdFx0XHQvLyBmb3JtRGF0YToge1xuXHRcdFx0XHRcdC8vIFx0J3VzZXInOiAndGVzdCdcblx0XHRcdFx0XHQvLyB9LFxuXHRcdFx0XHRcdHN1Y2Nlc3MgKHJlcyl7XG5cdFx0XHRcdFx0XHRjb25zdCBkYXRhID0gSlNPTi5wYXJzZShyZXMuZGF0YSk7XG5cdFx0XHRcdFx0XHRjb25zb2xlLmxvZyhkYXRhKTtcblx0XHRcdFx0XHRcdGlmIChkYXRhLmNvZGUgPT09MSl7XG5cdFx0XHRcdFx0XHRcdF90aGlzLnNldERhdGEhKHtcblx0XHRcdFx0XHRcdFx0XHRpZF9jYXJkX3Bvc2l0aXZlOiBkYXRhLmRhdGFcblx0XHRcdFx0XHRcdFx0fSk7XG5cdFx0XHRcdFx0XHR9XG5cdFx0XHRcdFx0fVxuXHRcdFx0XHR9KVxuXHRcdFx0XHRjb25zb2xlLmxvZyh0ZW1wRmlsZVBhdGhzKTtcblx0XHRcdH1cblx0XHR9KVxuXHR9LFxuXG5cdGNob29zZUJvdHRvbSgpIHtcblx0XHRpZiAodGhpcy5kYXRhLmRpc2FibGVkKSB7XG5cdFx0XHRyZXR1cm5cblx0XHR9XG5cdFx0bGV0IF90aGlzID0gdGhpcztcblx0XHR3eC5jaG9vc2VJbWFnZSh7XG5cdFx0XHRjb3VudDogMSxcblx0XHRcdHNpemVUeXBlOiBbJ29yaWdpbmFsJywgJ2NvbXByZXNzZWQnXSxcblx0XHRcdHNvdXJjZVR5cGU6IFsnYWxidW0nLCAnY2FtZXJhJ10sXG5cdFx0XHRzdWNjZXNzKHJlcykge1xuXHRcdFx0XHQvLyB0ZW1wRmlsZVBhdGjlj6/ku6XkvZzkuLppbWfmoIfnrb7nmoRzcmPlsZ7mgKfmmL7npLrlm77niYdcblx0XHRcdFx0Y29uc3QgdGVtcEZpbGVQYXRocyA9IHJlcy50ZW1wRmlsZVBhdGhzO1xuXHRcdFx0XHRfdGhpcy5zZXREYXRhISh7XG5cdFx0XHRcdFx0aWRfY2FyZF9jb250cmFyeTogdGVtcEZpbGVQYXRoc1xuXHRcdFx0XHR9KTtcblxuXHRcdFx0XHR3eC51cGxvYWRGaWxlKHtcblx0XHRcdFx0XHR1cmw6ICdodHRwOi8vNDcuOTcuMjUxLjE5Ni9hcGkvdXBsb2FkX2ltZycsIC8v5LuF5Li656S65L6L77yM6Z2e55yf5a6e55qE5o6l5Y+j5Zyw5Z2AXG5cdFx0XHRcdFx0ZmlsZVBhdGg6IHRlbXBGaWxlUGF0aHNbMF0sXG5cdFx0XHRcdFx0bmFtZTogJ2ltYWdlJyxcblx0XHRcdFx0XHQvLyBmb3JtRGF0YToge1xuXHRcdFx0XHRcdC8vIFx0J3VzZXInOiAndGVzdCdcblx0XHRcdFx0XHQvLyB9LFxuXHRcdFx0XHRcdHN1Y2Nlc3MgKHJlcyl7XG5cdFx0XHRcdFx0XHRjb25zdCBkYXRhID0gSlNPTi5wYXJzZShyZXMuZGF0YSk7XG5cdFx0XHRcdFx0XHRjb25zb2xlLmxvZyhkYXRhKTtcblx0XHRcdFx0XHRcdGlmIChkYXRhLmNvZGUgPT09MSl7XG5cdFx0XHRcdFx0XHRcdF90aGlzLnNldERhdGEhKHtcblx0XHRcdFx0XHRcdFx0XHRpZF9jYXJkX2NvbnRyYXJ5OiBkYXRhLmRhdGFcblx0XHRcdFx0XHRcdFx0fSk7XG5cdFx0XHRcdFx0XHR9XG5cdFx0XHRcdFx0fVxuXHRcdFx0XHR9KTtcblx0XHRcdFx0Y29uc29sZS5sb2codGVtcEZpbGVQYXRocyk7XG5cdFx0XHR9XG5cdFx0fSlcblx0fSxcblx0ZG9VcGRhdGVCYXNpY0luZm9ybWF0aW9uKCkge1xuXHRcdGNvbnN0IHtuYW1lLHRva2VuLGlkX2NhcmQsaWRfY2FyZF9jb250cmFyeSxpZF9jYXJkX3Bvc2l0aXZlfSA9IHRoaXMuZGF0YTtcblx0XHRpZiAoIW5hbWUgfHwgIXRva2VuIHx8ICFpZF9jYXJkX3Bvc2l0aXZlIHx8ICFpZF9jYXJkX2NvbnRyYXJ5IHx8ICFpZF9jYXJkKSB7XG5cdFx0XHR3eC5zaG93VG9hc3Qoe1xuXHRcdFx0XHR0aXRsZTogJ+ivt+ajgOafpeihqOWNleWhq+WGmeaYr+WQpuWujOaVtCcsXG5cdFx0XHRcdG1hc2s6IHRydWUsXG5cdFx0XHRcdGR1cmF0aW9uOiAyMDAwLFxuXHRcdFx0XHRpY29uOiBcIm5vbmVcIlxuXHRcdFx0fSk7XG5cdFx0XHRyZXR1cm47XG5cdFx0fVxuXHRcdGNvbnN0IGRhdGEgPSB7bmFtZSx0b2tlbixpZF9jYXJkLGlkX2NhcmRfY29udHJhcnksaWRfY2FyZF9wb3NpdGl2ZX07XG5cdFx0cmVxVXBkYXRlQmFzaWNJbmZvcm1hdGlvbihkYXRhKS50aGVuKFxuXHRcdFx0cmVzID0+IHtcblx0XHRcdFx0Y29uc29sZS5sb2cocmVzKTtcblx0XHRcdFx0aWYgKHJlcy5jb2RlID09PSAxKSB7XG5cdFx0XHRcdFx0d3guc2hvd1RvYXN0KHtcblx0XHRcdFx0XHRcdHRpdGxlOiAn5L+u5pS55oiQ5YqfJyxcblx0XHRcdFx0XHRcdG1hc2s6IHRydWUsXG5cdFx0XHRcdFx0XHRkdXJhdGlvbjogMjAwMCxcblx0XHRcdFx0XHRcdHN1Y2Nlc3MoKSB7XG5cdFx0XHRcdFx0XHRcdHd4Lm5hdmlnYXRlQmFjayh7XG5cdFx0XHRcdFx0XHRcdFx0ZGVsdGE6IDFcblx0XHRcdFx0XHRcdFx0fSlcblx0XHRcdFx0XHRcdH1cblx0XHRcdFx0XHR9KVxuXG5cdFx0XHRcdH1cblx0XHRcdH1cblx0XHQpXG5cdH0sXG5cblx0Z2V0SW5mb3IoKSB7XG5cdFx0d3guc2hvd0xvYWRpbmcoe1xuXHRcdFx0dGl0bGU6ICcnLFxuXHRcdFx0bWFzazogdHJ1ZVxuXHRcdH0pXG5cdFx0Y29uc3Qge3Rva2VuLHN0YXRlfSA9IHRoaXMuZGF0YTtcblx0XHRyZXFVc2VySW5mb3JtYXRpb24oe3Rva2VufSkudGhlbihcblx0XHRcdChyZXM6IGFueSkgPT4ge1xuXHRcdFx0XHRpZiAocmVzLmNvZGUgPT09IDEpIHtcblx0XHRcdFx0XHR3eC5oaWRlTG9hZGluZygpO1xuXG5cdFx0XHRcdFx0Y29uc3Qge25hbWUsIGlkX2NhcmQsIGlkX2NhcmRfY29udHJhcnksIGlkX2NhcmRfcG9zaXRpdmUsaWRlbnRpdHl9ID0gcmVzLmRhdGE7XG5cdFx0XHRcdFx0Y29uc29sZS5sb2cobmFtZSwgaWRfY2FyZCwgaWRfY2FyZF9jb250cmFyeSwgaWRfY2FyZF9wb3NpdGl2ZSk7XG5cdFx0XHRcdFx0aWYgKG5hbWUgfHwgaWRfY2FyZCB8fCBpZF9jYXJkX2NvbnRyYXJ5IHx8IGlkX2NhcmRfcG9zaXRpdmUpIHtcblx0XHRcdFx0XHRcdHRoaXMuc2V0RGF0YSEoe1xuXHRcdFx0XHRcdFx0XHRkaXNhYmxlZDogdHJ1ZSxcblx0XHRcdFx0XHRcdFx0bmFtZSxcblx0XHRcdFx0XHRcdFx0aWRfY2FyZCxcblx0XHRcdFx0XHRcdFx0aWRfY2FyZF9jb250cmFyeSxcblx0XHRcdFx0XHRcdFx0aWRfY2FyZF9wb3NpdGl2ZSxcblx0XHRcdFx0XHRcdFx0aWRlbnRpdHkgOiBzdGF0ZVtpZGVudGl0eV1cblx0XHRcdFx0XHRcdH0pXG5cdFx0XHRcdFx0fVxuXG5cdFx0XHRcdH1cblx0XHRcdH1cblx0XHQpXG5cdH1cbn0pXG4iXX0=