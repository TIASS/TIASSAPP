import { Component } from "@angular/core";
import { Location } from "@angular/common";
import { Page } from "../page";
import { Config } from "../../shared/config";
import { UserDoc } from "../../shared/models/user.doc";
 
@Component({
    selector: 'tiass-page-user',
    providers: [Config],
    templateUrl: 'pages/tiassu/tiass.page.html',
    styleUrls: ["pages/tiassu/tiass-common.css", "pages/tiassu/tiass.css"]

})
export class TiassPageUser extends Page {

    public user: UserDoc;
    constructor(
        private location: Location, private config: Config) {
        super(location);
        this.user = config.LCD.user;
    }
}
