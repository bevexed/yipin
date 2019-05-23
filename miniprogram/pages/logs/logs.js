"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var util_1 = require("../../utils/util");
Page({
    data: {
        logs: [],
        aaa: 123
    },
    onLoad: function () {
        this.setData({
            logs: (wx.getStorageSync('logs') || []).map(function (log) {
                return util_1.formatTime(new Date(log));
            })
        });
    },
});
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoibG9ncy5qcyIsInNvdXJjZVJvb3QiOiIiLCJzb3VyY2VzIjpbImxvZ3MudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7QUFDQSx5Q0FBNkM7QUFFN0MsSUFBSSxDQUFDO0lBQ0gsSUFBSSxFQUFFO1FBQ0osSUFBSSxFQUFFLEVBQWM7UUFDcEIsR0FBRyxFQUFDLEdBQUc7S0FDUjtJQUNELE1BQU07UUFDSixJQUFJLENBQUMsT0FBUSxDQUFDO1lBQ1osSUFBSSxFQUFFLENBQUMsRUFBRSxDQUFDLGNBQWMsQ0FBQyxNQUFNLENBQUMsSUFBSSxFQUFFLENBQUMsQ0FBQyxHQUFHLENBQUMsVUFBQyxHQUFXO2dCQUN0RCxPQUFPLGlCQUFVLENBQUMsSUFBSSxJQUFJLENBQUMsR0FBRyxDQUFDLENBQUMsQ0FBQTtZQUNsQyxDQUFDLENBQUM7U0FDSCxDQUFDLENBQUE7SUFDSixDQUFDO0NBQ0YsQ0FBQyxDQUFBIiwic291cmNlc0NvbnRlbnQiOlsiLy9sb2dzLmpzXG5pbXBvcnQgeyBmb3JtYXRUaW1lIH0gZnJvbSAnLi4vLi4vdXRpbHMvdXRpbCdcblxuUGFnZSh7XG4gIGRhdGE6IHtcbiAgICBsb2dzOiBbXSBhcyBzdHJpbmdbXSxcbiAgICBhYWE6MTIzXG4gIH0sXG4gIG9uTG9hZCgpIHtcbiAgICB0aGlzLnNldERhdGEhKHtcbiAgICAgIGxvZ3M6ICh3eC5nZXRTdG9yYWdlU3luYygnbG9ncycpIHx8IFtdKS5tYXAoKGxvZzogbnVtYmVyKSA9PiB7XG4gICAgICAgIHJldHVybiBmb3JtYXRUaW1lKG5ldyBEYXRlKGxvZykpXG4gICAgICB9KVxuICAgIH0pXG4gIH0sXG59KVxuIl19