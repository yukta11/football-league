import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { FeatureComponent } from './feature/feature.component';
import { AuthGuard } from '../guard/auth.guard';

const routes: Routes = [
  {
    path: '',
    component: FeatureComponent,
    canActivate: [AuthGuard],
    children: [
      {
        path: '',
        redirectTo: 'pointtable',
        pathMatch: 'full',
      },
      {
        path: 'pointtable',
        loadChildren: () =>
          import('./point-table/point-table.module').then(
            (m) => m.PointTableModule
          ),
      },
      {
        path: 'fixtures',
        loadChildren: () =>
          import('./fixtures/fixtures.module').then((m) => m.FixturesModule),
      },
    ],
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class FeatureRoutingModule {}
