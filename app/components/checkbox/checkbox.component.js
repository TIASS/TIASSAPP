"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var core_1 = require("@angular/core");
var CheckboxComponent = /** @class */ (function () {
    function CheckboxComponent() {
        this.tap = new core_1.EventEmitter();
        this.checked = false;
    }
    CheckboxComponent.prototype.onTap = function () {
        this.tap.emit(this.checked);
    };
    __decorate([
        core_1.Output(),
        __metadata("design:type", core_1.EventEmitter)
    ], CheckboxComponent.prototype, "tap", void 0);
    __decorate([
        core_1.Input(),
        __metadata("design:type", Boolean)
    ], CheckboxComponent.prototype, "checked", void 0);
    CheckboxComponent = __decorate([
        core_1.Component({
            selector: "Checkbox",
            template: "\n    <Image\n        [src]=\"checked ? 'res://checkbox_checked' : 'res://checkbox_unchecked'\"\n        class=\"checkbox\"\n        (tap)=\"onTap()\">\n    </Image>\n    "
        }),
        __metadata("design:paramtypes", [])
    ], CheckboxComponent);
    return CheckboxComponent;
}());
exports.CheckboxComponent = CheckboxComponent;
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiY2hlY2tib3guY29tcG9uZW50LmpzIiwic291cmNlUm9vdCI6IiIsInNvdXJjZXMiOlsiY2hlY2tib3guY29tcG9uZW50LnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7O0FBQUEsc0NBQXFFO0FBWXJFO0lBSUk7UUFIaUIsUUFBRyxHQUEwQixJQUFJLG1CQUFZLEVBQVcsQ0FBQztRQUMxRCxZQUFPLEdBQVksS0FBSyxDQUFDO0lBR3pDLENBQUM7SUFFTSxpQ0FBSyxHQUFaO1FBQ0ksSUFBSSxDQUFDLEdBQUcsQ0FBQyxJQUFJLENBQUMsSUFBSSxDQUFDLE9BQU8sQ0FBQyxDQUFDO0lBQ2hDLENBQUM7SUFSUztRQUFULGFBQU0sRUFBRTtrQ0FBYSxtQkFBWTtrREFBd0M7SUFDakU7UUFBUixZQUFLLEVBQUU7O3NEQUFpQztJQUZoQyxpQkFBaUI7UUFWN0IsZ0JBQVMsQ0FBQztZQUNQLFFBQVEsRUFBRSxVQUFVO1lBQ3BCLFFBQVEsRUFBRSw2S0FNVDtTQUNKLENBQUM7O09BQ1csaUJBQWlCLENBVTdCO0lBQUQsd0JBQUM7Q0FBQSxBQVZELElBVUM7QUFWWSw4Q0FBaUIiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQge0NvbXBvbmVudCwgSW5wdXQsIE91dHB1dCwgRXZlbnRFbWl0dGVyfSBmcm9tIFwiQGFuZ3VsYXIvY29yZVwiO1xuXG5AQ29tcG9uZW50KHtcbiAgICBzZWxlY3RvcjogXCJDaGVja2JveFwiLFxuICAgIHRlbXBsYXRlOiBgXG4gICAgPEltYWdlXG4gICAgICAgIFtzcmNdPVwiY2hlY2tlZCA/ICdyZXM6Ly9jaGVja2JveF9jaGVja2VkJyA6ICdyZXM6Ly9jaGVja2JveF91bmNoZWNrZWQnXCJcbiAgICAgICAgY2xhc3M9XCJjaGVja2JveFwiXG4gICAgICAgICh0YXApPVwib25UYXAoKVwiPlxuICAgIDwvSW1hZ2U+XG4gICAgYFxufSlcbmV4cG9ydCBjbGFzcyBDaGVja2JveENvbXBvbmVudCB7XG4gICAgQE91dHB1dCgpIHB1YmxpYyB0YXA6IEV2ZW50RW1pdHRlcjxib29sZWFuPiA9IG5ldyBFdmVudEVtaXR0ZXI8Ym9vbGVhbj4oKTtcbiAgICBASW5wdXQoKSBwdWJsaWMgY2hlY2tlZDogYm9vbGVhbiA9IGZhbHNlO1xuXG4gICAgY29uc3RydWN0b3IoKSB7XG4gICAgfVxuXG4gICAgcHVibGljIG9uVGFwKCk6IHZvaWQge1xuICAgICAgICB0aGlzLnRhcC5lbWl0KHRoaXMuY2hlY2tlZCk7XG4gICAgfVxufSJdfQ==