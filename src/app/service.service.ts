import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root',
})
export class ServiceService {
  // basepath = 'https://heisenbug-premier-league-live-scores-v1.p.rapidapi.com';
  // fullpath = this.basepath + '/api/premierleague/table';
  // headers: HttpHeaders = new HttpHeaders({
  //   'X-RapidAPI-Key': '6e0412a7b5mshedace9afe74f6a9p1ead7bjsn52c4aa5603c4',
  //   'X-RapidAPI-Host': 'heisenbug-premier-league-live-scores-v1.p.rapidapi.com',
  // });
  path = 'http://localhost:3000/point-table';
  constructor(private http: HttpClient) {}

  getLeagueTable() {
    // return this.http.get(this.fullpath, { headers: this.headers });
    return this.http.get(this.path);
  }
}
