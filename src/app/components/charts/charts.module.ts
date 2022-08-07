import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { BarComponent } from './bar/bar.component';
import { LineComponent } from './line/line.component';
import { PieComponent } from './pie/pie.component';
import { IconsModule } from 'app/icons.module';
import { MaterialModule } from 'app/MaterialModule';
import { NgApexchartsModule } from 'ng-apexcharts';



@NgModule({
  declarations: [
    BarComponent,
    LineComponent,
    PieComponent
  ],
  imports: [
    MaterialModule, CommonModule, IconsModule, NgApexchartsModule
  ]
})
export class ChartsModule { }
