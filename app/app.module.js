"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var core_1 = require("@angular/core");
var nativescript_module_1 = require("nativescript-angular/nativescript.module");
var nativescript_ng2_fonticon_1 = require("nativescript-ng2-fonticon");
var angular_1 = require("nativescript-checkbox/angular");
var app_routing_1 = require("./app.routing");
var app_component_1 = require("./app.component");
var angular_2 = require("nativescript-pro-ui/sidedrawer/angular");
var nativescript_angular_1 = require("nativescript-angular");
var http_1 = require("nativescript-angular/http");
var AppModule = /** @class */ (function () {
    function AppModule() {
    }
    AppModule = __decorate([
        core_1.NgModule({
            bootstrap: [
                app_component_1.AppComponent
            ],
            imports: [
                nativescript_module_1.NativeScriptModule,
                nativescript_angular_1.NativeScriptFormsModule,
                http_1.NativeScriptHttpModule,
                app_routing_1.AppRoutingModule,
                angular_1.TNSCheckBoxModule,
                nativescript_ng2_fonticon_1.TNSFontIconModule.forRoot({
                    'fa': 'fonts/font-awesome.css'
                })
            ],
            declarations: [
                angular_2.SIDEDRAWER_DIRECTIVES,
                app_component_1.AppComponent
            ].concat(app_routing_1.navigatablePages, app_routing_1.exposedComponents),
            providers: [],
            schemas: [
                core_1.NO_ERRORS_SCHEMA
            ]
        })
    ], AppModule);
    return AppModule;
}());
exports.AppModule = AppModule;
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiYXBwLm1vZHVsZS5qcyIsInNvdXJjZVJvb3QiOiIiLCJzb3VyY2VzIjpbImFwcC5tb2R1bGUudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7QUFBQSxzQ0FBMkQ7QUFDM0QsZ0ZBQThFO0FBQzlFLHVFQUE4RDtBQUM5RCx5REFBa0U7QUFFbEUsNkNBQXNGO0FBQ3RGLGlEQUErQztBQUkvQyxrRUFBK0U7QUFDL0UsNkRBQStEO0FBQy9ELGtEQUFtRTtBQTZCbkU7SUFBQTtJQUNBLENBQUM7SUFEWSxTQUFTO1FBM0JyQixlQUFRLENBQUM7WUFDTixTQUFTLEVBQUU7Z0JBQ1AsNEJBQVk7YUFDZjtZQUNELE9BQU8sRUFBRTtnQkFDTCx3Q0FBa0I7Z0JBQ2xCLDhDQUF1QjtnQkFDdkIsNkJBQXNCO2dCQUN0Qiw4QkFBZ0I7Z0JBQ2hCLDJCQUFpQjtnQkFDakIsNkNBQWlCLENBQUMsT0FBTyxDQUFDO29CQUN0QixJQUFJLEVBQUUsd0JBQXdCO2lCQUNqQyxDQUFDO2FBQ0w7WUFDRCxZQUFZO2dCQUNSLCtCQUFxQjtnQkFDckIsNEJBQVk7cUJBQ1QsOEJBQWdCLEVBQ2hCLCtCQUFpQixDQUN2QjtZQUNELFNBQVMsRUFBRSxFQUVWO1lBQ0QsT0FBTyxFQUFFO2dCQUNMLHVCQUFnQjthQUNuQjtTQUNKLENBQUM7T0FDVyxTQUFTLENBQ3JCO0lBQUQsZ0JBQUM7Q0FBQSxBQURELElBQ0M7QUFEWSw4QkFBUyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IE5nTW9kdWxlLCBOT19FUlJPUlNfU0NIRU1BIH0gZnJvbSBcIkBhbmd1bGFyL2NvcmVcIjtcbmltcG9ydCB7IE5hdGl2ZVNjcmlwdE1vZHVsZSB9IGZyb20gXCJuYXRpdmVzY3JpcHQtYW5ndWxhci9uYXRpdmVzY3JpcHQubW9kdWxlXCI7XG5pbXBvcnQgeyBUTlNGb250SWNvbk1vZHVsZSB9IGZyb20gXCJuYXRpdmVzY3JpcHQtbmcyLWZvbnRpY29uXCI7XG5pbXBvcnQgeyBUTlNDaGVja0JveE1vZHVsZSB9IGZyb20gJ25hdGl2ZXNjcmlwdC1jaGVja2JveC9hbmd1bGFyJztcblxuaW1wb3J0IHsgQXBwUm91dGluZ01vZHVsZSwgbmF2aWdhdGFibGVQYWdlcywgZXhwb3NlZENvbXBvbmVudHMgfSBmcm9tIFwiLi9hcHAucm91dGluZ1wiO1xuaW1wb3J0IHsgQXBwQ29tcG9uZW50IH0gZnJvbSBcIi4vYXBwLmNvbXBvbmVudFwiO1xuaW1wb3J0IHsgRHJhd2VyQ29tcG9uZW50IH0gZnJvbSBcIi4vY29tcG9uZW50cy9kcmF3ZXIvZHJhd2VyLmNvbXBvbmVudFwiO1xuaW1wb3J0IHsgQ2hlY2tib3hDb21wb25lbnQgfSBmcm9tIFwiLi9jb21wb25lbnRzL2NoZWNrYm94L2NoZWNrYm94LmNvbXBvbmVudFwiO1xuXG5pbXBvcnQgeyBTSURFRFJBV0VSX0RJUkVDVElWRVMgfSBmcm9tIFwibmF0aXZlc2NyaXB0LXByby11aS9zaWRlZHJhd2VyL2FuZ3VsYXJcIjtcbmltcG9ydCB7IE5hdGl2ZVNjcmlwdEZvcm1zTW9kdWxlIH0gZnJvbSBcIm5hdGl2ZXNjcmlwdC1hbmd1bGFyXCI7XG5pbXBvcnQgeyBOYXRpdmVTY3JpcHRIdHRwTW9kdWxlIH0gZnJvbSBcIm5hdGl2ZXNjcmlwdC1hbmd1bGFyL2h0dHBcIjtcblxuQE5nTW9kdWxlKHtcbiAgICBib290c3RyYXA6IFtcbiAgICAgICAgQXBwQ29tcG9uZW50XG4gICAgXSxcbiAgICBpbXBvcnRzOiBbXG4gICAgICAgIE5hdGl2ZVNjcmlwdE1vZHVsZSxcbiAgICAgICAgTmF0aXZlU2NyaXB0Rm9ybXNNb2R1bGUsXG4gICAgICAgIE5hdGl2ZVNjcmlwdEh0dHBNb2R1bGUsXG4gICAgICAgIEFwcFJvdXRpbmdNb2R1bGUsXG4gICAgICAgIFROU0NoZWNrQm94TW9kdWxlLFxuICAgICAgICBUTlNGb250SWNvbk1vZHVsZS5mb3JSb290KHtcbiAgICAgICAgICAgICdmYSc6ICdmb250cy9mb250LWF3ZXNvbWUuY3NzJ1xuICAgICAgICB9KVxuICAgIF0sXG4gICAgZGVjbGFyYXRpb25zOiBbXG4gICAgICAgIFNJREVEUkFXRVJfRElSRUNUSVZFUyxcbiAgICAgICAgQXBwQ29tcG9uZW50LFxuICAgICAgICAuLi5uYXZpZ2F0YWJsZVBhZ2VzLFxuICAgICAgICAuLi5leHBvc2VkQ29tcG9uZW50c1xuICAgIF0sXG4gICAgcHJvdmlkZXJzOiBbXG4gICAgICAgIC8vIFRvZG9zU2VydmljZVxuICAgIF0sXG4gICAgc2NoZW1hczogW1xuICAgICAgICBOT19FUlJPUlNfU0NIRU1BXG4gICAgXVxufSlcbmV4cG9ydCBjbGFzcyBBcHBNb2R1bGUge1xufVxuIl19