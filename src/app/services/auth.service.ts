import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { User } from '@app/_models/user';
import {Router} from '@angular/router'

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  private URL = 'http://localhost:3000/api';

  constructor(private http: HttpClient, private router: Router) { }

  signUpUser(user: User) {
    return this.http.post<any>(this.URL + '/signup', user);
  }

  signInUser(user: User) {
    return this.http.post<any>(this.URL + '/signin', user);
  }

  loggedIn(): Boolean {
    if (localStorage.getItem('token')) {
      return true;
    }
    return false;
  }

  getToken() {
    return localStorage.getItem('token');
  }

  logout() {
    localStorage.removeItem('token');
    this.router.navigate(['/mi-cuenta']);
  }
}

