import { LayoutModule } from '@angular/cdk/layout';
import { CommonModule } from '@angular/common';
import { NgModule, Component } from '@angular/core';
import { MatAutocompleteModule } from '@angular/material/autocomplete';
import { MatBadgeModule } from '@angular/material/badge';
import { MatButtonModule } from '@angular/material/button';
import { MatCardModule } from '@angular/material/card';
import { MatCheckboxModule } from '@angular/material/checkbox';
import { MatNativeDateModule, MatRippleModule } from '@angular/material/core';
import { MatDatepickerModule } from '@angular/material/datepicker';
import { MatDialogModule } from '@angular/material/dialog';
import { MatExpansionModule } from '@angular/material/expansion';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatIconModule } from '@angular/material/icon';
import { MatInputModule } from '@angular/material/input';
import { MatListModule } from '@angular/material/list';
import { MatMenuModule } from '@angular/material/menu';
import { MatProgressSpinnerModule } from '@angular/material/progress-spinner';
import { MatRadioModule } from '@angular/material/radio';
import { MatSelectModule } from '@angular/material/select';
import { MatSidenavModule } from '@angular/material/sidenav';
import { MatSnackBarModule } from '@angular/material/snack-bar';
import { MatTableModule } from '@angular/material/table';
import { MatTabsModule } from '@angular/material/tabs';
import { MatToolbarModule } from '@angular/material/toolbar';
import { MatTooltipModule } from '@angular/material/tooltip';
import { RouterModule } from '@angular/router';
import { SideNavComponent } from '../../components/sidenav/sidenav.component';
import { FooterComponent } from '../../components/footer/footer.component';
import { ShellComponent } from '../shell.component';
import { MenubarComponent } from 'app/components/menubar/menubar.component';
import { NavItemComponent } from '../static-sidebar/nav-list-item/nav-item.component';
import { StaticSidebarComponent } from '../static-sidebar/static-sidebar.component';
import { LandingPageComponent } from 'app/components/landing-page/landing-page.component';
import { FeatureComponent } from '../../components/feature/feature.component';
import { SharedRoutingModule } from './shared-routing.module';
import { AlertsComponent } from '../../components/alerts/alerts.component';

const components = [
  ShellComponent,
  LandingPageComponent,
  StaticSidebarComponent,
  MenubarComponent,
  NavItemComponent,
  FooterComponent,
  SideNavComponent,
];

const modules = [
  CommonModule,
  RouterModule,
  MatExpansionModule,
  MatToolbarModule,
  MatIconModule,
  LayoutModule,
  MatButtonModule,
  MatSidenavModule,
  MatListModule,
  MatMenuModule,
  MatCardModule,
  MatFormFieldModule,
  MatInputModule,
  MatSnackBarModule,
  MatTableModule,
  MatBadgeModule,
  MatSelectModule,
  MatCheckboxModule,
  MatTabsModule,
  MatDialogModule,
  MatRadioModule,
  MatDatepickerModule,
  MatNativeDateModule,
  MatRippleModule,
  MatRadioModule,
  MatTooltipModule,
  MatProgressSpinnerModule,
  MatAutocompleteModule,
  SharedRoutingModule,
  FeatureComponent,
  AlertsComponent,
];


@NgModule({
  declarations: [...components],
  imports: [...modules],
  exports: [...components, ...modules],
})
export class SharedModule {}
