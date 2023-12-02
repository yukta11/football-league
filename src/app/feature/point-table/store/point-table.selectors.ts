import { createFeatureSelector, createSelector } from '@ngrx/store';
import { pointTableState } from './point-table.state';

export const selectPointTableState =
  createFeatureSelector<pointTableState>('pointTable');

export const selectPointTableLoading = createSelector(
  selectPointTableState,
  (state) => state.loading
);
export const selectPointTableData = createSelector(
  selectPointTableState,
  (state) => state.pointTable
);
