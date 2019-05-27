"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var index_1 = require("../api/index");
Page({
    data: {
        imei: ''
    },
    onLoad: function () {
    },
    IMEI: function (e) {
        console.log(this.data.imei);
        this.setData({
            imei: e.detail.value
        });
    },
    getAfterQuery: function () {
        var imei = this.data.imei;
        index_1.reqAfterQuery(imei).then(function (res) {
            console.log(res);
        });
    }
});
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoic2FsZS1hZnRlci5qcyIsInNvdXJjZVJvb3QiOiIiLCJzb3VyY2VzIjpbInNhbGUtYWZ0ZXIudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7QUFBQSxzQ0FBMkM7QUFFM0MsSUFBSSxDQUFDO0lBQ0osSUFBSSxFQUFFO1FBQ0wsSUFBSSxFQUFFLEVBQUU7S0FDUjtJQUVELE1BQU0sRUFBTjtJQUNBLENBQUM7SUFFRCxJQUFJLEVBQUosVUFBSyxDQUFNO1FBQ1YsT0FBTyxDQUFDLEdBQUcsQ0FBQyxJQUFJLENBQUMsSUFBSSxDQUFDLElBQUksQ0FBQyxDQUFDO1FBQzVCLElBQUksQ0FBQyxPQUFRLENBQUM7WUFDYixJQUFJLEVBQUUsQ0FBQyxDQUFDLE1BQU0sQ0FBQyxLQUFLO1NBQ3BCLENBQUMsQ0FBQTtJQUNILENBQUM7SUFFRCxhQUFhO1FBQ0wsSUFBQSxxQkFBSSxDQUFjO1FBQ3pCLHFCQUFhLENBQUMsSUFBSSxDQUFDLENBQUMsSUFBSSxDQUN2QixVQUFBLEdBQUc7WUFDRixPQUFPLENBQUMsR0FBRyxDQUFDLEdBQUcsQ0FBQyxDQUFDO1FBQ2xCLENBQUMsQ0FDRCxDQUFBO0lBQ0YsQ0FBQztDQUdELENBQUMsQ0FBQyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7cmVxQWZ0ZXJRdWVyeX0gZnJvbSBcIi4uL2FwaS9pbmRleFwiO1xyXG5cclxuUGFnZSh7XHJcblx0ZGF0YToge1xyXG5cdFx0aW1laTogJydcclxuXHR9LFxyXG5cclxuXHRvbkxvYWQoKTogdm9pZCB7XHJcblx0fSxcclxuXHJcblx0SU1FSShlOiBhbnkpIHtcclxuXHRcdGNvbnNvbGUubG9nKHRoaXMuZGF0YS5pbWVpKTtcclxuXHRcdHRoaXMuc2V0RGF0YSEoe1xyXG5cdFx0XHRpbWVpOiBlLmRldGFpbC52YWx1ZVxyXG5cdFx0fSlcclxuXHR9LFxyXG5cclxuXHRnZXRBZnRlclF1ZXJ5KCkge1xyXG5cdFx0Y29uc3Qge2ltZWl9ID0gdGhpcy5kYXRhO1xyXG5cdFx0cmVxQWZ0ZXJRdWVyeShpbWVpKS50aGVuKFxyXG5cdFx0XHRyZXMgPT4ge1xyXG5cdFx0XHRcdGNvbnNvbGUubG9nKHJlcyk7XHJcblx0XHRcdH1cclxuXHRcdClcclxuXHR9XHJcblxyXG5cclxufSk7XHJcbiJdfQ==