import { createReducer, on } from '@ngrx/store';
import { initalState } from './fixture.state';
import * as Action from './fixture.actions';

export const matchFixtureReducer = createReducer(
  initalState,
  on(Action.getMatchFixtureStart, (state) => ({
    ...state,
    loading: true,
  })),
  on(Action.getMatchFixtureSuccess, (state, action) => ({
    ...state,
    loading: false,
    fixtureData: action.fixtureData,
  })),
  on(Action.getMatchFixtureFail, (state) => ({
    ...state,
    loading: false,
  }))
);
