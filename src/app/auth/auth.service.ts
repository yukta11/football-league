// auth.service.ts

import { Injectable } from '@angular/core';
import { Observable, of } from 'rxjs';
import { userdetailModel } from '../shared/types/user-details.type';

@Injectable({
  providedIn: 'root',
})
export class AuthService {
  login(
    username: string,
    password: string
  ): Observable<userdetailModel | null> {
    if (username === 'yukta' && password === 'Admin@123') {
      console.log('passed');
      const user: userdetailModel = { username, token: 'mocked-token' };
      localStorage.setItem('user', JSON.stringify(user));
      return of(user);
    } else {
      return of(null);
    }
  }

  logout(): void {
    localStorage.removeItem('user');
  }

  isAuthenticated(): boolean {
    return !!localStorage.getItem('user');
  }
}
