import { createFeatureSelector, createSelector } from '@ngrx/store';
import { matchFixtureState } from './fixture.state';

export const selectMatchFixtureState =
  createFeatureSelector<matchFixtureState>('fixtureData');

export const selectorMatchFixtureLoading = createSelector(
  selectMatchFixtureState,
  (state) => state.loading
);
export const selectMatchFixtureData = createSelector(
  selectMatchFixtureState,
  (state) => state.fixtureData
);
