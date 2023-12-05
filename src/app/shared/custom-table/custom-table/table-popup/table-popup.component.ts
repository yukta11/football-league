import { Component, Inject, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { MAT_DIALOG_DATA, MatDialogRef } from '@angular/material/dialog';
import { Store } from '@ngrx/store';
import { PointTableService } from 'src/app/feature/point-table/service/point-table.service';
import {
  addPointTableStart,
  addPointTableSuccess,
  editPointTableStart,
} from 'src/app/feature/point-table/store/point-table.actions';
import { PointTableModel } from 'src/app/shared/types/point-table.types';

@Component({
  selector: 'app-table-popup',
  templateUrl: './table-popup.component.html',
  styleUrls: ['./table-popup.component.scss'],
})
export class TablePopupComponent implements OnInit {
  tableRowForm: FormGroup;
  datasource: PointTableModel;
  columns: string[] = [
    'position',
    'team',
    'played',
    'win',
    'draw',
    'loss',
    'points',
  ];
  constructor(
    private dialogRef: MatDialogRef<TablePopupComponent>,
    private _formBuilder: FormBuilder,
    @Inject(MAT_DIALOG_DATA) public data: any,
    private pointtableService: PointTableService,
    private store: Store
  ) {
    this.datasource = data.tablerow;
    console.log(this.datasource);
  }
  ngOnInit(): void {
    this.tableRowForm = this._formBuilder.group({
      id: [],
      position: [],
      team: ['', Validators.required],
      imagepath: ['', Validators.required],
      played: [
        '',
        [Validators.required, Validators.pattern('^(0|[1-9][0-9]*)$')],
      ],
      win: ['', [Validators.required, Validators.pattern('^(0|[1-9][0-9]*)$')]],
      draw: [
        '',
        [Validators.required, Validators.pattern('^(0|[1-9][0-9]*)$')],
      ],
      loss: [
        '',
        [Validators.required, Validators.pattern('^(0|[1-9][0-9]*)$')],
      ],
      points: [
        '',
        [Validators.required, Validators.pattern('^(0|[1-9][0-9]*)$')],
      ],
    });

    this.tableRowForm.patchValue({
      id: this.datasource.id,
      position: this.datasource.position,
      team: this.datasource.team,
      imagepath: this.datasource.imagepath,
      played: this.datasource.played,
      win: this.datasource.win,
      draw: this.datasource.draw,
      loss: this.datasource.loss,
      points: this.datasource.points,
    });
  }

  onAdd() {
    if (this.tableRowForm.invalid) {
      this.tableRowForm.markAllAsTouched();
      return;
    } else if (this.tableRowForm.valid) {
      this.store.dispatch(
        addPointTableStart({ data: this.tableRowForm.value })
      );
      this.dialogRef.close(this.tableRowForm.value);
    }
  }

  onUpdate() {
    if (this.tableRowForm.invalid) {
      this.tableRowForm.markAllAsTouched();
      return;
    } else if (this.tableRowForm.valid) {
      this.store.dispatch(
        editPointTableStart({ data: this.tableRowForm.value })
      );
      this.dialogRef.close(this.tableRowForm.value);
    }
  }

  closeDialog() {
    this.dialogRef.close();
  }
}
