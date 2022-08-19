import {CommonModule} from '@angular/common';
import {NgModule} from '@angular/core';
import {FormsModule, ReactiveFormsModule} from '@angular/forms';
import {NgApexchartsModule} from 'ng-apexcharts';

import {MaterialModule} from '../../MaterialModule';
import {SharedModule} from '../../shell/shared-module/shared.module';
import {AlertsComponent} from '../../components/alerts/alerts.component';
import {ChartsModule} from '../../components/charts/charts.module';
import {GridAGModule} from '../../components/grid/gridAG.module';


import {DashboardRoutingModule} from './dashboard.routing.module';
import {DashboardComponent} from './dashboard/dashboard.component';
import {IncidentsComponent} from './incidents/incidents.component';
import {LandingPageComponent} from './landing-page/landing-page.component';
import {MonitoringComponent} from './monitoring/monitoring.component';
import {ServiceRequestsComponent} from './service-requests/service-requests.component';
import {TeamComponent} from './team-list/team-list.component';

@NgModule({
  declarations: [
    DashboardComponent, ServiceRequestsComponent, IncidentsComponent,
    MonitoringComponent, LandingPageComponent, TeamComponent,
  ],
  imports: [
    CommonModule, FormsModule, ReactiveFormsModule, GridAGModule,
    DashboardRoutingModule, MaterialModule, NgApexchartsModule, AlertsComponent,
    SharedModule, ChartsModule
  ],
})
export class DashboardModule {
}
