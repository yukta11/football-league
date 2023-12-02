import { Component, ViewEncapsulation, OnInit } from '@angular/core';
import { Store } from '@ngrx/store';
import { getMatchFixtureStart } from '../store/fixture.actions';
import { selectMatchFixtureData } from '../store/fixture.selectors';
import { fixturemodel } from 'src/app/shared/types/fixture.types';
import { Observable } from 'rxjs';

@Component({
  selector: 'app-fixtures',
  templateUrl: './fixtures.component.html',
  styleUrls: ['./fixtures.component.scss'],
  encapsulation: ViewEncapsulation.None,
})
export class FixturesComponent implements OnInit {
  matchFixtureData$: Observable<fixturemodel[]>;
  constructor(private store: Store) {}
  ngOnInit(): void {
    this.store.dispatch(getMatchFixtureStart());
    this.matchFixtureData$ = this.store.select(selectMatchFixtureData);
  }
}
