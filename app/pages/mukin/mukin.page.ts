import { Component, ElementRef, OnInit, AfterViewInit, ViewChild } from "@angular/core";
//import { SecureStorage, } from "nativescript-secure-storage";//TypeError: Cannot read property 'init' of undefined
import * as applicationSettings from "application-settings";
import { Observable } from 'rxjs/Observable';

import { AuthService, Config, MobileData, LoginData } from "../../shared/auth/auth.service";
import { Router } from "@angular/router";
import { Location } from "@angular/common";
import { Page } from "../page";
import { Page as PageUI } from "ui/page";
import { Color } from "color";
import { View } from "ui/core/view";
import * as pltfinfos from "../../configs/plateform.infos";
import { asElementData } from "@angular/core/src/view";

@Component({
  selector: 'mukin-page',
  providers: [AuthService, Config],
  templateUrl: 'pages/mukin/mukin.page.html',
  styleUrls: ["pages/mukin/mukin-common.css", "pages/mukin/mukin.css"]
})
export class MukinPage extends Page implements OnInit, AfterViewInit {
  @ViewChild("containerAuth0") containerAuth0: ElementRef;
  @ViewChild("containerAuth1") containerAuth1: ElementRef;
  @ViewChild("containerAuth2") containerAuth2: ElementRef;
  //secureStorage: SecureStorage;
  private mukSequence: Observable<Function>;
  private mukPromise: Promise<any>;

  progress: number = -1;
  authState: number = -1;
  mukinData: MobileData;
  loginData: LoginData;
  constructor(
    private location: Location,
    private router: Router,
    private authService: AuthService,
    private config: Config,
    private page: PageUI) {
    super(location);
    this.mukinData = new MobileData();
    this.loginData = new LoginData();
  }
  ngOnInit() {
    this.page.backgroundColor = "#bc15c2";
  }

  ngAfterViewInit(): void {
    this.enAuthState0();
  }

  private muk() {
    this.progress = 0;
    this.authService.mukin(this.mukinData, function (err) { })
      .subscribe(
        (data) => this.successHandler(data, this),
        (error) => this.errorHandler(error)
      );
  }
  login() {
    this.authService.login(this.loginData, function (err) { })
      .subscribe(
        (data) => this.successHandlerLogin(data, this),
        (error) => this.errorHandlerLogin(error)
      );
  }

  private successHandler(data: any, p: MukinPage) {
    console.log("success Handler");
    console.dir(data); 
    if (p.config.LCD) {
      this.progress = 100;
      applicationSettings.setString("muk", p.config.LCD.mobileData.muk);
      p.router.navigate(["/tiasse"]);
    }
    else
      p.errorHandler(null);
  }
  private errorHandler(error) {
  
    this.enAuthState1();
  }
  private successHandlerLogin(data: any, p: MukinPage) {
     
    console.log("success Handler Login");
    console.dir(data); 
    if (p.config.LCD) {
      applicationSettings.setString("muk", p.config.LCD.mobileData.muk); 
      p.router.navigate(["/tiasse"]);
    }
    else
      p.errorHandlerLogin(null);
  }
  private errorHandlerLogin(error) {
    alert("Unfortunately we could not find your account.");
    this.enAuthState2();
  }

  private enAuthState0() {
    this.authState = -1;
    var that = this;
    let as = <View>this.containerAuth0.nativeElement;
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
  }

  private enAuthState1() { 
    this.authState = -1;
    var that = this;
    let as = <View>this.containerAuth1.nativeElement;
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
  }
  private enAuthState2() {
    this.authState = -1;
    var that = this;
    let as = <View>this.containerAuth2.nativeElement;
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
  }

  private goback() {
    if (this.authState !== 2)
      return; 
    this.enAuthState1();
  }
  private displaySignup() {
    this.router.navigate(["/signup"]);
  }
}

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
 */     /*
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