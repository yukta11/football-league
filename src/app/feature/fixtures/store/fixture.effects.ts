import { Actions, createEffect, ofType } from '@ngrx/effects';
import { FixtureService } from '../service/fixture.service';
import { Injectable } from '@angular/core';
import * as Action from './fixture.actions';
import { catchError, map, of, switchMap } from 'rxjs';
@Injectable()
export class matchFixtureEffects {
  constructor(
    private action$: Actions,
    private fixtureService: FixtureService
  ) {}

  getmatchfixture$ = createEffect(() =>
    this.action$.pipe(
      ofType(Action.getMatchFixtureStart),
      switchMap(() =>
        this.fixtureService.getMatchFixture().pipe(
          map((response) =>
            Action.getMatchFixtureSuccess({ fixtureData: response })
          ),
          catchError(() => of(Action.getMatchFixtureFail))
        )
      )
    )
  );
}
