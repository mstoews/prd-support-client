import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import { KanbanService } from '../../module/kanban.service';
import { KanbanRefService } from '../../module/kanban-party-ref.service';

export interface PartyType {
  party_ref: string;
  client_ref: string;
  party_type: string;
  party_short_name: string;
  party_long_name: string;
  party_extra_long_name: string;
  version_date: string;
  version_no: number;
  version_user: string;
}

export type Query = {
  partyByType: PartyType[];
};

@Component({
  // tslint:disable-next-line:component-selector
  selector: 'kanban-board-list',
  // templateUrl: './party.component.html',
  template: `
  <div class="lg:w-2xl bg-gray rounded-xl shadow-lg items-center">
    <ng-container class="p-0 m-0" *ngIf="kanbanList | async as rows">
      <grid [cols]="cols" [rows]="rows" (notifyOpenDialog)="onNotify($event)">
      </grid>
    </ng-container>
</div>
  `,
})
export class KanbanBoardListComponent {
  kanbanList!: Observable<PartyType[]>;
  partyRef: string;
  clientRef: string;
  cols: any;

  constructor(
    private kanbanService: KanbanService,
    kanbanRefService: KanbanRefService
  ) {
    const client = localStorage.getItem('CLIENT');
    this.kanbanList = this.kanbanService.getPartyByRefAndClient('COMP', client);
    kanbanRefService.kanbanRefUpdated.subscribe((ref) => {
      this.partyRef = ref.partyRef;
      this.clientRef = ref.clientRef;
    });
    this.cols = this.kanbanService.getPartyCols();
  }

  logEvent(e) {
    console.log(e);
  }

  onRowDblClick(e) {
    console.log('Double clicked', e.data);
  }
}
