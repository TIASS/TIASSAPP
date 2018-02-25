import {Component, ChangeDetectorRef} from "@angular/core";
import {DrawerPage} from "../drawer.page";
import { Config  } from "../../shared/config";
import { UserDoc } from "../../shared/models/user.doc";

@Component({
    selector: 'tiass-page-enterprise',
    providers: [ Config],
    templateUrl: 'pages/tiasse/tiass.page.html',
    styleUrls: ["pages/tiasse/tiass-common.css", "pages/tiasse/tiass.css"]

}) 
export class TiassPageEnterprise extends DrawerPage { 
    
    public user: UserDoc;
    constructor(private changeDetectorRef: ChangeDetectorRef, private config:Config) {
        super(changeDetectorRef); 
        this.user = config.LCD.user;
    }
}
