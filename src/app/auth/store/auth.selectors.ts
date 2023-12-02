import { createFeatureSelector, createSelector } from '@ngrx/store';
import { authState } from './auth.state';
import { state } from '@angular/animations';

export const selectLoginState = createFeatureSelector<authState>('auth');
export const selectLoginLoading = createSelector(
  selectLoginState,
  (state) => state.isLoading
);
export const selectLoginData = createSelector(
  selectLoginState,
  (state) => state.user
);
