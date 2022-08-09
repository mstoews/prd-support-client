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

export type BojEnvironment = {
  __typename?: 'BojEnvironment';
  active: Scalars['String'];
  client_ref: Scalars['String'];
  description?: Maybe<Scalars['String']>;
  environment: Scalars['String'];
  sst_bojapi_url: Scalars['String'];
};

export type ClassAssoc = {
  __typename?: 'ClassAssoc';
  applied: Scalars['Boolean'];
  class_1: Scalars['Int'];
  class_2: Scalars['Int'];
  class_assoc_code: Scalars['String'];
  client_ref: Scalars['String'];
  code_1: Scalars['String'];
  code_2: Array<Scalars['String']>;
  code_type: Scalars['String'];
  party_ref: Scalars['String'];
  version_date: Scalars['Date'];
  version_no: Scalars['Int'];
  version_user: Scalars['String'];
};

export type ClassAssocInput = {
  applied: Scalars['Boolean'];
  class_1: Scalars['Int'];
  class_2: Scalars['Int'];
  class_assoc_code: Scalars['String'];
  client_ref: Scalars['String'];
  code_1: Scalars['String'];
  code_2: Array<Scalars['String']>;
  code_type: Scalars['String'];
  party_ref: Scalars['String'];
  version_date: Scalars['Date'];
  version_no: Scalars['Int'];
  version_user: Scalars['String'];
};

export type Clients = {
  __typename?: 'Clients';
  client_ref: Scalars['String'];
};

export type ConfigDef = {
  __typename?: 'ConfigDef';
  client_ref: Scalars['String'];
  component: Scalars['String'];
  component_data: Array<Scalars['String']>;
  component_type: Scalars['String'];
  config_ref: Scalars['String'];
  config_type: Scalars['String'];
  database_code: Scalars['String'];
  version_date: Scalars['Date'];
  version_no: Scalars['Int'];
  version_user: Scalars['String'];
};

export type ConfigDefInput = {
  client_ref: Scalars['String'];
  component: Scalars['String'];
  component_data: Array<Scalars['String']>;
  component_type: Scalars['String'];
  config_ref: Scalars['String'];
  config_type: Scalars['String'];
  database_code: Scalars['String'];
  version_date: Scalars['Date'];
  version_no: Scalars['Int'];
  version_user: Scalars['String'];
};

export type Databases = {
  __typename?: 'Databases';
  client_ref: Scalars['String'];
  component_type: Scalars['String'];
  database_code: Scalars['String'];
  database_type: Scalars['String'];
  descr: Scalars['String'];
  holiday_id_p2k: Scalars['String'];
  sql_db_code: Scalars['String'];
  version_date: Scalars['Date'];
  version_no: Scalars['Int'];
  version_user: Scalars['String'];
};

export type DatabasesInput = {
  client_ref: Scalars['String'];
  component_type: Scalars['String'];
  database_code: Scalars['String'];
  database_type: Scalars['String'];
  descr: Scalars['String'];
  holiday_id_p2k: Scalars['String'];
  sql_db_code: Scalars['String'];
  version_date: Scalars['Date'];
  version_no: Scalars['Int'];
  version_user: Scalars['String'];
};

export type DpmAccount = {
  __typename?: 'DpmAccount';
  account_no: Scalars['String'];
  account_type: Scalars['String'];
  client_ref: Scalars['String'];
  company_ref: Scalars['String'];
  component_type: Scalars['String'];
  inactive: Scalars['String'];
  party_ref: Scalars['String'];
  version_date: Scalars['Date'];
  version_no: Scalars['Int'];
  version_user: Scalars['String'];
};

export type DpmAccountExtRef = {
  __typename?: 'DpmAccountExtRef';
  account_ext_ref: Scalars['String'];
  account_ext_ref_type: Scalars['String'];
  account_no: Scalars['String'];
  client_ref: Scalars['String'];
  company_ref: Scalars['String'];
  component_type: Scalars['String'];
  description?: Maybe<Scalars['String']>;
  party_ref: Scalars['String'];
  version_date: Scalars['Date'];
  version_no: Scalars['Int'];
  version_user: Scalars['String'];
};

export type DpmAccountExtRefInput = {
  account_ext_ref: Scalars['String'];
  account_ext_ref_type: Scalars['String'];
  account_no: Scalars['String'];
  client_ref: Scalars['String'];
  company_ref: Scalars['String'];
  component_type: Scalars['String'];
  description?: InputMaybe<Scalars['String']>;
  party_ref: Scalars['String'];
  version_date: Scalars['Date'];
  version_no: Scalars['Int'];
  version_user: Scalars['String'];
};

export type DpmAccountFlag = {
  __typename?: 'DpmAccountFlag';
  account_flag: Scalars['String'];
  account_flag_type: Scalars['Int'];
  account_no: Scalars['String'];
  client_ref: Scalars['String'];
  company_ref: Scalars['String'];
  component_type: Scalars['String'];
  description?: Maybe<Scalars['String']>;
  party_ref: Scalars['String'];
  version_date: Scalars['Date'];
  version_no: Scalars['Int'];
  version_user: Scalars['String'];
};

export type DpmAccountFlagInput = {
  account_flag: Scalars['String'];
  account_flag_type: Scalars['Int'];
  account_no: Scalars['String'];
  client_ref: Scalars['String'];
  company_ref: Scalars['String'];
  component_type: Scalars['String'];
  description?: InputMaybe<Scalars['String']>;
  party_ref: Scalars['String'];
  version_date: Scalars['Date'];
  version_no: Scalars['Int'];
  version_user: Scalars['String'];
};

export type DpmAccountInput = {
  account_no: Scalars['String'];
  account_type: Scalars['String'];
  client_ref: Scalars['String'];
  company_ref: Scalars['String'];
  component_type: Scalars['String'];
  inactive: Scalars['String'];
  party_ref: Scalars['String'];
  version_date: Scalars['Date'];
  version_no: Scalars['Int'];
  version_user: Scalars['String'];
};

export type DpmConfigDef = {
  __typename?: 'DpmConfigDef';
  client_ref: Scalars['String'];
  company_ref: Scalars['String'];
  component_type: Scalars['String'];
  config_type: Scalars['String'];
  config_value: Scalars['String'];
  description?: Maybe<Scalars['String']>;
  party_ref: Scalars['String'];
  version_date: Scalars['Date'];
  version_no: Scalars['Int'];
  version_user: Scalars['String'];
};

export type DpmConfigDefInput = {
  client_ref: Scalars['String'];
  company_ref: Scalars['String'];
  component_type: Scalars['String'];
  config_type: Scalars['String'];
  config_value: Scalars['String'];
  description?: InputMaybe<Scalars['String']>;
  party_ref: Scalars['String'];
  version_date: Scalars['Date'];
  version_no: Scalars['Int'];
  version_user: Scalars['String'];
};

export type DpmParty = {
  __typename?: 'DpmParty';
  client_ref: Scalars['String'];
  company_ref: Scalars['String'];
  component_type: Scalars['String'];
  dpm_account_def: Array<DpmAccount>;
  dpm_account_ext_ref: Array<DpmAccountExtRef>;
  dpm_account_flag: Array<DpmAccountFlag>;
  dpm_party_ext_ref: Array<DpmPartyExtRef>;
  dpm_party_flag: Array<DpmPartyFlag>;
  inactive: Scalars['String'];
  party_ref: Scalars['String'];
  party_type: Scalars['String'];
  version_date: Scalars['Date'];
  version_no: Scalars['Int'];
  version_user: Scalars['String'];
};

export type DpmPartyAudit = {
  __typename?: 'DpmPartyAudit';
  account_data: Scalars['String'];
  account_ext_ref_data: Scalars['String'];
  account_flag_data: Scalars['String'];
  client_ref: Scalars['String'];
  company_ref: Scalars['String'];
  component_type: Scalars['String'];
  dpm_config_data: Scalars['String'];
  party_data: Scalars['String'];
  party_ext_ref_data: Scalars['String'];
  party_flag_data: Scalars['String'];
  party_ref: Scalars['String'];
  version_date: Scalars['Date'];
  version_no: Scalars['Int'];
  version_user: Scalars['String'];
};

export type DpmPartyDef = {
  __typename?: 'DpmPartyDef';
  client_ref: Scalars['String'];
  company_ref: Scalars['String'];
  component_type: Scalars['String'];
  inactive: Scalars['String'];
  party_ref: Scalars['String'];
  party_type: Scalars['String'];
  version_date: Scalars['Date'];
  version_no: Scalars['Int'];
  version_user: Scalars['String'];
};

export type DpmPartyDefInput = {
  client_ref: Scalars['String'];
  company_ref: Scalars['String'];
  component_type: Scalars['String'];
  inactive: Scalars['String'];
  party_ref: Scalars['String'];
  party_type: Scalars['String'];
  version_date: Scalars['Date'];
  version_no: Scalars['Int'];
  version_user: Scalars['String'];
};

export type DpmPartyExtRef = {
  __typename?: 'DpmPartyExtRef';
  client_ref: Scalars['String'];
  company_ref: Scalars['String'];
  component_type: Scalars['String'];
  description?: Maybe<Scalars['String']>;
  party_ext_ref: Scalars['String'];
  party_ext_ref_type: Scalars['String'];
  party_ref: Scalars['String'];
  version_date: Scalars['Date'];
  version_no: Scalars['Int'];
  version_user: Scalars['String'];
};

export type DpmPartyExtRefInput = {
  client_ref: Scalars['String'];
  company_ref: Scalars['String'];
  component_type: Scalars['String'];
  description?: InputMaybe<Scalars['String']>;
  party_ext_ref: Scalars['String'];
  party_ext_ref_type: Scalars['String'];
  party_ref: Scalars['String'];
  version_date: Scalars['Date'];
  version_no: Scalars['Int'];
  version_user: Scalars['String'];
};

export type DpmPartyFlag = {
  __typename?: 'DpmPartyFlag';
  client_ref: Scalars['String'];
  company_ref: Scalars['String'];
  component_type: Scalars['String'];
  description?: Maybe<Scalars['String']>;
  party_flag: Scalars['String'];
  party_flag_type: Scalars['Int'];
  party_ref: Scalars['String'];
  version_date: Scalars['Date'];
  version_no: Scalars['Int'];
  version_user: Scalars['String'];
};

export type DpmPartyFlagInput = {
  client_ref: Scalars['String'];
  company_ref: Scalars['String'];
  component_type: Scalars['String'];
  description?: InputMaybe<Scalars['String']>;
  party_flag: Scalars['String'];
  party_flag_type: Scalars['Int'];
  party_ref: Scalars['String'];
  version_date: Scalars['Date'];
  version_no: Scalars['Int'];
  version_user: Scalars['String'];
};

export type DpmScheduler = {
  __typename?: 'DpmScheduler';
  active_ind_p2k?: Maybe<Scalars['String']>;
  batch_size: Scalars['Int'];
  bus_day: Scalars['String'];
  client_ref: Scalars['String'];
  component_type: Scalars['String'];
  database_code: Scalars['String'];
  database_type: Scalars['String'];
  due_date_time?: Maybe<Scalars['Date']>;
  end_by_interval: Scalars['Int'];
  end_by_time: Scalars['Date'];
  event_ref: Scalars['String'];
  frequency_end_time: Scalars['Date'];
  frequency_interval: Scalars['Int'];
  frequency_start_time: Scalars['Date'];
  frequency_unit: Scalars['String'];
  holiday_id: Scalars['String'];
  msg_type: Scalars['Int'];
  sql_db_code: Scalars['String'];
  start_by_interval: Scalars['Int'];
  start_by_time: Scalars['Date'];
  start_by_unit: Scalars['String'];
  supercede: Scalars['String'];
  use_current_date: Scalars['String'];
  version_date: Scalars['Date'];
  version_no: Scalars['Int'];
  version_user: Scalars['String'];
};

export type DpmSchedulerInput = {
  active_ind_p2k?: InputMaybe<Scalars['String']>;
  batch_size: Scalars['Int'];
  bus_day: Scalars['String'];
  client_ref: Scalars['String'];
  component_type: Scalars['String'];
  database_code: Scalars['String'];
  database_type: Scalars['String'];
  due_date_time?: InputMaybe<Scalars['Date']>;
  end_by_interval: Scalars['Int'];
  end_by_time: Scalars['Date'];
  event_ref: Scalars['String'];
  frequency_end_time: Scalars['Date'];
  frequency_interval: Scalars['Int'];
  frequency_start_time: Scalars['Date'];
  frequency_unit: Scalars['String'];
  holiday_id: Scalars['String'];
  msg_type: Scalars['Int'];
  sql_db_code: Scalars['String'];
  start_by_interval: Scalars['Int'];
  start_by_time: Scalars['Date'];
  start_by_unit: Scalars['String'];
  supercede: Scalars['String'];
  use_current_date: Scalars['String'];
  version_date: Scalars['Date'];
  version_no: Scalars['Int'];
  version_user: Scalars['String'];
};

export type Event = {
  __typename?: 'Event';
  client_ref: Scalars['String'];
  environment: Scalars['String'];
  event: Scalars['String'];
  status: Scalars['String'];
  userid: Scalars['String'];
  version_date: Scalars['Date'];
};

export type EventInput = {
  client_ref: Scalars['String'];
  environment: Scalars['String'];
  event: Scalars['String'];
  status: Scalars['String'];
  userid: Scalars['String'];
  version_date: Scalars['Date'];
};

export type GlossEnvironment = {
  __typename?: 'GlossEnvironment';
  active: Scalars['String'];
  client_ref: Scalars['String'];
  description?: Maybe<Scalars['String']>;
  environment: Scalars['String'];
  sst_glossapi_url: Scalars['String'];
};

export type GlossScheduler = {
  __typename?: 'GlossScheduler';
  active_ind_p2k?: Maybe<Scalars['String']>;
  batch_size: Scalars['Int'];
  bus_day: Scalars['String'];
  client_ref: Scalars['String'];
  database_code: Scalars['String'];
  database_type: Scalars['String'];
  dst_region_code?: Maybe<Scalars['String']>;
  due_date_time?: Maybe<Scalars['Date']>;
  end_by_interval: Scalars['Int'];
  end_by_time: Scalars['Date'];
  event_ref: Scalars['String'];
  frequency_end_time: Scalars['Date'];
  frequency_interval: Scalars['Int'];
  frequency_start_time: Scalars['Date'];
  frequency_unit: Scalars['String'];
  holiday_id: Scalars['String'];
  msg_type: Scalars['Int'];
  sql_db_code: Scalars['String'];
  start_by_interval: Scalars['Int'];
  start_by_time: Scalars['Date'];
  start_by_unit: Scalars['String'];
  supercede: Scalars['String'];
  use_current_date: Scalars['String'];
  version_date: Scalars['Date'];
  version_no: Scalars['Int'];
  version_user: Scalars['String'];
};

export type GlossSchedulerInput = {
  active_ind_p2k?: InputMaybe<Scalars['String']>;
  batch_size: Scalars['Int'];
  bus_day: Scalars['String'];
  client_ref: Scalars['String'];
  database_code: Scalars['String'];
  database_type: Scalars['String'];
  dst_region_code?: InputMaybe<Scalars['String']>;
  due_date_time?: InputMaybe<Scalars['Date']>;
  end_by_interval: Scalars['Int'];
  end_by_time: Scalars['Date'];
  event_ref: Scalars['String'];
  frequency_end_time: Scalars['Date'];
  frequency_interval: Scalars['Int'];
  frequency_start_time: Scalars['Date'];
  frequency_unit: Scalars['String'];
  holiday_id: Scalars['String'];
  msg_type: Scalars['Int'];
  sql_db_code: Scalars['String'];
  start_by_interval: Scalars['Int'];
  start_by_time: Scalars['Date'];
  start_by_unit: Scalars['String'];
  supercede: Scalars['String'];
  use_current_date: Scalars['String'];
  version_date: Scalars['Date'];
  version_no: Scalars['Int'];
  version_user: Scalars['String'];
};

export type JasdecEnvironment = {
  __typename?: 'JasdecEnvironment';
  active: Scalars['String'];
  client_ref: Scalars['String'];
  description?: Maybe<Scalars['String']>;
  environment: Scalars['String'];
  sst_jasdecapi_url: Scalars['String'];
};

export type JsdcFileDef = {
  __typename?: 'JsdcFileDef';
  client_ref: Scalars['String'];
  component_type: Scalars['String'];
  data_rec_type_len: Scalars['Int'];
  db_code?: Maybe<Scalars['String']>;
  file_desc: Scalars['String'];
  file_diff: Scalars['String'];
  file_name: Scalars['String'];
  file_proc_type: Scalars['String'];
  multi_basis_date: Scalars['String'];
  proc_status_check: Scalars['String'];
  proc_status_pos?: Maybe<Scalars['Int']>;
  proc_status_value?: Maybe<Scalars['String']>;
  product_group: Scalars['String'];
  rec_len: Scalars['Int'];
  required_file_name?: Maybe<Scalars['String']>;
  transfer_type: Scalars['String'];
  version_date: Scalars['Date'];
  version_no: Scalars['Int'];
  version_user: Scalars['String'];
};

export type JsdcFileDefInput = {
  client_ref: Scalars['String'];
  component_type: Scalars['String'];
  data_rec_type_len: Scalars['Int'];
  db_code?: InputMaybe<Scalars['String']>;
  file_desc: Scalars['String'];
  file_diff: Scalars['String'];
  file_name: Scalars['String'];
  file_proc_type: Scalars['String'];
  multi_basis_date: Scalars['String'];
  proc_status_check: Scalars['String'];
  proc_status_pos?: InputMaybe<Scalars['Int']>;
  proc_status_value?: InputMaybe<Scalars['String']>;
  product_group: Scalars['String'];
  rec_len: Scalars['Int'];
  required_file_name?: InputMaybe<Scalars['String']>;
  transfer_type: Scalars['String'];
  version_date: Scalars['Date'];
  version_no: Scalars['Int'];
  version_user: Scalars['String'];
};

export type KanbanInputs = {
  Id?: InputMaybe<Scalars['Int']>;
  assignee?: InputMaybe<Scalars['String']>;
  classname?: InputMaybe<Scalars['String']>;
  client_ref?: InputMaybe<Scalars['String']>;
  color?: InputMaybe<Scalars['String']>;
  dependencies?: InputMaybe<Scalars['String']>;
  description?: InputMaybe<Scalars['String']>;
  due_date?: InputMaybe<Scalars['Date']>;
  estimate?: InputMaybe<Scalars['Int']>;
  parentId?: InputMaybe<Scalars['Int']>;
  party_ref: Scalars['String'];
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
  addPartyfromXML: Scalars['Boolean'];
  backUpDpmPartyData: DpmPartyAudit;
  backUpPartyData: PartyAudit;
  cloneClassAssoc: Scalars['Boolean'];
  cloneNettingData: Scalars['Boolean'];
  cloneParty: Scalars['Boolean'];
  cloneSwiftParty: Scalars['Boolean'];
  clonedatabases: Scalars['Boolean'];
  clonedpmParty: Scalars['Boolean'];
  clonedpmScheduler: Scalars['Boolean'];
  cloneglossScheduler: Scalars['Boolean'];
  clonejsdcfiledef: Scalars['Boolean'];
  copyTask: Kb_Task;
  createClassAssoc: ClassAssoc;
  createEvent: Event;
  createJsdcFileDef: JsdcFileDef;
  createKanbanAssignee: TeamModel;
  createKanbanPriority: Kb_Priority;
  createKanbanStatus: Kb_Status;
  createKanbanType: Kb_Type;
  createNetting: Netting;
  createParty: Party;
  createPartyAddress: PartyAddress;
  createPartyAssoc: PartyAssoc;
  createPartyClassification: PartyClassification;
  createPartyDate: PartyDate;
  createPartyExtRef: PartyExtRef;
  createPartyFlag: PartyFlag;
  createPartyInstrument: PartyInstr;
  createPartyNarrative: PartyNarrative;
  createPartySSI: PartySsi;
  createPartySwift: PartySwift;
  createPartyTemplate: PartyTemplate;
  createSubTask: SubTasks;
  createTETemplate: TeTemplate;
  createTask: Kb_Task;
  createdatabase: Databases;
  createdpmAccount: DpmAccount;
  createdpmAccountExtRef: DpmAccountExtRef;
  createdpmAccountFlag: DpmAccountFlag;
  createdpmConfigDef: DpmConfigDef;
  createdpmParty: DpmPartyDef;
  createdpmPartyExtRef: DpmPartyExtRef;
  createdpmPartyFlag: DpmPartyFlag;
  createdpmScheduler: DpmScheduler;
  createglossScheduler: GlossScheduler;
  deleteClassAssoc: ClassAssoc;
  deleteJsdcFileDef: JsdcFileDef;
  deleteKanbanAssignee: TeamModel;
  deleteKanbanPriority: Kb_Priority;
  deleteKanbanStatus: Kb_Status;
  deleteKanbanSubTask: SubTasks;
  deleteKanbanType: Kb_Type;
  deleteNetting: Netting;
  deletePartyAddress: PartyAddress;
  deletePartyAssoc: PartyAssoc;
  deletePartyClassification: PartyClassification;
  deletePartyDate: PartyDate;
  deletePartyExtRef: PartyExtRef;
  deletePartyFlag: PartyFlag;
  deletePartyInstrument: PartyInstr;
  deletePartyNarrative: PartyNarrative;
  deletePartySSI: PartySsi;
  deletePartySwift: PartySwift;
  deletePartyTemplate: PartyTemplate;
  deletePartyTree: Party;
  deleteTETemplate: TeTemplate;
  deleteTask: Kb_Task;
  deleteUser: User;
  deletedatabase: Databases;
  deletedpmAccount: DpmAccount;
  deletedpmAccountExtRef: DpmAccountExtRef;
  deletedpmAccountFlag: DpmAccountFlag;
  deletedpmConfigDef: DpmConfigDef;
  deletedpmPartyExtRef: DpmPartyExtRef;
  deletedpmPartyFlag: DpmPartyFlag;
  deletedpmPartyTree: DpmPartyDef;
  deletedpmScheduler: DpmScheduler;
  deleteglossScheduler: GlossScheduler;
  resetPassword: User;
  restoreDpmPartyData: DpmPartyDef;
  restorePartyData: Party;
  saveClassAssocStaticpushedToGloss: Array<ClassAssoc>;
  saveNettingStaticpushedToGloss: Array<Netting>;
  savePartyStaticpushedToGloss: Party;
  savedpmconfigdefpushed: Array<DpmConfigDef>;
  savefilesStaticpushed: Array<JsdcFileDef>;
  signup: User;
  updateClassAssoc: ClassAssoc;
  updateConfigDef: ConfigDef;
  updateEvent: Event;
  updateJsdcFileDef: JsdcFileDef;
  updateKanbanAssignee: TeamModel;
  updateKanbanPriority: Kb_Priority;
  updateKanbanStatus: Kb_Status;
  updateKanbanType: Kb_Type;
  updateNetting: Netting;
  updateParty: Party;
  updatePartyAddress: PartyAddress;
  updatePartyAssoc: PartyAssoc;
  updatePartyClassification: PartyClassification;
  updatePartyDate: PartyDate;
  updatePartyExtRef: PartyExtRef;
  updatePartyFlag: PartyFlag;
  updatePartyInstrument: PartyInstr;
  updatePartyNarrative: PartyNarrative;
  updatePartySSI: PartySsi;
  updatePartySwift: PartySwift;
  updatePartyTemplate: PartyTemplate;
  updateTETemplate: TeTemplate;
  updateTask: Kb_Task;
  updateTaskDependency: Kb_Task;
  updateTaskParentId: Kb_Task;
  updatedatabase: Databases;
  updatedpmAccount: DpmAccount;
  updatedpmAccountExtRef: DpmAccountExtRef;
  updatedpmAccountFlag: DpmAccountFlag;
  updatedpmConfigDef: DpmConfigDef;
  updatedpmParty: DpmPartyDef;
  updatedpmPartyExtRef: DpmPartyExtRef;
  updatedpmPartyFlag: DpmPartyFlag;
  updatedpmScheduler: DpmScheduler;
  updateglossScheduler: GlossScheduler;
};


export type MutationAddPartyfromXmlArgs = {
  xml: Scalars['String'];
};


export type MutationBackUpDpmPartyDataArgs = {
  client_ref: Scalars['String'];
  company_ref: Scalars['String'];
  component_type: Scalars['String'];
  party_ref: Scalars['String'];
};


export type MutationBackUpPartyDataArgs = {
  client_ref: Scalars['String'];
  party_ref: Scalars['String'];
};


export type MutationCloneClassAssocArgs = {
  client_ref: Scalars['String'];
  new_client_ref: Scalars['String'];
  new_party_ref: Scalars['String'];
  party_ref: Scalars['String'];
};


export type MutationCloneNettingDataArgs = {
  client_ref: Scalars['String'];
  new_client_ref: Scalars['String'];
  new_party_ref: Scalars['String'];
  party_ref: Scalars['String'];
};


export type MutationClonePartyArgs = {
  client_ref: Scalars['String'];
  new_client_ref: Scalars['String'];
  new_party_ref: Scalars['String'];
  party_ref: Scalars['String'];
};


export type MutationCloneSwiftPartyArgs = {
  client_ref: Scalars['String'];
  new_client_ref: Scalars['String'];
  new_party_ref: Scalars['String'];
  party_ref: Scalars['String'];
};


export type MutationClonedatabasesArgs = {
  client_ref: Scalars['String'];
  component_type: Scalars['String'];
  new_client_ref: Scalars['String'];
};


export type MutationClonedpmPartyArgs = {
  client_ref: Scalars['String'];
  company_ref: Scalars['String'];
  component_type: Scalars['String'];
  new_client_ref: Scalars['String'];
  new_company_ref: Scalars['String'];
};


export type MutationClonedpmSchedulerArgs = {
  client_ref: Scalars['String'];
  component_type: Scalars['String'];
  new_client_ref: Scalars['String'];
};


export type MutationCloneglossSchedulerArgs = {
  client_ref: Scalars['String'];
  new_client_ref: Scalars['String'];
};


export type MutationClonejsdcfiledefArgs = {
  client_ref: Scalars['String'];
  component_type: Scalars['String'];
  new_client_ref: Scalars['String'];
  product_group: Scalars['String'];
};


export type MutationCopyTaskArgs = {
  data: KanbanInputs;
};


export type MutationCreateClassAssocArgs = {
  data: ClassAssocInput;
};


export type MutationCreateEventArgs = {
  data: EventInput;
};


export type MutationCreateJsdcFileDefArgs = {
  data: JsdcFileDefInput;
};


export type MutationCreateKanbanAssigneeArgs = {
  data: TeamInputs;
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


export type MutationCreateNettingArgs = {
  data: NettingInput;
};


export type MutationCreatePartyArgs = {
  data: PartyInput;
};


export type MutationCreatePartyAddressArgs = {
  data: PartyAddressInput;
};


export type MutationCreatePartyAssocArgs = {
  data: PartyAssocInput;
};


export type MutationCreatePartyClassificationArgs = {
  data: PartyClassInput;
};


export type MutationCreatePartyDateArgs = {
  data: PartyDateInput;
};


export type MutationCreatePartyExtRefArgs = {
  data: PartyExtRefInput;
};


export type MutationCreatePartyFlagArgs = {
  data: PartyFlagInput;
};


export type MutationCreatePartyInstrumentArgs = {
  data: PartyInstrInput;
};


export type MutationCreatePartyNarrativeArgs = {
  data: PartyNarrativeInput;
};


export type MutationCreatePartySsiArgs = {
  data: PartySsiInput;
};


export type MutationCreatePartySwiftArgs = {
  data: PartySwiftInput;
};


export type MutationCreatePartyTemplateArgs = {
  data: PartyTemplateInput;
};


export type MutationCreateSubTaskArgs = {
  data: SubTaskInputs;
};


export type MutationCreateTeTemplateArgs = {
  data: TeTemplateInput;
};


export type MutationCreateTaskArgs = {
  data: KanbanInputs;
};


export type MutationCreatedatabaseArgs = {
  data: DatabasesInput;
};


export type MutationCreatedpmAccountArgs = {
  data: DpmAccountInput;
};


export type MutationCreatedpmAccountExtRefArgs = {
  data: DpmAccountExtRefInput;
};


export type MutationCreatedpmAccountFlagArgs = {
  data: DpmAccountFlagInput;
};


export type MutationCreatedpmConfigDefArgs = {
  data: DpmConfigDefInput;
};


export type MutationCreatedpmPartyArgs = {
  data: DpmPartyDefInput;
};


export type MutationCreatedpmPartyExtRefArgs = {
  data: DpmPartyExtRefInput;
};


export type MutationCreatedpmPartyFlagArgs = {
  data: DpmPartyFlagInput;
};


export type MutationCreatedpmSchedulerArgs = {
  data: DpmSchedulerInput;
};


export type MutationCreateglossSchedulerArgs = {
  data: GlossSchedulerInput;
};


export type MutationDeleteClassAssocArgs = {
  class_1: Scalars['Int'];
  class_2: Scalars['Int'];
  class_assoc_code: Scalars['String'];
  client_ref: Scalars['String'];
  code_1: Scalars['String'];
  code_type: Scalars['String'];
  party_ref: Scalars['String'];
};


export type MutationDeleteJsdcFileDefArgs = {
  client_ref: Scalars['String'];
  component_type: Scalars['String'];
  file_name: Scalars['String'];
};


export type MutationDeleteKanbanAssigneeArgs = {
  team_member: Scalars['String'];
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


export type MutationDeleteNettingArgs = {
  client_ref: Scalars['String'];
  net_driver: Scalars['String'];
  party_ref: Scalars['String'];
  settle_code: Scalars['String'];
  transaction_type: Scalars['String'];
};


export type MutationDeletePartyAddressArgs = {
  addr_type: Scalars['String'];
  client_ref: Scalars['String'];
  party_ref: Scalars['String'];
};


export type MutationDeletePartyAssocArgs = {
  assoc_type: Scalars['String'];
  client_ref: Scalars['String'];
  party_ref: Scalars['String'];
};


export type MutationDeletePartyClassificationArgs = {
  class_type: Scalars['String'];
  client_ref: Scalars['String'];
  party_ref: Scalars['String'];
};


export type MutationDeletePartyDateArgs = {
  client_ref: Scalars['String'];
  date_type: Scalars['String'];
  party_ref: Scalars['String'];
};


export type MutationDeletePartyExtRefArgs = {
  client_ref: Scalars['String'];
  party_ext_ref_type: Scalars['String'];
  party_ref: Scalars['String'];
};


export type MutationDeletePartyFlagArgs = {
  client_ref: Scalars['String'];
  flag_code: Scalars['String'];
  flag_type: Scalars['Int'];
  party_ref: Scalars['String'];
};


export type MutationDeletePartyInstrumentArgs = {
  client_ref: Scalars['String'];
  instr_ref: Scalars['String'];
  instr_ref_type: Scalars['String'];
  instr_type: Scalars['String'];
  party_ref: Scalars['String'];
};


export type MutationDeletePartyNarrativeArgs = {
  client_ref: Scalars['String'];
  narr_type: Scalars['String'];
  party_ref: Scalars['String'];
};


export type MutationDeletePartySsiArgs = {
  client_ref: Scalars['String'];
  depot_alias: Scalars['String'];
  party_ref: Scalars['String'];
};


export type MutationDeletePartySwiftArgs = {
  client_ref: Scalars['String'];
  party_ref: Scalars['String'];
};


export type MutationDeletePartyTemplateArgs = {
  client_ref: Scalars['String'];
  party_ref: Scalars['String'];
};


export type MutationDeletePartyTreeArgs = {
  client_ref: Scalars['String'];
  party_ref: Scalars['String'];
};


export type MutationDeleteTeTemplateArgs = {
  component_type: Scalars['String'];
  template_type: Scalars['String'];
};


export type MutationDeleteTaskArgs = {
  task_id: Scalars['String'];
};


export type MutationDeleteUserArgs = {
  userid: Scalars['String'];
};


export type MutationDeletedatabaseArgs = {
  client_ref: Scalars['String'];
  component_type: Scalars['String'];
  database_code: Scalars['String'];
  database_type: Scalars['String'];
};


export type MutationDeletedpmAccountArgs = {
  account_no: Scalars['String'];
  client_ref: Scalars['String'];
  company_ref: Scalars['String'];
  component_type: Scalars['String'];
  party_ref: Scalars['String'];
};


export type MutationDeletedpmAccountExtRefArgs = {
  account_ext_ref_type: Scalars['String'];
  account_no: Scalars['String'];
  client_ref: Scalars['String'];
  company_ref: Scalars['String'];
  component_type: Scalars['String'];
  party_ref: Scalars['String'];
};


export type MutationDeletedpmAccountFlagArgs = {
  account_flag: Scalars['String'];
  account_flag_type: Scalars['Int'];
  account_no: Scalars['String'];
  client_ref: Scalars['String'];
  company_ref: Scalars['String'];
  component_type: Scalars['String'];
  party_ref: Scalars['String'];
};


export type MutationDeletedpmConfigDefArgs = {
  client_ref: Scalars['String'];
  company_ref: Scalars['String'];
  component_type: Scalars['String'];
  config_type: Scalars['String'];
};


export type MutationDeletedpmPartyExtRefArgs = {
  client_ref: Scalars['String'];
  company_ref: Scalars['String'];
  component_type: Scalars['String'];
  party_ext_ref_type: Scalars['String'];
  party_ref: Scalars['String'];
};


export type MutationDeletedpmPartyFlagArgs = {
  client_ref: Scalars['String'];
  company_ref: Scalars['String'];
  component_type: Scalars['String'];
  party_flag: Scalars['String'];
  party_flag_type: Scalars['Int'];
  party_ref: Scalars['String'];
};


export type MutationDeletedpmPartyTreeArgs = {
  client_ref: Scalars['String'];
  company_ref: Scalars['String'];
  component_type: Scalars['String'];
  party_ref: Scalars['String'];
};


export type MutationDeletedpmSchedulerArgs = {
  client_ref: Scalars['String'];
  component_type: Scalars['String'];
  database_code: Scalars['String'];
  due_date_time: Scalars['Date'];
  event_ref: Scalars['String'];
  msg_type: Scalars['Int'];
};


export type MutationDeleteglossSchedulerArgs = {
  client_ref: Scalars['String'];
  database_code: Scalars['String'];
  due_date_time: Scalars['Date'];
  event_ref: Scalars['String'];
  msg_type: Scalars['Int'];
};


export type MutationResetPasswordArgs = {
  data: LoginInput;
};


export type MutationRestoreDpmPartyDataArgs = {
  client_ref: Scalars['String'];
  company_ref: Scalars['String'];
  component_type: Scalars['String'];
  party_ref: Scalars['String'];
  version_no: Scalars['Int'];
};


export type MutationRestorePartyDataArgs = {
  client_ref: Scalars['String'];
  party_ref: Scalars['String'];
  version_no: Scalars['Int'];
};


export type MutationSaveClassAssocStaticpushedToGlossArgs = {
  client_ref: Scalars['String'];
  environment: Scalars['String'];
  party_ref: Scalars['String'];
};


export type MutationSaveNettingStaticpushedToGlossArgs = {
  client_ref: Scalars['String'];
  environment: Scalars['String'];
  party_ref: Scalars['String'];
};


export type MutationSavePartyStaticpushedToGlossArgs = {
  client_ref: Scalars['String'];
  environment: Scalars['String'];
  party_ref: Scalars['String'];
};


export type MutationSavedpmconfigdefpushedArgs = {
  client_ref: Scalars['String'];
  company_ref: Scalars['String'];
  component_type: Scalars['String'];
  environment: Scalars['String'];
};


export type MutationSavefilesStaticpushedArgs = {
  client_ref: Scalars['String'];
  component_type: Scalars['String'];
  environment: Scalars['String'];
};


export type MutationSignupArgs = {
  data: UserInput;
};


export type MutationUpdateClassAssocArgs = {
  data: ClassAssocInput;
};


export type MutationUpdateConfigDefArgs = {
  data: ConfigDefInput;
};


export type MutationUpdateEventArgs = {
  data: EventInput;
};


export type MutationUpdateJsdcFileDefArgs = {
  data: JsdcFileDefInput;
};


export type MutationUpdateKanbanAssigneeArgs = {
  data: TeamInputs;
  team_member: Scalars['String'];
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


export type MutationUpdateNettingArgs = {
  data: NettingInput;
};


export type MutationUpdatePartyArgs = {
  data: PartyInput;
};


export type MutationUpdatePartyAddressArgs = {
  data: PartyAddressInput;
};


export type MutationUpdatePartyAssocArgs = {
  data: PartyAssocInput;
};


export type MutationUpdatePartyClassificationArgs = {
  data: PartyClassInput;
};


export type MutationUpdatePartyDateArgs = {
  data: PartyDateInput;
};


export type MutationUpdatePartyExtRefArgs = {
  data: PartyExtRefInput;
};


export type MutationUpdatePartyFlagArgs = {
  data: PartyFlagInput;
};


export type MutationUpdatePartyInstrumentArgs = {
  data: PartyInstrInput;
};


export type MutationUpdatePartyNarrativeArgs = {
  data: PartyNarrativeInput;
};


export type MutationUpdatePartySsiArgs = {
  data: PartySsiInput;
};


export type MutationUpdatePartySwiftArgs = {
  data: PartySwiftInput;
};


export type MutationUpdatePartyTemplateArgs = {
  data: PartyTemplateInput;
};


export type MutationUpdateTeTemplateArgs = {
  data: TeTemplateInput;
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


export type MutationUpdatedatabaseArgs = {
  data: DatabasesInput;
};


export type MutationUpdatedpmAccountArgs = {
  data: DpmAccountInput;
};


export type MutationUpdatedpmAccountExtRefArgs = {
  data: DpmAccountExtRefInput;
};


export type MutationUpdatedpmAccountFlagArgs = {
  data: DpmAccountFlagInput;
};


export type MutationUpdatedpmConfigDefArgs = {
  data: DpmConfigDefInput;
};


export type MutationUpdatedpmPartyArgs = {
  data: DpmPartyDefInput;
};


export type MutationUpdatedpmPartyExtRefArgs = {
  data: DpmPartyExtRefInput;
};


export type MutationUpdatedpmPartyFlagArgs = {
  data: DpmPartyFlagInput;
};


export type MutationUpdatedpmSchedulerArgs = {
  client_ref: Scalars['String'];
  component_type: Scalars['String'];
  data: DpmSchedulerInput;
  database_code: Scalars['String'];
  due_date_time: Scalars['Date'];
  event_ref: Scalars['String'];
  msg_type: Scalars['Int'];
};


export type MutationUpdateglossSchedulerArgs = {
  client_ref: Scalars['String'];
  data: GlossSchedulerInput;
  database_code: Scalars['String'];
  due_date_time: Scalars['Date'];
  event_ref: Scalars['String'];
  msg_type: Scalars['Int'];
};

export type Netting = {
  __typename?: 'Netting';
  buy_and_sell_flag: Scalars['String'];
  client_ref: Scalars['String'];
  date_type: Scalars['String'];
  end_date_type: Scalars['String'];
  end_offset_code: Scalars['String'];
  end_offset_ind: Scalars['String'];
  late_rule: Scalars['String'];
  market_party: Scalars['String'];
  net_book: Scalars['String'];
  net_cash_when_zero_stock: Scalars['String'];
  net_driver: Scalars['String'];
  net_party_ref: Scalars['String'];
  net_primary: Scalars['String'];
  net_schedule_code: Scalars['String'];
  net_secondary: Scalars['String'];
  operation_type: Scalars['String'];
  override_net_book: Scalars['String'];
  party_ref: Scalars['String'];
  primary_comp_alias: Scalars['String'];
  primary_comp_service: Scalars['String'];
  primary_depot_type: Scalars['String'];
  primary_instr: Scalars['String'];
  primary_party_ref: Scalars['String'];
  primary_secp_alias: Scalars['String'];
  primary_secp_service: Scalars['String'];
  secondary_comp_alias: Scalars['String'];
  secondary_comp_service: Scalars['String'];
  secondary_depot_type: Scalars['String'];
  secondary_party: Scalars['String'];
  secondary_party_ref: Scalars['String'];
  secondary_secp_alias: Scalars['String'];
  secondary_secp_service: Scalars['String'];
  settle_code: Scalars['String'];
  settle_instr: Scalars['String'];
  settle_terms: Scalars['String'];
  split_buy_sell: Scalars['String'];
  start_date_type: Scalars['String'];
  start_offset_code: Scalars['String'];
  start_offset_ind: Scalars['String'];
  trade_group: Scalars['Int'];
  transaction_type: Scalars['String'];
  version_date: Scalars['Date'];
  version_no: Scalars['Int'];
  version_user: Scalars['String'];
};

export type NettingInput = {
  buy_and_sell_flag: Scalars['String'];
  client_ref: Scalars['String'];
  date_type: Scalars['String'];
  end_date_type: Scalars['String'];
  end_offset_code: Scalars['String'];
  end_offset_ind: Scalars['String'];
  late_rule: Scalars['String'];
  market_party: Scalars['String'];
  net_book: Scalars['String'];
  net_cash_when_zero_stock: Scalars['String'];
  net_driver: Scalars['String'];
  net_party_ref: Scalars['String'];
  net_primary: Scalars['String'];
  net_schedule_code: Scalars['String'];
  net_secondary: Scalars['String'];
  operation_type: Scalars['String'];
  override_net_book: Scalars['String'];
  party_ref: Scalars['String'];
  primary_comp_alias: Scalars['String'];
  primary_comp_service: Scalars['String'];
  primary_depot_type: Scalars['String'];
  primary_instr: Scalars['String'];
  primary_party_ref: Scalars['String'];
  primary_secp_alias: Scalars['String'];
  primary_secp_service: Scalars['String'];
  secondary_comp_alias: Scalars['String'];
  secondary_comp_service: Scalars['String'];
  secondary_depot_type: Scalars['String'];
  secondary_party: Scalars['String'];
  secondary_party_ref: Scalars['String'];
  secondary_secp_alias: Scalars['String'];
  secondary_secp_service: Scalars['String'];
  settle_code: Scalars['String'];
  settle_instr: Scalars['String'];
  settle_terms: Scalars['String'];
  split_buy_sell: Scalars['String'];
  start_date_type: Scalars['String'];
  start_offset_code: Scalars['String'];
  start_offset_ind: Scalars['String'];
  trade_group: Scalars['Int'];
  transaction_type: Scalars['String'];
  version_date: Scalars['Date'];
  version_no: Scalars['Int'];
  version_user: Scalars['String'];
};

export type Party = {
  __typename?: 'Party';
  active_ind: Scalars['String'];
  client_ref: Scalars['String'];
  has_netting_config: Scalars['String'];
  has_swift_config: Scalars['String'];
  party_addr: Array<PartyAddress>;
  party_assoc: Array<PartyAssoc>;
  party_class_assoc: Array<ClassAssoc>;
  party_classification: Array<PartyClassification>;
  party_date: Array<PartyDate>;
  party_ext_ref: Array<PartyExtRef>;
  party_extra_long_name: Scalars['String'];
  party_flag: Array<PartyFlag>;
  party_instr: Array<PartyInstr>;
  party_long_name: Scalars['String'];
  party_narrative: Array<PartyNarrative>;
  party_ref: Scalars['String'];
  party_short_name: Scalars['String'];
  party_ssi: Array<PartySsi>;
  party_template: Array<PartyTemplate>;
  party_type: Scalars['String'];
  version_date: Scalars['Date'];
  version_no: Scalars['Int'];
  version_user: Scalars['String'];
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
  client_ref: Scalars['String'];
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

export type PartyAddressInput = {
  addr_line1: Scalars['String'];
  addr_line2: Scalars['String'];
  addr_line3: Scalars['String'];
  addr_line4: Scalars['String'];
  addr_line5: Scalars['String'];
  addr_line6: Scalars['String'];
  addr_type: Scalars['String'];
  client_ref: Scalars['String'];
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
  client_ref: Scalars['String'];
  description?: Maybe<Scalars['String']>;
  party_ref: Scalars['String'];
  version_date: Scalars['Date'];
  version_no: Scalars['Int'];
  version_user: Scalars['String'];
};

export type PartyAssocInput = {
  assoc_party_ref: Scalars['String'];
  assoc_type: Scalars['String'];
  client_ref: Scalars['String'];
  description?: InputMaybe<Scalars['String']>;
  party_ref: Scalars['String'];
  version_date: Scalars['Date'];
  version_no: Scalars['Int'];
  version_user: Scalars['String'];
};

export type PartyAssocModels = {
  __typename?: 'PartyAssocModels';
  description?: Maybe<Scalars['String']>;
  key: Scalars['String'];
  user_defined?: Maybe<Scalars['String']>;
};

export type PartyAudit = {
  __typename?: 'PartyAudit';
  client_ref: Scalars['String'];
  party_address_data: Scalars['String'];
  party_assoc_data: Scalars['String'];
  party_class_assoc_data: Scalars['String'];
  party_classification_data: Scalars['String'];
  party_data: Scalars['String'];
  party_date_data: Scalars['String'];
  party_ext_ref_data: Scalars['String'];
  party_flag_data: Scalars['String'];
  party_instr_data: Scalars['String'];
  party_narrative_data: Scalars['String'];
  party_netting_data: Scalars['String'];
  party_ref: Scalars['String'];
  party_ssi_data: Scalars['String'];
  party_template_data: Scalars['String'];
  version_date: Scalars['Date'];
  version_no: Scalars['Int'];
  version_user: Scalars['String'];
};

export type PartyClassInput = {
  class_code: Scalars['String'];
  class_type: Scalars['String'];
  client_ref: Scalars['String'];
  description?: InputMaybe<Scalars['String']>;
  party_ref: Scalars['String'];
  version_date: Scalars['Date'];
  version_no: Scalars['Int'];
  version_user: Scalars['String'];
};

export type PartyClassification = {
  __typename?: 'PartyClassification';
  class_code: Scalars['String'];
  class_type: Scalars['String'];
  client_ref: Scalars['String'];
  description?: Maybe<Scalars['String']>;
  party_ref: Scalars['String'];
  version_date: Scalars['Date'];
  version_no: Scalars['Int'];
  version_user: Scalars['String'];
};

export type PartyClassificationModels = {
  __typename?: 'PartyClassificationModels';
  description?: Maybe<Scalars['String']>;
  key: Scalars['String'];
  user_defined?: Maybe<Scalars['String']>;
};

export type PartyDate = {
  __typename?: 'PartyDate';
  client_ref: Scalars['String'];
  date: Scalars['String'];
  date_type: Scalars['String'];
  party_ref: Scalars['String'];
  time: Scalars['String'];
  version_date: Scalars['Date'];
  version_no: Scalars['Int'];
  version_user: Scalars['String'];
};

export type PartyDateInput = {
  client_ref: Scalars['String'];
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
  client_ref: Scalars['String'];
  description?: Maybe<Scalars['String']>;
  party_ext_ref: Scalars['String'];
  party_ext_ref_type: Scalars['String'];
  party_ref: Scalars['String'];
  version_date: Scalars['Date'];
  version_no: Scalars['Int'];
  version_user: Scalars['String'];
};

export type PartyExtRefInput = {
  client_ref: Scalars['String'];
  description?: InputMaybe<Scalars['String']>;
  party_ext_ref: Scalars['String'];
  party_ext_ref_type: Scalars['String'];
  party_ref: Scalars['String'];
  version_date: Scalars['Date'];
  version_no: Scalars['Int'];
  version_user: Scalars['String'];
};

export type PartyFlag = {
  __typename?: 'PartyFlag';
  client_ref: Scalars['String'];
  description?: Maybe<Scalars['String']>;
  flag_code: Scalars['String'];
  flag_type: Scalars['Int'];
  party_ref: Scalars['String'];
  version_date: Scalars['Date'];
  version_no: Scalars['Int'];
  version_user: Scalars['String'];
};

export type PartyFlagInput = {
  client_ref: Scalars['String'];
  description?: InputMaybe<Scalars['String']>;
  flag_code: Scalars['String'];
  flag_type: Scalars['Int'];
  party_ref: Scalars['String'];
  version_date: Scalars['Date'];
  version_no: Scalars['Int'];
  version_user: Scalars['String'];
};

export type PartyFlagModels = {
  __typename?: 'PartyFlagModels';
  description?: Maybe<Scalars['String']>;
  key: Scalars['String'];
  user_defined?: Maybe<Scalars['String']>;
};

export type PartyInput = {
  active_ind: Scalars['String'];
  client_ref: Scalars['String'];
  has_netting_config: Scalars['String'];
  has_swift_config: Scalars['String'];
  party_extra_long_name: Scalars['String'];
  party_long_name: Scalars['String'];
  party_ref: Scalars['String'];
  party_short_name: Scalars['String'];
  party_type: Scalars['String'];
  version_date: Scalars['Date'];
  version_no: Scalars['Int'];
  version_user: Scalars['String'];
};

export type PartyInstr = {
  __typename?: 'PartyInstr';
  client_ref: Scalars['String'];
  description?: Maybe<Scalars['String']>;
  instr_ref: Scalars['String'];
  instr_ref_type: Scalars['String'];
  instr_type: Scalars['String'];
  party_ref: Scalars['String'];
  version_date: Scalars['Date'];
  version_no: Scalars['Int'];
  version_user: Scalars['String'];
};

export type PartyInstrInput = {
  client_ref: Scalars['String'];
  description?: InputMaybe<Scalars['String']>;
  instr_ref: Scalars['String'];
  instr_ref_type: Scalars['String'];
  instr_type: Scalars['String'];
  party_ref: Scalars['String'];
  version_date: Scalars['Date'];
  version_no: Scalars['Int'];
  version_user: Scalars['String'];
};

export type PartyInstrumentModels = {
  __typename?: 'PartyInstrumentModels';
  description?: Maybe<Scalars['String']>;
  key: Scalars['String'];
  user_defined?: Maybe<Scalars['String']>;
};

export type PartyNarrative = {
  __typename?: 'PartyNarrative';
  client_ref: Scalars['String'];
  description?: Maybe<Scalars['String']>;
  narr_type: Scalars['String'];
  narrative: Scalars['String'];
  party_ref: Scalars['String'];
  version_date: Scalars['Date'];
  version_no: Scalars['Int'];
  version_user: Scalars['String'];
};

export type PartyNarrativeInput = {
  client_ref: Scalars['String'];
  description?: InputMaybe<Scalars['String']>;
  narr_type: Scalars['String'];
  narrative: Scalars['String'];
  party_ref: Scalars['String'];
  version_date: Scalars['Date'];
  version_no: Scalars['Int'];
  version_user: Scalars['String'];
};

export type PartyNarrativeModels = {
  __typename?: 'PartyNarrativeModels';
  description?: Maybe<Scalars['String']>;
  key: Scalars['String'];
  user_defined?: Maybe<Scalars['String']>;
};

export type PartyRefModels = {
  __typename?: 'PartyRefModels';
  description?: Maybe<Scalars['String']>;
  key: Scalars['String'];
  user_defined?: Maybe<Scalars['String']>;
};

export type PartySsi = {
  __typename?: 'PartySSI';
  account_name: Scalars['String'];
  account_no: Scalars['String'];
  active_ind: Scalars['String'];
  ccy: Scalars['String'];
  client_ref: Scalars['String'];
  comms_service: Scalars['String'];
  dacc_ref: Scalars['String'];
  depo_ref: Scalars['String'];
  depot_alias: Scalars['String'];
  depot_descr: Scalars['String'];
  depot_type: Scalars['String'];
  description?: Maybe<Scalars['String']>;
  party_ref: Scalars['String'];
  version_date: Scalars['Date'];
  version_no: Scalars['Int'];
  version_user: Scalars['String'];
};

export type PartySsiInput = {
  account_name: Scalars['String'];
  account_no: Scalars['String'];
  active_ind: Scalars['String'];
  ccy: Scalars['String'];
  client_ref: Scalars['String'];
  comms_service: Scalars['String'];
  dacc_ref: Scalars['String'];
  depo_ref: Scalars['String'];
  depot_alias: Scalars['String'];
  depot_descr: Scalars['String'];
  depot_type: Scalars['String'];
  description?: InputMaybe<Scalars['String']>;
  party_ref: Scalars['String'];
  version_date: Scalars['Date'];
  version_no: Scalars['Int'];
  version_user: Scalars['String'];
};

export type PartySwift = {
  __typename?: 'PartySwift';
  branch_code: Scalars['String'];
  channel: Scalars['String'];
  client_ref: Scalars['String'];
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

export type PartySwiftInput = {
  branch_code: Scalars['String'];
  channel: Scalars['String'];
  client_ref: Scalars['String'];
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

export type PartyTemplate = {
  __typename?: 'PartyTemplate';
  client_ref: Scalars['String'];
  party_long_name: Scalars['String'];
  party_ref: Scalars['String'];
  party_short_name: Scalars['String'];
  template_party_ref: Scalars['String'];
  version_date: Scalars['Date'];
  version_no: Scalars['Int'];
  version_user: Scalars['String'];
};

export type PartyTemplateInput = {
  client_ref: Scalars['String'];
  party_long_name: Scalars['String'];
  party_ref: Scalars['String'];
  party_short_name: Scalars['String'];
  template_party_ref: Scalars['String'];
  version_date: Scalars['Date'];
  version_no: Scalars['Int'];
  version_user: Scalars['String'];
};

export type Query = {
  __typename?: 'Query';
  Events: Array<Event>;
  JsdcFileDef: Array<JsdcFileDef>;
  KanbanAssignee: Array<TeamModel>;
  KanbanAssigneeById: Array<TeamModel>;
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
  KanbanTasksNotCompleted: Array<Kb_Task>;
  KanbanType: Array<Kb_Type>;
  KanbanTypeById: Array<Kb_Type>;
  KanbanUniqueByTaskId: Kb_Task;
  SubTaskById: Array<SubTasks>;
  SubTasks: Array<SubTasks>;
  SubTasksByTaskId: Array<SubTasks>;
  bojenvironments: Array<BojEnvironment>;
  clients: Array<Clients>;
  configDefEntries: Array<ConfigDef>;
  databases: Array<Databases>;
  dpmAccount: Array<DpmAccount>;
  dpmAccountExtRef: Array<DpmAccountExtRef>;
  dpmAccountFlag: Array<DpmAccountFlag>;
  dpmConfigDef: Array<DpmConfigDef>;
  dpmParty: DpmParty;
  dpmPartyAudit: Array<DpmPartyAudit>;
  dpmPartyByClient: Array<DpmParty>;
  dpmPartyByType: Array<DpmParty>;
  dpmPartyExtRef: Array<DpmPartyExtRef>;
  dpmPartyFlag: Array<DpmPartyFlag>;
  dpmScheduler: Array<DpmScheduler>;
  firstPartyByType: Party;
  firstdpmPartyByClient: DpmPartyDef;
  getAllPartyAssociationsTypes: Array<PartyAssocModels>;
  getAllPartyClassificationTypes: Array<PartyClassificationModels>;
  getAllPartyFlagsTypes: Array<PartyFlagModels>;
  getAllPartyInstrumentsTypes: Array<PartyInstrumentModels>;
  getAllPartyNarrativesTypes: Array<PartyNarrativeModels>;
  getAllPartyReferenceTypes: Array<PartyRefModels>;
  getPartyAssociationTypeByKey: Array<PartyAssocModels>;
  getPartyClassificationTypeByKey: Array<PartyClassificationModels>;
  getPartyFlagTypeByKey: Array<PartyFlagModels>;
  getPartyInstrumentTypeByKey: Array<PartyInstrumentModels>;
  getPartyNarrativeTypeByKey: Array<PartyNarrativeModels>;
  getPartyReferenceTypeByKey: Array<PartyRefModels>;
  glossPartyAudit: Array<PartyAudit>;
  glossScheduler: Array<GlossScheduler>;
  glossenvironments: Array<GlossEnvironment>;
  jasdecenvironments: Array<JasdecEnvironment>;
  me: User;
  party: Party;
  partyAddress: Array<PartyAddress>;
  partyAssoc: Array<PartyAssoc>;
  partyByType: Array<Party>;
  partyClassAssoc: Array<ClassAssoc>;
  partyClassification: Array<PartyClassification>;
  partyDate: Array<PartyDate>;
  partyExtRef: Array<PartyExtRef>;
  partyFlag: Array<PartyFlag>;
  partyInstr: Array<PartyInstr>;
  partyNarrative: Array<PartyNarrative>;
  partyNetting: Array<Netting>;
  partySSI: Array<PartySsi>;
  partySwift: Array<PartySwift>;
  partyTemplate: Array<PartyTemplate>;
  teTemplates: Array<TeTemplate>;
  users: Array<User>;
};


export type QueryEventsArgs = {
  client_ref: Scalars['String'];
};


export type QueryJsdcFileDefArgs = {
  client_ref: Scalars['String'];
  component_type: Scalars['String'];
};


export type QueryKanbanAssigneeByIdArgs = {
  team_member: Scalars['String'];
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


export type QueryKanbanTasksNotCompletedArgs = {
  partyRef: Scalars['String'];
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


export type QueryBojenvironmentsArgs = {
  client_ref: Scalars['String'];
};


export type QueryConfigDefEntriesArgs = {
  client_ref: Scalars['String'];
  component_type: Scalars['String'];
};


export type QueryDatabasesArgs = {
  client_ref: Scalars['String'];
  component_type: Scalars['String'];
};


export type QueryDpmAccountArgs = {
  client_ref: Scalars['String'];
  company_ref: Scalars['String'];
  component_type: Scalars['String'];
  party_ref: Scalars['String'];
};


export type QueryDpmAccountExtRefArgs = {
  client_ref: Scalars['String'];
  company_ref: Scalars['String'];
  component_type: Scalars['String'];
  party_ref: Scalars['String'];
};


export type QueryDpmAccountFlagArgs = {
  client_ref: Scalars['String'];
  company_ref: Scalars['String'];
  component_type: Scalars['String'];
  party_ref: Scalars['String'];
};


export type QueryDpmConfigDefArgs = {
  client_ref: Scalars['String'];
  company_ref: Scalars['String'];
  component_type: Scalars['String'];
};


export type QueryDpmPartyArgs = {
  client_ref: Scalars['String'];
  company_ref: Scalars['String'];
  component_type: Scalars['String'];
  party_ref: Scalars['String'];
};


export type QueryDpmPartyAuditArgs = {
  client_ref: Scalars['String'];
  company_ref: Scalars['String'];
  component_type: Scalars['String'];
  party_ref: Scalars['String'];
};


export type QueryDpmPartyByClientArgs = {
  client_ref: Scalars['String'];
  component_type: Scalars['String'];
};


export type QueryDpmPartyByTypeArgs = {
  client_ref: Scalars['String'];
  component_type: Scalars['String'];
  party_type: Scalars['String'];
};


export type QueryDpmPartyExtRefArgs = {
  client_ref: Scalars['String'];
  company_ref: Scalars['String'];
  component_type: Scalars['String'];
  party_ref: Scalars['String'];
};


export type QueryDpmPartyFlagArgs = {
  client_ref: Scalars['String'];
  company_ref: Scalars['String'];
  component_type: Scalars['String'];
  party_ref: Scalars['String'];
};


export type QueryDpmSchedulerArgs = {
  client_ref: Scalars['String'];
  component_type: Scalars['String'];
};


export type QueryFirstPartyByTypeArgs = {
  client_ref: Scalars['String'];
  party_type: Scalars['String'];
};


export type QueryFirstdpmPartyByClientArgs = {
  client_ref: Scalars['String'];
  component_type: Scalars['String'];
};


export type QueryGetPartyAssociationTypeByKeyArgs = {
  key: Scalars['String'];
};


export type QueryGetPartyClassificationTypeByKeyArgs = {
  key: Scalars['String'];
};


export type QueryGetPartyFlagTypeByKeyArgs = {
  key: Scalars['String'];
};


export type QueryGetPartyInstrumentTypeByKeyArgs = {
  key: Scalars['String'];
};


export type QueryGetPartyNarrativeTypeByKeyArgs = {
  key: Scalars['String'];
};


export type QueryGetPartyReferenceTypeByKeyArgs = {
  key: Scalars['String'];
};


export type QueryGlossPartyAuditArgs = {
  client_ref: Scalars['String'];
  party_ref: Scalars['String'];
};


export type QueryGlossSchedulerArgs = {
  client_ref: Scalars['String'];
};


export type QueryGlossenvironmentsArgs = {
  client_ref: Scalars['String'];
};


export type QueryJasdecenvironmentsArgs = {
  client_ref: Scalars['String'];
};


export type QueryPartyArgs = {
  client_ref: Scalars['String'];
  party_ref: Scalars['String'];
};


export type QueryPartyAddressArgs = {
  client_ref: Scalars['String'];
  party_ref: Scalars['String'];
};


export type QueryPartyAssocArgs = {
  client_ref: Scalars['String'];
  party_ref: Scalars['String'];
};


export type QueryPartyByTypeArgs = {
  client_ref: Scalars['String'];
  party_type: Scalars['String'];
};


export type QueryPartyClassAssocArgs = {
  client_ref: Scalars['String'];
  party_ref: Scalars['String'];
};


export type QueryPartyClassificationArgs = {
  client_ref: Scalars['String'];
  party_ref: Scalars['String'];
};


export type QueryPartyDateArgs = {
  client_ref: Scalars['String'];
  party_ref: Scalars['String'];
};


export type QueryPartyExtRefArgs = {
  client_ref: Scalars['String'];
  party_ref: Scalars['String'];
};


export type QueryPartyFlagArgs = {
  client_ref: Scalars['String'];
  party_ref: Scalars['String'];
};


export type QueryPartyInstrArgs = {
  client_ref: Scalars['String'];
  party_ref: Scalars['String'];
};


export type QueryPartyNarrativeArgs = {
  client_ref: Scalars['String'];
  party_ref: Scalars['String'];
};


export type QueryPartyNettingArgs = {
  client_ref: Scalars['String'];
  party_ref: Scalars['String'];
};


export type QueryPartySsiArgs = {
  client_ref: Scalars['String'];
  party_ref: Scalars['String'];
};


export type QueryPartySwiftArgs = {
  client_ref: Scalars['String'];
  party_ref: Scalars['String'];
};


export type QueryPartyTemplateArgs = {
  client_ref: Scalars['String'];
  party_ref: Scalars['String'];
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

export type TeTemplate = {
  __typename?: 'TETemplate';
  component_type: Scalars['String'];
  template_data: Scalars['String'];
  template_type: Scalars['String'];
  version_date: Scalars['Date'];
  version_no: Scalars['Int'];
  version_user: Scalars['String'];
};

export type TeTemplateInput = {
  component_type: Scalars['String'];
  template_data: Scalars['String'];
  template_type: Scalars['String'];
  version_date: Scalars['Date'];
  version_no: Scalars['Int'];
  version_user: Scalars['String'];
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

export type TeamInputs = {
  first_name: Scalars['String'];
  last_name: Scalars['String'];
  location: Scalars['String'];
  team_member: Scalars['String'];
  title: Scalars['String'];
  updatedte: Scalars['Date'];
  updateusr: Scalars['String'];
};

export type TeamModel = {
  __typename?: 'TeamModel';
  first_name: Scalars['String'];
  last_name: Scalars['String'];
  location: Scalars['String'];
  team_member: Scalars['String'];
  title: Scalars['String'];
  updatedte: Scalars['Date'];
  updateusr: Scalars['String'];
};

export type User = {
  __typename?: 'User';
  client_ref: Scalars['String'];
  createdAt: Scalars['Date'];
  email: Scalars['String'];
  firstname?: Maybe<Scalars['String']>;
  lastname?: Maybe<Scalars['String']>;
  role: Scalars['String'];
  updatedAt: Scalars['Date'];
  userid: Scalars['ID'];
};

export type UserInput = {
  client_ref: Scalars['String'];
  createdAt: Scalars['Date'];
  email: Scalars['String'];
  firstname?: InputMaybe<Scalars['String']>;
  lastname?: InputMaybe<Scalars['String']>;
  password: Scalars['String'];
  role: Scalars['String'];
  updatedAt: Scalars['Date'];
  userid: Scalars['ID'];
};

export type Kb_Comment = {
  __typename?: 'kb_comment';
  comment_text: Scalars['String'];
  image_url: Scalars['String'];
  party_ref: Scalars['String'];
  task_id: Scalars['String'];
  title: Scalars['String'];
  updatedte: Scalars['Date'];
  updateusr: Scalars['String'];
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
  Comment: Array<Kb_Comment>;
  Id?: Maybe<Scalars['Int']>;
  Priority: Array<Kb_Priority>;
  Status: Array<Kb_Status>;
  Type: Array<Kb_Type>;
  assignee?: Maybe<Scalars['String']>;
  classname?: Maybe<Scalars['String']>;
  client_ref: Scalars['String'];
  color?: Maybe<Scalars['String']>;
  dependencies?: Maybe<Scalars['String']>;
  description?: Maybe<Scalars['String']>;
  due_date?: Maybe<Scalars['Date']>;
  estimate?: Maybe<Scalars['Int']>;
  parentId?: Maybe<Scalars['Int']>;
  party_ref: Scalars['String'];
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

export type KanbanTaskFragment = { __typename?: 'kb_task', party_ref: string, parentId?: number | null, Id?: number | null, assignee?: string | null, due_date?: any | null, start_date?: any | null, description?: string | null, dependencies?: string | null, rankid?: number | null, task_id: string, title?: string | null, estimate?: number | null, status?: string | null, summary?: string | null, classname?: string | null, priority?: string | null, type?: string | null, color?: string | null, tags?: string | null };

export type KanbanTasksQueryVariables = Exact<{ [key: string]: never; }>;


export type KanbanTasksQuery = { __typename?: 'Query', KanbanTask: Array<{ __typename?: 'kb_task', party_ref: string, parentId?: number | null, Id?: number | null, assignee?: string | null, due_date?: any | null, start_date?: any | null, description?: string | null, dependencies?: string | null, rankid?: number | null, task_id: string, title?: string | null, estimate?: number | null, status?: string | null, summary?: string | null, classname?: string | null, priority?: string | null, type?: string | null, color?: string | null, tags?: string | null }> };

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


export type KanbanTaskByTaskIdQuery = { __typename?: 'Query', KanbanByTaskId: Array<{ __typename?: 'kb_task', party_ref: string, parentId?: number | null, Id?: number | null, assignee?: string | null, due_date?: any | null, start_date?: any | null, description?: string | null, dependencies?: string | null, rankid?: number | null, task_id: string, title?: string | null, estimate?: number | null, status?: string | null, summary?: string | null, classname?: string | null, priority?: string | null, type?: string | null, color?: string | null, tags?: string | null }> };

export type KanbanTaskByStatusQueryVariables = Exact<{
  status: Scalars['String'];
}>;


export type KanbanTaskByStatusQuery = { __typename?: 'Query', KanbanTaskByStatus: Array<{ __typename?: 'kb_task', party_ref: string, parentId?: number | null, Id?: number | null, assignee?: string | null, due_date?: any | null, start_date?: any | null, description?: string | null, dependencies?: string | null, rankid?: number | null, task_id: string, title?: string | null, estimate?: number | null, status?: string | null, summary?: string | null, classname?: string | null, priority?: string | null, type?: string | null, color?: string | null, tags?: string | null }> };

export type KanbanByTaskIdQueryVariables = Exact<{
  task_id: Scalars['String'];
}>;


export type KanbanByTaskIdQuery = { __typename?: 'Query', KanbanByTaskId: Array<{ __typename?: 'kb_task', party_ref: string, parentId?: number | null, Id?: number | null, assignee?: string | null, due_date?: any | null, start_date?: any | null, description?: string | null, dependencies?: string | null, rankid?: number | null, task_id: string, title?: string | null, estimate?: number | null, status?: string | null, summary?: string | null, classname?: string | null, priority?: string | null, type?: string | null, color?: string | null, tags?: string | null }> };

export type KanbanTaskByRefAndStatusQueryVariables = Exact<{
  partyRef: Scalars['String'];
  status: Scalars['String'];
}>;


export type KanbanTaskByRefAndStatusQuery = { __typename?: 'Query', KanbanTaskByRefAndStatus: Array<{ __typename?: 'kb_task', party_ref: string, parentId?: number | null, Id?: number | null, assignee?: string | null, due_date?: any | null, start_date?: any | null, description?: string | null, dependencies?: string | null, rankid?: number | null, task_id: string, title?: string | null, estimate?: number | null, status?: string | null, summary?: string | null, classname?: string | null, priority?: string | null, type?: string | null, color?: string | null, tags?: string | null }> };

export type KanbanTaskByRefQueryVariables = Exact<{
  party_ref: Scalars['String'];
}>;


export type KanbanTaskByRefQuery = { __typename?: 'Query', KanbanTaskByRef: Array<{ __typename?: 'kb_task', party_ref: string, parentId?: number | null, Id?: number | null, assignee?: string | null, due_date?: any | null, start_date?: any | null, description?: string | null, dependencies?: string | null, rankid?: number | null, task_id: string, title?: string | null, estimate?: number | null, status?: string | null, summary?: string | null, classname?: string | null, priority?: string | null, type?: string | null, color?: string | null, tags?: string | null }> };

export type KanbanByStatusQueryVariables = Exact<{
  status: Scalars['String'];
}>;


export type KanbanByStatusQuery = { __typename?: 'Query', KanbanTaskByStatus: Array<{ __typename?: 'kb_task', party_ref: string, parentId?: number | null, Id?: number | null, assignee?: string | null, due_date?: any | null, start_date?: any | null, description?: string | null, dependencies?: string | null, rankid?: number | null, task_id: string, title?: string | null, estimate?: number | null, status?: string | null, summary?: string | null, classname?: string | null, priority?: string | null, type?: string | null, color?: string | null, tags?: string | null }> };

export type CreateKanbanTaskMutationVariables = Exact<{
  taskInput: KanbanInputs;
}>;


export type CreateKanbanTaskMutation = { __typename?: 'Mutation', createTask: { __typename?: 'kb_task', party_ref: string, parentId?: number | null, Id?: number | null, assignee?: string | null, due_date?: any | null, start_date?: any | null, description?: string | null, dependencies?: string | null, rankid?: number | null, task_id: string, title?: string | null, estimate?: number | null, status?: string | null, summary?: string | null, classname?: string | null, priority?: string | null, type?: string | null, color?: string | null, tags?: string | null } };

export type UpdateTaskMutationVariables = Exact<{
  task_id: Scalars['String'];
  taskInput: KanbanInputs;
}>;


export type UpdateTaskMutation = { __typename?: 'Mutation', updateTask: { __typename?: 'kb_task', party_ref: string, parentId?: number | null, Id?: number | null, assignee?: string | null, due_date?: any | null, start_date?: any | null, description?: string | null, dependencies?: string | null, rankid?: number | null, task_id: string, title?: string | null, estimate?: number | null, status?: string | null, summary?: string | null, classname?: string | null, priority?: string | null, type?: string | null, color?: string | null, tags?: string | null } };

export type DeleteTaskMutationVariables = Exact<{
  task_id: Scalars['String'];
}>;


export type DeleteTaskMutation = { __typename?: 'Mutation', deleteTask: { __typename?: 'kb_task', party_ref: string, parentId?: number | null, Id?: number | null, assignee?: string | null, due_date?: any | null, start_date?: any | null, description?: string | null, dependencies?: string | null, rankid?: number | null, task_id: string, title?: string | null, estimate?: number | null, status?: string | null, summary?: string | null, classname?: string | null, priority?: string | null, type?: string | null, color?: string | null, tags?: string | null } };

export type KanbanFirstTaskQueryVariables = Exact<{
  party_ref: Scalars['String'];
}>;


export type KanbanFirstTaskQuery = { __typename?: 'Query', KanbanFirstTask: { __typename?: 'kb_task', party_ref: string, parentId?: number | null, Id?: number | null, assignee?: string | null, due_date?: any | null, start_date?: any | null, description?: string | null, dependencies?: string | null, rankid?: number | null, task_id: string, title?: string | null, estimate?: number | null, status?: string | null, summary?: string | null, classname?: string | null, priority?: string | null, type?: string | null, color?: string | null, tags?: string | null } };

export type UpdateTaskParentIdMutationVariables = Exact<{
  task_id: Scalars['String'];
  parentId: Scalars['Int'];
}>;


export type UpdateTaskParentIdMutation = { __typename?: 'Mutation', updateTaskParentId: { __typename?: 'kb_task', task_id: string, parentId?: number | null } };

export type GetPartyAssociationTypeByKeyQueryVariables = Exact<{
  key: Scalars['String'];
}>;


export type GetPartyAssociationTypeByKeyQuery = { __typename?: 'Query', getPartyAssociationTypeByKey: Array<{ __typename?: 'PartyAssocModels', description?: string | null, user_defined?: string | null }> };

export type GetAllPartyAssociationTypesQueryVariables = Exact<{ [key: string]: never; }>;


export type GetAllPartyAssociationTypesQuery = { __typename?: 'Query', getAllPartyAssociationsTypes: Array<{ __typename?: 'PartyAssocModels', description?: string | null, user_defined?: string | null }> };

export type GetPartyFlagTypeByKeyQueryVariables = Exact<{
  flag: Scalars['String'];
}>;


export type GetPartyFlagTypeByKeyQuery = { __typename?: 'Query', getPartyFlagTypeByKey: Array<{ __typename?: 'PartyFlagModels', description?: string | null, user_defined?: string | null }> };

export type AddPartyFromXmlMutationVariables = Exact<{
  xml: Scalars['String'];
}>;


export type AddPartyFromXmlMutation = { __typename?: 'Mutation', addPartyfromXML: boolean };

export type KanbanAssigneeQueryVariables = Exact<{ [key: string]: never; }>;


export type KanbanAssigneeQuery = { __typename?: 'Query', KanbanAssignee: Array<{ __typename?: 'TeamModel', team_member: string, last_name: string, first_name: string, location: string, title: string }> };

export type CreateKanbanAssigneeMutationVariables = Exact<{
  data: TeamInputs;
}>;


export type CreateKanbanAssigneeMutation = { __typename?: 'Mutation', createKanbanAssignee: { __typename?: 'TeamModel', first_name: string } };

export type GetKanbanMemberByIdQueryVariables = Exact<{
  team_member: Scalars['String'];
}>;


export type GetKanbanMemberByIdQuery = { __typename?: 'Query', KanbanAssigneeById: Array<{ __typename?: 'TeamModel', team_member: string, last_name: string, first_name: string, location: string, title: string }> };

export type UpdateKanbanMemberMutationVariables = Exact<{
  data: TeamInputs;
  team_member: Scalars['String'];
}>;


export type UpdateKanbanMemberMutation = { __typename?: 'Mutation', updateKanbanAssignee: { __typename?: 'TeamModel', team_member: string, last_name: string, first_name: string, location: string, title: string } };

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
export const GetPartyAssociationTypeByKeyDocument = gql`
    query getPartyAssociationTypeByKey($key: String!) {
  getPartyAssociationTypeByKey(key: $key) {
    description
    user_defined
  }
}
    `;

  @Injectable({
    providedIn: 'root'
  })
  export class GetPartyAssociationTypeByKeyGQL extends Apollo.Query<GetPartyAssociationTypeByKeyQuery, GetPartyAssociationTypeByKeyQueryVariables> {
    document = GetPartyAssociationTypeByKeyDocument;
    
    constructor(apollo: Apollo.Apollo) {
      super(apollo);
    }
  }
export const GetAllPartyAssociationTypesDocument = gql`
    query getAllPartyAssociationTypes {
  getAllPartyAssociationsTypes {
    description
    user_defined
  }
}
    `;

  @Injectable({
    providedIn: 'root'
  })
  export class GetAllPartyAssociationTypesGQL extends Apollo.Query<GetAllPartyAssociationTypesQuery, GetAllPartyAssociationTypesQueryVariables> {
    document = GetAllPartyAssociationTypesDocument;
    
    constructor(apollo: Apollo.Apollo) {
      super(apollo);
    }
  }
export const GetPartyFlagTypeByKeyDocument = gql`
    query getPartyFlagTypeByKey($flag: String!) {
  getPartyFlagTypeByKey(key: $flag) {
    description
    user_defined
  }
}
    `;

  @Injectable({
    providedIn: 'root'
  })
  export class GetPartyFlagTypeByKeyGQL extends Apollo.Query<GetPartyFlagTypeByKeyQuery, GetPartyFlagTypeByKeyQueryVariables> {
    document = GetPartyFlagTypeByKeyDocument;
    
    constructor(apollo: Apollo.Apollo) {
      super(apollo);
    }
  }
export const AddPartyFromXmlDocument = gql`
    mutation addPartyFromXML($xml: String!) {
  addPartyfromXML(xml: $xml)
}
    `;

  @Injectable({
    providedIn: 'root'
  })
  export class AddPartyFromXmlGQL extends Apollo.Mutation<AddPartyFromXmlMutation, AddPartyFromXmlMutationVariables> {
    document = AddPartyFromXmlDocument;
    
    constructor(apollo: Apollo.Apollo) {
      super(apollo);
    }
  }
export const KanbanAssigneeDocument = gql`
    query KanbanAssignee {
  KanbanAssignee {
    team_member
    last_name
    first_name
    location
    title
  }
}
    `;

  @Injectable({
    providedIn: 'root'
  })
  export class KanbanAssigneeGQL extends Apollo.Query<KanbanAssigneeQuery, KanbanAssigneeQueryVariables> {
    document = KanbanAssigneeDocument;
    
    constructor(apollo: Apollo.Apollo) {
      super(apollo);
    }
  }
export const CreateKanbanAssigneeDocument = gql`
    mutation createKanbanAssignee($data: TeamInputs!) {
  createKanbanAssignee(data: $data) {
    first_name
  }
}
    `;

  @Injectable({
    providedIn: 'root'
  })
  export class CreateKanbanAssigneeGQL extends Apollo.Mutation<CreateKanbanAssigneeMutation, CreateKanbanAssigneeMutationVariables> {
    document = CreateKanbanAssigneeDocument;
    
    constructor(apollo: Apollo.Apollo) {
      super(apollo);
    }
  }
export const GetKanbanMemberByIdDocument = gql`
    query getKanbanMemberById($team_member: String!) {
  KanbanAssigneeById(team_member: $team_member) {
    team_member
    last_name
    first_name
    location
    title
  }
}
    `;

  @Injectable({
    providedIn: 'root'
  })
  export class GetKanbanMemberByIdGQL extends Apollo.Query<GetKanbanMemberByIdQuery, GetKanbanMemberByIdQueryVariables> {
    document = GetKanbanMemberByIdDocument;
    
    constructor(apollo: Apollo.Apollo) {
      super(apollo);
    }
  }
export const UpdateKanbanMemberDocument = gql`
    mutation updateKanbanMember($data: TeamInputs!, $team_member: String!) {
  updateKanbanAssignee(team_member: $team_member, data: $data) {
    team_member
    last_name
    first_name
    location
    title
  }
}
    `;

  @Injectable({
    providedIn: 'root'
  })
  export class UpdateKanbanMemberGQL extends Apollo.Mutation<UpdateKanbanMemberMutation, UpdateKanbanMemberMutationVariables> {
    document = UpdateKanbanMemberDocument;
    
    constructor(apollo: Apollo.Apollo) {
      super(apollo);
    }
  }