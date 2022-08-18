import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { DashboardComponent } from './dashboard/dashboard.component';
import { IncidentsComponent } from './incidents/incidents.component';
import { LandingPageComponent } from './landing-page/landing-page.component';
import { MonitoringComponent } from './monitoring/monitoring.component';
import { ServiceRequestsComponent } from './service-requests/service-requests.component';


const routes: Routes = [
  {
    path: 'landing',
    pathMatch: 'full',
    component: LandingPageComponent,
  },
  {
    path: 'alerts',
    pathMatch: 'full',
    component: DashboardComponent,
  },
  {
    path: 'incidents',
    pathMatch: 'full',
    component: IncidentsComponent,

  },
  {
    path: 'service-requests',
    pathMatch: 'full',
    component: ServiceRequestsComponent,

  },
  {
    path: 'monitoring',
    pathMatch: 'full',
    component: MonitoringComponent,

  },
  {
    path: '**',
    pathMatch: 'full',
    component: LandingPageComponent,
  },
  {
    path: '',
    pathMatch: 'full',
    component: LandingPageComponent,
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class DashboardRoutingModule { }
