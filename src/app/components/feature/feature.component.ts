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
  standalone: true,
  imports: [ MaterialModule, CommonModule, IconsModule, NgApexchartsModule ],
  selector: 'app-feature',
  templateUrl: './feature.component.html',
  styles: []
})
export class FeatureComponent implements OnInit {

  @ViewChild("chart")
  chart: ApexAxisChartSeries | ApexNonAxisChartSeries = [];
  public chartOptions: Partial<ChartOptions> | any;
  amount = 10;
  overallScore = 4;
  averageRatio = .23;
  predictedRatio = .32;

  constructor() {
    this.chartOptions = {
      series: [
        {
          name: "Requests",
          data: [10, 41, 35, 51, 49, 32, 20, 25, 22]
        }
      ],
      chart: {
        height: 300,
        type: "bar"
      },
      title: {
        text: "Service Requests Monthly"
      },
      xaxis: {
        categories: ["Jan", "Feb",  "Mar",  "Apr",  "May",  "Jun",  "Jul",  "Aug", "Sep"]
      }
    };
  }

  ngOnInit(): void {
  }



}


/**
 *
 * "@ag-grid-community/all-modules": "^27.3.0",
    "@ag-grid-community/angular": "^27.3.0",
    "@ag-grid-community/client-side-row-model": "^27.3.0",
    "@ag-grid-community/core": "^27.0.0",
 *
 */
