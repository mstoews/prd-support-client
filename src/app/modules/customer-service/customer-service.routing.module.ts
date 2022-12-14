import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ClientServiceComponent } from './client-service/client-service.component';

const routes: Routes = [
  {
    path: '',
    pathMatch: 'full',
    component: ClientServiceComponent,
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class CustomerServiceRoutingModule { }

