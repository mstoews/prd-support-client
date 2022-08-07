import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule, Routes } from '@angular/router';
import { LandingPageComponent } from 'app/components/landing-page/landing-page.component';

const routes: Routes = [
  {
    path: 'dashboard',
    pathMatch: 'full',
    component: LandingPageComponent,
  },
];

@NgModule({
  imports: [
    RouterModule.forChild(routes) ,
    CommonModule
  ]
})
export class SharedRoutingModule { }
