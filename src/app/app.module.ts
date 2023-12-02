import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

import { FormsModule } from '@angular/forms';

import { MatOptionModule } from '@angular/material/core';
import { HttpClientModule } from '@angular/common/http';
import { SharedModule } from './shared/shared.module';
import { StoreModule } from '@ngrx/store';
import { pointTableReducer } from './feature/point-table/store/point-table.reducer';
import { PointTableEffects } from './feature/point-table/store/point-table.effects';
import { EffectsModule } from '@ngrx/effects';
import { AuthEffects } from './auth/store/auth.effects';
import { authReducer } from './auth/store/auth.reducer';
import { matchFixtureReducer } from './feature/fixtures/store/fixture.reducer';
import { matchFixtureEffects } from './feature/fixtures/store/fixture.effects';

@NgModule({
  declarations: [AppComponent],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    FormsModule,
    MatOptionModule,
    SharedModule,
    StoreModule.forRoot({
      pointTable: pointTableReducer,
      auth: authReducer,
      fixtureData: matchFixtureReducer,
    }),
    EffectsModule.forRoot([
      PointTableEffects,
      AuthEffects,
      matchFixtureEffects,
    ]),
  ],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
