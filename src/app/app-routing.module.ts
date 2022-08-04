import { NgModule } from '@angular/core';
import { RouterModule, Route } from '@angular/router';

const routes: Route[] = [
  {
    path: '',
    loadChildren: () => import('./components/landing-page/routes').then( (mod) => mod.LANDING_ROUTES),
  },
  {
    path: 'blog',
    loadChildren: () => import('./components/blog/routes').then((mod) => mod.BLOG_ROUTES),
    },
  {
    path: 'landing',
    loadChildren: () => import('./components/landing-page/routes').then( (mod) => mod.LANDING_ROUTES),
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
