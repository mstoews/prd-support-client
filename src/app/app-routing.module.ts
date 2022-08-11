import { NgModule } from '@angular/core';
import { RouterModule, Route } from '@angular/router';

const routes: Route[] = [
  {
    path: 'dashboard',
    loadChildren: () => import('./components/dashboard/dashboard.module').then((mod) => mod.DashboardModule),
  },
  {
    path: '',
    redirectTo: 'dashboard',
    pathMatch: 'full',
  },
  // {
  //   path: 'kanban',
  //   loadChildren: () =>
  //     import('./components/kanban-tracking/module/kanban.module').then(
  //       (m) => m.KanbanTasksModule
  //     ),
  //   // canActivate: [AuthGuard],
  // },
];

@NgModule({
  imports: [RouterModule.forRoot(routes, { scrollPositionRestoration: 'enabled'})],
  exports: [RouterModule]
})
export class AppRoutingModule { }
