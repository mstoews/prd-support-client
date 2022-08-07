import { Component, OnInit, ViewChild } from '@angular/core';
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
  selector: 'app-pie',
  templateUrl: './pie.component.html',
  styleUrls: ['./pie.component.css']
})
export class PieComponent implements OnInit {

  @ViewChild("chart")
  chart: ApexAxisChartSeries | ApexNonAxisChartSeries = [];
  public chartOptions: Partial<ChartOptions> | any;
  public amount: number = 24;

  constructor() { }

  ngOnInit(): void {
  }

}

