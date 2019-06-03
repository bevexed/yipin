"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var index_1 = require("../api/index");
Page({
    data: {
        token: '',
        alipay_account: '',
        alipay_name: '',
        bank_name: '',
        bank_number: '',
        bank_type: '',
        opening_bank: '',
        disabled: false
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
    doUpdateBasicInformation: function () {
        var _a = this.data, token = _a.token, alipay_account = _a.alipay_account, alipay_name = _a.alipay_name, bank_name = _a.bank_name, bank_number = _a.bank_number, bank_type = _a.bank_type, opening_bank = _a.opening_bank;
        if (!token ||
            !alipay_account ||
            !alipay_name ||
            !bank_name ||
            !bank_number ||
            !bank_type ||
            !opening_bank) {
            wx.showToast({
                title: '请检查表单',
                icon: "none",
                mask: true,
                duration: 2000,
            });
            return;
        }
        index_1.requpdate_gathering_information(this.data).then(function (res) {
            if (res.code === 1) {
                wx.showToast({
                    title: '修改成功',
                    mask: true,
                    duration: 2000,
                    success: function () {
                        setTimeout(function () {
                            wx.switchTab({
                                url: '../pages/index/index'
                            });
                        }, 2000);
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
        var token = this.data.token;
        index_1.reqUserInformation({ token: token }).then(function (res) {
            if (res.code === 1) {
                wx.hideLoading();
                console.log(res);
                var _a = res.data, alipay_account = _a.alipay_account, alipay_name = _a.alipay_name, bank_name = _a.bank_name, bank_number = _a.bank_number, bank_type = _a.bank_type, opening_bank = _a.opening_bank;
                _this_1.setData({
                    disabled: true,
                    alipay_account: alipay_account,
                    alipay_name: alipay_name,
                    bank_name: bank_name,
                    bank_number: bank_number,
                    bank_type: bank_type,
                    opening_bank: opening_bank
                });
            }
        });
    }
});
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiY29sbGVjdC5qcyIsInNvdXJjZVJvb3QiOiIiLCJzb3VyY2VzIjpbImNvbGxlY3QudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7QUFBQSxzQ0FBaUY7QUFFakYsSUFBSSxDQUFDO0lBQ0osSUFBSSxFQUFFO1FBQ0wsS0FBSyxFQUFFLEVBQUU7UUFDVCxjQUFjLEVBQUUsRUFBRTtRQUNsQixXQUFXLEVBQUUsRUFBRTtRQUNmLFNBQVMsRUFBRSxFQUFFO1FBQ2IsV0FBVyxFQUFFLEVBQUU7UUFDZixTQUFTLEVBQUUsRUFBRTtRQUNiLFlBQVksRUFBRSxFQUFFO1FBQ2hCLFFBQVEsRUFBRSxLQUFLO0tBQ2Y7SUFDRCxNQUFNLEVBQU47UUFFQyxJQUFJLEtBQUssR0FBRyxJQUFJLENBQUM7UUFDakIsRUFBRSxDQUFDLFVBQVUsQ0FBQztZQUNiLEdBQUcsRUFBRSxPQUFPO1lBQ1osT0FBTyxFQUFQLFVBQVEsR0FBRztnQkFDVixPQUFPLENBQUMsR0FBRyxDQUFDLEdBQUcsQ0FBQyxDQUFDO2dCQUNqQixLQUFLLENBQUMsT0FBUSxDQUFDO29CQUNkLEtBQUssRUFBRSxHQUFHLENBQUMsSUFBSTtpQkFDZixFQUFFLGNBQU0sT0FBQSxLQUFLLENBQUMsUUFBUSxFQUFFLEVBQWhCLENBQWdCLENBQUMsQ0FBQTtZQUMzQixDQUFDO1NBQ0QsQ0FBQyxDQUFDO0lBR0osQ0FBQztJQUVELEtBQUssRUFBTCxVQUFNLENBQU07O1FBQ1gsT0FBTyxDQUFDLEdBQUcsQ0FBQyxDQUFDLENBQUMsQ0FBQztRQUNmLElBQU0sS0FBSyxHQUFHLENBQUMsQ0FBQyxNQUFNLENBQUMsT0FBTyxDQUFDLElBQUksQ0FBQztRQUNwQyxJQUFNLEtBQUssR0FBRyxDQUFDLENBQUMsTUFBTSxDQUFDLE1BQU0sQ0FBQyxLQUFLLENBQUM7UUFDcEMsT0FBTyxDQUFDLEdBQUcsQ0FBQyxLQUFLLENBQUMsQ0FBQztRQUNuQixJQUFJLENBQUMsT0FBUTtZQUNaLEdBQUMsS0FBSyxJQUFHLEtBQUs7Z0JBQ2IsQ0FBQztRQUVILE9BQU8sQ0FBQyxHQUFHLENBQUMsS0FBSyxFQUFFLEtBQUssQ0FBQyxDQUFDO0lBQzNCLENBQUM7SUFFRCxTQUFTLEVBQVQ7UUFDQyxJQUFJLEtBQUssR0FBRyxJQUFJLENBQUM7UUFDakIsRUFBRSxDQUFDLFdBQVcsQ0FBQztZQUNkLEtBQUssRUFBRSxDQUFDO1lBQ1IsUUFBUSxFQUFFLENBQUMsVUFBVSxFQUFFLFlBQVksQ0FBQztZQUNwQyxVQUFVLEVBQUUsQ0FBQyxPQUFPLEVBQUUsUUFBUSxDQUFDO1lBQy9CLE9BQU8sRUFBUCxVQUFRLEdBQUc7Z0JBRVYsT0FBTyxDQUFDLEdBQUcsQ0FBQyxHQUFHLENBQUMsQ0FBQztnQkFDakIsSUFBTSxhQUFhLEdBQUcsR0FBRyxDQUFDLGFBQWEsQ0FBQztnQkFDeEMsS0FBSyxDQUFDLE9BQVEsQ0FBQztvQkFDZCxnQkFBZ0IsRUFBRSxhQUFhO2lCQUMvQixDQUFDLENBQUM7Z0JBQ0gsT0FBTyxDQUFDLEdBQUcsQ0FBQyxhQUFhLENBQUMsQ0FBQztZQUM1QixDQUFDO1NBQ0QsQ0FBQyxDQUFBO0lBQ0gsQ0FBQztJQUVELFlBQVksRUFBWjtRQUNDLElBQUksS0FBSyxHQUFHLElBQUksQ0FBQztRQUNqQixFQUFFLENBQUMsV0FBVyxDQUFDO1lBQ2QsS0FBSyxFQUFFLENBQUM7WUFDUixRQUFRLEVBQUUsQ0FBQyxVQUFVLEVBQUUsWUFBWSxDQUFDO1lBQ3BDLFVBQVUsRUFBRSxDQUFDLE9BQU8sRUFBRSxRQUFRLENBQUM7WUFDL0IsT0FBTyxFQUFQLFVBQVEsR0FBRztnQkFFVixJQUFNLGFBQWEsR0FBRyxHQUFHLENBQUMsYUFBYSxDQUFDO2dCQUN4QyxLQUFLLENBQUMsT0FBUSxDQUFDO29CQUNkLGdCQUFnQixFQUFFLGFBQWE7aUJBQy9CLENBQUMsQ0FBQztnQkFDSCxPQUFPLENBQUMsR0FBRyxDQUFDLGFBQWEsQ0FBQyxDQUFDO1lBQzVCLENBQUM7U0FDRCxDQUFDLENBQUE7SUFDSCxDQUFDO0lBRUQsd0JBQXdCO1FBQ2pCLElBQUEsY0FRTyxFQVBaLGdCQUFLLEVBQ0wsa0NBQWMsRUFDZCw0QkFBVyxFQUNYLHdCQUFTLEVBQ1QsNEJBQVcsRUFDWCx3QkFBUyxFQUNULDhCQUNZLENBQUM7UUFFZCxJQUNDLENBQUMsS0FBSztZQUNOLENBQUMsY0FBYztZQUNmLENBQUMsV0FBVztZQUNaLENBQUMsU0FBUztZQUNWLENBQUMsV0FBVztZQUNaLENBQUMsU0FBUztZQUNWLENBQUMsWUFBWSxFQUNaO1lBQ0QsRUFBRSxDQUFDLFNBQVMsQ0FBQztnQkFDWixLQUFLLEVBQUUsT0FBTztnQkFDZCxJQUFJLEVBQUUsTUFBTTtnQkFDWixJQUFJLEVBQUUsSUFBSTtnQkFDVixRQUFRLEVBQUUsSUFBSTthQUNkLENBQUMsQ0FBQztZQUNILE9BQU07U0FFTjtRQUVELHVDQUErQixDQUFDLElBQUksQ0FBQyxJQUFJLENBQUMsQ0FBQyxJQUFJLENBQUMsVUFBQSxHQUFHO1lBQ2xELElBQUksR0FBRyxDQUFDLElBQUksS0FBSyxDQUFDLEVBQUU7Z0JBQ25CLEVBQUUsQ0FBQyxTQUFTLENBQUM7b0JBQ1osS0FBSyxFQUFFLE1BQU07b0JBQ2IsSUFBSSxFQUFFLElBQUk7b0JBQ1YsUUFBUSxFQUFFLElBQUk7b0JBQ2QsT0FBTzt3QkFDTixVQUFVLENBQUM7NEJBQ1YsRUFBRSxDQUFDLFNBQVMsQ0FBQztnQ0FDWixHQUFHLEVBQUUsc0JBQXNCOzZCQUMzQixDQUFDLENBQUE7d0JBQ0gsQ0FBQyxFQUFFLElBQUksQ0FBQyxDQUFBO29CQUNULENBQUM7aUJBQ0QsQ0FBQyxDQUFBO2FBRUY7UUFDRixDQUFDLENBQUMsQ0FBQTtJQUNILENBQUM7SUFFRCxRQUFRLEVBQVI7UUFBQSxtQkFnQ0M7UUEvQkEsRUFBRSxDQUFDLFdBQVcsQ0FBQztZQUNkLEtBQUssRUFBRSxFQUFFO1lBQ1QsSUFBSSxFQUFFLElBQUk7U0FDVixDQUFDLENBQUE7UUFDSyxJQUFBLHVCQUFLLENBQWM7UUFDMUIsMEJBQWtCLENBQUMsRUFBQyxLQUFLLE9BQUEsRUFBQyxDQUFDLENBQUMsSUFBSSxDQUMvQixVQUFDLEdBQVE7WUFDUixJQUFJLEdBQUcsQ0FBQyxJQUFJLEtBQUssQ0FBQyxFQUFFO2dCQUNuQixFQUFFLENBQUMsV0FBVyxFQUFFLENBQUM7Z0JBQ2pCLE9BQU8sQ0FBQyxHQUFHLENBQUMsR0FBRyxDQUFDLENBQUM7Z0JBQ1gsSUFBQSxhQU9NLEVBTlgsa0NBQWMsRUFDZCw0QkFBVyxFQUNYLHdCQUFTLEVBQ1QsNEJBQVcsRUFDWCx3QkFBUyxFQUNULDhCQUNXLENBQUM7Z0JBQ2IsT0FBSSxDQUFDLE9BQVEsQ0FBQztvQkFDYixRQUFRLEVBQUUsSUFBSTtvQkFDZCxjQUFjLGdCQUFBO29CQUNkLFdBQVcsYUFBQTtvQkFDWCxTQUFTLFdBQUE7b0JBQ1QsV0FBVyxhQUFBO29CQUNYLFNBQVMsV0FBQTtvQkFDVCxZQUFZLGNBQUE7aUJBQ1osQ0FBQyxDQUFBO2FBRUY7UUFDRixDQUFDLENBQ0QsQ0FBQTtJQUNGLENBQUM7Q0FDRCxDQUFDLENBQUEiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQge3JlcXVwZGF0ZV9nYXRoZXJpbmdfaW5mb3JtYXRpb24sIHJlcVVzZXJJbmZvcm1hdGlvbn0gZnJvbSBcIi4uL2FwaS9pbmRleFwiO1xuXG5QYWdlKHtcblx0ZGF0YToge1xuXHRcdHRva2VuOiAnJyxcblx0XHRhbGlwYXlfYWNjb3VudDogJycsXG5cdFx0YWxpcGF5X25hbWU6ICcnLFxuXHRcdGJhbmtfbmFtZTogJycsXG5cdFx0YmFua19udW1iZXI6ICcnLFxuXHRcdGJhbmtfdHlwZTogJycsXG5cdFx0b3BlbmluZ19iYW5rOiAnJyxcblx0XHRkaXNhYmxlZDogZmFsc2Vcblx0fSxcblx0b25Mb2FkKCkge1xuXHRcdC8vIOivu+WPlnRva2VuXG5cdFx0bGV0IF90aGlzID0gdGhpcztcblx0XHR3eC5nZXRTdG9yYWdlKHtcblx0XHRcdGtleTogJ3Rva2VuJyxcblx0XHRcdHN1Y2Nlc3MocmVzKSB7XG5cdFx0XHRcdGNvbnNvbGUubG9nKHJlcyk7XG5cdFx0XHRcdF90aGlzLnNldERhdGEhKHtcblx0XHRcdFx0XHR0b2tlbjogcmVzLmRhdGFcblx0XHRcdFx0fSwgKCkgPT4gX3RoaXMuZ2V0SW5mb3IoKSlcblx0XHRcdH1cblx0XHR9KTtcblxuXG5cdH0sXG5cblx0aW5wdXQoZTogYW55KSB7XG5cdFx0Y29uc29sZS5sb2coZSk7XG5cdFx0Y29uc3QgbGFiZWwgPSBlLnRhcmdldC5kYXRhc2V0LnR5cGU7XG5cdFx0Y29uc3QgdmFsdWUgPSBlLmRldGFpbC5kZXRhaWwudmFsdWU7XG5cdFx0Y29uc29sZS5sb2codmFsdWUpO1xuXHRcdHRoaXMuc2V0RGF0YSEoe1xuXHRcdFx0W2xhYmVsXTogdmFsdWVcblx0XHR9KTtcblxuXHRcdGNvbnNvbGUubG9nKGxhYmVsLCB2YWx1ZSk7XG5cdH0sXG5cblx0Y2hvb3NlVG9wKCkge1xuXHRcdGxldCBfdGhpcyA9IHRoaXM7XG5cdFx0d3guY2hvb3NlSW1hZ2Uoe1xuXHRcdFx0Y291bnQ6IDEsXG5cdFx0XHRzaXplVHlwZTogWydvcmlnaW5hbCcsICdjb21wcmVzc2VkJ10sXG5cdFx0XHRzb3VyY2VUeXBlOiBbJ2FsYnVtJywgJ2NhbWVyYSddLFxuXHRcdFx0c3VjY2VzcyhyZXMpIHtcblx0XHRcdFx0Ly8gdGVtcEZpbGVQYXRo5Y+v5Lul5L2c5Li6aW1n5qCH562+55qEc3Jj5bGe5oCn5pi+56S65Zu+54mHXG5cdFx0XHRcdGNvbnNvbGUubG9nKHJlcyk7XG5cdFx0XHRcdGNvbnN0IHRlbXBGaWxlUGF0aHMgPSByZXMudGVtcEZpbGVQYXRocztcblx0XHRcdFx0X3RoaXMuc2V0RGF0YSEoe1xuXHRcdFx0XHRcdGlkX2NhcmRfcG9zaXRpdmU6IHRlbXBGaWxlUGF0aHNcblx0XHRcdFx0fSk7XG5cdFx0XHRcdGNvbnNvbGUubG9nKHRlbXBGaWxlUGF0aHMpO1xuXHRcdFx0fVxuXHRcdH0pXG5cdH0sXG5cblx0Y2hvb3NlQm90dG9tKCkge1xuXHRcdGxldCBfdGhpcyA9IHRoaXM7XG5cdFx0d3guY2hvb3NlSW1hZ2Uoe1xuXHRcdFx0Y291bnQ6IDEsXG5cdFx0XHRzaXplVHlwZTogWydvcmlnaW5hbCcsICdjb21wcmVzc2VkJ10sXG5cdFx0XHRzb3VyY2VUeXBlOiBbJ2FsYnVtJywgJ2NhbWVyYSddLFxuXHRcdFx0c3VjY2VzcyhyZXMpIHtcblx0XHRcdFx0Ly8gdGVtcEZpbGVQYXRo5Y+v5Lul5L2c5Li6aW1n5qCH562+55qEc3Jj5bGe5oCn5pi+56S65Zu+54mHXG5cdFx0XHRcdGNvbnN0IHRlbXBGaWxlUGF0aHMgPSByZXMudGVtcEZpbGVQYXRocztcblx0XHRcdFx0X3RoaXMuc2V0RGF0YSEoe1xuXHRcdFx0XHRcdGlkX2NhcmRfY29udHJhcnk6IHRlbXBGaWxlUGF0aHNcblx0XHRcdFx0fSk7XG5cdFx0XHRcdGNvbnNvbGUubG9nKHRlbXBGaWxlUGF0aHMpO1xuXHRcdFx0fVxuXHRcdH0pXG5cdH0sXG5cblx0ZG9VcGRhdGVCYXNpY0luZm9ybWF0aW9uKCkge1xuXHRcdGNvbnN0IHtcblx0XHRcdHRva2VuLFxuXHRcdFx0YWxpcGF5X2FjY291bnQsXG5cdFx0XHRhbGlwYXlfbmFtZSxcblx0XHRcdGJhbmtfbmFtZSxcblx0XHRcdGJhbmtfbnVtYmVyLFxuXHRcdFx0YmFua190eXBlLFxuXHRcdFx0b3BlbmluZ19iYW5rXG5cdFx0fSA9IHRoaXMuZGF0YTtcblxuXHRcdGlmIChcblx0XHRcdCF0b2tlbiB8fFxuXHRcdFx0IWFsaXBheV9hY2NvdW50IHx8XG5cdFx0XHQhYWxpcGF5X25hbWUgfHxcblx0XHRcdCFiYW5rX25hbWUgfHxcblx0XHRcdCFiYW5rX251bWJlciB8fFxuXHRcdFx0IWJhbmtfdHlwZSB8fFxuXHRcdFx0IW9wZW5pbmdfYmFua1xuXHRcdCkge1xuXHRcdFx0d3guc2hvd1RvYXN0KHtcblx0XHRcdFx0dGl0bGU6ICfor7fmo4Dmn6XooajljZUnLFxuXHRcdFx0XHRpY29uOiBcIm5vbmVcIixcblx0XHRcdFx0bWFzazogdHJ1ZSxcblx0XHRcdFx0ZHVyYXRpb246IDIwMDAsXG5cdFx0XHR9KTtcblx0XHRcdHJldHVyblxuXG5cdFx0fVxuXG5cdFx0cmVxdXBkYXRlX2dhdGhlcmluZ19pbmZvcm1hdGlvbih0aGlzLmRhdGEpLnRoZW4ocmVzID0+IHtcblx0XHRcdGlmIChyZXMuY29kZSA9PT0gMSkge1xuXHRcdFx0XHR3eC5zaG93VG9hc3Qoe1xuXHRcdFx0XHRcdHRpdGxlOiAn5L+u5pS55oiQ5YqfJyxcblx0XHRcdFx0XHRtYXNrOiB0cnVlLFxuXHRcdFx0XHRcdGR1cmF0aW9uOiAyMDAwLFxuXHRcdFx0XHRcdHN1Y2Nlc3MoKSB7XG5cdFx0XHRcdFx0XHRzZXRUaW1lb3V0KCgpID0+IHtcblx0XHRcdFx0XHRcdFx0d3guc3dpdGNoVGFiKHtcblx0XHRcdFx0XHRcdFx0XHR1cmw6ICcuLi9wYWdlcy9pbmRleC9pbmRleCdcblx0XHRcdFx0XHRcdFx0fSlcblx0XHRcdFx0XHRcdH0sIDIwMDApXG5cdFx0XHRcdFx0fVxuXHRcdFx0XHR9KVxuXG5cdFx0XHR9XG5cdFx0fSlcblx0fSxcblxuXHRnZXRJbmZvcigpIHtcblx0XHR3eC5zaG93TG9hZGluZyh7XG5cdFx0XHR0aXRsZTogJycsXG5cdFx0XHRtYXNrOiB0cnVlXG5cdFx0fSlcblx0XHRjb25zdCB7dG9rZW59ID0gdGhpcy5kYXRhO1xuXHRcdHJlcVVzZXJJbmZvcm1hdGlvbih7dG9rZW59KS50aGVuKFxuXHRcdFx0KHJlczogYW55KSA9PiB7XG5cdFx0XHRcdGlmIChyZXMuY29kZSA9PT0gMSkge1xuXHRcdFx0XHRcdHd4LmhpZGVMb2FkaW5nKCk7XG5cdFx0XHRcdFx0Y29uc29sZS5sb2cocmVzKTtcblx0XHRcdFx0XHRjb25zdCB7XG5cdFx0XHRcdFx0XHRhbGlwYXlfYWNjb3VudCxcblx0XHRcdFx0XHRcdGFsaXBheV9uYW1lLFxuXHRcdFx0XHRcdFx0YmFua19uYW1lLFxuXHRcdFx0XHRcdFx0YmFua19udW1iZXIsXG5cdFx0XHRcdFx0XHRiYW5rX3R5cGUsXG5cdFx0XHRcdFx0XHRvcGVuaW5nX2Jhbmtcblx0XHRcdFx0XHR9ID0gcmVzLmRhdGE7XG5cdFx0XHRcdFx0dGhpcy5zZXREYXRhISh7XG5cdFx0XHRcdFx0XHRkaXNhYmxlZDogdHJ1ZSxcblx0XHRcdFx0XHRcdGFsaXBheV9hY2NvdW50LFxuXHRcdFx0XHRcdFx0YWxpcGF5X25hbWUsXG5cdFx0XHRcdFx0XHRiYW5rX25hbWUsXG5cdFx0XHRcdFx0XHRiYW5rX251bWJlcixcblx0XHRcdFx0XHRcdGJhbmtfdHlwZSxcblx0XHRcdFx0XHRcdG9wZW5pbmdfYmFua1xuXHRcdFx0XHRcdH0pXG5cblx0XHRcdFx0fVxuXHRcdFx0fVxuXHRcdClcblx0fVxufSlcbiJdfQ==