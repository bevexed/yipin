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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoidG9kYXkuanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyJ0b2RheS50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiO0FBQUEsSUFBSSxDQUFDO0lBQ0osSUFBSSxFQUFFLEVBQUU7SUFDUixNQUFNLEVBQU47SUFDQSxDQUFDO0lBQ0QsRUFBRSxFQUFGLFVBQUcsQ0FBSztRQUNQLEVBQUUsQ0FBQyxVQUFVLENBQUM7WUFDVixHQUFHLEVBQUUsa0NBQWtDLEdBQUcsQ0FBQyxDQUFDLGFBQWEsQ0FBQyxPQUFPLENBQUMsRUFBRTtTQUNyRSxDQUFDLENBQUE7SUFDTCxDQUFDO0NBQ0QsQ0FBQyxDQUFDIiwic291cmNlc0NvbnRlbnQiOlsiUGFnZSh7XHJcblx0ZGF0YToge30sXHJcblx0b25IaWRlKCk6IHZvaWQge1xyXG5cdH0sXHJcblx0dG8oZTphbnkpe1xyXG5cdFx0d3gubmF2aWdhdGVUbyh7XHJcbiAgICAgIHVybDogJy4uL3ByaWNlLWRldGFpbC9wcmljZS1kZXRhaWw/aWQ9JyArIGUuY3VycmVudFRhcmdldC5kYXRhc2V0LmlkXHJcbiAgICB9KVxyXG5cdH1cclxufSk7XHJcbiJdfQ==