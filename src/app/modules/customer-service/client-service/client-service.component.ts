import {Component, OnInit} from '@angular/core';
import { PrdService } from 'app/services/prd.service';
import { Observable } from 'rxjs';

@Component({
  selector: 'app-clients',
  templateUrl: './client-service.component.html',

})
export class ClientServiceComponent implements OnInit {
  cs$!: Observable<any[]>; // client service
  cols: any;

  constructor(private prdService: PrdService) {

  }
  onNotify(event: any) {
    console.log(event);
  }

  ngOnInit(): void {
    this.cs$ = this.prdService.getClientServiceList();
    this.cols = this.prdService.getClientServiceCols();
  }

  onTabClick(event: any) {
    console.log(event);
  }

}
