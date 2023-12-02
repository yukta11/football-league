import { Component, OnInit } from '@angular/core';
import { ServiceService } from 'src/app/service.service';
import { PointTableModel } from 'src/app/shared/types/point-table.types';
import { PointTableService } from '../service/point-table.service';
import { Store } from '@ngrx/store';
import { getPointTableStart } from '../store/point-table.actions';
import { selectPointTableData } from '../store/point-table.selectors';
import { Observable } from 'rxjs';
import { MatDialog } from '@angular/material/dialog';
import { TablePopupComponent } from 'src/app/shared/custom-table/custom-table/table-popup/table-popup.component';

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

  constructor(private store: Store, private dialog: MatDialog) {}
  ngOnInit(): void {
    this.store.dispatch(getPointTableStart());
    this.dataSource = this.store.select(selectPointTableData);
  }
  getEditData(row) {
    this.openTableRowDetail('edit', row);
  }
  openTableRowDetail(action: string, row: PointTableModel) {
    const dialogRef = this.dialog.open(TablePopupComponent, {
      data: {
        tablerow: row,
        action: action,
      },
    });
  }
}
