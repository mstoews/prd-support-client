import { CommonModule } from '@angular/common';
import { NgModule, Component } from '@angular/core';
import { RouterModule } from '@angular/router';
import { SideNavComponent } from '../sidenav/sidenav.component';
import { FooterComponent } from '../../components/footer/footer.component';
import { ShellComponent } from '../shell.component';
import { MenubarComponent } from 'app/modules/dashboard/menubar/menubar.component';
import { NavItemComponent } from '../static-sidebar/nav-list-item/nav-item.component';
import { StaticSidebarComponent } from '../static-sidebar/static-sidebar.component';
import { MaterialModule } from '../../MaterialModule';

const components = [
  ShellComponent,
  StaticSidebarComponent,
  MenubarComponent,
  NavItemComponent,
  FooterComponent,
  SideNavComponent,
];

const modules = [
  CommonModule,
  RouterModule,
  MaterialModule
];


@NgModule({
  declarations: [...components],
  imports: [...modules],
  exports: [...components, ...modules],
})
export class SharedModule {}
