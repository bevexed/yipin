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
        state: ['供货商加盟', '加盟店加盟', '区域代理加盟']
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
                        identity: state[identity - 1]
                    });
                }
            }
        });
    }
});
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoicGVyc29uLmpzIiwic291cmNlUm9vdCI6IiIsInNvdXJjZXMiOlsicGVyc29uLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7O0FBQUEsc0NBQTJFO0FBQzNFLG9DQUFpQztBQUVqQyxJQUFJLENBQUM7SUFDSixJQUFJLEVBQUU7UUFDTCxLQUFLLEVBQUUsRUFBRTtRQUNULElBQUksRUFBRSxFQUFFO1FBQ1IsT0FBTyxFQUFFLEVBQUU7UUFDWCxnQkFBZ0IsRUFBRSxFQUFFO1FBQ3BCLGdCQUFnQixFQUFFLEVBQUU7UUFFcEIsUUFBUSxFQUFDLEVBQUU7UUFDWCxRQUFRLEVBQUUsS0FBSztRQUNmLEtBQUssRUFBRSxDQUFDLE9BQU8sRUFBRSxPQUFPLEVBQUUsUUFBUSxDQUFDO0tBRW5DO0lBQ0QsTUFBTSxFQUFOO1FBRUMsSUFBSSxLQUFLLEdBQUcsSUFBSSxDQUFDO1FBQ2pCLEVBQUUsQ0FBQyxVQUFVLENBQUM7WUFDYixHQUFHLEVBQUUsT0FBTztZQUNaLE9BQU8sRUFBUCxVQUFRLEdBQUc7Z0JBQ1YsT0FBTyxDQUFDLEdBQUcsQ0FBQyxHQUFHLENBQUMsQ0FBQztnQkFDakIsS0FBSyxDQUFDLE9BQVEsQ0FBQztvQkFDZCxLQUFLLEVBQUUsR0FBRyxDQUFDLElBQUk7aUJBQ2QsRUFBRSxjQUFNLE9BQUEsS0FBSyxDQUFDLFFBQVEsRUFBRSxFQUFoQixDQUFnQixDQUN6QixDQUFBO1lBQ0YsQ0FBQztTQUNELENBQUMsQ0FBQztJQUNKLENBQUM7SUFFRCxLQUFLLEVBQUwsVUFBTSxDQUFNOztRQUNYLE9BQU8sQ0FBQyxHQUFHLENBQUMsQ0FBQyxDQUFDLENBQUM7UUFDZixJQUFNLEtBQUssR0FBRyxDQUFDLENBQUMsTUFBTSxDQUFDLE9BQU8sQ0FBQyxJQUFJLENBQUM7UUFDcEMsSUFBTSxLQUFLLEdBQUcsQ0FBQyxDQUFDLE1BQU0sQ0FBQyxNQUFNLENBQUMsS0FBSyxDQUFDO1FBQ3BDLE9BQU8sQ0FBQyxHQUFHLENBQUMsS0FBSyxDQUFDLENBQUM7UUFD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QyxRQUFRLEdBQUcsQ0FBQyxDQUFDO3FCQUM5QixDQUFDLENBQUE7aUJBQ0Y7YUFFRDtRQUNGLENBQUMsQ0FDRCxDQUFBO0lBQ0YsQ0FBQztDQUNELENBQUMsQ0FBQSIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7cmVxVXBkYXRlQmFzaWNJbmZvcm1hdGlvbiwgcmVxVXNlckluZm9ybWF0aW9ufSBmcm9tIFwiLi4vYXBpL2luZGV4XCI7XG5pbXBvcnQge2Jhc2V9IGZyb20gXCIuLi9hcGkvYWpheFwiO1xuXG5QYWdlKHtcblx0ZGF0YToge1xuXHRcdHRva2VuOiAnJyxcblx0XHRuYW1lOiAnJyxcblx0XHRpZF9jYXJkOiAnJyxcblx0XHRpZF9jYXJkX3Bvc2l0aXZlOiAnJyxcblx0XHRpZF9jYXJkX2NvbnRyYXJ5OiAnJyxcblxuXHRcdGlkZW50aXR5OicnLFxuXHRcdGRpc2FibGVkOiBmYWxzZSxcblx0XHRzdGF0ZTogWyfkvpvotKfllYbliqDnm58nLCAn5Yqg55uf5bqX5Yqg55ufJywgJ+WMuuWfn+S7o+eQhuWKoOebnyddXG5cdFx0Ly8gMe+8muS+m+i0p+WVhu+8mzLvvJrliqDnm5/lupfvvJsz77ya5Yy65Z+f5Luj55CGXG5cdH0sXG5cdG9uTG9hZCgpIHtcblx0XHQvLyDor7vlj5Z0b2tlblxuXHRcdGxldCBfdGhpcyA9IHRoaXM7XG5cdFx0d3guZ2V0U3RvcmFnZSh7XG5cdFx0XHRrZXk6ICd0b2tlbicsXG5cdFx0XHRzdWNjZXNzKHJlcykge1xuXHRcdFx0XHRjb25zb2xlLmxvZyhyZXMpO1xuXHRcdFx0XHRfdGhpcy5zZXREYXRhISh7XG5cdFx0XHRcdFx0dG9rZW46IHJlcy5kYXRhXG5cdFx0XHRcdFx0fSwgKCkgPT4gX3RoaXMuZ2V0SW5mb3IoKVxuXHRcdFx0XHQpXG5cdFx0XHR9XG5cdFx0fSk7XG5cdH0sXG5cblx0aW5wdXQoZTogYW55KSB7XG5cdFx0Y29uc29sZS5sb2coZSk7XG5cdFx0Y29uc3QgbGFiZWwgPSBlLnRhcmdldC5kYXRhc2V0LnR5cGU7XG5cdFx0Y29uc3QgdmFsdWUgPSBlLmRldGFpbC5kZXRhaWwudmFsdWU7XG5cdFx0Y29uc29sZS5sb2codmFsdWUpO1xuXHRcdHRoaXMuc2V0RGF0YSEoe1xuXHRcdFx0W2xhYmVsXTogdmFsdWVcblx0XHR9KTtcblxuXHRcdGNvbnNvbGUubG9nKGxhYmVsLCB2YWx1ZSk7XG5cdH0sXG5cblx0Y2hvb3NlVG9wKCkge1xuXHRcdGlmICh0aGlzLmRhdGEuZGlzYWJsZWQpIHtcblx0XHRcdHJldHVyblxuXHRcdH1cblx0XHRsZXQgX3RoaXMgPSB0aGlzO1xuXHRcdHd4LmNob29zZUltYWdlKHtcblx0XHRcdGNvdW50OiAxLFxuXHRcdFx0c2l6ZVR5cGU6IFsnb3JpZ2luYWwnLCAnY29tcHJlc3NlZCddLFxuXHRcdFx0c291cmNlVHlwZTogWydhbGJ1bScsICdjYW1lcmEnXSxcblx0XHRcdHN1Y2Nlc3MocmVzKSB7XG5cdFx0XHRcdC8vIHRlbXBGaWxlUGF0aOWPr+S7peS9nOS4umltZ+agh+etvueahHNyY+WxnuaAp+aYvuekuuWbvueJh1xuXHRcdFx0XHRjb25zb2xlLmxvZyhyZXMpO1xuXHRcdFx0XHRjb25zdCB0ZW1wRmlsZVBhdGhzID0gcmVzLnRlbXBGaWxlUGF0aHM7XG5cdFx0XHRcdF90aGlzLnNldERhdGEhKHtcblx0XHRcdFx0XHRpZF9jYXJkX3Bvc2l0aXZlOiB0ZW1wRmlsZVBhdGhzXG5cdFx0XHRcdH0pO1xuXG5cdFx0XHRcdHd4LnVwbG9hZEZpbGUoe1xuXHRcdFx0XHRcdHVybDogYmFzZSArICcvYXBpL3VwbG9hZF9pbWcnLCAvL+S7heS4uuekuuS+i++8jOmdnuecn+WunueahOaOpeWPo+WcsOWdgFxuXHRcdFx0XHRcdGZpbGVQYXRoOiB0ZW1wRmlsZVBhdGhzWzBdLFxuXHRcdFx0XHRcdG5hbWU6ICdpbWFnZScsXG5cdFx0XHRcdFx0Ly8gZm9ybURhdGE6IHtcblx0XHRcdFx0XHQvLyBcdCd1c2VyJzogJ3Rlc3QnXG5cdFx0XHRcdFx0Ly8gfSxcblx0XHRcdFx0XHRzdWNjZXNzIChyZXMpe1xuXHRcdFx0XHRcdFx0Y29uc3QgZGF0YSA9IEpTT04ucGFyc2UocmVzLmRhdGEpO1xuXHRcdFx0XHRcdFx0Y29uc29sZS5sb2coZGF0YSk7XG5cdFx0XHRcdFx0XHRpZiAoZGF0YS5jb2RlID09PTEpe1xuXHRcdFx0XHRcdFx0XHRfdGhpcy5zZXREYXRhISh7XG5cdFx0XHRcdFx0XHRcdFx0aWRfY2FyZF9wb3NpdGl2ZTogZGF0YS5kYXRhXG5cdFx0XHRcdFx0XHRcdH0pO1xuXHRcdFx0XHRcdFx0fVxuXHRcdFx0XHRcdH1cblx0XHRcdFx0fSlcblx0XHRcdFx0Y29uc29sZS5sb2codGVtcEZpbGVQYXRocyk7XG5cdFx0XHR9XG5cdFx0fSlcblx0fSxcbiAgeXVsYW4oKXtcbiAgICB3eC5wcmV2aWV3SW1hZ2Uoe1xuICAgICAgY3VycmVudDogdGhpcy5kYXRhLmlkX2NhcmRfcG9zaXRpdmUsIC8vIOW9k+WJjeaYvuekuuWbvueJh+eahGh0dHDpk77mjqVcbiAgICAgIHVybHM6IFt0aGlzLmRhdGEuaWRfY2FyZF9wb3NpdGl2ZV0gLy8g6ZyA6KaB6aKE6KeI55qE5Zu+54mHaHR0cOmTvuaOpeWIl+ihqFxuICAgIH0pXG4gIH0sXG4gIHl1bGFuRigpe1xuICAgIHd4LnByZXZpZXdJbWFnZSh7XG4gICAgICBjdXJyZW50OiB0aGlzLmRhdGEuaWRfY2FyZF9jb250cmFyeSwgLy8g5b2T5YmN5pi+56S65Zu+54mH55qEaHR0cOmTvuaOpVxuICAgICAgdXJsczogW3RoaXMuZGF0YS5pZF9jYXJkX2NvbnRyYXJ5XSAvLyDpnIDopoHpooTop4jnmoTlm77niYdodHRw6ZO+5o6l5YiX6KGoXG4gICAgfSlcbiAgfSxcblxuXHRjaG9vc2VCb3R0b20oKSB7XG5cdFx0aWYgKHRoaXMuZGF0YS5kaXNhYmxlZCkge1xuXHRcdFx0cmV0dXJuXG5cdFx0fVxuXHRcdGxldCBfdGhpcyA9IHRoaXM7XG5cdFx0d3guY2hvb3NlSW1hZ2Uoe1xuXHRcdFx0Y291bnQ6IDEsXG5cdFx0XHRzaXplVHlwZTogWydvcmlnaW5hbCcsICdjb21wcmVzc2VkJ10sXG5cdFx0XHRzb3VyY2VUeXBlOiBbJ2FsYnVtJywgJ2NhbWVyYSddLFxuXHRcdFx0c3VjY2VzcyhyZXMpIHtcblx0XHRcdFx0Ly8gdGVtcEZpbGVQYXRo5Y+v5Lul5L2c5Li6aW1n5qCH562+55qEc3Jj5bGe5oCn5pi+56S65Zu+54mHXG5cdFx0XHRcdGNvbnN0IHRlbXBGaWxlUGF0aHMgPSByZXMudGVtcEZpbGVQYXRocztcblx0XHRcdFx0X3RoaXMuc2V0RGF0YSEoe1xuXHRcdFx0XHRcdGlkX2NhcmRfY29udHJhcnk6IHRlbXBGaWxlUGF0aHNcblx0XHRcdFx0fSk7XG5cdFx0XHRcdHd4LnVwbG9hZEZpbGUoe1xuXHRcdFx0XHRcdHVybDogYmFzZSsgJy9hcGkvdXBsb2FkX2ltZycsIC8v5LuF5Li656S65L6L77yM6Z2e55yf5a6e55qE5o6l5Y+j5Zyw5Z2AXG5cdFx0XHRcdFx0ZmlsZVBhdGg6IHRlbXBGaWxlUGF0aHNbMF0sXG5cdFx0XHRcdFx0bmFtZTogJ2ltYWdlJyxcblx0XHRcdFx0XHQvLyBmb3JtRGF0YToge1xuXHRcdFx0XHRcdC8vIFx0J3VzZXInOiAndGVzdCdcblx0XHRcdFx0XHQvLyB9LFxuXHRcdFx0XHRcdHN1Y2Nlc3MgKHJlcyl7XG5cdFx0XHRcdFx0XHRjb25zdCBkYXRhID0gSlNPTi5wYXJzZShyZXMuZGF0YSk7XG5cdFx0XHRcdFx0XHRjb25zb2xlLmxvZyhkYXRhKTtcblx0XHRcdFx0XHRcdGlmIChkYXRhLmNvZGUgPT09MSl7XG5cdFx0XHRcdFx0XHRcdF90aGlzLnNldERhdGEhKHtcblx0XHRcdFx0XHRcdFx0XHRpZF9jYXJkX2NvbnRyYXJ5OiBkYXRhLmRhdGFcblx0XHRcdFx0XHRcdFx0fSk7XG5cdFx0XHRcdFx0XHR9XG5cdFx0XHRcdFx0fVxuXHRcdFx0XHR9KTtcblx0XHRcdFx0Y29uc29sZS5sb2codGVtcEZpbGVQYXRocyk7XG5cdFx0XHR9XG5cdFx0fSlcblx0fSxcblx0ZG9VcGRhdGVCYXNpY0luZm9ybWF0aW9uKCkge1xuXHRcdGNvbnN0IHtuYW1lLHRva2VuLGlkX2NhcmQsaWRfY2FyZF9jb250cmFyeSxpZF9jYXJkX3Bvc2l0aXZlfSA9IHRoaXMuZGF0YTtcblx0XHRpZiAoIW5hbWUgfHwgIXRva2VuIHx8ICFpZF9jYXJkX3Bvc2l0aXZlIHx8ICFpZF9jYXJkX2NvbnRyYXJ5IHx8ICFpZF9jYXJkKSB7XG5cdFx0XHR3eC5zaG93VG9hc3Qoe1xuXHRcdFx0XHR0aXRsZTogJ+ivt+ajgOafpeihqOWNleWhq+WGmeaYr+WQpuWujOaVtCcsXG5cdFx0XHRcdG1hc2s6IHRydWUsXG5cdFx0XHRcdGR1cmF0aW9uOiAyMDAwLFxuXHRcdFx0XHRpY29uOiBcIm5vbmVcIlxuXHRcdFx0fSk7XG5cdFx0XHRyZXR1cm47XG5cdFx0fVxuXHRcdGNvbnN0IGRhdGEgPSB7bmFtZSx0b2tlbixpZF9jYXJkLGlkX2NhcmRfY29udHJhcnksaWRfY2FyZF9wb3NpdGl2ZX07XG5cdFx0cmVxVXBkYXRlQmFzaWNJbmZvcm1hdGlvbihkYXRhKS50aGVuKFxuXHRcdFx0cmVzID0+IHtcblx0XHRcdFx0Y29uc29sZS5sb2cocmVzKTtcblx0XHRcdFx0aWYgKHJlcy5jb2RlID09PSAxKSB7XG5cdFx0XHRcdFx0d3guc2hvd1RvYXN0KHtcblx0XHRcdFx0XHRcdHRpdGxlOiAn5L+u5pS55oiQ5YqfJyxcblx0XHRcdFx0XHRcdG1hc2s6IHRydWUsXG5cdFx0XHRcdFx0XHRkdXJhdGlvbjogMjAwMCxcblx0XHRcdFx0XHRcdHN1Y2Nlc3MoKSB7XG5cdFx0XHRcdFx0XHRcdHd4Lm5hdmlnYXRlQmFjayh7XG5cdFx0XHRcdFx0XHRcdFx0ZGVsdGE6IDFcblx0XHRcdFx0XHRcdFx0fSlcblx0XHRcdFx0XHRcdH1cblx0XHRcdFx0XHR9KVxuXG5cdFx0XHRcdH1cblx0XHRcdH1cblx0XHQpXG5cdH0sXG5cblx0Z2V0SW5mb3IoKSB7XG5cdFx0d3guc2hvd0xvYWRpbmcoe1xuXHRcdFx0dGl0bGU6ICcnLFxuXHRcdFx0bWFzazogdHJ1ZVxuXHRcdH0pXG5cdFx0Y29uc3Qge3Rva2VuLHN0YXRlfSA9IHRoaXMuZGF0YTtcblx0XHRyZXFVc2VySW5mb3JtYXRpb24oe3Rva2VufSkudGhlbihcblx0XHRcdChyZXM6IGFueSkgPT4ge1xuXHRcdFx0XHRpZiAocmVzLmNvZGUgPT09IDEpIHtcblx0XHRcdFx0XHR3eC5oaWRlTG9hZGluZygpO1xuXG5cdFx0XHRcdFx0Y29uc3Qge25hbWUsIGlkX2NhcmQsIGlkX2NhcmRfY29udHJhcnksIGlkX2NhcmRfcG9zaXRpdmUsaWRlbnRpdHl9ID0gcmVzLmRhdGE7XG5cdFx0XHRcdFx0Y29uc29sZS5sb2cobmFtZSwgaWRfY2FyZCwgaWRfY2FyZF9jb250cmFyeSwgaWRfY2FyZF9wb3NpdGl2ZSk7XG5cdFx0XHRcdFx0aWYgKG5hbWUgfHwgaWRfY2FyZCB8fCBpZF9jYXJkX2NvbnRyYXJ5IHx8IGlkX2NhcmRfcG9zaXRpdmUpIHtcblx0XHRcdFx0XHRcdHRoaXMuc2V0RGF0YSEoe1xuXHRcdFx0XHRcdFx0XHRkaXNhYmxlZDogdHJ1ZSxcblx0XHRcdFx0XHRcdFx0bmFtZSxcblx0XHRcdFx0XHRcdFx0aWRfY2FyZCxcblx0XHRcdFx0XHRcdFx0aWRfY2FyZF9jb250cmFyeSxcblx0XHRcdFx0XHRcdFx0aWRfY2FyZF9wb3NpdGl2ZSxcblx0XHRcdFx0XHRcdFx0aWRlbnRpdHkgOiBzdGF0ZVtpZGVudGl0eSAtIDFdXG5cdFx0XHRcdFx0XHR9KVxuXHRcdFx0XHRcdH1cblxuXHRcdFx0XHR9XG5cdFx0XHR9XG5cdFx0KVxuXHR9XG59KVxuIl19