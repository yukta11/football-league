import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { PointTableModel } from 'src/app/shared/types/point-table.types';
import { environment } from 'src/environment/environment';

@Injectable({
  providedIn: 'root',
})
export class PointTableService {
  constructor(private readonly http: HttpClient) {}

  getPointTable(): Observable<PointTableModel[]> {
    return this.http.get<PointTableModel[]>(
      `${environment.baseUrl}/point-table`
    );
  }
  editTeamRowData(data: any): Observable<any> {
    let id = data.id;
    return this.http.patch(`${environment.baseUrl}/point-table/${id}`, data);
  }
}
