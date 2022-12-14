/* eslint-disable @typescript-eslint/naming-convention */
import { EventEmitter, Injectable } from '@angular/core';
import { map } from 'rxjs/operators';
import { BehaviorSubject, Observable } from 'rxjs';
import * as kanbanApi from 'app/services/graphql.api';
import { StatusType } from '../lists/status-list/status.types';
import { ITask } from './tasks.model';

export type TaskArray = {
  tasks: ITask[];
};

@Injectable({
  providedIn: 'root',
})
export class KanbanService {

  constructor(
    // Kanban Task
    private readonly kanbanTasks: kanbanApi.KanbanTasksGQL,
    private readonly kanbanPriority: kanbanApi.KanbanPriorityGQL,
    private readonly kanbanByStatus: kanbanApi.KanbanByStatusGQL,
    private readonly kanbanUpdateTask: kanbanApi.UpdateTaskGQL,
    private readonly kanbanCreateTask: kanbanApi.CreateKanbanTaskGQL,
    private readonly kanbanStatus: kanbanApi.KanbanStatusGQL,
    private readonly kanbanType: kanbanApi.KanbanTypeGQL,
    private readonly kanbanDeleteTask: kanbanApi.DeleteTaskGQL,
    private readonly kanbanTaskByRefAndStatus: kanbanApi.KanbanTaskByRefAndStatusGQL,
    private readonly kanbanTaskByRef: kanbanApi.KanbanTaskByRefGQL,
    private readonly firstKanbanTask: kanbanApi.KanbanFirstTaskGQL,
    private readonly kanbanTaskByTaskId: kanbanApi.KanbanTaskByTaskIdGQL,
    private readonly updateTaskParentId: kanbanApi.UpdateTaskParentIdGQL,
    private readonly kanbanStatusByIdGQL: kanbanApi.KanbanStatusByIdGQL,
    private readonly getFirstClientGQL: kanbanApi.GetFirstClientGQL,
    private readonly userGQL: kanbanApi.UserGQL,

  ) { }


  // tslint:disable-next-line:variable-name

  public currentTask: ITask | undefined;

  public taskUpdated = new EventEmitter<ITask>();


  public setTask(task: ITask) {
    this.currentTask = task;
    this.taskUpdated.emit(this.currentTask);
  }

  /// Assignee

  public getFirstKanbanTaskRef() {
    return this.firstKanbanTask
      .watch()
      .valueChanges.pipe(map((result) => result.data.KanbanFirstTask));
  }

  public getFirstClient(): string {
    let client_id!: string;
    const rc = this.getFirstClientGQL.watch().valueChanges.pipe(map((result) => result.data.getFirstClient)).subscribe( (result: { client_id: any; }) => {
      client_id = result.client_id
    });
    return client_id;
  }

  public getUserList() {
    return this.userGQL.watch().valueChanges.pipe(map((result) => result.data.users));
  }

  public getTaskbyTaskId(taskId: string) {
    return this.kanbanTaskByTaskId
      .watch({ task_id: taskId })
      .valueChanges.pipe(map((result) => result.data.KanbanByTaskId));
  }

  public updateTaskParent(taskId: string, parentId: number) {
    return this.updateTaskParentId.mutate({
      task_id: taskId,
      parentId,
    });
  }

  public KanbanCreate(task: kanbanApi.KanbanInputs) {
    return this.kanbanCreateTask.mutate({
      taskInput: task,
    });
  }

  public getKanbanStatus() {
    return this.kanbanStatus
      .watch()
      .valueChanges.pipe(map((result) => result.data.KanbanStatus));
  }


   public getStatutes(): Observable<StatusType[]>
   {
      return this.kanbanStatus
      .watch()
      .valueChanges.pipe(map((result) => result.data.KanbanStatus));
    }

  //   return this._httpClient.get<Task[]>('api/apps/tasks/all').pipe(
  //     tap((response) => {
  //         this._tasks.next(response);
  //     })
  // );


  public getStatusById(statusId: string): any {
    const kanbanStatus$ = this.kanbanStatusByIdGQL
      .watch()
      .valueChanges.pipe(map((result) => result.data.KanbanStatusById));
  }

  public getKanbanType() {
    return this.kanbanType
      .watch()
      .valueChanges.pipe(map((result) => result.data.KanbanType));
  }

  public getKanbanTasks() {
    return this.kanbanTasks
      .watch()
      .valueChanges.pipe(map((result) => result.data.KanbanTask));
  }

  public getKanbanTaskByRef(partyRef: string): Observable<any> {
    return this.kanbanTaskByRef
      .watch({ party_ref: partyRef })
      .valueChanges.pipe(map((result) => result.data.KanbanTaskByRef));
  }

  public getKanbanTaskByRefAndStatus(partyRef: string, status: string) {
    return this.kanbanTaskByRefAndStatus
      .watch({ partyRef, status })
      .valueChanges.pipe(map((result) => result.data.KanbanTaskByRefAndStatus));
  }

  public getKanbanByStatus(status: string) {
    return this.kanbanByStatus
      .watch({ status })
      .valueChanges.pipe(map((result) => result.data.KanbanTaskByStatus));
  }

  public getKanbanPriorities() {
    return this.kanbanPriority
      .watch()
      .valueChanges.pipe(map((result) => result.data.KanbanPriority));
  }

  public kanbanUpdate(taskId: string, taskData: any) {
    return this.kanbanUpdateTask.mutate({
      task_id: taskId,
      taskInput: taskData,
    });
  }

  public kanbanDelete(task: string): any {
    return this.kanbanDeleteTask.mutate({
      task_id: task,
    });
  }

  dateFormatter(params: { value: any; }) {
    const dateAsString = params.value;
    // //  console.log (dateAsString.slice(0, 10));
    const dateParts = dateAsString.split('-');
    return `${dateParts[0]} - ${dateParts[1]} - ${dateParts[2].slice(0, 2)}`;
  }

  public getPriorityCols() {
    const cols = [
      { headerName: 'Priority', field: 'priority' },
      { headerName: 'Description', field: 'description' },
      { headerName: 'User', field: 'updateusr' },
      {
        headerName: 'Date Updated',
        field: 'updatedte',
        minWidth: 150,
        filter: 'agDateColumnFilter',
        valueFormatter: this.dateFormatter,
      },
    ];
    return cols;
  }

  public getTeamCols() {
    const cols = [
      { headerName: 'First Name', field: 'firstname' },
      { headerName: 'Last Name', field: 'lastname' },
      { headerName: 'Client Reference', field: 'client_ref' },
      { headerName: 'Email', field: 'email' },
      { headerName: 'Role', field: 'role' },
    ];
    return cols;
  }

  public getStatusCols() {
    const cols = [
      { headerName: 'Priority', field: 'status' },
      { headerName: 'Description', field: 'description' },
      { headerName: 'User', field: 'updateusr' },
      {
        headerName: 'Date Updated',
        field: 'updatedte',
        minWidth: 150,
        filter: 'agDateColumnFilter',
        valueFormatter: this.dateFormatter,
      },
    ];
    return cols;
  }

  public getTypeCols() {
    const cols = [
      { headerName: 'Priority', field: 'type' },
      { headerName: 'Description', field: 'description' },
      { headerName: 'User', field: 'updateusr' },
      {
        headerName: 'Date Updated',
        field: 'updatedte',
        minWidth: 150,
        filter: 'agDateColumnFilter',
        valueFormatter: this.dateFormatter,
      },
    ];
    return cols;
  }

  public getPartyCols() {
    const cols = [
      { headerName: 'Reference', field: 'party_ref' },
      { headerName: 'Type', field: 'party_type' },
      { headerName: 'Short Name', field: 'party_short_name' },
      { headerName: 'Long Name', field: 'party_long_name' },
      { headerName: 'Extra Long Name', field: 'party_extra_long_name' },
      { headerName: 'Date', field: 'version_date' },
      { headerName: 'User', field: 'version_user' },
    ];
    return cols;
  }

  public getTaskCols() {
    const cols = [
      { headerName: 'Task', field: 'task_id' },
      { headerName: 'Party Ref', field: 'party_ref' },
      { headerName: 'Title', field: 'title' },
      { headerName: 'Description', field: 'description' },
      { headerName: 'Status', field: 'status' },
      { headerName: 'Summary', field: 'summary' },
      { headerName: 'Type', field: 'type' },
      { headerName: 'Priority', field: 'priority' },
      { headerName: 'Tags', field: 'tags' },
      { headerName: 'Estimate', field: 'estimate' },
      { headerName: 'Assignee', field: 'assignee' },
      { headerName: 'Start Date', field: 'start_date' },
      { headerName: 'Due Date', field: 'due_date' },
      {
        headerName: 'RAG',
        field: 'color',
        cellStyle: (params: { value: string; }) => {
          if (params.value === '#238823') {
            return { color: params.value, backgroundColor: params.value };
          } else if (params.value === '#FFBF00') {
            return {
              color: params.value,
              backgroundColor: params.value,
            };
          } else if (params.value === '#D2222D') {
            return { color: params.value, backgroundColor: params.value };
          }
          else{
            return { color: params.value, backgroundColor: '#238823' };
          }
        },
      },
    ];
    return cols;
  }
}

