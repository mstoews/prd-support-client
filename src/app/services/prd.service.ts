import { Injectable } from '@angular/core';
import { map } from 'rxjs/operators';
import * as prdApi from 'app/services//graphql.api';

@Injectable({
  providedIn: 'root',
})
export class PrdService {
    constructor(
      private readonly userGQL: prdApi.UserGQL,
      private readonly clientServiceGQL: prdApi.ClientServiceGQL,
) { }

  httpOptions = {
    headers: {
      'Content-Type': 'text/plain',
    },
  };

  public getClientServiceList() {
   return this.clientServiceGQL.watch().valueChanges.pipe(map((result) => result.data.ClientService));
  }


  public getClientServiceCols() {
    const cols = [
    { headerName: 'Client ID',  field: 'client_id' },
    { headerName: 'RAG', field: 'rag', width: 60 },
    { headerName: 'Trend', field: 'rag_trend', width: 60 },
    { headerName: 'Application', field: 'application' },
    { headerName: 'Client_service_manager,', field: 'client_service_manager' },
    { headerName: 'Contacts', field: 'contacts' },
    { headerName: 'CSM Contacts', field: 'csm_contacts' },
    { headerName: 'Environment', field: 'environment' },
    { headerName: 'Open Issues', field: 'open_issues' },
    { headerName: 'T&M Goals', field: 'timeandmaterialgoals' },
    { headerName: 'Last Updated', field: 'last_updated'},
    ];
    return cols;
  }

    /* User Lists and Columns */
    public getUserList() {
      return this.userGQL.watch().valueChanges.pipe(map((result) => result.data.users));
    }

  public getTeamCols() {
    const cols = [
      { headerName: 'First Name', field: 'firstname' },
      { headerName: 'Last Name', field: 'lastname' },
      { headerName: 'Email', field: 'email' },
      { headerName: 'Role', field: 'role' },
      {
        headerName: 'Date Updated',
        field: 'createdAt',
        minWidth: 150,
        filter: 'agDateColumnFilter',
        valueFormatter: this.dateFormatter,
      },
      {
        headerName: 'Date Updated',
        field: 'updatedAt',
        minWidth: 150,
        filter: 'agDateColumnFilter',
        valueFormatter: this.dateFormatter,
      },
    ];
    return cols;
  }

  dateFormatter(params: { value: any; }) {
    const dateAsString = params.value;
    const dateParts = dateAsString.split('-');
    return `${dateParts[0]} - ${dateParts[1]} - ${dateParts[2].slice(0, 2)}`;
  }
}
