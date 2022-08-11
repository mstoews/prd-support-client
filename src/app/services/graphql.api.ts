import { gql } from 'apollo-angular';
import { Injectable } from '@angular/core';
import * as Apollo from 'apollo-angular';
export type Maybe<T> = T | null;
export type InputMaybe<T> = Maybe<T>;
export type Exact<T extends { [key: string]: unknown }> = { [K in keyof T]: T[K] };
export type MakeOptional<T, K extends keyof T> = Omit<T, K> & { [SubKey in K]?: Maybe<T[SubKey]> };
export type MakeMaybe<T, K extends keyof T> = Omit<T, K> & { [SubKey in K]: Maybe<T[SubKey]> };
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

export type Auth = {
  __typename?: 'Auth';
  /** JWT access token */
  accessToken: Scalars['String'];
  /** JWT refresh token */
  refreshToken: Scalars['String'];
  user: User;
};

export type ClientServiceInputs = {
  application: Scalars['String'];
  client_service_manager: Scalars['String'];
  clientid: Scalars['String'];
  clientname: Scalars['String'];
  contacts: Scalars['String'];
  csm_contacts: Scalars['String'];
  environment: Scalars['String'];
  last_updated: Scalars['String'];
  open_issues_id: Scalars['String'];
  rag: Scalars['String'];
  rag_trend: Scalars['String'];
  timeandmaterialgoalsid: Scalars['String'];
};

export type ClientServiceModel = {
  __typename?: 'ClientServiceModel';
  application: Scalars['String'];
  client_service_manager: Scalars['String'];
  clientid: Scalars['String'];
  clientname: Scalars['String'];
  contacts: Scalars['String'];
  csm_contacts: Scalars['String'];
  environment: Scalars['String'];
  last_updated: Scalars['String'];
  open_issues_id: Scalars['String'];
  rag: Scalars['String'];
  rag_trend: Scalars['String'];
  timeandmaterialgoalsid: Scalars['String'];
};

export type DashboardInputs = {
  clientid: Scalars['Int'];
  dashboardtype: Scalars['String'];
  maintitle?: InputMaybe<Scalars['String']>;
  maintitlecount?: InputMaybe<Scalars['String']>;
  maintitlecountthreedays?: InputMaybe<Scalars['String']>;
  maintitlecounttwodays?: InputMaybe<Scalars['String']>;
  maintitlecountyesterday?: InputMaybe<Scalars['String']>;
  subtitle?: InputMaybe<Scalars['String']>;
};

export type DashboardModel = {
  __typename?: 'DashboardModel';
  clientid: Scalars['Int'];
  dashboardtype: Scalars['String'];
  maintitle?: Maybe<Scalars['String']>;
  maintitlecount?: Maybe<Scalars['String']>;
  maintitlecountthreedays?: Maybe<Scalars['String']>;
  maintitlecounttwodays?: Maybe<Scalars['String']>;
  maintitlecountyesterday?: Maybe<Scalars['String']>;
  subtitle?: Maybe<Scalars['String']>;
};

export type KanbanInputs = {
  Id?: InputMaybe<Scalars['Int']>;
  assignee?: InputMaybe<Scalars['String']>;
  classname?: InputMaybe<Scalars['String']>;
  color?: InputMaybe<Scalars['String']>;
  dependencies?: InputMaybe<Scalars['String']>;
  description?: InputMaybe<Scalars['String']>;
  due_date?: InputMaybe<Scalars['Date']>;
  estimate?: InputMaybe<Scalars['Int']>;
  parentId?: InputMaybe<Scalars['Int']>;
  party_ref?: InputMaybe<Scalars['String']>;
  priority?: InputMaybe<Scalars['String']>;
  rankid?: InputMaybe<Scalars['Int']>;
  start_date?: InputMaybe<Scalars['Date']>;
  status?: InputMaybe<Scalars['String']>;
  summary?: InputMaybe<Scalars['String']>;
  tags?: InputMaybe<Scalars['String']>;
  task_id: Scalars['String'];
  title?: InputMaybe<Scalars['String']>;
  type?: InputMaybe<Scalars['String']>;
};

export type LoginInput = {
  password: Scalars['String'];
  userid: Scalars['String'];
};

export type Mutation = {
  __typename?: 'Mutation';
  createClientServices: ClientServiceModel;
  createDashboards: DashboardModel;
  createKanbanPriority: Kb_Priority;
  createKanbanStatus: Kb_Status;
  createKanbanType: Kb_Type;
  createSubTask: SubTasks;
  createTask: Kb_Task;
  deleteClientServices: ClientServiceModel;
  deleteDashboards: DashboardModel;
  deleteKanbanPriority: Kb_Priority;
  deleteKanbanStatus: Kb_Status;
  deleteKanbanSubTask: SubTasks;
  deleteKanbanType: Kb_Type;
  deleteTask: Kb_Task;
  login: Auth;
  refreshToken: Token;
  resetPassword: User;
  signup: User;
  updateClientServices: ClientServiceModel;
  updateDashboards: DashboardModel;
  updateKanbanPriority: Kb_Priority;
  updateKanbanStatus: Kb_Status;
  updateKanbanType: Kb_Type;
  updateTask: Kb_Task;
  updateTaskDependency: Kb_Task;
  updateTaskParentId: Kb_Task;
};


export type MutationCreateClientServicesArgs = {
  data: ClientServiceInputs;
};


export type MutationCreateDashboardsArgs = {
  data: DashboardInputs;
};


export type MutationCreateKanbanPriorityArgs = {
  kanbanData: TaskPriorityInputs;
};


export type MutationCreateKanbanStatusArgs = {
  data: TaskStatusInputs;
};


export type MutationCreateKanbanTypeArgs = {
  data: TaskStatusInputs;
};


export type MutationCreateSubTaskArgs = {
  data: SubTaskInputs;
};


export type MutationCreateTaskArgs = {
  data: KanbanInputs;
};


export type MutationDeleteClientServicesArgs = {
  clientid: Scalars['Int'];
};


export type MutationDeleteDashboardsArgs = {
  clientid: Scalars['Int'];
  dashboardtype: Scalars['String'];
};


export type MutationDeleteKanbanPriorityArgs = {
  priority: Scalars['String'];
};


export type MutationDeleteKanbanStatusArgs = {
  status: Scalars['String'];
};


export type MutationDeleteKanbanSubTaskArgs = {
  subid: Scalars['String'];
  task_id: Scalars['String'];
};


export type MutationDeleteKanbanTypeArgs = {
  type: Scalars['String'];
};


export type MutationDeleteTaskArgs = {
  task_id: Scalars['String'];
};


export type MutationLoginArgs = {
  data: LoginInput;
};


export type MutationRefreshTokenArgs = {
  refreshtoken: Scalars['String'];
};


export type MutationResetPasswordArgs = {
  data: LoginInput;
};


export type MutationSignupArgs = {
  data: SignupInput;
};


export type MutationUpdateClientServicesArgs = {
  clientid: Scalars['Int'];
  newData: ClientServiceInputs;
};


export type MutationUpdateDashboardsArgs = {
  clientid: Scalars['Int'];
  dashboard: DashboardInputs;
  dashboardtype: Scalars['String'];
};


export type MutationUpdateKanbanPriorityArgs = {
  kanbanData: TaskPriorityInputs;
  priority: Scalars['String'];
};


export type MutationUpdateKanbanStatusArgs = {
  id: Scalars['String'];
  newData: TaskStatusInputs;
};


export type MutationUpdateKanbanTypeArgs = {
  newData: TaskStatusInputs;
  type: Scalars['String'];
};


export type MutationUpdateTaskArgs = {
  newData: KanbanInputs;
  task_id: Scalars['String'];
};


export type MutationUpdateTaskDependencyArgs = {
  dependency: Scalars['String'];
  task_id: Scalars['String'];
};


export type MutationUpdateTaskParentIdArgs = {
  parentId: Scalars['Int'];
  task_id: Scalars['String'];
};

export type PartyAddress = {
  __typename?: 'PartyAddress';
  addr_line1: Scalars['String'];
  addr_line2: Scalars['String'];
  addr_line3: Scalars['String'];
  addr_line4: Scalars['String'];
  addr_line5: Scalars['String'];
  addr_line6: Scalars['String'];
  addr_type: Scalars['String'];
  contact_name: Scalars['String'];
  contact_title: Scalars['String'];
  email: Scalars['String'];
  fax_no: Scalars['String'];
  int_dial_code: Scalars['String'];
  party_ref: Scalars['String'];
  phone_no: Scalars['String'];
  post_code: Scalars['String'];
  version_date: Scalars['Date'];
  version_no: Scalars['Int'];
  version_user: Scalars['String'];
};

export type PartyAssoc = {
  __typename?: 'PartyAssoc';
  assoc_party_ref: Scalars['String'];
  assoc_type: Scalars['String'];
  description: Scalars['String'];
  party_ref: Scalars['String'];
  user_def: Scalars['String'];
  version_date: Scalars['Date'];
  version_no: Scalars['Int'];
  version_user: Scalars['String'];
};

export type PartyClassification = {
  __typename?: 'PartyClassification';
  class_code: Scalars['String'];
  class_type: Scalars['String'];
  description: Scalars['String'];
  party_ref: Scalars['String'];
  user_def: Scalars['String'];
  version_date: Scalars['Date'];
  version_no: Scalars['Int'];
  version_user: Scalars['String'];
};

export type PartyDate = {
  __typename?: 'PartyDate';
  date: Scalars['String'];
  date_type: Scalars['String'];
  party_ref: Scalars['String'];
  time: Scalars['String'];
  version_date: Scalars['Date'];
  version_no: Scalars['Int'];
  version_user: Scalars['String'];
};

export type PartyExtRef = {
  __typename?: 'PartyExtRef';
  description: Scalars['String'];
  party_ext_ref: Scalars['String'];
  party_ext_ref_type: Scalars['String'];
  party_ref: Scalars['String'];
  user_def: Scalars['String'];
  version_date: Scalars['Date'];
  version_no: Scalars['Int'];
  version_user: Scalars['String'];
};

export type PartyFlag = {
  __typename?: 'PartyFlag';
  description: Scalars['String'];
  flag_code: Scalars['String'];
  flag_type: Scalars['Int'];
  party_ref: Scalars['String'];
  user_def: Scalars['String'];
  version_date: Scalars['Date'];
  version_no: Scalars['Int'];
  version_user: Scalars['String'];
};

export type PartyInstr = {
  __typename?: 'PartyInstr';
  description: Scalars['String'];
  instr_ref: Scalars['String'];
  instr_ref_type: Scalars['String'];
  instr_type: Scalars['String'];
  party_ref: Scalars['String'];
  user_def: Scalars['String'];
  version_date: Scalars['Date'];
  version_no: Scalars['Int'];
  version_user: Scalars['String'];
};

export type PartyNarrative = {
  __typename?: 'PartyNarrative';
  description: Scalars['String'];
  narr_type: Scalars['String'];
  narrative: Scalars['String'];
  party_ref: Scalars['String'];
  user_def: Scalars['String'];
  version_date: Scalars['Date'];
  version_no: Scalars['Int'];
  version_user: Scalars['String'];
};

export type PartySsi = {
  __typename?: 'PartySSI';
  account_name: Scalars['String'];
  account_no: Scalars['String'];
  active_ind: Scalars['String'];
  ccy: Scalars['String'];
  comms_service: Scalars['String'];
  dacc_ref: Scalars['String'];
  depo_ref: Scalars['String'];
  depot_alias: Scalars['String'];
  depot_descr: Scalars['String'];
  depot_type: Scalars['String'];
  description: Scalars['String'];
  party_ref: Scalars['String'];
  user_def: Scalars['String'];
  version_date: Scalars['Date'];
  version_no: Scalars['Int'];
  version_user: Scalars['String'];
};

export type PartySwift = {
  __typename?: 'PartySwift';
  branch_code: Scalars['String'];
  channel: Scalars['String'];
  company_name: Scalars['String'];
  host: Scalars['String'];
  incoming_queue: Scalars['String'];
  logical_term_id: Array<Scalars['String']>;
  outgoing_queue: Scalars['String'];
  party_ref: Scalars['String'];
  port_number: Scalars['Int'];
  queue_mgr: Scalars['String'];
  version_date: Scalars['Date'];
  version_no: Scalars['Int'];
  version_user: Scalars['String'];
};

export type Query = {
  __typename?: 'Query';
  ClientService: Array<ClientServiceModel>;
  ClientServicesById: Array<ClientServiceModel>;
  Dashboards: Array<DashboardModel>;
  DashboardsById: DashboardModel;
  GIB: Scalars['String'];
  KanbanByTaskId: Array<Kb_Task>;
  KanbanFirstTask: Kb_Task;
  KanbanPriority: Array<Kb_Priority>;
  KanbanPriorityById: Array<Kb_Priority>;
  KanbanStatus: Array<Kb_Status>;
  KanbanStatusById: Array<Kb_Status>;
  KanbanTask: Array<Kb_Task>;
  KanbanTaskByRef: Array<Kb_Task>;
  KanbanTaskByRefAndStatus: Array<Kb_Task>;
  KanbanTaskByStatus: Array<Kb_Task>;
  KanbanTaskByTaskId: Kb_Task;
  KanbanType: Array<Kb_Type>;
  KanbanTypeById: Array<Kb_Type>;
  KanbanUniqueByTaskId: Kb_Task;
  SubTaskById: Array<SubTasks>;
  SubTasks: Array<SubTasks>;
  SubTasksByTaskId: Array<SubTasks>;
  me: User;
  users: Array<User>;
};


export type QueryClientServicesByIdArgs = {
  clientid: Scalars['Int'];
};


export type QueryDashboardsByIdArgs = {
  clientid: Scalars['Int'];
  dashboardtype: Scalars['String'];
};


export type QueryKanbanByTaskIdArgs = {
  task_id: Scalars['String'];
};


export type QueryKanbanFirstTaskArgs = {
  party_ref: Scalars['String'];
};


export type QueryKanbanPriorityByIdArgs = {
  priority: Scalars['String'];
};


export type QueryKanbanStatusByIdArgs = {
  status: Scalars['String'];
};


export type QueryKanbanTaskByRefArgs = {
  partyRef: Scalars['String'];
};


export type QueryKanbanTaskByRefAndStatusArgs = {
  partyRef: Scalars['String'];
  status: Scalars['String'];
};


export type QueryKanbanTaskByStatusArgs = {
  status: Scalars['String'];
};


export type QueryKanbanTaskByTaskIdArgs = {
  task_id: Scalars['String'];
};


export type QueryKanbanTypeByIdArgs = {
  type: Scalars['String'];
};


export type QueryKanbanUniqueByTaskIdArgs = {
  task_id: Scalars['String'];
};


export type QuerySubTaskByIdArgs = {
  subid: Scalars['String'];
  task_id: Scalars['String'];
};


export type QuerySubTasksByTaskIdArgs = {
  task_id: Scalars['String'];
};

export type SignupInput = {
  client_ref?: InputMaybe<Scalars['String']>;
  createdAt: Scalars['String'];
  email: Scalars['String'];
  firstname?: InputMaybe<Scalars['String']>;
  lastname?: InputMaybe<Scalars['String']>;
  password: Scalars['String'];
  role: Scalars['String'];
  updatedAt: Scalars['String'];
  userid: Scalars['String'];
};

export type SubTaskInputs = {
  desc?: InputMaybe<Scalars['String']>;
  estimate?: InputMaybe<Scalars['Int']>;
  status?: InputMaybe<Scalars['String']>;
  subid: Scalars['String'];
  summary?: InputMaybe<Scalars['String']>;
  task_id: Scalars['String'];
  type?: InputMaybe<Scalars['String']>;
};

export type SubTasks = {
  __typename?: 'SubTasks';
  desc?: Maybe<Scalars['String']>;
  estimate: Scalars['Int'];
  status?: Maybe<Scalars['String']>;
  subid: Scalars['String'];
  summary?: Maybe<Scalars['String']>;
  task_id: Scalars['String'];
  type?: Maybe<Scalars['String']>;
};

export type TaskPriorityInputs = {
  description: Scalars['String'];
  priority: Scalars['String'];
  updatedte: Scalars['Date'];
  updateusr: Scalars['String'];
};

export type TaskStatusInputs = {
  description: Scalars['String'];
  status: Scalars['String'];
  updatedte: Scalars['Date'];
  updateusr: Scalars['String'];
};

export type Token = {
  __typename?: 'Token';
  /** JWT access token */
  accessToken: Scalars['String'];
  /** JWT refresh token */
  refreshToken: Scalars['String'];
};

export type User = {
  __typename?: 'User';
  createdAt: Scalars['Date'];
  email: Scalars['String'];
  firstname?: Maybe<Scalars['String']>;
  lastname?: Maybe<Scalars['String']>;
  role: Scalars['String'];
  updatedAt: Scalars['Date'];
  userid: Scalars['ID'];
};

export type Kb_Priority = {
  __typename?: 'kb_priority';
  description: Scalars['String'];
  priority: Scalars['String'];
  updatedte: Scalars['Date'];
  updateusr: Scalars['String'];
};

export type Kb_Status = {
  __typename?: 'kb_status';
  description: Scalars['String'];
  status: Scalars['String'];
  updatedte: Scalars['Date'];
  updateusr: Scalars['String'];
};

export type Kb_Task = {
  __typename?: 'kb_task';
  Id?: Maybe<Scalars['Int']>;
  Priority: Array<Kb_Priority>;
  Status: Array<Kb_Status>;
  Type: Array<Kb_Type>;
  assignee?: Maybe<Scalars['String']>;
  classname?: Maybe<Scalars['String']>;
  color?: Maybe<Scalars['String']>;
  dependencies?: Maybe<Scalars['String']>;
  description?: Maybe<Scalars['String']>;
  due_date?: Maybe<Scalars['Date']>;
  estimate?: Maybe<Scalars['Int']>;
  parentId?: Maybe<Scalars['Int']>;
  party_ref?: Maybe<Scalars['String']>;
  priority?: Maybe<Scalars['String']>;
  rankid?: Maybe<Scalars['Int']>;
  start_date?: Maybe<Scalars['Date']>;
  status?: Maybe<Scalars['String']>;
  subtasks: Array<SubTasks>;
  summary?: Maybe<Scalars['String']>;
  tags?: Maybe<Scalars['String']>;
  task_id: Scalars['String'];
  title?: Maybe<Scalars['String']>;
  type?: Maybe<Scalars['String']>;
};

export type Kb_Type = {
  __typename?: 'kb_type';
  description: Scalars['String'];
  type: Scalars['String'];
  updatedte: Scalars['Date'];
  updateusr: Scalars['String'];
};

export type KanbanTaskFragment = { __typename?: 'kb_task', party_ref?: string | null, parentId?: number | null, Id?: number | null, assignee?: string | null, due_date?: any | null, start_date?: any | null, description?: string | null, dependencies?: string | null, rankid?: number | null, task_id: string, title?: string | null, estimate?: number | null, status?: string | null, summary?: string | null, classname?: string | null, priority?: string | null, type?: string | null, color?: string | null, tags?: string | null };

export type KanbanTasksQueryVariables = Exact<{ [key: string]: never; }>;


export type KanbanTasksQuery = { __typename?: 'Query', KanbanTask: Array<{ __typename?: 'kb_task', party_ref?: string | null, parentId?: number | null, Id?: number | null, assignee?: string | null, due_date?: any | null, start_date?: any | null, description?: string | null, dependencies?: string | null, rankid?: number | null, task_id: string, title?: string | null, estimate?: number | null, status?: string | null, summary?: string | null, classname?: string | null, priority?: string | null, type?: string | null, color?: string | null, tags?: string | null }> };

export type KanbanPriorityQueryVariables = Exact<{ [key: string]: never; }>;


export type KanbanPriorityQuery = { __typename?: 'Query', KanbanPriority: Array<{ __typename?: 'kb_priority', priority: string, description: string, updatedte: any, updateusr: string }> };

export type KanbanTypeQueryVariables = Exact<{ [key: string]: never; }>;


export type KanbanTypeQuery = { __typename?: 'Query', KanbanType: Array<{ __typename?: 'kb_type', type: string, description: string, updatedte: any, updateusr: string }> };

export type KanbanStatusQueryVariables = Exact<{ [key: string]: never; }>;


export type KanbanStatusQuery = { __typename?: 'Query', KanbanStatus: Array<{ __typename?: 'kb_status', status: string, description: string, updatedte: any, updateusr: string }> };

export type KanbanStatusByIdQueryVariables = Exact<{
  id: Scalars['String'];
}>;


export type KanbanStatusByIdQuery = { __typename?: 'Query', KanbanStatusById: Array<{ __typename?: 'kb_status', status: string, description: string, updatedte: any, updateusr: string }> };

export type KanbanTaskByTaskIdQueryVariables = Exact<{
  task_id: Scalars['String'];
}>;


export type KanbanTaskByTaskIdQuery = { __typename?: 'Query', KanbanByTaskId: Array<{ __typename?: 'kb_task', party_ref?: string | null, parentId?: number | null, Id?: number | null, assignee?: string | null, due_date?: any | null, start_date?: any | null, description?: string | null, dependencies?: string | null, rankid?: number | null, task_id: string, title?: string | null, estimate?: number | null, status?: string | null, summary?: string | null, classname?: string | null, priority?: string | null, type?: string | null, color?: string | null, tags?: string | null }> };

export type KanbanTaskByStatusQueryVariables = Exact<{
  status: Scalars['String'];
}>;


export type KanbanTaskByStatusQuery = { __typename?: 'Query', KanbanTaskByStatus: Array<{ __typename?: 'kb_task', party_ref?: string | null, parentId?: number | null, Id?: number | null, assignee?: string | null, due_date?: any | null, start_date?: any | null, description?: string | null, dependencies?: string | null, rankid?: number | null, task_id: string, title?: string | null, estimate?: number | null, status?: string | null, summary?: string | null, classname?: string | null, priority?: string | null, type?: string | null, color?: string | null, tags?: string | null }> };

export type KanbanByTaskIdQueryVariables = Exact<{
  task_id: Scalars['String'];
}>;


export type KanbanByTaskIdQuery = { __typename?: 'Query', KanbanByTaskId: Array<{ __typename?: 'kb_task', party_ref?: string | null, parentId?: number | null, Id?: number | null, assignee?: string | null, due_date?: any | null, start_date?: any | null, description?: string | null, dependencies?: string | null, rankid?: number | null, task_id: string, title?: string | null, estimate?: number | null, status?: string | null, summary?: string | null, classname?: string | null, priority?: string | null, type?: string | null, color?: string | null, tags?: string | null }> };

export type KanbanTaskByRefAndStatusQueryVariables = Exact<{
  partyRef: Scalars['String'];
  status: Scalars['String'];
}>;


export type KanbanTaskByRefAndStatusQuery = { __typename?: 'Query', KanbanTaskByRefAndStatus: Array<{ __typename?: 'kb_task', party_ref?: string | null, parentId?: number | null, Id?: number | null, assignee?: string | null, due_date?: any | null, start_date?: any | null, description?: string | null, dependencies?: string | null, rankid?: number | null, task_id: string, title?: string | null, estimate?: number | null, status?: string | null, summary?: string | null, classname?: string | null, priority?: string | null, type?: string | null, color?: string | null, tags?: string | null }> };

export type KanbanTaskByRefQueryVariables = Exact<{
  party_ref: Scalars['String'];
}>;


export type KanbanTaskByRefQuery = { __typename?: 'Query', KanbanTaskByRef: Array<{ __typename?: 'kb_task', party_ref?: string | null, parentId?: number | null, Id?: number | null, assignee?: string | null, due_date?: any | null, start_date?: any | null, description?: string | null, dependencies?: string | null, rankid?: number | null, task_id: string, title?: string | null, estimate?: number | null, status?: string | null, summary?: string | null, classname?: string | null, priority?: string | null, type?: string | null, color?: string | null, tags?: string | null }> };

export type KanbanByStatusQueryVariables = Exact<{
  status: Scalars['String'];
}>;


export type KanbanByStatusQuery = { __typename?: 'Query', KanbanTaskByStatus: Array<{ __typename?: 'kb_task', party_ref?: string | null, parentId?: number | null, Id?: number | null, assignee?: string | null, due_date?: any | null, start_date?: any | null, description?: string | null, dependencies?: string | null, rankid?: number | null, task_id: string, title?: string | null, estimate?: number | null, status?: string | null, summary?: string | null, classname?: string | null, priority?: string | null, type?: string | null, color?: string | null, tags?: string | null }> };

export type CreateKanbanTaskMutationVariables = Exact<{
  taskInput: KanbanInputs;
}>;


export type CreateKanbanTaskMutation = { __typename?: 'Mutation', createTask: { __typename?: 'kb_task', party_ref?: string | null, parentId?: number | null, Id?: number | null, assignee?: string | null, due_date?: any | null, start_date?: any | null, description?: string | null, dependencies?: string | null, rankid?: number | null, task_id: string, title?: string | null, estimate?: number | null, status?: string | null, summary?: string | null, classname?: string | null, priority?: string | null, type?: string | null, color?: string | null, tags?: string | null } };

export type UpdateTaskMutationVariables = Exact<{
  task_id: Scalars['String'];
  taskInput: KanbanInputs;
}>;


export type UpdateTaskMutation = { __typename?: 'Mutation', updateTask: { __typename?: 'kb_task', party_ref?: string | null, parentId?: number | null, Id?: number | null, assignee?: string | null, due_date?: any | null, start_date?: any | null, description?: string | null, dependencies?: string | null, rankid?: number | null, task_id: string, title?: string | null, estimate?: number | null, status?: string | null, summary?: string | null, classname?: string | null, priority?: string | null, type?: string | null, color?: string | null, tags?: string | null } };

export type DeleteTaskMutationVariables = Exact<{
  task_id: Scalars['String'];
}>;


export type DeleteTaskMutation = { __typename?: 'Mutation', deleteTask: { __typename?: 'kb_task', party_ref?: string | null, parentId?: number | null, Id?: number | null, assignee?: string | null, due_date?: any | null, start_date?: any | null, description?: string | null, dependencies?: string | null, rankid?: number | null, task_id: string, title?: string | null, estimate?: number | null, status?: string | null, summary?: string | null, classname?: string | null, priority?: string | null, type?: string | null, color?: string | null, tags?: string | null } };

export type KanbanFirstTaskQueryVariables = Exact<{
  party_ref: Scalars['String'];
}>;


export type KanbanFirstTaskQuery = { __typename?: 'Query', KanbanFirstTask: { __typename?: 'kb_task', party_ref?: string | null, parentId?: number | null, Id?: number | null, assignee?: string | null, due_date?: any | null, start_date?: any | null, description?: string | null, dependencies?: string | null, rankid?: number | null, task_id: string, title?: string | null, estimate?: number | null, status?: string | null, summary?: string | null, classname?: string | null, priority?: string | null, type?: string | null, color?: string | null, tags?: string | null } };

export type UpdateTaskParentIdMutationVariables = Exact<{
  task_id: Scalars['String'];
  parentId: Scalars['Int'];
}>;


export type UpdateTaskParentIdMutation = { __typename?: 'Mutation', updateTaskParentId: { __typename?: 'kb_task', task_id: string, parentId?: number | null } };

export type UserQueryVariables = Exact<{ [key: string]: never; }>;


export type UserQuery = { __typename?: 'Query', users: Array<{ __typename?: 'User', userid: string, firstname?: string | null, lastname?: string | null, createdAt: any, updatedAt: any, email: string, role: string }> };

export const KanbanTaskFragmentDoc = gql`
    fragment KanbanTask on kb_task {
  party_ref
  parentId
  Id
  assignee
  due_date
  start_date
  description
  dependencies
  rankid
  task_id
  title
  assignee
  estimate
  status
  summary
  classname
  priority
  type
  color
  tags
}
    `;
export const KanbanTasksDocument = gql`
    query KanbanTasks {
  KanbanTask {
    ...KanbanTask
  }
}
    ${KanbanTaskFragmentDoc}`;

  @Injectable({
    providedIn: 'root'
  })
  export class KanbanTasksGQL extends Apollo.Query<KanbanTasksQuery, KanbanTasksQueryVariables> {
    document = KanbanTasksDocument;
    
    constructor(apollo: Apollo.Apollo) {
      super(apollo);
    }
  }
export const KanbanPriorityDocument = gql`
    query KanbanPriority {
  KanbanPriority {
    priority
    description
    updatedte
    updateusr
  }
}
    `;

  @Injectable({
    providedIn: 'root'
  })
  export class KanbanPriorityGQL extends Apollo.Query<KanbanPriorityQuery, KanbanPriorityQueryVariables> {
    document = KanbanPriorityDocument;
    
    constructor(apollo: Apollo.Apollo) {
      super(apollo);
    }
  }
export const KanbanTypeDocument = gql`
    query KanbanType {
  KanbanType {
    type
    description
    updatedte
    updateusr
  }
}
    `;

  @Injectable({
    providedIn: 'root'
  })
  export class KanbanTypeGQL extends Apollo.Query<KanbanTypeQuery, KanbanTypeQueryVariables> {
    document = KanbanTypeDocument;
    
    constructor(apollo: Apollo.Apollo) {
      super(apollo);
    }
  }
export const KanbanStatusDocument = gql`
    query KanbanStatus {
  KanbanStatus {
    status
    description
    updatedte
    updateusr
  }
}
    `;

  @Injectable({
    providedIn: 'root'
  })
  export class KanbanStatusGQL extends Apollo.Query<KanbanStatusQuery, KanbanStatusQueryVariables> {
    document = KanbanStatusDocument;
    
    constructor(apollo: Apollo.Apollo) {
      super(apollo);
    }
  }
export const KanbanStatusByIdDocument = gql`
    query KanbanStatusById($id: String!) {
  KanbanStatusById(status: $id) {
    status
    description
    updatedte
    updateusr
  }
}
    `;

  @Injectable({
    providedIn: 'root'
  })
  export class KanbanStatusByIdGQL extends Apollo.Query<KanbanStatusByIdQuery, KanbanStatusByIdQueryVariables> {
    document = KanbanStatusByIdDocument;
    
    constructor(apollo: Apollo.Apollo) {
      super(apollo);
    }
  }
export const KanbanTaskByTaskIdDocument = gql`
    query KanbanTaskByTaskId($task_id: String!) {
  KanbanByTaskId(task_id: $task_id) {
    ...KanbanTask
  }
}
    ${KanbanTaskFragmentDoc}`;

  @Injectable({
    providedIn: 'root'
  })
  export class KanbanTaskByTaskIdGQL extends Apollo.Query<KanbanTaskByTaskIdQuery, KanbanTaskByTaskIdQueryVariables> {
    document = KanbanTaskByTaskIdDocument;
    
    constructor(apollo: Apollo.Apollo) {
      super(apollo);
    }
  }
export const KanbanTaskByStatusDocument = gql`
    query KanbanTaskByStatus($status: String!) {
  KanbanTaskByStatus(status: $status) {
    ...KanbanTask
  }
}
    ${KanbanTaskFragmentDoc}`;

  @Injectable({
    providedIn: 'root'
  })
  export class KanbanTaskByStatusGQL extends Apollo.Query<KanbanTaskByStatusQuery, KanbanTaskByStatusQueryVariables> {
    document = KanbanTaskByStatusDocument;
    
    constructor(apollo: Apollo.Apollo) {
      super(apollo);
    }
  }
export const KanbanByTaskIdDocument = gql`
    query KanbanByTaskId($task_id: String!) {
  KanbanByTaskId(task_id: $task_id) {
    ...KanbanTask
  }
}
    ${KanbanTaskFragmentDoc}`;

  @Injectable({
    providedIn: 'root'
  })
  export class KanbanByTaskIdGQL extends Apollo.Query<KanbanByTaskIdQuery, KanbanByTaskIdQueryVariables> {
    document = KanbanByTaskIdDocument;
    
    constructor(apollo: Apollo.Apollo) {
      super(apollo);
    }
  }
export const KanbanTaskByRefAndStatusDocument = gql`
    query KanbanTaskByRefAndStatus($partyRef: String!, $status: String!) {
  KanbanTaskByRefAndStatus(partyRef: $partyRef, status: $status) {
    ...KanbanTask
  }
}
    ${KanbanTaskFragmentDoc}`;

  @Injectable({
    providedIn: 'root'
  })
  export class KanbanTaskByRefAndStatusGQL extends Apollo.Query<KanbanTaskByRefAndStatusQuery, KanbanTaskByRefAndStatusQueryVariables> {
    document = KanbanTaskByRefAndStatusDocument;
    
    constructor(apollo: Apollo.Apollo) {
      super(apollo);
    }
  }
export const KanbanTaskByRefDocument = gql`
    query KanbanTaskByRef($party_ref: String!) {
  KanbanTaskByRef(partyRef: $party_ref) {
    ...KanbanTask
  }
}
    ${KanbanTaskFragmentDoc}`;

  @Injectable({
    providedIn: 'root'
  })
  export class KanbanTaskByRefGQL extends Apollo.Query<KanbanTaskByRefQuery, KanbanTaskByRefQueryVariables> {
    document = KanbanTaskByRefDocument;
    
    constructor(apollo: Apollo.Apollo) {
      super(apollo);
    }
  }
export const KanbanByStatusDocument = gql`
    query KanbanByStatus($status: String!) {
  KanbanTaskByStatus(status: $status) {
    ...KanbanTask
  }
}
    ${KanbanTaskFragmentDoc}`;

  @Injectable({
    providedIn: 'root'
  })
  export class KanbanByStatusGQL extends Apollo.Query<KanbanByStatusQuery, KanbanByStatusQueryVariables> {
    document = KanbanByStatusDocument;
    
    constructor(apollo: Apollo.Apollo) {
      super(apollo);
    }
  }
export const CreateKanbanTaskDocument = gql`
    mutation createKanbanTask($taskInput: KanbanInputs!) {
  createTask(data: $taskInput) {
    ...KanbanTask
  }
}
    ${KanbanTaskFragmentDoc}`;

  @Injectable({
    providedIn: 'root'
  })
  export class CreateKanbanTaskGQL extends Apollo.Mutation<CreateKanbanTaskMutation, CreateKanbanTaskMutationVariables> {
    document = CreateKanbanTaskDocument;
    
    constructor(apollo: Apollo.Apollo) {
      super(apollo);
    }
  }
export const UpdateTaskDocument = gql`
    mutation UpdateTask($task_id: String!, $taskInput: KanbanInputs!) {
  updateTask(task_id: $task_id, newData: $taskInput) {
    ...KanbanTask
  }
}
    ${KanbanTaskFragmentDoc}`;

  @Injectable({
    providedIn: 'root'
  })
  export class UpdateTaskGQL extends Apollo.Mutation<UpdateTaskMutation, UpdateTaskMutationVariables> {
    document = UpdateTaskDocument;
    
    constructor(apollo: Apollo.Apollo) {
      super(apollo);
    }
  }
export const DeleteTaskDocument = gql`
    mutation deleteTask($task_id: String!) {
  deleteTask(task_id: $task_id) {
    ...KanbanTask
  }
}
    ${KanbanTaskFragmentDoc}`;

  @Injectable({
    providedIn: 'root'
  })
  export class DeleteTaskGQL extends Apollo.Mutation<DeleteTaskMutation, DeleteTaskMutationVariables> {
    document = DeleteTaskDocument;
    
    constructor(apollo: Apollo.Apollo) {
      super(apollo);
    }
  }
export const KanbanFirstTaskDocument = gql`
    query KanbanFirstTask($party_ref: String!) {
  KanbanFirstTask(party_ref: $party_ref) {
    ...KanbanTask
  }
}
    ${KanbanTaskFragmentDoc}`;

  @Injectable({
    providedIn: 'root'
  })
  export class KanbanFirstTaskGQL extends Apollo.Query<KanbanFirstTaskQuery, KanbanFirstTaskQueryVariables> {
    document = KanbanFirstTaskDocument;
    
    constructor(apollo: Apollo.Apollo) {
      super(apollo);
    }
  }
export const UpdateTaskParentIdDocument = gql`
    mutation updateTaskParentId($task_id: String!, $parentId: Int!) {
  updateTaskParentId(task_id: $task_id, parentId: $parentId) {
    task_id
    parentId
  }
}
    `;

  @Injectable({
    providedIn: 'root'
  })
  export class UpdateTaskParentIdGQL extends Apollo.Mutation<UpdateTaskParentIdMutation, UpdateTaskParentIdMutationVariables> {
    document = UpdateTaskParentIdDocument;
    
    constructor(apollo: Apollo.Apollo) {
      super(apollo);
    }
  }
export const UserDocument = gql`
    query User {
  users {
    userid
    firstname
    lastname
    createdAt
    updatedAt
    email
    role
  }
}
    `;

  @Injectable({
    providedIn: 'root'
  })
  export class UserGQL extends Apollo.Query<UserQuery, UserQueryVariables> {
    document = UserDocument;
    
    constructor(apollo: Apollo.Apollo) {
      super(apollo);
    }
  }