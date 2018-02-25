"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var core_1 = require("@angular/core");
var applicationSettings = require("application-settings");
var auth_service_1 = require("../../shared/auth/auth.service");
var helpers_classes_1 = require("../../components/helpers/helpers.classes");
var router_1 = require("@angular/router");
var common_1 = require("@angular/common");
var page_1 = require("../page");
var page_2 = require("ui/page");
var color_1 = require("color");
var SignupPage = /** @class */ (function (_super) {
    __extends(SignupPage, _super);
    function SignupPage(location, router, authService, config, page) {
        var _this = _super.call(this, location) || this;
        _this.location = location;
        _this.router = router;
        _this.authService = authService;
        _this.config = config;
        _this.page = page;
        _this.signinData = new auth_service_1.SigninData();
        return _this;
    }
    SignupPage.prototype.submit = function () {
        var _this = this;
        this.signinData.gender = Number.parseInt(this.gender.selectedValue);
        this.signinData.business = this.barbeshoper.nativeElement.checked;
        this.authService.register(this.signinData, this.errorHandler)
            .subscribe(function (data) { return _this.successHandler(data, _this); }, function (error) { return _this.errorHandler; });
    };
    SignupPage.prototype.ngOnInit = function () {
        this.page.backgroundColor = "#bc15c2";
        this.page.color = new color_1.Color("white");
        this.gender = new helpers_classes_1.RadioOptionList([
            new helpers_classes_1.RadioOption("0", "femme"),
            new helpers_classes_1.RadioOption("1", "homme")
        ]);
    };
    SignupPage.prototype.ngAfterViewInit = function () {
    };
    SignupPage.prototype.successHandler = function (data, p) {
        console.log("data");
        console.dir(data);
        if (p.config.LCD) {
            applicationSettings.setString("muk", p.config.LCD.mobileData.muk);
            p.router.navigate(["/tiassu"]);
        }
        else
            p.errorHandler(null);
    };
    SignupPage.prototype.errorHandler = function (error) { alert("Unfortunately we sing u up. Please Try again!"); };
    SignupPage.prototype.toggleCheck = function () {
        this.barbeshoper.nativeElement.toggle();
    };
    __decorate([
        core_1.ViewChild("container"),
        __metadata("design:type", core_1.ElementRef)
    ], SignupPage.prototype, "container", void 0);
    __decorate([
        core_1.ViewChild("barbeshoper"),
        __metadata("design:type", core_1.ElementRef)
    ], SignupPage.prototype, "barbeshoper", void 0);
    SignupPage = __decorate([
        core_1.Component({
            selector: 'signup-page',
            providers: [auth_service_1.AuthService, auth_service_1.Config],
            templateUrl: 'pages/signup/signup.page.html',
            styleUrls: ["pages/signup/signup-common.css", "pages/signup/signup.css"]
        }),
        __metadata("design:paramtypes", [common_1.Location,
            router_1.Router,
            auth_service_1.AuthService,
            auth_service_1.Config,
            page_2.Page])
    ], SignupPage);
    return SignupPage;
}(page_1.Page));
exports.SignupPage = SignupPage;
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoic2lnbnVwLnBhZ2UuanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyJzaWdudXAucGFnZS50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOztBQUFBLHNDQUF3RjtBQUN4RiwwREFBNEQ7QUFFNUQsK0RBQWlGO0FBQ2pGLDRFQUF3RjtBQUV4RiwwQ0FBeUM7QUFDekMsMENBQTJDO0FBQzNDLGdDQUErQjtBQUMvQixnQ0FBeUM7QUFDekMsK0JBQThCO0FBVTlCO0lBQWdDLDhCQUFJO0lBUWxDLG9CQUNVLFFBQWtCLEVBQ2xCLE1BQWMsRUFDZCxXQUF3QixFQUN4QixNQUFjLEVBQ2QsSUFBWTtRQUx0QixZQU1FLGtCQUFNLFFBQVEsQ0FBQyxTQUVoQjtRQVBTLGNBQVEsR0FBUixRQUFRLENBQVU7UUFDbEIsWUFBTSxHQUFOLE1BQU0sQ0FBUTtRQUNkLGlCQUFXLEdBQVgsV0FBVyxDQUFhO1FBQ3hCLFlBQU0sR0FBTixNQUFNLENBQVE7UUFDZCxVQUFJLEdBQUosSUFBSSxDQUFRO1FBRXBCLEtBQUksQ0FBQyxVQUFVLEdBQUcsSUFBSSx5QkFBVSxFQUFFLENBQUM7O0lBQ3JDLENBQUM7SUFHRCwyQkFBTSxHQUFOO1FBQUEsaUJBUUM7UUFQQyxJQUFJLENBQUMsVUFBVSxDQUFDLE1BQU0sR0FBRyxNQUFNLENBQUMsUUFBUSxDQUFDLElBQUksQ0FBQyxNQUFNLENBQUMsYUFBYSxDQUFDLENBQUM7UUFDcEUsSUFBSSxDQUFDLFVBQVUsQ0FBQyxRQUFRLEdBQUcsSUFBSSxDQUFDLFdBQVcsQ0FBQyxhQUFhLENBQUMsT0FBTyxDQUFDO1FBQ2xFLElBQUksQ0FBQyxXQUFXLENBQUMsUUFBUSxDQUFDLElBQUksQ0FBQyxVQUFVLEVBQUUsSUFBSSxDQUFDLFlBQVksQ0FBQzthQUMxRCxTQUFTLENBQ1IsVUFBQyxJQUFJLElBQUssT0FBQSxLQUFJLENBQUMsY0FBYyxDQUFDLElBQUksRUFBRSxLQUFJLENBQUMsRUFBL0IsQ0FBK0IsRUFDekMsVUFBQyxLQUFLLElBQUssT0FBQSxLQUFJLENBQUMsWUFBWSxFQUFqQixDQUFpQixDQUM3QixDQUFDO0lBQ04sQ0FBQztJQUNELDZCQUFRLEdBQVI7UUFDRSxJQUFJLENBQUMsSUFBSSxDQUFDLGVBQWUsR0FBRyxTQUFTLENBQUM7UUFDdEMsSUFBSSxDQUFDLElBQUksQ0FBQyxLQUFLLEdBQUcsSUFBSSxhQUFLLENBQUMsT0FBTyxDQUFDLENBQUM7UUFDckMsSUFBSSxDQUFDLE1BQU0sR0FBRyxJQUFJLGlDQUFlLENBQUM7WUFDaEMsSUFBSSw2QkFBVyxDQUFDLEdBQUcsRUFBRSxPQUFPLENBQUM7WUFDN0IsSUFBSSw2QkFBVyxDQUFDLEdBQUcsRUFBRSxPQUFPLENBQUM7U0FDOUIsQ0FBQyxDQUFDO0lBQ0wsQ0FBQztJQUVELG9DQUFlLEdBQWY7SUFDQSxDQUFDO0lBRU8sbUNBQWMsR0FBdEIsVUFBdUIsSUFBUyxFQUFFLENBQWE7UUFDN0MsT0FBTyxDQUFDLEdBQUcsQ0FBQyxNQUFNLENBQUMsQ0FBQztRQUNwQixPQUFPLENBQUMsR0FBRyxDQUFDLElBQUksQ0FBQyxDQUFDO1FBQ2xCLEVBQUUsQ0FBQyxDQUFDLENBQUMsQ0FBQyxNQUFNLENBQUMsR0FBRyxDQUFDLENBQUMsQ0FBQztZQUNqQixtQkFBbUIsQ0FBQyxTQUFTLENBQUMsS0FBSyxFQUFFLENBQUMsQ0FBQyxNQUFNLENBQUMsR0FBRyxDQUFDLFVBQVUsQ0FBQyxHQUFHLENBQUMsQ0FBQztZQUNsRSxDQUFDLENBQUMsTUFBTSxDQUFDLFFBQVEsQ0FBQyxDQUFDLFNBQVMsQ0FBQyxDQUFDLENBQUM7UUFDakMsQ0FBQztRQUNELElBQUk7WUFDRixDQUFDLENBQUMsWUFBWSxDQUFDLElBQUksQ0FBQyxDQUFDO0lBQ3pCLENBQUM7SUFDTyxpQ0FBWSxHQUFwQixVQUFxQixLQUFLLElBQUksS0FBSyxDQUFDLCtDQUErQyxDQUFDLENBQUMsQ0FBQyxDQUFDO0lBR2hGLGdDQUFXLEdBQWxCO1FBQ0UsSUFBSSxDQUFDLFdBQVcsQ0FBQyxhQUFhLENBQUMsTUFBTSxFQUFFLENBQUM7SUFDMUMsQ0FBQztJQXBEdUI7UUFBdkIsZ0JBQVMsQ0FBQyxXQUFXLENBQUM7a0NBQVksaUJBQVU7aURBQUM7SUFDcEI7UUFBekIsZ0JBQVMsQ0FBQyxhQUFhLENBQUM7a0NBQWMsaUJBQVU7bURBQUM7SUFKdkMsVUFBVTtRQU50QixnQkFBUyxDQUFDO1lBQ1QsUUFBUSxFQUFFLGFBQWE7WUFDdkIsU0FBUyxFQUFFLENBQUMsMEJBQVcsRUFBRSxxQkFBTSxDQUFDO1lBQ2hDLFdBQVcsRUFBRSwrQkFBK0I7WUFDNUMsU0FBUyxFQUFFLENBQUMsZ0NBQWdDLEVBQUUseUJBQXlCLENBQUM7U0FDekUsQ0FBQzt5Q0FVb0IsaUJBQVE7WUFDVixlQUFNO1lBQ0QsMEJBQVc7WUFDaEIscUJBQU07WUFDUixXQUFNO09BYlgsVUFBVSxDQXlEdEI7SUFBRCxpQkFBQztDQUFBLEFBekRELENBQWdDLFdBQUksR0F5RG5DO0FBekRZLGdDQUFVIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgQ29tcG9uZW50LCBFbGVtZW50UmVmLCBPbkluaXQsIEFmdGVyVmlld0luaXQsIFZpZXdDaGlsZCB9IGZyb20gXCJAYW5ndWxhci9jb3JlXCI7XG5pbXBvcnQgKiBhcyBhcHBsaWNhdGlvblNldHRpbmdzIGZyb20gXCJhcHBsaWNhdGlvbi1zZXR0aW5nc1wiO1xuXG5pbXBvcnQgeyBBdXRoU2VydmljZSwgQ29uZmlnLCBTaWduaW5EYXRhIH0gZnJvbSBcIi4uLy4uL3NoYXJlZC9hdXRoL2F1dGguc2VydmljZVwiO1xuaW1wb3J0IHsgUmFkaW9PcHRpb25MaXN0LCBSYWRpb09wdGlvbiB9IGZyb20gXCIuLi8uLi9jb21wb25lbnRzL2hlbHBlcnMvaGVscGVycy5jbGFzc2VzXCI7XG5cbmltcG9ydCB7IFJvdXRlciB9IGZyb20gXCJAYW5ndWxhci9yb3V0ZXJcIjtcbmltcG9ydCB7IExvY2F0aW9uIH0gZnJvbSBcIkBhbmd1bGFyL2NvbW1vblwiO1xuaW1wb3J0IHsgUGFnZSB9IGZyb20gXCIuLi9wYWdlXCI7XG5pbXBvcnQgeyBQYWdlIGFzIFBhZ2VVSSB9IGZyb20gXCJ1aS9wYWdlXCI7XG5pbXBvcnQgeyBDb2xvciB9IGZyb20gXCJjb2xvclwiO1xuaW1wb3J0IHsgVmlldyB9IGZyb20gXCJ1aS9jb3JlL3ZpZXdcIjtcbmltcG9ydCAqIGFzIHBsdGZpbmZvcyBmcm9tIFwiLi4vLi4vY29uZmlncy9wbGF0ZWZvcm0uaW5mb3NcIjtcblxuQENvbXBvbmVudCh7XG4gIHNlbGVjdG9yOiAnc2lnbnVwLXBhZ2UnLFxuICBwcm92aWRlcnM6IFtBdXRoU2VydmljZSwgQ29uZmlnXSxcbiAgdGVtcGxhdGVVcmw6ICdwYWdlcy9zaWdudXAvc2lnbnVwLnBhZ2UuaHRtbCcsXG4gIHN0eWxlVXJsczogW1wicGFnZXMvc2lnbnVwL3NpZ251cC1jb21tb24uY3NzXCIsIFwicGFnZXMvc2lnbnVwL3NpZ251cC5jc3NcIl1cbn0pXG5leHBvcnQgY2xhc3MgU2lnbnVwUGFnZSBleHRlbmRzIFBhZ2UgaW1wbGVtZW50cyBPbkluaXQsIEFmdGVyVmlld0luaXQge1xuXG4gIHNpZ25pbkRhdGE6IFNpZ25pbkRhdGE7XG4gIEBWaWV3Q2hpbGQoXCJjb250YWluZXJcIikgY29udGFpbmVyOiBFbGVtZW50UmVmO1xuICBAVmlld0NoaWxkKFwiYmFyYmVzaG9wZXJcIikgYmFyYmVzaG9wZXI6IEVsZW1lbnRSZWY7XG4gIGdlbmRlcjogUmFkaW9PcHRpb25MaXN0O1xuICBlcnJvcnM6IFJhZGlvT3B0aW9uTGlzdDtcbiAgXG4gIGNvbnN0cnVjdG9yKFxuICAgIHByaXZhdGUgbG9jYXRpb246IExvY2F0aW9uLFxuICAgIHByaXZhdGUgcm91dGVyOiBSb3V0ZXIsXG4gICAgcHJpdmF0ZSBhdXRoU2VydmljZTogQXV0aFNlcnZpY2UsXG4gICAgcHJpdmF0ZSBjb25maWc6IENvbmZpZyxcbiAgICBwcml2YXRlIHBhZ2U6IFBhZ2VVSSkge1xuICAgIHN1cGVyKGxvY2F0aW9uKTtcbiAgICB0aGlzLnNpZ25pbkRhdGEgPSBuZXcgU2lnbmluRGF0YSgpO1xuICB9XG5cblxuICBzdWJtaXQoKSB7XG4gICAgdGhpcy5zaWduaW5EYXRhLmdlbmRlciA9IE51bWJlci5wYXJzZUludCh0aGlzLmdlbmRlci5zZWxlY3RlZFZhbHVlKTtcbiAgICB0aGlzLnNpZ25pbkRhdGEuYnVzaW5lc3MgPSB0aGlzLmJhcmJlc2hvcGVyLm5hdGl2ZUVsZW1lbnQuY2hlY2tlZDtcbiAgICB0aGlzLmF1dGhTZXJ2aWNlLnJlZ2lzdGVyKHRoaXMuc2lnbmluRGF0YSwgdGhpcy5lcnJvckhhbmRsZXIpXG4gICAgICAuc3Vic2NyaWJlKFxuICAgICAgICAoZGF0YSkgPT4gdGhpcy5zdWNjZXNzSGFuZGxlcihkYXRhLCB0aGlzKSxcbiAgICAgICAgKGVycm9yKSA9PiB0aGlzLmVycm9ySGFuZGxlclxuICAgICAgKTtcbiAgfVxuICBuZ09uSW5pdCgpIHtcbiAgICB0aGlzLnBhZ2UuYmFja2dyb3VuZENvbG9yID0gXCIjYmMxNWMyXCI7XG4gICAgdGhpcy5wYWdlLmNvbG9yID0gbmV3IENvbG9yKFwid2hpdGVcIik7XG4gICAgdGhpcy5nZW5kZXIgPSBuZXcgUmFkaW9PcHRpb25MaXN0KFtcbiAgICAgIG5ldyBSYWRpb09wdGlvbihcIjBcIiwgXCJmZW1tZVwiKSxcbiAgICAgIG5ldyBSYWRpb09wdGlvbihcIjFcIiwgXCJob21tZVwiKVxuICAgIF0pO1xuICB9XG5cbiAgbmdBZnRlclZpZXdJbml0KCk6IHZvaWQge1xuICB9XG5cbiAgcHJpdmF0ZSBzdWNjZXNzSGFuZGxlcihkYXRhOiBhbnksIHA6IFNpZ251cFBhZ2UpIHtcbiAgICBjb25zb2xlLmxvZyhcImRhdGFcIik7XG4gICAgY29uc29sZS5kaXIoZGF0YSk7XG4gICAgaWYgKHAuY29uZmlnLkxDRCkge1xuICAgICAgYXBwbGljYXRpb25TZXR0aW5ncy5zZXRTdHJpbmcoXCJtdWtcIiwgcC5jb25maWcuTENELm1vYmlsZURhdGEubXVrKTtcbiAgICAgIHAucm91dGVyLm5hdmlnYXRlKFtcIi90aWFzc3VcIl0pO1xuICAgIH1cbiAgICBlbHNlXG4gICAgICBwLmVycm9ySGFuZGxlcihudWxsKTtcbiAgfVxuICBwcml2YXRlIGVycm9ySGFuZGxlcihlcnJvcikgeyBhbGVydChcIlVuZm9ydHVuYXRlbHkgd2Ugc2luZyB1IHVwLiBQbGVhc2UgVHJ5IGFnYWluIVwiKTsgfVxuXG5cbiAgcHVibGljIHRvZ2dsZUNoZWNrKCkge1xuICAgIHRoaXMuYmFyYmVzaG9wZXIubmF0aXZlRWxlbWVudC50b2dnbGUoKTtcbiAgfVxuXG59ICJdfQ==