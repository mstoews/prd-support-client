import { CommonModule } from '@angular/common';
import { Component, Input, OnInit, ViewChild } from '@angular/core';
import { IconsModule } from 'app/icons.module';
import { MaterialModule } from 'app/MaterialModule';

@Component({
  standalone: true,
  imports: [MaterialModule, CommonModule, IconsModule],
  selector: 'data-card',
  templateUrl: './data-card.component.html',
})
export class DataCardComponent implements OnInit {
  @Input() amount: number = 14;
  @Input() percentage_change: number = 10;
  @Input() trending: boolean = true;
  @Input() comment: string = 'meeting expectations';
  @Input() title: string = 'GLOSS';
  @Input() header: string = 'Alerts'
  @Input() current_date!: string;

  constructor() { }

  ngOnInit(): void {
    let today = new Date();
    this.current_date = today.toLocaleDateString();
  }

}
