import { NgModule } from '@angular/core';
import { RouterModule, Route } from '@angular/router';

const routes: Route[] = [
  {
    path: 'dashboard',
    loadChildren: () => import('./modules/dashboard/dashboard.module').then((mod) => mod.DashboardModule),
  },
  {
    path: 'client-service',
    loadChildren: () => import('./modules/customer-service/customer-service.module').then((mod) => mod.CustomerServiceModule),
  },
  {
    path: '',
    redirectTo: 'dashboard',
    pathMatch: 'full',
  },
  {
    path: 'blog',
    loadChildren: () => import('./modules/blog/blog.module').then((mod) => mod.BlogModule),
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
