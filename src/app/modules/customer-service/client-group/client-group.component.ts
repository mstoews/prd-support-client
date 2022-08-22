import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-client-group',
  templateUrl: './client-group.component.html',
})

export class ClientGroupComponent implements OnInit {
  constructor() { }
  ngOnInit(): void {}
  onTabClick($event: any) {
    console.log($event);
  }
}
