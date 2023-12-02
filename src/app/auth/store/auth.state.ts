import { userdetailModel } from 'src/app/shared/types/user-details.type';

export interface authState {
  user: userdetailModel | null;
  isAuthenticated: boolean;
  isLoading: boolean;
}
export const initialState: authState = {
  user: null,
  isAuthenticated: false,
  isLoading: false,
};
