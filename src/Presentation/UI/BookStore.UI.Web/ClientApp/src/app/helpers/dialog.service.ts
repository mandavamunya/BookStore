import { Injectable } from "@angular/core";
import { MatDialog } from "@angular/material/dialog";
import { DialogComponent } from "../components/dialog/dialog.component";

@Injectable()
export class DialogService
{
    public isDialogOpen: Boolean = false;

    constructor(public dialog: MatDialog) { }

    openDialog(data: any): any {
        if (this.isDialogOpen) {
            return false;
        }
        this.isDialogOpen = true;
        
        const dialogRef = this.dialog.open(DialogComponent, {
            width: '300px',
            data:  data
        });

        dialogRef.afterClosed().subscribe(result => {
            this.isDialogOpen = false;
            console.log(result)
        })
    }

    
}

