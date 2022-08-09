import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { DashboardComponent } from './dashboard/dashboard.component';
import { MaterialModule } from 'app/MaterialModule';
import { NgApexchartsModule } from 'ng-apexcharts';
import { ServiceRequestsComponent } from './service-requests/service-requests.component';
import { IncidentsComponent } from './incidents/incidents.component';
import { MonitoringComponent } from './monitoring/monitoring.component';
import { GridAGModule } from '../grid/gridAG.module';

@NgModule({
  declarations: [
    DashboardComponent,
    ServiceRequestsComponent,
    IncidentsComponent,
    MonitoringComponent,

  ],
  imports: [
    CommonModule,
    MaterialModule,
    NgApexchartsModule,
    GridAGModule,
  ]
})
export class DashboardModule { }
