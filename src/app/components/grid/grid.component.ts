import { AgGridAngular } from '@ag-grid-community/angular';
import { ClientSideRowModelModule } from '@ag-grid-community/client-side-row-model';
import { MatDialog } from '@angular/material/dialog';
import {
  Component,
  EventEmitter,
  Input,
  OnInit,
  Output,
  ViewChild,
} from '@angular/core';
import { MenuBarService } from 'app/services/menu.bar.service';
// import { PartyService } from 'app/services/dashboard.service';

@Component({
  selector: 'grid',
  template: `
    <ag-grid-angular
      class="grid-card"
      style="width: 100%;"
      class="ag-theme-alpine-dark"
      [defaultColDef]="defaultColDef"
      [enableRangeSelection]="true"
      [animateRows]="true"
      domLayout="autoHeight"
      [rowData]="rows"
      [singleClickEdit]="true"
      [columnDefs]="cols"
      (rowDoubleClicked)="onRowDoubleClicked($event)"
      (rowClicked)="onSelectionChanged($event)"
      (cellEditingStarted)="onCellEditingStarted($event)"
      (cellEditingStopped)="onCellEditingStopped($event)"
      [modules]="modules"
      (cellValueChanged)="onCellValueChanged($event)"
      (gridReady)="onGridReady($event)"
      [paginationPageSize]="paginationPageSize"
      [pagination]="true">
    </ag-grid-angular>
  `,
  styleUrls: ['./grid.component.scss'],
})
export class GridAGComponent implements OnInit {

  progress = 0;
  timer!: number;
  constructor(
    // private partyService: PartyService,
    private matDialog: MatDialog,
    private menuBarShowUploadService: MenuBarService
  ) {
    this.menuBarShowUploadService.uploadMenuState.subscribe((showBar) => {
      if (this.showBar === true) {
        this.showBar = false;
      } else {
        this.showBar = true;
      }
    });

  }
  @ViewChild('agGrid')
  agGrid!: AgGridAngular;

  @Output() private notifyOpenDialog: EventEmitter<any> = new EventEmitter();
  @Output() private notifyCellChange: EventEmitter<any> = new EventEmitter();
  @Output() private notifyFileUpload: EventEmitter<any> = new EventEmitter();

  rowSelection = '"multiple"';
  showBar = false;
  page = 0;
  private gridApi!: { getSelectedRows?: any; sizeColumnsToFit?: () => void; };
  private gridColumnApi: any;
  public colDef: any;
  // public autoGroupColumnDef: { minWidth: number; };
  public modules: any[] = [ClientSideRowModelModule];
  public paginationPageSize = 20;
  // public getRowNodeId;

  @Input()
  public cols!: any[];
  @Input()
  public rows!: any[];
  @Input() public defaultColDef: any;

  startOrResumeTimer() {
    // const step = 100;
    // this.timer = setInterval(() => {
    //   this.progress = this.progress + 1;
    //   if (this.progress >= 100) {
    //     clearInterval(this.timer);
    //   }
    // }, step);
  }

  onCellEditingStarted(event: any) {
    const data = event.node.data;
    //  console.log ('Started editing: now', data.party_ref);
  }

  onCellEditingStopped(event: any) {
    // this.updateRows();
    const data = event.node.data;
    //  console.log ('Stop editing: now', data.party_ref);
  }

  onCellValueChanged(event: any) {
    const data = event.node.data;
    this.notifyCellChange.emit(data);
  }

  onMenuOpened(event: any) {}

  onRowDoubleClicked(event: any) {
    const data = event.node.data;
    this.notifyOpenDialog.emit(data);
  }

  onCellClicked(event: any) {}

  onSelectionChanged(event: any) {
    const data = event.node.data;
    // this.partyService.setParty(data);
    // this.onSelectedPartyRef.emit(data);
  }

  ngOnInit() {
    if (this.colDef != null) {
      this.defaultColDef = this.colDef;
    } else {
      this.defaultColDef = {
        flex: 1,
        minWidth: 100,
        filter: true,
        sortable: true,
        resizable: true,
        suppressCellFlash: false,
        cellStyle: { color: '#5c5c5c' },
      };
    }
  }

  onRefreshGrid() {}

  onGridReady(params: { api: { sizeColumnsToFit: any; getSelectedRows?: any; }; columnApi: any; }) {
    this.gridApi = params.api;
    this.gridColumnApi = params.columnApi;
    params.api.sizeColumnsToFit();
  }

  onBtnExport() {
    const data = this.gridApi.getSelectedRows();
    for (const element of data) {
      delete element.__typename;
    }
    const blob = new Blob([JSON.stringify(data)], { type: 'text/json' });
    const anchor = document.createElement('a');
    anchor.download =
      'Extract' +
      new Date().toLocaleDateString() +
      '_' +
      new Date().toLocaleTimeString() +
      '.json';
    anchor.href = (window.webkitURL || window.URL).createObjectURL(blob);
    anchor.click();
  }

  onFileSelect(event: { target: { files: File[]; }; }) {
    const selectedFile: File = event.target.files[0];
    const fileReader: FileReader = new FileReader();
    fileReader.onload = (e) => {
      this.notifyFileUpload.emit(fileReader.result);
    };
    fileReader.readAsText(selectedFile);
  }

  loadjson(data: any) {
    console.log(`Create`);
  }

  create(data: any) {
    console.log(`Create`);
  }

  update(data: any) {
    console.log(`Cancel`);
  }
}
