"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var core_1 = require("@angular/core");
var angular_1 = require("nativescript-pro-ui/sidedrawer/angular");
var DrawerPage = /** @class */ (function () {
    function DrawerPage(_changeDetectorRef) {
        this._changeDetectorRef = _changeDetectorRef;
    }
    DrawerPage.prototype.ngAfterViewInit = function () {
        this.drawer = this.drawerComponent.sideDrawer;
        this._changeDetectorRef.detectChanges();
    };
    DrawerPage.prototype.openDrawer = function () {
        this.drawer.showDrawer();
    };
    DrawerPage.prototype.closeDrawer = function () {
        this.drawer.closeDrawer();
    };
    __decorate([
        core_1.ViewChild(angular_1.RadSideDrawerComponent),
        __metadata("design:type", angular_1.RadSideDrawerComponent)
    ], DrawerPage.prototype, "drawerComponent", void 0);
    return DrawerPage;
}());
exports.DrawerPage = DrawerPage;
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiZHJhd2VyLnBhZ2UuanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyJkcmF3ZXIucGFnZS50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOztBQUFBLHNDQUEwRTtBQUMxRSxrRUFBOEY7QUFFOUY7SUFLSSxvQkFBb0Isa0JBQXFDO1FBQXJDLHVCQUFrQixHQUFsQixrQkFBa0IsQ0FBbUI7SUFFekQsQ0FBQztJQUVELG9DQUFlLEdBQWY7UUFDSSxJQUFJLENBQUMsTUFBTSxHQUFHLElBQUksQ0FBQyxlQUFlLENBQUMsVUFBVSxDQUFDO1FBQzlDLElBQUksQ0FBQyxrQkFBa0IsQ0FBQyxhQUFhLEVBQUUsQ0FBQztJQUM1QyxDQUFDO0lBRVMsK0JBQVUsR0FBcEI7UUFDSSxJQUFJLENBQUMsTUFBTSxDQUFDLFVBQVUsRUFBRSxDQUFDO0lBQzdCLENBQUM7SUFFUyxnQ0FBVyxHQUFyQjtRQUNJLElBQUksQ0FBQyxNQUFNLENBQUMsV0FBVyxFQUFFLENBQUM7SUFDOUIsQ0FBQztJQWxCa0M7UUFBbEMsZ0JBQVMsQ0FBQyxnQ0FBc0IsQ0FBQztrQ0FBNEIsZ0NBQXNCO3VEQUFDO0lBbUJ6RixpQkFBQztDQUFBLEFBckJELElBcUJDO0FBckJZLGdDQUFVIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHtWaWV3Q2hpbGQsIENoYW5nZURldGVjdG9yUmVmLCBBZnRlclZpZXdJbml0fSBmcm9tIFwiQGFuZ3VsYXIvY29yZVwiO1xuaW1wb3J0IHtSYWRTaWRlRHJhd2VyQ29tcG9uZW50LCBTaWRlRHJhd2VyVHlwZX0gZnJvbSBcIm5hdGl2ZXNjcmlwdC1wcm8tdWkvc2lkZWRyYXdlci9hbmd1bGFyXCI7XG5cbmV4cG9ydCBjbGFzcyBEcmF3ZXJQYWdlIGltcGxlbWVudHMgQWZ0ZXJWaWV3SW5pdCB7XG5cbiAgICBAVmlld0NoaWxkKFJhZFNpZGVEcmF3ZXJDb21wb25lbnQpIHByb3RlY3RlZCBkcmF3ZXJDb21wb25lbnQ6IFJhZFNpZGVEcmF3ZXJDb21wb25lbnQ7XG4gICAgcHJvdGVjdGVkIGRyYXdlcjogU2lkZURyYXdlclR5cGU7XG5cbiAgICBjb25zdHJ1Y3Rvcihwcml2YXRlIF9jaGFuZ2VEZXRlY3RvclJlZjogQ2hhbmdlRGV0ZWN0b3JSZWYpIHtcbiAgICAgICAgXG4gICAgfVxuXG4gICAgbmdBZnRlclZpZXdJbml0KCkge1xuICAgICAgICB0aGlzLmRyYXdlciA9IHRoaXMuZHJhd2VyQ29tcG9uZW50LnNpZGVEcmF3ZXI7XG4gICAgICAgIHRoaXMuX2NoYW5nZURldGVjdG9yUmVmLmRldGVjdENoYW5nZXMoKTtcbiAgICB9XG5cbiAgICBwcm90ZWN0ZWQgb3BlbkRyYXdlcigpIHtcbiAgICAgICAgdGhpcy5kcmF3ZXIuc2hvd0RyYXdlcigpO1xuICAgIH1cblxuICAgIHByb3RlY3RlZCBjbG9zZURyYXdlcigpIHtcbiAgICAgICAgdGhpcy5kcmF3ZXIuY2xvc2VEcmF3ZXIoKTtcbiAgICB9XG59XG4iXX0=