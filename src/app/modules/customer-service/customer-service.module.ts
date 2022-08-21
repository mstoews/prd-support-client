import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CustomerServiceRoutingModule } from './customer-service.routing.module';
import { ClientGroupComponent } from './client-group/client-group.component';
import { ClientServiceMenubarComponent } from './menubar/menubar.component';
import { MaterialModule } from 'app/MaterialModule';
import { ClientServiceComponent } from './client-service/client-service.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { AlertsComponent } from 'app/components/alerts/alerts.component';
import { ChartsModule } from 'app/components/charts/charts.module';
import { GridAGModule } from 'app/components/grid/gridAG.module';
import { NgApexchartsModule } from 'ng-apexcharts';
import { DashboardRoutingModule } from '../dashboard/dashboard.routing.module';


@NgModule({
  declarations: [
    ClientGroupComponent,
    ClientServiceMenubarComponent,
    ClientServiceComponent

  ],
  imports: [
    CommonModule,
    CustomerServiceRoutingModule,
    CommonModule,
    FormsModule,
    ReactiveFormsModule,
    GridAGModule,
    DashboardRoutingModule,
    NgApexchartsModule,
    AlertsComponent,
    ChartsModule,
    MaterialModule

  ]
})
export class CustomerServiceModule { }
