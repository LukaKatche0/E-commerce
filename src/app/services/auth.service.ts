import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Subject } from 'rxjs';
import { environment } from '../../environments/environment';
import { UserModel } from '../models/user.model';

@Injectable({
  providedIn: 'root'
})
export class AuthService {
  apiUrl = environment.apiUrl + '/users';
  shouldUpdateBalance: Subject<void> = new Subject();
  constructor(private http: HttpClient) { }

  logIn(user: UserModel) {
    localStorage.setItem('user', JSON.stringify(user));
    // return this.http.post<UserModel>(this.apiUrl, user);
  }

  getUserInfo(): UserModel {
    return JSON.parse(localStorage.getItem('user'));
  }

  buyProduct(user: UserModel) {
    return this.http.put<UserModel>(`${this.apiUrl}/${user.id}`, user);
  }

  logOut() {
    localStorage.removeItem('token');
    localStorage.removeItem('user');
  }

  signUp(user: UserModel) {
    return this.http.post<UserModel>(this.apiUrl, user);
  }

  isUserLoggedIn(): boolean {
    const user = localStorage.getItem('user');
    if (user) {
      return true;
    } else {
      return false;
    }
  }

  getToken(){
    return localStorage.getItem('token');
  }
}
