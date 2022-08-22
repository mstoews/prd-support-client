import { Component } from '@angular/core';
import { Observable } from 'rxjs';
import { PrdService } from 'app/services/prd.service';

export interface ITeam {
  userid: string;
  client_ref: string;
  email: string;
  firstname: string;
  lastname: string;
  role: string
}

@Component({
  selector: 'team-list',
  template: ` <div class="rounded">
    <ng-container *ngIf="team$ | async as team">
      <grid
        [cols]="cols"
        [rows]="team"
        (notifyOpenDialog)="onNotify($event)"
      >
      </grid>
    </ng-container>
    </div>
  `,
})
export class TeamComponent {
  team$: Observable<any[]>;
  cols: any;

  constructor(private prodService: PrdService) {
    this.team$ = this.prodService.getUserList();
    this.cols = this.prodService.getTeamCols();
  }
  onNotify(event: any) {
    console.log(event);
  }
}
