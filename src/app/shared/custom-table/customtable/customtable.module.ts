import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MatTableModule } from '@angular/material/table';
import { MatIconModule } from '@angular/material/icon'; // I
import { CustomTableComponent } from '../custom-table/custom-table.component';
import { CommonModule } from '@angular/common';
import { MatButtonModule } from '@angular/material/button';
import { TablePopupComponent } from '../custom-table/table-popup/table-popup.component';
import { MatDialogModule } from '@angular/material/dialog';
import { SharedModule } from '../../shared.module';

@NgModule({
  declarations: [CustomTableComponent, TablePopupComponent],
  imports: [
    CommonModule,
    MatTableModule,
    MatIconModule,
    MatButtonModule,
    MatDialogModule,
    SharedModule,
  ],
  exports: [CustomTableComponent],
})
export class CustomtableModule {}
