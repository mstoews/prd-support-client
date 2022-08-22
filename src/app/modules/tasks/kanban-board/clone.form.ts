import { Component, Inject, Optional } from '@angular/core';
import { UntypedFormBuilder, UntypedFormGroup } from '@angular/forms';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';
import { KanbanService } from '../module/kanban.service';

export interface IPartyRef {
  party_ref: string;
  client_ref: string;
  active_ind: string;
  party_type: string;
  party_short_name: string;
  party_long_name: string;
  party_extra_long_name: string;
  has_swift_config: string;
  has_netting_config: string;
  version_no: number;
  version_date: Date;
  version_user: string;
}

@Component({
  selector: 'kanban-clone',
  template: `
    <h1 mat-dialog-title>Clone Kanban</h1>
    <div mat-dialog-content>
      <form [formGroup]="formGroup">
        <mat-form-field>
          <mat-select
            (selectionChange)="clientUpdated($event)"
            placeholder="Client Reference"
            formControlName="client_ref"
          >
            <mat-option *ngFor="let client of clients" [value]="client">
              {{ client }}
            </mat-option>
          </mat-select>
        </mat-form-field>
        <mat-form-field>
          <mat-select placeholder="Party Reference" formControlName="party_ref">
            <mat-option *ngFor="let party of parties" [value]="party.party_ref">
              {{ party.party_ref }}
            </mat-option>
          </mat-select>
        </mat-form-field>
        <mat-form-field>
          <input
            matInput
            placeholder="Party Clone Reference"
            formControlName="new_party_ref"
        /></mat-form-field>
      </form>
    </div>
    <div mat-dialog-actions>
      <button
        mat-button
        (click)="onCreate()"
        [mat-dialog-close]="data"
        mat-flat-button
        color="primary"
      >
        Clone
      </button>
      <button mat-button (click)="closeDialog()" mat-flat-button color="warn">
        Cancel
      </button>
    </div>
  `,
})
export class KanbanCloneComponent {
  formGroup!: UntypedFormGroup;
  clients: string[] = ['CORE'];
  // parties: IPartyRef[];

  constructor(
    private fb: UntypedFormBuilder,
    // private partyService: PartyService,
    public dialogRef: MatDialogRef<KanbanCloneComponent>,
    @Optional() @Inject(MAT_DIALOG_DATA) public data: any
  ) {
    if (localStorage.getItem('CLIENT') !== 'CORE') {
      // this.clients.push(localStorage.getItem('CLIENT'));
    }
    this.createForm();
  }

  createForm() {
    this.formGroup = this.fb.group({
      client_ref: '',
      party_ref: '',
      new_party_ref: '',
    });
  }

  onCreate() {
    const data = this.formGroup.getRawValue();
    const newPartyRef = data.new_party_ref as string;
    if (newPartyRef !== '' && newPartyRef.length > 0) {
      this.dialogRef.close({ event: 'Create', data });
    }
  }

  closeDialog() {
    this.dialogRef.close({ event: 'Cancel' });
  }

  clientUpdated(event: any) {
    const sComp = localStorage.getItem('CLIENT');
    // this.partyService
    //   .getPartyByTypeAndClient(sComp, event.value)
    //   .subscribe((value) => {
    //     this.formGroup.patchValue((this.parties = value));
    //   });
  }
}
