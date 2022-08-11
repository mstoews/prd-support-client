import { Component } from '@angular/core';
import { Observable } from 'rxjs';
import { KanbanService } from 'app/components/kanban-tracking/module/kanban.service';
import { IAssignee } from 'app/components/kanban-tracking/module/tasks.model';
import { SharedModule } from '../kanban-tracking/module/shared.module';
import { IconsModule } from 'app/icons.module';
import { GridAGModule } from '../grid/gridAG.module';
import { ProgressComponent } from '../progress/progress.component';
import { CommonModule } from '@angular/common';

export interface ITeam {
  userid: string;
  client_ref: string;
  email: string;
  firstname: string;
  lastname: string;
  role: string
}

@Component({
  standalone: true,
  imports: [GridAGModule, SharedModule, ProgressComponent, IconsModule, CommonModule],
  selector: 'team-list',
  template: `
    <ng-container *ngIf="team$ | async as team">
      <grid
        [cols]="cols"
        [rows]="team"
        (notifyOpenDialog)="onNotify($event)"
      >
      </grid>
    </ng-container>
  `,
})
export class TeamListComponent {
  team$: Observable<any[]>;
  cols: any;

  constructor(private kanbanService: KanbanService) {
    this.team$ = this.kanbanService.getUserList();
    this.cols = this.kanbanService.getTeamCols();
  }
  onNotify(event: any) {
    console.log(event);
  }
}
