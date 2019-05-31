"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var index_1 = require("../api/index");
var ajax_1 = require("../api/ajax");
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
    yulan: function () {
        wx.previewImage({
            current: this.data.id_card_positive,
            urls: [this.data.id_card_positive]
        });
    },
    yulanF: function () {
        wx.previewImage({
            current: this.data.id_card_contrary,
            urls: [this.data.id_card_contrary]
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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoicGVyc29uLmpzIiwic291cmNlUm9vdCI6IiIsInNvdXJjZXMiOlsicGVyc29uLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7O0FBQUEsc0NBQTJFO0FBQzNFLG9DQUFpQztBQUVqQyxJQUFJLENBQUM7SUFDSixJQUFJLEVBQUU7UUFDTCxLQUFLLEVBQUUsRUFBRTtRQUNULElBQUksRUFBRSxFQUFFO1FBQ1IsT0FBTyxFQUFFLEVBQUU7UUFDWCxnQkFBZ0IsRUFBRSxFQUFFO1FBQ3BCLGdCQUFnQixFQUFFLEVBQUU7UUFFcEIsUUFBUSxFQUFDLEVBQUU7UUFDWCxRQUFRLEVBQUUsS0FBSztRQUNmLEtBQUssRUFBRSxDQUFDLEtBQUssRUFBRSxLQUFLLEVBQUUsTUFBTSxDQUFDO0tBRTdCO0lBQ0QsTUFBTSxFQUFOO1FBRUMsSUFBSSxLQUFLLEdBQUcsSUFBSSxDQUFDO1FBQ2pCLEVBQUUsQ0FBQyxVQUFVLENBQUM7WUFDYixHQUFHLEVBQUUsT0FBTztZQUNaLE9BQU8sRUFBUCxVQUFRLEdBQUc7Z0JBQ1YsT0FBTyxDQUFDLEdBQUcsQ0FBQyxHQUFHLENBQUMsQ0FBQztnQkFDakIsS0FBSyxDQUFDLE9BQVEsQ0FBQztvQkFDZCxLQUFLLEVBQUUsR0FBRyxDQUFDLElBQUk7aUJBQ2QsRUFBRSxjQUFNLE9BQUEsS0FBSyxDQUFDLFFBQVEsRUFBRSxFQUFoQixDQUFnQixDQUN6QixDQUFBO1lBQ0YsQ0FBQztTQUNELENBQUMsQ0FBQztJQUNKLENBQUM7SUFFRCxLQUFLLEVBQUwsVUFBTSxDQUFNOztRQUNYLE9BQU8sQ0FBQyxHQUFHLENBQUMsQ0FBQyxDQUFDLENBQUM7UUFDZixJQUFNLEtBQUssR0FBRyxDQUFDLENBQUMsTUFBTSxDQUFDLE9BQU8sQ0FBQyxJQUFJLENBQUM7UUFDcEMsSUFBTSxLQUFLLEdBQUcsQ0FBQyxDQUFDLE1BQU0sQ0FBQyxNQUFNLENBQUMsS0FBSyxDQUFDO1FBQ3BDLE9BQU8sQ0FBQyxHQUFHLENBQUMsS0FBSyxDQUFDLENBQUM7UUFD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QyxRQUFRLENBQUM7cUJBQzFCLENBQUMsQ0FBQTtpQkFDRjthQUVEO1FBQ0YsQ0FBQyxDQUNELENBQUE7SUFDRixDQUFDO0NBQ0QsQ0FBQyxDQUFBIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHtyZXFVcGRhdGVCYXNpY0luZm9ybWF0aW9uLCByZXFVc2VySW5mb3JtYXRpb259IGZyb20gXCIuLi9hcGkvaW5kZXhcIjtcclxuaW1wb3J0IHtiYXNlfSBmcm9tIFwiLi4vYXBpL2FqYXhcIjtcclxuXHJcblBhZ2Uoe1xyXG5cdGRhdGE6IHtcclxuXHRcdHRva2VuOiAnJyxcclxuXHRcdG5hbWU6ICcnLFxyXG5cdFx0aWRfY2FyZDogJycsXHJcblx0XHRpZF9jYXJkX3Bvc2l0aXZlOiAnJyxcclxuXHRcdGlkX2NhcmRfY29udHJhcnk6ICcnLFxyXG5cclxuXHRcdGlkZW50aXR5OicnLFxyXG5cdFx0ZGlzYWJsZWQ6IGZhbHNlLFxyXG5cdFx0c3RhdGU6IFsn5L6b6LSn5ZWGJywgJ+WKoOebn+W6lycsICfljLrln5/ku6PnkIYnXVxyXG5cdFx0Ly8gMe+8muS+m+i0p+WVhu+8mzLvvJrliqDnm5/lupfvvJsz77ya5Yy65Z+f5Luj55CGXHJcblx0fSxcclxuXHRvbkxvYWQoKSB7XHJcblx0XHQvLyDor7vlj5Z0b2tlblxyXG5cdFx0bGV0IF90aGlzID0gdGhpcztcclxuXHRcdHd4LmdldFN0b3JhZ2Uoe1xyXG5cdFx0XHRrZXk6ICd0b2tlbicsXHJcblx0XHRcdHN1Y2Nlc3MocmVzKSB7XHJcblx0XHRcdFx0Y29uc29sZS5sb2cocmVzKTtcclxuXHRcdFx0XHRfdGhpcy5zZXREYXRhISh7XHJcblx0XHRcdFx0XHR0b2tlbjogcmVzLmRhdGFcclxuXHRcdFx0XHRcdH0sICgpID0+IF90aGlzLmdldEluZm9yKClcclxuXHRcdFx0XHQpXHJcblx0XHRcdH1cclxuXHRcdH0pO1xyXG5cdH0sXHJcblxyXG5cdGlucHV0KGU6IGFueSkge1xyXG5cdFx0Y29uc29sZS5sb2coZSk7XHJcblx0XHRjb25zdCBsYWJlbCA9IGUudGFyZ2V0LmRhdGFzZXQudHlwZTtcclxuXHRcdGNvbnN0IHZhbHVlID0gZS5kZXRhaWwuZGV0YWlsLnZhbHVlO1xyXG5cdFx0Y29uc29sZS5sb2codmFsdWUpO1xyXG5cdFx0dGhpcy5zZXREYXRhISh7XHJcblx0XHRcdFtsYWJlbF06IHZhbHVlXHJcblx0XHR9KTtcclxuXHJcblx0XHRjb25zb2xlLmxvZyhsYWJlbCwgdmFsdWUpO1xyXG5cdH0sXHJcblxyXG5cdGNob29zZVRvcCgpIHtcclxuXHRcdGlmICh0aGlzLmRhdGEuZGlzYWJsZWQpIHtcclxuXHRcdFx0cmV0dXJuXHJcblx0XHR9XHJcblx0XHRsZXQgX3RoaXMgPSB0aGlzO1xyXG5cdFx0d3guY2hvb3NlSW1hZ2Uoe1xyXG5cdFx0XHRjb3VudDogMSxcclxuXHRcdFx0c2l6ZVR5cGU6IFsnb3JpZ2luYWwnLCAnY29tcHJlc3NlZCddLFxyXG5cdFx0XHRzb3VyY2VUeXBlOiBbJ2FsYnVtJywgJ2NhbWVyYSddLFxyXG5cdFx0XHRzdWNjZXNzKHJlcykge1xyXG5cdFx0XHRcdC8vIHRlbXBGaWxlUGF0aOWPr+S7peS9nOS4umltZ+agh+etvueahHNyY+WxnuaAp+aYvuekuuWbvueJh1xyXG5cdFx0XHRcdGNvbnNvbGUubG9nKHJlcyk7XHJcblx0XHRcdFx0Y29uc3QgdGVtcEZpbGVQYXRocyA9IHJlcy50ZW1wRmlsZVBhdGhzO1xyXG5cdFx0XHRcdF90aGlzLnNldERhdGEhKHtcclxuXHRcdFx0XHRcdGlkX2NhcmRfcG9zaXRpdmU6IHRlbXBGaWxlUGF0aHNcclxuXHRcdFx0XHR9KTtcclxuXHJcblx0XHRcdFx0d3gudXBsb2FkRmlsZSh7XHJcblx0XHRcdFx0XHR1cmw6IGJhc2UgKyAnL2FwaS91cGxvYWRfaW1nJywgLy/ku4XkuLrnpLrkvovvvIzpnZ7nnJ/lrp7nmoTmjqXlj6PlnLDlnYBcclxuXHRcdFx0XHRcdGZpbGVQYXRoOiB0ZW1wRmlsZVBhdGhzWzBdLFxyXG5cdFx0XHRcdFx0bmFtZTogJ2ltYWdlJyxcclxuXHRcdFx0XHRcdC8vIGZvcm1EYXRhOiB7XHJcblx0XHRcdFx0XHQvLyBcdCd1c2VyJzogJ3Rlc3QnXHJcblx0XHRcdFx0XHQvLyB9LFxyXG5cdFx0XHRcdFx0c3VjY2VzcyAocmVzKXtcclxuXHRcdFx0XHRcdFx0Y29uc3QgZGF0YSA9IEpTT04ucGFyc2UocmVzLmRhdGEpO1xyXG5cdFx0XHRcdFx0XHRjb25zb2xlLmxvZyhkYXRhKTtcclxuXHRcdFx0XHRcdFx0aWYgKGRhdGEuY29kZSA9PT0xKXtcclxuXHRcdFx0XHRcdFx0XHRfdGhpcy5zZXREYXRhISh7XHJcblx0XHRcdFx0XHRcdFx0XHRpZF9jYXJkX3Bvc2l0aXZlOiBkYXRhLmRhdGFcclxuXHRcdFx0XHRcdFx0XHR9KTtcclxuXHRcdFx0XHRcdFx0fVxyXG5cdFx0XHRcdFx0fVxyXG5cdFx0XHRcdH0pXHJcblx0XHRcdFx0Y29uc29sZS5sb2codGVtcEZpbGVQYXRocyk7XHJcblx0XHRcdH1cclxuXHRcdH0pXHJcblx0fSxcclxuICB5dWxhbigpe1xyXG4gICAgd3gucHJldmlld0ltYWdlKHtcclxuICAgICAgY3VycmVudDogdGhpcy5kYXRhLmlkX2NhcmRfcG9zaXRpdmUsIC8vIOW9k+WJjeaYvuekuuWbvueJh+eahGh0dHDpk77mjqVcclxuICAgICAgdXJsczogW3RoaXMuZGF0YS5pZF9jYXJkX3Bvc2l0aXZlXSAvLyDpnIDopoHpooTop4jnmoTlm77niYdodHRw6ZO+5o6l5YiX6KGoXHJcbiAgICB9KVxyXG4gIH0sXHJcbiAgeXVsYW5GKCl7XHJcbiAgICB3eC5wcmV2aWV3SW1hZ2Uoe1xyXG4gICAgICBjdXJyZW50OiB0aGlzLmRhdGEuaWRfY2FyZF9jb250cmFyeSwgLy8g5b2T5YmN5pi+56S65Zu+54mH55qEaHR0cOmTvuaOpVxyXG4gICAgICB1cmxzOiBbdGhpcy5kYXRhLmlkX2NhcmRfY29udHJhcnldIC8vIOmcgOimgemihOiniOeahOWbvueJh2h0dHDpk77mjqXliJfooahcclxuICAgIH0pXHJcbiAgfSxcclxuXHJcblx0Y2hvb3NlQm90dG9tKCkge1xyXG5cdFx0aWYgKHRoaXMuZGF0YS5kaXNhYmxlZCkge1xyXG5cdFx0XHRyZXR1cm5cclxuXHRcdH1cclxuXHRcdGxldCBfdGhpcyA9IHRoaXM7XHJcblx0XHR3eC5jaG9vc2VJbWFnZSh7XHJcblx0XHRcdGNvdW50OiAxLFxyXG5cdFx0XHRzaXplVHlwZTogWydvcmlnaW5hbCcsICdjb21wcmVzc2VkJ10sXHJcblx0XHRcdHNvdXJjZVR5cGU6IFsnYWxidW0nLCAnY2FtZXJhJ10sXHJcblx0XHRcdHN1Y2Nlc3MocmVzKSB7XHJcblx0XHRcdFx0Ly8gdGVtcEZpbGVQYXRo5Y+v5Lul5L2c5Li6aW1n5qCH562+55qEc3Jj5bGe5oCn5pi+56S65Zu+54mHXHJcblx0XHRcdFx0Y29uc3QgdGVtcEZpbGVQYXRocyA9IHJlcy50ZW1wRmlsZVBhdGhzO1xyXG5cdFx0XHRcdF90aGlzLnNldERhdGEhKHtcclxuXHRcdFx0XHRcdGlkX2NhcmRfY29udHJhcnk6IHRlbXBGaWxlUGF0aHNcclxuXHRcdFx0XHR9KTtcclxuXHRcdFx0XHR3eC51cGxvYWRGaWxlKHtcclxuXHRcdFx0XHRcdHVybDogYmFzZSsgJy9hcGkvdXBsb2FkX2ltZycsIC8v5LuF5Li656S65L6L77yM6Z2e55yf5a6e55qE5o6l5Y+j5Zyw5Z2AXHJcblx0XHRcdFx0XHRmaWxlUGF0aDogdGVtcEZpbGVQYXRoc1swXSxcclxuXHRcdFx0XHRcdG5hbWU6ICdpbWFnZScsXHJcblx0XHRcdFx0XHQvLyBmb3JtRGF0YToge1xyXG5cdFx0XHRcdFx0Ly8gXHQndXNlcic6ICd0ZXN0J1xyXG5cdFx0XHRcdFx0Ly8gfSxcclxuXHRcdFx0XHRcdHN1Y2Nlc3MgKHJlcyl7XHJcblx0XHRcdFx0XHRcdGNvbnN0IGRhdGEgPSBKU09OLnBhcnNlKHJlcy5kYXRhKTtcclxuXHRcdFx0XHRcdFx0Y29uc29sZS5sb2coZGF0YSk7XHJcblx0XHRcdFx0XHRcdGlmIChkYXRhLmNvZGUgPT09MSl7XHJcblx0XHRcdFx0XHRcdFx0X3RoaXMuc2V0RGF0YSEoe1xyXG5cdFx0XHRcdFx0XHRcdFx0aWRfY2FyZF9jb250cmFyeTogZGF0YS5kYXRhXHJcblx0XHRcdFx0XHRcdFx0fSk7XHJcblx0XHRcdFx0XHRcdH1cclxuXHRcdFx0XHRcdH1cclxuXHRcdFx0XHR9KTtcclxuXHRcdFx0XHRjb25zb2xlLmxvZyh0ZW1wRmlsZVBhdGhzKTtcclxuXHRcdFx0fVxyXG5cdFx0fSlcclxuXHR9LFxyXG5cdGRvVXBkYXRlQmFzaWNJbmZvcm1hdGlvbigpIHtcclxuXHRcdGNvbnN0IHtuYW1lLHRva2VuLGlkX2NhcmQsaWRfY2FyZF9jb250cmFyeSxpZF9jYXJkX3Bvc2l0aXZlfSA9IHRoaXMuZGF0YTtcclxuXHRcdGlmICghbmFtZSB8fCAhdG9rZW4gfHwgIWlkX2NhcmRfcG9zaXRpdmUgfHwgIWlkX2NhcmRfY29udHJhcnkgfHwgIWlkX2NhcmQpIHtcclxuXHRcdFx0d3guc2hvd1RvYXN0KHtcclxuXHRcdFx0XHR0aXRsZTogJ+ivt+ajgOafpeihqOWNleWhq+WGmeaYr+WQpuWujOaVtCcsXHJcblx0XHRcdFx0bWFzazogdHJ1ZSxcclxuXHRcdFx0XHRkdXJhdGlvbjogMjAwMCxcclxuXHRcdFx0XHRpY29uOiBcIm5vbmVcIlxyXG5cdFx0XHR9KTtcclxuXHRcdFx0cmV0dXJuO1xyXG5cdFx0fVxyXG5cdFx0Y29uc3QgZGF0YSA9IHtuYW1lLHRva2VuLGlkX2NhcmQsaWRfY2FyZF9jb250cmFyeSxpZF9jYXJkX3Bvc2l0aXZlfTtcclxuXHRcdHJlcVVwZGF0ZUJhc2ljSW5mb3JtYXRpb24oZGF0YSkudGhlbihcclxuXHRcdFx0cmVzID0+IHtcclxuXHRcdFx0XHRjb25zb2xlLmxvZyhyZXMpO1xyXG5cdFx0XHRcdGlmIChyZXMuY29kZSA9PT0gMSkge1xyXG5cdFx0XHRcdFx0d3guc2hvd1RvYXN0KHtcclxuXHRcdFx0XHRcdFx0dGl0bGU6ICfkv67mlLnmiJDlip8nLFxyXG5cdFx0XHRcdFx0XHRtYXNrOiB0cnVlLFxyXG5cdFx0XHRcdFx0XHRkdXJhdGlvbjogMjAwMCxcclxuXHRcdFx0XHRcdFx0c3VjY2VzcygpIHtcclxuXHRcdFx0XHRcdFx0XHR3eC5uYXZpZ2F0ZUJhY2soe1xyXG5cdFx0XHRcdFx0XHRcdFx0ZGVsdGE6IDFcclxuXHRcdFx0XHRcdFx0XHR9KVxyXG5cdFx0XHRcdFx0XHR9XHJcblx0XHRcdFx0XHR9KVxyXG5cclxuXHRcdFx0XHR9XHJcblx0XHRcdH1cclxuXHRcdClcclxuXHR9LFxyXG5cclxuXHRnZXRJbmZvcigpIHtcclxuXHRcdHd4LnNob3dMb2FkaW5nKHtcclxuXHRcdFx0dGl0bGU6ICcnLFxyXG5cdFx0XHRtYXNrOiB0cnVlXHJcblx0XHR9KVxyXG5cdFx0Y29uc3Qge3Rva2VuLHN0YXRlfSA9IHRoaXMuZGF0YTtcclxuXHRcdHJlcVVzZXJJbmZvcm1hdGlvbih7dG9rZW59KS50aGVuKFxyXG5cdFx0XHQocmVzOiBhbnkpID0+IHtcclxuXHRcdFx0XHRpZiAocmVzLmNvZGUgPT09IDEpIHtcclxuXHRcdFx0XHRcdHd4LmhpZGVMb2FkaW5nKCk7XHJcblxyXG5cdFx0XHRcdFx0Y29uc3Qge25hbWUsIGlkX2NhcmQsIGlkX2NhcmRfY29udHJhcnksIGlkX2NhcmRfcG9zaXRpdmUsaWRlbnRpdHl9ID0gcmVzLmRhdGE7XHJcblx0XHRcdFx0XHRjb25zb2xlLmxvZyhuYW1lLCBpZF9jYXJkLCBpZF9jYXJkX2NvbnRyYXJ5LCBpZF9jYXJkX3Bvc2l0aXZlKTtcclxuXHRcdFx0XHRcdGlmIChuYW1lIHx8IGlkX2NhcmQgfHwgaWRfY2FyZF9jb250cmFyeSB8fCBpZF9jYXJkX3Bvc2l0aXZlKSB7XHJcblx0XHRcdFx0XHRcdHRoaXMuc2V0RGF0YSEoe1xyXG5cdFx0XHRcdFx0XHRcdGRpc2FibGVkOiB0cnVlLFxyXG5cdFx0XHRcdFx0XHRcdG5hbWUsXHJcblx0XHRcdFx0XHRcdFx0aWRfY2FyZCxcclxuXHRcdFx0XHRcdFx0XHRpZF9jYXJkX2NvbnRyYXJ5LFxyXG5cdFx0XHRcdFx0XHRcdGlkX2NhcmRfcG9zaXRpdmUsXHJcblx0XHRcdFx0XHRcdFx0aWRlbnRpdHkgOiBzdGF0ZVtpZGVudGl0eV1cclxuXHRcdFx0XHRcdFx0fSlcclxuXHRcdFx0XHRcdH1cclxuXHJcblx0XHRcdFx0fVxyXG5cdFx0XHR9XHJcblx0XHQpXHJcblx0fVxyXG59KVxyXG4iXX0=