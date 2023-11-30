import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MatTableModule } from '@angular/material/table';
import { MatIconModule } from '@angular/material/icon'; // I
import { CustomTableComponent } from '../custom-table/custom-table.component';
import { CommonModule } from '@angular/common';

@NgModule({
  declarations: [CustomTableComponent],
  imports: [CommonModule, MatTableModule, MatIconModule],
  exports: [CustomTableComponent],
})
export class CustomtableModule {}
