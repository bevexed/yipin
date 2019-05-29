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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoidG9kYXkuanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyJ0b2RheS50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOztBQUNBLElBQUksQ0FBQztJQUNKLElBQUksRUFBRSxFQUFFO0lBQ1IsTUFBTSxFQUFOO0lBQ0EsQ0FBQztJQUNELEVBQUUsRUFBRixVQUFHLENBQUs7UUFDUCxFQUFFLENBQUMsVUFBVSxDQUFDO1lBQ1YsR0FBRyxFQUFFLGtDQUFrQyxHQUFHLENBQUMsQ0FBQyxhQUFhLENBQUMsT0FBTyxDQUFDLEVBQUU7U0FDckUsQ0FBQyxDQUFBO0lBQ0wsQ0FBQztDQUNELENBQUMsQ0FBQyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IHNoZWV0IH0gZnJvbSAnLi4vYXBpL2luZGV4JyBcblBhZ2Uoe1xuXHRkYXRhOiB7fSxcblx0b25IaWRlKCk6IHZvaWQge1xuXHR9LFxuXHR0byhlOmFueSl7XG5cdFx0d3gubmF2aWdhdGVUbyh7XG4gICAgICB1cmw6ICcuLi9wcmljZS1kZXRhaWwvcHJpY2UtZGV0YWlsP2lkPScgKyBlLmN1cnJlbnRUYXJnZXQuZGF0YXNldC5pZFxuICAgIH0pXG5cdH1cbn0pO1xuIl19