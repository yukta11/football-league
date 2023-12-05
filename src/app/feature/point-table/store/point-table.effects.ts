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
          catchError(() => of(Action.getPointTableFail()))
        )
      )
    )
  );

  editPointTable$ = createEffect(() =>
    this.action$.pipe(
      ofType(Action.editPointTableStart),
      switchMap((action) =>
        this.pointTableService.editTeamRowData(action.data).pipe(
          map((response) => Action.editPointTableSuccess()),
          catchError(() => of(Action.editPointTableFail()))
        )
      )
    )
  );
  addPointTable$ = createEffect(() =>
    this.action$.pipe(
      ofType(Action.addPointTableStart),
      switchMap((action) =>
        this.pointTableService.addTeamRowData(action.data).pipe(
          map((response) => Action.addPointTableSuccess()),
          catchError(() => of(Action.addPointTableFail()))
        )
      )
    )
  );
  deletePointTable$ = createEffect(() =>
    this.action$.pipe(
      ofType(Action.deletePointTableStart),
      switchMap((action) =>
        this.pointTableService.deleteTeamRowData(action.data).pipe(
          map((response) => Action.deletePointTableSuccess()),
          catchError(() => of(Action.deletePointTableFail()))
        )
      )
    )
  );

  addedPointTable$ = createEffect(() =>
    this.action$.pipe(
      ofType(Action.addPointTableSuccess),
      switchMap(() => of(Action.getPointTableStart()))
    )
  );

  updatedPointTable$ = createEffect(() =>
    this.action$.pipe(
      ofType(Action.editPointTableSuccess),
      switchMap(() => of(Action.getPointTableStart()))
    )
  );

  deleteSuccessPointTable$ = createEffect(() =>
    this.action$.pipe(
      ofType(Action.deletePointTableSuccess),
      map(() => Action.getPointTableStart())
    )
  );

  searchPointTable$ = createEffect(() =>
    this.action$.pipe(
      ofType(Action.searchPointTableStart),
      switchMap(({ query }) =>
        this.pointTableService.searchTeam(query).pipe(
          map((response) =>
            Action.getPointTableSuccess({ pointTable: response })
          ),
          catchError(() => of(Action.addPointTableFail()))
        )
      )
    )
  );
}
