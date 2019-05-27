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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoic2FsZS1hZnRlci5qcyIsInNvdXJjZVJvb3QiOiIiLCJzb3VyY2VzIjpbInNhbGUtYWZ0ZXIudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7QUFBQSxzQ0FBMkM7QUFFM0MsSUFBSSxDQUFDO0lBQ0osSUFBSSxFQUFFO1FBQ0wsSUFBSSxFQUFFLEVBQUU7S0FDUjtJQUVELE1BQU0sRUFBTjtJQUNBLENBQUM7SUFFRCxJQUFJLEVBQUosVUFBSyxDQUFNO1FBQ1YsT0FBTyxDQUFDLEdBQUcsQ0FBQyxJQUFJLENBQUMsSUFBSSxDQUFDLElBQUksQ0FBQyxDQUFDO1FBQzVCLElBQUksQ0FBQyxPQUFRLENBQUM7WUFDYixJQUFJLEVBQUUsQ0FBQyxDQUFDLE1BQU0sQ0FBQyxLQUFLO1NBQ3BCLENBQUMsQ0FBQTtJQUNILENBQUM7SUFFRCxhQUFhO1FBQ0wsSUFBQSxxQkFBSSxDQUFjO1FBQ3pCLHFCQUFhLENBQUMsSUFBSSxDQUFDLENBQUMsSUFBSSxDQUN2QixVQUFBLEdBQUc7WUFDRixPQUFPLENBQUMsR0FBRyxDQUFDLEdBQUcsQ0FBQyxDQUFDO1FBQ2xCLENBQUMsQ0FDRCxDQUFBO0lBQ0YsQ0FBQztDQUdELENBQUMsQ0FBQyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7cmVxQWZ0ZXJRdWVyeX0gZnJvbSBcIi4uL2FwaS9pbmRleFwiO1xuXG5QYWdlKHtcblx0ZGF0YToge1xuXHRcdGltZWk6ICcnXG5cdH0sXG5cblx0b25Mb2FkKCk6IHZvaWQge1xuXHR9LFxuXG5cdElNRUkoZTogYW55KSB7XG5cdFx0Y29uc29sZS5sb2codGhpcy5kYXRhLmltZWkpO1xuXHRcdHRoaXMuc2V0RGF0YSEoe1xuXHRcdFx0aW1laTogZS5kZXRhaWwudmFsdWVcblx0XHR9KVxuXHR9LFxuXG5cdGdldEFmdGVyUXVlcnkoKSB7XG5cdFx0Y29uc3Qge2ltZWl9ID0gdGhpcy5kYXRhO1xuXHRcdHJlcUFmdGVyUXVlcnkoaW1laSkudGhlbihcblx0XHRcdHJlcyA9PiB7XG5cdFx0XHRcdGNvbnNvbGUubG9nKHJlcyk7XG5cdFx0XHR9XG5cdFx0KVxuXHR9XG5cblxufSk7XG4iXX0=