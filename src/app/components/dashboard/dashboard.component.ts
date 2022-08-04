import { CommonModule } from '@angular/common';
import { Component, OnInit, ViewChild } from '@angular/core';
import { IconsModule } from 'src/app/icons.module';
import { MaterialModule } from 'src/app/MaterialModule';
import { ApexNonAxisChartSeries, NgApexchartsModule } from 'ng-apexcharts';

import {
  ChartComponent,
  ApexAxisChartSeries,
  ApexChart,
  ApexXAxis,
  ApexTitleSubtitle
} from "ng-apexcharts";

export type ChartOptions = {
  series: ApexAxisChartSeries;
  chart: ApexChart;
  xaxis: ApexXAxis;
  title: ApexTitleSubtitle;
};


@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html'
})
export class DashboardComponent implements OnInit {
  @ViewChild("chart")
  chart: ApexAxisChartSeries | ApexNonAxisChartSeries = [];
  public chartOptions: Partial<ChartOptions> | any;
  amount = 10;
  overallScore = 4;
  averageRatio = .23;
  predictedRatio = .32;


  constructor() { }

  ngOnInit(): void {
  }

}
