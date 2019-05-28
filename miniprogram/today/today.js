"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoidG9kYXkuanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyJ0b2RheS50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOztBQUNBLElBQUksQ0FBQztJQUNKLElBQUksRUFBRSxFQUFFO0lBQ1IsTUFBTSxFQUFOO0lBQ0EsQ0FBQztJQUNELEVBQUUsRUFBRixVQUFHLENBQUs7UUFDUCxFQUFFLENBQUMsVUFBVSxDQUFDO1lBQ1YsR0FBRyxFQUFFLGtDQUFrQyxHQUFHLENBQUMsQ0FBQyxhQUFhLENBQUMsT0FBTyxDQUFDLEVBQUU7U0FDckUsQ0FBQyxDQUFBO0lBQ0wsQ0FBQztDQUNELENBQUMsQ0FBQyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IHNoZWV0IH0gZnJvbSAnLi4vYXBpL2luZGV4JyBcclxuUGFnZSh7XHJcblx0ZGF0YToge30sXHJcblx0b25IaWRlKCk6IHZvaWQge1xyXG5cdH0sXHJcblx0dG8oZTphbnkpe1xyXG5cdFx0d3gubmF2aWdhdGVUbyh7XHJcbiAgICAgIHVybDogJy4uL3ByaWNlLWRldGFpbC9wcmljZS1kZXRhaWw/aWQ9JyArIGUuY3VycmVudFRhcmdldC5kYXRhc2V0LmlkXHJcbiAgICB9KVxyXG5cdH1cclxufSk7XHJcbiJdfQ==