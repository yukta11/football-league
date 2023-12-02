import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { FixturesRoutingModule } from './fixtures-routing.module';
import { FixturesComponent } from './fixtures/fixtures.component';
import { SharedModule } from 'src/app/shared/shared.module';

@NgModule({
  declarations: [FixturesComponent],
  imports: [CommonModule, FixturesRoutingModule, SharedModule],
})
export class FixturesModule {}
