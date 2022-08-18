import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { DashboardComponent } from './dashboard/dashboard.component';
import { NgApexchartsModule } from 'ng-apexcharts';
import { ServiceRequestsComponent } from './service-requests/service-requests.component';
import { IncidentsComponent } from './incidents/incidents.component';
import { MonitoringComponent } from './monitoring/monitoring.component';
import { GridAGModule } from '../grid/gridAG.module';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { AlertsComponent } from '../alerts/alerts.component';
import { LandingPageComponent } from './landing-page/landing-page.component';
import { TeamComponent } from './team-list/team-list.component';
import { MaterialModule } from '../../MaterialModule';
import { SharedModule } from '../../shell/shared-module/shared.module';
import { ChartsModule } from '../charts/charts.module';
import { DashboardRoutingModule } from './dashboard.routing.module';

@NgModule({
  declarations: [
    DashboardComponent,
    ServiceRequestsComponent,
    IncidentsComponent,
    MonitoringComponent,
    LandingPageComponent,
    TeamComponent,
  ],
  imports: [
    CommonModule,
    FormsModule,
    ReactiveFormsModule,
    GridAGModule,
    DashboardRoutingModule,
    MaterialModule,
    NgApexchartsModule,
    AlertsComponent,
    SharedModule,
    ChartsModule
  ],
})
export class DashboardModule { }
