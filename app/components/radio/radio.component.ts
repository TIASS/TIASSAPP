import {Component, Input, Output, EventEmitter} from "@angular/core";

@Component({
    selector: "Checkbox",
    template: `
    <Image
        [src]="checked ? 'res://selected' : 'res://nonselected'"
        class="checkbox"
        (tap)="onTap()">
    </Image>
    `
})
export class RadioComponent {
    @Output() public tap: EventEmitter<boolean> = new EventEmitter<boolean>();
    @Input() public checked: boolean = false;

    constructor() {
    }

    public onTap(): void {
        this.tap.emit(this.checked);
    }
}