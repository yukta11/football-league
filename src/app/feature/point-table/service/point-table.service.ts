import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable, map } from 'rxjs';
import { PointTableModel } from 'src/app/shared/types/point-table.types';
import { environment } from 'src/environment/environment';

@Injectable({
  providedIn: 'root',
})
export class PointTableService {
  constructor(private readonly http: HttpClient) {}

  getPointTable(): Observable<PointTableModel[]> {
    return this.http
      .get<PointTableModel[]>(`${environment.baseUrl}/point-table`)
      .pipe(
        map((data) => {
          // Sort the data based on the "points" property
          return data.slice().sort((a, b) => +b.points - +a.points);
        })
      );
  }

  addTeamRowData(data: any): Observable<any> {
    return this.http.post(`${environment.baseUrl}/point-table`, data);
  }

  editTeamRowData(data: any): Observable<any> {
    let id = data.id;
    return this.http.patch(`${environment.baseUrl}/point-table/${id}`, data);
  }

  deleteTeamRowData(data: any): Observable<any> {
    let id = data.id;
    return this.http.delete(`${environment.baseUrl}/point-table/${id}`, data);
  }

  searchTeam(teamName: string): Observable<PointTableModel[]> {
    return this.http
      .get<PointTableModel[]>(
        `${environment.baseUrl}/point-table?team_like=${teamName}`
      )
      .pipe(
        map((data) => {
          // Sort the data based on the "points" property
          return data.slice().sort((a, b) => +b.points - +a.points);
        })
      );
  }
}
