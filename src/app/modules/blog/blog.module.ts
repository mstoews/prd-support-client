import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { BlogComponent } from './blog.component';


import { RouterModule, Routes } from '@angular/router';
import { CardComponent } from './card/card.component';
import { MaterialModule } from '../../MaterialModule';


const routes: Routes = [
  {
    path: '',
    component: BlogComponent,
  },
]


@NgModule({
  declarations: [BlogComponent, CardComponent],
  imports: [
    CommonModule,
    RouterModule.forChild(routes),
    MaterialModule
  ],
})
export class BlogModule { }
