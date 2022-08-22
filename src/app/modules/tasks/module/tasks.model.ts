export type Maybe<T> = T | null;
export type Exact<T extends { [key: string]: unknown }> = {
  [K in keyof T]: T[K];
};
/** All built-in and custom scalars, mapped to their actual values */
export type Scalars = {
  ID: string;
  String: string;
  Boolean: boolean;
  Int: number;
  Float: number;
  /** Date custom scalar type */
  Date: any;
};

export interface ITask {
   task_id: string;
   client_id: string;
   title: string;
   status: string;
   summary: string;
   type: string;
   priority: string;
   tags: string;
   estimate: number;
   assignee: string;
   rankid: number;
   color: string;
   classname: string;
   description: string;
   due_date: Date;
   start_date: Date;
   dependencies: string;
   parentId: number;
   Id: number;

}

export interface IBoard {
  boardId: string;
  boards?: ITask[];
}

export interface IValue {
  value: string;
  viewValue: string;
}

export interface IAssignee {
  team_member: string;
  first_name: string;
  last_name: string;
  location: string;
  title: string;
}

interface IType {
  type: string;
  description: string;
  updatedte: Date;
  updateusr: string;
}

export interface IPriority {
  priority: string;
  description: string;
  updatedte: Date;
  updateusr: string;
}

export class KanbanTask {
  constructor(
    task_id: string,
    party_ref: string,
    title: string,
    status: string,
    summary: string,
    type: string,
    priority: string,
    tags: string,
    estimate: number,
    assignee: string,
    rankid: number,
    color: string,
    classname: string,
    description: string,
    due_date: Date,
    start_date: Date,
    dependencies: string
  ){}
}

export interface IKanbanTask {
  task_id: string;
  party_ref: string;
  title: string;
  status: string;
  summary: string;
  type: IType[];
  priority: IPriority[];
  tags: string;
  estimate: number;
  assignee: string;
  rankid: number;
  color: IValue[];
  classname: string;
  description: string;
  due_date: Date;
  start_date: Date;
  dependencies: string;
}

export interface IMenuState {
  partyRef: string;
  partyType?: string;
  clientRef?: string;
}

export interface IAssignee {
  userid: string;
  client_ref: string;
  email: string;
  firstname: string;
  lastname: string;
  role: string
}

