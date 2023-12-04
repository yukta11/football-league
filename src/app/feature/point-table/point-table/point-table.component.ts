import { Component, OnInit } from '@angular/core';
import { ServiceService } from 'src/app/service.service';
import { PointTableModel } from 'src/app/shared/types/point-table.types';
import { PointTableService } from '../service/point-table.service';
import { Store } from '@ngrx/store';
import {
  deletePointTableStart,
  getPointTableStart,
} from '../store/point-table.actions';
import { selectPointTableData } from '../store/point-table.selectors';
import { Observable, every } from 'rxjs';
import { MatDialog } from '@angular/material/dialog';
import { TablePopupComponent } from 'src/app/shared/custom-table/custom-table/table-popup/table-popup.component';
import { MatTableDataSource } from '@angular/material/table';

@Component({
  selector: 'app-point-table',
  templateUrl: './point-table.component.html',
  styleUrls: ['./point-table.component.scss'],
})
export class PointTableComponent implements OnInit {
  displayedColumns: string[] = [
    'position',
    'team',
    'played',
    'win',
    'draw',
    'loss',
    'points',
    'Edit',
    'Delete',
  ];
  dataSource: Observable<PointTableModel[]>;

  constructor(
    private store: Store,
    private dialog: MatDialog,
    private pointableService: PointTableService
  ) {}
  ngOnInit(): void {
    this.store.dispatch(getPointTableStart());
    this.dataSource = this.store.select(selectPointTableData);

    // this.dataSource = new MatTableDataSource();
    console.log('dataSource', this.dataSource);
  }
  getEditData(row) {
    this.openTableRowDetail('edit', row);
  }
  getDeletedrowData(row) {
    this.store.dispatch(deletePointTableStart({ data: row }));
  }
  onAddNewTeam() {
    this.openTableRowDetail('add');
  }
  openTableRowDetail(action: string, row?: PointTableModel) {
    const dialogRef = this.dialog.open(TablePopupComponent, {
      data: {
        tablerow: row ?? {},
        action: action,
      },
    });
    dialogRef.afterClosed().subscribe((response) => {
      this.store.dispatch(getPointTableStart());
      this.store.select(selectPointTableData).subscribe((data) => {});
    });
  }
  searchTeam(searchedValue) {
    console.log(searchedValue.target.value);
    this.dataSource = this.pointableService.searchTeam(
      searchedValue.target.value
    );
  }
}
