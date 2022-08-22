import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule, Routes } from '@angular/router';
import { TaskComponent } from '../kanban-board/tasks-card/task.component';
import { KanbanBoardComponent } from '../kanban-board/kanban.board.component';
import { KanbanMenubarComponent } from '../kanban-menubar/menubar.component';
import { KanbanGroupComponent } from '../kanban-group/kanban.group.component';
import { KanbanMainComponent } from '../kanban-main/kanban.main.component';

import { TypeListComponent } from '../lists/type-list/type-list.component';
import { PriorityListComponent } from '../lists/priority-list/priority-list.component';
import { StatusListComponent } from '../lists/status-list/status-list.component';
import { TasksListComponent } from '../lists/tasks-list/tasks-list.component';
import { KanbanService } from './kanban.service';
import { KanbanCommonModule } from './kanban.common.module';
import { KanbanRefService } from './kanban-party-ref.service';
import { GridAGModule } from '../../../components/grid/gridAG.module';
import { DnDTreeComponent } from '../lists/tree-list/dndTree';
import { SidenavService } from '../sidenav.service';
import { PriorityFormComponent } from '../lists/priority-list/priority.form';
import { TypeFormComponent } from '../lists/type-list/types.form';
import { KanbanCloneComponent } from '../kanban-board/clone.form';
import { TeamListComponent } from '../lists/team-list/team-list.component';
import { TeamMemberFormComponent } from '../lists/team-list/member.form';
import { StatusComponent } from '../lists/status-list/status.component';
import { StatusDetailsComponent } from '../lists/status-list/status.details';
import { MatDialogRef } from '@angular/material/dialog';
import { KanbanBoardListComponent } from '../lists/kanban-board-list/kanban-board-list.component';

const routes: Routes = [
  {
    path: 'kanban',
    component: KanbanMainComponent,
  },
  {
    path: '',
    redirectTo: '/kanban',
    pathMatch: 'full',
  },
  {
    path: '**',
    component: KanbanMainComponent,
  },
];

@NgModule({
    declarations: [

        KanbanBoardComponent,
        KanbanMainComponent,
        KanbanGroupComponent,
        TypeListComponent,
        PriorityListComponent,
        TasksListComponent,
        KanbanMainComponent,
        KanbanMenubarComponent,
        DnDTreeComponent,
        PriorityFormComponent,
        TypeFormComponent,
        KanbanCloneComponent,
        TeamListComponent,
        TeamMemberFormComponent,
        StatusListComponent,
        StatusComponent,
        StatusDetailsComponent,
        KanbanBoardListComponent,


    ],
    imports: [
        CommonModule,
        RouterModule.forChild(routes),
        KanbanCommonModule,
        GridAGModule,
    ],
    exports: [KanbanCommonModule],
    providers: [ KanbanRefService, SidenavService, { provide: MatDialogRef,  useValue: {} }]
})
export class KanbanTasksModule {}
