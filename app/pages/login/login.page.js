"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var core_1 = require("@angular/core");
//import { LoginData } from "../../shared/auth/auth"; 
var auth_service_1 = require("../../shared/auth/auth.service");
var router_1 = require("@angular/router");
var common_1 = require("@angular/common");
var page_1 = require("../page");
var page_2 = require("ui/page");
var color_1 = require("color");
var LoginPage = /** @class */ (function (_super) {
    __extends(LoginPage, _super);
    function LoginPage(location, router, authService, config, page) {
        var _this = _super.call(this, location) || this;
        _this.location = location;
        _this.router = router;
        _this.authService = authService;
        _this.config = config;
        _this.page = page;
        _this.loginData = new auth_service_1.LoginData();
        return _this;
    }
    LoginPage.prototype.submit = function () {
        var _this = this;
        this.authService.login(this.loginData, this.errorHandler)
            .subscribe(function (data) { return _this.successHandler(data, _this); }, function (error) { return _this.errorHandler; });
    };
    LoginPage.prototype.ngOnInit = function () {
        this.page.actionBarHidden = true;
        this.page.backgroundColor = "#bc15c2";
        this.page.color = new color_1.Color("white");
    };
    LoginPage.prototype.ngAfterViewInit = function () {
        /*  let container = <View>this.container.nativeElement;
          container.animate({
            backgroundColor: new Color("#301217"),
            duration: 200
          });*/
    };
    LoginPage.prototype.displaySignup = function () {
        this.router.navigate(["/signup"]);
    };
    LoginPage.prototype.successHandler = function (data, p) {
        if (p.config.LCD)
            p.router.navigate(["/tiassu"]);
        else
            p.errorHandler(null);
    };
    LoginPage.prototype.errorHandler = function (error) { alert("Unfortunately we could not find your account."); };
    __decorate([
        core_1.ViewChild("container"),
        __metadata("design:type", core_1.ElementRef)
    ], LoginPage.prototype, "container", void 0);
    LoginPage = __decorate([
        core_1.Component({
            selector: 'login-page',
            providers: [auth_service_1.AuthService, auth_service_1.Config],
            templateUrl: 'pages/login/login.page.html',
            styleUrls: ["pages/login/login-common.css", "pages/login/login.css"]
        }),
        __metadata("design:paramtypes", [common_1.Location,
            router_1.Router,
            auth_service_1.AuthService,
            auth_service_1.Config,
            page_2.Page])
    ], LoginPage);
    return LoginPage;
}(page_1.Page));
exports.LoginPage = LoginPage;
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoibG9naW4ucGFnZS5qcyIsInNvdXJjZVJvb3QiOiIiLCJzb3VyY2VzIjpbImxvZ2luLnBhZ2UudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7QUFBQSxzQ0FBd0Y7QUFDeEYsc0RBQXNEO0FBQ3RELCtEQUFnRjtBQUVoRiwwQ0FBeUM7QUFDekMsMENBQTJDO0FBQzNDLGdDQUErQjtBQUMvQixnQ0FBeUM7QUFDekMsK0JBQThCO0FBVTlCO0lBQStCLDZCQUFJO0lBS2pDLG1CQUNVLFFBQWtCLEVBQ2xCLE1BQWMsRUFDZCxXQUF3QixFQUN4QixNQUFjLEVBQ2QsSUFBWTtRQUx0QixZQU1FLGtCQUFNLFFBQVEsQ0FBQyxTQUVoQjtRQVBTLGNBQVEsR0FBUixRQUFRLENBQVU7UUFDbEIsWUFBTSxHQUFOLE1BQU0sQ0FBUTtRQUNkLGlCQUFXLEdBQVgsV0FBVyxDQUFhO1FBQ3hCLFlBQU0sR0FBTixNQUFNLENBQVE7UUFDZCxVQUFJLEdBQUosSUFBSSxDQUFRO1FBRXBCLEtBQUksQ0FBQyxTQUFTLEdBQUcsSUFBSSx3QkFBUyxFQUFFLENBQUM7O0lBQ25DLENBQUM7SUFFRCwwQkFBTSxHQUFOO1FBQUEsaUJBT0M7UUFOQyxJQUFJLENBQUMsV0FBVyxDQUFDLEtBQUssQ0FBQyxJQUFJLENBQUMsU0FBUyxFQUFFLElBQUksQ0FBQyxZQUFZLENBQUM7YUFDdEQsU0FBUyxDQUNSLFVBQUMsSUFBSSxJQUFLLE9BQUEsS0FBSSxDQUFDLGNBQWMsQ0FBQyxJQUFJLEVBQUUsS0FBSSxDQUFDLEVBQS9CLENBQStCLEVBQ3pDLFVBQUMsS0FBSyxJQUFLLE9BQUEsS0FBSSxDQUFDLFlBQVksRUFBakIsQ0FBaUIsQ0FDN0IsQ0FBQztJQUVOLENBQUM7SUFDRCw0QkFBUSxHQUFSO1FBQ0UsSUFBSSxDQUFDLElBQUksQ0FBQyxlQUFlLEdBQUcsSUFBSSxDQUFDO1FBQ2pDLElBQUksQ0FBQyxJQUFJLENBQUMsZUFBZSxHQUFHLFNBQVMsQ0FBQztRQUN0QyxJQUFJLENBQUMsSUFBSSxDQUFDLEtBQUssR0FBRyxJQUFJLGFBQUssQ0FBQyxPQUFPLENBQUMsQ0FBQztJQUN2QyxDQUFDO0lBRUQsbUNBQWUsR0FBZjtRQUNBOzs7O2VBSU87SUFDUCxDQUFDO0lBQ0QsaUNBQWEsR0FBYjtRQUNFLElBQUksQ0FBQyxNQUFNLENBQUMsUUFBUSxDQUFDLENBQUMsU0FBUyxDQUFDLENBQUMsQ0FBQztJQUNwQyxDQUFDO0lBRU8sa0NBQWMsR0FBdEIsVUFBdUIsSUFBUyxFQUFFLENBQVk7UUFDNUMsRUFBRSxDQUFDLENBQUMsQ0FBQyxDQUFDLE1BQU0sQ0FBQyxHQUFHLENBQUM7WUFDZixDQUFDLENBQUMsTUFBTSxDQUFDLFFBQVEsQ0FBQyxDQUFDLFNBQVMsQ0FBQyxDQUFDLENBQUM7UUFDakMsSUFBSTtZQUNGLENBQUMsQ0FBQyxZQUFZLENBQUMsSUFBSSxDQUFDLENBQUM7SUFDekIsQ0FBQztJQUNELGdDQUFZLEdBQVosVUFBYSxLQUFLLElBQUksS0FBSyxDQUFDLCtDQUErQyxDQUFDLENBQUMsQ0FBQyxDQUFDO0lBM0N2RDtRQUF2QixnQkFBUyxDQUFDLFdBQVcsQ0FBQztrQ0FBWSxpQkFBVTtnREFBQztJQUhuQyxTQUFTO1FBTnJCLGdCQUFTLENBQUM7WUFDVCxRQUFRLEVBQUUsWUFBWTtZQUN0QixTQUFTLEVBQUUsQ0FBQywwQkFBVyxFQUFFLHFCQUFNLENBQUM7WUFDaEMsV0FBVyxFQUFFLDZCQUE2QjtZQUMxQyxTQUFTLEVBQUUsQ0FBQyw4QkFBOEIsRUFBRSx1QkFBdUIsQ0FBQztTQUNyRSxDQUFDO3lDQU9vQixpQkFBUTtZQUNWLGVBQU07WUFDRCwwQkFBVztZQUNoQixxQkFBTTtZQUNSLFdBQU07T0FWWCxTQUFTLENBK0NyQjtJQUFELGdCQUFDO0NBQUEsQUEvQ0QsQ0FBK0IsV0FBSSxHQStDbEM7QUEvQ1ksOEJBQVMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBDb21wb25lbnQsIEVsZW1lbnRSZWYsIE9uSW5pdCwgQWZ0ZXJWaWV3SW5pdCwgVmlld0NoaWxkIH0gZnJvbSBcIkBhbmd1bGFyL2NvcmVcIjtcbi8vaW1wb3J0IHsgTG9naW5EYXRhIH0gZnJvbSBcIi4uLy4uL3NoYXJlZC9hdXRoL2F1dGhcIjsgXG5pbXBvcnQgeyBBdXRoU2VydmljZSwgQ29uZmlnLCBMb2dpbkRhdGEgfSBmcm9tIFwiLi4vLi4vc2hhcmVkL2F1dGgvYXV0aC5zZXJ2aWNlXCI7XG5cbmltcG9ydCB7IFJvdXRlciB9IGZyb20gXCJAYW5ndWxhci9yb3V0ZXJcIjtcbmltcG9ydCB7IExvY2F0aW9uIH0gZnJvbSBcIkBhbmd1bGFyL2NvbW1vblwiO1xuaW1wb3J0IHsgUGFnZSB9IGZyb20gXCIuLi9wYWdlXCI7XG5pbXBvcnQgeyBQYWdlIGFzIFBhZ2VVSSB9IGZyb20gXCJ1aS9wYWdlXCI7XG5pbXBvcnQgeyBDb2xvciB9IGZyb20gXCJjb2xvclwiO1xuaW1wb3J0IHsgVmlldyB9IGZyb20gXCJ1aS9jb3JlL3ZpZXdcIjtcbmltcG9ydCAqIGFzIHBsdGZpbmZvcyBmcm9tIFwiLi4vLi4vY29uZmlncy9wbGF0ZWZvcm0uaW5mb3NcIjtcblxuQENvbXBvbmVudCh7XG4gIHNlbGVjdG9yOiAnbG9naW4tcGFnZScsXG4gIHByb3ZpZGVyczogW0F1dGhTZXJ2aWNlLCBDb25maWddLFxuICB0ZW1wbGF0ZVVybDogJ3BhZ2VzL2xvZ2luL2xvZ2luLnBhZ2UuaHRtbCcsXG4gIHN0eWxlVXJsczogW1wicGFnZXMvbG9naW4vbG9naW4tY29tbW9uLmNzc1wiLCBcInBhZ2VzL2xvZ2luL2xvZ2luLmNzc1wiXVxufSlcbmV4cG9ydCBjbGFzcyBMb2dpblBhZ2UgZXh0ZW5kcyBQYWdlIGltcGxlbWVudHMgT25Jbml0LCBBZnRlclZpZXdJbml0IHtcbiBcbiAgbG9naW5EYXRhOiBMb2dpbkRhdGE7XG4gIEBWaWV3Q2hpbGQoXCJjb250YWluZXJcIikgY29udGFpbmVyOiBFbGVtZW50UmVmO1xuXG4gIGNvbnN0cnVjdG9yKFxuICAgIHByaXZhdGUgbG9jYXRpb246IExvY2F0aW9uLFxuICAgIHByaXZhdGUgcm91dGVyOiBSb3V0ZXIsXG4gICAgcHJpdmF0ZSBhdXRoU2VydmljZTogQXV0aFNlcnZpY2UsXG4gICAgcHJpdmF0ZSBjb25maWc6IENvbmZpZyxcbiAgICBwcml2YXRlIHBhZ2U6IFBhZ2VVSSkge1xuICAgIHN1cGVyKGxvY2F0aW9uKTtcbiAgICB0aGlzLmxvZ2luRGF0YSA9IG5ldyBMb2dpbkRhdGEoKTtcbiAgfVxuXG4gIHN1Ym1pdCgpIHtcbiAgICB0aGlzLmF1dGhTZXJ2aWNlLmxvZ2luKHRoaXMubG9naW5EYXRhLCB0aGlzLmVycm9ySGFuZGxlcilcbiAgICAgIC5zdWJzY3JpYmUoXG4gICAgICAgIChkYXRhKSA9PiB0aGlzLnN1Y2Nlc3NIYW5kbGVyKGRhdGEsIHRoaXMpLFxuICAgICAgICAoZXJyb3IpID0+IHRoaXMuZXJyb3JIYW5kbGVyXG4gICAgICApO1xuIFxuICB9XG4gIG5nT25Jbml0KCkgeyBcbiAgICB0aGlzLnBhZ2UuYWN0aW9uQmFySGlkZGVuID0gdHJ1ZTtcbiAgICB0aGlzLnBhZ2UuYmFja2dyb3VuZENvbG9yID0gXCIjYmMxNWMyXCI7XG4gICAgdGhpcy5wYWdlLmNvbG9yID0gbmV3IENvbG9yKFwid2hpdGVcIik7IFxuICB9XG5cbiAgbmdBZnRlclZpZXdJbml0KCk6IHZvaWQge1xuICAvKiAgbGV0IGNvbnRhaW5lciA9IDxWaWV3PnRoaXMuY29udGFpbmVyLm5hdGl2ZUVsZW1lbnQ7XG4gICAgY29udGFpbmVyLmFuaW1hdGUoe1xuICAgICAgYmFja2dyb3VuZENvbG9yOiBuZXcgQ29sb3IoXCIjMzAxMjE3XCIpLFxuICAgICAgZHVyYXRpb246IDIwMFxuICAgIH0pOyovXG4gIH1cbiAgZGlzcGxheVNpZ251cCgpIHtcbiAgICB0aGlzLnJvdXRlci5uYXZpZ2F0ZShbXCIvc2lnbnVwXCJdKTtcbiAgfVxuXG4gIHByaXZhdGUgc3VjY2Vzc0hhbmRsZXIoZGF0YTogYW55LCBwOiBMb2dpblBhZ2UpIHtcbiAgICBpZiAocC5jb25maWcuTENEKVxuICAgICAgcC5yb3V0ZXIubmF2aWdhdGUoW1wiL3RpYXNzdVwiXSk7XG4gICAgZWxzZVxuICAgICAgcC5lcnJvckhhbmRsZXIobnVsbCk7XG4gIH1cbiAgZXJyb3JIYW5kbGVyKGVycm9yKSB7IGFsZXJ0KFwiVW5mb3J0dW5hdGVseSB3ZSBjb3VsZCBub3QgZmluZCB5b3VyIGFjY291bnQuXCIpOyB9XG59Il19