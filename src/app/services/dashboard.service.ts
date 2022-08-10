import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { SnackService } from './snack.service';
import { map } from 'rxjs/operators';
import * as dashboardApi from 'app/services//graphql.api';

@Injectable({
  providedIn: 'root',
})
export class DashboardService {
  constructor(
    private snackService: SnackService,
    private http: HttpClient)
    { }
    

  httpOptions = {
    headers: {
      'Content-Type': 'text/plain',
    },
  };

  dateFormatter(params: { value: any; }) {
    const dateAsString = params.value;
    const dateParts = dateAsString.split('-');
    return `${dateParts[0]} - ${dateParts[1]} - ${dateParts[2].slice(0, 2)}`;
  }

  public getTeTemplateCols() {
    const cols = [
      { headerName: 'component_type', field: 'component_type' },
      { headerName: 'Template Name', field: 'template_type' },
      { headerName: 'Template Data', field: 'template_data' },
      {
        headerName: 'Date Updated',
        field: 'version_date',
        minWidth: 150,
        filter: 'agDateColumnFilter',
        valueFormatter: this.dateFormatter,
      },
      { headerName: 'User Name', field: 'version_user' },
      { headerName: 'Version', field: 'version_no' },
    ];
    return cols;
  }
}
