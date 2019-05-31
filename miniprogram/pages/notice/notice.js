"use strict";
Page({
    data: {
        content: ''
    },
    onLoad: function (query) {
        console.log(query);
        var content = query && query.content;
        this.setData({
            content: content
        });
    }
});
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoibm90aWNlLmpzIiwic291cmNlUm9vdCI6IiIsInNvdXJjZXMiOlsibm90aWNlLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7QUFBQSxJQUFJLENBQUM7SUFDSixJQUFJLEVBQUU7UUFDTCxPQUFPLEVBQUUsRUFBRTtLQUNYO0lBQ0QsTUFBTSxFQUFOLFVBQU8sS0FBK0I7UUFDckMsT0FBTyxDQUFDLEdBQUcsQ0FBQyxLQUFLLENBQUMsQ0FBQztRQUNuQixJQUFJLE9BQU8sR0FBRyxLQUFLLElBQUksS0FBSyxDQUFDLE9BQU8sQ0FBQztRQUNyQyxJQUFJLENBQUMsT0FBUSxDQUFDO1lBQ2IsT0FBTyxTQUFBO1NBQ1AsQ0FBQyxDQUFBO0lBQ0gsQ0FBQztDQUNELENBQUMsQ0FBQyIsInNvdXJjZXNDb250ZW50IjpbIlBhZ2Uoe1xyXG5cdGRhdGE6IHtcclxuXHRcdGNvbnRlbnQ6ICcnXHJcblx0fSxcclxuXHRvbkxvYWQocXVlcnk/OiB7IFtwOiBzdHJpbmddOiBzdHJpbmcgfSk6IHZvaWQge1xyXG5cdFx0Y29uc29sZS5sb2cocXVlcnkpO1xyXG5cdFx0bGV0IGNvbnRlbnQgPSBxdWVyeSAmJiBxdWVyeS5jb250ZW50O1xyXG5cdFx0dGhpcy5zZXREYXRhISh7XHJcblx0XHRcdGNvbnRlbnRcclxuXHRcdH0pXHJcblx0fVxyXG59KTtcclxuIl19