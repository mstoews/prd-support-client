import {
  Component,
  Output,
  EventEmitter,
  OnInit,
  ViewChild,
  OnDestroy,
} from '@angular/core';
import {
  CdkDragDrop,
  moveItemInArray,
  transferArrayItem,
} from '@angular/cdk/drag-drop';
import { KanbanService } from '../module/kanban.service';
import { Subscription } from 'rxjs';
import { ITask, IBoard } from '../module/tasks.model';
import { MatDialog } from '@angular/material/dialog';
// import { PartyService } from '../../../services/dashboard.service';
import { Router } from '@angular/router';
import { KanbanRefService } from '../module/kanban-party-ref.service';
import { MatDrawer, MatSidenav } from '@angular/material/sidenav';
import { IMenuState } from '../module/tasks.model';
import { IAssignee, IValue, IPriority } from '../module/tasks.model';
// import moment from 'moment';
import { UntypedFormBuilder, UntypedFormGroup } from '@angular/forms';


@Component({
  selector: 'app-kanban-board',
  templateUrl: './kanban.board.component.html',
  styleUrls: ['./kanban.board.component.scss']
})
export class KanbanBoardComponent implements OnInit, OnDestroy {
  @ViewChild('drawer')
  drawer!: MatDrawer;
  taskGroup!: UntypedFormGroup;
  types: IValue[] = [
    { value: 'add', viewValue: 'ADD' },
    { value: 'update', viewValue: 'UPDATE' },
    { value: 'delete', viewValue: 'REMOVE' },
    { value: 'verify', viewValue: 'VERIFY' },
  ];

  rag: IValue[] = [
    { value: '#238823', viewValue: 'GREEN' },
    { value: '#FFBF00', viewValue: 'AMBER' },
    { value: '#D2222D', viewValue: 'RED' },
  ];

  priorities: IValue[] = [
    { value: 'Critical', viewValue: 'CRITICAL' },
    { value: 'High', viewValue: 'HIGH' },
    { value: 'Medium', viewValue: 'MEDIUM' },
    { value: 'Low', viewValue: 'LOW' },
  ];

  subTeam!: Subscription;
  team!: any[];
  task!: ITask;

  action!: string;
  // tslint:disable-next-line: variable-name

  sTitle = 'Add Kanban Task ';
  cPriority!: string;
  cRAG!: string;
  cType!: string;
  currentDate!: Date;

  constructor(
    public dialog: MatDialog,
    // public partyService: PartyService,
    private fb: UntypedFormBuilder,
    public kanbanService: KanbanService,
    public kanbanRefService: KanbanRefService,
    private router: Router
  ) {}

  // notify
  @Output() notifyUpdateTaskData: EventEmitter<ITask> = new EventEmitter();

  public outTitle = 'KANBAN';
  public partyRef!: string;
  party!: KanbanRefService;
  drawOpen: 'open' | 'close' = 'open';

  OPEN = 'Open';
  IN_PROGRESS = 'InProgress';
  IN_REVIEW = 'InReview';
  COMPLETED = 'Completed';
  selected!: string;

  subOpen!: Subscription;
  subProgress!: Subscription;
  subReview!: Subscription;
  subComplete!: Subscription;

  openTasks!: ITask[];
  progressTasks!: ITask[];
  reviewTasks!: ITask[];
  completeTasks!: ITask[];
  clientRef!: string;

  private igMenuChanged!: Subscription;

  // the following logic should be built out into multi dimentional array of broads and tasks
  allBoards!: IBoard[];
  public selectedTask: any;

  @ViewChild('drawer')
  public sidenav!: MatSidenav;

  ngOnInit(): void {
    if (this.partyRef === undefined) {
      this.onInitGetKanbanByType('COMP');
    } else {
      this.refreshData(this.partyRef);
    }
    this.igMenuChanged = this.kanbanRefService.kanbanRefUpdated.subscribe(
      (menuState: IMenuState) => {
        this.partyRef = menuState.partyRef;
        // this.clientRef = menuState.clientRef;
        this.refreshData(this.partyRef);
      }
    );

    this.subTeam = this.kanbanService
    .getUserList()
    .subscribe((teamMember) => (this.team = teamMember));
    this.createEmptyForm();
  }

  onOpenForm(task: ITask) {
    console.log('onModify', task);
    this.createForm(task);
    this.toggleDrawer();
  }

  toggleDrawer() {
    const opened = this.drawer.opened;
    if (opened !== true) {
      this.drawer.toggle();
    } else {
      if (this.drawOpen === 'close') {
        this.drawer.toggle();
      }
    }
  }

  public createEmptyForm() {
    this.taskGroup = this.fb.group({
      task_id: [''],
      party_ref: [this.partyRef],
      client_ref: [this.clientRef],
      title: [''],
      status: [''],
      summary: [''],
      type: [''],
      priority: [''],
      tags: [''],
      estimate: [''],
      assignee: [''],
      rankid: [''],
      color: [''],
      classname: [''],
      Id: [''],
      dependencies: [''],
      description: [''],
      due_date: [''],
      parentId: [''],
      start_date: [''],
    });
  }

  createForm(task: ITask) {
    this.sTitle = 'Kanban Task - ' + task.task_id;
    const dDate = new Date(task.due_date);
    const dueDate = dDate.toISOString().split('T')[0];

    const sDate = new Date(task.start_date);
    const startDate = sDate.toISOString().split('T')[0];

    this.assignPriority(task);
    this.assignType(task);
    this.assignRag(task);

    this.taskGroup = this.fb.group({
      party_ref: [task.party_ref],
      task_id: [task.task_id],
      client_ref: [task.client_ref],
      title: [task.title],
      status: [task.status],
      summary: [task.summary],
      type: [this.cType],
      priority: [this.cPriority],
      tags: [task.tags],
      estimate: [task.estimate],
      assignee: [task.assignee],
      rankid: [task.rankid],
      color: [this.cRAG],
      classname: [task.classname],
      Id: [task.Id],
      dependencies: [task.dependencies],
      description: [task.description],
      due_date: [dueDate],
      parentId: [task.parentId],
      start_date: [startDate],
    });
  }

  create(data: any) {
    console.log('create or copy task', data);
    this.kanbanService
      .KanbanCreate(data)
      .subscribe((value) => this.refreshData(data.party_ref));
    this.toggleDrawer();
  }

  update(data: { client_ref: string; task_id: string; party_ref: string; }) {
    console.log('Update Task', data);
    data.client_ref = 'BARCLAYS';
    this.kanbanService
      .kanbanUpdate(data.task_id, data)
      .subscribe((value) => this.refreshData(data.party_ref));
    this.toggleDrawer();
  }

  delete(data: { task_id: string; party_ref: string; }) {
    this.kanbanService.kanbanDelete(data.task_id).subscribe(
      (value: any) => {
        this.refreshData(data.party_ref);
      },
      (error: { message: any; }) => {
        console.log(error.message);
      }
    );
    this.toggleDrawer();
  }

  public refreshDataW() {
    //  console.log ('this party ref', this.partyRef);
    this.kanbanService
      .getKanbanTaskByRef(this.partyRef)
      .subscribe((task) => (this.allBoards = task));
  }

  onVerify(data: any) {
    //  console.log (`Verify data: ${data}`);
  }

  onInitGetKanbanByType(partyType: string) {
    this.partyRef = this.kanbanRefService.getPartyRef();
    if (
      this.partyRef === undefined ||
      this.partyRef === '' ||
      this.partyRef === null
    ) {
      this.partyRef = this.getFirstPartyRefByType(partyType);
    }
    this.refreshData(this.partyRef);
  }

  getFirstPartyRefByType(partyType: string): string {
    return this.kanbanService.getFirstPartyRef(partyType);
  }

  public refreshData(partyRef: string) {
    this.subOpen = this.kanbanService
      .getKanbanTaskByRefAndStatus(partyRef, this.OPEN)
      .subscribe((task) => (this.openTasks = task));

    this.subProgress = this.kanbanService
      .getKanbanTaskByRefAndStatus(partyRef, this.IN_PROGRESS)
      .subscribe((task) => (this.progressTasks = task));

    this.subReview = this.kanbanService
      .getKanbanTaskByRefAndStatus(partyRef, this.IN_REVIEW)
      .subscribe((task) => (this.reviewTasks = task));

    this.subComplete = this.kanbanService
      .getKanbanTaskByRefAndStatus(partyRef, this.COMPLETED)
      .subscribe((task) => (this.completeTasks = task));
  }

  drop(event: CdkDragDrop<string[]>): void {
    // transfers position of the data in memory,
    // if the drop was within the same container and reordering only Index is the position vertically

    if (event.previousContainer === event.container) {
      moveItemInArray(
        event.container.data,
        event.previousIndex,
        event.currentIndex
      );
      this.updateBoardRanking(event.container.data);
    } else {
      // transfer data to new container in memory only, if the drop was to a new container or board in our case
      transferArrayItem(
        event.previousContainer.data,
        event.container.data,
        event.previousIndex,
        event.currentIndex
      );
      this.updateBoards(
        event.previousContainer.data,
        event.container.data,
        event.container.id
      );
    }
  }

  private updateBoardRanking(previousData: any) {
    // loop through just the previous day
    // previous status is the same so not updated
    const cnt = previousData.length;
    if (cnt > 0) {
      let i = 1;
      previousData.forEach((task: { rankid: number; task_id: string; }) => {
        task.rankid = i;
        this.kanbanService.kanbanUpdate(task.task_id, task).subscribe({
          next: (value) => console.log(`Previous container data: ${value}`),
        });
        i++;
      });
    }
  }

  private updateBoards(
    previousData: any,
    newData: any,
    newContainerId: string
  ) {
    // previous status is the same so not updated
    this.updateBoardRanking(previousData);

    // loop through the board updated to set the status an rank.
    const cnt = newData.length;
    if (cnt > 0) {
      let i = 1;
      newData.forEach((task: { status: string; rankid: number; task_id: string; }) => {
        task.status = newContainerId;
        task.rankid = i;
        this.kanbanService.kanbanUpdate(task.task_id, task).subscribe({
          next: (value) => console.log(`New container data: ${value}`),
        });
        i++;
      });
    }
  }

  trackByFn(index: number, item: any): any {
    return item.id || index;
  }

  // isOverdue(): boolean {
  //   return moment(this.task.due_date, moment.ISO_8601).isBefore(
  //     moment(),
  //     'days'
  //   );
  // }

  changePriority(data: string) {
    this.cPriority = data;
  }

  changeRag(data: string) {
    this.cRAG = data;
  }

  changeType(data: string) {
    this.cType = data;
  }

  private assignRag(task: ITask) {
    if (task.type !== null && task.type !== undefined) {
      const type = this.types.find((x) => x.value === task.type.toString());
      if (type === undefined) {
        this.cType = 'ADD';
      } else {
        this.cType = type.value;
      }
    } else {
      this.cType = 'ADD';
    }
  }

  private assignType(task: ITask) {
    if (task.color !== null && task.color !== undefined) {
      const rag = this.rag.find((x) => x.value === task.color.toString());
      if (rag === undefined) {
        this.cRAG = '#238823';
      } else {
        this.cRAG = rag.value;
      }
    } else {
      this.cRAG = '#238823';
    }
  }

  private assignPriority(task: ITask) {
    if (this.priorities !== undefined) {
      const priority = this.priorities.find(
        (x) => x.value === task.priority.toString()
      );
      if (priority !== undefined) {
        this.cPriority = priority.value;
      } else {
        this.cPriority = 'MEDIUM';
      }
    } else {
      this.cPriority = 'MEDIUM';
    }
  }

  onCreate(data: any) {
    data = this.taskGroup.getRawValue();
    this.create(data);
  }

  onUpdate(data: any) {
    data = this.taskGroup.getRawValue();
    this.update(data);
  }

  onDelete(data: any) {
    data = this.taskGroup.getRawValue();
    this.delete(data);
  }

  onAddComment(data: any) {
    console.log(`onADdComment ${data}`);
  }

  onAssignment(data: any) {
    console.log(`${data}`);
  }

  closeDrawer() {
    this.drawer.toggle();
  }

  ngOnDestroy() {
    this.subOpen.unsubscribe();
    this.subProgress.unsubscribe();
    this.subReview.unsubscribe();
    this.subComplete.unsubscribe();
    this.subTeam.unsubscribe();
  }
}
