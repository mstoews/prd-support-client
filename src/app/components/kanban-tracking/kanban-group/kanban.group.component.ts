import {
  Component,
  Output,
  ViewChild,
  EventEmitter,
} from '@angular/core';
import { UntypedFormBuilder, UntypedFormGroup } from '@angular/forms';
import { MatTabGroup } from '@angular/material/tabs';
import { KanbanService } from '../module/kanban.service';
import { KanbanBoardComponent } from '../kanban-board/kanban.board.component';
import { PartyService } from 'app/services/party.service';
import { KanbanRefService } from '../module/kanban-party-ref.service';
import { TasksListComponent } from '../lists/tasks-list/tasks-list.component';

@Component({
  selector: 'app-kanban-group',
  templateUrl: './kanban.group.component.html',
  styleUrls: ['./kanban.group.component.scss'],
  providers: [KanbanService],
})
export class KanbanGroupComponent {
  constructor(
    public formBuilder: UntypedFormBuilder,
    public partyService: PartyService,
    public kanbanService: KanbanService,
    kanbanRefService: KanbanRefService
  ) {
    // const client = localStorage.getItem('CLIENT');
    
    kanbanRefService.kanbanRefUpdated.subscribe((ref) => {
      this.partyRef = ref.partyRef;
      this.clientRef = ref.clientRef;
    });
  }
  
  @Output() public FormPartyRefChanged: EventEmitter<any> = new EventEmitter();
  @ViewChild('tabGroup', { static: true }) tabGroup: MatTabGroup;
  public partyRef: string;

  formGroup: UntypedFormGroup;
  currentTab = 0;
  clientRef: string;
  currectSelection: string;

  @ViewChild(KanbanBoardComponent) public kanbanBoardComponent: KanbanBoardComponent;
  @ViewChild(TasksListComponent) public tasksListComponent: TasksListComponent;


  public onAdd(){
    console.log('KanbanGroupComponent: Add');
    this.kanbanBoardComponent.toggleDrawer();
    this.kanbanBoardComponent.createEmptyForm();
  }

  public updateKanbanTasks() {
    const tabLabel =
      this.tabGroup._tabs.toArray()[this.tabGroup.selectedIndex].textLabel;
    switch (tabLabel) {
      case 'Kanban': {
        this.kanbanBoardComponent.refreshData(this.partyRef);
        break;
      }
      case 'Board Tasks': {
        this.tasksListComponent.refreshDataByRef(this.partyRef);
        break;
      }
      case 'Dependency': {
        break;
      }
      case 'Team Members': {
        break;
      }
      default:
        break;
    }
  }

  onTabClick() {
    const tabLabel =
      this.tabGroup._tabs.toArray()[this.tabGroup.selectedIndex].textLabel;
    {
      switch (tabLabel) {
        case 'Kanban': {
          this.kanbanBoardComponent.refreshData(this.partyRef);
          break;
        }
        case 'Board Tasks': {
          this.tasksListComponent.refreshDataByRef(this.partyRef);
          break;
        }
        case 'Dependency': {
          break;
        }
        case 'Team Members': {
          break;
        }
        default:
          break;
      }
    }
  }

  onClickAdd(event: { index: any; tab?: string }) {
    this.currentTab = event.index;
    switch (event.index) {
      case 0: {
        // this.kanbanBoardComponent.openDialog();
        break;
      }
      case 1: {
        // //  console.log ('Reference Tab');
        break;
      }
      case 2: {
        // //  console.log ('Class Tab');
        break;
      }
      case 3: {
        // //  console.log ('Flag Tab');
        break;
      }
      case 4: {
        // //  console.log ('Narrative Tab');
        break;
      }
      case 5: {
        // //  console.log ('Association Add');
        break;
      }
      case 6: {
        // //  console.log ('Association Add');
        break;
      }

      default:
        break;
    }
  }

  createForm() {
    this.formGroup = this.formBuilder.group({});
  }
}
