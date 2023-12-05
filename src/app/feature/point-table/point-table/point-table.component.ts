import { Component, OnInit } from '@angular/core';
import { ServiceService } from 'src/app/service.service';
import { PointTableModel } from 'src/app/shared/types/point-table.types';
import { PointTableService } from '../service/point-table.service';
import { Store } from '@ngrx/store';
import {
  deletePointTableStart,
  getPointTableStart,
  searchPointTableStart,
  searchPointTableSuccess,
} from '../store/point-table.actions';
import { selectPointTableData } from '../store/point-table.selectors';
import { Observable, debounceTime, every } from 'rxjs';
import { MatDialog } from '@angular/material/dialog';
import { TablePopupComponent } from 'src/app/shared/custom-table/custom-table/table-popup/table-popup.component';
import { MatTableDataSource } from '@angular/material/table';
import { matSnackBarService } from 'src/app/shared/snackbar.service';

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
    private pointableService: PointTableService,
    private matsnackService: matSnackBarService
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
    this.matsnackService.showTopSnackBar(row.team + ' ' + 'is deleted');
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
      if (response) {
        if (action.toLowerCase() === 'edit') {
          this.matsnackService.showTopSnackBar(
            response.team + ' ' + 'is updated!!!'
          );
        } else if (action.toLowerCase() === 'add') {
          this.matsnackService.showTopSnackBar(
            response.team + ' ' + 'is added!!!'
          );
        }
      }
    });
  }
  searchTeam(event) {
    console.log(event.target.value);
    this.store.dispatch(searchPointTableStart({ query: event.target.value }));

    // this.dataSource = this.pointableService.searchTeam(
    //   searchedValue.target.value
    // );
  }
}
