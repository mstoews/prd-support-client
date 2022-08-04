import { Component, OnInit, ViewChild } from '@angular/core';
import { BreakpointObserver, Breakpoints } from '@angular/cdk/layout';
import { map, Observable, shareReplay } from 'rxjs';
import { MatDrawer } from '@angular/material/sidenav';

@Component({
  selector: 'app-grid-css',
  templateUrl: './grid-css.component.html',
})
export class GridCssComponent implements OnInit {

  constructor(private breakpointObserver: BreakpointObserver) { }
  ngOnInit(): void {
    throw new Error('Method not implemented.');
  }

  loading = false;
  public onSideNavChange: boolean;

  @ViewChild('drawer', { static: true }) public drawer!: MatDrawer;
  bSideNavMenu!: boolean;
  divClicked = false;
  isClicked = false;
  doAnimation = false;
  envConnected: string = localStorage.getItem('env');
  isHandset$: Observable<boolean> = this.breakpointObserver
    .observe([Breakpoints.Handset])
    .pipe(
      map((result) => result.matches),
      shareReplay()
    );

  doAnimate() {
    if (this.doAnimation === true) {
      this.doAnimation = false;
    }
  }

}
