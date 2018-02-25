import { Component } from "@angular/core";

@Component({
    selector: 'menu-user',
    templateUrl: 'components/menus/menu.user.html',
    styleUrls: ["components/menus/menu-common.css", "components/menus/menu.css"]
})
export class MenuUser {
    constructor() {
    }
}

@Component({
    selector: 'menu-enterprise',
    templateUrl: 'components/menus/menu.enterprise.html',
    styleUrls: ["components/menus/menu-common.css", "components/menus/menu.css"]
})
export class MenuEnterprise {
    constructor() {
    }
}