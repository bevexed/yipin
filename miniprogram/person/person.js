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
        var _a = this.data, name = _a.name, token = _a.token, id_card = _a.id_card, id_card_contrary = _a.id_card_contrary, id_card_positive = _a.id_card_positive;
        var data = { name: name, token: token, id_card: id_card, id_card_contrary: id_card_contrary[0], id_card_positive: id_card_positive[0] };
        index_1.reqUpdateBasicInformation(data).then(function (res) {
            console.log(res);
        });
    }
});
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoicGVyc29uLmpzIiwic291cmNlUm9vdCI6IiIsInNvdXJjZXMiOlsicGVyc29uLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7O0FBQUEsc0NBQXVEO0FBRXZELElBQUksQ0FBQztJQUNKLElBQUksRUFBRTtRQUNMLEtBQUssRUFBRSxFQUFFO1FBQ1QsSUFBSSxFQUFFLEVBQUU7UUFDUixPQUFPLEVBQUUsRUFBRTtRQUNYLGdCQUFnQixFQUFFLEVBQUU7UUFDcEIsZ0JBQWdCLEVBQUUsRUFBRTtLQUNwQjtJQUNELE1BQU0sRUFBTjtRQUVDLElBQUksS0FBSyxHQUFHLElBQUksQ0FBQztRQUNqQixFQUFFLENBQUMsVUFBVSxDQUFDO1lBQ2IsR0FBRyxFQUFFLE9BQU87WUFDWixPQUFPLEVBQVAsVUFBUSxHQUFHO2dCQUNWLE9BQU8sQ0FBQyxHQUFHLENBQUMsR0FBRyxDQUFDLENBQUM7Z0JBQ2pCLEtBQUssQ0FBQyxPQUFRLENBQUM7b0JBQ2QsS0FBSyxFQUFFLEdBQUcsQ0FBQyxJQUFJO2lCQUNmLENBQUMsQ0FBQTtZQUNILENBQUM7U0FDRCxDQUFDLENBQUM7SUFDSixDQUFDO0lBRUQsS0FBSyxFQUFMLFVBQU0sQ0FBTTs7UUFDWCxPQUFPLENBQUMsR0FBRyxDQUFDLENBQUMsQ0FBQyxDQUFDO1FBQ2YsSUFBTSxLQUFLLEdBQUcsQ0FBQyxDQUFDLE1BQU0sQ0FBQyxPQUFPLENBQUMsSUFBSSxDQUFDO1FBQ3BDLElBQU0sS0FBSyxHQUFHLENBQUMsQ0FBQyxNQUFNLENBQUMsTUFBTSxDQUFDLEtBQUssQ0FBQztRQUNwQyxPQUFPLENBQUMsR0FBRyxDQUFDLEtBQUssQ0FBQyxDQUFDO1FBQ25CLElBQUksQ0FBQyxPQUFRO1lBQ1osR0FBQyxLQUFLLElBQUcsS0FBSztnQkFDYixDQUFDO1FBRUgsT0FBTyxDQUFDLEdBQUcsQ0FBQyxLQUFLLEVBQUUsS0FBSyxDQUFDLENBQUM7SUFDM0IsQ0FBQztJQUVELFNBQVMsRUFBVDtRQUNDLElBQUksS0FBSyxHQUFHLElBQUksQ0FBQztRQUNqQixFQUFFLENBQUMsV0FBVyxDQUFDO1lBQ2QsS0FBSyxFQUFFLENBQUM7WUFDUixRQUFRLEVBQUUsQ0FBQyxVQUFVLEVBQUUsWUFBWSxDQUFDO1lBQ3BDLFVBQVUsRUFBRSxDQUFDLE9BQU8sRUFBRSxRQUFRLENBQUM7WUFDL0IsT0FBTyxFQUFQLFVBQVEsR0FBRztnQkFFVixPQUFPLENBQUMsR0FBRyxDQUFDLEdBQUcsQ0FBQyxDQUFDO2dCQUNqQixJQUFNLGFBQWEsR0FBRyxHQUFHLENBQUMsYUFBYSxDQUFDO2dCQUN4QyxLQUFLLENBQUMsT0FBUSxDQUFDO29CQUNkLGdCQUFnQixFQUFFLGFBQWE7aUJBQy9CLENBQUMsQ0FBQztnQkFDSCxPQUFPLENBQUMsR0FBRyxDQUFDLGFBQWEsQ0FBQyxDQUFDO1lBQzVCLENBQUM7U0FDRCxDQUFDLENBQUE7SUFDSCxDQUFDO0lBRUQsWUFBWSxFQUFaO1FBQ0MsSUFBSSxLQUFLLEdBQUcsSUFBSSxDQUFDO1FBQ2pCLEVBQUUsQ0FBQyxXQUFXLENBQUM7WUFDZCxLQUFLLEVBQUUsQ0FBQztZQUNSLFFBQVEsRUFBRSxDQUFDLFVBQVUsRUFBRSxZQUFZLENBQUM7WUFDcEMsVUFBVSxFQUFFLENBQUMsT0FBTyxFQUFFLFFBQVEsQ0FBQztZQUMvQixPQUFPLEVBQVAsVUFBUSxHQUFHO2dCQUVWLElBQU0sYUFBYSxHQUFHLEdBQUcsQ0FBQyxhQUFhLENBQUM7Z0JBQ3hDLEtBQUssQ0FBQyxPQUFRLENBQUM7b0JBQ2QsZ0JBQWdCLEVBQUUsYUFBYTtpQkFDL0IsQ0FBQyxDQUFDO2dCQUNILE9BQU8sQ0FBQyxHQUFHLENBQUMsYUFBYSxDQUFDLENBQUM7WUFDNUIsQ0FBQztTQUNELENBQUMsQ0FBQTtJQUNILENBQUM7SUFDRCx3QkFBd0I7UUFDakIsSUFBQSxjQUFrRSxFQUFqRSxjQUFJLEVBQUMsZ0JBQUssRUFBQyxvQkFBTyxFQUFDLHNDQUFnQixFQUFDLHNDQUE2QixDQUFDO1FBQ3pFLElBQU0sSUFBSSxHQUFHLEVBQUMsSUFBSSxNQUFBLEVBQUMsS0FBSyxPQUFBLEVBQUMsT0FBTyxTQUFBLEVBQUMsZ0JBQWdCLEVBQUMsZ0JBQWdCLENBQUMsQ0FBQyxDQUFDLEVBQUMsZ0JBQWdCLEVBQUMsZ0JBQWdCLENBQUMsQ0FBQyxDQUFDLEVBQUMsQ0FBQztRQUM1RyxpQ0FBeUIsQ0FBQyxJQUFJLENBQUMsQ0FBQyxJQUFJLENBQ25DLFVBQUEsR0FBRztZQUNGLE9BQU8sQ0FBQyxHQUFHLENBQUMsR0FBRyxDQUFDLENBQUM7UUFDbEIsQ0FBQyxDQUNELENBQUE7SUFDRixDQUFDO0NBQ0QsQ0FBQyxDQUFBIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHtyZXFVcGRhdGVCYXNpY0luZm9ybWF0aW9ufSBmcm9tIFwiLi4vYXBpL2luZGV4XCI7XG5cblBhZ2Uoe1xuXHRkYXRhOiB7XG5cdFx0dG9rZW46ICcnLFxuXHRcdG5hbWU6ICcnLFxuXHRcdGlkX2NhcmQ6ICcnLFxuXHRcdGlkX2NhcmRfcG9zaXRpdmU6ICcnLFxuXHRcdGlkX2NhcmRfY29udHJhcnk6ICcnLFxuXHR9LFxuXHRvbkxvYWQoKSB7XG5cdFx0Ly8g6K+75Y+WdG9rZW5cblx0XHRsZXQgX3RoaXMgPSB0aGlzO1xuXHRcdHd4LmdldFN0b3JhZ2Uoe1xuXHRcdFx0a2V5OiAndG9rZW4nLFxuXHRcdFx0c3VjY2VzcyhyZXMpIHtcblx0XHRcdFx0Y29uc29sZS5sb2cocmVzKTtcblx0XHRcdFx0X3RoaXMuc2V0RGF0YSEoe1xuXHRcdFx0XHRcdHRva2VuOiByZXMuZGF0YVxuXHRcdFx0XHR9KVxuXHRcdFx0fVxuXHRcdH0pO1xuXHR9LFxuXG5cdGlucHV0KGU6IGFueSkge1xuXHRcdGNvbnNvbGUubG9nKGUpO1xuXHRcdGNvbnN0IGxhYmVsID0gZS50YXJnZXQuZGF0YXNldC50eXBlO1xuXHRcdGNvbnN0IHZhbHVlID0gZS5kZXRhaWwuZGV0YWlsLnZhbHVlO1xuXHRcdGNvbnNvbGUubG9nKHZhbHVlKTtcblx0XHR0aGlzLnNldERhdGEhKHtcblx0XHRcdFtsYWJlbF06IHZhbHVlXG5cdFx0fSk7XG5cblx0XHRjb25zb2xlLmxvZyhsYWJlbCwgdmFsdWUpO1xuXHR9LFxuXG5cdGNob29zZVRvcCgpIHtcblx0XHRsZXQgX3RoaXMgPSB0aGlzO1xuXHRcdHd4LmNob29zZUltYWdlKHtcblx0XHRcdGNvdW50OiAxLFxuXHRcdFx0c2l6ZVR5cGU6IFsnb3JpZ2luYWwnLCAnY29tcHJlc3NlZCddLFxuXHRcdFx0c291cmNlVHlwZTogWydhbGJ1bScsICdjYW1lcmEnXSxcblx0XHRcdHN1Y2Nlc3MocmVzKSB7XG5cdFx0XHRcdC8vIHRlbXBGaWxlUGF0aOWPr+S7peS9nOS4umltZ+agh+etvueahHNyY+WxnuaAp+aYvuekuuWbvueJh1xuXHRcdFx0XHRjb25zb2xlLmxvZyhyZXMpO1xuXHRcdFx0XHRjb25zdCB0ZW1wRmlsZVBhdGhzID0gcmVzLnRlbXBGaWxlUGF0aHM7XG5cdFx0XHRcdF90aGlzLnNldERhdGEhKHtcblx0XHRcdFx0XHRpZF9jYXJkX3Bvc2l0aXZlOiB0ZW1wRmlsZVBhdGhzXG5cdFx0XHRcdH0pO1xuXHRcdFx0XHRjb25zb2xlLmxvZyh0ZW1wRmlsZVBhdGhzKTtcblx0XHRcdH1cblx0XHR9KVxuXHR9LFxuXG5cdGNob29zZUJvdHRvbSgpIHtcblx0XHRsZXQgX3RoaXMgPSB0aGlzO1xuXHRcdHd4LmNob29zZUltYWdlKHtcblx0XHRcdGNvdW50OiAxLFxuXHRcdFx0c2l6ZVR5cGU6IFsnb3JpZ2luYWwnLCAnY29tcHJlc3NlZCddLFxuXHRcdFx0c291cmNlVHlwZTogWydhbGJ1bScsICdjYW1lcmEnXSxcblx0XHRcdHN1Y2Nlc3MocmVzKSB7XG5cdFx0XHRcdC8vIHRlbXBGaWxlUGF0aOWPr+S7peS9nOS4umltZ+agh+etvueahHNyY+WxnuaAp+aYvuekuuWbvueJh1xuXHRcdFx0XHRjb25zdCB0ZW1wRmlsZVBhdGhzID0gcmVzLnRlbXBGaWxlUGF0aHM7XG5cdFx0XHRcdF90aGlzLnNldERhdGEhKHtcblx0XHRcdFx0XHRpZF9jYXJkX2NvbnRyYXJ5OiB0ZW1wRmlsZVBhdGhzXG5cdFx0XHRcdH0pO1xuXHRcdFx0XHRjb25zb2xlLmxvZyh0ZW1wRmlsZVBhdGhzKTtcblx0XHRcdH1cblx0XHR9KVxuXHR9LFxuXHRkb1VwZGF0ZUJhc2ljSW5mb3JtYXRpb24oKSB7XG5cdFx0Y29uc3Qge25hbWUsdG9rZW4saWRfY2FyZCxpZF9jYXJkX2NvbnRyYXJ5LGlkX2NhcmRfcG9zaXRpdmV9ID0gdGhpcy5kYXRhO1xuXHRcdGNvbnN0IGRhdGEgPSB7bmFtZSx0b2tlbixpZF9jYXJkLGlkX2NhcmRfY29udHJhcnk6aWRfY2FyZF9jb250cmFyeVswXSxpZF9jYXJkX3Bvc2l0aXZlOmlkX2NhcmRfcG9zaXRpdmVbMF19O1xuXHRcdHJlcVVwZGF0ZUJhc2ljSW5mb3JtYXRpb24oZGF0YSkudGhlbihcblx0XHRcdHJlcyA9PiB7XG5cdFx0XHRcdGNvbnNvbGUubG9nKHJlcyk7XG5cdFx0XHR9XG5cdFx0KVxuXHR9XG59KVxuIl19