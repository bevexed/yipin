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
        index_1.requpdate_gathering_information(this.data).then(function (res) {
            if (res.code === 1) {
                console.log(res);
                wx.navigateBack({
                    delta: 1
                });
            }
        });
    }
});
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiY29sbGVjdC5qcyIsInNvdXJjZVJvb3QiOiIiLCJzb3VyY2VzIjpbImNvbGxlY3QudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7QUFBQSxzQ0FBNkQ7QUFFN0QsSUFBSSxDQUFDO0lBQ0osSUFBSSxFQUFFO1FBQ0wsS0FBSyxFQUFFLEVBQUU7UUFDVCxjQUFjLEVBQUUsRUFBRTtRQUNsQixXQUFXLEVBQUUsRUFBRTtRQUNmLFNBQVMsRUFBRSxFQUFFO1FBQ2IsV0FBVyxFQUFFLEVBQUU7UUFDZixTQUFTLEVBQUUsRUFBRTtRQUNiLFlBQVksRUFBRSxFQUFFO0tBRWhCO0lBQ0QsTUFBTSxFQUFOO1FBRUMsSUFBSSxLQUFLLEdBQUcsSUFBSSxDQUFDO1FBQ2pCLEVBQUUsQ0FBQyxVQUFVLENBQUM7WUFDYixHQUFHLEVBQUUsT0FBTztZQUNaLE9BQU8sRUFBUCxVQUFRLEdBQUc7Z0JBQ1YsT0FBTyxDQUFDLEdBQUcsQ0FBQyxHQUFHLENBQUMsQ0FBQztnQkFDakIsS0FBSyxDQUFDLE9BQVEsQ0FBQztvQkFDZCxLQUFLLEVBQUUsR0FBRyxDQUFDLElBQUk7aUJBQ2YsQ0FBQyxDQUFBO1lBQ0gsQ0FBQztTQUNELENBQUMsQ0FBQztJQUNKLENBQUM7SUFFRCxLQUFLLEVBQUwsVUFBTSxDQUFNOztRQUNYLE9BQU8sQ0FBQyxHQUFHLENBQUMsQ0FBQyxDQUFDLENBQUM7UUFDZixJQUFNLEtBQUssR0FBRyxDQUFDLENBQUMsTUFBTSxDQUFDLE9BQU8sQ0FBQyxJQUFJLENBQUM7UUFDcEMsSUFBTSxLQUFLLEdBQUcsQ0FBQyxDQUFDLE1BQU0sQ0FBQyxNQUFNLENBQUMsS0FBSyxDQUFDO1FBQ3BDLE9BQU8sQ0FBQyxHQUFHLENBQUMsS0FBSyxDQUFDLENBQUM7UUFDbkIsSUFBSSxDQUFDLE9BQVE7WUFDWixHQUFDLEtBQUssSUFBRyxLQUFLO2dCQUNiLENBQUM7UUFFSCxPQUFPLENBQUMsR0FBRyxDQUFDLEtBQUssRUFBRSxLQUFLLENBQUMsQ0FBQztJQUMzQixDQUFDO0lBRUQsU0FBUyxFQUFUO1FBQ0MsSUFBSSxLQUFLLEdBQUcsSUFBSSxDQUFDO1FBQ2pCLEVBQUUsQ0FBQyxXQUFXLENBQUM7WUFDZCxLQUFLLEVBQUUsQ0FBQztZQUNSLFFBQVEsRUFBRSxDQUFDLFVBQVUsRUFBRSxZQUFZLENBQUM7WUFDcEMsVUFBVSxFQUFFLENBQUMsT0FBTyxFQUFFLFFBQVEsQ0FBQztZQUMvQixPQUFPLEVBQVAsVUFBUSxHQUFHO2dCQUVWLE9BQU8sQ0FBQyxHQUFHLENBQUMsR0FBRyxDQUFDLENBQUM7Z0JBQ2pCLElBQU0sYUFBYSxHQUFHLEdBQUcsQ0FBQyxhQUFhLENBQUM7Z0JBQ3hDLEtBQUssQ0FBQyxPQUFRLENBQUM7b0JBQ2QsZ0JBQWdCLEVBQUUsYUFBYTtpQkFDL0IsQ0FBQyxDQUFDO2dCQUNILE9BQU8sQ0FBQyxHQUFHLENBQUMsYUFBYSxDQUFDLENBQUM7WUFDNUIsQ0FBQztTQUNELENBQUMsQ0FBQTtJQUNILENBQUM7SUFFRCxZQUFZLEVBQVo7UUFDQyxJQUFJLEtBQUssR0FBRyxJQUFJLENBQUM7UUFDakIsRUFBRSxDQUFDLFdBQVcsQ0FBQztZQUNkLEtBQUssRUFBRSxDQUFDO1lBQ1IsUUFBUSxFQUFFLENBQUMsVUFBVSxFQUFFLFlBQVksQ0FBQztZQUNwQyxVQUFVLEVBQUUsQ0FBQyxPQUFPLEVBQUUsUUFBUSxDQUFDO1lBQy9CLE9BQU8sRUFBUCxVQUFRLEdBQUc7Z0JBRVYsSUFBTSxhQUFhLEdBQUcsR0FBRyxDQUFDLGFBQWEsQ0FBQztnQkFDeEMsS0FBSyxDQUFDLE9BQVEsQ0FBQztvQkFDZCxnQkFBZ0IsRUFBRSxhQUFhO2lCQUMvQixDQUFDLENBQUM7Z0JBQ0gsT0FBTyxDQUFDLEdBQUcsQ0FBQyxhQUFhLENBQUMsQ0FBQztZQUM1QixDQUFDO1NBQ0QsQ0FBQyxDQUFBO0lBQ0gsQ0FBQztJQUVELHdCQUF3QjtRQUN2Qix1Q0FBK0IsQ0FBQyxJQUFJLENBQUMsSUFBSSxDQUFDLENBQUMsSUFBSSxDQUFDLFVBQUEsR0FBRztZQUNsRCxJQUFJLEdBQUcsQ0FBQyxJQUFJLEtBQUssQ0FBQyxFQUFFO2dCQUNuQixPQUFPLENBQUMsR0FBRyxDQUFDLEdBQUcsQ0FBQyxDQUFDO2dCQUNqQixFQUFFLENBQUMsWUFBWSxDQUFDO29CQUNmLEtBQUssRUFBRSxDQUFDO2lCQUNSLENBQUMsQ0FBQTthQUNGO1FBQ0YsQ0FBQyxDQUFDLENBQUE7SUFDSCxDQUFDO0NBQ0QsQ0FBQyxDQUFBIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHtyZXF1cGRhdGVfZ2F0aGVyaW5nX2luZm9ybWF0aW9ufSBmcm9tIFwiLi4vYXBpL2luZGV4XCI7XHJcblxyXG5QYWdlKHtcclxuXHRkYXRhOiB7XHJcblx0XHR0b2tlbjogJycsXHJcblx0XHRhbGlwYXlfYWNjb3VudDogJycsXHJcblx0XHRhbGlwYXlfbmFtZTogJycsXHJcblx0XHRiYW5rX25hbWU6ICcnLFxyXG5cdFx0YmFua19udW1iZXI6ICcnLFxyXG5cdFx0YmFua190eXBlOiAnJyxcclxuXHRcdG9wZW5pbmdfYmFuazogJycsXHJcblxyXG5cdH0sXHJcblx0b25Mb2FkKCkge1xyXG5cdFx0Ly8g6K+75Y+WdG9rZW5cclxuXHRcdGxldCBfdGhpcyA9IHRoaXM7XHJcblx0XHR3eC5nZXRTdG9yYWdlKHtcclxuXHRcdFx0a2V5OiAndG9rZW4nLFxyXG5cdFx0XHRzdWNjZXNzKHJlcykge1xyXG5cdFx0XHRcdGNvbnNvbGUubG9nKHJlcyk7XHJcblx0XHRcdFx0X3RoaXMuc2V0RGF0YSEoe1xyXG5cdFx0XHRcdFx0dG9rZW46IHJlcy5kYXRhXHJcblx0XHRcdFx0fSlcclxuXHRcdFx0fVxyXG5cdFx0fSk7XHJcblx0fSxcclxuXHJcblx0aW5wdXQoZTogYW55KSB7XHJcblx0XHRjb25zb2xlLmxvZyhlKTtcclxuXHRcdGNvbnN0IGxhYmVsID0gZS50YXJnZXQuZGF0YXNldC50eXBlO1xyXG5cdFx0Y29uc3QgdmFsdWUgPSBlLmRldGFpbC5kZXRhaWwudmFsdWU7XHJcblx0XHRjb25zb2xlLmxvZyh2YWx1ZSk7XHJcblx0XHR0aGlzLnNldERhdGEhKHtcclxuXHRcdFx0W2xhYmVsXTogdmFsdWVcclxuXHRcdH0pO1xyXG5cclxuXHRcdGNvbnNvbGUubG9nKGxhYmVsLCB2YWx1ZSk7XHJcblx0fSxcclxuXHJcblx0Y2hvb3NlVG9wKCkge1xyXG5cdFx0bGV0IF90aGlzID0gdGhpcztcclxuXHRcdHd4LmNob29zZUltYWdlKHtcclxuXHRcdFx0Y291bnQ6IDEsXHJcblx0XHRcdHNpemVUeXBlOiBbJ29yaWdpbmFsJywgJ2NvbXByZXNzZWQnXSxcclxuXHRcdFx0c291cmNlVHlwZTogWydhbGJ1bScsICdjYW1lcmEnXSxcclxuXHRcdFx0c3VjY2VzcyhyZXMpIHtcclxuXHRcdFx0XHQvLyB0ZW1wRmlsZVBhdGjlj6/ku6XkvZzkuLppbWfmoIfnrb7nmoRzcmPlsZ7mgKfmmL7npLrlm77niYdcclxuXHRcdFx0XHRjb25zb2xlLmxvZyhyZXMpO1xyXG5cdFx0XHRcdGNvbnN0IHRlbXBGaWxlUGF0aHMgPSByZXMudGVtcEZpbGVQYXRocztcclxuXHRcdFx0XHRfdGhpcy5zZXREYXRhISh7XHJcblx0XHRcdFx0XHRpZF9jYXJkX3Bvc2l0aXZlOiB0ZW1wRmlsZVBhdGhzXHJcblx0XHRcdFx0fSk7XHJcblx0XHRcdFx0Y29uc29sZS5sb2codGVtcEZpbGVQYXRocyk7XHJcblx0XHRcdH1cclxuXHRcdH0pXHJcblx0fSxcclxuXHJcblx0Y2hvb3NlQm90dG9tKCkge1xyXG5cdFx0bGV0IF90aGlzID0gdGhpcztcclxuXHRcdHd4LmNob29zZUltYWdlKHtcclxuXHRcdFx0Y291bnQ6IDEsXHJcblx0XHRcdHNpemVUeXBlOiBbJ29yaWdpbmFsJywgJ2NvbXByZXNzZWQnXSxcclxuXHRcdFx0c291cmNlVHlwZTogWydhbGJ1bScsICdjYW1lcmEnXSxcclxuXHRcdFx0c3VjY2VzcyhyZXMpIHtcclxuXHRcdFx0XHQvLyB0ZW1wRmlsZVBhdGjlj6/ku6XkvZzkuLppbWfmoIfnrb7nmoRzcmPlsZ7mgKfmmL7npLrlm77niYdcclxuXHRcdFx0XHRjb25zdCB0ZW1wRmlsZVBhdGhzID0gcmVzLnRlbXBGaWxlUGF0aHM7XHJcblx0XHRcdFx0X3RoaXMuc2V0RGF0YSEoe1xyXG5cdFx0XHRcdFx0aWRfY2FyZF9jb250cmFyeTogdGVtcEZpbGVQYXRoc1xyXG5cdFx0XHRcdH0pO1xyXG5cdFx0XHRcdGNvbnNvbGUubG9nKHRlbXBGaWxlUGF0aHMpO1xyXG5cdFx0XHR9XHJcblx0XHR9KVxyXG5cdH0sXHJcblxyXG5cdGRvVXBkYXRlQmFzaWNJbmZvcm1hdGlvbigpIHtcclxuXHRcdHJlcXVwZGF0ZV9nYXRoZXJpbmdfaW5mb3JtYXRpb24odGhpcy5kYXRhKS50aGVuKHJlcyA9PiB7XHJcblx0XHRcdGlmIChyZXMuY29kZSA9PT0gMSkge1xyXG5cdFx0XHRcdGNvbnNvbGUubG9nKHJlcyk7XHJcblx0XHRcdFx0d3gubmF2aWdhdGVCYWNrKHtcclxuXHRcdFx0XHRcdGRlbHRhOiAxXHJcblx0XHRcdFx0fSlcclxuXHRcdFx0fVxyXG5cdFx0fSlcclxuXHR9XHJcbn0pXHJcbiJdfQ==