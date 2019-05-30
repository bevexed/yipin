"use strict";
Page({
    data: {},
    onHide: function () {
    },
    to: function (e) {
        wx.navigateTo({
            url: '../price-detail/price-detail?id=' + e.currentTarget.dataset.id
        });
    }
});
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoidG9kYXkuanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyJ0b2RheS50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiO0FBQUEsSUFBSSxDQUFDO0lBQ0osSUFBSSxFQUFFLEVBQUU7SUFDUixNQUFNLEVBQU47SUFDQSxDQUFDO0lBQ0QsRUFBRSxFQUFGLFVBQUcsQ0FBSztRQUNQLEVBQUUsQ0FBQyxVQUFVLENBQUM7WUFDVixHQUFHLEVBQUUsa0NBQWtDLEdBQUcsQ0FBQyxDQUFDLGFBQWEsQ0FBQyxPQUFPLENBQUMsRUFBRTtTQUNyRSxDQUFDLENBQUE7SUFDTCxDQUFDO0NBQ0QsQ0FBQyxDQUFDIiwic291cmNlc0NvbnRlbnQiOlsiUGFnZSh7XG5cdGRhdGE6IHt9LFxuXHRvbkhpZGUoKTogdm9pZCB7XG5cdH0sXG5cdHRvKGU6YW55KXtcblx0XHR3eC5uYXZpZ2F0ZVRvKHtcbiAgICAgIHVybDogJy4uL3ByaWNlLWRldGFpbC9wcmljZS1kZXRhaWw/aWQ9JyArIGUuY3VycmVudFRhcmdldC5kYXRhc2V0LmlkXG4gICAgfSlcblx0fVxufSk7XG4iXX0=