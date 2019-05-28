"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var app = getApp();
Page({
    data: {
        title: '',
        note: '',
        imei: '',
        level: '',
        code: '',
        price: ''
    },
    onLoad: function (options) {
        console.log(options);
        this.setData({
            title: options.title,
            note: options.note,
            imei: options.imei,
            level: options.level,
            code: options.code,
            price: options.price
        });
    }
});
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiY2hpbGRPcmRlci5qcyIsInNvdXJjZVJvb3QiOiIiLCJzb3VyY2VzIjpbImNoaWxkT3JkZXIudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7QUFFQSxJQUFNLEdBQUcsR0FBRyxNQUFNLEVBQVUsQ0FBQztBQUU3QixJQUFJLENBQUM7SUFDSCxJQUFJLEVBQUU7UUFFSixLQUFLLEVBQUMsRUFBRTtRQUNSLElBQUksRUFBQyxFQUFFO1FBQ1AsSUFBSSxFQUFDLEVBQUU7UUFDUCxLQUFLLEVBQUMsRUFBRTtRQUNSLElBQUksRUFBQyxFQUFFO1FBQ1AsS0FBSyxFQUFDLEVBQUU7S0FDVDtJQUVELE1BQU0sRUFBTixVQUFPLE9BQU87UUFDWixPQUFPLENBQUMsR0FBRyxDQUFDLE9BQU8sQ0FBQyxDQUFDO1FBQ3JCLElBQUksQ0FBQyxPQUFRLENBQUM7WUFDWixLQUFLLEVBQUUsT0FBTyxDQUFDLEtBQUs7WUFDcEIsSUFBSSxFQUFFLE9BQU8sQ0FBQyxJQUFJO1lBQ2xCLElBQUksRUFBRSxPQUFPLENBQUMsSUFBSTtZQUNsQixLQUFLLEVBQUUsT0FBTyxDQUFDLEtBQUs7WUFDcEIsSUFBSSxFQUFFLE9BQU8sQ0FBQyxJQUFJO1lBQ2xCLEtBQUssRUFBRSxPQUFPLENBQUMsS0FBSztTQUNyQixDQUFDLENBQUE7SUFDSixDQUFDO0NBQ0YsQ0FBQyxDQUFDIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgSU15QXBwIH0gZnJvbSAnLi4vYXBwJ1xuXG5jb25zdCBhcHAgPSBnZXRBcHA8SU15QXBwPigpO1xuXG5QYWdlKHtcbiAgZGF0YToge1xuXG4gICAgdGl0bGU6JycsXG4gICAgbm90ZTonJyxcbiAgICBpbWVpOicnLFxuICAgIGxldmVsOicnLFxuICAgIGNvZGU6JycsXG4gICAgcHJpY2U6JydcbiAgfSxcblxuICBvbkxvYWQob3B0aW9ucykge1xuICAgIGNvbnNvbGUubG9nKG9wdGlvbnMpO1xuICAgIHRoaXMuc2V0RGF0YSEoe1xuICAgICAgdGl0bGU6IG9wdGlvbnMudGl0bGUsXG4gICAgICBub3RlOiBvcHRpb25zLm5vdGUsXG4gICAgICBpbWVpOiBvcHRpb25zLmltZWksXG4gICAgICBsZXZlbDogb3B0aW9ucy5sZXZlbCxcbiAgICAgIGNvZGU6IG9wdGlvbnMuY29kZSxcbiAgICAgIHByaWNlOiBvcHRpb25zLnByaWNlXG4gICAgfSlcbiAgfVxufSk7XG4iXX0=