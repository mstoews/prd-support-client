import { NgModule } from '@angular/core';
import { RouterModule, Route } from '@angular/router';

const routes: Route[] = [
  {
    path: 'blog',
    loadChildren: () => import('./components/blog/routes').then((mod) => mod.BLOG_ROUTES),
    },
  {
    path: 'dashboard',
    pathMatch: 'full',
    loadChildren: () => import('./components/dashboard/dashboard.module').then((mod) => mod.DashboardModule),
  },
  {
    path: '',
    redirectTo: 'dashboard',
    pathMatch: 'full',
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes, { scrollPositionRestoration: 'enabled'})],
  exports: [RouterModule]
})
export class AppRoutingModule { }
