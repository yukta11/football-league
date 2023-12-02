import { createAction, props } from '@ngrx/store';
import { PointTableModel } from 'src/app/shared/types/point-table.types';

export const getPointTableStart = createAction(
  '[ Point Table ] getPointTable start'
);
export const getPointTableSuccess = createAction(
  '[ Point Table ] getPointTable success',
  props<{ pointTable: PointTableModel[] }>()
);
export const getPointTableFail = createAction(
  '[ Point Table ] getPointTable fail'
);
