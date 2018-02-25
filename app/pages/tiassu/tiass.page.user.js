"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var core_1 = require("@angular/core");
var common_1 = require("@angular/common");
var page_1 = require("../page");
var config_1 = require("../../shared/config");
var TiassPageUser = /** @class */ (function (_super) {
    __extends(TiassPageUser, _super);
    function TiassPageUser(location, config) {
        var _this = _super.call(this, location) || this;
        _this.location = location;
        _this.config = config;
        _this.user = config.LCD.user;
        return _this;
    }
    TiassPageUser = __decorate([
        core_1.Component({
            selector: 'tiass-page-user',
            providers: [config_1.Config],
            templateUrl: 'pages/tiassu/tiass.page.html',
            styleUrls: ["pages/tiassu/tiass-common.css", "pages/tiassu/tiass.css"]
        }),
        __metadata("design:paramtypes", [common_1.Location, config_1.Config])
    ], TiassPageUser);
    return TiassPageUser;
}(page_1.Page));
exports.TiassPageUser = TiassPageUser;
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoidGlhc3MucGFnZS51c2VyLmpzIiwic291cmNlUm9vdCI6IiIsInNvdXJjZXMiOlsidGlhc3MucGFnZS51c2VyLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7O0FBQUEsc0NBQTBDO0FBQzFDLDBDQUEyQztBQUMzQyxnQ0FBK0I7QUFDL0IsOENBQTZDO0FBVTdDO0lBQW1DLGlDQUFJO0lBR25DLHVCQUNZLFFBQWtCLEVBQVUsTUFBYztRQUR0RCxZQUVJLGtCQUFNLFFBQVEsQ0FBQyxTQUVsQjtRQUhXLGNBQVEsR0FBUixRQUFRLENBQVU7UUFBVSxZQUFNLEdBQU4sTUFBTSxDQUFRO1FBRWxELEtBQUksQ0FBQyxJQUFJLEdBQUcsTUFBTSxDQUFDLEdBQUcsQ0FBQyxJQUFJLENBQUM7O0lBQ2hDLENBQUM7SUFQUSxhQUFhO1FBUHpCLGdCQUFTLENBQUM7WUFDUCxRQUFRLEVBQUUsaUJBQWlCO1lBQzNCLFNBQVMsRUFBRSxDQUFDLGVBQU0sQ0FBQztZQUNuQixXQUFXLEVBQUUsOEJBQThCO1lBQzNDLFNBQVMsRUFBRSxDQUFDLCtCQUErQixFQUFFLHdCQUF3QixDQUFDO1NBRXpFLENBQUM7eUNBS3dCLGlCQUFRLEVBQWtCLGVBQU07T0FKN0MsYUFBYSxDQVF6QjtJQUFELG9CQUFDO0NBQUEsQUFSRCxDQUFtQyxXQUFJLEdBUXRDO0FBUlksc0NBQWEiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBDb21wb25lbnQgfSBmcm9tIFwiQGFuZ3VsYXIvY29yZVwiO1xuaW1wb3J0IHsgTG9jYXRpb24gfSBmcm9tIFwiQGFuZ3VsYXIvY29tbW9uXCI7XG5pbXBvcnQgeyBQYWdlIH0gZnJvbSBcIi4uL3BhZ2VcIjtcbmltcG9ydCB7IENvbmZpZyB9IGZyb20gXCIuLi8uLi9zaGFyZWQvY29uZmlnXCI7XG5pbXBvcnQgeyBVc2VyRG9jIH0gZnJvbSBcIi4uLy4uL3NoYXJlZC9tb2RlbHMvdXNlci5kb2NcIjtcbiBcbkBDb21wb25lbnQoe1xuICAgIHNlbGVjdG9yOiAndGlhc3MtcGFnZS11c2VyJyxcbiAgICBwcm92aWRlcnM6IFtDb25maWddLFxuICAgIHRlbXBsYXRlVXJsOiAncGFnZXMvdGlhc3N1L3RpYXNzLnBhZ2UuaHRtbCcsXG4gICAgc3R5bGVVcmxzOiBbXCJwYWdlcy90aWFzc3UvdGlhc3MtY29tbW9uLmNzc1wiLCBcInBhZ2VzL3RpYXNzdS90aWFzcy5jc3NcIl1cblxufSlcbmV4cG9ydCBjbGFzcyBUaWFzc1BhZ2VVc2VyIGV4dGVuZHMgUGFnZSB7XG5cbiAgICBwdWJsaWMgdXNlcjogVXNlckRvYztcbiAgICBjb25zdHJ1Y3RvcihcbiAgICAgICAgcHJpdmF0ZSBsb2NhdGlvbjogTG9jYXRpb24sIHByaXZhdGUgY29uZmlnOiBDb25maWcpIHtcbiAgICAgICAgc3VwZXIobG9jYXRpb24pO1xuICAgICAgICB0aGlzLnVzZXIgPSBjb25maWcuTENELnVzZXI7XG4gICAgfVxufVxuIl19