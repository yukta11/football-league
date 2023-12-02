import { Injectable } from '@angular/core';
import { Actions, createEffect, ofType } from '@ngrx/effects';
import { PointTableService } from '../service/point-table.service';
import * as Action from './point-table.actions';
import { catchError, map, of, switchMap } from 'rxjs';

@Injectable()
export class PointTableEffects {
  constructor(
    private action$: Actions,
    private pointTableService: PointTableService
  ) {}
  
  getPointTable$ = createEffect(() =>
    this.action$.pipe(
      ofType(Action.getPointTableStart),
      switchMap(() =>
        this.pointTableService.getPointTable().pipe(
          map((response) =>
            Action.getPointTableSuccess({ pointTable: response })
          ),
          catchError(() => of(Action.getPointTableFail))
        )
      )
    )
  );


}
