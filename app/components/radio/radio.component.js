"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var core_1 = require("@angular/core");
var RadioComponent = /** @class */ (function () {
    function RadioComponent() {
        this.tap = new core_1.EventEmitter();
        this.checked = false;
    }
    RadioComponent.prototype.onTap = function () {
        this.tap.emit(this.checked);
    };
    __decorate([
        core_1.Output(),
        __metadata("design:type", core_1.EventEmitter)
    ], RadioComponent.prototype, "tap", void 0);
    __decorate([
        core_1.Input(),
        __metadata("design:type", Boolean)
    ], RadioComponent.prototype, "checked", void 0);
    RadioComponent = __decorate([
        core_1.Component({
            selector: "Checkbox",
            template: "\n    <Image\n        [src]=\"checked ? 'res://selected' : 'res://nonselected'\"\n        class=\"checkbox\"\n        (tap)=\"onTap()\">\n    </Image>\n    "
        }),
        __metadata("design:paramtypes", [])
    ], RadioComponent);
    return RadioComponent;
}());
exports.RadioComponent = RadioComponent;
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoicmFkaW8uY29tcG9uZW50LmpzIiwic291cmNlUm9vdCI6IiIsInNvdXJjZXMiOlsicmFkaW8uY29tcG9uZW50LnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7O0FBQUEsc0NBQXFFO0FBWXJFO0lBSUk7UUFIaUIsUUFBRyxHQUEwQixJQUFJLG1CQUFZLEVBQVcsQ0FBQztRQUMxRCxZQUFPLEdBQVksS0FBSyxDQUFDO0lBR3pDLENBQUM7SUFFTSw4QkFBSyxHQUFaO1FBQ0ksSUFBSSxDQUFDLEdBQUcsQ0FBQyxJQUFJLENBQUMsSUFBSSxDQUFDLE9BQU8sQ0FBQyxDQUFDO0lBQ2hDLENBQUM7SUFSUztRQUFULGFBQU0sRUFBRTtrQ0FBYSxtQkFBWTsrQ0FBd0M7SUFDakU7UUFBUixZQUFLLEVBQUU7O21EQUFpQztJQUZoQyxjQUFjO1FBVjFCLGdCQUFTLENBQUM7WUFDUCxRQUFRLEVBQUUsVUFBVTtZQUNwQixRQUFRLEVBQUUsOEpBTVQ7U0FDSixDQUFDOztPQUNXLGNBQWMsQ0FVMUI7SUFBRCxxQkFBQztDQUFBLEFBVkQsSUFVQztBQVZZLHdDQUFjIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHtDb21wb25lbnQsIElucHV0LCBPdXRwdXQsIEV2ZW50RW1pdHRlcn0gZnJvbSBcIkBhbmd1bGFyL2NvcmVcIjtcblxuQENvbXBvbmVudCh7XG4gICAgc2VsZWN0b3I6IFwiQ2hlY2tib3hcIixcbiAgICB0ZW1wbGF0ZTogYFxuICAgIDxJbWFnZVxuICAgICAgICBbc3JjXT1cImNoZWNrZWQgPyAncmVzOi8vc2VsZWN0ZWQnIDogJ3JlczovL25vbnNlbGVjdGVkJ1wiXG4gICAgICAgIGNsYXNzPVwiY2hlY2tib3hcIlxuICAgICAgICAodGFwKT1cIm9uVGFwKClcIj5cbiAgICA8L0ltYWdlPlxuICAgIGBcbn0pXG5leHBvcnQgY2xhc3MgUmFkaW9Db21wb25lbnQge1xuICAgIEBPdXRwdXQoKSBwdWJsaWMgdGFwOiBFdmVudEVtaXR0ZXI8Ym9vbGVhbj4gPSBuZXcgRXZlbnRFbWl0dGVyPGJvb2xlYW4+KCk7XG4gICAgQElucHV0KCkgcHVibGljIGNoZWNrZWQ6IGJvb2xlYW4gPSBmYWxzZTtcblxuICAgIGNvbnN0cnVjdG9yKCkge1xuICAgIH1cblxuICAgIHB1YmxpYyBvblRhcCgpOiB2b2lkIHtcbiAgICAgICAgdGhpcy50YXAuZW1pdCh0aGlzLmNoZWNrZWQpO1xuICAgIH1cbn0iXX0=