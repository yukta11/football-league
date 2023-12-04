import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { PointTableRoutingModule } from './point-table-routing.module';
import { PointTableComponent } from './point-table/point-table.component';
import { CustomtableModule } from 'src/app/shared/custom-table/customtable/customtable.module';
import { SharedModule } from 'src/app/shared/shared.module';

@NgModule({
  declarations: [PointTableComponent],
  imports: [
    CommonModule,
    PointTableRoutingModule,
    CustomtableModule,
    SharedModule,
  ],
})
export class PointTableModule {}
