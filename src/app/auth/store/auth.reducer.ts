// auth.reducer.ts
import { createReducer, on } from '@ngrx/store';
import * as AuthActions from './auth.actions';
import { initialState } from './auth.state';

export const authReducer = createReducer(
  initialState,
  on(AuthActions.login, (state) => ({ ...state, isLoading: true })),
  on(AuthActions.loginSuccess, (state, { user }) => {
    return { ...state, user, isAuthenticated: true, isLoading: false };
  }),
  on(AuthActions.loginFailure, (state) => {
    return { ...state, user: null, isAuthenticated: false, isLoading: false };
  }),
  on(AuthActions.logout, (state) => {
    return { ...state, user: null, isAuthenticated: false };
  })
);
