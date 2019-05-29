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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiY2hpbGRPcmRlci5qcyIsInNvdXJjZVJvb3QiOiIiLCJzb3VyY2VzIjpbImNoaWxkT3JkZXIudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7QUFFQSxJQUFNLEdBQUcsR0FBRyxNQUFNLEVBQVUsQ0FBQztBQUU3QixJQUFJLENBQUM7SUFDSCxJQUFJLEVBQUU7UUFFSixLQUFLLEVBQUMsRUFBRTtRQUNSLElBQUksRUFBQyxFQUFFO1FBQ1AsSUFBSSxFQUFDLEVBQUU7UUFDUCxLQUFLLEVBQUMsRUFBRTtRQUNSLElBQUksRUFBQyxFQUFFO1FBQ1AsS0FBSyxFQUFDLEVBQUU7S0FDVDtJQUVELE1BQU0sRUFBTixVQUFPLE9BQU87UUFDWixPQUFPLENBQUMsR0FBRyxDQUFDLE9BQU8sQ0FBQyxDQUFDO1FBQ3JCLElBQUksQ0FBQyxPQUFRLENBQUM7WUFDWixLQUFLLEVBQUUsT0FBTyxDQUFDLEtBQUs7WUFDcEIsSUFBSSxFQUFFLE9BQU8sQ0FBQyxJQUFJO1lBQ2xCLElBQUksRUFBRSxPQUFPLENBQUMsSUFBSTtZQUNsQixLQUFLLEVBQUUsT0FBTyxDQUFDLEtBQUs7WUFDcEIsSUFBSSxFQUFFLE9BQU8sQ0FBQyxJQUFJO1lBQ2xCLEtBQUssRUFBRSxPQUFPLENBQUMsS0FBSztTQUNyQixDQUFDLENBQUE7SUFDSixDQUFDO0NBQ0YsQ0FBQyxDQUFDIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgSU15QXBwIH0gZnJvbSAnLi4vYXBwJ1xyXG5cclxuY29uc3QgYXBwID0gZ2V0QXBwPElNeUFwcD4oKTtcclxuXHJcblBhZ2Uoe1xyXG4gIGRhdGE6IHtcclxuXHJcbiAgICB0aXRsZTonJyxcclxuICAgIG5vdGU6JycsXHJcbiAgICBpbWVpOicnLFxyXG4gICAgbGV2ZWw6JycsXHJcbiAgICBjb2RlOicnLFxyXG4gICAgcHJpY2U6JydcclxuICB9LFxyXG5cclxuICBvbkxvYWQob3B0aW9ucykge1xyXG4gICAgY29uc29sZS5sb2cob3B0aW9ucyk7XHJcbiAgICB0aGlzLnNldERhdGEhKHtcclxuICAgICAgdGl0bGU6IG9wdGlvbnMudGl0bGUsXHJcbiAgICAgIG5vdGU6IG9wdGlvbnMubm90ZSxcclxuICAgICAgaW1laTogb3B0aW9ucy5pbWVpLFxyXG4gICAgICBsZXZlbDogb3B0aW9ucy5sZXZlbCxcclxuICAgICAgY29kZTogb3B0aW9ucy5jb2RlLFxyXG4gICAgICBwcmljZTogb3B0aW9ucy5wcmljZVxyXG4gICAgfSlcclxuICB9XHJcbn0pO1xyXG4iXX0=