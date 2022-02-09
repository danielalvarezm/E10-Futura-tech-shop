import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { User } from '@app/frontend/_models/user';
import { Router } from '@angular/router'

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  public URL = 'http://10.6.129.122/api';

  constructor(private http: HttpClient, private router: Router) { }

  // Verificar si un email esta en la base de datos
  getUser(email: string) {
    return this.http.get<any>(this.URL + '/getUser/' + email);
  }

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

  logout() {
    localStorage.clear();
  }

  getToken() {
    return localStorage.getItem('token');
  }
}

