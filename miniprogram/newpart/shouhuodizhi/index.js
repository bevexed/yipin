"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var index_1 = require("../../api/index");
Page({
    data: {
        token: '', partner_name: '', partner_phone: '', partner_address: ''
    },
    onLoad: function () {
        var that = this;
        wx.getStorage({
            key: 'token',
            success: function (res) {
                that.setData({
                    token: res.data
                }, function () {
                    index_1.reqUserInformation({ token: res.data }).then(function (res) {
                        console.log(res);
                        that.setData({
                            partner_name: res.data.partner_name,
                            partner_phone: res.data.partner_phone,
                            partner_address: res.data.partner_address
                        });
                    });
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
    updateAddress: function () {
        var _a = this.data, token = _a.token, partner_address = _a.partner_address, partner_name = _a.partner_name, partner_phone = _a.partner_phone;
        if (!partner_address || !partner_name || !partner_phone) {
            wx.showToast({
                icon: "none",
                title: '请检查数据',
                mask: true,
                duration: 2000
            });
            return;
        }
        index_1.reqUpdateShippingAddress(token, partner_name, partner_phone, partner_address).then(function (res) {
            if (res.code === 1) {
                wx.showToast({
                    title: res.message,
                    mask: true,
                    duration: 3000,
                    success: function () {
                        setTimeout(function () {
                            wx.navigateBack({
                                delta: 1
                            });
                        }, 3000);
                    }
                });
            }
            else {
                wx.showToast({
                    icon: "none",
                    title: res.message,
                    mask: true,
                });
            }
        });
    }
});
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiaW5kZXguanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyJpbmRleC50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOztBQUFBLHlDQUE2RTtBQUU3RSxJQUFJLENBQUM7SUFDSixJQUFJLEVBQUU7UUFDTCxLQUFLLEVBQUUsRUFBRSxFQUFFLFlBQVksRUFBRSxFQUFFLEVBQUUsYUFBYSxFQUFFLEVBQUUsRUFBRSxlQUFlLEVBQUUsRUFBRTtLQUNuRTtJQUVELE1BQU0sRUFBTjtRQUNDLElBQU0sSUFBSSxHQUFHLElBQUksQ0FBQTtRQUNqQixFQUFFLENBQUMsVUFBVSxDQUFDO1lBQ2IsR0FBRyxFQUFFLE9BQU87WUFDWixPQUFPLEVBQVAsVUFBUSxHQUFHO2dCQUNWLElBQUksQ0FBQyxPQUFRLENBQUM7b0JBQ2IsS0FBSyxFQUFFLEdBQUcsQ0FBQyxJQUFJO2lCQUNmLEVBQUU7b0JBQ0YsMEJBQWtCLENBQUMsRUFBQyxLQUFLLEVBQUUsR0FBRyxDQUFDLElBQUksRUFBQyxDQUFDLENBQUMsSUFBSSxDQUN6QyxVQUFDLEdBQVE7d0JBQ1IsT0FBTyxDQUFDLEdBQUcsQ0FBQyxHQUFHLENBQUMsQ0FBQzt3QkFDakIsSUFBSSxDQUFDLE9BQVEsQ0FBQzs0QkFDYixZQUFZLEVBQUUsR0FBRyxDQUFDLElBQUksQ0FBQyxZQUFZOzRCQUNuQyxhQUFhLEVBQUUsR0FBRyxDQUFDLElBQUksQ0FBQyxhQUFhOzRCQUNyQyxlQUFlLEVBQUUsR0FBRyxDQUFDLElBQUksQ0FBQyxlQUFlO3lCQUN6QyxDQUFDLENBQUE7b0JBQ0gsQ0FBQyxDQUNELENBQUE7Z0JBQ0YsQ0FBQyxDQUFDLENBQUE7WUFDSCxDQUFDO1NBQ0QsQ0FBQyxDQUFBO0lBQ0gsQ0FBQztJQUVELEtBQUssRUFBTCxVQUFNLENBQU07O1FBQ1gsT0FBTyxDQUFDLEdBQUcsQ0FBQyxDQUFDLENBQUMsQ0FBQztRQUNmLElBQU0sS0FBSyxHQUFHLENBQUMsQ0FBQyxNQUFNLENBQUMsT0FBTyxDQUFDLElBQUksQ0FBQztRQUNwQyxJQUFNLEtBQUssR0FBRyxDQUFDLENBQUMsTUFBTSxDQUFDLE1BQU0sQ0FBQyxLQUFLLENBQUM7UUFDcEMsT0FBTyxDQUFDLEdBQUcsQ0FBQyxLQUFLLENBQUMsQ0FBQztRQUNuQixJQUFJLENBQUMsT0FBUTtZQUNaLEdBQUMsS0FBSyxJQUFHLEtBQUs7Z0JBQ2IsQ0FBQztRQUNILE9BQU8sQ0FBQyxHQUFHLENBQUMsS0FBSyxFQUFFLEtBQUssQ0FBQyxDQUFDO0lBQzNCLENBQUM7SUFHRCxhQUFhLEVBQWI7UUFDTyxJQUFBLGNBQWlFLEVBQWhFLGdCQUFLLEVBQUUsb0NBQWUsRUFBRSw4QkFBWSxFQUFFLGdDQUEwQixDQUFDO1FBQ3hFLElBQUksQ0FBQyxlQUFlLElBQUksQ0FBQyxZQUFZLElBQUksQ0FBQyxhQUFhLEVBQUU7WUFDeEQsRUFBRSxDQUFDLFNBQVMsQ0FBQztnQkFDWixJQUFJLEVBQUUsTUFBTTtnQkFDWixLQUFLLEVBQUUsT0FBTztnQkFDZCxJQUFJLEVBQUUsSUFBSTtnQkFDVixRQUFRLEVBQUUsSUFBSTthQUNkLENBQUMsQ0FBQztZQUNILE9BQU07U0FDTjtRQUNELGdDQUF3QixDQUFDLEtBQUssRUFBRSxZQUFZLEVBQUUsYUFBYSxFQUFFLGVBQWUsQ0FBQyxDQUFDLElBQUksQ0FDakYsVUFBQyxHQUFRO1lBQ1IsSUFBSSxHQUFHLENBQUMsSUFBSSxLQUFLLENBQUMsRUFBRTtnQkFDbkIsRUFBRSxDQUFDLFNBQVMsQ0FBQztvQkFDWixLQUFLLEVBQUUsR0FBRyxDQUFDLE9BQU87b0JBQ2xCLElBQUksRUFBRSxJQUFJO29CQUNWLFFBQVEsRUFBRSxJQUFJO29CQUNkLE9BQU87d0JBQ04sVUFBVSxDQUFDOzRCQUNWLEVBQUUsQ0FBQyxZQUFZLENBQUM7Z0NBQ2YsS0FBSyxFQUFFLENBQUM7NkJBQ1IsQ0FBQyxDQUFBO3dCQUNILENBQUMsRUFBRSxJQUFJLENBQUMsQ0FBQTtvQkFDVCxDQUFDO2lCQUNELENBQUMsQ0FBQTthQUNGO2lCQUFNO2dCQUNOLEVBQUUsQ0FBQyxTQUFTLENBQUM7b0JBQ1osSUFBSSxFQUFFLE1BQU07b0JBQ1osS0FBSyxFQUFFLEdBQUcsQ0FBQyxPQUFPO29CQUNsQixJQUFJLEVBQUUsSUFBSTtpQkFDVixDQUFDLENBQUE7YUFDRjtRQUNGLENBQUMsQ0FDRCxDQUFBO0lBQ0YsQ0FBQztDQUVELENBQUMsQ0FBQyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7cmVxVXBkYXRlU2hpcHBpbmdBZGRyZXNzLCByZXFVc2VySW5mb3JtYXRpb259IGZyb20gXCIuLi8uLi9hcGkvaW5kZXhcIjtcblxuUGFnZSh7XG5cdGRhdGE6IHtcblx0XHR0b2tlbjogJycsIHBhcnRuZXJfbmFtZTogJycsIHBhcnRuZXJfcGhvbmU6ICcnLCBwYXJ0bmVyX2FkZHJlc3M6ICcnXG5cdH0sXG5cblx0b25Mb2FkKCkge1xuXHRcdGNvbnN0IHRoYXQgPSB0aGlzXG5cdFx0d3guZ2V0U3RvcmFnZSh7XG5cdFx0XHRrZXk6ICd0b2tlbicsXG5cdFx0XHRzdWNjZXNzKHJlcykge1xuXHRcdFx0XHR0aGF0LnNldERhdGEhKHtcblx0XHRcdFx0XHR0b2tlbjogcmVzLmRhdGFcblx0XHRcdFx0fSwgKCkgPT4ge1xuXHRcdFx0XHRcdHJlcVVzZXJJbmZvcm1hdGlvbih7dG9rZW46IHJlcy5kYXRhfSkudGhlbihcblx0XHRcdFx0XHRcdChyZXM6IGFueSkgPT4ge1xuXHRcdFx0XHRcdFx0XHRjb25zb2xlLmxvZyhyZXMpO1xuXHRcdFx0XHRcdFx0XHR0aGF0LnNldERhdGEhKHtcblx0XHRcdFx0XHRcdFx0XHRwYXJ0bmVyX25hbWU6IHJlcy5kYXRhLnBhcnRuZXJfbmFtZSxcblx0XHRcdFx0XHRcdFx0XHRwYXJ0bmVyX3Bob25lOiByZXMuZGF0YS5wYXJ0bmVyX3Bob25lLFxuXHRcdFx0XHRcdFx0XHRcdHBhcnRuZXJfYWRkcmVzczogcmVzLmRhdGEucGFydG5lcl9hZGRyZXNzXG5cdFx0XHRcdFx0XHRcdH0pXG5cdFx0XHRcdFx0XHR9XG5cdFx0XHRcdFx0KVxuXHRcdFx0XHR9KVxuXHRcdFx0fVxuXHRcdH0pXG5cdH0sXG5cblx0aW5wdXQoZTogYW55KSB7XG5cdFx0Y29uc29sZS5sb2coZSk7XG5cdFx0Y29uc3QgbGFiZWwgPSBlLnRhcmdldC5kYXRhc2V0LnR5cGU7XG5cdFx0Y29uc3QgdmFsdWUgPSBlLmRldGFpbC5kZXRhaWwudmFsdWU7XG5cdFx0Y29uc29sZS5sb2codmFsdWUpO1xuXHRcdHRoaXMuc2V0RGF0YSEoe1xuXHRcdFx0W2xhYmVsXTogdmFsdWVcblx0XHR9KTtcblx0XHRjb25zb2xlLmxvZyhsYWJlbCwgdmFsdWUpO1xuXHR9LFxuXG5cdC8vIEB0cy1pZ25vcmVcblx0dXBkYXRlQWRkcmVzcygpIHtcblx0XHRjb25zdCB7dG9rZW4sIHBhcnRuZXJfYWRkcmVzcywgcGFydG5lcl9uYW1lLCBwYXJ0bmVyX3Bob25lfSA9IHRoaXMuZGF0YTtcblx0XHRpZiAoIXBhcnRuZXJfYWRkcmVzcyB8fCAhcGFydG5lcl9uYW1lIHx8ICFwYXJ0bmVyX3Bob25lKSB7XG5cdFx0XHR3eC5zaG93VG9hc3Qoe1xuXHRcdFx0XHRpY29uOiBcIm5vbmVcIixcblx0XHRcdFx0dGl0bGU6ICfor7fmo4Dmn6XmlbDmja4nLFxuXHRcdFx0XHRtYXNrOiB0cnVlLFxuXHRcdFx0XHRkdXJhdGlvbjogMjAwMFxuXHRcdFx0fSk7XG5cdFx0XHRyZXR1cm5cblx0XHR9XG5cdFx0cmVxVXBkYXRlU2hpcHBpbmdBZGRyZXNzKHRva2VuLCBwYXJ0bmVyX25hbWUsIHBhcnRuZXJfcGhvbmUsIHBhcnRuZXJfYWRkcmVzcykudGhlbihcblx0XHRcdChyZXM6IGFueSkgPT4ge1xuXHRcdFx0XHRpZiAocmVzLmNvZGUgPT09IDEpIHtcblx0XHRcdFx0XHR3eC5zaG93VG9hc3Qoe1xuXHRcdFx0XHRcdFx0dGl0bGU6IHJlcy5tZXNzYWdlLFxuXHRcdFx0XHRcdFx0bWFzazogdHJ1ZSxcblx0XHRcdFx0XHRcdGR1cmF0aW9uOiAzMDAwLFxuXHRcdFx0XHRcdFx0c3VjY2VzcygpIHtcblx0XHRcdFx0XHRcdFx0c2V0VGltZW91dCgoKSA9PiB7XG5cdFx0XHRcdFx0XHRcdFx0d3gubmF2aWdhdGVCYWNrKHtcblx0XHRcdFx0XHRcdFx0XHRcdGRlbHRhOiAxXG5cdFx0XHRcdFx0XHRcdFx0fSlcblx0XHRcdFx0XHRcdFx0fSwgMzAwMClcblx0XHRcdFx0XHRcdH1cblx0XHRcdFx0XHR9KVxuXHRcdFx0XHR9IGVsc2Uge1xuXHRcdFx0XHRcdHd4LnNob3dUb2FzdCh7XG5cdFx0XHRcdFx0XHRpY29uOiBcIm5vbmVcIixcblx0XHRcdFx0XHRcdHRpdGxlOiByZXMubWVzc2FnZSxcblx0XHRcdFx0XHRcdG1hc2s6IHRydWUsXG5cdFx0XHRcdFx0fSlcblx0XHRcdFx0fVxuXHRcdFx0fVxuXHRcdClcblx0fVxuXG59KTtcbiJdfQ==