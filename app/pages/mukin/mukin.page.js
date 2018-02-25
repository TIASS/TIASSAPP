"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var core_1 = require("@angular/core");
//import { SecureStorage, } from "nativescript-secure-storage";//TypeError: Cannot read property 'init' of undefined
var applicationSettings = require("application-settings");
var auth_service_1 = require("../../shared/auth/auth.service");
var router_1 = require("@angular/router");
var common_1 = require("@angular/common");
var page_1 = require("../page");
var page_2 = require("ui/page");
var MukinPage = /** @class */ (function (_super) {
    __extends(MukinPage, _super);
    function MukinPage(location, router, authService, config, page) {
        var _this = _super.call(this, location) || this;
        _this.location = location;
        _this.router = router;
        _this.authService = authService;
        _this.config = config;
        _this.page = page;
        _this.progress = -1;
        _this.authState = -1;
        _this.mukinData = new auth_service_1.MobileData();
        _this.loginData = new auth_service_1.LoginData();
        return _this;
    }
    MukinPage.prototype.ngOnInit = function () {
        this.page.backgroundColor = "#bc15c2";
    };
    MukinPage.prototype.ngAfterViewInit = function () {
        this.enAuthState0();
    };
    MukinPage.prototype.muk = function () {
        var _this = this;
        this.progress = 0;
        this.authService.mukin(this.mukinData, function (err) { })
            .subscribe(function (data) { return _this.successHandler(data, _this); }, function (error) { return _this.errorHandler(error); });
    };
    MukinPage.prototype.login = function () {
        var _this = this;
        this.authService.login(this.loginData, function (err) { })
            .subscribe(function (data) { return _this.successHandlerLogin(data, _this); }, function (error) { return _this.errorHandlerLogin(error); });
    };
    MukinPage.prototype.successHandler = function (data, p) {
        console.log("success Handler");
        console.dir(data);
        if (p.config.LCD) {
            this.progress = 100;
            applicationSettings.setString("muk", p.config.LCD.mobileData.muk);
            p.router.navigate(["/tiasse"]);
        }
        else
            p.errorHandler(null);
    };
    MukinPage.prototype.errorHandler = function (error) {
        this.enAuthState1();
    };
    MukinPage.prototype.successHandlerLogin = function (data, p) {
        console.log("success Handler Login");
        console.dir(data);
        if (p.config.LCD) {
            applicationSettings.setString("muk", p.config.LCD.mobileData.muk);
            p.router.navigate(["/tiasse"]);
        }
        else
            p.errorHandlerLogin(null);
    };
    MukinPage.prototype.errorHandlerLogin = function (error) {
        alert("Unfortunately we could not find your account.");
        this.enAuthState2();
    };
    MukinPage.prototype.enAuthState0 = function () {
        this.authState = -1;
        var that = this;
        var as = this.containerAuth0.nativeElement;
        as.animate({
            translate: { x: 0, y: 100 },
            duration: 10
        }).then(function () {
            that.authState = 0;
            return as.animate({
                translate: { x: 0, y: 0 },
                duration: 100
            });
        }).then(function () {
            that.mukinData.muk = applicationSettings.getString("muk", undefined);
            if (that.mukinData.muk)
                that.muk();
            else
                that.enAuthState1();
        });
    };
    MukinPage.prototype.enAuthState1 = function () {
        this.authState = -1;
        var that = this;
        var as = this.containerAuth1.nativeElement;
        as.animate({
            translate: { x: 0, y: 100 },
            duration: 10
        }).then(function () {
            that.authState = 1;
            return as.animate({
                translate: { x: 0, y: 0 },
                duration: 100
            });
        });
    };
    MukinPage.prototype.enAuthState2 = function () {
        this.authState = -1;
        var that = this;
        var as = this.containerAuth2.nativeElement;
        as.animate({
            translate: { x: 0, y: 100 },
            duration: 10
        }).then(function () {
            that.authState = 2;
            return as.animate({
                translate: { x: 0, y: 0 },
                duration: 100
            });
        });
    };
    MukinPage.prototype.goback = function () {
        if (this.authState !== 2)
            return;
        this.enAuthState1();
    };
    MukinPage.prototype.displaySignup = function () {
        this.router.navigate(["/signup"]);
    };
    __decorate([
        core_1.ViewChild("containerAuth0"),
        __metadata("design:type", core_1.ElementRef)
    ], MukinPage.prototype, "containerAuth0", void 0);
    __decorate([
        core_1.ViewChild("containerAuth1"),
        __metadata("design:type", core_1.ElementRef)
    ], MukinPage.prototype, "containerAuth1", void 0);
    __decorate([
        core_1.ViewChild("containerAuth2"),
        __metadata("design:type", core_1.ElementRef)
    ], MukinPage.prototype, "containerAuth2", void 0);
    MukinPage = __decorate([
        core_1.Component({
            selector: 'mukin-page',
            providers: [auth_service_1.AuthService, auth_service_1.Config],
            templateUrl: 'pages/mukin/mukin.page.html',
            styleUrls: ["pages/mukin/mukin-common.css", "pages/mukin/mukin.css"]
        }),
        __metadata("design:paramtypes", [common_1.Location,
            router_1.Router,
            auth_service_1.AuthService,
            auth_service_1.Config,
            page_2.Page])
    ], MukinPage);
    return MukinPage;
}(page_1.Page));
exports.MukinPage = MukinPage;
/*
    this.mukSequence = new Observable(observer => {
      setTimeout(() => {
        observer.next(function F1() { that.mukinData = new MobileData(); that.loginData = new LoginData(); that.authState = 0; that.progress = 0; });
      }, 100);
      setTimeout(() => {
        observer.next(function F2() { that.enAuthState0(); });
      }, 100);
      setTimeout(() => {
        observer.next(function F3() { that.progress += 10; });
      }, 100);
      setTimeout(() => {
        observer.next(function F4() { that.mukinData.muk = applicationSettings.getString("muk", undefined); });
      }, 100);
      setTimeout(() => {
        observer.next(function F5() { if (that.mukinData.muk) that.progress += 10, that.muk(); });
      }, 100);
      setTimeout(() => {
        observer.next(function F6() { if (!that.mukinData.muk) that.enAuthState1(); });
      }, 100);
      setTimeout(() => {
        observer.complete();
      }, 300);
    });
    let subscription = this.mukSequence.subscribe(
      value => { console.log(value.name), value(); },
      error => { console.dir(error) },
      () => { console.log("mukSequence finished") },
    );
 */ /*
      let secureStorage = new SecureStorage();
      secureStorage.set({
        key: "muk",
        value: p.config.LCD.mobileData.muk,
      }).then(
        (success) => { console.log("success Login Storage : " + success); p.router.navigate(["/tiassu"]); },
        (err) => console.log("error Login Storage : " + err)
      );
      */
/*var that = this;
var p1 = new Promise((resolve, reject) => {
console.log('promise 1');
setTimeout(() => {
 that.enAuthState0();
}, 0);

}).then((r) => p2, (e) => { that.enAuthState1() })
.then((r) => {}, (e) => { that.enAuthState1() }) ;

var p2 = new Promise((resolve, reject) => {
console.log('promise 2');
setTimeout(() => {
 that.mukinData.muk = applicationSettings.getString("muk", undefined);
 console.log('* muk : ' + that.mukinData.muk);
 if (that.mukinData.muk)
   that.progress += 10, that.muk(), resolve();
 else
 console.log('reject 2'), reject();
}, 0);
});
console.log('Promise .resolve');

Promise .resolve()
.then((r) => p1)
.then((r) => p2, (e) => { console.log('enAuthState1 .1'); that.enAuthState1() })
.then((r) => {}, (e) => { console.log('enAuthState1 .2'); that.enAuthState1() });
*/
/*
.then(function () { return p1; }, function () { that.enAuthState1() })
  .then(function () { return p2; }, function () { that.enAuthState1() })
  .then(function () { }, function () { that.enAuthState1() })
  .then(
    (a) => p1,
    (e) => p2
  );*/ 
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoibXVraW4ucGFnZS5qcyIsInNvdXJjZVJvb3QiOiIiLCJzb3VyY2VzIjpbIm11a2luLnBhZ2UudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7QUFBQSxzQ0FBd0Y7QUFDeEYsb0hBQW9IO0FBQ3BILDBEQUE0RDtBQUc1RCwrREFBNEY7QUFDNUYsMENBQXlDO0FBQ3pDLDBDQUEyQztBQUMzQyxnQ0FBK0I7QUFDL0IsZ0NBQXlDO0FBWXpDO0lBQStCLDZCQUFJO0lBWWpDLG1CQUNVLFFBQWtCLEVBQ2xCLE1BQWMsRUFDZCxXQUF3QixFQUN4QixNQUFjLEVBQ2QsSUFBWTtRQUx0QixZQU1FLGtCQUFNLFFBQVEsQ0FBQyxTQUdoQjtRQVJTLGNBQVEsR0FBUixRQUFRLENBQVU7UUFDbEIsWUFBTSxHQUFOLE1BQU0sQ0FBUTtRQUNkLGlCQUFXLEdBQVgsV0FBVyxDQUFhO1FBQ3hCLFlBQU0sR0FBTixNQUFNLENBQVE7UUFDZCxVQUFJLEdBQUosSUFBSSxDQUFRO1FBVHRCLGNBQVEsR0FBVyxDQUFDLENBQUMsQ0FBQztRQUN0QixlQUFTLEdBQVcsQ0FBQyxDQUFDLENBQUM7UUFVckIsS0FBSSxDQUFDLFNBQVMsR0FBRyxJQUFJLHlCQUFVLEVBQUUsQ0FBQztRQUNsQyxLQUFJLENBQUMsU0FBUyxHQUFHLElBQUksd0JBQVMsRUFBRSxDQUFDOztJQUNuQyxDQUFDO0lBQ0QsNEJBQVEsR0FBUjtRQUNFLElBQUksQ0FBQyxJQUFJLENBQUMsZUFBZSxHQUFHLFNBQVMsQ0FBQztJQUN4QyxDQUFDO0lBRUQsbUNBQWUsR0FBZjtRQUNFLElBQUksQ0FBQyxZQUFZLEVBQUUsQ0FBQztJQUN0QixDQUFDO0lBRU8sdUJBQUcsR0FBWDtRQUFBLGlCQU9DO1FBTkMsSUFBSSxDQUFDLFFBQVEsR0FBRyxDQUFDLENBQUM7UUFDbEIsSUFBSSxDQUFDLFdBQVcsQ0FBQyxLQUFLLENBQUMsSUFBSSxDQUFDLFNBQVMsRUFBRSxVQUFVLEdBQUcsSUFBSSxDQUFDLENBQUM7YUFDdkQsU0FBUyxD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QUNoQyxXQUFXLEVBQUUsNkJBQTZCO1lBQzFDLFNBQVMsRUFBRSxDQUFDLDhCQUE4QixFQUFFLHVCQUF1QixDQUFDO1NBQ3JFLENBQUM7eUNBY29CLGlCQUFRO1lBQ1YsZUFBTTtZQUNELDBCQUFXO1lBQ2hCLHFCQUFNO1lBQ1IsV0FBTTtPQWpCWCxTQUFTLENBMElyQjtJQUFELGdCQUFDO0NBQUEsQUExSUQsQ0FBK0IsV0FBSSxHQTBJbEM7QUExSVksOEJBQVM7QUE0SXRCOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztHQTZCRyxDQUFLOzs7Ozs7Ozs7UUFTQztBQUNGOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7RUEyQkQ7QUFDRjs7Ozs7OztNQU9NIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgQ29tcG9uZW50LCBFbGVtZW50UmVmLCBPbkluaXQsIEFmdGVyVmlld0luaXQsIFZpZXdDaGlsZCB9IGZyb20gXCJAYW5ndWxhci9jb3JlXCI7XG4vL2ltcG9ydCB7IFNlY3VyZVN0b3JhZ2UsIH0gZnJvbSBcIm5hdGl2ZXNjcmlwdC1zZWN1cmUtc3RvcmFnZVwiOy8vVHlwZUVycm9yOiBDYW5ub3QgcmVhZCBwcm9wZXJ0eSAnaW5pdCcgb2YgdW5kZWZpbmVkXG5pbXBvcnQgKiBhcyBhcHBsaWNhdGlvblNldHRpbmdzIGZyb20gXCJhcHBsaWNhdGlvbi1zZXR0aW5nc1wiO1xuaW1wb3J0IHsgT2JzZXJ2YWJsZSB9IGZyb20gJ3J4anMvT2JzZXJ2YWJsZSc7XG5cbmltcG9ydCB7IEF1dGhTZXJ2aWNlLCBDb25maWcsIE1vYmlsZURhdGEsIExvZ2luRGF0YSB9IGZyb20gXCIuLi8uLi9zaGFyZWQvYXV0aC9hdXRoLnNlcnZpY2VcIjtcbmltcG9ydCB7IFJvdXRlciB9IGZyb20gXCJAYW5ndWxhci9yb3V0ZXJcIjtcbmltcG9ydCB7IExvY2F0aW9uIH0gZnJvbSBcIkBhbmd1bGFyL2NvbW1vblwiO1xuaW1wb3J0IHsgUGFnZSB9IGZyb20gXCIuLi9wYWdlXCI7XG5pbXBvcnQgeyBQYWdlIGFzIFBhZ2VVSSB9IGZyb20gXCJ1aS9wYWdlXCI7XG5pbXBvcnQgeyBDb2xvciB9IGZyb20gXCJjb2xvclwiO1xuaW1wb3J0IHsgVmlldyB9IGZyb20gXCJ1aS9jb3JlL3ZpZXdcIjtcbmltcG9ydCAqIGFzIHBsdGZpbmZvcyBmcm9tIFwiLi4vLi4vY29uZmlncy9wbGF0ZWZvcm0uaW5mb3NcIjtcbmltcG9ydCB7IGFzRWxlbWVudERhdGEgfSBmcm9tIFwiQGFuZ3VsYXIvY29yZS9zcmMvdmlld1wiO1xuXG5AQ29tcG9uZW50KHtcbiAgc2VsZWN0b3I6ICdtdWtpbi1wYWdlJyxcbiAgcHJvdmlkZXJzOiBbQXV0aFNlcnZpY2UsIENvbmZpZ10sXG4gIHRlbXBsYXRlVXJsOiAncGFnZXMvbXVraW4vbXVraW4ucGFnZS5odG1sJyxcbiAgc3R5bGVVcmxzOiBbXCJwYWdlcy9tdWtpbi9tdWtpbi1jb21tb24uY3NzXCIsIFwicGFnZXMvbXVraW4vbXVraW4uY3NzXCJdXG59KVxuZXhwb3J0IGNsYXNzIE11a2luUGFnZSBleHRlbmRzIFBhZ2UgaW1wbGVtZW50cyBPbkluaXQsIEFmdGVyVmlld0luaXQge1xuICBAVmlld0NoaWxkKFwiY29udGFpbmVyQXV0aDBcIikgY29udGFpbmVyQXV0aDA6IEVsZW1lbnRSZWY7XG4gIEBWaWV3Q2hpbGQoXCJjb250YWluZXJBdXRoMVwiKSBjb250YWluZXJBdXRoMTogRWxlbWVudFJlZjtcbiAgQFZpZXdDaGlsZChcImNvbnRhaW5lckF1dGgyXCIpIGNvbnRhaW5lckF1dGgyOiBFbGVtZW50UmVmO1xuICAvL3NlY3VyZVN0b3JhZ2U6IFNlY3VyZVN0b3JhZ2U7XG4gIHByaXZhdGUgbXVrU2VxdWVuY2U6IE9ic2VydmFibGU8RnVuY3Rpb24+O1xuICBwcml2YXRlIG11a1Byb21pc2U6IFByb21pc2U8YW55PjtcblxuICBwcm9ncmVzczogbnVtYmVyID0gLTE7XG4gIGF1dGhTdGF0ZTogbnVtYmVyID0gLTE7XG4gIG11a2luRGF0YTogTW9iaWxlRGF0YTtcbiAgbG9naW5EYXRhOiBMb2dpbkRhdGE7XG4gIGNvbnN0cnVjdG9yKFxuICAgIHByaXZhdGUgbG9jYXRpb246IExvY2F0aW9uLFxuICAgIHByaXZhdGUgcm91dGVyOiBSb3V0ZXIsXG4gICAgcHJpdmF0ZSBhdXRoU2VydmljZTogQXV0aFNlcnZpY2UsXG4gICAgcHJpdmF0ZSBjb25maWc6IENvbmZpZyxcbiAgICBwcml2YXRlIHBhZ2U6IFBhZ2VVSSkge1xuICAgIHN1cGVyKGxvY2F0aW9uKTtcbiAgICB0aGlzLm11a2luRGF0YSA9IG5ldyBNb2JpbGVEYXRhKCk7XG4gICAgdGhpcy5sb2dpbkRhdGEgPSBuZXcgTG9naW5EYXRhKCk7XG4gIH1cbiAgbmdPbkluaXQoKSB7XG4gICAgdGhpcy5wYWdlLmJhY2tncm91bmRDb2xvciA9IFwiI2JjMTVjMlwiO1xuICB9XG5cbiAgbmdBZnRlclZpZXdJbml0KCk6IHZvaWQge1xuICAgIHRoaXMuZW5BdXRoU3RhdGUwKCk7XG4gIH1cblxuICBwcml2YXRlIG11aygpIHtcbiAgICB0aGlzLnByb2dyZXNzID0gMDtcbiAgICB0aGlzLmF1dGhTZXJ2aWNlLm11a2luKHRoaXMubXVraW5EYXRhLCBmdW5jdGlvbiAoZXJyKSB7IH0pXG4gICAgICAuc3Vic2NyaWJlKFxuICAgICAgICAoZGF0YSkgPT4gdGhpcy5zdWNjZXNzSGFuZGxlcihkYXRhLCB0aGlzKSxcbiAgICAgICAgKGVycm9yKSA9PiB0aGlzLmVycm9ySGFuZGxlcihlcnJvcilcbiAgICAgICk7XG4gIH1cbiAgbG9naW4oKSB7XG4gICAgdGhpcy5hdXRoU2VydmljZS5sb2dpbih0aGlzLmxvZ2luRGF0YSwgZnVuY3Rpb24gKGVycikgeyB9KVxuICAgICAgLnN1YnNjcmliZShcbiAgICAgICAgKGRhdGEpID0+IHRoaXMuc3VjY2Vzc0hhbmRsZXJMb2dpbihkYXRhLCB0aGlzKSxcbiAgICAgICAgKGVycm9yKSA9PiB0aGlzLmVycm9ySGFuZGxlckxvZ2luKGVycm9yKVxuICAgICAgKTtcbiAgfVxuXG4gIHByaXZhdGUgc3VjY2Vzc0hhbmRsZXIoZGF0YTogYW55LCBwOiBNdWtpblBhZ2UpIHtcbiAgICBjb25zb2xlLmxvZyhcInN1Y2Nlc3MgSGFuZGxlclwiKTtcbiAgICBjb25zb2xlLmRpcihkYXRhKTsgXG4gICAgaWYgKHAuY29uZmlnLkxDRCkge1xuICAgICAgdGhpcy5wcm9ncmVzcyA9IDEwMDtcbiAgICAgIGFwcGxpY2F0aW9uU2V0dGluZ3Muc2V0U3RyaW5nKFwibXVrXCIsIHAuY29uZmlnLkxDRC5tb2JpbGVEYXRhLm11ayk7XG4gICAgICBwLnJvdXRlci5uYXZpZ2F0ZShbXCIvdGlhc3NlXCJdKTtcbiAgICB9XG4gICAgZWxzZVxuICAgICAgcC5lcnJvckhhbmRsZXIobnVsbCk7XG4gIH1cbiAgcHJpdmF0ZSBlcnJvckhhbmRsZXIoZXJyb3IpIHtcbiAgXG4gICAgdGhpcy5lbkF1dGhTdGF0ZTEoKTtcbiAgfVxuICBwcml2YXRlIHN1Y2Nlc3NIYW5kbGVyTG9naW4oZGF0YTogYW55LCBwOiBNdWtpblBhZ2UpIHtcbiAgICAgXG4gICAgY29uc29sZS5sb2coXCJzdWNjZXNzIEhhbmRsZXIgTG9naW5cIik7XG4gICAgY29uc29sZS5kaXIoZGF0YSk7IFxuICAgIGlmIChwLmNvbmZpZy5MQ0QpIHtcbiAgICAgIGFwcGxpY2F0aW9uU2V0dGluZ3Muc2V0U3RyaW5nKFwibXVrXCIsIHAuY29uZmlnLkxDRC5tb2JpbGVEYXRhLm11ayk7IFxuICAgICAgcC5yb3V0ZXIubmF2aWdhdGUoW1wiL3RpYXNzZVwiXSk7XG4gICAgfVxuICAgIGVsc2VcbiAgICAgIHAuZXJyb3JIYW5kbGVyTG9naW4obnVsbCk7XG4gIH1cbiAgcHJpdmF0ZSBlcnJvckhhbmRsZXJMb2dpbihlcnJvcikge1xuICAgIGFsZXJ0KFwiVW5mb3J0dW5hdGVseSB3ZSBjb3VsZCBub3QgZmluZCB5b3VyIGFjY291bnQuXCIpO1xuICAgIHRoaXMuZW5BdXRoU3RhdGUyKCk7XG4gIH1cblxuICBwcml2YXRlIGVuQXV0aFN0YXRlMCgpIHtcbiAgICB0aGlzLmF1dGhTdGF0ZSA9IC0xO1xuICAgIHZhciB0aGF0ID0gdGhpcztcbiAgICBsZXQgYXMgPSA8Vmlldz50aGlzLmNvbnRhaW5lckF1dGgwLm5hdGl2ZUVsZW1lbnQ7XG4gICAgYXMuYW5pbWF0ZSh7XG4gICAgICB0cmFuc2xhdGU6IHsgeDogMCwgeTogMTAwIH0sXG4gICAgICBkdXJhdGlvbjogMTBcbiAgICB9KS50aGVuKGZ1bmN0aW9uICgpIHtcbiAgICAgIHRoYXQuYXV0aFN0YXRlID0gMDtcbiAgICAgIHJldHVybiBhcy5hbmltYXRlKHtcbiAgICAgICAgdHJhbnNsYXRlOiB7IHg6IDAsIHk6IDAgfSxcbiAgICAgICAgZHVyYXRpb246IDEwMFxuICAgICAgfSk7XG4gICAgfSkudGhlbihmdW5jdGlvbiAoKSB7XG4gICAgICB0aGF0Lm11a2luRGF0YS5tdWsgPSBhcHBsaWNhdGlvblNldHRpbmdzLmdldFN0cmluZyhcIm11a1wiLCB1bmRlZmluZWQpO1xuICAgICAgaWYgKHRoYXQubXVraW5EYXRhLm11aylcbiAgICAgICAgdGhhdC5tdWsoKTtcbiAgICAgIGVsc2VcbiAgICAgICAgdGhhdC5lbkF1dGhTdGF0ZTEoKTtcbiAgICB9KTtcbiAgfVxuXG4gIHByaXZhdGUgZW5BdXRoU3RhdGUxKCkge1xuICAgIHRoaXMuYXV0aFN0YXRlID0gLTE7XG4gICAgdmFyIHRoYXQgPSB0aGlzO1xuICAgIGxldCBhcyA9IDxWaWV3PnRoaXMuY29udGFpbmVyQXV0aDEubmF0aXZlRWxlbWVudDtcbiAgICBhcy5hbmltYXRlKHtcbiAgICAgIHRyYW5zbGF0ZTogeyB4OiAwLCB5OiAxMDAgfSxcbiAgICAgIGR1cmF0aW9uOiAxMFxuICAgIH0pLnRoZW4oZnVuY3Rpb24gKCkge1xuICAgICAgdGhhdC5hdXRoU3RhdGUgPSAxO1xuICAgICAgcmV0dXJuIGFzLmFuaW1hdGUoe1xuICAgICAgICB0cmFuc2xhdGU6IHsgeDogMCwgeTogMCB9LFxuICAgICAgICBkdXJhdGlvbjogMTAwXG4gICAgICB9KTtcbiAgICB9KTtcbiAgfVxuICBwcml2YXRlIGVuQXV0aFN0YXRlMigpIHtcbiAgICB0aGlzLmF1dGhTdGF0ZSA9IC0xO1xuICAgIHZhciB0aGF0ID0gdGhpcztcbiAgICBsZXQgYXMgPSA8Vmlldz50aGlzLmNvbnRhaW5lckF1dGgyLm5hdGl2ZUVsZW1lbnQ7XG4gICAgYXMuYW5pbWF0ZSh7XG4gICAgICB0cmFuc2xhdGU6IHsgeDogMCwgeTogMTAwIH0sXG4gICAgICBkdXJhdGlvbjogMTBcbiAgICB9KS50aGVuKGZ1bmN0aW9uICgpIHtcbiAgICAgIHRoYXQuYXV0aFN0YXRlID0gMjtcbiAgICAgIHJldHVybiBhcy5hbmltYXRlKHtcbiAgICAgICAgdHJhbnNsYXRlOiB7IHg6IDAsIHk6IDAgfSxcbiAgICAgICAgZHVyYXRpb246IDEwMFxuICAgICAgfSk7XG4gICAgfSk7XG4gIH1cblxuICBwcml2YXRlIGdvYmFjaygpIHtcbiAgICBpZiAodGhpcy5hdXRoU3RhdGUgIT09IDIpXG4gICAgICByZXR1cm47IFxuICAgIHRoaXMuZW5BdXRoU3RhdGUxKCk7XG4gIH1cbiAgcHJpdmF0ZSBkaXNwbGF5U2lnbnVwKCkge1xuICAgIHRoaXMucm91dGVyLm5hdmlnYXRlKFtcIi9zaWdudXBcIl0pO1xuICB9XG59XG5cbi8qXG4gICAgdGhpcy5tdWtTZXF1ZW5jZSA9IG5ldyBPYnNlcnZhYmxlKG9ic2VydmVyID0+IHtcbiAgICAgIHNldFRpbWVvdXQoKCkgPT4ge1xuICAgICAgICBvYnNlcnZlci5uZXh0KGZ1bmN0aW9uIEYxKCkgeyB0aGF0Lm11a2luRGF0YSA9IG5ldyBNb2JpbGVEYXRhKCk7IHRoYXQubG9naW5EYXRhID0gbmV3IExvZ2luRGF0YSgpOyB0aGF0LmF1dGhTdGF0ZSA9IDA7IHRoYXQucHJvZ3Jlc3MgPSAwOyB9KTtcbiAgICAgIH0sIDEwMCk7XG4gICAgICBzZXRUaW1lb3V0KCgpID0+IHtcbiAgICAgICAgb2JzZXJ2ZXIubmV4dChmdW5jdGlvbiBGMigpIHsgdGhhdC5lbkF1dGhTdGF0ZTAoKTsgfSk7XG4gICAgICB9LCAxMDApO1xuICAgICAgc2V0VGltZW91dCgoKSA9PiB7XG4gICAgICAgIG9ic2VydmVyLm5leHQoZnVuY3Rpb24gRjMoKSB7IHRoYXQucHJvZ3Jlc3MgKz0gMTA7IH0pO1xuICAgICAgfSwgMTAwKTtcbiAgICAgIHNldFRpbWVvdXQoKCkgPT4ge1xuICAgICAgICBvYnNlcnZlci5uZXh0KGZ1bmN0aW9uIEY0KCkgeyB0aGF0Lm11a2luRGF0YS5tdWsgPSBhcHBsaWNhdGlvblNldHRpbmdzLmdldFN0cmluZyhcIm11a1wiLCB1bmRlZmluZWQpOyB9KTtcbiAgICAgIH0sIDEwMCk7XG4gICAgICBzZXRUaW1lb3V0KCgpID0+IHtcbiAgICAgICAgb2JzZXJ2ZXIubmV4dChmdW5jdGlvbiBGNSgpIHsgaWYgKHRoYXQubXVraW5EYXRhLm11aykgdGhhdC5wcm9ncmVzcyArPSAxMCwgdGhhdC5tdWsoKTsgfSk7XG4gICAgICB9LCAxMDApO1xuICAgICAgc2V0VGltZW91dCgoKSA9PiB7XG4gICAgICAgIG9ic2VydmVyLm5leHQoZnVuY3Rpb24gRjYoKSB7IGlmICghdGhhdC5tdWtpbkRhdGEubXVrKSB0aGF0LmVuQXV0aFN0YXRlMSgpOyB9KTtcbiAgICAgIH0sIDEwMCk7XG4gICAgICBzZXRUaW1lb3V0KCgpID0+IHtcbiAgICAgICAgb2JzZXJ2ZXIuY29tcGxldGUoKTtcbiAgICAgIH0sIDMwMCk7XG4gICAgfSk7ICBcbiAgICBsZXQgc3Vic2NyaXB0aW9uID0gdGhpcy5tdWtTZXF1ZW5jZS5zdWJzY3JpYmUoXG4gICAgICB2YWx1ZSA9PiB7IGNvbnNvbGUubG9nKHZhbHVlLm5hbWUpLCB2YWx1ZSgpOyB9LFxuICAgICAgZXJyb3IgPT4geyBjb25zb2xlLmRpcihlcnJvcikgfSxcbiAgICAgICgpID0+IHsgY29uc29sZS5sb2coXCJtdWtTZXF1ZW5jZSBmaW5pc2hlZFwiKSB9LFxuICAgICk7XG4gKi8gICAgIC8qXG4gICAgICAgbGV0IHNlY3VyZVN0b3JhZ2UgPSBuZXcgU2VjdXJlU3RvcmFnZSgpO1xuICAgICAgIHNlY3VyZVN0b3JhZ2Uuc2V0KHtcbiAgICAgICAgIGtleTogXCJtdWtcIixcbiAgICAgICAgIHZhbHVlOiBwLmNvbmZpZy5MQ0QubW9iaWxlRGF0YS5tdWssXG4gICAgICAgfSkudGhlbihcbiAgICAgICAgIChzdWNjZXNzKSA9PiB7IGNvbnNvbGUubG9nKFwic3VjY2VzcyBMb2dpbiBTdG9yYWdlIDogXCIgKyBzdWNjZXNzKTsgcC5yb3V0ZXIubmF2aWdhdGUoW1wiL3RpYXNzdVwiXSk7IH0sXG4gICAgICAgICAoZXJyKSA9PiBjb25zb2xlLmxvZyhcImVycm9yIExvZ2luIFN0b3JhZ2UgOiBcIiArIGVycilcbiAgICAgICApO1xuICAgICAgICovXG4gICAgICAgLyp2YXIgdGhhdCA9IHRoaXM7XG4gICAgdmFyIHAxID0gbmV3IFByb21pc2UoKHJlc29sdmUsIHJlamVjdCkgPT4ge1xuICAgICAgY29uc29sZS5sb2coJ3Byb21pc2UgMScpO1xuICAgICAgc2V0VGltZW91dCgoKSA9PiB7XG4gICAgICAgIHRoYXQuZW5BdXRoU3RhdGUwKCk7XG4gICAgICB9LCAwKTtcblxuICAgIH0pLnRoZW4oKHIpID0+IHAyLCAoZSkgPT4geyB0aGF0LmVuQXV0aFN0YXRlMSgpIH0pXG4gICAgLnRoZW4oKHIpID0+IHt9LCAoZSkgPT4geyB0aGF0LmVuQXV0aFN0YXRlMSgpIH0pIDtcbiAgICAgXG4gICAgdmFyIHAyID0gbmV3IFByb21pc2UoKHJlc29sdmUsIHJlamVjdCkgPT4ge1xuICAgICAgY29uc29sZS5sb2coJ3Byb21pc2UgMicpO1xuICAgICAgc2V0VGltZW91dCgoKSA9PiB7XG4gICAgICAgIHRoYXQubXVraW5EYXRhLm11ayA9IGFwcGxpY2F0aW9uU2V0dGluZ3MuZ2V0U3RyaW5nKFwibXVrXCIsIHVuZGVmaW5lZCk7XG4gICAgICAgIGNvbnNvbGUubG9nKCcqIG11ayA6ICcgKyB0aGF0Lm11a2luRGF0YS5tdWspO1xuICAgICAgICBpZiAodGhhdC5tdWtpbkRhdGEubXVrKVxuICAgICAgICAgIHRoYXQucHJvZ3Jlc3MgKz0gMTAsIHRoYXQubXVrKCksIHJlc29sdmUoKTtcbiAgICAgICAgZWxzZVxuICAgICAgICBjb25zb2xlLmxvZygncmVqZWN0IDInKSwgcmVqZWN0KCk7XG4gICAgICB9LCAwKTtcbiAgICB9KTtcbiAgICBjb25zb2xlLmxvZygnUHJvbWlzZSAucmVzb2x2ZScpO1xuICAgICBcbiAgICBQcm9taXNlIC5yZXNvbHZlKClcbiAgICAudGhlbigocikgPT4gcDEpXG4gICAgLnRoZW4oKHIpID0+IHAyLCAoZSkgPT4geyBjb25zb2xlLmxvZygnZW5BdXRoU3RhdGUxIC4xJyk7IHRoYXQuZW5BdXRoU3RhdGUxKCkgfSlcbiAgICAudGhlbigocikgPT4ge30sIChlKSA9PiB7IGNvbnNvbGUubG9nKCdlbkF1dGhTdGF0ZTEgLjInKTsgdGhhdC5lbkF1dGhTdGF0ZTEoKSB9KTtcbiAgICAqL1xuICAgIC8qXG4gICAgLnRoZW4oZnVuY3Rpb24gKCkgeyByZXR1cm4gcDE7IH0sIGZ1bmN0aW9uICgpIHsgdGhhdC5lbkF1dGhTdGF0ZTEoKSB9KVxuICAgICAgLnRoZW4oZnVuY3Rpb24gKCkgeyByZXR1cm4gcDI7IH0sIGZ1bmN0aW9uICgpIHsgdGhhdC5lbkF1dGhTdGF0ZTEoKSB9KVxuICAgICAgLnRoZW4oZnVuY3Rpb24gKCkgeyB9LCBmdW5jdGlvbiAoKSB7IHRoYXQuZW5BdXRoU3RhdGUxKCkgfSlcbiAgICAgIC50aGVuKFxuICAgICAgICAoYSkgPT4gcDEsXG4gICAgICAgIChlKSA9PiBwMlxuICAgICAgKTsqLyJdfQ==