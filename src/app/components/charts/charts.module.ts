import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { BarComponent } from './bar/bar.component';
import { LineComponent } from './line/line.component';
import { PieComponent } from './pie/pie.component';
import { IconsModule } from 'app/icons.module';
import { MaterialModule } from 'app/MaterialModule';
import { NgApexchartsModule } from 'ng-apexcharts';
import { MixedChartComponent} from './mixed-chart/mixed-chart.component';
import { RadarComponent } from './radar/radar.component';
import { AreaComponent } from './area/area.component';

@NgModule({
  declarations: [
    BarComponent,
    LineComponent,
    PieComponent,
    MixedChartComponent,
    RadarComponent,
    AreaComponent
  ],
  imports: [
    MaterialModule, CommonModule, IconsModule, NgApexchartsModule
  ],
  exports:
  [BarComponent,
    LineComponent,
    PieComponent,
    RadarComponent,
    MixedChartComponent]
})
export class ChartsModule { }
