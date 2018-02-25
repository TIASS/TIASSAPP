import { Component, ElementRef, OnInit, AfterViewInit, ViewChild } from "@angular/core";
//import { LoginData } from "../../shared/auth/auth"; 
import { AuthService, Config, LoginData } from "../../shared/auth/auth.service";

import { Router } from "@angular/router";
import { Location } from "@angular/common";
import { Page } from "../page";
import { Page as PageUI } from "ui/page";
import { Color } from "color";
import { View } from "ui/core/view";
import * as pltfinfos from "../../configs/plateform.infos";

@Component({
  selector: 'login-page',
  providers: [AuthService, Config],
  templateUrl: 'pages/login/login.page.html',
  styleUrls: ["pages/login/login-common.css", "pages/login/login.css"]
})
export class LoginPage extends Page implements OnInit, AfterViewInit {
 
  loginData: LoginData;
  @ViewChild("container") container: ElementRef;

  constructor(
    private location: Location,
    private router: Router,
    private authService: AuthService,
    private config: Config,
    private page: PageUI) {
    super(location);
    this.loginData = new LoginData();
  }

  submit() {
    this.authService.login(this.loginData, this.errorHandler)
      .subscribe(
        (data) => this.successHandler(data, this),
        (error) => this.errorHandler
      );
 
  }
  ngOnInit() { 
    this.page.actionBarHidden = true;
    this.page.backgroundColor = "#bc15c2";
    this.page.color = new Color("white"); 
  }

  ngAfterViewInit(): void {
  /*  let container = <View>this.container.nativeElement;
    container.animate({
      backgroundColor: new Color("#301217"),
      duration: 200
    });*/
  }
  displaySignup() {
    this.router.navigate(["/signup"]);
  }

  private successHandler(data: any, p: LoginPage) {
    if (p.config.LCD)
      p.router.navigate(["/tiassu"]);
    else
      p.errorHandler(null);
  }
  errorHandler(error) { alert("Unfortunately we could not find your account."); }
}