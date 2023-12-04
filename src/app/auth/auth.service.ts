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
    if (username === 'admin' && password === 'admin') {
      const user: userdetailModel = { username, token: 'Authenticated_token' };
      this.setItemInLocalStorage(user);
      return of(user);
    } else {
      return of(null);
    }
  }
  setItemInLocalStorage(user) {
    localStorage.setItem('user', JSON.stringify(user));
  }

  logout(): void {
    localStorage.removeItem('user');
  }

  isAuthenticated(): boolean {
    return !!localStorage.getItem('user');
  }
}
