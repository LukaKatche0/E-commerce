import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { environment } from '../../environments/environment';
import { UserModel } from '../models/user.model';

@Injectable({
  providedIn: 'root'
})
export class AuthService {
  apiUrl = environment.apiUrl + '/users';
  constructor(private http: HttpClient) { }

  logIn(user: UserModel) {
    localStorage.setItem('user', JSON.stringify(user));
    // return this.http.post<UserModel>(this.apiUrl, user);
  }

  getUserInfo() {
    return JSON.parse(localStorage.getItem('user'));
  }

  logOut() {
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
}
