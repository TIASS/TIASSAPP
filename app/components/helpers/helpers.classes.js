"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var RadioOption = /** @class */ (function () {
    function RadioOption(value, text, selected) {
        this.selected = false;
        this.text = text;
        this.value = value;
        this.selected = selected;
    }
    return RadioOption;
}());
exports.RadioOption = RadioOption;
var RadioOptionList = /** @class */ (function () {
    function RadioOptionList(items) {
        this.items = items;
    }
    RadioOptionList.prototype.changeCheckedRadio = function (item) {
        var _this = this;
        item.selected = !item.selected;
        if (!item.selected)
            return;
        // uncheck all other options
        this.items.forEach(function (option) {
            if (option.value !== item.value)
                option.selected = false;
            else
                _this.selectedValue = option.value;
        });
        console.log("this.selectedValue : " + this.selectedValue);
    };
    return RadioOptionList;
}());
exports.RadioOptionList = RadioOptionList;
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiaGVscGVycy5jbGFzc2VzLmpzIiwic291cmNlUm9vdCI6IiIsInNvdXJjZXMiOlsiaGVscGVycy5jbGFzc2VzLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7O0FBQUE7SUFLRSxxQkFBWSxLQUFhLEVBQUUsSUFBWSxFQUFFLFFBQWtCO1FBRjNELGFBQVEsR0FBWSxLQUFLLENBQUM7UUFHeEIsSUFBSSxDQUFDLElBQUksR0FBRyxJQUFJLENBQUM7UUFDakIsSUFBSSxDQUFDLEtBQUssR0FBRyxLQUFLLENBQUM7UUFDbkIsSUFBSSxDQUFDLFFBQVEsR0FBRyxRQUFRLENBQUM7SUFDM0IsQ0FBQztJQUNILGtCQUFDO0FBQUQsQ0FBQyxBQVZELElBVUM7QUFWWSxrQ0FBVztBQVl4QjtJQUdFLHlCQUFZLEtBQXlCO1FBQ25DLElBQUksQ0FBQyxLQUFLLEdBQUcsS0FBSyxDQUFDO0lBQ3JCLENBQUM7SUFDRCw0Q0FBa0IsR0FBbEIsVUFBbUIsSUFBaUI7UUFBcEMsaUJBY0M7UUFiQyxJQUFJLENBQUMsUUFBUSxHQUFHLENBQUMsSUFBSSxDQUFDLFFBQVEsQ0FBQztRQUMvQixFQUFFLENBQUMsQ0FBQyxDQUFDLElBQUksQ0FBQyxRQUFRLENBQUM7WUFDakIsTUFBTSxDQUFDO1FBRVQsNEJBQTRCO1FBQzVCLElBQUksQ0FBQyxLQUFLLENBQUMsT0FBTyxDQUFDLFVBQUEsTUFBTTtZQUN2QixFQUFFLENBQUMsQ0FBQyxNQUFNLENBQUMsS0FBSyxLQUFLLElBQUksQ0FBQyxLQUFLLENBQUM7Z0JBQzlCLE1BQU0sQ0FBQyxRQUFRLEdBQUcsS0FBSyxDQUFDO1lBQzFCLElBQUk7Z0JBQ0YsS0FBSSxDQUFDLGFBQWEsR0FBRyxNQUFNLENBQUMsS0FBSyxDQUFDO1FBQ3RDLENBQUMsQ0FBQyxDQUFDO1FBRUgsT0FBTyxDQUFDLEdBQUcsQ0FBQyx1QkFBdUIsR0FBRyxJQUFJLENBQUMsYUFBYSxDQUFDLENBQUM7SUFDNUQsQ0FBQztJQUNILHNCQUFDO0FBQUQsQ0FBQyxBQXJCRCxJQXFCQztBQXJCWSwwQ0FBZSIsInNvdXJjZXNDb250ZW50IjpbImV4cG9ydCBjbGFzcyBSYWRpb09wdGlvbiB7XG4gIHRleHQ6IHN0cmluZztcbiAgdmFsdWU6IHN0cmluZztcbiAgc2VsZWN0ZWQ6IGJvb2xlYW4gPSBmYWxzZTtcblxuICBjb25zdHJ1Y3Rvcih2YWx1ZTogc3RyaW5nLCB0ZXh0OiBzdHJpbmcsIHNlbGVjdGVkPzogYm9vbGVhbikge1xuICAgIHRoaXMudGV4dCA9IHRleHQ7XG4gICAgdGhpcy52YWx1ZSA9IHZhbHVlO1xuICAgIHRoaXMuc2VsZWN0ZWQgPSBzZWxlY3RlZDtcbiAgfVxufVxuXG5leHBvcnQgY2xhc3MgUmFkaW9PcHRpb25MaXN0IHtcbiAgaXRlbXM6IEFycmF5PFJhZGlvT3B0aW9uPjtcbiAgc2VsZWN0ZWRWYWx1ZTogc3RyaW5nO1xuICBjb25zdHJ1Y3RvcihpdGVtczogQXJyYXk8UmFkaW9PcHRpb24+KSB7XG4gICAgdGhpcy5pdGVtcyA9IGl0ZW1zO1xuICB9XG4gIGNoYW5nZUNoZWNrZWRSYWRpbyhpdGVtOiBSYWRpb09wdGlvbik6IHZvaWQge1xuICAgIGl0ZW0uc2VsZWN0ZWQgPSAhaXRlbS5zZWxlY3RlZDtcbiAgICBpZiAoIWl0ZW0uc2VsZWN0ZWQpXG4gICAgICByZXR1cm47XG5cbiAgICAvLyB1bmNoZWNrIGFsbCBvdGhlciBvcHRpb25zXG4gICAgdGhpcy5pdGVtcy5mb3JFYWNoKG9wdGlvbiA9PiB7XG4gICAgICBpZiAob3B0aW9uLnZhbHVlICE9PSBpdGVtLnZhbHVlKVxuICAgICAgICBvcHRpb24uc2VsZWN0ZWQgPSBmYWxzZTtcbiAgICAgIGVsc2VcbiAgICAgICAgdGhpcy5zZWxlY3RlZFZhbHVlID0gb3B0aW9uLnZhbHVlO1xuICAgIH0pO1xuIFxuICAgIGNvbnNvbGUubG9nKFwidGhpcy5zZWxlY3RlZFZhbHVlIDogXCIgKyB0aGlzLnNlbGVjdGVkVmFsdWUpO1xuICB9XG59Il19