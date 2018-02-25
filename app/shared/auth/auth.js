"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var platform = require("tns-core-modules/platform");
var PostData = /** @class */ (function () {
    function PostData() {
        this.lang = platform.device.language;
        this.localeId = platform.device.language.toLowerCase();
        this.userAgent = '-os:' + platform.device.os +
            '-osVersion:' + platform.device.osVersion +
            '-model:' + platform.device.model +
            '-region:' + platform.device.region +
            /*
            Gets the uuid. On iOS this will return a new uuid if the application is re-installed on the device. If you need to receive the same uuid even after the application has been re-installed on the device, use this plugin: https://www.npmjs.com/package/nativescript-ios-uuid
            */
            '-uuid:' + platform.device.uuid +
            '-sdkVersion:' + platform.device.sdkVersion +
            '-manufacturer:' + platform.device.manufacturer +
            '-lang:' + platform.device.language +
            '-deviceType:' + platform.device.deviceType;
        this.tzoffset = ((new Date()).getTimezoneOffset()).toString();
    }
    return PostData;
}());
exports.PostData = PostData;
var LoginData = /** @class */ (function (_super) {
    __extends(LoginData, _super);
    function LoginData() {
        var _this = _super !== null && _super.apply(this, arguments) || this;
        _this.email = "jbhl2002@yahoo.fr";
        _this.pswrd = "jbhl2002";
        return _this;
    }
    return LoginData;
}(PostData));
exports.LoginData = LoginData;
var SigninData = /** @class */ (function (_super) {
    __extends(SigninData, _super);
    function SigninData() {
        var _this = _super !== null && _super.apply(this, arguments) || this;
        _this.name = "jimmy bahole";
        return _this;
    }
    return SigninData;
}(LoginData));
exports.SigninData = SigninData;
var MobileData = /** @class */ (function (_super) {
    __extends(MobileData, _super);
    function MobileData() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    return MobileData;
}(PostData));
exports.MobileData = MobileData;
var LoginDataClient = /** @class */ (function () {
    function LoginDataClient() {
    }
    return LoginDataClient;
}());
exports.LoginDataClient = LoginDataClient;
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiYXV0aC5qcyIsInNvdXJjZVJvb3QiOiIiLCJzb3VyY2VzIjpbImF1dGgudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7QUFDQSxvREFBc0Q7QUFLdEQ7SUFBQTtRQUNFLFNBQUksR0FBVyxRQUFRLENBQUMsTUFBTSxDQUFDLFFBQVEsQ0FBQztRQUN4QyxhQUFRLEdBQVcsUUFBUSxDQUFDLE1BQU0sQ0FBQyxRQUFRLENBQUMsV0FBVyxFQUFFLENBQUM7UUFFMUQsY0FBUyxHQUNQLE1BQU0sR0FBRyxRQUFRLENBQUMsTUFBTSxDQUFDLEVBQUU7WUFDM0IsYUFBYSxHQUFHLFFBQVEsQ0FBQyxNQUFNLENBQUMsU0FBUztZQUN6QyxTQUFTLEdBQUcsUUFBUSxDQUFDLE1BQU0sQ0FBQyxLQUFLO1lBQ2pDLFVBQVUsR0FBRyxRQUFRLENBQUMsTUFBTSxDQUFDLE1BQU07WUFDbkM7O2NBRUU7WUFDRixRQUFRLEdBQUcsUUFBUSxDQUFDLE1BQU0sQ0FBQyxJQUFJO1lBQy9CLGNBQWMsR0FBRyxRQUFRLENBQUMsTUFBTSxDQUFDLFVBQVU7WUFDM0MsZ0JBQWdCLEdBQUcsUUFBUSxDQUFDLE1BQU0sQ0FBQyxZQUFZO1lBQy9DLFFBQVEsR0FBRyxRQUFRLENBQUMsTUFBTSxDQUFDLFFBQVE7WUFDbkMsY0FBYyxHQUFHLFFBQVEsQ0FBQyxNQUFNLENBQUMsVUFBVSxDQUFDO1FBQzlDLGFBQVEsR0FBVyxDQUFDLENBQUMsSUFBSSxJQUFJLEVBQUUsQ0FBQyxDQUFDLGlCQUFpQixFQUFFLENBQUMsQ0FBQyxRQUFRLEVBQUUsQ0FBQztJQUNuRSxDQUFDO0lBQUQsZUFBQztBQUFELENBQUMsQUFsQkQsSUFrQkM7QUFsQlksNEJBQVE7QUFtQnJCO0lBQStCLDZCQUFRO0lBQXZDO1FBQUEscUVBR0M7UUFGQyxXQUFLLEdBQVcsbUJBQW1CLENBQUM7UUFDcEMsV0FBSyxHQUFXLFVBQVUsQ0FBQzs7SUFDN0IsQ0FBQztJQUFELGdCQUFDO0FBQUQsQ0FBQyxBQUhELENBQStCLFFBQVEsR0FHdEM7QUFIWSw4QkFBUztBQUt0QjtJQUFnQyw4QkFBUztJQUF6QztRQUFBLHFFQU1DO1FBSkMsVUFBSSxHQUFXLGNBQWMsQ0FBQzs7SUFJaEMsQ0FBQztJQUFELGlCQUFDO0FBQUQsQ0FBQyxBQU5ELENBQWdDLFNBQVMsR0FNeEM7QUFOWSxnQ0FBVTtBQVF2QjtJQUFnQyw4QkFBUTtJQUF4Qzs7SUFHQSxDQUFDO0lBQUQsaUJBQUM7QUFBRCxDQUFDLEFBSEQsQ0FBZ0MsUUFBUSxHQUd2QztBQUhZLGdDQUFVO0FBS3ZCO0lBQUE7SUFJQSxDQUFDO0lBQUQsc0JBQUM7QUFBRCxDQUFDLEFBSkQsSUFJQztBQUpZLDBDQUFlIiwic291cmNlc0NvbnRlbnQiOlsiXG5pbXBvcnQgKiBhcyBwbGF0Zm9ybSBmcm9tIFwidG5zLWNvcmUtbW9kdWxlcy9wbGF0Zm9ybVwiO1xuaW1wb3J0ICogYXMgYXBwIGZyb20gXCJ0bnMtY29yZS1tb2R1bGVzL2FwcGxpY2F0aW9uXCI7XG5pbXBvcnQgeyBVc2VyRG9jIH0gZnJvbSBcIi4uL21vZGVscy91c2VyLmRvY1wiO1xuXG5cbmV4cG9ydCBjbGFzcyBQb3N0RGF0YSB7XG4gIGxhbmc6IHN0cmluZyA9IHBsYXRmb3JtLmRldmljZS5sYW5ndWFnZTtcbiAgbG9jYWxlSWQ6IHN0cmluZyA9IHBsYXRmb3JtLmRldmljZS5sYW5ndWFnZS50b0xvd2VyQ2FzZSgpO1xuICBpcFZpc2l0b3I6IHN0cmluZztcbiAgdXNlckFnZW50OiBzdHJpbmcgPVxuICAgICctb3M6JyArIHBsYXRmb3JtLmRldmljZS5vcyArXG4gICAgJy1vc1ZlcnNpb246JyArIHBsYXRmb3JtLmRldmljZS5vc1ZlcnNpb24gK1xuICAgICctbW9kZWw6JyArIHBsYXRmb3JtLmRldmljZS5tb2RlbCArXG4gICAgJy1yZWdpb246JyArIHBsYXRmb3JtLmRldmljZS5yZWdpb24gK1xuICAgIC8qXG4gICAgR2V0cyB0aGUgdXVpZC4gT24gaU9TIHRoaXMgd2lsbCByZXR1cm4gYSBuZXcgdXVpZCBpZiB0aGUgYXBwbGljYXRpb24gaXMgcmUtaW5zdGFsbGVkIG9uIHRoZSBkZXZpY2UuIElmIHlvdSBuZWVkIHRvIHJlY2VpdmUgdGhlIHNhbWUgdXVpZCBldmVuIGFmdGVyIHRoZSBhcHBsaWNhdGlvbiBoYXMgYmVlbiByZS1pbnN0YWxsZWQgb24gdGhlIGRldmljZSwgdXNlIHRoaXMgcGx1Z2luOiBodHRwczovL3d3dy5ucG1qcy5jb20vcGFja2FnZS9uYXRpdmVzY3JpcHQtaW9zLXV1aWRcbiAgICAqL1xuICAgICctdXVpZDonICsgcGxhdGZvcm0uZGV2aWNlLnV1aWQgK1xuICAgICctc2RrVmVyc2lvbjonICsgcGxhdGZvcm0uZGV2aWNlLnNka1ZlcnNpb24gK1xuICAgICctbWFudWZhY3R1cmVyOicgKyBwbGF0Zm9ybS5kZXZpY2UubWFudWZhY3R1cmVyICtcbiAgICAnLWxhbmc6JyArIHBsYXRmb3JtLmRldmljZS5sYW5ndWFnZSArXG4gICAgJy1kZXZpY2VUeXBlOicgKyBwbGF0Zm9ybS5kZXZpY2UuZGV2aWNlVHlwZTtcbiAgdHpvZmZzZXQ6IHN0cmluZyA9ICgobmV3IERhdGUoKSkuZ2V0VGltZXpvbmVPZmZzZXQoKSkudG9TdHJpbmcoKTtcbn1cbmV4cG9ydCBjbGFzcyBMb2dpbkRhdGEgZXh0ZW5kcyBQb3N0RGF0YSB7XG4gIGVtYWlsOiBzdHJpbmcgPSBcImpiaGwyMDAyQHlhaG9vLmZyXCI7XG4gIHBzd3JkOiBzdHJpbmcgPSBcImpiaGwyMDAyXCI7XG59XG5cbmV4cG9ydCBjbGFzcyBTaWduaW5EYXRhIGV4dGVuZHMgTG9naW5EYXRhIHtcbiAgcHN3cmRjb25mOiBzdHJpbmc7XG4gIG5hbWU6IHN0cmluZyA9IFwiamltbXkgYmFob2xlXCI7XG4gIG1pZGRsZW5hbWU6IHN0cmluZztcbiAgZ2VuZGVyOiBudW1iZXI7XG4gIGJ1c2luZXNzOiBib29sZWFuO1xufVxuXG5leHBvcnQgY2xhc3MgTW9iaWxlRGF0YSBleHRlbmRzIFBvc3REYXRhIHtcbiAgaWQ6IHN0cmluZztcbiAgbXVrOiBzdHJpbmc7XG59XG5cbmV4cG9ydCBjbGFzcyBMb2dpbkRhdGFDbGllbnQge1xuICBlbWFpbDogc3RyaW5nO1xuICBtb2JpbGVEYXRhOiBNb2JpbGVEYXRhO1xuICB1c2VyOiBVc2VyRG9jO1xufVxuIl19