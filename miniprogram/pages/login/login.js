"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var index_1 = require("../../api/index");
Page({
    data: {
        openid: '',
        exist: 0
    },
    onLoad: function () {
        var _this = this;
        wx.getStorage({
            key: 'openid',
            success: function (res) {
                _this.setData({
                    openid: res.data
                }, function () { return _this.doCheck(); });
            }
        });
    },
    doCheck: function () {
        var _this_1 = this;
        var openid = this.data.openid;
        wx.showLoading({
            title: ''
        });
        index_1.reqCheckUser(openid).then(function (res) {
            wx.hideLoading();
            _this_1.setData({
                exist: res
            });
        });
    },
    login: function () {
        var exist = this.data.exist;
        if (exist === 0) {
            wx.navigateTo({
                url: '/complete/complete'
            });
            return;
        }
        index_1.reqLogin({ type: 1, openid: this.data.openid }).then(function (res) {
            console.log('token', res);
            if (res.code === 1) {
                wx.setStorageSync('token', res.data);
            }
        });
    },
});
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoibG9naW4uanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyJsb2dpbi50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOztBQUFBLHlDQUF1RDtBQUV2RCxJQUFJLENBQUM7SUFDSixJQUFJLEVBQUU7UUFDTCxNQUFNLEVBQUUsRUFBRTtRQUNWLEtBQUssRUFBRSxDQUFDO0tBQ1I7SUFFRCxNQUFNLEVBQU47UUFDQyxJQUFNLEtBQUssR0FBRyxJQUFJLENBQUM7UUFDbkIsRUFBRSxDQUFDLFVBQVUsQ0FBQztZQUNiLEdBQUcsRUFBRSxRQUFRO1lBQ2IsT0FBTyxFQUFQLFVBQVEsR0FBRztnQkFDVixLQUFLLENBQUMsT0FBUSxDQUFDO29CQUNkLE1BQU0sRUFBRSxHQUFHLENBQUMsSUFBSTtpQkFDaEIsRUFBRSxjQUFNLE9BQUEsS0FBSyxDQUFDLE9BQU8sRUFBRSxFQUFmLENBQWUsQ0FBQyxDQUFDO1lBQzNCLENBQUM7U0FDRCxDQUFDLENBQUE7SUFDSCxDQUFDO0lBRUQsT0FBTyxFQUFQO1FBQUEsbUJBYUM7UUFaTyxJQUFBLHlCQUFNLENBQWM7UUFDM0IsRUFBRSxDQUFDLFdBQVcsQ0FBQztZQUNkLEtBQUssRUFBQyxFQUFFO1NBQ1IsQ0FBQyxDQUFDO1FBQ0gsb0JBQVksQ0FBQyxNQUFNLENBQUMsQ0FBQyxJQUFJLENBQ3hCLFVBQUMsR0FBUTtZQUNSLEVBQUUsQ0FBQyxXQUFXLEVBQUUsQ0FBQztZQUNqQixPQUFJLENBQUMsT0FBUSxDQUFDO2dCQUNiLEtBQUssRUFBRSxHQUFHO2FBQ1YsQ0FBQyxDQUFBO1FBQ0gsQ0FBQyxDQUNELENBQUE7SUFDRixDQUFDO0lBRUQsS0FBSztRQUNHLElBQUEsdUJBQUssQ0FBYztRQUMxQixJQUFJLEtBQUssS0FBSyxDQUFDLEVBQUM7WUFDZixFQUFFLENBQUMsVUFBVSxDQUFDO2dCQUNiLEdBQUcsRUFBQyxvQkFBb0I7YUFDeEIsQ0FBQyxDQUFDO1lBQ0gsT0FBTTtTQUNOO1FBR0QsZ0JBQVEsQ0FBQyxFQUFDLElBQUksRUFBRSxDQUFDLEVBQUUsTUFBTSxFQUFFLElBQUksQ0FBQyxJQUFJLENBQUMsTUFBTSxFQUFDLENBQUMsQ0FBQyxJQUFJLENBQ2pELFVBQUEsR0FBRztZQUNGLE9BQU8sQ0FBQyxHQUFHLENBQUMsT0FBTyxFQUFDLEdBQUcsQ0FBQyxDQUFDO1lBQ3pCLElBQUksR0FBRyxDQUFDLElBQUksS0FBSyxDQUFDLEVBQUU7Z0JBQ25CLEVBQUUsQ0FBQyxjQUFjLENBQ2hCLE9BQU8sRUFDTixHQUFHLENBQUMsSUFBSSxDQUNULENBQUE7YUFDRDtRQUNGLENBQUMsQ0FDRCxDQUFDO0lBRUgsQ0FBQztDQUVELENBQUMsQ0FBQyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7cmVxQ2hlY2tVc2VyLCByZXFMb2dpbn0gZnJvbSBcIi4uLy4uL2FwaS9pbmRleFwiO1xuXG5QYWdlKHtcblx0ZGF0YToge1xuXHRcdG9wZW5pZDogJycsXG5cdFx0ZXhpc3Q6IDBcblx0fSxcblxuXHRvbkxvYWQoKSB7XG5cdFx0Y29uc3QgX3RoaXMgPSB0aGlzO1xuXHRcdHd4LmdldFN0b3JhZ2Uoe1xuXHRcdFx0a2V5OiAnb3BlbmlkJyxcblx0XHRcdHN1Y2Nlc3MocmVzKSB7XG5cdFx0XHRcdF90aGlzLnNldERhdGEhKHtcblx0XHRcdFx0XHRvcGVuaWQ6IHJlcy5kYXRhXG5cdFx0XHRcdH0sICgpID0+IF90aGlzLmRvQ2hlY2soKSk7XG5cdFx0XHR9XG5cdFx0fSlcblx0fSxcblxuXHRkb0NoZWNrKCkge1xuXHRcdGNvbnN0IHtvcGVuaWR9ID0gdGhpcy5kYXRhO1xuXHRcdHd4LnNob3dMb2FkaW5nKHtcblx0XHRcdHRpdGxlOicnXG5cdFx0fSk7XG5cdFx0cmVxQ2hlY2tVc2VyKG9wZW5pZCkudGhlbihcblx0XHRcdChyZXM6IGFueSkgPT4ge1xuXHRcdFx0XHR3eC5oaWRlTG9hZGluZygpO1xuXHRcdFx0XHR0aGlzLnNldERhdGEhKHtcblx0XHRcdFx0XHRleGlzdDogcmVzXG5cdFx0XHRcdH0pXG5cdFx0XHR9XG5cdFx0KVxuXHR9LFxuXG5cdGxvZ2luKCkge1xuXHRcdGNvbnN0IHtleGlzdH0gPSB0aGlzLmRhdGE7XG5cdFx0aWYgKGV4aXN0ID09PSAwKXtcblx0XHRcdHd4Lm5hdmlnYXRlVG8oe1xuXHRcdFx0XHR1cmw6Jy9jb21wbGV0ZS9jb21wbGV0ZSdcblx0XHRcdH0pO1xuXHRcdFx0cmV0dXJuXG5cdFx0fVxuXG5cblx0XHRyZXFMb2dpbih7dHlwZTogMSwgb3BlbmlkOiB0aGlzLmRhdGEub3BlbmlkfSkudGhlbihcblx0XHRcdHJlcyA9PiB7XG5cdFx0XHRcdGNvbnNvbGUubG9nKCd0b2tlbicscmVzKTtcblx0XHRcdFx0aWYgKHJlcy5jb2RlID09PSAxKSB7XG5cdFx0XHRcdFx0d3guc2V0U3RvcmFnZVN5bmMoXG5cdFx0XHRcdFx0XHQndG9rZW4nLFxuXHRcdFx0XHRcdFx0IHJlcy5kYXRhXG5cdFx0XHRcdFx0KVxuXHRcdFx0XHR9XG5cdFx0XHR9XG5cdFx0KTtcblxuXHR9LFxuXG59KTtcbiJdfQ==