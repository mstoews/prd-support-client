import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import { MatDialog, MatDialogModule } from '@angular/material/dialog';

@Component({
  selector: 'app-monitoring',
  templateUrl: './monitoring.component.html',
})
export class MonitoringComponent implements OnInit {
  priority$: any;
  cols: any;

  constructor(
    private dialog: MatDialog,

  ) {}

  ngOnInit() {

    console.log(this.priority$);
  }

  public onNotify(event: any) {
    // this.openDialog(event);
  }

  public updateData() {

  }

  // openDialog(jsonData: any) {
  //   const dialogRef = this.dialog.open(PriorityFormComponent, {
  //     width: '380px',
  //     data: jsonData,
  //   });

  //   dialogRef.afterClosed().subscribe((result) => {
  //     //  console.log ('Just before update', result.data);
  //     switch (result.event) {
  //       case 'Create':
  //         this.create(result.data);
  //         break;
  //       case 'Update':
  //         this.update(result.data);
  //         break;
  //       case 'Delete':
  //         this.delete(result.data);
  //         break;
  //       case 'Cancel':
  //         break;
  //     }
  //   });
  // }

  // create(data: IPriority) {
  //   this.updateData();
  // }

  // update(data: IPriority) {
  //   this.updateData();
  // }

  // delete(data: IPriority) {
  //   this.updateData();
  // }

  public onFileUpload(filedata: any) {
    const data = JSON.parse(filedata);
    // for (const element of data) {
    //   this.partyService.createPartyNarrative(element);
    // }
  }
}
