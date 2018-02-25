import { Component, ElementRef, OnInit, AfterViewInit, ViewChild } from "@angular/core";
import * as applicationSettings from "application-settings";

import { AuthService, Config, SigninData } from "../../shared/auth/auth.service";
import { RadioOptionList, RadioOption } from "../../components/helpers/helpers.classes";

import { Router } from "@angular/router";
import { Location } from "@angular/common";
import { Page } from "../page";
import { Page as PageUI } from "ui/page";
import { Color } from "color";
import { View } from "ui/core/view";
import * as pltfinfos from "../../configs/plateform.infos";

@Component({
  selector: 'signup-page',
  providers: [AuthService, Config],
  templateUrl: 'pages/signup/signup.page.html',
  styleUrls: ["pages/signup/signup-common.css", "pages/signup/signup.css"]
})
export class SignupPage extends Page implements OnInit, AfterViewInit {

  signinData: SigninData;
  @ViewChild("container") container: ElementRef;
  @ViewChild("barbeshoper") barbeshoper: ElementRef;
  gender: RadioOptionList;
  errors: RadioOptionList;
  
  constructor( 
    private location: Location,
    private router: Router,
    private authService: AuthService,
    private config: Config,
    private page: PageUI) {
    super(location);
    this.signinData = new SigninData();
  }


  submit() {
    this.signinData.gender = Number.parseInt(this.gender.selectedValue);
    this.signinData.business = this.barbeshoper.nativeElement.checked;
    this.authService.register(this.signinData, this.errorHandler)
      .subscribe(
        (data) => this.successHandler(data, this),
        (error) => this.errorHandler
      );
  }
  ngOnInit() {
    this.page.backgroundColor = "#bc15c2";
    this.page.color = new Color("white");
    this.gender = new RadioOptionList([
      new RadioOption("0", "femme"),
      new RadioOption("1", "homme"),
      new RadioOption("2", "rerr")
    ]);
  }

  ngAfterViewInit(): void {
  }

  private successHandler(data: any, p: SignupPage) {
    console.log("data");
    console.dir(data);
    if (p.config.LCD) {
      applicationSettings.setString("muk", p.config.LCD.mobileData.muk);
      p.router.navigate(["/tiassu"]);
    }
    else
      p.errorHandler(null);
  }
  private errorHandler(error) { alert("Unfortunately we sing u up. Please Try again!"); }


  public toggleCheck() {
    this.barbeshoper.nativeElement.toggle();
  }

} 