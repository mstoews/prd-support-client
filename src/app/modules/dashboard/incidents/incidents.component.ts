import { Component, OnInit } from '@angular/core';
import { ScrollService } from 'app/services/scroll.service';

@Component({
  selector: 'app-incidents',
  templateUrl: './incidents.component.html',
})
export class IncidentsComponent implements OnInit {
  title = 'Incident Frequency';
  constructor(
    private scrollTo: ScrollService) {}
  ngOnInit(): void {}

  scrollToId(id: string) {
    console.log("element id : ", id);
    this.scrollTo.scrollToElementById(id);
    if (id === 'hero') {
      window.scrollTo(0, 0)
    }
  }


}
