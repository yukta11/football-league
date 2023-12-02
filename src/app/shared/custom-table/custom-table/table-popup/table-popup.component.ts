import { Component, Inject, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { MAT_DIALOG_DATA, MatDialogRef } from '@angular/material/dialog';
import { PointTableService } from 'src/app/feature/point-table/service/point-table.service';
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
    private pointtableService: PointTableService
  ) {
    this.datasource = data.tablerow;
  }
  ngOnInit(): void {
    this.tableRowForm = this._formBuilder.group({
      id: [],
      position: [],
      team: ['', Validators.required],
      played: [
        '',
        [Validators.required, Validators.pattern('^(0|[1-9][0-9]*)$')],
      ],
      win: ['', Validators.required],
      draw: ['', Validators.required],
      loss: ['', Validators.required],
      points: ['', Validators.required],
    });
    this.tableRowForm.patchValue({
      id: this.datasource.id,
      position: this.datasource.position,
      team: this.datasource.team,
      played: this.datasource.played,
      win: this.datasource.win,
      draw: this.datasource.draw,
      loss: this.datasource.loss,
      points: this.datasource.points,
    });
  }
  onUpdate() {
    if (this.tableRowForm.invalid) {
      this.tableRowForm.markAllAsTouched();
      return;
    } else if (this.tableRowForm.valid) {
      console.log(this.tableRowForm.value);
      this.pointtableService
        .editTeamRowData(this.tableRowForm.value)
        .subscribe({
          next: (response) => {},
        });
    }
  }
  closeDialog() {
    this.dialogRef.close();
  }
}
