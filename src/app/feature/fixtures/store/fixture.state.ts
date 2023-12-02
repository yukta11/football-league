import { fixturemodel } from 'src/app/shared/types/fixture.types';

export interface matchFixtureState {
  loading: boolean;
  fixtureData: fixturemodel[];
  error: string;
}
export const initalState: matchFixtureState = {
  loading: false,
  fixtureData: [],
  error: '',
};
