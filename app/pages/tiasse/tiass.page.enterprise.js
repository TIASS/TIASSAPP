"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var core_1 = require("@angular/core");
var drawer_page_1 = require("../drawer.page");
var config_1 = require("../../shared/config");
var TiassPageEnterprise = /** @class */ (function (_super) {
    __extends(TiassPageEnterprise, _super);
    function TiassPageEnterprise(changeDetectorRef, config) {
        var _this = _super.call(this, changeDetectorRef) || this;
        _this.changeDetectorRef = changeDetectorRef;
        _this.config = config;
        _this.user = config.LCD.user;
        return _this;
    }
    TiassPageEnterprise = __decorate([
        core_1.Component({
            selector: 'tiass-page-enterprise',
            providers: [config_1.Config],
            templateUrl: 'pages/tiasse/tiass.page.html',
            styleUrls: ["pages/tiasse/tiass-common.css", "pages/tiasse/tiass.css"]
        }),
        __metadata("design:paramtypes", [core_1.ChangeDetectorRef, config_1.Config])
    ], TiassPageEnterprise);
    return TiassPageEnterprise;
}(drawer_page_1.DrawerPage));
exports.TiassPageEnterprise = TiassPageEnterprise;
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoidGlhc3MucGFnZS5lbnRlcnByaXNlLmpzIiwic291cmNlUm9vdCI6IiIsInNvdXJjZXMiOlsidGlhc3MucGFnZS5lbnRlcnByaXNlLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7O0FBQUEsc0NBQTJEO0FBQzNELDhDQUEwQztBQUMxQyw4Q0FBOEM7QUFVOUM7SUFBeUMsdUNBQVU7SUFHL0MsNkJBQW9CLGlCQUFvQyxFQUFVLE1BQWE7UUFBL0UsWUFDSSxrQkFBTSxpQkFBaUIsQ0FBQyxTQUUzQjtRQUhtQix1QkFBaUIsR0FBakIsaUJBQWlCLENBQW1CO1FBQVUsWUFBTSxHQUFOLE1BQU0sQ0FBTztRQUUzRSxLQUFJLENBQUMsSUFBSSxHQUFHLE1BQU0sQ0FBQyxHQUFHLENBQUMsSUFBSSxDQUFDOztJQUNoQyxDQUFDO0lBTlEsbUJBQW1CO1FBUC9CLGdCQUFTLENBQUM7WUFDUCxRQUFRLEVBQUUsdUJBQXVCO1lBQ2pDLFNBQVMsRUFBRSxDQUFFLGVBQU0sQ0FBQztZQUNwQixXQUFXLEVBQUUsOEJBQThCO1lBQzNDLFNBQVMsRUFBRSxDQUFDLCtCQUErQixFQUFFLHdCQUF3QixDQUFDO1NBRXpFLENBQUM7eUNBSXlDLHdCQUFpQixFQUFpQixlQUFNO09BSHRFLG1CQUFtQixDQU8vQjtJQUFELDBCQUFDO0NBQUEsQUFQRCxDQUF5Qyx3QkFBVSxHQU9sRDtBQVBZLGtEQUFtQiIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7Q29tcG9uZW50LCBDaGFuZ2VEZXRlY3RvclJlZn0gZnJvbSBcIkBhbmd1bGFyL2NvcmVcIjtcbmltcG9ydCB7RHJhd2VyUGFnZX0gZnJvbSBcIi4uL2RyYXdlci5wYWdlXCI7XG5pbXBvcnQgeyBDb25maWcgIH0gZnJvbSBcIi4uLy4uL3NoYXJlZC9jb25maWdcIjtcbmltcG9ydCB7IFVzZXJEb2MgfSBmcm9tIFwiLi4vLi4vc2hhcmVkL21vZGVscy91c2VyLmRvY1wiO1xuXG5AQ29tcG9uZW50KHtcbiAgICBzZWxlY3RvcjogJ3RpYXNzLXBhZ2UtZW50ZXJwcmlzZScsXG4gICAgcHJvdmlkZXJzOiBbIENvbmZpZ10sXG4gICAgdGVtcGxhdGVVcmw6ICdwYWdlcy90aWFzc2UvdGlhc3MucGFnZS5odG1sJyxcbiAgICBzdHlsZVVybHM6IFtcInBhZ2VzL3RpYXNzZS90aWFzcy1jb21tb24uY3NzXCIsIFwicGFnZXMvdGlhc3NlL3RpYXNzLmNzc1wiXVxuXG59KSBcbmV4cG9ydCBjbGFzcyBUaWFzc1BhZ2VFbnRlcnByaXNlIGV4dGVuZHMgRHJhd2VyUGFnZSB7IFxuICAgIFxuICAgIHB1YmxpYyB1c2VyOiBVc2VyRG9jO1xuICAgIGNvbnN0cnVjdG9yKHByaXZhdGUgY2hhbmdlRGV0ZWN0b3JSZWY6IENoYW5nZURldGVjdG9yUmVmLCBwcml2YXRlIGNvbmZpZzpDb25maWcpIHtcbiAgICAgICAgc3VwZXIoY2hhbmdlRGV0ZWN0b3JSZWYpOyBcbiAgICAgICAgdGhpcy51c2VyID0gY29uZmlnLkxDRC51c2VyO1xuICAgIH1cbn1cbiJdfQ==