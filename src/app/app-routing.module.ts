import { NgModule } from '@angular/core';
import { RouterModule, Route } from '@angular/router';

const routes: Route[] = [
  {
    path: 'blog',
    loadChildren: () => import('./components/blog/routes').then((mod) => mod.BLOG_ROUTES),
    },
  {
    path: 'landing',
    loadChildren: () =>
      import('app/shell/shared-module/shared.module').then((m) => m.SharedModule),
  },
  {
    path: '',
    redirectTo: '/landing/dashboard',
    pathMatch: 'full',
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes, { scrollPositionRestoration: 'enabled'})],
  exports: [RouterModule]
})
export class AppRoutingModule { }
