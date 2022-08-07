import { CommonModule } from '@angular/common';
import { Component, OnInit, ViewChild } from '@angular/core';
import { IconsModule } from 'app/icons.module';
import { MaterialModule } from 'app/MaterialModule';
import { ApexNonAxisChartSeries, NgApexchartsModule } from 'ng-apexcharts';

import {
  ChartComponent,
  ApexAxisChartSeries,
  ApexChart,
  ApexFill,
  ApexYAxis,
  ApexTooltip,
  ApexTitleSubtitle,
  ApexXAxis
} from "ng-apexcharts";


export type ChartOptions = {
  series: ApexAxisChartSeries;
  chart: ApexChart;
  xaxis: ApexXAxis;
  yaxis: ApexYAxis | ApexYAxis[];
  title: ApexTitleSubtitle;
  labels: string[];
  stroke: any; // ApexStroke;
  dataLabels: any; // ApexDataLabels;
  toolbar: {
    show: false,
  }
};

@Component({
  standalone: true,
  imports: [ MaterialModule, CommonModule, IconsModule, NgApexchartsModule ],
  selector: 'app-alerts',
  templateUrl: './alerts.component.html'
})
export class AlertsComponent implements OnInit {

  @ViewChild("chart")
  chart: ApexAxisChartSeries | ApexNonAxisChartSeries = [];
  public chartOptions: Partial<ChartOptions> | any;
  public amount: number = 24;

  constructor() {
    this.chartOptions = {
      series: [
        {
          name: "Alerts",
          type: "column",
          data: [440, 505, 414, 671, 227, 413, 201, 352, 752, 320, 257, 160]
        },
        {
          name: "Warning",
          type: "line",
          data: [23, 42, 35, 27, 43, 22, 17, 31, 22, 22, 12, 16]
        }
      ],
      chart: {
        height: 350,
        type: "bar"
      },
      stroke: {
        width: [0, 4]
      },
      title: {
        text: ""
      },
      dataLabels: {
        enabled: false,
        enabledOnSeries: [1]
      },
      labels: [
        "01 Jan 2022",
        "02 Jan 2022",
        "03 Jan 2022",
        "04 Jan 2022",
        "05 Jan 2022",
        "06 Jan 2022",
        "07 Jan 2022",
        "08 Jan 2022",
        "09 Jan 2022",
        "10 Jan 2022",
        "11 Jan 2022",
        "12 Jan 2022"
      ],
      xaxis: {
        type: "datetime"
      },
      yaxis: [
        {
          title: {
            text: "Alerts"
          }
        },
        {
          opposite: true,
          title: {
            text: "Warnings"
          }
        }
      ]
    };
  }

  ngOnInit(): void {
  }
}


