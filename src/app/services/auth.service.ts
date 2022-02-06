import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { User } from '@app/_models/user';

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  private URL = 'http://localhost:3000/api';

  constructor(private http: HttpClient) { }

  signUpUser(user: User) {
    return this.http.post<any>(this.URL + '/signup', user);
  }
}
