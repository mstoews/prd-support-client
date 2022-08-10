import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { DashboardComponent } from './dashboard/dashboard.component';
import { NgApexchartsModule } from 'ng-apexcharts';
import { ServiceRequestsComponent } from './service-requests/service-requests.component';
import { IncidentsComponent } from './incidents/incidents.component';
import { MonitoringComponent } from './monitoring/monitoring.component';
import { GridAGModule } from '../grid/gridAG.module';
import { DashboardRoutingModule } from './dashboard.routing.module';
import { SharedModule } from '../../shell/shared-module/shared.module';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { AlertsComponent } from '../alerts/alerts.component';
import { LandingPageComponent } from './landing-page/landing-page.component';

@NgModule({
  declarations: [
    DashboardComponent,
    ServiceRequestsComponent,
    IncidentsComponent,
    MonitoringComponent,
    LandingPageComponent,
  ],
  imports: [
    CommonModule,
    FormsModule,
    ReactiveFormsModule,
    GridAGModule,
    DashboardRoutingModule,
    SharedModule,
    NgApexchartsModule,
    AlertsComponent,
  ]
})
export class DashboardModule { }
