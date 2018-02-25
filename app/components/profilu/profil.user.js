"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var core_1 = require("@angular/core");
var user_doc_1 = require("../../shared/models/user.doc");
var router_1 = require("@angular/router");
var helpers_classes_1 = require("../helpers/helpers.classes");
var forms_1 = require("@angular/forms");
var ProfilUser = /** @class */ (function () {
    function ProfilUser() {
    }
    __decorate([
        core_1.Input(),
        __metadata("design:type", user_doc_1.UserDoc)
    ], ProfilUser.prototype, "user", void 0);
    return ProfilUser;
}());
var ProfilUserLeft = /** @class */ (function (_super) {
    __extends(ProfilUserLeft, _super);
    function ProfilUserLeft() {
        return _super.call(this) || this;
    }
    ProfilUserLeft.prototype.openMenu = function () {
    };
    ProfilUserLeft = __decorate([
        core_1.Component({
            selector: 'profil-user-left',
            templateUrl: 'components/profilu/assets/left/profil.user.html',
            styleUrls: ["components/profilu/assets/left/profil.user-common.css", "components/profilu/assets/left/profil.user.css"]
        }),
        __metadata("design:paramtypes", [])
    ], ProfilUserLeft);
    return ProfilUserLeft;
}(ProfilUser));
exports.ProfilUserLeft = ProfilUserLeft;
var ProfilUserTop = /** @class */ (function (_super) {
    __extends(ProfilUserTop, _super);
    function ProfilUserTop(router) {
        var _this = _super.call(this) || this;
        _this.router = router;
        return _this;
    }
    ProfilUserTop.prototype.openSettings = function () {
        this.router.navigate(["/user-settings"]);
    };
    ProfilUserTop = __decorate([
        core_1.Component({
            selector: 'profil-user-top',
            templateUrl: 'components/profilu/assets/top/profil.user.html',
            styleUrls: ["components/profilu/assets/top/profil.user-common.css", "components/profilu/assets/top/profil.user.css"]
        }),
        __metadata("design:paramtypes", [router_1.Router])
    ], ProfilUserTop);
    return ProfilUserTop;
}(ProfilUser));
exports.ProfilUserTop = ProfilUserTop;
var ProfilUserChoice = /** @class */ (function () {
    function ProfilUserChoice(formBuilder) {
        this.formBuilder = formBuilder;
        console.log("Profile User Choice ");
    }
    ProfilUserChoice.prototype.ngOnInit = function () {
        this.gender = new helpers_classes_1.RadioOptionList([
            new helpers_classes_1.RadioOption("0", "femme"),
            new helpers_classes_1.RadioOption("1", "homme")
        ]);
        /* // Plain ol' inline Array definition coming up :)
         this.radioOptions = [
             new RadioOption("0", "femme"),
             new RadioOption("1", "homme"),
             new RadioOption("Radio option 2"),
             new RadioOption("Radio option 3")
         ];*/
    };
    ProfilUserChoice.prototype.checkedChange = function (modelRef) {
        console.log("checkedChange:", modelRef.checked);
    };
    ProfilUserChoice.prototype.toggleCheck = function () {
        this.FirstCheckBox.nativeElement.toggle();
    };
    ProfilUserChoice.prototype.getCheckProp = function () {
        console.log('checked prop value = ' + this.FirstCheckBox.nativeElement.checked);
    };
    __decorate([
        core_1.ViewChild("CB1"),
        __metadata("design:type", core_1.ElementRef)
    ], ProfilUserChoice.prototype, "FirstCheckBox", void 0);
    ProfilUserChoice = __decorate([
        core_1.Component({
            selector: 'profil-user-choice',
            providers: [forms_1.FormBuilder],
            templateUrl: 'components/profilu/assets/profil.user.choice.html',
        }),
        __metadata("design:paramtypes", [forms_1.FormBuilder])
    ], ProfilUserChoice);
    return ProfilUserChoice;
}());
exports.ProfilUserChoice = ProfilUserChoice;
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoicHJvZmlsLnVzZXIuanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyJwcm9maWwudXNlci50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOztBQUFBLHNDQUFnRjtBQUVoRix5REFBdUQ7QUFFdkQsMENBQXlDO0FBQ3pDLDhEQUEwRTtBQUMxRSx3Q0FBb0U7QUFDcEU7SUFFSTtJQUNBLENBQUM7SUFGUTtRQUFSLFlBQUssRUFBRTtrQ0FBTyxrQkFBTzs0Q0FBQztJQUczQixpQkFBQztDQUFBLEFBSkQsSUFJQztBQU9EO0lBQW9DLGtDQUFVO0lBQzFDO2VBQ0ksaUJBQU87SUFDWCxDQUFDO0lBRUQsaUNBQVEsR0FBUjtJQUVBLENBQUM7SUFQUSxjQUFjO1FBTDFCLGdCQUFTLENBQUM7WUFDUCxRQUFRLEVBQUUsa0JBQWtCO1lBQzVCLFdBQVcsRUFBRSxpREFBaUQ7WUFDOUQsU0FBUyxFQUFFLENBQUMsdURBQXVELEVBQUUsZ0RBQWdELENBQUM7U0FDekgsQ0FBQzs7T0FDVyxjQUFjLENBUTFCO0lBQUQscUJBQUM7Q0FBQSxBQVJELENBQW9DLFVBQVUsR0FRN0M7QUFSWSx3Q0FBYztBQWdCM0I7SUFBbUMsaUNBQVU7SUFDekMsdUJBQW9CLE1BQWM7UUFBbEMsWUFDSSxpQkFBTyxTQUNWO1FBRm1CLFlBQU0sR0FBTixNQUFNLENBQVE7O0lBRWxDLENBQUM7SUFFRCxvQ0FBWSxHQUFaO1FBQ0ksSUFBSSxDQUFDLE1BQU0sQ0FBQyxRQUFRLENBQUMsQ0FBQyxnQkFBZ0IsQ0FBQyxDQUFDLENBQUM7SUFDN0MsQ0FBQztJQVBRLGFBQWE7UUFOekIsZ0JBQVMsQ0FBQztZQUNQLFFBQVEsRUFBRSxpQkFBaUI7WUFDM0IsV0FBVyxFQUFFLGdEQUFnRDtZQUM3RCxTQUFTLEVBQUUsQ0FBQyxzREFBc0QsRUFBRSwrQ0FBK0MsQ0FBQztTQUV2SCxDQUFDO3lDQUU4QixlQUFNO09BRHpCLGFBQWEsQ0FRekI7SUFBRCxvQkFBQztDQUFBLEFBUkQsQ0FBbUMsVUFBVSxHQVE1QztBQVJZLHNDQUFhO0FBZTFCO0lBTUksMEJBQW9CLFdBQXdCO1FBQXhCLGdCQUFXLEdBQVgsV0FBVyxDQUFhO1FBQ3hDLE9BQU8sQ0FBQyxHQUFHLENBQUMsc0JBQXNCLENBQUMsQ0FBQztJQUN4QyxDQUFDO0lBRUQsbUNBQVEsR0FBUjtRQVVJLElBQUksQ0FBQyxNQUFNLEdBQUcsSUFBSSxpQ0FBZSxDQUFDO1lBQzlCLElBQUksNkJBQVcsQ0FBQyxHQUFHLEVBQUUsT0FBTyxDQUFDO1lBQzdCLElBQUksNkJBQVcsQ0FBQyxHQUFHLEVBQUUsT0FBTyxDQUFDO1NBQ2hDLENBQUMsQ0FBQztRQUNKOzs7Ozs7YUFNSztJQUNSLENBQUM7SUFFTSx3Q0FBYSxHQUFwQixVQUFxQixRQUFRO1FBQ3pCLE9BQU8sQ0FBQyxHQUFHLENBQUMsZ0JBQWdCLEVBQUUsUUFBUSxDQUFDLE9BQU8sQ0FBQyxDQUFDO0lBQ3BELENBQUM7SUFFTSxzQ0FBVyxHQUFsQjtRQUNJLElBQUksQ0FBQyxhQUFhLENBQUMsYUFBYSxDQUFDLE1BQU0sRUFBRSxDQUFDO0lBQzlDLENBQUM7SUFFTSx1Q0FBWSxHQUFuQjtRQUNJLE9BQU8sQ0FBQyxHQUFHLENBQUMsdUJBQXVCLEdBQUcsSUFBSSxDQUFDLGFBQWEsQ0FBQyxhQUFhLENBQUMsT0FBTyxDQUFDLENBQUM7SUFDcEYsQ0FBQztJQXZDaUI7UUFBakIsZ0JBQVMsQ0FBQyxLQUFLLENBQUM7a0NBQWdCLGlCQUFVOzJEQUFDO0lBSm5DLGdCQUFnQjtRQUw1QixnQkFBUyxDQUFDO1lBQ1AsUUFBUSxFQUFFLG9CQUFvQjtZQUM5QixTQUFTLEVBQUUsQ0FBQyxtQkFBVyxDQUFDO1lBQ3hCLFdBQVcsRUFBRSxtREFBbUQ7U0FDbkUsQ0FBQzt5Q0FPbUMsbUJBQVc7T0FObkMsZ0JBQWdCLENBMkQ1QjtJQUFELHVCQUFDO0NBQUEsQUEzREQsSUEyREM7QUEzRFksNENBQWdCIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgQ29tcG9uZW50LCBJbnB1dCwgT25Jbml0LCBWaWV3Q2hpbGQsIEVsZW1lbnRSZWYgfSBmcm9tIFwiQGFuZ3VsYXIvY29yZVwiO1xuaW1wb3J0IHsgTG9jYXRpb24gfSBmcm9tIFwiQGFuZ3VsYXIvY29tbW9uXCI7XG5pbXBvcnQgeyBVc2VyRG9jIH0gZnJvbSBcIi4uLy4uL3NoYXJlZC9tb2RlbHMvdXNlci5kb2NcIjtcbmltcG9ydCB7IFBhZ2UgfSBmcm9tIFwiLi4vLi4vcGFnZXMvcGFnZVwiO1xuaW1wb3J0IHsgUm91dGVyIH0gZnJvbSBcIkBhbmd1bGFyL3JvdXRlclwiO1xuaW1wb3J0IHsgUmFkaW9PcHRpb25MaXN0LCBSYWRpb09wdGlvbiB9IGZyb20gXCIuLi9oZWxwZXJzL2hlbHBlcnMuY2xhc3Nlc1wiO1xuaW1wb3J0IHsgRm9ybUJ1aWxkZXIsIEZvcm1Hcm91cCwgVmFsaWRhdG9ycyB9IGZyb20gXCJAYW5ndWxhci9mb3Jtc1wiO1xuY2xhc3MgUHJvZmlsVXNlciB7XG4gICAgQElucHV0KCkgdXNlcjogVXNlckRvYztcbiAgICBjb25zdHJ1Y3RvcigpIHtcbiAgICB9XG59XG5cbkBDb21wb25lbnQoe1xuICAgIHNlbGVjdG9yOiAncHJvZmlsLXVzZXItbGVmdCcsXG4gICAgdGVtcGxhdGVVcmw6ICdjb21wb25lbnRzL3Byb2ZpbHUvYXNzZXRzL2xlZnQvcHJvZmlsLnVzZXIuaHRtbCcsXG4gICAgc3R5bGVVcmxzOiBbXCJjb21wb25lbnRzL3Byb2ZpbHUvYXNzZXRzL2xlZnQvcHJvZmlsLnVzZXItY29tbW9uLmNzc1wiLCBcImNvbXBvbmVudHMvcHJvZmlsdS9hc3NldHMvbGVmdC9wcm9maWwudXNlci5jc3NcIl1cbn0pXG5leHBvcnQgY2xhc3MgUHJvZmlsVXNlckxlZnQgZXh0ZW5kcyBQcm9maWxVc2VyIHtcbiAgICBjb25zdHJ1Y3RvcigpIHtcbiAgICAgICAgc3VwZXIoKTtcbiAgICB9XG5cbiAgICBvcGVuTWVudSgpIHtcblxuICAgIH1cbn1cblxuQENvbXBvbmVudCh7XG4gICAgc2VsZWN0b3I6ICdwcm9maWwtdXNlci10b3AnLFxuICAgIHRlbXBsYXRlVXJsOiAnY29tcG9uZW50cy9wcm9maWx1L2Fzc2V0cy90b3AvcHJvZmlsLnVzZXIuaHRtbCcsXG4gICAgc3R5bGVVcmxzOiBbXCJjb21wb25lbnRzL3Byb2ZpbHUvYXNzZXRzL3RvcC9wcm9maWwudXNlci1jb21tb24uY3NzXCIsIFwiY29tcG9uZW50cy9wcm9maWx1L2Fzc2V0cy90b3AvcHJvZmlsLnVzZXIuY3NzXCJdXG5cbn0pXG5leHBvcnQgY2xhc3MgUHJvZmlsVXNlclRvcCBleHRlbmRzIFByb2ZpbFVzZXIge1xuICAgIGNvbnN0cnVjdG9yKHByaXZhdGUgcm91dGVyOiBSb3V0ZXIpIHtcbiAgICAgICAgc3VwZXIoKTtcbiAgICB9XG5cbiAgICBvcGVuU2V0dGluZ3MoKSB7XG4gICAgICAgIHRoaXMucm91dGVyLm5hdmlnYXRlKFtcIi91c2VyLXNldHRpbmdzXCJdKTtcbiAgICB9XG59XG5cbkBDb21wb25lbnQoe1xuICAgIHNlbGVjdG9yOiAncHJvZmlsLXVzZXItY2hvaWNlJyxcbiAgICBwcm92aWRlcnM6IFtGb3JtQnVpbGRlcl0sXG4gICAgdGVtcGxhdGVVcmw6ICdjb21wb25lbnRzL3Byb2ZpbHUvYXNzZXRzL3Byb2ZpbC51c2VyLmNob2ljZS5odG1sJyxcbn0pXG5leHBvcnQgY2xhc3MgUHJvZmlsVXNlckNob2ljZSBpbXBsZW1lbnRzIE9uSW5pdCB7XG4gICAgZm9ybUdyb3VwOiBGb3JtR3JvdXA7XG4gICAgLy9yYWRpb09wdGlvbnM/OiBBcnJheTxSYWRpb09wdGlvbj47XG4gICAgZ2VuZGVyOiBSYWRpb09wdGlvbkxpc3Q7XG4gICAgQFZpZXdDaGlsZChcIkNCMVwiKSBGaXJzdENoZWNrQm94OiBFbGVtZW50UmVmO1xuXG4gICAgY29uc3RydWN0b3IocHJpdmF0ZSBmb3JtQnVpbGRlcjogRm9ybUJ1aWxkZXIpIHtcbiAgICAgICAgY29uc29sZS5sb2coXCJQcm9maWxlIFVzZXIgQ2hvaWNlIFwiKTtcbiAgICB9XG5cbiAgICBuZ09uSW5pdCgpOiB2b2lkIHsvKlxuICAgICAgICB0aGlzLmZvcm1Hcm91cCA9IHRoaXMuZm9ybUJ1aWxkZXIuZ3JvdXAoe1xuICAgICAgICAgICAgdGVzdENoZWNrOiBbXG4gICAgICAgICAgICAgICAge1xuICAgICAgICAgICAgICAgICAgICB2YWx1ZTogdHJ1ZSxcbiAgICAgICAgICAgICAgICAgICAgZGlzYWJsZWQ6IGZhbHNlXG4gICAgICAgICAgICAgICAgfSxcbiAgICAgICAgICAgICAgICBbVmFsaWRhdG9ycy5yZXF1aXJlZF1cbiAgICAgICAgICAgIF1cbiAgICAgICAgfSk7Ki9cbiAgICAgICAgdGhpcy5nZW5kZXIgPSBuZXcgUmFkaW9PcHRpb25MaXN0KFtcbiAgICAgICAgICAgIG5ldyBSYWRpb09wdGlvbihcIjBcIiwgXCJmZW1tZVwiKSxcbiAgICAgICAgICAgIG5ldyBSYWRpb09wdGlvbihcIjFcIiwgXCJob21tZVwiKVxuICAgICAgICBdKTtcbiAgICAgICAvKiAvLyBQbGFpbiBvbCcgaW5saW5lIEFycmF5IGRlZmluaXRpb24gY29taW5nIHVwIDopXG4gICAgICAgIHRoaXMucmFkaW9PcHRpb25zID0gW1xuICAgICAgICAgICAgbmV3IFJhZGlvT3B0aW9uKFwiMFwiLCBcImZlbW1lXCIpLFxuICAgICAgICAgICAgbmV3IFJhZGlvT3B0aW9uKFwiMVwiLCBcImhvbW1lXCIpLFxuICAgICAgICAgICAgbmV3IFJhZGlvT3B0aW9uKFwiUmFkaW8gb3B0aW9uIDJcIiksXG4gICAgICAgICAgICBuZXcgUmFkaW9PcHRpb24oXCJSYWRpbyBvcHRpb24gM1wiKVxuICAgICAgICBdOyovXG4gICAgfVxuXG4gICAgcHVibGljIGNoZWNrZWRDaGFuZ2UobW9kZWxSZWYpIHtcbiAgICAgICAgY29uc29sZS5sb2coXCJjaGVja2VkQ2hhbmdlOlwiLCBtb2RlbFJlZi5jaGVja2VkKTtcbiAgICB9XG5cbiAgICBwdWJsaWMgdG9nZ2xlQ2hlY2soKSB7XG4gICAgICAgIHRoaXMuRmlyc3RDaGVja0JveC5uYXRpdmVFbGVtZW50LnRvZ2dsZSgpO1xuICAgIH1cblxuICAgIHB1YmxpYyBnZXRDaGVja1Byb3AoKSB7XG4gICAgICAgIGNvbnNvbGUubG9nKCdjaGVja2VkIHByb3AgdmFsdWUgPSAnICsgdGhpcy5GaXJzdENoZWNrQm94Lm5hdGl2ZUVsZW1lbnQuY2hlY2tlZCk7XG4gICAgfVxuICAgIC8qXG4gICAgY2hhbmdlQ2hlY2tlZFJhZGlvKHJhZGlvT3B0aW9uOiBSYWRpb09wdGlvbik6IHZvaWQge1xuICAgICAgICByYWRpb09wdGlvbi5zZWxlY3RlZCA9ICFyYWRpb09wdGlvbi5zZWxlY3RlZDtcblxuICAgICAgICBpZiAoIXJhZGlvT3B0aW9uLnNlbGVjdGVkKSB7XG4gICAgICAgICAgICByZXR1cm47XG4gICAgICAgIH1cblxuICAgICAgICAvLyB1bmNoZWNrIGFsbCBvdGhlciBvcHRpb25zXG4gICAgICAgIHRoaXMucmFkaW9PcHRpb25zLmZvckVhY2gob3B0aW9uID0+IHtcbiAgICAgICAgICAgIGlmIChvcHRpb24udGV4dCAhPT0gcmFkaW9PcHRpb24udGV4dCkge1xuICAgICAgICAgICAgICAgIG9wdGlvbi5zZWxlY3RlZCA9IGZhbHNlO1xuICAgICAgICAgICAgfVxuICAgICAgICB9KTtcbiAgICB9Ki9cbn0iXX0=