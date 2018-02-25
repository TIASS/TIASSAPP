import { NgModule, NO_ERRORS_SCHEMA } from "@angular/core";
import { NativeScriptModule } from "nativescript-angular/nativescript.module";
import { TNSFontIconModule } from "nativescript-ng2-fonticon";
import { TNSCheckBoxModule } from 'nativescript-checkbox/angular';

import { AppRoutingModule, navigatablePages, exposedComponents } from "./app.routing";
import { AppComponent } from "./app.component";
import { DrawerComponent } from "./components/drawer/drawer.component";
import { CheckboxComponent } from "./components/checkbox/checkbox.component";

import { SIDEDRAWER_DIRECTIVES } from "nativescript-pro-ui/sidedrawer/angular";
import { NativeScriptFormsModule } from "nativescript-angular";
import { NativeScriptHttpModule } from "nativescript-angular/http";

@NgModule({
    bootstrap: [
        AppComponent
    ],
    imports: [
        NativeScriptModule,
        NativeScriptFormsModule,
        NativeScriptHttpModule,
        AppRoutingModule,
        TNSCheckBoxModule,
        TNSFontIconModule.forRoot({
            'fa': 'fonts/font-awesome.css'
        })
    ],
    declarations: [
        SIDEDRAWER_DIRECTIVES,
        AppComponent,
        ...navigatablePages,
        ...exposedComponents
    ],
    providers: [
        // TodosService
    ],
    schemas: [
        NO_ERRORS_SCHEMA
    ]
})
export class AppModule {
}
