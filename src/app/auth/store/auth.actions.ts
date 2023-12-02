// auth.actions.ts

import { createAction, props } from '@ngrx/store';
import { userdetailModel } from 'src/app/shared/types/user-details.type';

export const login = createAction(
  '[Auth] Login',
  props<{ username: string; password: string }>()
);

export const loginSuccess = createAction(
  '[Auth] Login Success',
  props<{ user: userdetailModel }>()
);

export const loginFailure = createAction('[Auth] Login Failure');

export const logout = createAction('[Auth] Logout');
