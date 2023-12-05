import { initalState, pointTableState } from './point-table.state';
import * as Action from './point-table.actions';
import { createReducer, on } from '@ngrx/store';

export const pointTableReducer = createReducer(
  initalState,
  on(Action.getPointTableStart, (state) => ({
    ...state,
    loading: true,
  })),
  on(Action.getPointTableSuccess, (state, action) => ({
    ...state,
    loading: false,
    pointTable: action.pointTable,
  })),
  on(Action.getPointTableFail, (state) => ({
    ...state,
    loading: false,
  })),
  on(Action.searchPointTableStart, (state) => ({
    ...state,
    loading: true,
  })),
  on(Action.searchPointTableSuccess, (state, action) => ({
    ...state,
    loading: false,
    data: action.pointTable,
  }))
);
