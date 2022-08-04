import { Component, OnInit } from '@angular/core';
import { MaterialModule } from '../../MaterialModule';
import { IconsModule } from '../../icons.module';

@Component({
  standalone: true,
  imports: [MaterialModule, IconsModule],
  selector: 'app-sidenav',
  templateUrl: './sidenav.component.html',
})
export class SideNavComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }

}
