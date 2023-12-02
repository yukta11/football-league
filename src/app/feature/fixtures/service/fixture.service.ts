import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { fixturemodel } from 'src/app/shared/types/fixture.types';
import { environment } from 'src/environment/environment';

@Injectable({
  providedIn: 'root',
})
export class FixtureService {
  constructor(private readonly http: HttpClient) {}
  getMatchFixture() {
    return this.http.get<fixturemodel[]>(`${environment.baseUrl}/fixture`);
  }
}
