import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { FixturesRoutingModule } from './fixtures-routing.module';
import { FixturesComponent } from './fixtures/fixtures.component';


@NgModule({
  declarations: [
    FixturesComponent
  ],
  imports: [
    CommonModule,
    FixturesRoutingModule
  ]
})
export class FixturesModule { }
