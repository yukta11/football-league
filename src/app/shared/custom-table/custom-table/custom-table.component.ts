import { Component, EventEmitter, Input, Output } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { DomSanitizer, SafeResourceUrl } from '@angular/platform-browser';
import { TablePopupComponent } from './table-popup/table-popup.component';
import { PointTableModel } from '../../types/point-table.types';

@Component({
  selector: 'app-custom-table',
  templateUrl: './custom-table.component.html',
  styleUrls: ['./custom-table.component.scss'],
})
export class CustomTableComponent {
  @Input() columns: string[] = [];
  @Input() dataSource: any[] = [];
  @Output() onEditClick: EventEmitter<any> = new EventEmitter();
  constructor(private dialog: MatDialog) {}

  onEdit(row: PointTableModel) {
    // console.log('row', row);
    // this.openTableRowDetail('edit', row);
    this.onEditClick.emit(row);
  }
  onDelete(row: PointTableModel) {
    console.log('row', row);
    this.openTableRowDetail('delete', row);
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
