import { createAction, props } from '@ngrx/store';
import { fixturemodel } from 'src/app/shared/types/fixture.types';

export const getMatchFixtureStart = createAction('[fixture] getFixture start');

export const getMatchFixtureSuccess = createAction(
  '[fixture] getFixture success',
  props<{ fixtureData: fixturemodel[] }>()
);

export const getMatchFixtureFail = createAction('[fixture] getFixture fail');
