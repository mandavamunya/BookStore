import { Component, Inject } from "@angular/core";
import { MAT_DIALOG_DATA } from "@angular/material/dialog";

@Component({
    selector: '',
    templateUrl: './dialog.component.html'
})
export class DialogComponent {
    title  = '';
    constructor(@Inject(MAT_DIALOG_DATA) public data: any) {}
}