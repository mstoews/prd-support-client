import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { map } from 'rxjs/operators';
import * as prdApi from 'app/services//graphql.api';

@Injectable({
  providedIn: 'root',
})
export class PrdService {
    constructor(
      private readonly userGQL: prdApi.UserGQL,

    ) { }

  httpOptions = {
    headers: {
      'Content-Type': 'text/plain',
    },
  };

  public getUserList() {
    return this.userGQL.watch().valueChanges.pipe(map((result) => result.data.users));
  }

  public getTeamCols() {
    const cols = [
      { headerName: 'First Name', field: 'firstname' },
      { headerName: 'Last Name', field: 'lastname' },
      { headerName: 'Email', field: 'email' },
      { headerName: 'Role', field: 'role' },
      { headerName: 'Created Date', field: 'createAt' },
    ];
    return cols;
  }

  dateFormatter(params: { value: any; }) {
    const dateAsString = params.value;
    const dateParts = dateAsString.split('-');
    return `${dateParts[0]} - ${dateParts[1]} - ${dateParts[2].slice(0, 2)}`;
  }
}
