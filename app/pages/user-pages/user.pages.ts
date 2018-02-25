import { Component, OnInit } from "@angular/core";
import { AuthService, Config } from "../../shared/auth/auth.service";

import { Location } from "@angular/common";
import { Page } from "../page";

@Component({
  selector: 'page-settings',
  providers: [],
  templateUrl: 'pages/user-pages/user-settings/user-settings.page.html',
  styleUrls: ["pages/user-pages/user-settings/user-settings-common.css", "pages/user-pages/user-settings/user-settings.css"]
})
export class PageSettings extends Page implements OnInit {
  constructor(
    private location: Location) {
    super(location);
  } 
  ngOnInit() {
  }

}