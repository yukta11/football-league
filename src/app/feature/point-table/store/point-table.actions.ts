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

export const editPointTableStart = createAction(
  '[ Point Table ] editPointTable start',
  props<{ data: PointTableModel }>()
);
export const editPointTableSuccess = createAction(
  '[ Point Table ] editPointTable success'
);
export const editPointTableFail = createAction(
  '[ Point Table ] editPointTable fail'
);

export const addPointTableStart = createAction(
  '[ Point Table ] addPointTable start',
  props<{ data: PointTableModel }>()
);
export const addPointTableSuccess = createAction(
  '[ Point Table ] addPointTable success'
);
export const addPointTableFail = createAction(
  '[ Point Table ] addPointTable fail'
);

export const deletePointTableStart = createAction(
  '[Point Table] deletePointTable start',
  props<{ data: PointTableModel }>()
);
export const deletePointTableSuccess = createAction(
  '[Point Table] deletePointTable success'
);
export const deletePointTableFail = createAction(
  '[Point Table] deletePointTable fail'
);
export const searchPointTableStart = createAction(
  '[Point Table] searchPointTable start',
  props<{ query: string }>()
);
export const searchPointTableSuccess = createAction(
  '[Point Table] searchPointTable success',
  props<{ pointTable: PointTableModel[] }>()
);
export const searchPointTableFail = createAction(
  '[Point Table] searchPointTable fail'
);
