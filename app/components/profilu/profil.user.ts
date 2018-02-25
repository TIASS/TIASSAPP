import { Component, Input, OnInit, ViewChild, ElementRef } from "@angular/core";
import { Location } from "@angular/common";
import { UserDoc } from "../../shared/models/user.doc";
import { Page } from "../../pages/page";
import { Router } from "@angular/router";
import { RadioOptionList, RadioOption } from "../helpers/helpers.classes";
import { FormBuilder, FormGroup, Validators } from "@angular/forms";
class ProfilUser {
    @Input() user: UserDoc;
    constructor() {
    }
}

@Component({
    selector: 'profil-user-left',
    templateUrl: 'components/profilu/assets/left/profil.user.html',
    styleUrls: ["components/profilu/assets/left/profil.user-common.css", "components/profilu/assets/left/profil.user.css"]
})
export class ProfilUserLeft extends ProfilUser {
    constructor() {
        super();
    }

    openMenu() {

    }
}

@Component({
    selector: 'profil-user-top',
    templateUrl: 'components/profilu/assets/top/profil.user.html',
    styleUrls: ["components/profilu/assets/top/profil.user-common.css", "components/profilu/assets/top/profil.user.css"]

})
export class ProfilUserTop extends ProfilUser {
    constructor(private router: Router) {
        super();
    }

    openSettings() {
        this.router.navigate(["/user-settings"]);
    }
}
 
@Component({
    selector: 'profil-user-choice',
    providers: [FormBuilder],
    templateUrl: 'components/profilu/assets/profil.user.choice.html',
})
export class ProfilUserChoice implements OnInit {
    formGroup: FormGroup;
    //radioOptions?: Array<RadioOption>;
    gender: RadioOptionList;
    @ViewChild("CB1") FirstCheckBox: ElementRef;

    constructor(private formBuilder: FormBuilder) {
        console.log("Profile User Choice ");
    }

    ngOnInit(): void {/*
        this.formGroup = this.formBuilder.group({
            testCheck: [
                {
                    value: true,
                    disabled: false
                },
                [Validators.required]
            ]
        });*/
        this.gender = new RadioOptionList([
            new RadioOption("0", "femme"),
            new RadioOption("1", "homme")
        ]);
       /* // Plain ol' inline Array definition coming up :)
        this.radioOptions = [
            new RadioOption("0", "femme"),
            new RadioOption("1", "homme"),
            new RadioOption("Radio option 2"),
            new RadioOption("Radio option 3")
        ];*/
    }

    public checkedChange(modelRef) {
        console.log("checkedChange:", modelRef.checked);
    }

    public toggleCheck() {
        this.FirstCheckBox.nativeElement.toggle();
    }

    public getCheckProp() {
        console.log('checked prop value = ' + this.FirstCheckBox.nativeElement.checked);
    }
    /*
    changeCheckedRadio(radioOption: RadioOption): void {
        radioOption.selected = !radioOption.selected;

        if (!radioOption.selected) {
            return;
        }

        // uncheck all other options
        this.radioOptions.forEach(option => {
            if (option.text !== radioOption.text) {
                option.selected = false;
            }
        });
    }*/
}