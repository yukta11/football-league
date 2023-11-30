import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FeatureComponent } from './feature/feature.component';
import { FeatureRoutingModule } from './feature-routing.module';
import { SharedModule } from '../shared/shared.module';

@NgModule({
  declarations: [FeatureComponent],
  imports: [CommonModule, FeatureRoutingModule, SharedModule],
})
export class FeatureModule {}
