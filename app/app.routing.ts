import { NgModule } from "@angular/core";
import { NativeScriptRouterModule } from "nativescript-angular/router";
import { Routes } from "@angular/router";
import { MukinPage } from "./pages/mukin/mukin.page";
import { LoginPage } from "./pages/login/login.page";
import { SignupPage } from "./pages/signup/signup.page";
import { TiassPageUser } from "./pages/tiassu/tiass.page.user";
import { TiassPageEnterprise } from "./pages/tiasse/tiass.page.enterprise";
import  * as UserPages from "./pages/user-pages/user.pages";
 import { DrawerComponent } from "./components/drawer/drawer.component";
import * as Menus from "./components/menus/menus.component";
import * as ProfilUsers from "./components/profilu/profil.user";
import { CheckboxComponent } from "./components/checkbox/checkbox.component";
import { RadioComponent } from "./components/radio/radio.component";



export const navigatablePages = [
    MukinPage,
    LoginPage,
    SignupPage,
    TiassPageUser,
    TiassPageEnterprise,
    UserPages.PageSettings
];
export const exposedComponents = [DrawerComponent,
    CheckboxComponent,
    RadioComponent,
    Menus.MenuUser, 
    Menus.MenuEnterprise,
    ProfilUsers.ProfilUserLeft,
    ProfilUsers.ProfilUserTop,
    ProfilUsers.ProfilUserChoice,
];


const routes: Routes = [
    { path: "", redirectTo: "/mukin", pathMatch: "full" },
    { path: "mukin", component: MukinPage },
    { path: "login", component: LoginPage },
    { path: "signup", component: SignupPage },
    { path: "tiassu", component: TiassPageUser },
    { path: "tiasse", component: TiassPageEnterprise },
    { path: "user-settings", component: UserPages.PageSettings }
];
@NgModule({
    imports: [NativeScriptRouterModule.forRoot(routes)],
    exports: [NativeScriptRouterModule]
})
export class AppRoutingModule {
}