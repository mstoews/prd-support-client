import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CustomerServiceRoutingModule } from './customer-service.routing.module';
import { ClientGroupComponent } from './client-group/client-group.component';
import { ClientServiceMenubarComponent } from './menubar/menubar.component';
import { MaterialModule } from 'app/MaterialModule';
import { ClientServiceComponent } from './client-service/client-service.component';

@NgModule({
  declarations: [
    ClientGroupComponent,
    ClientServiceMenubarComponent,
    ClientServiceComponent

  ],
  imports: [
    CommonModule,
    CustomerServiceRoutingModule,
    MaterialModule,

  ]
})
export class CustomerServiceModule { }
