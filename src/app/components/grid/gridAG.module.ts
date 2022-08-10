import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { GridAGComponent } from './grid.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { AgGridModule } from '@ag-grid-community/angular';
import { MatProgressSpinnerModule } from '@angular/material/progress-spinner';
import { MenuBarService } from 'app/services/menu.bar.service';
import { MatToolbarModule } from '@angular/material/toolbar';
import { MatButtonModule } from '@angular/material/button';
import { MatIconModule } from '@angular/material/icon';
import { ProgressComponent } from '../progress/progress.component';
import { IconsModule } from 'app/icons.module';

// ModuleRegistry.registerModules([ClientSideRowModelModule, CsvExportModule]);

@NgModule({
  declarations: [
    GridAGComponent,
  ],
  imports: [
    CommonModule,
    AgGridModule,
    FormsModule,
    ReactiveFormsModule,
    MatProgressSpinnerModule,
    MatToolbarModule,
    MatButtonModule,
    MatIconModule,
    ProgressComponent,
    IconsModule,
  ],
  exports: [GridAGComponent],
  providers: [MenuBarService ],
})
export class GridAGModule {}
