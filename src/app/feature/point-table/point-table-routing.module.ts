import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { PointTableComponent } from './point-table/point-table.component';

const routes: Routes = [
  {
    path: '',
    component: PointTableComponent,
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class PointTableRoutingModule {}
